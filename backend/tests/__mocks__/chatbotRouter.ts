import { jest } from "@jest/globals";

export const setupChatbotRouterMock = async () => {
  jest.unstable_mockModule("../../src/routes/chatbot.js", async () => {
    const { handleChatbot } = await import("../../src/controllers/chatbotController.js");
    const express = (await import("express")).default;
    const router = express.Router();

    // POST /chatbot
    router.post("/chatbot", handleChatbot);

    // GET /history
    router.get("/history", (req, res) => {
      const cookieHeader = req.headers.cookie || "";
      const hasUserId = cookieHeader.includes("user_id=");
      if (!hasUserId) return res.status(200).json({ history: [] });

      res.status(200).json({
        history: [
          { role: "user", text: "Hi" },
          { role: "bot", text: "Hello!" },
        ],
      });
    });

    return { default: router };
  });
};
