import express from "express";
import cors from "cors";
import chatbotRouter from "./routes/chatbot.js";
import contactRouter from "./routes/contact.js";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import { globalErrorHandler } from "./middleware/globalErrorHandler.js";

import path from "path";
import { fileURLToPath } from "url";
import compression from "compression";

// import dotenv from "dotenv";
// dotenv.config();

const app = express();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicPath = path.join(__dirname, "../public");

app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production"
        ? ["https://aquaclear.onrender.com"]
        : ["http://localhost:5173"],
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  }),
);

app.use(
  compression({
    filter: (req, res) => {
      if (req.headers["accept"]?.includes("text/event-stream")) {
        return false;
      }
      return compression.filter!(req, res);
    },
  }),
);

app.use(express.json());

app.use(helmet());

app.use(cookieParser());

app.set("trust proxy", 1);

app.use("/api/contact", contactRouter);

app.use("/api/chatbot", chatbotRouter);

app.get("/api/wakeup", (req, res) => {
  res.status(200).send("Aquaclear API is running!");
});

app.use(express.static(publicPath));

app.get("/:path(*)", (req, res, next) => {
  if (req.path.startsWith("/api")) return next();
  res.sendFile(path.join(publicPath, "index.html"));
});

app.use(globalErrorHandler);

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 5000;

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Backend running on port ${PORT}`);
  });
}

export default app;
