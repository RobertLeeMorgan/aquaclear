import rateLimit from "express-rate-limit";

export const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 8,
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res) =>
    res.status(429).json({ error: "Rate limit exceeded", code: "RATE_LIMIT" }),
});