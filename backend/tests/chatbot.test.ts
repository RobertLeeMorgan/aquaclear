import { describe, it, expect, beforeEach, vi } from "vitest";
import type { Request, Response, NextFunction } from "express";
import { AuthError } from "../src/utils/errors.js";

// --- Mock modules BEFORE importing the module under test ---
vi.mock("../src/utils/cookie", () => ({ default: vi.fn() }));
vi.mock("../src/utils/vagueMessage", () => ({ default: vi.fn() }));
vi.mock("../src/services/contextService", () => ({ getContextForMessage: vi.fn() }));
vi.mock("../src/services/openaiService", () => ({
  streamChatReply: vi.fn(),
  openai: { embeddings: { create: vi.fn() } },
}));
vi.mock("../src/supabaseClient", () => ({
  supabase: { from: vi.fn(() => ({ insert: vi.fn() })) },
}));

// --- Imports AFTER mocks ---
import { handleChatbot } from "../src/controllers/chatbotController.js";
import getUserSession from "../src/utils/cookie.js";
import isVagueMessage from "../src/utils/vagueMessage.js";
import { getContextForMessage } from "../src/services/contextService.js";
import { streamChatReply, openai } from "../src/services/openaiService.js";
import { supabase } from "../src/supabaseClient.js";

// --- Helper factories ---
const createMockRequest = (body: any = { message: "hello", context: [] }): Partial<Request> => ({
  body,
  on: vi.fn() as unknown as Request["on"],
});

const createMockResponse = (): Partial<Response> => ({
  setHeader: vi.fn(),
  flushHeaders: vi.fn(),
  write: vi.fn(),
  end: vi.fn(),
  writableEnded: false,
});

const createFakeStream = (chunks: string[] = []): AsyncIterable<{ choices?: { delta?: { content?: string } }[] }> & {
  controller?: { abort: () => void };
} => {
  const controller = { abort: vi.fn() };
  return {
    async *[Symbol.asyncIterator]() {
      for (const chunk of chunks) {
        yield { choices: [{ delta: { content: chunk } }] };
      }
    },
    controller,
  };
};

describe("handleChatbot", () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  let next: NextFunction;

  beforeEach(() => {
    vi.clearAllMocks();
    req = createMockRequest();
    res = createMockResponse();
    next = vi.fn() as unknown as NextFunction;

    // Default mocks for happy path
    vi.mocked(getUserSession).mockResolvedValue("user123");
    vi.mocked(isVagueMessage).mockReturnValue(false);
    vi.mocked(openai.embeddings.create).mockResolvedValue({
      data: [{ embedding: [0.1, 0.2], index: 0, object: "embedding" }],
      model: "text-embedding-3-small",
      object: "list",
      usage: { prompt_tokens: 0, total_tokens: 0 },
    });
    vi.mocked(getContextForMessage).mockResolvedValue("context text");
    vi.mocked(streamChatReply).mockResolvedValue(createFakeStream(["hi"]) as any);
  });

  it("throws AuthError if session is missing", async () => {
    vi.mocked(getUserSession).mockResolvedValue(null);

    await handleChatbot(req as Request, res as Response, next);

    expect(next).toHaveBeenCalled();
    const error = (next as any).mock.calls[0][0];
    expect(error).toBeInstanceOf(AuthError);
    expect(error.message).toBe("Missing or invalid user session");
  });

  it("returns empty context if message is vague", async () => {
    vi.mocked(isVagueMessage).mockReturnValue(true);

    await handleChatbot(req as Request, res as Response, next);

    expect(getContextForMessage).not.toHaveBeenCalled();
    expect(res.setHeader).toHaveBeenCalledWith("Content-Type", "text/plain; charset=utf-8");
    expect(res.end).toHaveBeenCalled();
  });

  it("calls embeddings, context, and supabase for normal message", async () => {
    await handleChatbot(req as Request, res as Response, next);

    expect(openai.embeddings.create).toHaveBeenCalledWith({
      model: "text-embedding-3-small",
      input: "hello",
    });
    expect(getContextForMessage).toHaveBeenCalledWith("hello", [0.1, 0.2], "");
    expect(res.write).toHaveBeenCalledWith("hi");
    expect(res.end).toHaveBeenCalled();
    expect(supabase.from).toHaveBeenCalledWith("chat_history");
  });

  it("aborts stream on request close", async () => {
    const fake = createFakeStream(["hi"]);
    (req.on as unknown as (event: string, cb: () => void) => void) = (event, cb) => {
      if (event === "close") cb();
    };
    vi.mocked(streamChatReply).mockResolvedValue(fake as any);

    await handleChatbot(req as Request, res as Response, next);

    expect(fake.controller?.abort).toHaveBeenCalled();
  });

  it("handles multiple streaming chunks correctly", async () => {
    const fake = createFakeStream(["hi", "there"]);
    vi.mocked(streamChatReply).mockResolvedValue(fake as any);

    await handleChatbot(req as Request, res as Response, next);

    expect(res.write).toHaveBeenCalledTimes(2);
    expect(res.write).toHaveBeenNthCalledWith(1, "hi");
    expect(res.write).toHaveBeenNthCalledWith(2, "there");
    expect(res.end).toHaveBeenCalled();
  });

  it("handles missing message gracefully", async () => {
    req.body = {} as any; // simulate missing message
    await handleChatbot(req as Request, res as Response, next);

    // Should throw AuthError or end response without crashing
    expect(next).toHaveBeenCalledTimes(1);
  });
});