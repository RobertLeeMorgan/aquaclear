import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";
import ChatbotIcon from "./ChatbotIcon";
import { useState, useRef, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { useMutation } from "@tanstack/react-query";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<
    { role: "user" | "bot"; text: string }[]
  >([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const sendMessageMutation = useMutation({
    mutationFn: async (message: string) => {
      const res = await fetch("/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      if (!res.ok) throw new Error("Failed to send message");

      const data = await res.json();
      return data.reply as string;
    },
  });

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMessage = { role: "user" as const, text: input };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");

    sendMessageMutation.mutate(input, {
      onSuccess: (reply) => {
        const botMessage = { role: "bot" as const, text: reply };
        setMessages((prev) => [...prev, botMessage]);
      },
      onError: () => {
        const errorMessage = {
          role: "bot" as const,
          text: "Sorry, something went wrong.",
        };
        setMessages((prev) => [...prev, errorMessage]);
      },
    });
  };

  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      {/* Floating button */}
      <ChatbotIcon onClick={() => setOpen(true)} />

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Chat panel */}
      <div
      data-testid="chat-panel"
        className={`fixed top-0 right-0 h-full w-80 sm:w-96 bg-base-200 shadow-lg z-50 transform transition-transform duration-300 flex flex-col justify-between px-4 pb-4 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-base-300 mb-4">
          <h2 className="font-semibold text-lg">Chatbot</h2>
          <button onClick={() => setOpen(false)} aria-label="Close Chatbot">
            <FaTimes className="w-5 h-5 text-base-content" />
          </button>
        </div>

        {/* Messages */}
        <ChatMessages messages={messages} messagesEndRef={messagesEndRef} />

        {/* Input */}
        <ChatInput
          input={input}
          setInput={setInput}
          sendMessage={sendMessage}
          disabled={(sendMessageMutation as any).isLoading}
        />
      </div>
    </>
  );
}
