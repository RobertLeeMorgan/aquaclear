import { supabase } from "../supabaseClient.js";

export async function saveChat(message: string, reply: string) {
  const { error } = await supabase
    .from("chat_history")
    .insert([{ message, reply }]);
  if (error) throw error;
}