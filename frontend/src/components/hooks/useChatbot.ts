import { useEffect, useRef, useState } from "react";
import { useSendMessage } from "./useSendMessage";
import { validateChatInput } from "../schemas/chatSchema";

type Msg = { role: "user" | "bot"; text: string };

const GREETING: Msg = {
  role: "bot",
  text: `Hello — I'm AquaclearBot. I'm here to answer questions about Aquaclear's services (weed-cutting, silt management, Truxor machines, site visits). How can I help you today?`,
};

export function useChatbot() {
  const [messages, setMessages] = useState<Msg[]>([
    { role: "bot", text: "loading" },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const sendMessageMutation = useSendMessage();

  const loadHistory = async () => {
    try {
      const res = await fetch("/api/chatbot/history", {
        method: "GET",
        credentials: "include",
      });

      if (res.status === 401 || res.status === 403) {
        console.log("No chat session — starting fresh");
        setMessages([GREETING]);
        return;
      }

      if (!res.ok) {
        console.warn("Failed to fetch history");
        setMessages([GREETING]);
        return;
      }

      const data = await res.json();
      if (Array.isArray(data.history)) {
        const history = data.history as Msg[];
        const hasGreeting =
          history.length > 0 && history[0].text === GREETING.text;
        setMessages(hasGreeting ? history : [GREETING, ...history]);
      }
    } catch (err) {
      console.warn("History fetch error", err);
      setMessages([GREETING]);
    }
  };

  const sendMessage = () => {
    if (!input.trim()) return;
    const safeInput = validateChatInput(input);

    if (!safeInput) return;

    const userMessage: Msg = { role: "user", text: safeInput };
    const loadingMessage: Msg = { role: "bot", text: "loading" };

    setMessages((prev) => [...prev, userMessage, loadingMessage]);
    setInput("");

    sendMessageMutation.mutate(input, {
      onSuccess: (reply) => {
        setMessages((prev) => {
          const filtered = prev.filter((m) => m.text !== "loading");
          return [...filtered, { role: "bot", text: reply }];
        });
      },
      onError: (error) => {
        setMessages((prev) => prev.filter((m) => m.text !== "loading"));
        const message = getErrorMessage(error);
        setMessages((prev) => [...prev, { role: "bot", text: message }]);
      },
    });
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return {
    messages,
    input,
    setInput,
    sendMessage,
    messagesEndRef,
    loadHistory,
    loading: sendMessageMutation.isPending,
  };
}

function getErrorMessage(error: any) {
  if (!error) return "Something went wrong — please try again shortly.";

  if (error instanceof Error && "code" in error) {
    return error.message;
  }

  if (error instanceof TypeError && error.message.includes("fetch"))
    return "The AI is waking up — please wait a few seconds and try again.";

  return "Something went wrong — please try again shortly.";
}
