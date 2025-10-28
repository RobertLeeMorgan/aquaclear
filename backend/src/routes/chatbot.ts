import express from "express";
import rateLimit from "express-rate-limit";
import { z } from "zod";
import { chatbotSchema } from "../schemas/chatbotSchema.js";
import { AQUACLEAR_SYSTEM_PROMPT } from "../config/aiPrompt.js";

const router = express.Router();

/* -------------------- Rate Limiting -------------------- */
const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res) => {
    return res
      .status(429)
      .json({ error: "Rate limit exceeded", code: "RATE_LIMIT" });
  },
});
router.use(limiter);

/* -------------------- Chatbot Route -------------------- */
router.post("/chatbot", async (req, res) => {
  try {
    // --- Zod validation ---
    const parsed = chatbotSchema.safeParse(req.body);
    if (!parsed.success) {
      const errors = parsed.error.issues.map((i) => i.message).join(", ");
      return res.status(400).json({ error: errors, code: "VALIDATION_ERROR" });
    }

    const { message } = parsed.data;

    // --- Timeout and controller ---
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);

    // --- OpenAI request ---
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: AQUACLEAR_SYSTEM_PROMPT },
          { role: "user", content: message },
        ],
      }),
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (!response.ok) {
      const errText = await response.text();
      console.error("OpenAI error:", errText);

      if (response.status === 401) {
        return res.status(401).json({
          error: "Invalid or missing OpenAI API key",
          code: "OPENAI_AUTH",
        });
      }

      if (response.status === 429) {
        return res.status(429).json({
          error: "OpenAI rate limit exceeded",
          code: "OPENAI_LIMIT",
        });
      }

      return res.status(500).json({
        error: "OpenAI service error",
        code: "OPENAI_ERROR",
        details: errText,
      });
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content ?? "No reply generated";

    console.log("Chatbot reply sent.");
    return res.json({ reply });
  } catch (err: any) {
    if (err.name === "AbortError") {
      console.error("⏱️  OpenAI request timed out");
      return res.status(504).json({ error: "Request timed out", code: "TIMEOUT" });
    }

    console.error("Chatbot error:", err);
    return res.status(500).json({ error: "Server error", code: "SERVER_ERROR" });
  }
});

export default router;
