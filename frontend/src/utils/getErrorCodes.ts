export default function getFriendlyError(code: string) {
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