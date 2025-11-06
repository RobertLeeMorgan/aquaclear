import { jest, describe, it, expect, beforeEach, beforeAll } from "@jest/globals";
import { Request, Response, NextFunction } from "express";
import { setupMocks } from "./__mocks__/index.js";

let handleChatbot: any;
let getChatReply: jest.Mock;
let getRecentMessages: jest.Mock;
let getUserSession: jest.Mock;
let getContextForMessage: any;

import { AuthError, OpenAIError, ValidationError, DatabaseError } from "../src/utils/errors.js";

beforeAll(async () => {
  await setupMocks({ mockHandleChatbot: false });

  const controller = await import("../src/controllers/chatbotController.js");
  handleChatbot = controller.handleChatbot;

  const openaiService = await import("../src/services/openaiService.js");
  getChatReply = openaiService.getChatReply as jest.Mock;

  const recentMessagesModule = await import("../src/utils/recentMessages.js");
  getRecentMessages = recentMessagesModule.default as jest.Mock;

  const cookieModule = await import("../src/utils/cookie.js");
  getUserSession = cookieModule.default as jest.Mock;

  jest.unstable_mockModule("../src/services/contextService.js", () => ({
    getContextForMessage: jest.fn(() => Promise.resolve("Some context")),
  }));

  const contextService = await import("../src/services/contextService.js");
  getContextForMessage = contextService.getContextForMessage as jest.Mock;
});

describe("handleChatbot (trimmed)", () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  let next: NextFunction;

  beforeEach(() => {
    req = { body: { message: "Hello" } };
    res = { json: jest.fn() as unknown as Response["json"] };
    next = jest.fn();
    jest.clearAllMocks();
  });

  // ----- Error handling tests -----
  it("calls next with AuthError if user session is missing", async () => {
    (getUserSession as jest.Mock).mockImplementationOnce(() =>
      Promise.resolve(null)
    );

    await handleChatbot(req as Request, res as Response, next);

    const error = (next as jest.Mock).mock.calls[0][0];
    expect(error).toBeInstanceOf(AuthError);
    expect((error as any).code).toBe("AUTH_ERROR");
  });

  it("calls next with ValidationError if message is empty", async () => {
    req.body.message = " ";

    await handleChatbot(req as Request, res as Response, next);

    const error = (next as jest.Mock).mock.calls[0][0];
    expect(error).toBeInstanceOf(ValidationError);
    expect((error as any).code).toBe("VALIDATION_ERROR");
  });

  it("calls next with OpenAIError if chat reply is empty", async () => {
    (getChatReply as jest.Mock).mockImplementationOnce(() =>
      Promise.resolve("")
    );

    await handleChatbot(req as Request, res as Response, next);

    const error = (next as jest.Mock).mock.calls[0][0];
    expect(error).toBeInstanceOf(OpenAIError);
    expect((error as any).code).toBe("OPENAI_ERROR");
  });

  it("handles supabase insert rejection gracefully", async () => {
    const supabaseModule = await import("../src/supabaseClient.js");
    const insertMock = jest.fn().mockImplementation(() => Promise.reject(new DatabaseError("DATABASE_ERROR")));
    (supabaseModule as any).supabase.from = jest.fn(() => ({ insert: insertMock }));

    await handleChatbot(req as Request, res as Response, next);

    const error = (next as jest.Mock).mock.calls[0][0];
    expect(error).toBeInstanceOf(DatabaseError);
    expect((error as any).message).toBe("DATABASE_ERROR");
  });

  // ----- Success path tests -----
  it("processes normal message correctly and saves chat history", async () => {
    const supabaseModule = await import("../src/supabaseClient.js");
    const insertMock = jest.fn().mockImplementation(() => Promise.resolve({}));
    (supabaseModule as any).supabase.from = jest.fn(() => ({ insert: insertMock }));

    await handleChatbot(req as Request, res as Response, next);

    // Chat saved
    expect(supabaseModule.supabase.from).toHaveBeenCalledWith("chat_history");
    expect(insertMock).toHaveBeenCalledWith([
      { user_id: "user123", message: "Hello", reply: "AI reply" },
    ]);

    // Response returned
    expect(res.json).toHaveBeenCalledWith({
      reply: "AI reply",
      userId: "user123",
    });
  });

  it("handles conversation history, multiple messages, whitespace, and empty context", async () => {
  // Multiple messages in conversation history
  (getRecentMessages as jest.Mock).mockImplementationOnce(() =>
    Promise.resolve([
      { role: "assistant", content: "Reply 1" },
      { role: "user", content: "Question 1" },
      { role: "assistant", content: "Reply 2" },
    ])
  );

  // ContextService returning empty string
  getContextForMessage.mockImplementationOnce(() => Promise.resolve(""));

  // Trim whitespace message
  req.body.message = "   Hello   ";

  await handleChatbot(req as Request, res as Response, next);

  expect(res.json).toHaveBeenCalledWith({
    reply: "AI reply",
    userId: "user123",
  });
});

  it("returns different userId for different sessions", async () => {
    (getUserSession as jest.Mock).mockImplementationOnce(() =>
      Promise.resolve("anotherUser")
    );

    await handleChatbot(req as Request, res as Response, next);

    expect(res.json).toHaveBeenCalledWith({
      reply: "AI reply",
      userId: "anotherUser",
    });
  });
});
