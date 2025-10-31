export class AppError extends Error {
  public code: string;
  public friendly?: string | undefined;
  constructor(message: string, code = "APP_ERROR", friendly?: string) {
    super(message);
    this.code = code;
    this.friendly = friendly;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export class ValidationError extends AppError {
  constructor(message: string, friendly = "Invalid request") {
    super(message, "VALIDATION_ERROR", friendly);
  }
}

export class AuthError extends AppError {
  constructor(message = "Unauthorized", friendly = "Please sign in") {
    super(message, "AUTH_ERROR", friendly);
  }
}

export class RateLimitError extends AppError {
  constructor(message = "Rate limit exceeded", friendly = "Slow down a bit") {
    super(message, "RATE_LIMIT", friendly);
  }
}

export class OpenAIError extends AppError {
  constructor(message = "OpenAI error", friendly = "AI engine unavailable") {
    super(message, "OPENAI_ERROR", friendly);
  }
}

export class ContextError extends AppError {
  constructor(message = "Context retrieval failed", friendly = "Couldn't fetch context") {
    super(message, "CONTEXT_ERROR", friendly);
  }
}

export class DatabaseError extends AppError {
  constructor(message = "Database error", friendly = "Data storage error") {
    super(message, "DATABASE_ERROR", friendly);
  }
}
