import { jest } from "@jest/globals";

export const setupGetContextMock = async () => {
  await jest.unstable_mockModule("../../src/services/contextService.js", () => ({
    getContextForMessage: jest.fn(async (message: string, embedding: number[], lastAssistantMessage: string) => {
      if (message === "vague msg") return ""; // matches the vague message test
      if (message === "normal message") {
        // matches the section filter + supabase rpc test
        return `### Context 1
Chunk 1 content
URL: url1

### Context 2
Chunk 2 content
URL: url2`;
      }
      if (message === "msg" && embedding.length === 0) return ""; // no data test
      if (message === "msg" && embedding.length > 0) {
        throw { code: "SUPABASE_VECTOR_ERROR", message: "DB failed" }; // supabase error test
      }
      throw { code: "CONTEXT_GENERATION_ERROR", message: "Unexpected failure" }; // unexpected error test
    }),
  }));
};
