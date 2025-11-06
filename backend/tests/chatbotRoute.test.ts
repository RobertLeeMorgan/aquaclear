import { jest, test, expect, describe, beforeEach, beforeAll } from "@jest/globals";
import request from "supertest";
import express from "express";
import cookieParser from "cookie-parser";
import { setupMocks } from "./__mocks__/index.js";

let handleChatbot: any;
let chatbotRouter: any;

beforeAll(async () => {
  await setupMocks();

  const controller = await import("../src/controllers/chatbotController.js");
  handleChatbot = controller.handleChatbot;

  const routerModule = await import("../src/routes/chatbot.js");
  chatbotRouter = routerModule.default;
});

describe("Chatbot routes", () => {
  let app: express.Express;

  beforeEach(() => {
    app = express();
    app.use(express.json());
    app.use(cookieParser());
    app.use("/api", chatbotRouter);

    // Simple global error handler
    app.use((err: any, req: any, res: any, next: any) => {
      res.status(err.statusCode || 500).json({
        success: false,
        message: err.message || "Internal Server Error",
      });
    });

    jest.clearAllMocks();
  });

  // --- POST /api/chatbot ---
  test("returns 200 when handleChatbot succeeds", async () => {
    handleChatbot.mockImplementation((req: any, res: any) => {
      res.status(200).json({ success: true, reply: "Mocked chatbot reply" });
    });

    const res = await request(app).post("/api/chatbot").send({ message: "Hello" });
    expect(res.status).toBe(200);
    expect(res.body.reply).toBe("Mocked chatbot reply");
    expect(handleChatbot).toHaveBeenCalledTimes(1);
  });

  test("returns 400 for invalid input", async () => {
    handleChatbot.mockImplementation(() => {
      const err: any = new Error("Invalid input");
      err.statusCode = 400;
      throw err;
    });

    const res = await request(app).post("/api/chatbot").send({ invalidField: "oops" });
    expect(res.status).toBe(400);
  });

  test("returns 500 when handleChatbot throws", async () => {
    handleChatbot.mockImplementation(() => {
      throw new Error("Something went wrong");
    });

    const res = await request(app).post("/api/chatbot").send({ message: "Error" });
    expect(res.status).toBe(500);
    expect(res.body.message).toBe("Something went wrong");
  });

  // --- GET /api/chatbot/history ---
  test("returns empty history if no cookie present", async () => {
    const res = await request(app).get("/api/history");
    expect(res.status).toBe(200);
    expect(res.body.history).toEqual([]);
  });

  test("returns mapped chat history if cookie present", async () => {
    const res = await request(app)
      .get("/api/history")
      .set("Cookie", ["user_id=123"]);
    expect(res.status).toBe(200);
    expect(res.body.history).toEqual([
      { role: "user", text: "Hi" },
      { role: "bot", text: "Hello!" },
    ]);
  });
});
