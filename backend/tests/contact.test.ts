// tests/contact.test.ts
import { describe, it, expect, vi, beforeEach } from "vitest";
import { handleContactForm } from "../src/controllers/contactController.js";
import { AppError } from "../src/utils/errors.js";

// --- Mock Brevo ---
const mockSend = vi.fn();

vi.mock("@getbrevo/brevo", () => {
  return {
    TransactionalEmailsApiApiKeys: { apiKey: "apiKey" },
    TransactionalEmailsApi: class {
      setApiKey = vi.fn();
      sendTransacEmail = mockSend;
    },
    SendSmtpEmail: class {},
  };
});

describe("handleContactForm", () => {
  let req: any;
  let res: any;
  let next: any;

  beforeEach(() => {
    mockSend.mockReset();

    req = { body: {} };
    res = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn(),
    };
    next = vi.fn();
  });

  it("sends email successfully with valid input", async () => {
    mockSend.mockResolvedValueOnce({ messageId: "123" });

    req.body = {
      email: "test@test.com",
      message: "Hello there",
      name: "Robert",
      tel: "1234567890",
      postcode: "12345",
      source: "Website",
    };

    await handleContactForm(req, res, next);

    expect(mockSend).toHaveBeenCalled();
    const payload = mockSend.mock.calls[0]?.[0];
    expect(payload).toHaveProperty("sender");
    expect(payload).toHaveProperty("to");
    expect(payload.textContent).toContain("Name: Robert");
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      success: true,
      message: "Message sent successfully",
    });
  });

  it("throws validation error for invalid email", async () => {
    req.body = {
      email: "invalid-email",
      message: "Hello",
      name: "Robert",
      tel: "1234567890",
      postcode: "12345",
    };

    await handleContactForm(req, res, next);

    expect(next).toHaveBeenCalled();
    const err = next.mock.calls[0][0];
    expect(err).toBeInstanceOf(AppError);
    expect(err.code).toBe("VALIDATION_ERROR");
  });

  it("handles missing fields", async () => {
    req.body = {};

    await handleContactForm(req, res, next);

    expect(next).toHaveBeenCalled();
    const err = next.mock.calls[0][0];
    expect(err).toBeInstanceOf(AppError);
    expect(err.code).toBe("VALIDATION_ERROR");
  });
});