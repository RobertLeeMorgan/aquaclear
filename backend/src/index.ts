import express from "express";
import cors from "cors";
import chatbotRouter from "./routes/chatbot.js"

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Aquaclear API is running!");
});

app.post("/api/contact", (req, res) => {
  console.log("hello")
  res.status(200);
});

app.use("/api", chatbotRouter);

app.get("/api/wakeup", (req, res) => {
  res.status(200);
});

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 5000;

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Backend running on port ${PORT}`);
  });
}

export default app;
