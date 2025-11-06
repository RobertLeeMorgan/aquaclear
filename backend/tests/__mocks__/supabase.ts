import { jest } from "@jest/globals";

export const setupSupabaseMock = async () => {
  await jest.unstable_mockModule("../../src/supabaseClient.js", () => ({
    supabase: {
      from: jest.fn(() => ({
        insert: jest.fn().mockImplementation(() => Promise.resolve({})),
      })),
      rpc: jest.fn(async (fnName: string, params: any) => {
        if (fnName === "match_site_documents") {
          if (params.query_embedding?.length === 0) {
            return { data: [], error: null };
          }
          if (params.query_embedding?.[0] === 0.1 && params.query_embedding?.[1] === 0.2) {
            return {
              data: [
                { content: "Chunk 1 content", page_url: "url1" },
                { content: "Chunk 2 content", page_url: "url2" },
              ],
              error: null,
            };
          }
          if (params.query_embedding?.[0] === -1) {
            return { data: null, error: { message: "DB failed" } };
          }
        }
        throw new Error("Unexpected RPC call");
      }),
    },
  }));
};
