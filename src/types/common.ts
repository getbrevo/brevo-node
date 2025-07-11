/**
 * Common types and interfaces used throughout the Brevo SDK
 */

/**
 * Configuration options for the Brevo client
 */
export interface BrevoConfig {
  /** Your Brevo API key */
  apiKey: string;
  /** Base URL for the API (defaults to https://api.brevo.com/v3) */
  baseUrl?: string;
  /** Request timeout in milliseconds (defaults to 30000) */
  timeout?: number;
  /** Custom headers to include with all requests */
  headers?: Record<string, string>;
  /** Maximum number of retry attempts (defaults to 3) */
  maxRetries?: number;
  /** Base delay between retries in milliseconds (defaults to 1000) */
  retryDelay?: number;
}

/**
 * Pagination parameters for list endpoints
 */
export interface PaginationParams {
  /** Number of documents per page (max 100) */
  limit?: number;
  /** Index of the first document in the page */
  offset?: number;
}

/**
 * Sort parameters
 */
export interface SortParams {
  /** Sort order: ascending or descending */
  sort?: "asc" | "desc";
}

/**
 * Date range parameters
 */
export interface DateRangeParams {
  /** Start date in ISO format */
  startDate?: string;
  /** End date in ISO format */
  endDate?: string;
}

/**
 * Paginated response wrapper
 */
export interface PaginatedResponse<T> {
  /** Total count of items */
  count: number;
  /** Array of items for current page */
  [key: string]: T[] | number;
}

/**
 * Statistics time periods
 */
export type StatsPeriod = "day" | "week" | "month" | "year";

/**
 * Campaign status types
 */
export type CampaignStatus =
  | "suspended"
  | "archive"
  | "sent"
  | "queued"
  | "draft"
  | "inProcess"
  | "inReview";

/**
 * Campaign types
 */
export type CampaignType = "classic" | "trigger";

/**
 * Statistics filter types
 */
export type StatisticsType = "globalStats" | "linksStats" | "statsByDomain";

/**
 * Email sender information
 */
export interface EmailSender {
  /** Sender email address */
  email: string;
  /** Sender name */
  name: string;
  /** Sender ID */
  id?: number;
}

/**
 * Contact attribute types
 */
export type AttributeType = "text" | "date" | "float" | "boolean" | "category";

/**
 * Contact attribute categories
 */
export type AttributeCategory = "normal" | "transactional" | "calculated";

/**
 * HTTP Methods
 */
export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

/**
 * Request options for HTTP client
 */
export interface RequestOptions {
  method: HttpMethod;
  url: string;
  data?: unknown;
  params?: Record<string, unknown>;
  headers?: Record<string, string>;
  timeout?: number;
}

/**
 * API Response wrapper
 */
export interface ApiResponse<T = unknown> {
  data: T;
  status: number;
  statusText: string;
  headers: Record<string, string>;
}

/**
 * API Error details
 */
export interface ApiErrorDetails {
  code: string;
  message: string;
  field?: string;
}

/**
 * Base API Error response
 */
export interface ApiErrorResponse {
  message: string;
  code: string;
  details?: ApiErrorDetails[];
}
