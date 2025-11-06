import { jest } from "@jest/globals";
import { Response } from "express";

export const setupHandleChatbotMock = async (mock = true) => {
  if (!mock) return;
  await jest.unstable_mockModule(
    "../../src/controllers/chatbotController.js",
    () => ({
      handleChatbot: jest.fn((req, res: Response) => {
        res
          .status(200)
          .json({ success: true, reply: "Mocked global chatbot reply" });
      }),
    })
  );
};
