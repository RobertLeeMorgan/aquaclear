import { contactSchema } from "../../src/schemas/contactSchema";
import { describe, it, expect } from "@jest/globals"

describe("Contact form schema", () => {
  it("accepts valid data", () => {
    const data = {
      name: "Robert",
      email: "robert@example.com",
      tel: "+44 1234 567890",
      postcode: "AB12 3CD",
      source: "Website",
      message: "Hello there",
    };
    const result = contactSchema.safeParse(data);
    expect(result.success).toBe(true);
  });

  it("rejects invalid email", () => {
    const data = {
      name: "Robert",
      email: "not-an-email",
      tel: "+44 1234 567890",
      postcode: "AB12 3CD",
      message: "Hello there",
    };
    const result = contactSchema.safeParse(data);
    expect(result.success).toBe(false);
  });
});
