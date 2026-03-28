import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const filePath = path.resolve(__dirname, "../data/embeddings.json");

type Chunk = {
  page_url: string;
  chunk_index: number;
  content: string;
  embedding: number[];
};

export const chunks: Chunk[] = JSON.parse(
  fs.readFileSync(filePath, "utf-8"),
);
