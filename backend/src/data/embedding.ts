import fs from "fs";
import { OpenAI } from "openai";
import dotenv from "dotenv";
dotenv.config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const chunks = JSON.parse(fs.readFileSync("./src/data/chunks.json", "utf-8"));

async function run() {
  const enriched = [];
  for (const chunk of chunks) {
    const res = await openai.embeddings.create({
      model: "text-embedding-3-small",
      input: chunk.content,
    });
    enriched.push({
      ...chunk,
      embedding: res.data[0]?.embedding,
    });
    console.log(`Embedded ${chunk.page_url} [${chunk.chunk_index}]`);
  }
  fs.writeFileSync("./src/data/embeddings.json", JSON.stringify(enriched));
}
run();