export default function getErrorMessage(error: any) {
  if (!error) return "Something went wrong — please try again shortly.";

  if (error instanceof Error) {
    return error.message || "Something went wrong — please try again shortly.";
  }

  if (error instanceof TypeError && error.message.includes("fetch")) {
    return "The AI is waking up — please wait a few seconds and try again.";
  }

  if (typeof error === "object" && error !== null) {
    return (
      error.friendly ??
      error.message ??
      error.error ??
      "Something went wrong — please try again shortly."
    );
  }

  return String(error);
}