import { render, screen, fireEvent } from "@testing-library/react";
import Chatbot from "../src/components/layout/chatbot/Chatbot";
import { vi, describe, test, beforeEach, expect, Mock } from "vitest";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import * as useChatbotModule from "../src/components/hooks/useChatbot"; // ✅ import the module

// Default mock setup for useChatbot
const loadHistorySpy = vi.fn();

vi.mock("../src/components/hooks/useChatbot", () => ({
  useChatbot: vi.fn(() => ({
    messages: [{ role: "bot", text: "loading" }],
    input: "",
    setInput: vi.fn(),
    sendMessage: vi.fn(),
    messagesEndRef: { current: { scrollIntoView: vi.fn() } },
    loadHistory: loadHistorySpy,
    loading: false,
  })),
}));

function renderWithQueryProvider(ui: React.ReactElement) {
  const queryClient = new QueryClient();
  return render(
    <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>
  );
}

describe("Chatbot component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("renders only the open button initially", () => {
    renderWithQueryProvider(<Chatbot />);
    expect(
      screen.getByRole("button", { name: /open chatbot/i })
    ).toBeInTheDocument();
    expect(screen.queryByText(/aquaclearbot/i)).not.toBeInTheDocument();
  });

  test("opens chatbot when icon clicked", () => {
    renderWithQueryProvider(<Chatbot />);
    fireEvent.click(screen.getByRole("button", { name: /open chatbot/i }));
    expect(screen.getByText(/aquaclearbot/i)).toBeInTheDocument();
  });

  test("calls loadHistory when opened", () => {

    (useChatbotModule.useChatbot as unknown as Mock).mockReturnValueOnce({
      messages: [{ role: "bot", text: "loading" }],
      input: "",
      setInput: vi.fn(),
      sendMessage: vi.fn(),
      messagesEndRef: { current: null },
      loadHistory: loadHistorySpy,
      loading: false,
    });

    renderWithQueryProvider(<Chatbot />);
    fireEvent.click(screen.getByRole("button", { name: /open chatbot/i }));

    expect(loadHistorySpy).toHaveBeenCalledTimes(1);
  });

  test("closes chatbot when close button clicked", () => {
    renderWithQueryProvider(<Chatbot />);
    fireEvent.click(screen.getByRole("button", { name: /open chatbot/i }));
    expect(screen.getByText(/aquaclearbot/i)).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: /close chatbot/i }));
    expect(screen.queryByText(/aquaclearbot/i)).not.toBeInTheDocument();
  });
});
