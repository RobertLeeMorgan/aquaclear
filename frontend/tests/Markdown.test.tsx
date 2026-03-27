import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import type { Mock } from "vitest";
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
    const classList = a.classList;
    expect(classList.contains("font-semibold")).toBe(true);
    expect(classList.contains("text-primary")).toBe(true);
    expect(classList.contains("cursor-pointer")).toBe(true);
    expect(classList.contains("hover:underline")).toBe(true);
  });

  it("renders headings with correct className", () => {
    render(<MarkdownMessage>{"# Heading 1"}</MarkdownMessage>);
    const h1 = screen.getByText("Heading 1");
    expect(h1.tagName).toBe("H1");
    const classList = h1.classList;
    expect(classList.contains("text-lg")).toBe(true);
    expect(classList.contains("font-semibold")).toBe(true);
  });

  it("renders list items", () => {
    render(<MarkdownMessage>{"- item 1\n- item 2"}</MarkdownMessage>);
    const items = screen.getAllByRole("listitem");
    expect(items).toHaveLength(2);
    expect(items[0].tagName).toBe("LI");
    const classList = items[0].classList;
    expect(classList.contains("ml-4")).toBe(true);
    expect(classList.contains("mb-4")).toBe(true);
    expect(classList.contains("list-disc")).toBe(true);
  });

  it("applies linkifyChildren to all nodes", () => {
    render(<MarkdownMessage>{"**bold text**"}</MarkdownMessage>);
    const strong = screen.getByText("bold text");
    expect(strong.tagName).toBe("STRONG");
    expect(mockLinkify).toHaveBeenCalled();
  });
});