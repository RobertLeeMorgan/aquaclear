import { useMutation } from "@tanstack/react-query";
import type { Msg } from "./useChatbot";
import { readStream } from "../utils/readStream";
import { parseError } from "../utils/ParseError";

type SendMessagePayload = {
  message: string;
  context: Msg[];
  onChunk: (text: string) => void;
  signal?: AbortSignal;
};

export function useSendMessage() {
  return useMutation<string, unknown, SendMessagePayload>({
    mutationFn: async ({
      message,
      context,
      onChunk,
      signal,
    }) => {
      const res = await fetch("/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message, context }),
        credentials: "include",
        signal,
      });

      if (!res.ok) {
        throw parseError(res);
      }

      if (!res.body) {
        throw new Error("No response body returned from server");
      }

      const reader = res.body.getReader();

      return readStream({
        reader,
        onChunk,
        signal,
      });
    },
  });
}