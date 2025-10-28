import { FaRobot } from "react-icons/fa";

interface ChatbotIconProps {
  onClick: () => void;
}

export default function ChatbotIcon({ onClick }: ChatbotIconProps) {
  return (
    <button
      onClick={onClick}
      className="fixed sm:bottom-8 sm:right-8 bottom-6 right-6 btn btn-primary rounded-full shadow-lg z-50 tooltip tooltip-left"
      data-tip="Need help? Ask our chatbot!"
      aria-label="Open Chatbot"
    >
      <FaRobot className="text-2xl sm:text-4xl" />
    </button>
  );
}

