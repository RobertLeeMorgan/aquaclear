import { FaPaperPlane } from "react-icons/fa";

interface ChatInputProps {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  sendMessage: () => void;
  disabled: boolean;
}

export default function ChatInput({ input, setInput, sendMessage, disabled }: ChatInputProps) {
  return (
    <div className="mt-4 flex gap-2">
      <input
        type="text"
        placeholder="Type a message..."
        className="input input-bordered w-full"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
      />
      <button
        className="btn btn-primary"
        disabled={disabled}
        onClick={sendMessage}
        aria-label="Send Message"
      >
        <FaPaperPlane />
      </button>
    </div>
  );
}