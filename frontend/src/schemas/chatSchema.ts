import { z } from "zod";

const stripHTML = (str: string) => str.replace(/<[^>]*>?/gm, "");

export const chatSchema = z
  .string()
  .trim()
  .min(1, "Message cannot be empty")
  .max(700, "Message too long")
  .transform(stripHTML);

export function validateChatInput(input: string): string | null {
  const result = chatSchema.safeParse(input);
  return result.success ? result.data : null;
}