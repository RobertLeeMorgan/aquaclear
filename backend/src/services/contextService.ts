import { supabase } from "../supabaseClient.js";
import isVagueMessage from "../utils/vagueMessage.js";
import getSectionFilter from "../utils/sectionFilter.js";
import { OpenAI } from "openai";
import { AppError } from "../utils/errors.js";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function getContextForMessage(
  message: string,
  queryEmbedding: number[],
  lastAssistantMsg: string
) {
  try {
    const sectionFilters = getSectionFilter(message);

    const aiAskedForFollowUp =
      /would you like|want to learn more|see more|need more info|link/i.test(
        lastAssistantMsg
      );

    if (isVagueMessage(message) && !aiAskedForFollowUp) return "";

    const { data, error } = await supabase.rpc("match_site_documents", {
      query_embedding: queryEmbedding,
      match_count: 3,
      section_filters: sectionFilters.length ? sectionFilters : null,
    });

    if (error) {
      throw new AppError(
        "SUPABASE_VECTOR_ERROR",
        error.message || "Vector search failed",
        "Failed to fetch related site context."
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
    throw new AppError(
      "CONTEXT_GENERATION_ERROR",
      (err as Error).message,
      "Failed to prepare context for your message."
    );
  }
}
