import MarkdownMessage from "./MarkdownMessage";

interface ChatMessageProps {
  role: "user" | "bot";
  text: string;
}

export default function ChatMessage({ role, text }: ChatMessageProps) {
  const isUser = role === "user";

  return (
    <div className={`chat ${isUser ? "chat-end" : "chat-start"} animate-fade-in-up`}>
      <div
        className={`chat-bubble shadow-md text-md break-words whitespace-pre-wrap prose prose-sm dark:prose-invert max-w-none ${
          isUser ? "chat-bubble-primary" : "chat-bubble"
        }`}
      >
        {text === "loading" ? (
          <span className="loading loading-dots loading-md" />
        ) : (
          <MarkdownMessage>{text}</MarkdownMessage>
        )}
      </div>
    </div>
  );
}
