// __mocks__/openai.ts
import { jest } from "@jest/globals";

export let openaiCreateMock: jest.Mock;

export const setupOpenAIMock = async () => {
  await jest.unstable_mockModule("openai", () => {
    class MockOpenAI {
      embeddings = {
       create: jest.fn(() => Promise.resolve({ data: [{ embedding: [0.1, 0.2] }] }))
      };
      chat = {
        completions: {
          create: (openaiCreateMock = jest.fn(async (opts: any) => {
            const msg = opts.messages?.[opts.messages.length - 1]?.content;
            if (msg === "empty reply") return { choices: [{ message: { content: "" } }] };
            if (msg === "rate limit") {
              const err: any = new Error("Rate limited");
              err.response = { status: 429 };
              throw err;
            }
            if (msg === "server error") {
              const err: any = new Error("Server error");
              err.response = { status: 500 };
              throw err;
            }
            return { choices: [{ message: { content: "AI reply" } }] };
          })),
        },
      };
    }
    return { OpenAI: MockOpenAI };
  });
};
