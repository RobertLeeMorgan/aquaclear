import { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/errors.js";

export function globalErrorHandler(
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error("Global error handler caught:", err);

  if (err instanceof AppError) {
    const status =
      err.code === "AUTH_ERROR"
        ? 401
        : err.code === "VALIDATION_ERROR"
        ? 400
        : err.code === "RATE_LIMIT"
        ? 429
        : err.code === "OPENAI_ERROR"
        ? 502
        : err.code === "CONTEXT_ERROR"
        ? 500
        : err.code === "DATABASE_ERROR"
        ? 500
        : 500;

    return res.status(status).json({
      error: err.message,
      code: err.code,
      friendly: err.friendly ?? "Something went wrong",
    });
  }

  // Fallback for unexpected errors
  return res.status(500).json({
    error: (err as any)?.message ?? "Server error",
    code: "SERVER_ERROR",
    friendly: "Something went wrong. Please try again shortly.",
  });
}
