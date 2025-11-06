export class AppError extends Error {
  public code: string;
  public friendly?: string | undefined;

  constructor(code: string, message: string, friendly?: string) {
    super(message);
    this.code = code;
    this.friendly = friendly;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}
export class ValidationError extends AppError {
  constructor(message: string, friendly = "Invalid request") {
    super("VALIDATION_ERROR", message, friendly);
  }
}

export class AuthError extends AppError {
  constructor(message = "Unauthorized", friendly = "Please sign in") {
    super("AUTH_ERROR", message, friendly);
  }
}

export class RateLimitError extends AppError {
  constructor(message = "Rate limit exceeded", friendly = "Slow down a bit") {
    super("RATE_LIMIT", message, friendly);
  }
}

export class OpenAIError extends AppError {
  constructor(message = "OpenAI error", friendly = "AI engine unavailable") {
    super("OPENAI_ERROR", message, friendly);
  }
}

export class ContextError extends AppError {
  constructor(message = "Context retrieval failed", friendly = "Couldn't fetch context") {
    super("CONTEXT_ERROR", message, friendly);
  }
}

export class DatabaseError extends AppError {
  constructor(message = "Database error", friendly = "Data storage error") {
    super("DATABASE_ERROR", message, friendly);
  }
}
