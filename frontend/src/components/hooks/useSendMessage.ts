import { useMutation } from "@tanstack/react-query";

export function useSendMessage() {
  return useMutation({
    mutationFn: async (message: string) => {
      const res = await fetch("/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
        credentials: "include",
      });

      if (!res.ok) {
        let err: any = {};
        try {
          err = await res.json();
        } catch {
          err = { code: "UNKNOWN_ERROR", error: "Unknown error" };
        }

        const msg =
          err.friendly ||
          getFriendlyError(err.code) ||
          "Something went wrong — please try again.";

        const e = new Error(msg);
        (e as any).code = err.code || "UNKNOWN_ERROR";
        throw e;
      }

      const data = await res.json();
      return data.reply as string;
    },
  });
}

// Map backend error codes
function getFriendlyError(code: string) {
  switch (code) {
    case "RATE_LIMIT":
      return "You're sending messages too quickly — please slow down.";
    case "VALIDATION_ERROR":
      return "Your message looks invalid — please rephrase it.";
    case "OPENAI_ERROR":
      return "The AI had trouble generating a reply — please try again.";
    case "SUPABASE_VECTOR_ERROR":
      return "I couldn’t retrieve context from the site — try again soon.";
    case "SERVER_ERROR":
      return "The server ran into a problem — please retry in a moment.";
    default:
      return null;
  }
}