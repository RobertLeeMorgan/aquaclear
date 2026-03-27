import { useEffect, useRef, useState } from "react";
import { useSendMessage } from "./useSendMessage";
import { validateChatInput } from "../schemas/chatSchema";
import getErrorMessage from "../utils/getErrorMessage";

export type Msg = { id: string; role: "user" | "bot"; text: string };

const GREETING: Msg = {
  id: "greeting",
  role: "bot",
  text: "Hello — I'm AquaclearBot. I'm here to answer questions about Aquaclear's services (weed-cutting, silt management, Truxor machines, site visits). How can I help you today?",
};

const STORAGE_KEY = "chat-history";

const createId = () => crypto.randomUUID();

const getInitialMessages = (): Msg[] => {
  if (typeof window === "undefined") return [GREETING];

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [GREETING];
  } catch {
    return [GREETING];
  }
};

const updateMessage = (prev: Msg[] = [], id: string, text: string) =>
  prev.map((msg) => (msg.id === id ? { ...msg, text } : msg));

const MAX_MESSAGES = 50;

export function useChatbot() {
  const [messages, setMessages] = useState<Msg[]>(() => getInitialMessages());
  const [input, setInput] = useState("");

  const abortRef = useRef<AbortController | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const streamBufferRef = useRef("");

  const sendMessageMutation = useSendMessage();

  const sendMessage = () => {
    if (!input.trim() || sendMessageMutation.isPending) return;

    abortRef.current?.abort();

    const controller = new AbortController();
    abortRef.current = controller;

    const safeInput = validateChatInput(input);
    if (!safeInput) return;

    const userId = createId();
    const botId = createId();

    const current = messages;

    const userMsg: Msg = {
      id: userId,
      role: "user",
      text: safeInput,
    };

    setMessages((prev) => [
      ...prev,
      userMsg,
      { id: botId, role: "bot", text: "" },
    ]);

    const context: Msg[] = [...current, userMsg].slice(-4);

    streamBufferRef.current = "";
    setInput("");

    sendMessageMutation.mutate(
      {
        message: safeInput,
        context,
        signal: controller.signal,

        onChunk: (chunk) => {
          streamBufferRef.current += chunk;

          setMessages((prev) =>
            updateMessage(prev, botId, streamBufferRef.current),
          );
        },
      },
      {
        onSuccess: (finalText) => {
          setMessages((prev) => {
            const updated = updateMessage(prev, botId, finalText);
            const trimmed = updated.slice(-MAX_MESSAGES);

            try {
              localStorage.setItem(STORAGE_KEY, JSON.stringify(trimmed));
            } catch {}

            return trimmed;
          });
        },

        onError: (error: unknown) => {
          if (error instanceof DOMException && error.name === "AbortError")
            return;

          const message = getErrorMessage(error);

          setMessages((prev) => updateMessage(prev, botId, message));
        },
      },
    );
  };

  useEffect(() => {
    return () => {
      abortRef.current?.abort();
    };
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return {
    messages,
    input,
    setInput,
    sendMessage,
    messagesEndRef,
    loading: sendMessageMutation.isPending,
  };
}
