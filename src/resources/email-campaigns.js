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
exports.EmailCampaignsResource = void 0;
var validation_1 = require("../utils/validation");
var validation_2 = require("../utils/validation");
var pagination_1 = require("../utils/pagination");
/**
 * Email Campaigns resource for managing email marketing campaigns
 *
 * @example
 * ```typescript
 * // List all campaigns
 * const campaigns = await brevo.emailCampaigns.list({ limit: 10 });
 *
 * // Create a new campaign
 * const campaign = await brevo.emailCampaigns.create({
 *   name: 'Summer Sale 2024',
 *   subject: '50% off everything!',
 *   sender: { email: 'sales@company.com', name: 'Sales Team' },
 *   htmlContent: '<h1>Sale!</h1>',
 *   recipients: { lists: [1, 2] }
 * });
 *
 * // Get campaign details
 * const campaign = await brevo.emailCampaigns.get(123);
 *
 * // Send test email
 * await brevo.emailCampaigns.sendTest(123, {
 *   emailTo: ['test@company.com']
 * });
 * ```
 */
var EmailCampaignsResource = /** @class */ (function () {
    function EmailCampaignsResource(client) {
        this.client = client;
    }
    /**
     * List all email campaigns
     *
     * Retrieve all email campaigns with optional filtering and pagination.
     * Supports filtering by type, status, and date range.
     *
     * @param params - Query parameters for filtering and pagination
     * @returns Promise resolving to paginated campaigns list
     *
     * @example
     * ```typescript
     * // Get all sent campaigns
     * const campaigns = await brevo.emailCampaigns.list({
     *   status: 'sent',
     *   limit: 50
     * });
     *
     * // Get campaigns from last month
     * const campaigns = await brevo.emailCampaigns.list({
     *   startDate: '2024-01-01T00:00:00Z',
     *   endDate: '2024-01-31T23:59:59Z',
     *   statistics: 'globalStats'
     * });
     * ```
     */
    EmailCampaignsResource.prototype.list = function () {
        return __awaiter(this, arguments, void 0, function (params) {
            var validatedPagination, response;
            var _a;
            if (params === void 0) { params = {}; }
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        validatedPagination = (0, validation_1.validate)(validation_2.paginationSchema, {
                            limit: params.limit,
                            offset: params.offset,
                        });
                        // Validate date range if provided
                        if (params.startDate || params.endDate) {
                            (0, validation_1.validate)(validation_2.dateRangeSchema, {
                                startDate: params.startDate,
                                endDate: params.endDate,
                            });
                        }
                        return [4 /*yield*/, this.client.request({
                                method: 'GET',
                                url: '/emailCampaigns',
                                params: __assign(__assign({}, validatedPagination), { type: params.type, status: params.status, statistics: params.statistics, startDate: params.startDate, endDate: params.endDate, sort: (_a = params.sort) !== null && _a !== void 0 ? _a : 'desc', excludeHtmlContent: params.excludeHtmlContent }),
                            })];
                    case 1:
                        response = _b.sent();
                        return [2 /*return*/, response.data];
                }
            });
        });
    };
    /**
     * Get a specific email campaign by ID
     *
     * @param campaignId - The ID of the campaign to retrieve
     * @param statistics - Type of statistics to include in the response
     * @returns Promise resolving to the campaign details
     *
     * @example
     * ```typescript
     * const campaign = await brevo.emailCampaigns.get(123);
     *
     * // Get campaign with specific statistics
     * const campaignWithStats = await brevo.emailCampaigns.get(123, 'globalStats');
     * ```
     */
    EmailCampaignsResource.prototype.get = function (campaignId, statistics) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.request(__assign({ method: 'GET', url: "/emailCampaigns/".concat(campaignId) }, (statistics && { params: { statistics: statistics } })))];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                }
            });
        });
    };
    /**
     * Create a new email campaign
     *
     * Creates a new email marketing campaign. The campaign will be created
     * in draft status and can be scheduled or sent later.
     *
     * @param params - Campaign creation parameters
     * @returns Promise resolving to the created campaign ID
     *
     * @example
     * ```typescript
     * const campaign = await brevo.emailCampaigns.create({
     *   name: 'Newsletter March 2024',
     *   subject: 'Spring Updates',
     *   sender: {
     *     email: 'newsletter@company.com',
     *     name: 'Company Newsletter'
     *   },
     *   htmlContent: '<h1>Welcome to our newsletter!</h1>',
     *   recipients: {
     *     lists: [1, 2, 3],
     *     exclusionLists: [4]
     *   },
     *   tag: 'newsletter'
     * });
     *
     * console.log(`Created campaign with ID: ${campaign.id}`);
     * ```
     */
    EmailCampaignsResource.prototype.create = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var validatedParams, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        validatedParams = (0, validation_1.validate)(validation_2.createEmailCampaignSchema, params);
                        return [4 /*yield*/, this.client.request({
                                method: 'POST',
                                url: '/emailCampaigns',
                                data: validatedParams,
                            })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                }
            });
        });
    };
    /**
     * Update an existing email campaign
     *
     * Updates an email campaign. Only campaigns in draft status can be updated.
     *
     * @param campaignId - The ID of the campaign to update
     * @param params - Campaign update parameters
     * @returns Promise resolving when update is complete
     *
     * @example
     * ```typescript
     * await brevo.emailCampaigns.update(123, {
     *   name: 'Updated Campaign Name',
     *   subject: 'New Subject Line',
     *   htmlContent: '<h1>Updated content</h1>'
     * });
     * ```
     */
    EmailCampaignsResource.prototype.update = function (campaignId, params) {
        return __awaiter(this, void 0, void 0, function () {
            var validatedParams;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        validatedParams = params;
                        return [4 /*yield*/, this.client.request({
                                method: 'PUT',
                                url: "/emailCampaigns/".concat(campaignId),
                                data: validatedParams,
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Delete an email campaign
     *
     * Permanently deletes an email campaign. Only draft campaigns can be deleted.
     *
     * @param campaignId - The ID of the campaign to delete
     * @returns Promise resolving when deletion is complete
     *
     * @example
     * ```typescript
     * await brevo.emailCampaigns.delete(123);
     * ```
     */
    EmailCampaignsResource.prototype.delete = function (campaignId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.request({
                            method: 'DELETE',
                            url: "/emailCampaigns/".concat(campaignId),
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Send an email campaign immediately
     *
     * Sends the campaign to all recipients immediately. The campaign must be
     * in a valid state (not draft, not already sent).
     *
     * @param campaignId - The ID of the campaign to send
     * @returns Promise resolving when the send request is accepted
     *
     * @example
     * ```typescript
     * await brevo.emailCampaigns.sendNow(123);
     * ```
     */
    EmailCampaignsResource.prototype.sendNow = function (campaignId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.request({
                            method: 'POST',
                            url: "/emailCampaigns/".concat(campaignId, "/sendNow"),
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Send a test email for the campaign
     *
     * Sends a test version of the campaign to specified email addresses.
     *
     * @param campaignId - The ID of the campaign to test
     * @param params - Test email parameters
     * @returns Promise resolving when test email is sent
     *
     * @example
     * ```typescript
     * await brevo.emailCampaigns.sendTest(123, {
     *   emailTo: ['test1@company.com', 'test2@company.com']
     * });
     * ```
     */
    EmailCampaignsResource.prototype.sendTest = function (campaignId, params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.request({
                            method: 'POST',
                            url: "/emailCampaigns/".concat(campaignId, "/sendTest"),
                            data: params,
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Update campaign status
     *
     * Updates the status of a campaign (e.g., suspend, resume).
     *
     * @param campaignId - The ID of the campaign
     * @param status - New status to set
     * @returns Promise resolving when status is updated
     *
     * @example
     * ```typescript
     * // Suspend a campaign
     * await brevo.emailCampaigns.updateStatus(123, 'suspended');
     *
     * // Resume a campaign
     * await brevo.emailCampaigns.updateStatus(123, 'queued');
     * ```
     */
    EmailCampaignsResource.prototype.updateStatus = function (campaignId, status) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.request({
                            method: 'PUT',
                            url: "/emailCampaigns/".concat(campaignId, "/status"),
                            data: { status: status },
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Get campaign statistics
     *
     * Retrieves detailed statistics for a specific campaign.
     *
     * @param campaignId - The ID of the campaign
     * @returns Promise resolving to campaign statistics
     *
     * @example
     * ```typescript
     * const stats = await brevo.emailCampaigns.getStatistics(123);
     * console.log(`Opens: ${stats.globalStats?.viewed}`);
     * console.log(`Clicks: ${stats.globalStats?.uniqueClicks}`);
     * ```
     */
    EmailCampaignsResource.prototype.getStatistics = function (campaignId) {
        return __awaiter(this, void 0, void 0, function () {
            var campaign;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.get(campaignId, 'globalStats')];
                    case 1:
                        campaign = _a.sent();
                        return [2 /*return*/, campaign.statistics || {}];
                }
            });
        });
    };
    /**
     * Get a shared URL for the campaign
     *
     * Generates a shareable URL for the campaign content.
     *
     * @param campaignId - The ID of the campaign
     * @returns Promise resolving to the shared URL
     *
     * @example
     * ```typescript
     * const result = await brevo.emailCampaigns.getSharedUrl(123);
     * console.log(`Share URL: ${result.sharedUrl}`);
     * ```
     */
    EmailCampaignsResource.prototype.getSharedUrl = function (campaignId) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.request({
                            method: 'GET',
                            url: "/emailCampaigns/".concat(campaignId, "/sharedUrl"),
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                }
            });
        });
    };
    /**
     * Create a pagination iterator for campaigns
     *
     * Returns an iterator that automatically handles pagination when listing campaigns.
     *
     * @param params - Query parameters for filtering
     * @param pageSize - Number of items per page (default: 50)
     * @returns Pagination iterator
     *
     * @example
     * ```typescript
     * // Iterate through all campaigns
     * const iterator = brevo.emailCampaigns.iterate({ status: 'sent' });
     * for await (const campaignPage of iterator) {
     *   for (const campaign of campaignPage) {
     *     console.log(campaign.name);
     *   }
     * }
     *
     * // Get all campaigns at once
     * const allCampaigns = await brevo.emailCampaigns.iterate().all();
     * ```
     */
    EmailCampaignsResource.prototype.iterate = function (params, pageSize) {
        var _this = this;
        if (params === void 0) { params = {}; }
        if (pageSize === void 0) { pageSize = 50; }
        return (0, pagination_1.createPaginationIterator)(function (paginationParams) { return _this.list(__assign(__assign({}, params), paginationParams)); }, pageSize);
    };
    return EmailCampaignsResource;
}());
exports.EmailCampaignsResource = EmailCampaignsResource;
