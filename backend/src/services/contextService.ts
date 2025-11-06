import { supabase } from "../supabaseClient.js";
import isVagueMessage from "../utils/vagueMessage.js";
import getSectionFilter from "../utils/sectionFilter.js";
import { OpenAI } from "openai";
import { DatabaseError, ContextError, AppError } from "../utils/errors.js";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function getContextForMessage(
  message: string,
  queryEmbedding: number[],
  lastAssistantMsg: string
) {
  try {
    const sectionFilters = getSectionFilter(message);
    console.log(sectionFilters);
    const aiAskedForFollowUp =
      /would you like|want to learn more|see more|need more info|link/i.test(
        lastAssistantMsg
      );

    if (isVagueMessage(message) && !aiAskedForFollowUp) return "";

    const { data, error } = await supabase.rpc("match_site_documents", {
      query_embedding: queryEmbedding,
      match_count: 6,
      section_filters: sectionFilters.length ? sectionFilters : null,
    });

    if (error) {
      throw new DatabaseError(
        error.message || "Vector search failed",
        "Failed to connect to the database."
      );
    }

    const chunks = data ?? [];
    if (!chunks.length) return "";

    return chunks
      .map(
        (c: any, i: number) => `### Context ${i + 1}
${c.content.trim()}

URL: ${c.page_url ?? "N/A"}`
      )
      .join("\n\n---\n\n");
  } catch (err) {
    if (err instanceof AppError) throw err;
    throw new ContextError(
      (err as Error).message || "Context retrieval failed",
      "Failed to prepare context for your message."
    );
  }
}
