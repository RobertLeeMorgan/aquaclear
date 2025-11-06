import { renderHook, act, waitFor } from "@testing-library/react";
import { vi, describe, test, expect, beforeEach } from "vitest";
import { useSendMessage } from "../src/components/hooks/useSendMessage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Helper to wrap hook in React Query provider
function wrapper({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}

describe("useSendMessage hook", () => {
  beforeEach(() => {
    vi.restoreAllMocks(); // reset mocks
  });

  test("sends a message and returns reply", async () => {
    const mockReply = "Hello!";
    const fetchSpy = vi.spyOn(global, "fetch").mockResolvedValue({
      ok: true,
      json: async () => ({ reply: mockReply }),
    } as any);

    const { result } = renderHook(() => useSendMessage(), { wrapper });

    act(() => {
      result.current.mutate("Hi");
    });

    await waitFor(() => result.current.isSuccess);

    expect(fetchSpy).toHaveBeenCalledWith("/api/chatbot", expect.objectContaining({
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: "Hi" }),
      credentials: "include",
    }));

    expect(result.current.data).toBe(mockReply);
  });

  test("throws friendly error when server returns known code", async () => {
    const fetchSpy = vi.spyOn(global, "fetch").mockResolvedValue({
      ok: false,
      json: async () => ({ code: "RATE_LIMIT" }),
    } as any);

    const { result } = renderHook(() => useSendMessage(), { wrapper });

    act(() => {
      result.current.mutate("Hi");
    });

    await waitFor(() => result.current.isError);

    expect(result.current.error).toBeInstanceOf(Error);
    expect(result.current.error?.message).toBe(
      "You're sending messages too quickly — please slow down."
    );
  });

  test("throws generic error if JSON parsing fails", async () => {
    const fetchSpy = vi.spyOn(global, "fetch").mockResolvedValue({
      ok: false,
      json: async () => { throw new Error("parse fail"); },
    } as any);

    const { result } = renderHook(() => useSendMessage(), { wrapper });

    act(() => {
      result.current.mutate("Hi");
    });

    await waitFor(() => result.current.isError);

    expect(result.current.error).toBeInstanceOf(Error);
    expect(result.current.error?.message).toBe("Something went wrong — please try again.");
  });
});
