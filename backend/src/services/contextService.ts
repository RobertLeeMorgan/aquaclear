import isVagueMessage from "../utils/vagueMessage.js";
import getSectionFilter from "../utils/sectionFilter.js";
import { ContextError, AppError } from "../utils/errors.js";
import { chunks } from "./vectorStore.js";
import { cosineSimilarity } from "../utils/cosineSimilarity.js";

export async function getContextForMessage(
  message: string,
  queryEmbedding: number[],
  lastAssistantMsg: string,
) {
  try {
    const aiAskedForFollowUp =
      /would you like|want to learn more|see more|need more info|link/i.test(
        lastAssistantMsg,
      );

    if (isVagueMessage(message) && !aiAskedForFollowUp) return "";

    const sectionFilters = getSectionFilter(message);

    let scored = chunks.map((c) => ({
      ...c,
      score: cosineSimilarity(queryEmbedding, c.embedding),
    }));

    if (sectionFilters?.length) {
      scored = scored.filter((c) =>
        sectionFilters.some(
          (filter) =>
            c.page_url === `/${filter}` ||
            c.page_url?.startsWith(`/${filter}/`),
        ),
      );
    }

    const topChunks = scored.sort((a, b) => b.score - a.score).slice(0, 3);
    if (!topChunks.length) return "";

    return topChunks
      .map(
        (c, i) => `### Context ${i + 1}
${c.content.trim()}

URL: ${c.page_url ?? "N/A"}`,
      )
      .join("\n\n---\n\n");
  } catch (err) {
    if (err instanceof AppError) throw err;

    throw new ContextError(
      (err as Error).message || "Context retrieval failed",
      "Failed to prepare context for your message.",
    );
  }
}
