import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import type { RequestOptions, ApiResponse, BrevoConfig, ApiErrorResponse } from '../types/common';
import { createErrorFromResponse, BrevoConnectionError, BrevoTimeoutError } from '../errors';

/**
 * Abstract HTTP client interface for swappable implementations
 */
export interface HttpClient {
  request<T = unknown>(options: RequestOptions): Promise<ApiResponse<T>>;
}

/**
 * Axios-based HTTP client implementation
 */
export class AxiosHttpClient implements HttpClient {
  private readonly axios: AxiosInstance;
  private readonly maxRetries: number;
  private readonly retryDelay: number;

  constructor(config: BrevoConfig) {
    this.maxRetries = config.maxRetries ?? 3;
    this.retryDelay = config.retryDelay ?? 1000;

    this.axios = axios.create({
      baseURL: config.baseUrl ?? 'https://api.brevo.com/v3',
      timeout: config.timeout ?? 30000,
      headers: {
        'api-key': config.apiKey,
        'Content-Type': 'application/json',
        'User-Agent': '@brevo/api-sdk/1.0.0',
        ...config.headers,
      },
    });

    // Request interceptor for logging (if needed)
    this.axios.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        // You can add request logging here
        return config;
      },
      (error: unknown) => Promise.reject(error)
    );

    // Response interceptor for error handling
    this.axios.interceptors.response.use(
      (response: AxiosResponse) => response,
      (error: any) => {
        if (axios.isAxiosError(error)) {
          // Handle different types of axios errors
          if (error.code === 'ECONNABORTED') {
            throw new BrevoTimeoutError('Request timed out', error);
          }

          if (error.code === 'ECONNREFUSED' || error.code === 'ENOTFOUND') {
            throw new BrevoConnectionError('Connection failed', error);
          }

          if (error.response) {
            // Server responded with error status
            const errorResponse = error.response.data as ApiErrorResponse;
            throw createErrorFromResponse(error.response.status, errorResponse, error);
          }
        }

        throw new BrevoConnectionError('Network error', error);
      }
    );
  }

  /**
   * Make HTTP request with automatic retries
   */
  async request<T = unknown>(options: RequestOptions): Promise<ApiResponse<T>> {
    let lastError: Error | undefined;

    for (let attempt = 0; attempt <= this.maxRetries; attempt++) {
      try {
        const axiosConfig: AxiosRequestConfig = {
          method: options.method,
          url: options.url,
          data: options.data,
          params: options.params,
          ...(options.headers && { headers: options.headers }),
          ...(options.timeout && { timeout: options.timeout }),
        };

        const response: AxiosResponse<T> = await this.axios.request(axiosConfig);

        return {
          data: response.data,
          status: response.status,
          statusText: response.statusText,
          headers: response.headers as Record<string, string>,
        };
      } catch (error) {
        lastError = error as Error;

        // Don't retry on authentication, validation, or permission errors
        if (
          error instanceof Error &&
          (error.message.includes('401') ||
            error.message.includes('403') ||
            error.message.includes('400') ||
            error.message.includes('422'))
        ) {
          throw error;
        }

        // Don't retry on last attempt
        if (attempt === this.maxRetries) {
          break;
        }

        // Wait before retrying with exponential backoff
        const delay = this.retryDelay * Math.pow(2, attempt);
        await this.sleep(delay);
      }
    }

    throw lastError || new Error('Request failed after retries');
  }

  /**
   * Sleep utility for retry delays
   */
  private sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

/**
 * Fetch-based HTTP client implementation (alternative to Axios)
 */
export class FetchHttpClient implements HttpClient {
  private readonly config: BrevoConfig;
  private readonly maxRetries: number;
  private readonly retryDelay: number;

  constructor(config: BrevoConfig) {
    this.config = config;
    this.maxRetries = config.maxRetries ?? 3;
    this.retryDelay = config.retryDelay ?? 1000;
  }

  async request<T = unknown>(options: RequestOptions): Promise<ApiResponse<T>> {
    const baseUrl = this.config.baseUrl ?? 'https://api.brevo.com/v3';
    const url = new URL(options.url, baseUrl);

    // Add query parameters
    if (options.params) {
      Object.entries(options.params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          url.searchParams.append(key, String(value));
        }
      });
    }

    const requestInit: RequestInit = {
      method: options.method,
      headers: {
        'api-key': this.config.apiKey,
        'Content-Type': 'application/json',
        'User-Agent': '@brevo/api-sdk/1.0.0',
        ...this.config.headers,
        ...options.headers,
      },
      signal: AbortSignal.timeout(options.timeout ?? this.config.timeout ?? 30000),
    };

    if (
      options.data &&
      (options.method === 'POST' || options.method === 'PUT' || options.method === 'PATCH')
    ) {
      requestInit.body = JSON.stringify(options.data);
    }

    let lastError: Error | undefined;

    for (let attempt = 0; attempt <= this.maxRetries; attempt++) {
      try {
        const response = await fetch(url.toString(), requestInit);

        if (!response.ok) {
          const errorData = (await response.json().catch(() => ({}))) as ApiErrorResponse;
          throw createErrorFromResponse(response.status, errorData);
        }

        const data = (await response.json()) as T;
        const headers: Record<string, string> = {};
        response.headers.forEach((value, key) => {
          headers[key] = value;
        });

        return {
          data,
          status: response.status,
          statusText: response.statusText,
          headers,
        };
      } catch (error) {
        lastError = error as Error;

        if (error instanceof DOMException && error.name === 'TimeoutError') {
          lastError = new BrevoTimeoutError('Request timed out', error);
        }

        // Don't retry on authentication, validation, or permission errors
        if (
          error instanceof Error &&
          (error.message.includes('401') ||
            error.message.includes('403') ||
            error.message.includes('400') ||
            error.message.includes('422'))
        ) {
          throw error;
        }

        // Don't retry on last attempt
        if (attempt === this.maxRetries) {
          break;
        }

        // Wait before retrying with exponential backoff
        const delay = this.retryDelay * Math.pow(2, attempt);
        await this.sleep(delay);
      }
    }

    throw lastError || new Error('Request failed after retries');
  }

  private sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
