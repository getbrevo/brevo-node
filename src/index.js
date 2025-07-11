"use strict";
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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isBrevoError = exports.DEFAULT_BASE_URL = exports.API_VERSION = exports.VERSION = exports.TransactionalEmailResource = exports.ContactsResource = exports.EmailCampaignsResource = exports.FetchHttpClient = exports.AxiosHttpClient = exports.Brevo = exports.default = void 0;
exports.quickStart = quickStart;
// Main client export
var client_1 = require("./client");
Object.defineProperty(exports, "default", { enumerable: true, get: function () { return client_1.Brevo; } });
Object.defineProperty(exports, "Brevo", { enumerable: true, get: function () { return client_1.Brevo; } });
var client_2 = require("./client");
var client_3 = require("./http/client");
Object.defineProperty(exports, "AxiosHttpClient", { enumerable: true, get: function () { return client_3.AxiosHttpClient; } });
Object.defineProperty(exports, "FetchHttpClient", { enumerable: true, get: function () { return client_3.FetchHttpClient; } });
// Resource classes
var email_campaigns_1 = require("./resources/email-campaigns");
Object.defineProperty(exports, "EmailCampaignsResource", { enumerable: true, get: function () { return email_campaigns_1.EmailCampaignsResource; } });
var contacts_1 = require("./resources/contacts");
Object.defineProperty(exports, "ContactsResource", { enumerable: true, get: function () { return contacts_1.ContactsResource; } });
var transactional_email_1 = require("./resources/transactional-email");
Object.defineProperty(exports, "TransactionalEmailResource", { enumerable: true, get: function () { return transactional_email_1.TransactionalEmailResource; } });
// Error classes and utilities
__exportStar(require("./errors"), exports);
// Utility functions and helpers
__exportStar(require("./utils/pagination"), exports);
__exportStar(require("./utils/validation"), exports);
/**
 * SDK version information
 */
exports.VERSION = '1.0.0';
/**
 * Supported API version
 */
exports.API_VERSION = 'v3';
/**
 * Default API base URL
 */
exports.DEFAULT_BASE_URL = 'https://api.brevo.com/v3';
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
function quickStart(config) {
    return new client_2.Brevo(__assign({ apiKey: config.apiKey }, (config.timeout && { timeout: config.timeout })));
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
var errors_1 = require("./errors");
Object.defineProperty(exports, "isBrevoError", { enumerable: true, get: function () { return errors_1.isBrevoError; } });
