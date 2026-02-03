import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";
import ChatbotIcon from "./ChatbotIcon";
import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { useChatbot } from "../../../hooks/useChatbot";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const {
    messages,
    input,
    setInput,
    sendMessage,
    messagesEndRef,
    loadHistory,
  } = useChatbot();

  useEffect(() => {
    if (open) {
      loadHistory();
    }
  }, [open]);

  return (
    <>
      <ChatbotIcon onClick={() => setOpen(true)} />

      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}
      {open && (
        <div
          className={`fixed top-0 right-0 h-full w-80 sm:w-96 bg-base-200 shadow-lg rounded-l-xl z-50 transform transition-transform duration-300 flex flex-col justify-between px-4 pb-4 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-4 border-b border-base-300 mb-4">
            <h2 className="font-semibold text-lg">AquaclearBot</h2>
            <button onClick={() => setOpen(false)} aria-label="Close Chatbot">
              <FaTimes className="w-5 h-5 text-base-content" />
            </button>
          </div>

          <ChatMessages messages={messages} messagesEndRef={messagesEndRef} />

          <ChatInput
            input={input}
            setInput={setInput}
            sendMessage={sendMessage}
            disabled={messages.some((m) => m.text === "loading")}
          />
        </div>
      )}
    </>
  );
}
