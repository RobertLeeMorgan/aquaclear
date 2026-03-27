import { z } from "zod";

const stripHTML = (str: string) => str.replace(/<[^>]*>?/gm, "");

export const chatbotSchema = z.object({
  message: z
    .string()
    .trim()
    .min(1, "Message cannot be empty")
    .max(500, "Message too long")
    .transform(stripHTML),
    
  context: z
    .array(
      z.object({
        role: z.enum(["user", "bot"]),
        text: z.string(),
      }),
    )
    .default([]),
});

export type ChatbotRequest = z.infer<typeof chatbotSchema>;
