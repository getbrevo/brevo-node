import type { ApiErrorResponse, ApiErrorDetails } from '../types/common';

/**
 * Base class for all Brevo SDK errors
 */
export abstract class BrevoError extends Error {
  abstract override readonly name: string;
  abstract readonly type: string;

  constructor(
    message: string,
    public cause?: Error
  ) {
    super(message);

    // Maintains proper stack trace for where our error was thrown
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

/**
 * Authentication errors (401)
 */
export class BrevoAuthenticationError extends BrevoError {
  override readonly name = 'BrevoAuthenticationError';
  readonly type = 'authentication_error';

  constructor(message = 'Authentication failed. Please check your API key.', cause?: Error) {
    super(message, cause);
  }
}

/**
 * Permission errors (403)
 */
export class BrevoPermissionError extends BrevoError {
  override readonly name = 'BrevoPermissionError';
  readonly type = 'permission_error';

  constructor(message = 'Permission denied. Check your API key permissions.', cause?: Error) {
    super(message, cause);
  }
}

/**
 * Resource not found errors (404)
 */
export class BrevoNotFoundError extends BrevoError {
  override readonly name = 'BrevoNotFoundError';
  readonly type = 'not_found_error';

  constructor(resource: string, id?: string | number, cause?: Error) {
    const message = id ? `${resource} with ID '${id}' not found.` : `${resource} not found.`;
    super(message, cause);
  }
}

/**
 * Validation errors (400, 422)
 */
export class BrevoValidationError extends BrevoError {
  override readonly name = 'BrevoValidationError';
  readonly type = 'validation_error';

  constructor(
    message: string,
    public readonly details: ApiErrorDetails[] = [],
    cause?: Error
  ) {
    super(message, cause);
  }

  /**
   * Get validation errors for a specific field
   */
  getFieldErrors(field: string): ApiErrorDetails[] {
    return this.details.filter(detail => detail.field === field);
  }

  /**
   * Check if there are validation errors for a specific field
   */
  hasFieldErrors(field: string): boolean {
    return this.getFieldErrors(field).length > 0;
  }
}

/**
 * Rate limiting errors (429)
 */
export class BrevoRateLimitError extends BrevoError {
  override readonly name = 'BrevoRateLimitError';
  readonly type = 'rate_limit_error';

  constructor(
    message = 'Rate limit exceeded. Please try again later.',
    public readonly retryAfter?: number,
    cause?: Error
  ) {
    super(message, cause);
  }
}

/**
 * Insufficient credits errors (402)
 */
export class BrevoInsufficientCreditsError extends BrevoError {
  override readonly name = 'BrevoInsufficientCreditsError';
  readonly type = 'insufficient_credits_error';

  constructor(message = 'Insufficient credits. Please upgrade your plan.', cause?: Error) {
    super(message, cause);
  }
}

/**
 * Server errors (5xx)
 */
export class BrevoServerError extends BrevoError {
  override readonly name = 'BrevoServerError';
  readonly type = 'server_error';

  constructor(
    message = 'Internal server error. Please try again later.',
    public readonly statusCode: number = 500,
    cause?: Error
  ) {
    super(message, cause);
  }
}

/**
 * Network/connection errors
 */
export class BrevoConnectionError extends BrevoError {
  override readonly name = 'BrevoConnectionError';
  readonly type = 'connection_error';

  constructor(message = 'Connection failed. Please check your network.', cause?: Error) {
    super(message, cause);
  }
}

/**
 * Request timeout errors
 */
export class BrevoTimeoutError extends BrevoError {
  override readonly name = 'BrevoTimeoutError';
  readonly type = 'timeout_error';

  constructor(message = 'Request timed out. Please try again.', cause?: Error) {
    super(message, cause);
  }
}

/**
 * Unknown/unexpected errors
 */
export class BrevoUnknownError extends BrevoError {
  override readonly name = 'BrevoUnknownError';
  readonly type = 'unknown_error';

  constructor(message = 'An unexpected error occurred.', cause?: Error) {
    super(message, cause);
  }
}

/**
 * Create appropriate error from HTTP status code and response
 */
export function createErrorFromResponse(
  statusCode: number,
  response?: ApiErrorResponse,
  cause?: Error
): BrevoError {
  const message = response?.message || 'An error occurred';
  const details = response?.details || [];

  switch (statusCode) {
    case 400:
    case 422:
      return new BrevoValidationError(message, details, cause);
    case 401:
      return new BrevoAuthenticationError(message, cause);
    case 402:
      return new BrevoInsufficientCreditsError(message, cause);
    case 403:
      return new BrevoPermissionError(message, cause);
    case 404:
      return new BrevoNotFoundError(message, undefined, cause);
    case 429:
      return new BrevoRateLimitError(message, undefined, cause);
    case 500:
    case 502:
    case 503:
    case 504:
      return new BrevoServerError(message, statusCode, cause);
    default:
      return new BrevoUnknownError(message, cause);
  }
}

/**
 * Check if an error is a Brevo SDK error
 */
export function isBrevoError(error: unknown): error is BrevoError {
  return error instanceof BrevoError;
}

/**
 * Type guard for specific error types
 */
export function isBrevoErrorType<T extends BrevoError>(
  error: unknown,
  ErrorClass: new (...args: any[]) => T
): error is T {
  return error instanceof ErrorClass;
}
