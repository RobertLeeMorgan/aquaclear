import express from "express";
import dotenv from "dotenv";
import rateLimit from "express-rate-limit";
import { AQUACLEAR_SYSTEM_PROMPT } from "../config/aiPrompt.js";

dotenv.config();
const router = express.Router();

/* -------------------- Rate Limiting -------------------- */
const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 5, // Max 5 requests per minute per IP
  message: { error: "Too many requests. Please try again later." },
});
router.use(limiter);

/* -------------------- Chatbot Route -------------------- */
router.post("/chatbot", async (req, res) => {
  console.log("🛰️  /api/chatbot endpoint hit");

  const { message } = req.body;
  if (!message || typeof message !== "string") {
    return res.status(400).json({ error: "Valid 'message' is required" });
  }

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: AQUACLEAR_SYSTEM_PROMPT,
          },
          { role: "user", content: message },
        ],
      }),
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (!response.ok) {
      const errText = await response.text();
      console.error("❌ OpenAI error:", errText);
      return res.status(response.status).json({
        error: "AI request failed",
        details: errText,
      });
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content ?? "No reply generated";

    console.log("✅ Chatbot reply sent.");
    return res.json({ reply });
  } catch (err: any) {
    if (err.name === "AbortError") {
      console.error("⏱️  OpenAI request timed out");
      return res.status(504).json({ error: "Request timed out" });
    }
    console.error("💥 Chatbot error:", err);
    return res.status(500).json({ error: "Server error" });
  }
});

export default router;