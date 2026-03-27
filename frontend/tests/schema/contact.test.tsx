import { describe, it, expect } from "vitest";
import {
  contactSchema,
  type ContactData,
} from "../../src/schemas/contactSchema";

describe("contactSchema", () => {
    it("rejects missing required fields", () => {
    const invalidData = {
      email: "john@example.com",
      tel: "1234567",
      postcode: "12345",
      message: "Short",
    };

    const result = contactSchema.safeParse(invalidData);
    expect(result.success).toBe(false);

    if (!result.success) {
      const nameIssue = result.error.issues.find((i) => i.path[0] === "name");
      expect(nameIssue?.message).toBe("Invalid input: expected string, received undefined");

      const messageIssue = result.error.issues.find((i) => i.path[0] === "message");
      expect(messageIssue?.message).toBe("Message must be at least 10 characters");
    }
  });

  it("accepts valid data", () => {
    const validData: ContactData = {
      name: "John Doe",
      email: "john@example.com",
      tel: "1234567",
      postcode: "12345",
      message: "This is a valid message.",
      source: "website",
    };

    const result = contactSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it("rejects invalid email", () => {
    const data = {
      name: "John Doe",
      email: "invalid-email",
      tel: "1234567",
      postcode: "12345",
      message: "Hello, this is valid message text.",
    };

    const result = contactSchema.safeParse(data);
    expect(result.success).toBe(false);

    if (!result.success) {
      const issues = result.error.format();
      expect(issues.email?._errors).toContain("Invalid email address");
    }
  });

  it("rejects short phone number", () => {
    const data = {
      name: "John Doe",
      email: "john@example.com",
      tel: "123",
      postcode: "12345",
      message: "Hello, this is valid message text.",
    };

    const result = contactSchema.safeParse(data);
    expect(result.success).toBe(false);

    if (!result.success) {
      const issues = result.error.format();
      expect(issues.tel?._errors).toContain("Phone number too short");
    }
  });

  it("rejects short message", () => {
    const data = {
      name: "John Doe",
      email: "john@example.com",
      tel: "1234567",
      postcode: "12345",
      message: "Too short",
    };

    const result = contactSchema.safeParse(data);
    expect(result.success).toBe(false);

    if (!result.success) {
      const issues = result.error.format();
      expect(issues.message?._errors).toContain(
        "Message must be at least 10 characters",
      );
    }
  });

  it("allows optional source field to be missing", () => {
    const data = {
      name: "Jane Doe",
      email: "jane@example.com",
      tel: "9876543",
      postcode: "54321",
      message: "Hello, this is a valid message for Jane.",
    };

    const result = contactSchema.safeParse(data);
    expect(result.success).toBe(true);
  });
});
