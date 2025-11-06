import request from "supertest";
import { expect, describe, it } from "@jest/globals";
import app from "../src/index.js";

describe("GET /api/wakeup", () => {
  it("should return 200 and the correct message", async () => {
    const res = await request(app).get("/api/wakeup");
    expect(res.status).toBe(200);
    expect(res.text).toBe("Aquaclear API is running!");
  });
});
