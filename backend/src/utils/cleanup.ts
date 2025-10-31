import { supabase } from "../supabaseClient.js";

export async function maybeCleanupHistory() {
  try {
    // Fetch the single row
    const { data, error } = await supabase
      .from("system_state")
      .select("last_cleanup")
      .single<{ last_cleanup: string | null }>();

    if (error) {
      console.warn("Error fetching last cleanup:", error.message);
      return;
    }

    const now = new Date();
    const lastCleanup = data?.last_cleanup ? new Date(data.last_cleanup) : null;
    const oneDayMs = 24 * 60 * 60 * 1000;

    // Only run cleanup if more than 1 day has passed
    if (!lastCleanup || now.getTime() - lastCleanup.getTime() > oneDayMs) {
      console.log("Running chat history cleanup...");

      const cutoff = new Date(
        Date.now() - 30 * 24 * 60 * 60 * 1000
      ).toISOString();

      // Delete old chat history
      const { error: delError } = await supabase
        .from("chat_history")
        .delete()
        .lt("created_at", cutoff);

      if (delError) {
        console.error("Cleanup error:", delError.message);
        return;
      }

      // Overwrite last_cleanup
      const { error: updateError } = await supabase
        .from("system_state")
        .update({ last_cleanup: now.toISOString() })
        .eq("id", 1);

      if (updateError) {
        console.error("Failed to update last_cleanup:", updateError.message);
        return;
      }

      console.log("Cleanup done at", now.toISOString());
    } else {
      console.log("Skipping cleanup — already done today");
    }
  } catch (err) {
    console.error("Cleanup failed:", err);
  }
}
