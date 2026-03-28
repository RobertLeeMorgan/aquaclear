import express from "express";
import type { Request, Response, NextFunction } from "express";
import { limiter } from "../middleware/rateLimiter.js";
import { chatbotSchema } from "../schemas/chatbotSchema.js";
import { handleChatbot } from "../controllers/chatbotController.js";
import { ValidationError } from "../utils/errors.js";

const router = express.Router();

router.use(limiter);

router.post("/chatbot", (req: Request, res: Response, next: NextFunction) => {
    const parsed = chatbotSchema.safeParse(req.body);
    if (!parsed.success) {
      const message = parsed.error.issues.map((i) => i.message).join(", ");
      return next(new ValidationError(message, "Invalid input provided."));
    }

    req.body = parsed.data;
    return handleChatbot(req, res, next);
});

export default router;