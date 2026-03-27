import { describe, it, expect, vi } from "vitest";
import { readStream } from "../src/utils/readStream";

describe("readStream", () => {
  it("reads chunks from the reader and returns full text", async () => {
    const chunks = [new TextEncoder().encode("Hello "), new TextEncoder().encode("world!")];
    let callIndex = 0;

    const reader = {
      read: vi.fn().mockImplementation(() => {
        if (callIndex < chunks.length) {
          const value = chunks[callIndex];
          callIndex++;
          return Promise.resolve({ value, done: false });
        }
        return Promise.resolve({ value: undefined, done: true });
      }),
      cancel: vi.fn(),
      releaseLock: vi.fn(),
    } as unknown as ReadableStreamDefaultReader<Uint8Array>;

    const onChunk = vi.fn();

    const result = await readStream({ reader, onChunk });

    expect(result).toBe("Hello world!");
    expect(onChunk).toHaveBeenCalledTimes(2);
    expect(onChunk.mock.calls[0][0]).toBe("Hello ");
    expect(onChunk.mock.calls[1][0]).toBe("world!");
    expect(reader.releaseLock).toHaveBeenCalled();
  });

  it("handles empty stream", async () => {
    const reader = {
      read: vi.fn().mockResolvedValue({ value: undefined, done: true }),
      cancel: vi.fn(),
      releaseLock: vi.fn(),
    } as unknown as ReadableStreamDefaultReader<Uint8Array>;

    const onChunk = vi.fn();

    const result = await readStream({ reader, onChunk });

    expect(result).toBe("");
    expect(onChunk).not.toHaveBeenCalled();
    expect(reader.releaseLock).toHaveBeenCalled();
  });

  it("throws AbortError if signal is aborted", async () => {
    const reader = {
      read: vi.fn(),
      cancel: vi.fn(),
      releaseLock: vi.fn(),
    } as unknown as ReadableStreamDefaultReader<Uint8Array>;

    const controller = new AbortController();
    const onChunk = vi.fn();

    controller.abort();

    await expect(readStream({ reader, onChunk, signal: controller.signal })).rejects.toThrowError(
      DOMException,
    );

    expect(reader.cancel).toHaveBeenCalled();
    expect(reader.releaseLock).toHaveBeenCalled();
  });

  it("continues reading until done and calls onChunk with final empty decode if needed", async () => {
    const chunks = [new TextEncoder().encode("foo")];
    let called = false;

    const reader = {
      read: vi.fn().mockImplementationOnce(() => Promise.resolve({ value: chunks[0], done: false }))
                 .mockImplementationOnce(() => Promise.resolve({ value: undefined, done: true })),
      cancel: vi.fn(),
      releaseLock: vi.fn(),
    } as unknown as ReadableStreamDefaultReader<Uint8Array>;

    const onChunk = vi.fn();

    const result = await readStream({ reader, onChunk });

    expect(result).toBe("foo");
    expect(onChunk).toHaveBeenCalledWith("foo");
    expect(reader.releaseLock).toHaveBeenCalled();
  });
});