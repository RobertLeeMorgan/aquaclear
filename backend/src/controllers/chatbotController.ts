import type { Request, Response, NextFunction } from "express";
import { supabase } from "../supabaseClient.js";
import { streamChatReply } from "../services/openaiService.js";
import type { Message } from "../services/openaiService.js";
import { getContextForMessage } from "../services/contextService.js";
import getUserSession from "../utils/cookie.js";
import { AuthError, OpenAIError } from "../utils/errors.js";
import isVagueMessage from "../utils/vagueMessage.js";
import type { ChatbotRequest } from "../schemas/chatbotSchema.js";
import { openai } from "../services/openaiService.js";

export async function handleChatbot(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    // Session ID
    const userId = await getUserSession(req, res);
    if (!userId) {
      throw new AuthError("Missing or invalid user session");
    }

    const { message, context }: ChatbotRequest = req.body;

    const isVague = isVagueMessage(message);

    const conversationHistory: Message[] = [
      ...context.map(
        (m): Message => ({
          role: m.role === "user" ? "user" : "assistant",
          content: m.text,
        }),
      ),
    ];

    const lastAssistantMsg =
      conversationHistory[
        conversationHistory.length - 1
      ]?.content?.toLowerCase() || "";

    let queryEmbedding: number[] | undefined;

    if (!isVague) {
      const embeddingResponse = await openai.embeddings.create({
        model: "text-embedding-3-small",
        input: message,
      });

      queryEmbedding = embeddingResponse.data?.[0]?.embedding;

      if (!queryEmbedding) {
        throw new OpenAIError(
          "Failed to generate embedding",
          "AI engine unavailable",
        );
      }
    }

    const contextText = queryEmbedding
      ? await getContextForMessage(
          message,
          queryEmbedding,
          lastAssistantMsg,
        ).catch(() => "")
      : "";

    const stream = await streamChatReply(
      message,
      contextText,
      conversationHistory,
    );

    req.on("close", () => {
      try {
        stream?.controller?.abort?.();
      } catch {}
    });

    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    res.flushHeaders?.();
    let fullReply = "";

    try {
      for await (const chunk of stream) {
        const content = chunk.choices?.[0]?.delta?.content;

        if (content) {
          fullReply += content;
          res.write(content);
        }
      }
    } catch (err) {
      console.error("Streaming error:", err);
    } finally {
      if (!res.writableEnded) {
        res.end();
      }
    }

    supabase
      .from("chat_history")
      .insert([{ user_id: userId, message, reply: fullReply }])
      .then(({ error }) => {
        if (error) {
          console.error("Failed to save chat history:", error);
        }
      });
  } catch (err) {
    next(err);
  }
}
