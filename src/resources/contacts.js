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
exports.ContactsResource = void 0;
var validation_1 = require("../utils/validation");
var validation_2 = require("../utils/validation");
var pagination_1 = require("../utils/pagination");
/**
 * Contacts resource for managing contacts and contact lists
 *
 * @example
 * ```typescript
 * // Create a contact
 * const contact = await brevo.contacts.create({
 *   email: 'user@example.com',
 *   attributes: { FIRSTNAME: 'John', LASTNAME: 'Doe' },
 *   listIds: [1, 2]
 * });
 *
 * // List contacts
 * const contacts = await brevo.contacts.list({ limit: 50 });
 *
 * // Get contact by email
 * const contact = await brevo.contacts.get('user@example.com');
 * ```
 */
var ContactsResource = /** @class */ (function () {
    function ContactsResource(client) {
        this.client = client;
    }
    /**
     * List all contacts
     *
     * Retrieve all contacts with optional filtering and pagination.
     *
     * @param params - Query parameters for filtering and pagination
     * @returns Promise resolving to paginated contacts list
     *
     * @example
     * ```typescript
     * // Get recent contacts
     * const contacts = await brevo.contacts.list({
     *   limit: 100,
     *   modifiedSince: '2024-01-01T00:00:00Z'
     * });
     *
     * console.log(`Found ${contacts.count} contacts`);
     * ```
     */
    ContactsResource.prototype.list = function () {
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
                        return [4 /*yield*/, this.client.request({
                                method: 'GET',
                                url: '/contacts',
                                params: __assign(__assign({}, validatedPagination), { sort: (_a = params.sort) !== null && _a !== void 0 ? _a : 'desc', modifiedSince: params.modifiedSince, createdSince: params.createdSince }),
                            })];
                    case 1:
                        response = _b.sent();
                        return [2 /*return*/, response.data];
                }
            });
        });
    };
    /**
     * Get a specific contact by email or ID
     *
     * @param identifier - Contact email address or ID
     * @returns Promise resolving to the contact details
     *
     * @example
     * ```typescript
     * // Get by email
     * const contact = await brevo.contacts.get('user@example.com');
     *
     * // Get by ID
     * const contact = await brevo.contacts.get(123);
     * ```
     */
    ContactsResource.prototype.get = function (identifier) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.request({
                            method: 'GET',
                            url: "/contacts/".concat(identifier),
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                }
            });
        });
    };
    /**
     * Create a new contact
     *
     * Creates a new contact with the specified email and attributes.
     *
     * @param params - Contact creation parameters
     * @returns Promise resolving to the created contact ID
     *
     * @example
     * ```typescript
     * const contact = await brevo.contacts.create({
     *   email: 'john.doe@example.com',
     *   attributes: {
     *     FIRSTNAME: 'John',
     *     LASTNAME: 'Doe',
     *     COMPANY: 'Acme Corp'
     *   },
     *   listIds: [1, 2, 3],
     *   updateEnabled: true
     * });
     * ```
     */
    ContactsResource.prototype.create = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var validatedParams, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        validatedParams = (0, validation_1.validate)(validation_2.contactSchema, params);
                        return [4 /*yield*/, this.client.request({
                                method: 'POST',
                                url: '/contacts',
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
     * Update an existing contact
     *
     * @param identifier - Contact email address or ID
     * @param params - Contact update parameters
     * @returns Promise resolving when update is complete
     *
     * @example
     * ```typescript
     * await brevo.contacts.update('user@example.com', {
     *   attributes: { LASTNAME: 'Smith' },
     *   listIds: [4, 5]
     * });
     * ```
     */
    ContactsResource.prototype.update = function (identifier, params) {
        return __awaiter(this, void 0, void 0, function () {
            var validatedParams;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        validatedParams = (0, validation_1.validate)(validation_2.contactSchema.partial(), params);
                        return [4 /*yield*/, this.client.request({
                                method: 'PUT',
                                url: "/contacts/".concat(identifier),
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
     * Delete a contact
     *
     * @param identifier - Contact email address or ID
     * @returns Promise resolving when deletion is complete
     *
     * @example
     * ```typescript
     * await brevo.contacts.delete('user@example.com');
     * ```
     */
    ContactsResource.prototype.delete = function (identifier) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.request({
                            method: 'DELETE',
                            url: "/contacts/".concat(identifier),
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Get contact lists
     *
     * @param params - Pagination parameters
     * @returns Promise resolving to contact lists
     *
     * @example
     * ```typescript
     * const lists = await brevo.contacts.getLists({ limit: 50 });
     * ```
     */
    ContactsResource.prototype.getLists = function () {
        return __awaiter(this, arguments, void 0, function (params) {
            var validatedPagination, response;
            if (params === void 0) { params = {}; }
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        validatedPagination = (0, validation_1.validate)(validation_2.paginationSchema, params);
                        return [4 /*yield*/, this.client.request({
                                method: 'GET',
                                url: '/contacts/lists',
                                params: validatedPagination,
                            })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                }
            });
        });
    };
    /**
     * Create a contact list
     *
     * @param params - List creation parameters
     * @returns Promise resolving to the created list ID
     *
     * @example
     * ```typescript
     * const list = await brevo.contacts.createList({
     *   name: 'Newsletter Subscribers',
     *   folderId: 1
     * });
     * ```
     */
    ContactsResource.prototype.createList = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.request({
                            method: 'POST',
                            url: '/contacts/lists',
                            data: params,
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                }
            });
        });
    };
    /**
     * Get contacts in a specific list
     *
     * @param listId - List ID
     * @param params - Pagination parameters
     * @returns Promise resolving to contacts in the list
     *
     * @example
     * ```typescript
     * const contacts = await brevo.contacts.getListContacts(1, { limit: 100 });
     * ```
     */
    ContactsResource.prototype.getListContacts = function (listId_1) {
        return __awaiter(this, arguments, void 0, function (listId, params) {
            var validatedPagination, response;
            if (params === void 0) { params = {}; }
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        validatedPagination = (0, validation_1.validate)(validation_2.paginationSchema, params);
                        return [4 /*yield*/, this.client.request({
                                method: 'GET',
                                url: "/contacts/lists/".concat(listId, "/contacts"),
                                params: validatedPagination,
                            })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                }
            });
        });
    };
    /**
     * Add contacts to a list
     *
     * @param listId - List ID
     * @param contactIds - Array of contact IDs or emails
     * @returns Promise resolving when contacts are added
     *
     * @example
     * ```typescript
     * await brevo.contacts.addToList(1, ['user@example.com', 'user2@example.com']);
     * ```
     */
    ContactsResource.prototype.addToList = function (listId, contactIds) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.request({
                            method: 'POST',
                            url: "/contacts/lists/".concat(listId, "/contacts/add"),
                            data: { ids: contactIds },
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Remove contacts from a list
     *
     * @param listId - List ID
     * @param contactIds - Array of contact IDs or emails
     * @returns Promise resolving when contacts are removed
     *
     * @example
     * ```typescript
     * await brevo.contacts.removeFromList(1, ['user@example.com']);
     * ```
     */
    ContactsResource.prototype.removeFromList = function (listId, contactIds) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.request({
                            method: 'POST',
                            url: "/contacts/lists/".concat(listId, "/contacts/remove"),
                            data: { ids: contactIds },
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Get contact attributes
     *
     * @returns Promise resolving to available contact attributes
     *
     * @example
     * ```typescript
     * const attributes = await brevo.contacts.getAttributes();
     * console.log('Available attributes:', attributes);
     * ```
     */
    ContactsResource.prototype.getAttributes = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.request({
                            method: 'GET',
                            url: '/contacts/attributes',
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                }
            });
        });
    };
    /**
     * Create a contact attribute
     *
     * @param category - Attribute category ('normal', 'transactional', 'calculated')
     * @param name - Attribute name
     * @param params - Attribute creation parameters
     * @returns Promise resolving when attribute is created
     *
     * @example
     * ```typescript
     * await brevo.contacts.createAttribute('normal', 'CUSTOM_FIELD', {
     *   value: 'string'
     * });
     * ```
     */
    ContactsResource.prototype.createAttribute = function (category, name, params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.request({
                            method: 'POST',
                            url: "/contacts/attributes/".concat(category, "/").concat(name),
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
     * Create a pagination iterator for contacts
     *
     * @param params - Query parameters for filtering
     * @param pageSize - Number of items per page (default: 50)
     * @returns Pagination iterator
     *
     * @example
     * ```typescript
     * // Iterate through all contacts
     * for await (const contactPage of brevo.contacts.iterate()) {
     *   contactPage.forEach(contact => console.log(contact.email));
     * }
     * ```
     */
    ContactsResource.prototype.iterate = function (params, pageSize) {
        var _this = this;
        if (params === void 0) { params = {}; }
        if (pageSize === void 0) { pageSize = 50; }
        return (0, pagination_1.createPaginationIterator)(function (paginationParams) { return _this.list(__assign(__assign({}, params), paginationParams)); }, pageSize);
    };
    return ContactsResource;
}());
exports.ContactsResource = ContactsResource;
