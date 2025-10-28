import express from "express";
import cors from "cors";
import chatbotRouter from "./routes/chatbot.js";
import contactRouter from "./routes/contact.js";
import dotenv from "dotenv";
import helmet from "helmet";
import { ErrorRequestHandler } from "express";
import rateLimit from "express-rate-limit";

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const app = express();

app.use(cors({
  origin: process.env.NODE_ENV === "production"
    ? ["https://aquaclear.onrender.com"]
    : ["http://localhost:5173"], // or whatever your Vite/React dev port is
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

app.use(express.json());

app.use(helmet());

app.use("/api", contactRouter);

app.use("/api", chatbotRouter);

app.get("/api/wakeup", (req, res) => {
  res.status(200).send("Aquaclear API is running!");
});

const globalLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 15,
  message: { error: "Too many requests" },
});
app.use(globalLimiter);

app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.error("Global error:", err);

  res.status(500).json({
    error: "Internal server error",
  });
};

app.use(globalErrorHandler);

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 5000;

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`🚀 Backend running on port ${PORT}`);
  });
}

export default app;
