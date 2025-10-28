import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  tel: z.string().min(7, "Phone number too short"),
  postcode: z.string().min(3, "Postcode required"),
  source: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactData = z.infer<typeof contactSchema>;