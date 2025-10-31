import { OpenAI } from "openai";
import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";
dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_API_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Missing Supabase environment variables");
}

export const supabase = createClient(supabaseUrl, supabaseKey);

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function populateEmbeddings() {
  // Fetch rows where embeddings are null
  const { data: rows, error } = await supabase
    .from("site_documents")
    .select("page_url, chunk_index, content")
    .is("embeddings", null)
    .limit(1000);

  if (error) {
    console.error("Error fetching rows:", error);
    return;
  }

  for (const row of rows) {
    
    try {
      const response = await openai.embeddings.create({
        model: "text-embedding-3-small",
        input: row.content,
      });

      const [embedding] = response.data.map(d => d.embedding);

      // Update the row with the embedding
      const { error: updateError } = await supabase
        .from("site_documents")
        .update({ embeddings: embedding })
        .eq("page_url", row.page_url)
        .eq("chunk_index", row.chunk_index);

      if (updateError) {
        console.error(`Error updating row ${row.page_url} [${row.chunk_index}]:`, updateError);
      } else {
        console.log(`Updated embedding for ${row.page_url} [${row.chunk_index}]`);
      }
    } catch (err) {
      console.error("Error generating embedding:", err);
    }
  }
}

populateEmbeddings();