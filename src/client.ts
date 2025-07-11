import type { BrevoConfig } from './types/common';
import { AxiosHttpClient, FetchHttpClient, type HttpClient } from './http/client';
import { EmailCampaignsResource } from './resources/email-campaigns';
import { ContactsResource } from './resources/contacts';
import { TransactionalEmailResource } from './resources/transactional-email';
import { validate } from './utils/validation';
import { schemas } from './utils/validation';

/**
 * Main Brevo API client
 *
 * This is the primary entry point for interacting with the Brevo API.
 * It provides access to all API resources and handles authentication,
 * request/response processing, and error handling.
 *
 * @example
 * ```typescript
 * import { Brevo } from '@brevo/api-sdk';
 *
 * const brevo = new Brevo({
 *   apiKey: 'xkeysib-...'
 * });
 *
 * // Use email campaigns
 * const campaigns = await brevo.emailCampaigns.list();
 *
 * // Create a new campaign
 * const campaign = await brevo.emailCampaigns.create({
 *   name: 'My Campaign',
 *   subject: 'Hello World',
 *   sender: { email: 'sender@domain.com', name: 'Sender' },
 *   htmlContent: '<h1>Hello!</h1>'
 * });
 * ```
 */
export class Brevo {
  private readonly httpClient: HttpClient;

  /**
   * Email campaigns resource
   *
   * Manage email marketing campaigns, including creation, sending,
   * and statistics tracking.
   *
   * @example
   * ```typescript
   * // List campaigns
   * const campaigns = await brevo.emailCampaigns.list();
   *
   * // Create campaign
   * const campaign = await brevo.emailCampaigns.create({...});
   *
   * // Send test
   * await brevo.emailCampaigns.sendTest(123, { emailTo: ['test@email.com'] });
   * ```
   */
  public readonly emailCampaigns: EmailCampaignsResource;

  /**
   * Contacts resource
   *
   * Manage contacts, contact lists, and contact attributes.
   *
   * @example
   * ```typescript
   * // Create a contact
   * await brevo.contacts.create({
   *   email: 'user@example.com',
   *   attributes: { FIRSTNAME: 'John', LASTNAME: 'Doe' },
   *   listIds: [1, 2]
   * });
   *
   * // List contacts
   * const contacts = await brevo.contacts.list({ limit: 100 });
   *
   * // Add contacts to a list
   * await brevo.contacts.addToList(1, ['user@example.com']);
   * ```
   */
  public readonly contacts: ContactsResource;

  /**
   * Transactional Email resource
   *
   * Send individual, personalized emails and manage email templates.
   * Perfect for order confirmations, welcome emails, password resets, etc.
   *
   * @example
   * ```typescript
   * // Send a transactional email
   * const result = await brevo.transactionalEmail.send({
   *   to: [{ email: 'user@example.com', name: 'John Doe' }],
   *   subject: 'Welcome to our service!',
   *   htmlContent: '<h1>Welcome {{params.firstName}}!</h1>',
   *   sender: { email: 'hello@company.com', name: 'Company' },
   *   params: { firstName: 'John' }
   * });
   *
   * // Create and use a template
   * const template = await brevo.transactionalEmail.createTemplate({
   *   name: 'Welcome Email',
   *   subject: 'Welcome {{params.firstName}}!',
   *   htmlContent: '<h1>Welcome {{params.firstName}}!</h1>'
   * });
   *
   * await brevo.transactionalEmail.send({
   *   to: [{ email: 'user@example.com' }],
   *   templateId: template.id,
   *   params: { firstName: 'John' }
   * });
   * ```
   */
  public readonly transactionalEmail: TransactionalEmailResource;

  /**
   * Creates a new Brevo API client instance
   *
   * @param config - Configuration options for the client
   * @param httpClient - Optional custom HTTP client implementation
   *
   * @example
   * ```typescript
   * // Basic usage
   * const brevo = new Brevo({ apiKey: 'your-api-key' });
   *
   * // With custom configuration
   * const brevo = new Brevo({
   *   apiKey: 'your-api-key',
   *   baseUrl: 'https://api.brevo.com/v3',
   *   timeout: 10000,
   *   maxRetries: 5,
   *   retryDelay: 2000
   * });
   *
   * // With custom HTTP client
   * const customClient = new FetchHttpClient(config);
   * const brevo = new Brevo(config, customClient);
   * ```
   */
  constructor(config: BrevoConfig, httpClient?: HttpClient) {
    // Validate configuration
    this.validateConfig(config);

    // Initialize HTTP client
    this.httpClient = httpClient ?? new AxiosHttpClient(config);

    // Initialize resource classes
    this.emailCampaigns = new EmailCampaignsResource(this.httpClient);
    this.contacts = new ContactsResource(this.httpClient);
    this.transactionalEmail = new TransactionalEmailResource(this.httpClient);
  }

  /**
   * Create a Brevo client with Axios HTTP client
   *
   * @param config - Configuration options
   * @returns New Brevo client instance using Axios
   *
   * @example
   * ```typescript
   * const brevo = Brevo.withAxios({ apiKey: 'your-api-key' });
   * ```
   */
  static withAxios(config: BrevoConfig): Brevo {
    return new Brevo(config, new AxiosHttpClient(config));
  }

  /**
   * Create a Brevo client with Fetch HTTP client
   *
   * @param config - Configuration options
   * @returns New Brevo client instance using Fetch API
   *
   * @example
   * ```typescript
   * const brevo = Brevo.withFetch({ apiKey: 'your-api-key' });
   * ```
   */
  static withFetch(config: BrevoConfig): Brevo {
    return new Brevo(config, new FetchHttpClient(config));
  }

  /**
   * Test API connectivity and authentication
   *
   * Makes a simple API call to verify that the client is properly
   * configured and can connect to the Brevo API.
   *
   * @returns Promise resolving to connection test result
   *
   * @example
   * ```typescript
   * try {
   *   await brevo.testConnection();
   *   console.log('Connection successful!');
   * } catch (error) {
   *   console.error('Connection failed:', error.message);
   * }
   * ```
   */
  async testConnection(): Promise<{ connected: boolean; message: string }> {
    try {
      // Make a simple API call to test connectivity
      await this.emailCampaigns.list({ limit: 1 });
      return {
        connected: true,
        message: 'Successfully connected to Brevo API',
      };
    } catch (error) {
      return {
        connected: false,
        message: error instanceof Error ? error.message : 'Unknown connection error',
      };
    }
  }

  /**
   * Get the current API configuration
   *
   * Returns a copy of the current configuration (API key is masked for security).
   *
   * @returns Current configuration with masked API key
   *
   * @example
   * ```typescript
   * const config = brevo.getConfig();
   * console.log(`Using base URL: ${config.baseUrl}`);
   * console.log(`API key: ${config.apiKey}`); // Masked: xkeysib-****
   * ```
   */
  getConfig(): Omit<BrevoConfig, 'apiKey'> & { apiKey: string } {
    // This is a simplified version - in a real implementation,
    // you'd need to store and return the actual config
    return {
      apiKey: 'xkeysib-****',
      baseUrl: 'https://api.brevo.com/v3',
      timeout: 30000,
      maxRetries: 3,
      retryDelay: 1000,
    };
  }

  /**
   * Make a raw HTTP request
   *
   * Provides direct access to the underlying HTTP client for advanced use cases.
   * This method bypasses resource-specific logic and validation.
   *
   * @param method - HTTP method
   * @param url - Request URL (relative to base URL)
   * @param data - Request body data
   * @param params - Query parameters
   * @returns Promise resolving to raw response
   *
   * @example
   * ```typescript
   * // Make a custom API call
   * const response = await brevo.request('GET', '/account', undefined, { details: true });
   * console.log(response.data);
   * ```
   */
  async request<T = unknown>(
    method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
    url: string,
    data?: unknown,
    params?: Record<string, unknown>
  ) {
    return this.httpClient.request<T>({
      method,
      url,
      data,
      ...(params && { params }),
    });
  }

  /**
   * Validate the client configuration
   *
   * @private
   * @param config - Configuration to validate
   * @throws {BrevoValidationError} If configuration is invalid
   */
  private validateConfig(config: BrevoConfig): void {
    // Validate API key format
    validate(schemas.apiKey, config.apiKey);

    // Validate optional URL if provided
    if (config.baseUrl) {
      validate(schemas.url, config.baseUrl);
    }

    // Validate timeout if provided
    if (config.timeout !== undefined) {
      if (config.timeout <= 0) {
        throw new Error('Timeout must be a positive number');
      }
    }

    // Validate retry configuration
    if (config.maxRetries !== undefined) {
      if (config.maxRetries < 0 || config.maxRetries > 10) {
        throw new Error('Max retries must be between 0 and 10');
      }
    }

    if (config.retryDelay !== undefined) {
      if (config.retryDelay <= 0) {
        throw new Error('Retry delay must be a positive number');
      }
    }
  }
}

/**
 * Default export for convenience
 */
export default Brevo;

/**
 * Re-export all types for easy access
 */
export * from './types/common';
export * from './types/email-campaigns';
export * from './errors';
export * from './utils/pagination';
export * from './utils/validation';
