import express from "express";
import cors from "cors";
import chatbotRouter from "./routes/chatbot.js";
import contactRouter from "./routes/contact.js";
import { maybeCleanupHistory } from "./utils/cleanup.js";
import helmet from "helmet";
import { ErrorRequestHandler } from "express";
import cookieParser from "cookie-parser";

// import dotenv from "dotenv";
// dotenv.config();

const app = express();

app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production"
        ? ["https://aquaclear.onrender.com"]
        : ["http://localhost:5173"],
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(express.json());

app.use(helmet());

app.use(cookieParser());

app.set("trust proxy", 1);

maybeCleanupHistory();

app.use("/api", contactRouter);

app.use("/api", chatbotRouter);

app.get("/api/wakeup", (req, res) => {
  res.status(200).send("Aquaclear API is running!");
});

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
    console.log(`Backend running on port ${PORT}`);
  });
}

export default app;
