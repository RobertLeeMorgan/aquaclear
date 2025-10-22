// tests/Contact.test.tsx
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Contact from "../src/pages/Contact";
import { vi, describe, test, beforeEach, expect } from "vitest";
import '@testing-library/jest-dom';

// Mock global fetch and alert
global.fetch = vi.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({}),
  })
) as unknown as typeof fetch;

global.alert = vi.fn();

describe("Contact Page", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("renders all form fields", () => {
    render(<Contact />);

    expect(screen.getByText("Contact Us")).toBeInTheDocument();
    expect(screen.getByLabelText("Full Name *")).toBeInTheDocument();
    expect(screen.getByLabelText("E-mail *")).toBeInTheDocument();
    expect(screen.getByLabelText("Tel *")).toBeInTheDocument();
    expect(screen.getByLabelText(/Postcode of site/)).toBeInTheDocument();
    expect(screen.getByLabelText("How did you find us?")).toBeInTheDocument();
    expect(screen.getByLabelText("Message *")).toBeInTheDocument();
  });

  test("submits the form and shows success alert", async () => {
    render(<Contact />);

    // Fill form fields
    fireEvent.change(screen.getByLabelText("Full Name *"), {
      target: { value: "John Smith" },
    });
    fireEvent.change(screen.getByLabelText("E-mail *"), {
      target: { value: "john@email.com" },
    });
    fireEvent.change(screen.getByLabelText("Tel *"), {
      target: { value: "01234 567890" },
    });
    fireEvent.change(screen.getByLabelText(/Postcode of site/), {
      target: { value: "SW1A 1AA" },
    });
    fireEvent.change(screen.getByLabelText("How did you find us?"), {
      target: { value: "Google" },
    });
    fireEvent.change(screen.getByLabelText("Message *"), {
      target: { value: "Test message" },
    });

    // Submit form using the button's closest form
    fireEvent.submit(
      screen.getByText("Send Message").closest("form")!
    );

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(
        "/api/contact",
        expect.objectContaining({
          method: "POST",
          headers: { "Content-Type": "application/json" },
        })
      );
      expect(global.alert).toHaveBeenCalledWith("Message sent!");
    });
  });
});
