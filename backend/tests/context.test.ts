import { describe, it, expect, beforeEach, vi } from "vitest";
import { ContextError } from "../src/utils/errors.js";

// --- Mock modules BEFORE import ---
vi.mock("../src/utils/vagueMessage", () => ({ default: vi.fn() }));
vi.mock("../src/utils/sectionFilter", () => ({ default: vi.fn() }));
vi.mock("../src/utils/cosineSimilarity", () => ({ cosineSimilarity: vi.fn() }));

// --- Import after mocks ---
const { getContextForMessage } = await import("../src/services/contextService.js");

const isVagueMessage = vi.mocked(
  (await import("../src/utils/vagueMessage.js")).default
);
const getSectionFilter = vi.mocked(
  (await import("../src/utils/sectionFilter.js")).default
);
const { cosineSimilarity } = await import("../src/utils/cosineSimilarity.js");
const mockedCosine = vi.mocked(cosineSimilarity);

// Helper to safely reset vectorStore chunks
async function setChunks(chunksArray: any[]) {
  const { chunks } = await import("../src/services/vectorStore.js");
  chunks.length = 0;
  chunks.push(...chunksArray);
}

describe("getContextForMessage", () => {
  beforeEach(async () => {
    vi.clearAllMocks();

    // Reset vectorStore chunks to empty before each test
    await setChunks([]);
  });

  it("returns empty string for vague messages with no follow-up", async () => {
    isVagueMessage.mockReturnValue(true);

    const result = await getContextForMessage("vague msg", [], "");
    expect(result).toBe("");
  });

  it("returns top chunks formatted using cosine similarity", async () => {
    isVagueMessage.mockReturnValue(false);
    getSectionFilter.mockReturnValue([]);

    mockedCosine.mockImplementation((_, embedding: number[]) => embedding?.[0] ?? 0);

    const { chunks } = await import("../src/services/vectorStore.js");
    await setChunks([
      { content: "Chunk 1", page_url: "/1", embedding: [0.1], chunk_index: 0 },
      { content: "Chunk 2", page_url: "/2", embedding: [0.2], chunk_index: 1 },
      { content: "Chunk 3", page_url: "/3", embedding: [0.3], chunk_index: 2 },
      { content: "Chunk 4", page_url: "/4", embedding: [0.4], chunk_index: 3 },
    ]);

    const result = await getContextForMessage("msg", [0.1, 0.2], "");

    expect(typeof result).toBe("string");
    expect(result).toContain("### Context 1");
    expect(result).toContain("### Context 2");
    expect(result).toContain("### Context 3");
    expect(result).not.toContain("### Context 4"); // only top 3
  });

  it("applies section filters correctly", async () => {
    isVagueMessage.mockReturnValue(false);
    getSectionFilter.mockReturnValue(["b"]);

    await setChunks([
      { content: "A content", page_url: "/a", embedding: [0.1], chunk_index: 0 },
      { content: "B content", page_url: "/b", embedding: [0.2], chunk_index: 1 },
      { content: "C content", page_url: "/b/sub", embedding: [0.3], chunk_index: 2 },
    ]);

    mockedCosine.mockReturnValue(1);

    const result = await getContextForMessage("msg", [0.1], "");

    expect(result).toContain("B content");
    expect(result).toContain("C content");
    expect(result).not.toContain("A content");
  });

  it("returns empty string if no chunks remain after filtering", async () => {
    isVagueMessage.mockReturnValue(false);
    getSectionFilter.mockReturnValue(["nonexistent"]);

    const result = await getContextForMessage("msg", [0.1], "");
    expect(result).toBe("");
  });

  it("throws ContextError for unexpected errors", async () => {
    isVagueMessage.mockImplementation(() => {
      throw new Error("unexpected");
    });

    await expect(getContextForMessage("msg", [], "")).rejects.toBeInstanceOf(ContextError);
  });
});