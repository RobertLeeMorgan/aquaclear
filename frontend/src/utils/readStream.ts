type ReadStreamParams = {
  reader: ReadableStreamDefaultReader<Uint8Array>;
  onChunk: (chunk: string) => void;
  signal?: AbortSignal;
};

export async function readStream({
  reader,
  onChunk,
  signal,
}: ReadStreamParams): Promise<string> {
  const decoder = new TextDecoder();
  let fullText = "";

  try {
    while (true) {
      if (signal?.aborted) {
        reader.cancel();
        throw new DOMException("Aborted", "AbortError");
      }

      const { value, done } = await reader.read();

      if (done) break;

      if (value) {
        const chunk = decoder.decode(value, { stream: true });

        if (chunk) {
          fullText += chunk;
          onChunk(chunk);
        }
      }
    }

    const finalChunk = decoder.decode();
    if (finalChunk) {
      fullText += finalChunk;
      onChunk(finalChunk);
    }

    return fullText;
  } finally {
    try {
      reader.releaseLock();
    } catch {
      // ignore if already released
    }
  }
}