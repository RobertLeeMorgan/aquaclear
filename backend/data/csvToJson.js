import fs from "fs";
// import { parse } from "csv-parse";

const inputPath = "./src/chunks.csv";
const outputPath = "./src/chunks.json";

async function run() {
  const fileContent = fs.readFileSync(inputPath, "utf-8");

  parse(
    fileContent,
    {
      columns: true, // use header row
      skip_empty_lines: true,
      trim: true,
    },
    (err, records) => {
      if (err) {
        console.error("CSV parse error:", err);
        return;
      }

      const cleaned = records.map((r) => ({
        page_url: r.page_url,
        chunk_index: Number(r.chunk_index),
        content: r.content,
      }));

      fs.writeFileSync(outputPath, JSON.stringify(cleaned, null, 2));

      console.log(`Converted ${cleaned.length} rows to JSON`);
    }
  );
}

run();