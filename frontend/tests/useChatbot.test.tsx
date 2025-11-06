// tests/useChatbot.test.tsx
import { renderHook, act, waitFor } from "@testing-library/react";
import { vi, describe, test, expect, beforeEach } from "vitest";
import { useChatbot } from "../src/components/hooks/useChatbot";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function wrapper({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}

// Mock useSendMessage hook
const mutateMock = vi.fn();
vi.mock("../src/components/hooks/useSendMessage", () => ({
  useSendMessage: vi.fn(() => ({
    mutate: mutateMock,
    isPending: false,
  })),
}));

describe("useChatbot hook (untested parts)", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    mutateMock.mockReset();
  });

  test("loadHistory sets GREETING on 401/403", async () => {
    vi.spyOn(global, "fetch").mockResolvedValue({ status: 401 } as any);

    const { result } = renderHook(() => useChatbot(), { wrapper });

    await act(async () => {
      await result.current.loadHistory();
    });

    expect(result.current.messages[0].text).toContain("Hello — I'm AquaclearBot");
  });

  test("loadHistory sets GREETING on non-ok response", async () => {
    vi.spyOn(global, "fetch").mockResolvedValue({ status: 500, ok: false } as any);

    const { result } = renderHook(() => useChatbot(), { wrapper });

    await act(async () => {
      await result.current.loadHistory();
    });

    expect(result.current.messages[0].text).toContain("Hello — I'm AquaclearBot");
  });

  test("loadHistory prepends GREETING if missing", async () => {
    const history = [{ role: "bot", text: "Previous message" }];
    vi.spyOn(global, "fetch").mockResolvedValue({
      ok: true,
      json: async () => ({ history }),
    } as any);

    const { result } = renderHook(() => useChatbot(), { wrapper });

    await act(async () => {
      await result.current.loadHistory();
    });

    expect(result.current.messages[0].text).toContain("Hello — I'm AquaclearBot");
    expect(result.current.messages[1]).toEqual(history[0]);
  });

  test("loadHistory keeps GREETING if first message present", async () => {
    const history = [
      { role: "bot", text: "Hello — I'm AquaclearBot. I'm here to answer questions about Aquaclear's services (weed-cutting, silt management, Truxor machines, site visits). How can I help you today?" },
      { role: "user", text: "Hi" }
    ];
    vi.spyOn(global, "fetch").mockResolvedValue({
      ok: true,
      json: async () => ({ history }),
    } as any);

    const { result } = renderHook(() => useChatbot(), { wrapper });

    await act(async () => {
      await result.current.loadHistory();
    });

    expect(result.current.messages).toEqual(history);
  });

  test("loadHistory handles fetch exception", async () => {
    vi.spyOn(global, "fetch").mockRejectedValue(new Error("fail"));

    const { result } = renderHook(() => useChatbot(), { wrapper });

    await act(async () => {
      await result.current.loadHistory();
    });

    expect(result.current.messages[0].text).toContain("Hello — I'm AquaclearBot");
  });

  test("sendMessage does nothing on empty input", () => {
    const { result } = renderHook(() => useChatbot(), { wrapper });

    act(() => {
      result.current.sendMessage();
    });

    expect(mutateMock).not.toHaveBeenCalled();
  });

  test("sendMessage adds user + loading messages for valid input", () => {
    const { result } = renderHook(() => useChatbot(), { wrapper });
    act(() => {
      result.current.setInput("Hello");
      result.current.sendMessage();
    });

    waitFor(() => {
    const lastTwo = result.current.messages.slice(-2);
    expect(lastTwo).toEqual([
      { role: "user", text: "Hello" },
      { role: "bot", text: "loading" },
    ]);
  });
  });

  test("scrollIntoView is called when messages change", () => {
    const scrollMock = vi.fn();
    const { result } = renderHook(() => useChatbot(), { wrapper });
    act(() => {
      const div = document.createElement("div");
      div.scrollIntoView = scrollMock;
      result.current.messagesEndRef.current = div;
    });

    // Trigger a state change via sendMessage
    act(() => {
      result.current.setInput("Hello");
      result.current.sendMessage();
    });

    waitFor(() => {
      expect(scrollMock).toHaveBeenCalled();
    });
  });
});
