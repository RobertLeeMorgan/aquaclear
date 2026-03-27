// tests/useSendMessage.test.ts
import { describe, it, expect, vi, beforeEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useSendMessage } from "../src/hooks/useSendMessage";
import * as readStreamModule from "../src/utils/readStream";
import * as parseErrorModule from "../src/utils/ParseError";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

describe("useSendMessage hook", () => {
  let queryClient: QueryClient;

  beforeEach(() => {
    queryClient = new QueryClient({
      defaultOptions: { queries: { retry: false } },
    });

    vi.restoreAllMocks();
  });

  function wrapper({ children }: { children: React.ReactNode }) {
    return (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
  }

  it("calls fetch and readStream on success", async () => {
    const mockText = "chunked response";
    const mockOnChunk = vi.fn();

    const mockReader = { getReader: vi.fn() };
    const mockBody = { getReader: vi.fn(() => mockReader) };
    const mockResponse = {
      ok: true,
      body: mockBody,
    } as unknown as Response;

    vi.stubGlobal(
      "fetch",
      vi.fn(() => Promise.resolve(mockResponse)),
    );

    vi.spyOn(readStreamModule, "readStream").mockImplementation(
      async ({ onChunk }) => {
        onChunk(mockText);
        return "final text";
      },
    );

    const { result } = renderHook(() => useSendMessage(), { wrapper });

    await act(async () => {
      const mutation = result.current.mutateAsync({
        message: "hello",
        context: [],
        onChunk: mockOnChunk,
      });

      await mutation;
    });

    expect(fetch).toHaveBeenCalledWith("/api/chatbot", expect.any(Object));
    expect(mockOnChunk).toHaveBeenCalledWith(mockText);
  });

  it("throws error if response is not ok", async () => {
    const mockResponse = { ok: false } as unknown as Response;
    vi.stubGlobal(
      "fetch",
      vi.fn(() => Promise.resolve(mockResponse)),
    );
    vi.spyOn(parseErrorModule, "parseError").mockImplementation(
      () => new Error("parsed error") as unknown as Promise<Error>,
    );

    const { result } = renderHook(() => useSendMessage(), { wrapper });

    let error: any;
    await act(async () => {
      try {
        await result.current.mutateAsync({
          message: "hi",
          context: [],
          onChunk: () => {},
        });
      } catch (e) {
        error = e;
      }
    });

    expect(error).toEqual(new Error("parsed error"));
  });

  it("throws error if no response body", async () => {
    const mockResponse = { ok: true, body: null } as unknown as Response;
    vi.stubGlobal(
      "fetch",
      vi.fn(() => Promise.resolve(mockResponse)),
    );

    const { result } = renderHook(() => useSendMessage(), { wrapper });

    let error: any;
    await act(async () => {
      try {
        await result.current.mutateAsync({
          message: "hi",
          context: [],
          onChunk: () => {},
        });
      } catch (e) {
        error = e;
      }
    });

    expect(error).toEqual(new Error("No response body returned from server"));
  });
});
