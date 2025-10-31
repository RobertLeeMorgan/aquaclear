import { Request, Response } from "express";
import {
  TransactionalEmailsApi,
  SendSmtpEmail,
  TransactionalEmailsApiApiKeys,
} from "@getbrevo/brevo";
import { contactSchema } from "../schemas/contactSchema.js";

interface ContactFormData {
  name: string;
  email: string;
  tel: string;
  postcode: string;
  source?: string | undefined;
  message: string;
}

export async function handleContactForm(req: Request, res: Response) {
  try {
    // Validate with Zod
    const parseResult = contactSchema.safeParse(req.body);
    if (!parseResult.success) {
      const firstError =
        parseResult.error.issues[0]?.message || "Invalid form input.";
      return res.status(400).json({ error: firstError });
    }

    const { name, email, tel, postcode, source, message }: ContactFormData =
      parseResult.data;

    // Set up Brevo client
    const brevoClient = new TransactionalEmailsApi();
    brevoClient.setApiKey(
      TransactionalEmailsApiApiKeys.apiKey,
      process.env.BREVO_API_KEY!
    );

    // Build email payload
    const mailPayload = new SendSmtpEmail();
    mailPayload.sender = {
      name: "Aquaclear Website",
      email: process.env.BREVO_SENDER_EMAIL!,
    };
    mailPayload.to = [
      {
        email: process.env.BREVO_CONTACT_RECEIVER!,
        name: "Contact Form",
      },
    ];
    mailPayload.subject = `New Contact Form Submission from ${name}`;
    mailPayload.textContent = `Name: ${name}
Email: ${email}
Tel: ${tel}
Postcode: ${postcode}
Source: ${source || "Not specified"}

Message:
${message}`;

    mailPayload.replyTo = { email, name };

    // Send email
    const response = await brevoClient.sendTransacEmail(mailPayload);

    console.log(
      "Contact form email sent successfully from:",
      email,
      "Brevo response:",
      response
    );

    return res
      .status(200)
      .json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    console.error("Error handling contact form:", error);
    return res
      .status(500)
      .json({ error: "Failed to send message. Please try again later." });
  }
}
