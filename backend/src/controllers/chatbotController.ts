import { Request, Response, NextFunction } from "express";
import { supabase } from "../supabaseClient.js";
import { getChatReply, Message } from "../services/openaiService.js";
import { getContextForMessage } from "../services/contextService.js";
import { OpenAI } from "openai";
import getUserSession from "../utils/cookie.js";
import getRecentMessages from "../utils/recentMessages.js";
import { AuthError, OpenAIError, ValidationError, DatabaseError } from "../utils/errors.js";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function handleChatbot(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    // Session ID
    const userId = await getUserSession(req, res);
    if (!userId) {
      throw new AuthError(
        "Missing or invalid user session",
        "Please sign in to continue"
      );
    }

    const { message } = req.body;
    if (!message || typeof message !== "string" || !message.trim()) {
      throw new ValidationError(
        "Message is empty or invalid",
        "Please enter a message"
      );
    }

    // Fetch recent messages
    const conversationHistory: Message[] = await getRecentMessages(
      userId
    ).catch(() => []);

    const lastAssistantMsg =
      conversationHistory[
        conversationHistory.length - 1
      ]?.content?.toLowerCase() || "";

    // Generate embedding
    const embeddingResponse = await openai.embeddings.create({
      model: "text-embedding-3-small",
      input: message,
    });

    const queryEmbedding = embeddingResponse.data?.[0]?.embedding;
    if (!queryEmbedding) {
      throw new OpenAIError(
        "Failed to generate embedding",
        "AI engine unavailable"
      );
    }

    // Retrieve context
    const contextText = await getContextForMessage(
      message,
      queryEmbedding,
      lastAssistantMsg
    ).catch(() => "");

    // Generate reply
    const reply = await getChatReply(message, contextText, conversationHistory);
    if (!reply) {
      throw new OpenAIError(
        "Empty reply from AI",
        "I couldn’t generate a reply right now"
      );
    }

    // Save chat history
    const { error } = await supabase
      .from("chat_history")
      .insert([{ user_id: userId, message, reply }]);
    if (error) {
      throw new DatabaseError(
        error.message || "Database insert failed",
        "Failed to save chat history"
      );
    }
    return res.json({ reply, userId });
  } catch (err) {
    next(err);
  }
}
