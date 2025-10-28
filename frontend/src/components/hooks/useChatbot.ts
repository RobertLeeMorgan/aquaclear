import { useEffect, useRef, useState } from "react";
import { useSendMessage } from "./useSendMessage";

export function useChatbot() {
  const [messages, setMessages] = useState<
    { role: "user" | "bot"; text: string }[]
  >([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const greetedRef = useRef(false);
  const sendMessageMutation = useSendMessage();

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { role: "user" as const, text: input };
    const loadingMessage = { role: "bot" as const, text: "loading" };

    setMessages((prev) => [...prev, userMessage, loadingMessage]);
    setInput("");

    sendMessageMutation.mutate(input, {
      onSuccess: (reply) => {
        setMessages((prev) => {
          const filtered = prev.filter((m) => m.text !== "loading");
          return [...filtered, { role: "bot" as const, text: reply }];
        });
      },
      onError: (error) => {
        setMessages((prev) => prev.filter((m) => m.text !== "loading"));
        const message = getErrorMessage(error);
        setMessages((prev) => [
          ...prev,
          { role: "bot" as const, text: message },
        ]);
      },
    });
  };

  const greet = () => {
    if (greetedRef.current) return;
    greetedRef.current = true;
    const loadingMessage = { role: "bot" as const, text: "loading" };
    setMessages([loadingMessage]);

    setTimeout(() => {
      setMessages([
        {
          role: "bot",
          text: `Hello — I'm AquaclearBot. I'm here to answer questions about Aquaclear's services (weed-cutting, silt management, Truxor machines, site visits). How can I help you today?`,
        },
      ]);
    }, 1000);
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
    greet,
    loading: sendMessageMutation.isPending,
  };
}

function getErrorMessage(error: any) {
  if (error instanceof TypeError && error.message.includes("fetch"))
    return "The AI is waking up — please wait a few seconds and try again.";
  return "Something went wrong — please try again shortly.";
}
