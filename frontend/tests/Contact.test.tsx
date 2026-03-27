import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Contact from "../src/pages/Contact";
import { vi, describe, it, beforeEach, expect } from "vitest";

global.fetch = vi.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({}),
  }),
) as unknown as typeof fetch;

global.alert = vi.fn();

describe("Contact Page", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders all form fields", () => {
    render(<Contact />);

    expect(screen.getByText("Contact")).toBeDefined();
    expect(screen.getByLabelText("Full Name *")).toBeDefined();
    expect(screen.getByLabelText("E-mail *")).toBeDefined();
    expect(screen.getByLabelText("Tel *")).toBeDefined();
    expect(screen.getByLabelText(/Postcode of site/)).toBeDefined();
    expect(screen.getByLabelText("How did you find us?")).toBeDefined();
    expect(screen.getByLabelText("Message *")).toBeDefined();
  });

  it("submits the form and shows success message", async () => {
    const user = userEvent.setup();

    render(<Contact />);

    await user.type(screen.getByLabelText("Full Name *"), "John Smith");
    await user.type(screen.getByLabelText("E-mail *"), "john@email.com");
    await user.type(screen.getByLabelText("Tel *"), "01234 567890");
    await user.type(screen.getByLabelText(/Postcode of site/), "SW1A 1AA");
    await user.type(screen.getByLabelText("How did you find us?"), "Google");
    await user.type(screen.getByLabelText("Message *"), "Test message");

    const buttons = screen.getAllByRole("button");
    const submitButton = buttons.find(
      (b) => b.getAttribute("aria-label") === "Form submit",
    );
    await user.click(submitButton!);

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(
        "/api/contact",
        expect.objectContaining({
          method: "POST",
          headers: { "Content-Type": "application/json" },
        }),
      );
    });

    expect(await screen.findByText("Message sent successfully.")).toBeDefined();
  });
});
