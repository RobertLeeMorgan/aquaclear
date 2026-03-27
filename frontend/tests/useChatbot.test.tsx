// tests/useChatbot.test.ts
import { vi, describe, it, expect, beforeEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useChatbot, Msg } from "../src/hooks/useChatbot";
import * as sendMessageHook from "../src/hooks/useSendMessage";
import * as chatSchema from "../src/schemas/chatSchema";
import * as getErrorMsg from "../src/utils/getErrorMessage";

const GREETING: Msg = {
  id: "greeting",
  role: "bot",
  text: "Hello — I'm AquaclearBot. I'm here to answer questions about Aquaclear's services (weed-cutting, silt management, Truxor machines, site visits). How can I help you today?",
};

describe("useChatbot hook", () => {
  let mutateMock: any;

  beforeEach(() => {
    // Reset mocks
    vi.restoreAllMocks();
    mutateMock = vi.fn();
    
    // Mock useSendMessage
    vi.spyOn(sendMessageHook, "useSendMessage").mockReturnValue({
      mutate: mutateMock,
      isPending: false,
      isSuccess: false,
      isError: false,
      data: undefined,
      error: null,
      variables: undefined,
      isLoading: false,
      isIdle: true,
      status: "idle",
      reset: vi.fn(),
    } as any);

    // Mock validateChatInput
    vi.spyOn(chatSchema, "validateChatInput").mockImplementation((v) => v);

    // Mock getErrorMessage
    vi.spyOn(getErrorMsg, "default").mockImplementation((e) => "error-message");

    // Mock localStorage
    vi.stubGlobal("localStorage", {
      getItem: vi.fn().mockReturnValue(null),
      setItem: vi.fn(),
    });

    // Mock crypto.randomUUID
    vi.stubGlobal("crypto", {
      randomUUID: vi.fn(() => "random-id"),
    });
  });

  it("initializes with GREETING message", () => {
    const { result } = renderHook(() => useChatbot());
    expect(result.current.messages).toEqual([GREETING]);
    expect(result.current.input).toBe("");
  });

  it("updates input state", () => {
    const { result } = renderHook(() => useChatbot());
    act(() => result.current.setInput("Hello"));
    expect(result.current.input).toBe("Hello");
  });

  it("does not send empty input", () => {
    const { result } = renderHook(() => useChatbot());
    act(() => result.current.sendMessage());
    expect(mutateMock).not.toHaveBeenCalled();
  });

  it("sends message correctly", () => {
    const { result } = renderHook(() => useChatbot());
    act(() => result.current.setInput("Test message"));

    act(() => result.current.sendMessage());

    expect(result.current.messages.length).toBe(3); // GREETING + user + bot
    expect(result.current.messages[1]).toEqual({
      id: "random-id",
      role: "user",
      text: "Test message",
    });
    expect(result.current.messages[2]).toEqual({
      id: "random-id",
      role: "bot",
      text: "",
    });

    expect(mutateMock).toHaveBeenCalled();
  });

  it("handles error from mutate", () => {
    mutateMock.mockImplementationOnce((_args: any, options: any) => {
      options.onError(new Error("fail"));
    });

    const { result } = renderHook(() => useChatbot());
    act(() => result.current.setInput("fail test"));

    act(() => result.current.sendMessage());

    expect(result.current.messages[2].text).toBe("error-message");
  });
});