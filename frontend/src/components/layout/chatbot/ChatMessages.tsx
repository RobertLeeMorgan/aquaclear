import React from "react";
import ChatMessage from "./ChatMessage";
import type { Msg } from "../../../hooks/useChatbot";

interface ChatbotMessagesProps {
  messages: Msg[];
  messagesEndRef: React.RefObject<HTMLDivElement | null>;
  isStreaming: boolean;
}

export default function ChatbotMessages({
  messages,
  messagesEndRef,
}: ChatbotMessagesProps) {
  return (
    <div className="space-y-4 overflow-y-auto flex-1 pr-1 no-scrollbar">
      {messages.map((msg) => (
        <ChatMessage
          key={msg.id}
          role={msg.role}
          text={msg.text}
        />
      ))}

      <div ref={messagesEndRef} />
    </div>
  );
}