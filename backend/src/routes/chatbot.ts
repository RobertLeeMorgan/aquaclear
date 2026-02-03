import express, { Request, Response, NextFunction } from "express";
import { limiter } from "../middleware/rateLimiter.js";
import { chatbotSchema } from "../schemas/chatbotSchema.js";
import { handleChatbot } from "../controllers/chatbotController.js";
import { supabase } from "../supabaseClient.js";
import { DatabaseError, ValidationError } from "../utils/errors.js";

const router = express.Router();

router.use(limiter);

router.post("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const parsed = chatbotSchema.safeParse(req.body);
    if (!parsed.success) {
      const message = parsed.error.issues.map((i) => i.message).join(", ");
      throw new ValidationError(message, "Invalid input provided.");
    }

    req.body = parsed.data;
    await handleChatbot(req, res, next);
  } catch (err) {
    next(err);
  }
});

router.get("/history", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.cookies?.user_id as string | undefined;
    if (!userId) {
      return res.json({ history: [] });
    }

    const { data, error } = await supabase
      .from("chat_history")
      .select("message, reply, created_at")
      .eq("user_id", userId)
      .order("created_at", { ascending: true })
      .limit(100);

    if (error) {
      throw new DatabaseError(
        error.message,
        "Failed to load your chat history. Please try again."
      );
    }

    const history = data.flatMap((row: any) => [
      { role: "user", text: row.message },
      { role: "bot", text: row.reply },
    ]);

    res.json({ history });
  } catch (err) {
    next(err);
  }
});

export default router;