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
            className={`chat-bubble shadow-md text-md break-words whitespace-pre-wrap ${
              msg.role === "user"
                ? "chat-bubble-primary"
                : "chat-bubble"
            }`}
          >
            {msg.text === "loading" ? (
              <span className="loading loading-dots loading-md"></span>
            ) : (
              msg.text
            )}
          </div>
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
}
