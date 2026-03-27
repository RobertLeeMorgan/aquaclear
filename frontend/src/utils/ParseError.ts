import getFriendlyError from "./getErrorCodes";

export async function parseError(input: unknown): Promise<Error> {
  const body = await normalizeErrorBody(input);

  const code =
    body?.code ??
    body?.errorCode ??
    body?.status ??
    "UNKNOWN_ERROR";

  const friendly =
    body?.friendly ??
    body?.friendlyMessage ??
    body?.message ??
    body?.error ??
    null;

  const message =
    friendly ||
    getFriendlyError(code) ||
    "Something went wrong — please try again.";

  const error = new Error(message);
  (error as any).code = code;

  return error;
}

async function normalizeErrorBody(input: unknown): Promise<any> {
  if (!input) return {};

  if (typeof input === "object") {
    if (input instanceof Response) {
      try {
        const contentType = input.headers.get("content-type");

        if (contentType?.includes("application/json")) {
          return await input.json();
        }

        const text = await input.text();
        return { message: text };
      } catch {
        return {};
      }
    }

    return input;
  }

  if (typeof input === "string") {
    try {
      return JSON.parse(input);
    } catch {
      return { message: input };
    }
  }

  return {};
}