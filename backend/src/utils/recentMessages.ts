import { supabase } from "../supabaseClient.js";
import type { Message } from "../services/openaiService.js";
import { DatabaseError } from "./errors.js";

export default async function getRecentMessages(userId: string): Promise<Message[]> {
  const { data, error } = await supabase
    .from("chat_history")
    .select("message, reply")
    .eq("user_id", userId)
    .order("created_at", { ascending: false })
    .limit(2);
  if (error) throw new DatabaseError("Failed to fetch history");
  return (
    data?.reverse()?.flatMap((r: any) => [
      { role: "user", content: r.message },
      { role: "assistant", content: r.reply },
    ]) ?? []
  );
}