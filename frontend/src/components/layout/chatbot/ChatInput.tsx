import { FaPaperPlane } from "react-icons/fa";
import { useRef, useEffect } from "react";

interface ChatInputProps {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  sendMessage: () => void;
  disabled: boolean;
}

export default function ChatInput({
  input,
  setInput,
  sendMessage,
  disabled,
}: ChatInputProps) {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  // Auto-resize textarea height based on content
  useEffect(() => {
    const el = textareaRef.current;
    if (el) {
      el.style.height = "auto";
      el.style.height = `${el.scrollHeight}px`;
    }
  }, [input]);

  return (
    <div className="mt-4 flex gap-2 items-end">
      <textarea
        id="chatbot"
        ref={textareaRef}
        placeholder="Type a message..."
        className="textarea textarea-bordered w-full resize-none overflow-hidden leading-snug"
        rows={1}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
          }
        }}
      />
      <button
        className={`btn btn-primary ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={disabled}
        onClick={sendMessage}
        aria-label="Send Message"
      >
        <FaPaperPlane />
      </button>
    </div>
  );
}
