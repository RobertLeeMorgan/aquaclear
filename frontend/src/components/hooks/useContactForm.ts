import { useState } from "react";

export function useContactForm() {
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ type: "success" | "error"; message: string } | null>(null);

  async function submitContact(data: Record<string, string>, form: HTMLFormElement) {
    setToast(null);
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setToast({ type: "success", message: "Message sent successfully." });
        form.reset();
      } else {
        setToast({ type: "error", message: "Failed to send message." });
      }
    } catch (err) {
      console.error(err);
      setToast({ type: "error", message: "Something went wrong. Try again later." });
    } finally {
      setLoading(false);
    }
  }

  return { loading, toast, setToast, submitContact };
}