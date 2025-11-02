import { OpenAI } from "openai";
import { AQUACLEAR_SYSTEM_PROMPT } from "../config/aiPrompt.js";
import type { ChatCompletionMessageParam } from "openai/resources/chat/completions.js";
import { OpenAIError } from "../utils/errors.js";

export interface Message {
  role: "system" | "user" | "assistant";
  content: string;
}

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function getChatReply(
  message: string,
  contextText: string,
  history: Message[] = []
) {
  const messagesForGPT: ChatCompletionMessageParam[] = [
    { role: "system", content: AQUACLEAR_SYSTEM_PROMPT },
    ...history.map((msg) => ({
      role: msg.role,
      content: msg.content,
    })),
  ];

  if (contextText.length) {
    messagesForGPT.push({
      role: "system",
      content: `Use the following site context to help answer the user's question:\n${contextText}`,
    });
  }

  messagesForGPT.push({ role: "user", content: message });

  // console.log("GPT payload:", JSON.stringify(messagesForGPT, null, 2));

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: messagesForGPT,
    });

    const reply = response.choices?.[0]?.message?.content;

    // console.log(reply)

    if (!reply) {
      throw new OpenAIError(
        "Empty reply from OpenAI",
        "I couldn't generate a response right now"
      );
    }
    return reply;
  } catch (err: any) {
    console.error("OpenAI request failed:", err);

    if (err?.response?.status === 429) {
      throw new OpenAIError(
        "OpenAI rate limit exceeded",
        "The AI is receiving too many requests right now"
      );
    }

    if (err?.response?.status >= 500) {
      throw new OpenAIError(
        "OpenAI internal error",
        "The AI service is temporarily unavailable"
      );
    }

    throw new OpenAIError(
      err?.message ?? "Failed to fetch response from OpenAI"
    );
  }
}
