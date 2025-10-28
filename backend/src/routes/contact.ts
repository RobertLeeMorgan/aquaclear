import express from "express";
import nodemailer from "nodemailer";
import { contactSchema } from "../schemas/contactSchema.js"; // adjust the path if needed

const router = express.Router();

router.post("/contact", async (req, res) => {
  try {
    // Validate the body with Zod
    const parseResult = contactSchema.safeParse(req.body);

    if (!parseResult.success) {
      const firstError = parseResult.error.issues[0]?.message || "Invalid form input.";
      return res.status(400).json({ error: firstError });
    }

    const { name, email, tel, postcode, source, message } = parseResult.data;

    // --- Configure email transport ---
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // --- Email content ---
    const mailOptions = {
      from: `"Aquaclear Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER || "info@aquaclearwatermanagement.com",
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}
Email: ${email}
Tel: ${tel}
Postcode: ${postcode}
Source: ${source || "Not specified"}

Message:
${message}`,
    };

    // --- Send email ---
    await transporter.sendMail(mailOptions);

    console.log("Contact form email sent successfully from:", email);
    res.status(200).json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    console.error("Error handling contact form:", error);
    res.status(500).json({ error: "Failed to send message. Please try again later." });
  }
});

export default router;
