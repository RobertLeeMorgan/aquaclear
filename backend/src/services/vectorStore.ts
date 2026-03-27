import fs from "fs";

type Chunk = {
  page_url: string;
  chunk_index: number;
  content: string;
  embedding: number[];
};

export const chunks: Chunk[] = JSON.parse(
  fs.readFileSync("./src/data/embeddings.json", "utf-8"),
);
