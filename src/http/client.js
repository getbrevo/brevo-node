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
exports.FetchHttpClient = exports.AxiosHttpClient = void 0;
var axios_1 = require("axios");
var errors_1 = require("../errors");
/**
 * Axios-based HTTP client implementation
 */
var AxiosHttpClient = /** @class */ (function () {
    function AxiosHttpClient(config) {
        var _a, _b, _c, _d;
        this.maxRetries = (_a = config.maxRetries) !== null && _a !== void 0 ? _a : 3;
        this.retryDelay = (_b = config.retryDelay) !== null && _b !== void 0 ? _b : 1000;
        this.axios = axios_1.default.create({
            baseURL: (_c = config.baseUrl) !== null && _c !== void 0 ? _c : 'https://api.brevo.com/v3',
            timeout: (_d = config.timeout) !== null && _d !== void 0 ? _d : 30000,
            headers: __assign({ 'api-key': config.apiKey, 'Content-Type': 'application/json', 'User-Agent': '@brevo/api-sdk/1.0.0' }, config.headers),
        });
        // Request interceptor for logging (if needed)
        this.axios.interceptors.request.use(function (config) {
            // You can add request logging here
            return config;
        }, function (error) { return Promise.reject(error); });
        // Response interceptor for error handling
        this.axios.interceptors.response.use(function (response) { return response; }, function (error) {
            if (axios_1.default.isAxiosError(error)) {
                // Handle different types of axios errors
                if (error.code === 'ECONNABORTED') {
                    throw new errors_1.BrevoTimeoutError('Request timed out', error);
                }
                if (error.code === 'ECONNREFUSED' || error.code === 'ENOTFOUND') {
                    throw new errors_1.BrevoConnectionError('Connection failed', error);
                }
                if (error.response) {
                    // Server responded with error status
                    var errorResponse = error.response.data;
                    throw (0, errors_1.createErrorFromResponse)(error.response.status, errorResponse, error);
                }
            }
            throw new errors_1.BrevoConnectionError('Network error', error);
        });
    }
    /**
     * Make HTTP request with automatic retries
     */
    AxiosHttpClient.prototype.request = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var lastError, attempt, axiosConfig, response, error_1, delay;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        attempt = 0;
                        _a.label = 1;
                    case 1:
                        if (!(attempt <= this.maxRetries)) return [3 /*break*/, 7];
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 6]);
                        axiosConfig = __assign(__assign({ method: options.method, url: options.url, data: options.data, params: options.params }, (options.headers && { headers: options.headers })), (options.timeout && { timeout: options.timeout }));
                        return [4 /*yield*/, this.axios.request(axiosConfig)];
                    case 3:
                        response = _a.sent();
                        return [2 /*return*/, {
                                data: response.data,
                                status: response.status,
                                statusText: response.statusText,
                                headers: response.headers,
                            }];
                    case 4:
                        error_1 = _a.sent();
                        lastError = error_1;
                        // Don't retry on authentication, validation, or permission errors
                        if (error_1 instanceof Error &&
                            (error_1.message.includes('401') ||
                                error_1.message.includes('403') ||
                                error_1.message.includes('400') ||
                                error_1.message.includes('422'))) {
                            throw error_1;
                        }
                        // Don't retry on last attempt
                        if (attempt === this.maxRetries) {
                            return [3 /*break*/, 7];
                        }
                        delay = this.retryDelay * Math.pow(2, attempt);
                        return [4 /*yield*/, this.sleep(delay)];
                    case 5:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 6:
                        attempt++;
                        return [3 /*break*/, 1];
                    case 7: throw lastError || new Error('Request failed after retries');
                }
            });
        });
    };
    /**
     * Sleep utility for retry delays
     */
    AxiosHttpClient.prototype.sleep = function (ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    };
    return AxiosHttpClient;
}());
exports.AxiosHttpClient = AxiosHttpClient;
/**
 * Fetch-based HTTP client implementation (alternative to Axios)
 */
var FetchHttpClient = /** @class */ (function () {
    function FetchHttpClient(config) {
        var _a, _b;
        this.config = config;
        this.maxRetries = (_a = config.maxRetries) !== null && _a !== void 0 ? _a : 3;
        this.retryDelay = (_b = config.retryDelay) !== null && _b !== void 0 ? _b : 1000;
    }
    FetchHttpClient.prototype.request = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var baseUrl, url, requestInit, lastError, _loop_1, this_1, attempt, state_1;
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        baseUrl = (_a = this.config.baseUrl) !== null && _a !== void 0 ? _a : 'https://api.brevo.com/v3';
                        url = new URL(options.url, baseUrl);
                        // Add query parameters
                        if (options.params) {
                            Object.entries(options.params).forEach(function (_a) {
                                var key = _a[0], value = _a[1];
                                if (value !== undefined && value !== null) {
                                    url.searchParams.append(key, String(value));
                                }
                            });
                        }
                        requestInit = {
                            method: options.method,
                            headers: __assign(__assign({ 'api-key': this.config.apiKey, 'Content-Type': 'application/json', 'User-Agent': '@brevo/api-sdk/1.0.0' }, this.config.headers), options.headers),
                            signal: AbortSignal.timeout((_c = (_b = options.timeout) !== null && _b !== void 0 ? _b : this.config.timeout) !== null && _c !== void 0 ? _c : 30000),
                        };
                        if (options.data &&
                            (options.method === 'POST' || options.method === 'PUT' || options.method === 'PATCH')) {
                            requestInit.body = JSON.stringify(options.data);
                        }
                        _loop_1 = function (attempt) {
                            var response, errorData, data, headers_1, error_2, delay;
                            return __generator(this, function (_e) {
                                switch (_e.label) {
                                    case 0:
                                        _e.trys.push([0, 5, , 7]);
                                        return [4 /*yield*/, fetch(url.toString(), requestInit)];
                                    case 1:
                                        response = _e.sent();
                                        if (!!response.ok) return [3 /*break*/, 3];
                                        return [4 /*yield*/, response.json().catch(function () { return ({}); })];
                                    case 2:
                                        errorData = (_e.sent());
                                        throw (0, errors_1.createErrorFromResponse)(response.status, errorData);
                                    case 3: return [4 /*yield*/, response.json()];
                                    case 4:
                                        data = (_e.sent());
                                        headers_1 = {};
                                        response.headers.forEach(function (value, key) {
                                            headers_1[key] = value;
                                        });
                                        return [2 /*return*/, { value: {
                                                    data: data,
                                                    status: response.status,
                                                    statusText: response.statusText,
                                                    headers: headers_1,
                                                } }];
                                    case 5:
                                        error_2 = _e.sent();
                                        lastError = error_2;
                                        if (error_2 instanceof DOMException && error_2.name === 'TimeoutError') {
                                            lastError = new errors_1.BrevoTimeoutError('Request timed out', error_2);
                                        }
                                        // Don't retry on authentication, validation, or permission errors
                                        if (error_2 instanceof Error &&
                                            (error_2.message.includes('401') ||
                                                error_2.message.includes('403') ||
                                                error_2.message.includes('400') ||
                                                error_2.message.includes('422'))) {
                                            throw error_2;
                                        }
                                        // Don't retry on last attempt
                                        if (attempt === this_1.maxRetries) {
                                            return [2 /*return*/, "break"];
                                        }
                                        delay = this_1.retryDelay * Math.pow(2, attempt);
                                        return [4 /*yield*/, this_1.sleep(delay)];
                                    case 6:
                                        _e.sent();
                                        return [3 /*break*/, 7];
                                    case 7: return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        attempt = 0;
                        _d.label = 1;
                    case 1:
                        if (!(attempt <= this.maxRetries)) return [3 /*break*/, 4];
                        return [5 /*yield**/, _loop_1(attempt)];
                    case 2:
                        state_1 = _d.sent();
                        if (typeof state_1 === "object")
                            return [2 /*return*/, state_1.value];
                        if (state_1 === "break")
                            return [3 /*break*/, 4];
                        _d.label = 3;
                    case 3:
                        attempt++;
                        return [3 /*break*/, 1];
                    case 4: throw lastError || new Error('Request failed after retries');
                }
            });
        });
    };
    FetchHttpClient.prototype.sleep = function (ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    };
    return FetchHttpClient;
}());
exports.FetchHttpClient = FetchHttpClient;
