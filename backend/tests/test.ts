import request from "supertest";
import { expect, describe, it } from "@jest/globals";
import app from "../src/index.js";

describe("GET /api/health", () => {
  it("should return ok: true", async () => {
    const res = await request(app).get("/api/health");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ ok: true });
  });
});