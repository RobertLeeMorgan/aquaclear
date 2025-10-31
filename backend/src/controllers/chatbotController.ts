// controllers/chatbotController.ts
import { Request, Response } from "express";
import { supabase } from "../supabaseClient.js";
import { getChatReply, Message } from "../services/openaiService.js";
import { getContextForMessage } from "../services/contextService.js";
import { OpenAI } from "openai";
import getSectionFilter from "../utils/sectionFilter.js";
import getUserSession from "../utils/cookie.js";
import getRecentMessages from "../utils/recentMessages.js";
import {
  AppError,
  AuthError,
  OpenAIError,
  ValidationError,
} from "../utils/errors.js";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function handleChatbot(req: Request, res: Response) {
  try {
    // SessionId
    const userId = await getUserSession(req, res);
    if (!userId) {
      throw new AuthError("Missing or invalid user session", "Please sign in to continue");
    }

    const { message } = req.body;
    if (!message || typeof message !== "string" || !message.trim()) {
      throw new ValidationError("Message is empty or invalid", "Please enter a message");
    }

    // History continuity
    let conversationHistory: Message[] = [];
    try {
      conversationHistory = await getRecentMessages(userId);
    } catch (err) {
      console.error("Failed to fetch recent messages (continuing without history):", err);
      conversationHistory = [];
    }

    // Detect if AI previously asked a follow-up
    const lastAssistantMsg =
      conversationHistory[conversationHistory.length - 1]?.content?.toLowerCase() || "";

    const aiAskedForFollowUp =
      /would you like|want to learn more|see more|need more info|link/i.test(lastAssistantMsg);

    // Generate embedding
    let queryEmbedding: number[] | undefined;
    try {
      const embeddingResponse = await openai.embeddings.create({
        model: "text-embedding-3-small",
        input: message,
      });
      queryEmbedding = embeddingResponse.data?.[0]?.embedding;
      if (!queryEmbedding) {
        throw new Error("No embedding returned");
      }
    } catch (err) {
      console.error("Embedding error:", err);
      throw new OpenAIError("Failed to generate embedding", "I can't reach my AI engine right now");
    }

    // Context retrieval
    let contextText = "";
    try {
      const sectionFilter = getSectionFilter(message);
      contextText = await getContextForMessage(message, queryEmbedding, lastAssistantMsg);
    } catch (err) {
      console.error("Context retrieval error (continuing without context):", err);
      contextText = "";
    }

    // Generate GPT reply
    let reply = "";
    try {
      reply = await getChatReply(message, contextText, conversationHistory);
      if (!reply) {
        throw new Error("Empty reply from AI");
      }
    } catch (err) {
      console.error("OpenAI reply error:", err);
      throw new OpenAIError("Failed to generate AI reply", "I couldn't generate a reply right now");
    }

    // Save chat history
    try {
      const { error: insertError } = await supabase.from("chat_history").insert([
        {
          user_id: userId,
          message,
          reply,
        },
      ]);
      if (insertError) {
        console.error("Failed to save chat history:", insertError);
      }
    } catch (err) {
      console.error("Supabase insert error (continuing):", err);
    }

    return res.json({ reply, userId });
  } catch (err: any) {
    console.error("Chatbot error (controller):", err);

    if (err instanceof AppError) {
      const status =
        err.code === "AUTH_ERROR" ? 401 :
        err.code === "VALIDATION_ERROR" ? 400 :
        err.code === "RATE_LIMIT" ? 429 :
        err.code === "OPENAI_ERROR" ? 502 :
        err.code === "CONTEXT_ERROR" ? 500 :
        err.code === "DATABASE_ERROR" ? 500 :
        500;

      return res.status(status).json({
        error: err.message,
        code: err.code,
        friendly: err.friendly ?? "Something went wrong",
      });
    }

    // Fallback
    return res.status(500).json({
      error: err?.message ?? "Server error",
      code: "SERVER_ERROR",
      friendly: "Something went wrong. Please try again shortly.",
    });
  }
}