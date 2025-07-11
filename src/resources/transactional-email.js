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
exports.TransactionalEmailResource = void 0;
var validation_1 = require("../utils/validation");
var validation_2 = require("../utils/validation");
var pagination_1 = require("../utils/pagination");
/**
 * Transactional Email resource for sending individual emails and managing templates
 */
var TransactionalEmailResource = /** @class */ (function () {
    function TransactionalEmailResource(client) {
        this.client = client;
    }
    /**
     * Send a transactional email
     */
    TransactionalEmailResource.prototype.send = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var validatedParams, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        validatedParams = (0, validation_1.validate)(validation_2.transactionalEmailSchema, params);
                        return [4 /*yield*/, this.client.request({
                                method: 'POST',
                                url: '/smtp/email',
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
     * List email templates
     */
    TransactionalEmailResource.prototype.listTemplates = function () {
        return __awaiter(this, arguments, void 0, function (params) {
            var validatedPagination, response;
            if (params === void 0) { params = {}; }
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        validatedPagination = (0, validation_1.validate)(validation_2.paginationSchema, {
                            limit: params.limit,
                            offset: params.offset,
                        });
                        return [4 /*yield*/, this.client.request({
                                method: 'GET',
                                url: '/smtp/templates',
                                params: __assign(__assign({}, validatedPagination), { templateName: params.templateName, isActive: params.isActive }),
                            })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                }
            });
        });
    };
    /**
     * Get a specific email template by ID
     */
    TransactionalEmailResource.prototype.getTemplate = function (templateId) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.request({
                            method: 'GET',
                            url: "/smtp/templates/".concat(templateId),
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                }
            });
        });
    };
    /**
     * Create a new email template
     */
    TransactionalEmailResource.prototype.createTemplate = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var validatedParams, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        validatedParams = (0, validation_1.validate)(validation_2.emailTemplateSchema, params);
                        return [4 /*yield*/, this.client.request({
                                method: 'POST',
                                url: '/smtp/templates',
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
     * Update an existing email template
     */
    TransactionalEmailResource.prototype.updateTemplate = function (templateId, params) {
        return __awaiter(this, void 0, void 0, function () {
            var validatedParams;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        validatedParams = params;
                        return [4 /*yield*/, this.client.request({
                                method: 'PUT',
                                url: "/smtp/templates/".concat(templateId),
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
     * Delete an email template
     */
    TransactionalEmailResource.prototype.deleteTemplate = function (templateId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.request({
                            method: 'DELETE',
                            url: "/smtp/templates/".concat(templateId),
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Get email statistics
     */
    TransactionalEmailResource.prototype.getStatistics = function () {
        return __awaiter(this, arguments, void 0, function (params) {
            var response;
            if (params === void 0) { params = {}; }
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.request({
                            method: 'GET',
                            url: '/smtp/statistics',
                            params: {
                                startDate: params.startDate,
                                endDate: params.endDate,
                                days: params.days,
                                tag: params.tag,
                            },
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                }
            });
        });
    };
    /**
     * Create a pagination iterator for email templates
     */
    TransactionalEmailResource.prototype.iterateTemplates = function (params, pageSize) {
        var _this = this;
        if (params === void 0) { params = {}; }
        if (pageSize === void 0) { pageSize = 50; }
        return (0, pagination_1.createPaginationIterator)(function (paginationParams) { return _this.listTemplates(__assign(__assign({}, params), paginationParams)); }, pageSize);
    };
    return TransactionalEmailResource;
}());
exports.TransactionalEmailResource = TransactionalEmailResource;
