import { jest, describe, it, expect, beforeEach, beforeAll } from "@jest/globals";
import { setupMocks } from "./__mocks__/index.js";

let getContextForMessage: any;
let supabase: any;
let isVagueMessage: jest.Mock;
let getSectionFilter: jest.Mock;

beforeAll(async () => {
  await setupMocks();

  const contextService = await import("../src/services/contextService.js");
  getContextForMessage = contextService.getContextForMessage as jest.Mock;

  const supabaseModule = await import("../src/supabaseClient.js");
  supabase = supabaseModule.supabase;

  const vagueModule = await import("../src/utils/vagueMessage.js");
  isVagueMessage = vagueModule.default as jest.Mock;

  const sectionModule = await import("../src/utils/sectionFilter.js");
  getSectionFilter = sectionModule.default as jest.Mock
});

describe("getContextForMessage (integrated with centralized mocks)", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("returns empty string if message is vague and AI has not asked for follow-up", async () => {
    const result = await getContextForMessage("vague msg", [], "Last assistant message");
    expect(result).toBe("");
  });

  it("calls supabase.rpc with section filters and returns formatted context", async () => {
    const result = await getContextForMessage("normal message", [0.1, 0.2], "");
    
    expect(result).toContain("### Context 1");
    expect(result).toContain("Chunk 1 content");
    expect(result).toContain("URL: url1");
    expect(result).toContain("### Context 2");
    expect(result).toContain("Chunk 2 content");
    expect(result).toContain("URL: url2");

    expect(supabase.rpc).toHaveBeenCalledWith("match_site_documents", expect.any(Object));
  });

  it("returns empty string if supabase returns no data", async () => {
    const result = await getContextForMessage("msg", [], "");
    expect(result).toBe("");
  });

  it("throws DATABASE_ERROR if supabase returns an error", async () => {
    await expect(getContextForMessage("supabase error", [-1], "")).rejects.toMatchObject({
      code: "DATABASE_ERROR",
      message: "DB failed",
    });
  });

  it("throws CONTEXT_ERROR for unexpected errors", async () => {
    await expect(getContextForMessage("unexpected", [999], "")).rejects.toMatchObject({
      code: "CONTEXT_ERROR",
      message: "Unexpected RPC call",
    });
  });
});
