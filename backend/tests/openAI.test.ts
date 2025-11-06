import {
  jest,
  describe,
  it,
  expect,
  beforeAll,
  beforeEach,
} from "@jest/globals";
import { setupOpenAIMock, openaiCreateMock } from "./__mocks__/openai.js";
import { OpenAIError, RateLimitError } from "../src/utils/errors.js";

let getChatReply: any;

beforeAll(async () => {
  await setupOpenAIMock();

  const openaiService = await import("../src/services/openaiService.js");
  getChatReply = openaiService.getChatReply;
});

beforeEach(() => {
  jest.clearAllMocks();
});

describe("getChatReply with centralized OpenAI mock", () => {
  it("returns AI reply for normal message", async () => {
    const reply = await getChatReply("Hello", "");
    expect(reply).toBe("AI reply");

    expect(openaiCreateMock).toHaveBeenCalledWith(
      expect.objectContaining({
        model: "gpt-4o-mini",
        messages: expect.any(Array),
      })
    );
  });

  it("throws OpenAIError for empty reply", async () => {
    try {
      await getChatReply("empty reply", "");
    } catch (err: any) {
      expect(err).toBeInstanceOf(OpenAIError);
      expect(err.code).toBe("OPENAI_ERROR");
      expect(err.message).toBe("Empty reply from OpenAI");
      expect(err.friendly).toBe("AI engine unavailable");
    }
  });

  it("throws RateLimitError for rate limit", async () => {
    try {
      await getChatReply("rate limit", "");
    } catch (err: any) {
      expect(err).toBeInstanceOf(RateLimitError);
      expect(err.code).toBe("RATE_LIMIT");
      expect(err.message).toBe("OpenAI rate limit exceeded");
      expect(err.friendly).toBe(
        "The AI is receiving too many requests right now"
      );
    }
  });

  it("throws OpenAIError for server error", async () => {
    try {
      await getChatReply("server error", "");
    } catch (err: any) {
      expect(err).toBeInstanceOf(OpenAIError);
      expect(err.code).toBe("OPENAI_ERROR");
      expect(err.message).toBe("OpenAI internal error");
      expect(err.friendly).toBe("The AI service is temporarily unavailable");
    }
  });
});
