import { describe, it, expect } from "@jest/globals";
import { chatbotSchema } from "../../src/schemas/chatbotSchema";

describe("chatbotSchema", () => {
  it("should parse valid message correctly", () => {
    const input = { message: "Hello, world!" };
    const parsed = chatbotSchema.parse(input);
    expect(parsed.message).toBe("Hello, world!");
  });

  it("should trim whitespace", () => {
    const input = { message: "   hi there   " };
    const parsed = chatbotSchema.parse(input);
    expect(parsed.message).toBe("hi there");
  });

  it("should strip HTML tags", () => {
    const input = { message: "<b>bold</b> text" };
    const parsed = chatbotSchema.parse(input);
    expect(parsed.message).toBe("bold text");
  });

  it("should throw error for empty message", () => {
    const input = { message: "" };
    expect(() => chatbotSchema.parse(input)).toThrow("Message cannot be empty");
  });

  it("should throw error for message exceeding max length", () => {
    const input = { message: "a".repeat(701) };
    expect(() => chatbotSchema.parse(input)).toThrow("Message too long");
  });
});
