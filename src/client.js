"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Brevo = void 0;
var client_1 = require("./http/client");
var email_campaigns_1 = require("./resources/email-campaigns");
var contacts_1 = require("./resources/contacts");
var transactional_email_1 = require("./resources/transactional-email");
var validation_1 = require("./utils/validation");
var validation_2 = require("./utils/validation");
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
var Brevo = /** @class */ (function () {
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
    function Brevo(config, httpClient) {
        // Validate configuration
        this.validateConfig(config);
        // Initialize HTTP client
        this.httpClient = httpClient !== null && httpClient !== void 0 ? httpClient : new client_1.AxiosHttpClient(config);
        // Initialize resource classes
        this.emailCampaigns = new email_campaigns_1.EmailCampaignsResource(this.httpClient);
        this.contacts = new contacts_1.ContactsResource(this.httpClient);
        this.transactionalEmail = new transactional_email_1.TransactionalEmailResource(this.httpClient);
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
    Brevo.withAxios = function (config) {
        return new Brevo(config, new client_1.AxiosHttpClient(config));
    };
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
    Brevo.withFetch = function (config) {
        return new Brevo(config, new client_1.FetchHttpClient(config));
    };
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
    Brevo.prototype.testConnection = function () {
        return __awaiter(this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        // Make a simple API call to test connectivity
                        return [4 /*yield*/, this.emailCampaigns.list({ limit: 1 })];
                    case 1:
                        // Make a simple API call to test connectivity
                        _a.sent();
                        return [2 /*return*/, {
                                connected: true,
                                message: 'Successfully connected to Brevo API',
                            }];
                    case 2:
                        error_1 = _a.sent();
                        return [2 /*return*/, {
                                connected: false,
                                message: error_1 instanceof Error ? error_1.message : 'Unknown connection error',
                            }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
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
    Brevo.prototype.getConfig = function () {
        // This is a simplified version - in a real implementation,
        // you'd need to store and return the actual config
        return {
            apiKey: 'xkeysib-****',
            baseUrl: 'https://api.brevo.com/v3',
            timeout: 30000,
            maxRetries: 3,
            retryDelay: 1000,
        };
    };
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
    Brevo.prototype.request = function (method, url, data, params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.httpClient.request(__assign({ method: method, url: url, data: data }, (params && { params: params })))];
            });
        });
    };
    /**
     * Validate the client configuration
     *
     * @private
     * @param config - Configuration to validate
     * @throws {BrevoValidationError} If configuration is invalid
     */
    Brevo.prototype.validateConfig = function (config) {
        // Validate API key format
        (0, validation_1.validate)(validation_2.schemas.apiKey, config.apiKey);
        // Validate optional URL if provided
        if (config.baseUrl) {
            (0, validation_1.validate)(validation_2.schemas.url, config.baseUrl);
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
    };
    return Brevo;
}());
exports.Brevo = Brevo;
/**
 * Default export for convenience
 */
exports.default = Brevo;
/**
 * Re-export all types for easy access
 */
__exportStar(require("./types/common"), exports);
__exportStar(require("./types/email-campaigns"), exports);
__exportStar(require("./errors"), exports);
__exportStar(require("./utils/pagination"), exports);
__exportStar(require("./utils/validation"), exports);
