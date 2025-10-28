interface ChatbotMessagesProps {
  messages: { role: "user" | "bot"; text: string }[];
  messagesEndRef: React.RefObject<HTMLDivElement | null>;
}

export default function ChatbotMessages({
  messages,
  messagesEndRef,
}: ChatbotMessagesProps) {
  return (
    <div className="space-y-4 overflow-y-auto flex-1 pr-1 no-scrollbar">
      {messages.map((msg, i) => (
        <div
          key={i}
          className={`chat ${msg.role === "user" ? "chat-end" : "chat-start"}`}
        >
          <div
            className={`chat-bubble shadow-md text-md ${
              msg.role === "user"
                ? "chat-bubble-primary"
                : "chat-bubble-secondary"
            }`}
          >
            {msg.text}
          </div>
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
}
