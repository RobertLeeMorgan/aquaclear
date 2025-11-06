import { jest, describe, it, expect, beforeEach, afterEach, beforeAll } from "@jest/globals";
import request from "supertest";
import { setupMocks } from "./__mocks__/index.js";

let app: any;
let TransactionalEmailsApi: any;

beforeAll(async () => {
  await setupMocks();

  const appModule = await import("../src/index.js");
  app = appModule.default;

  const brevo = await import("@getbrevo/brevo");
  TransactionalEmailsApi = brevo.TransactionalEmailsApi;
});

describe("POST /api/contact", () => {
  let spy: any;

  beforeEach(() => {
    spy = jest.spyOn(TransactionalEmailsApi.prototype, "sendTransacEmail");
  });

  afterEach(() => {
    spy.mockRestore();
    jest.clearAllMocks();
  });

  it("returns 200 for valid form submission", async () => {
    const res = await request(app).post("/api/contact").send({
      name: "Robert",
      email: "robert@example.com",
      tel: "+44 1234 567890",
      postcode: "AB12 3CD",
      source: "Website",
      message: "Hello there",
    });

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(spy).toHaveBeenCalled();
  });

  it("returns 400 for invalid email", async () => {
    const res = await request(app).post("/api/contact").send({
      name: "Robert",
      email: "not-an-email",
      tel: "+44 1234 567890",
      postcode: "AB12 3CD",
      message: "Hello there",
    });

    expect(res.status).toBe(400);
    expect(res.body.error).toContain("Invalid email");
    expect(spy).not.toHaveBeenCalled();
  });

  it("returns 200 if optional field is missing", async () => {
    const res = await request(app).post("/api/contact").send({
      name: "Robert",
      email: "robert@example.com",
      tel: "+44 1234 567890",
      postcode: "AB12 3CD",
      message: "Hello there",
    });

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(spy).toHaveBeenCalled();
  });

  it("returns 500 if Brevo fails", async () => {
    spy.mockImplementationOnce(() => Promise.reject(new Error("Brevo failed")));

    const res = await request(app).post("/api/contact").send({
      name: "Robert",
      email: "robert@example.com",
      tel: "+44 1234 567890",
      postcode: "AB12 3CD",
      source: "Website",
      message: "Hello there",
    });

    expect(res.status).toBe(500);
    expect(res.body.error).toContain("Brevo failed");
    expect(res.body.code).toBe("SERVER_ERROR");
  });
});
