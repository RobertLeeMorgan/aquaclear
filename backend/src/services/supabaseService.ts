import { supabase } from "../supabaseClient.js";
import { DatabaseError } from "../utils/errors.js";

export async function saveChat(message: string, reply: string) {
  const { error } = await supabase
    .from("chat_history")
    .insert([{ message, reply }]);
  if (error) {
    throw new DatabaseError(
      error.message || "Vector search failed",
      "Failed to connect to the database."
    );
  }
}
