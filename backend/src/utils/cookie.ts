import { randomUUID } from "crypto";
import { Request, Response } from "express";

export default async function getUserSession(req: Request, res: Response) {
  let userId = req.cookies.user_id;

  if (!userId) {
    userId = randomUUID();
    res.cookie("user_id", userId, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 1000 * 60 * 60 * 24 * 30, // 30 days
    });
  }
  return userId
}
