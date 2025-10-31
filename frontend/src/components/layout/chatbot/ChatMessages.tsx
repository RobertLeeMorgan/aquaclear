import React from "react";
import ChatMessage from "./ChatMessage";

interface ChatbotMessagesProps {
  messages: { role: "user" | "bot"; text: string }[];
  messagesEndRef: React.RefObject<HTMLDivElement | null>;
}

export default function ChatbotMessages({ messages, messagesEndRef }: ChatbotMessagesProps) {
  return (
    <div className="space-y-4 overflow-y-auto flex-1 pr-1 no-scrollbar">
      {messages.map((msg, i) => (
        <ChatMessage key={i} role={msg.role} text={msg.text} />
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
}
