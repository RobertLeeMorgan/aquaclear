import { OpenAI } from "openai";
import { AQUACLEAR_SYSTEM_PROMPT } from "../config/aiPrompt.js";
import type { ChatCompletionMessageParam } from "openai/resources/chat/completions.js";
import { OpenAIError } from "../utils/errors.js";

export interface Message {
  role: "system" | "user" | "assistant";
  content: string;
}

export const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function streamChatReply(
  message: string,
  contextText: string,
  history: Message[] = [],
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
    const stream = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: messagesForGPT,
      stream: true,
    });

    return stream;
  } catch (err: any) {
    throw new OpenAIError(err?.message ?? "Failed to start streaming response");
  }
}
