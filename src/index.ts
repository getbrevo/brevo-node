/**
 * @fileoverview Brevo API SDK - Official TypeScript SDK for Brevo API
 *
 * This SDK provides a modern, type-safe interface for interacting with the Brevo API.
 * It includes comprehensive support for email campaigns, transactional emails, contacts,
 * SMS, and all other Brevo services.
 *
 * @example
 * ```typescript
 * import { Brevo } from '@brevo/api-sdk';
 *
 * const brevo = new Brevo({
 *   apiKey: 'xkeysib-your-api-key-here'
 * });
 *
 * // Send a transactional email
 * await brevo.transactionalEmail.send({
 *   to: [{ email: 'recipient@example.com', name: 'John Doe' }],
 *   subject: 'Welcome!',
 *   htmlContent: '<h1>Welcome to our service!</h1>',
 *   sender: { email: 'hello@company.com', name: 'Company' }
 * });
 *
 * // Create an email campaign
 * const campaign = await brevo.emailCampaigns.create({
 *   name: 'Monthly Newsletter',
 *   subject: 'Our latest updates',
 *   sender: { email: 'newsletter@company.com', name: 'Newsletter' },
 *   htmlContent: '<h1>Monthly Updates</h1>',
 *   recipients: { lists: [1, 2] }
 * });
 *
 * // Manage contacts
 * await brevo.contacts.create({
 *   email: 'new-user@example.com',
 *   attributes: { FIRSTNAME: 'John', LASTNAME: 'Doe' },
 *   listIds: [1]
 * });
 * ```
 *
 * @version 1.0.0
 * @author Brevo
 * @license MIT
 */

// Main client export
export { Brevo as default, Brevo } from './client';
import { Brevo } from './client';

// HTTP client abstractions
export type { HttpClient } from './http/client';
export { AxiosHttpClient, FetchHttpClient } from './http/client';

// Resource classes
export { EmailCampaignsResource } from './resources/email-campaigns';
export { ContactsResource } from './resources/contacts';
export { TransactionalEmailResource } from './resources/transactional-email';

// Type definitions
export type * from './types/common';
export type * from './types/email-campaigns';
export type * from './types/contacts';
export type * from './types/transactional-email';

// Error classes and utilities
export * from './errors';

// Utility functions and helpers
export * from './utils/pagination';
export * from './utils/validation';

/**
 * SDK version information
 */
export const VERSION = '1.0.0';

/**
 * Supported API version
 */
export const API_VERSION = 'v3';

/**
 * Default API base URL
 */
export const DEFAULT_BASE_URL = 'https://api.brevo.com/v3';

/**
 * Quick start configuration type for common use cases
 */
export interface QuickStartConfig {
  /** Your Brevo API key */
  apiKey: string;
  /** Optional timeout in milliseconds (default: 30000) */
  timeout?: number;
}

/**
 * Quick start function for simple SDK initialization
 *
 * @param config - Simplified configuration
 * @returns Configured Brevo client instance
 *
 * @example
 * ```typescript
 * import { quickStart } from '@brevo/api-sdk';
 *
 * const brevo = quickStart({ apiKey: 'your-api-key' });
 *
 * // Ready to use
 * const campaigns = await brevo.emailCampaigns.list();
 * ```
 */
export function quickStart(config: QuickStartConfig): Brevo {
  return new Brevo({
    apiKey: config.apiKey,
    ...(config.timeout && { timeout: config.timeout }),
  });
}

/**
 * Utility to check if an error is from the Brevo SDK
 *
 * @param error - Error to check
 * @returns True if the error is a Brevo SDK error
 *
 * @example
 * ```typescript
 * import { isBrevoError } from '@brevo/api-sdk';
 *
 * try {
 *   await brevo.emailCampaigns.get(999);
 * } catch (error) {
 *   if (isBrevoError(error)) {
 *     console.log('Brevo API error:', error.message);
 *     console.log('Error type:', error.type);
 *   }
 * }
 * ```
 */
export { isBrevoError } from './errors';
