import express from "express";
import { handleContactForm } from "../controllers/contactController.js";
import { limiter } from "../middleware/rateLimiter.js";

const router = express.Router();

router.use(limiter);

router.post("/contact", handleContactForm);

export default router;