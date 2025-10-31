import { supabase } from "../supabaseClient.js";
import type { Message } from "../services/openaiService.js";

export default async function getRecentMessages(userId: string): Promise<Message[]> {
  const { data, error } = await supabase
    .from("chat_history")
    .select("message, reply")
    .eq("user_id", userId)
    .order("created_at", { ascending: false })
    .limit(2);
  if (error) console.error("History fetch error:", error);
  return (
    data?.reverse()?.flatMap((r: any) => [
      { role: "user", content: r.message },
      { role: "assistant", content: r.reply },
    ]) ?? []
  );
}