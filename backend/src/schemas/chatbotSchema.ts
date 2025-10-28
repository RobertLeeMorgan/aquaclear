import { z } from "zod";

const stripHTML = (str: string) => str.replace(/<[^>]*>?/gm, "");

export const chatbotSchema = z.object({
  message: z
    .string()
    .trim()
    .min(3, "Message cannot be empty")
    .max(700, "Message too long")
    .transform(stripHTML),
});

export type ChatbotRequest = z.infer<typeof chatbotSchema>;
