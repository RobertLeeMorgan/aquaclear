import { z } from "zod";

const stripHTML = (str: string) => str.replace(/<[^>]*>?/gm, "");

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").transform(stripHTML),
  email: z.string().trim().email("Invalid email address"),
  tel: z
    .string()
    .trim()
    .min(5, "Phone number too short")
    .regex(/^[\d\s+()-]+$/, "Invalid phone number format")
    .transform(stripHTML),
  postcode: z.string().trim().min(3, "Postcode too short").transform(stripHTML),
  source: z
    .string()
    .optional()
    .transform((val) => (val ? stripHTML(val) : val)),
  message: z.string().trim().min(5, "Message too short").transform(stripHTML),
});

export type ContactFormData = z.infer<typeof contactSchema>;
