import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi, Mock } from "vitest";
import MarkdownMessage from "../src/components/layout/chatbot/MarkdownMessage";
import useLinkify from "../src/hooks/useLinkify";

vi.mock("../src/hooks/useLinkify");

describe("MarkdownMessage", () => {
  const mockLinkify = vi.fn((children) => children);
  const mockPrune = vi.fn((children) => children);

  beforeEach(() => {
    (useLinkify as Mock).mockReturnValue({
      linkifyChildren: mockLinkify,
      pruneEmptyTextNodes: mockPrune,
    });
  });

  it("renders plain text inside a paragraph", () => {
    render(<MarkdownMessage>hello world</MarkdownMessage>);
    const p = screen.getByText("hello world");
    expect(p.tagName).toBe("P");
    expect(mockLinkify).toHaveBeenCalled();
    expect(mockPrune).toHaveBeenCalled();
  });

  it("renders links with correct className", () => {
    render(<MarkdownMessage>[Click me](https://example.com)</MarkdownMessage>);
    const a = screen.getByText("Click me");
    expect(a.tagName).toBe("A");
    expect(a).toHaveClass(
      "font-semibold text-primary cursor-pointer hover:underline",
    );
  });

  it("renders headings with correct className", () => {
    render(<MarkdownMessage>{"# Heading 1"}</MarkdownMessage>);
    const h1 = screen.getByText("Heading 1");
    expect(h1.tagName).toBe("H1");
    expect(h1).toHaveClass("text-lg font-semibold");
  });

  it("renders list items", () => {
    render(<MarkdownMessage>{"- item 1\n- item 2"}</MarkdownMessage>);
    const items = screen.getAllByRole("listitem");
    expect(items).toHaveLength(2);
    expect(items[0].tagName).toBe("LI");
    expect(items[0]).toHaveClass("ml-4 mb-4 list-disc");
  });

  it("applies linkifyChildren to all nodes", () => {
    render(<MarkdownMessage>{"**bold text**"}</MarkdownMessage>);
    const strong = screen.getByText("bold text");
    expect(strong.tagName).toBe("STRONG");
    expect(mockLinkify).toHaveBeenCalled();
  });
});
