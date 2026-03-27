import { describe, it, expect } from "vitest";
import { chatSchema, validateChatInput } from "../../src/schemas/chatSchema";

describe("chatSchema and validateChatInput", () => {
  it("rejects empty string", () => {
    const result = chatSchema.safeParse("");
    expect(result.success).toBe(false);
    if (!result.success) {
      const issue = result.error.issues[0];
      expect(issue.message).toBe("Message cannot be empty");
    }

    expect(validateChatInput("")).toBeNull();
  });

  it("rejects string longer than 700 characters", () => {
    const longMessage = "a".repeat(701);
    const result = chatSchema.safeParse(longMessage);
    expect(result.success).toBe(false);
    if (!result.success) {
      const issue = result.error.issues[0];
      expect(issue.message).toBe("Message too long");
    }

    expect(validateChatInput(longMessage)).toBeNull();
  });

  it("trims whitespace", () => {
    const input = "   Hello world   ";
    const result = chatSchema.safeParse(input);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data).toBe("Hello world");
    }

    expect(validateChatInput(input)).toBe("Hello world");
  });

  it("strips HTML tags", () => {
    const input = "<p>Hello <strong>world</strong></p>";
    const result = chatSchema.safeParse(input);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data).toBe("Hello world");
    }

    expect(validateChatInput(input)).toBe("Hello world");
  });

  it("accepts normal valid messages", () => {
    const input = "This is a valid message!";
    const result = chatSchema.safeParse(input);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data).toBe(input);
    }

    expect(validateChatInput(input)).toBe(input);
  });
});