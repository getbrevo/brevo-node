"use strict";
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
var __await = (this && this.__await) || function (v) { return this instanceof __await ? (this.v = v, this) : new __await(v); }
var __asyncGenerator = (this && this.__asyncGenerator) || function (thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () { return this; }, i;
    function awaitReturn(f) { return function (v) { return Promise.resolve(v).then(f, reject); }; }
    function verb(n, f) { if (g[n]) { i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; if (f) i[n] = f(i[n]); } }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationIterator = void 0;
exports.createPaginationIterator = createPaginationIterator;
exports.autoPaginate = autoPaginate;
exports.offsetToPage = offsetToPage;
exports.pageToOffset = pageToOffset;
exports.createPageBasedPagination = createPageBasedPagination;
/**
 * Pagination iterator for automatically handling paginated API responses
 */
var PaginationIterator = /** @class */ (function () {
    function PaginationIterator(fetcher, limit) {
        if (limit === void 0) { limit = 50; }
        this.fetcher = fetcher;
        this.limit = limit;
        this.currentOffset = 0;
    }
    /**
     * Get the next page of results
     */
    PaginationIterator.prototype.next = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, items, hasMore;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetcher({
                            limit: this.limit,
                            offset: this.currentOffset,
                        })];
                    case 1:
                        response = _a.sent();
                        items = this.extractItems(response);
                        hasMore = items.length === this.limit &&
                            this.currentOffset + this.limit < response.count;
                        if (hasMore) {
                            this.currentOffset += this.limit;
                        }
                        return [2 /*return*/, {
                                value: items,
                                done: !hasMore,
                            }];
                }
            });
        });
    };
    /**
     * Iterate through all pages
     */
    PaginationIterator.prototype[Symbol.asyncIterator] = function () {
        return __asyncGenerator(this, arguments, function _a() {
            var hasMore, _b, value, done;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        hasMore = true;
                        _c.label = 1;
                    case 1:
                        if (!hasMore) return [3 /*break*/, 5];
                        return [4 /*yield*/, __await(this.next())];
                    case 2:
                        _b = _c.sent(), value = _b.value, done = _b.done;
                        return [4 /*yield*/, __await(value)];
                    case 3: return [4 /*yield*/, _c.sent()];
                    case 4:
                        _c.sent();
                        hasMore = !done;
                        return [3 /*break*/, 1];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Get all items from all pages
     */
    PaginationIterator.prototype.all = function () {
        return __awaiter(this, void 0, void 0, function () {
            var allItems, _a, _b, _c, page, e_1_1;
            var _d, e_1, _e, _f;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        allItems = [];
                        _g.label = 1;
                    case 1:
                        _g.trys.push([1, 6, 7, 12]);
                        _a = true, _b = __asyncValues(this);
                        _g.label = 2;
                    case 2: return [4 /*yield*/, _b.next()];
                    case 3:
                        if (!(_c = _g.sent(), _d = _c.done, !_d)) return [3 /*break*/, 5];
                        _f = _c.value;
                        _a = false;
                        page = _f;
                        allItems.push.apply(allItems, page);
                        _g.label = 4;
                    case 4:
                        _a = true;
                        return [3 /*break*/, 2];
                    case 5: return [3 /*break*/, 12];
                    case 6:
                        e_1_1 = _g.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 12];
                    case 7:
                        _g.trys.push([7, , 10, 11]);
                        if (!(!_a && !_d && (_e = _b.return))) return [3 /*break*/, 9];
                        return [4 /*yield*/, _e.call(_b)];
                    case 8:
                        _g.sent();
                        _g.label = 9;
                    case 9: return [3 /*break*/, 11];
                    case 10:
                        if (e_1) throw e_1.error;
                        return [7 /*endfinally*/];
                    case 11: return [7 /*endfinally*/];
                    case 12: return [2 /*return*/, allItems];
                }
            });
        });
    };
    /**
     * Extract items array from paginated response
     * The items might be under different keys depending on the endpoint
     */
    PaginationIterator.prototype.extractItems = function (response) {
        // Common keys where items might be stored
        var possibleKeys = [
            "campaigns",
            "contacts",
            "lists",
            "folders",
            "templates",
            "items",
            "data",
        ];
        for (var _i = 0, possibleKeys_1 = possibleKeys; _i < possibleKeys_1.length; _i++) {
            var key = possibleKeys_1[_i];
            if (key in response && Array.isArray(response[key])) {
                return response[key];
            }
        }
        // Fallback: return empty array if no items found
        return [];
    };
    /**
     * Reset iterator to beginning
     */
    PaginationIterator.prototype.reset = function () {
        this.currentOffset = 0;
    };
    return PaginationIterator;
}());
exports.PaginationIterator = PaginationIterator;
/**
 * Helper function to create a pagination iterator
 */
function createPaginationIterator(fetcher, limit) {
    if (limit === void 0) { limit = 50; }
    return new PaginationIterator(fetcher, limit);
}
/**
 * Auto-paginate helper that collects all results
 */
function autoPaginate(fetcher_1, maxItems_1) {
    return __awaiter(this, arguments, void 0, function (fetcher, maxItems, pageSize) {
        var iterator, items, _a, iterator_1, iterator_1_1, page, e_2_1;
        var _b, e_2, _c, _d;
        if (pageSize === void 0) { pageSize = 50; }
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    iterator = new PaginationIterator(fetcher, pageSize);
                    items = [];
                    _e.label = 1;
                case 1:
                    _e.trys.push([1, 6, 7, 12]);
                    _a = true, iterator_1 = __asyncValues(iterator);
                    _e.label = 2;
                case 2: return [4 /*yield*/, iterator_1.next()];
                case 3:
                    if (!(iterator_1_1 = _e.sent(), _b = iterator_1_1.done, !_b)) return [3 /*break*/, 5];
                    _d = iterator_1_1.value;
                    _a = false;
                    page = _d;
                    items.push.apply(items, page);
                    // Stop if we've reached the maximum number of items
                    if (maxItems && items.length >= maxItems) {
                        return [2 /*return*/, items.slice(0, maxItems)];
                    }
                    _e.label = 4;
                case 4:
                    _a = true;
                    return [3 /*break*/, 2];
                case 5: return [3 /*break*/, 12];
                case 6:
                    e_2_1 = _e.sent();
                    e_2 = { error: e_2_1 };
                    return [3 /*break*/, 12];
                case 7:
                    _e.trys.push([7, , 10, 11]);
                    if (!(!_a && !_b && (_c = iterator_1.return))) return [3 /*break*/, 9];
                    return [4 /*yield*/, _c.call(iterator_1)];
                case 8:
                    _e.sent();
                    _e.label = 9;
                case 9: return [3 /*break*/, 11];
                case 10:
                    if (e_2) throw e_2.error;
                    return [7 /*endfinally*/];
                case 11: return [7 /*endfinally*/];
                case 12: return [2 /*return*/, items];
            }
        });
    });
}
/**
 * Convert offset-based pagination to page-based
 */
function offsetToPage(offset, limit) {
    return Math.floor(offset / limit) + 1;
}
/**
 * Convert page-based pagination to offset-based
 */
function pageToOffset(page, limit) {
    return (page - 1) * limit;
}
/**
 * Create page-based pagination helper
 */
function createPageBasedPagination(fetcher) {
    var _this = this;
    return function () {
        var args_1 = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args_1[_i] = arguments[_i];
        }
        return __awaiter(_this, __spreadArray([], args_1, true), void 0, function (params) {
            var page, limit, offset, response, items, totalPages;
            var _a, _b;
            if (params === void 0) { params = {}; }
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        page = (_a = params.page) !== null && _a !== void 0 ? _a : 1;
                        limit = (_b = params.limit) !== null && _b !== void 0 ? _b : 50;
                        offset = pageToOffset(page, limit);
                        return [4 /*yield*/, fetcher({ offset: offset, limit: limit })];
                    case 1:
                        response = _c.sent();
                        items = new PaginationIterator(fetcher, limit)["extractItems"](response);
                        totalPages = Math.ceil(response.count / limit);
                        return [2 /*return*/, {
                                items: items,
                                totalPages: totalPages,
                                currentPage: page,
                                totalItems: response.count,
                                hasNextPage: page < totalPages,
                                hasPreviousPage: page > 1,
                            }];
                }
            });
        });
    };
}
