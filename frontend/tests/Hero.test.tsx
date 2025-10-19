// tests/Hero.test.tsx
import { render, screen, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Hero from "../src/pages/Hero";
import axios from "axios";
import { jest } from "@jest/globals";

// Mock axios
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

// Utility to render component with QueryClientProvider
function renderWithClient(ui: React.ReactElement) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false, // important to fail fast for tests
      },
    },
  });

  return render(
    <QueryClientProvider client={queryClient}>
      {ui}
    </QueryClientProvider>
  );
}

describe("Hero component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("shows loading initially", () => {
    // Simulate pending query by not resolving the mock yet
    mockedAxios.get.mockReturnValue(new Promise(() => {}));

    renderWithClient(<Hero />);

    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  });

  it("displays backend status as Online when API returns ok: true", async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: { ok: true } });

    renderWithClient(<Hero />);

    await waitFor(() => {
      expect(screen.getByText(/Backend status: Online/i)).toBeInTheDocument();
    });
  });

  it("displays backend status as Offline when API returns ok: false", async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: { ok: false } });

    renderWithClient(<Hero />);

    await waitFor(() => {
      expect(screen.getByText(/Backend status: Offline/i)).toBeInTheDocument();
    });
  });

  it("displays error if API call fails", async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error("Network Error"));

    renderWithClient(<Hero />);

    await waitFor(() => {
      expect(screen.getByText(/Error!/i)).toBeInTheDocument();
    });
  });
});
