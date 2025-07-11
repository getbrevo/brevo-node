"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrevoUnknownError = exports.BrevoTimeoutError = exports.BrevoConnectionError = exports.BrevoServerError = exports.BrevoInsufficientCreditsError = exports.BrevoRateLimitError = exports.BrevoValidationError = exports.BrevoNotFoundError = exports.BrevoPermissionError = exports.BrevoAuthenticationError = exports.BrevoError = void 0;
exports.createErrorFromResponse = createErrorFromResponse;
exports.isBrevoError = isBrevoError;
exports.isBrevoErrorType = isBrevoErrorType;
/**
 * Base class for all Brevo SDK errors
 */
var BrevoError = /** @class */ (function (_super) {
    __extends(BrevoError, _super);
    function BrevoError(message, cause) {
        var _this = _super.call(this, message) || this;
        _this.cause = cause;
        // Maintains proper stack trace for where our error was thrown
        if (Error.captureStackTrace) {
            Error.captureStackTrace(_this, _this.constructor);
        }
        return _this;
    }
    return BrevoError;
}(Error));
exports.BrevoError = BrevoError;
/**
 * Authentication errors (401)
 */
var BrevoAuthenticationError = /** @class */ (function (_super) {
    __extends(BrevoAuthenticationError, _super);
    function BrevoAuthenticationError(message, cause) {
        if (message === void 0) { message = 'Authentication failed. Please check your API key.'; }
        var _this = _super.call(this, message, cause) || this;
        _this.name = 'BrevoAuthenticationError';
        _this.type = 'authentication_error';
        return _this;
    }
    return BrevoAuthenticationError;
}(BrevoError));
exports.BrevoAuthenticationError = BrevoAuthenticationError;
/**
 * Permission errors (403)
 */
var BrevoPermissionError = /** @class */ (function (_super) {
    __extends(BrevoPermissionError, _super);
    function BrevoPermissionError(message, cause) {
        if (message === void 0) { message = 'Permission denied. Check your API key permissions.'; }
        var _this = _super.call(this, message, cause) || this;
        _this.name = 'BrevoPermissionError';
        _this.type = 'permission_error';
        return _this;
    }
    return BrevoPermissionError;
}(BrevoError));
exports.BrevoPermissionError = BrevoPermissionError;
/**
 * Resource not found errors (404)
 */
var BrevoNotFoundError = /** @class */ (function (_super) {
    __extends(BrevoNotFoundError, _super);
    function BrevoNotFoundError(resource, id, cause) {
        var _this = this;
        var message = id ? "".concat(resource, " with ID '").concat(id, "' not found.") : "".concat(resource, " not found.");
        _this = _super.call(this, message, cause) || this;
        _this.name = 'BrevoNotFoundError';
        _this.type = 'not_found_error';
        return _this;
    }
    return BrevoNotFoundError;
}(BrevoError));
exports.BrevoNotFoundError = BrevoNotFoundError;
/**
 * Validation errors (400, 422)
 */
var BrevoValidationError = /** @class */ (function (_super) {
    __extends(BrevoValidationError, _super);
    function BrevoValidationError(message, details, cause) {
        if (details === void 0) { details = []; }
        var _this = _super.call(this, message, cause) || this;
        _this.details = details;
        _this.name = 'BrevoValidationError';
        _this.type = 'validation_error';
        return _this;
    }
    /**
     * Get validation errors for a specific field
     */
    BrevoValidationError.prototype.getFieldErrors = function (field) {
        return this.details.filter(function (detail) { return detail.field === field; });
    };
    /**
     * Check if there are validation errors for a specific field
     */
    BrevoValidationError.prototype.hasFieldErrors = function (field) {
        return this.getFieldErrors(field).length > 0;
    };
    return BrevoValidationError;
}(BrevoError));
exports.BrevoValidationError = BrevoValidationError;
/**
 * Rate limiting errors (429)
 */
var BrevoRateLimitError = /** @class */ (function (_super) {
    __extends(BrevoRateLimitError, _super);
    function BrevoRateLimitError(message, retryAfter, cause) {
        if (message === void 0) { message = 'Rate limit exceeded. Please try again later.'; }
        var _this = _super.call(this, message, cause) || this;
        _this.retryAfter = retryAfter;
        _this.name = 'BrevoRateLimitError';
        _this.type = 'rate_limit_error';
        return _this;
    }
    return BrevoRateLimitError;
}(BrevoError));
exports.BrevoRateLimitError = BrevoRateLimitError;
/**
 * Insufficient credits errors (402)
 */
var BrevoInsufficientCreditsError = /** @class */ (function (_super) {
    __extends(BrevoInsufficientCreditsError, _super);
    function BrevoInsufficientCreditsError(message, cause) {
        if (message === void 0) { message = 'Insufficient credits. Please upgrade your plan.'; }
        var _this = _super.call(this, message, cause) || this;
        _this.name = 'BrevoInsufficientCreditsError';
        _this.type = 'insufficient_credits_error';
        return _this;
    }
    return BrevoInsufficientCreditsError;
}(BrevoError));
exports.BrevoInsufficientCreditsError = BrevoInsufficientCreditsError;
/**
 * Server errors (5xx)
 */
var BrevoServerError = /** @class */ (function (_super) {
    __extends(BrevoServerError, _super);
    function BrevoServerError(message, statusCode, cause) {
        if (message === void 0) { message = 'Internal server error. Please try again later.'; }
        if (statusCode === void 0) { statusCode = 500; }
        var _this = _super.call(this, message, cause) || this;
        _this.statusCode = statusCode;
        _this.name = 'BrevoServerError';
        _this.type = 'server_error';
        return _this;
    }
    return BrevoServerError;
}(BrevoError));
exports.BrevoServerError = BrevoServerError;
/**
 * Network/connection errors
 */
var BrevoConnectionError = /** @class */ (function (_super) {
    __extends(BrevoConnectionError, _super);
    function BrevoConnectionError(message, cause) {
        if (message === void 0) { message = 'Connection failed. Please check your network.'; }
        var _this = _super.call(this, message, cause) || this;
        _this.name = 'BrevoConnectionError';
        _this.type = 'connection_error';
        return _this;
    }
    return BrevoConnectionError;
}(BrevoError));
exports.BrevoConnectionError = BrevoConnectionError;
/**
 * Request timeout errors
 */
var BrevoTimeoutError = /** @class */ (function (_super) {
    __extends(BrevoTimeoutError, _super);
    function BrevoTimeoutError(message, cause) {
        if (message === void 0) { message = 'Request timed out. Please try again.'; }
        var _this = _super.call(this, message, cause) || this;
        _this.name = 'BrevoTimeoutError';
        _this.type = 'timeout_error';
        return _this;
    }
    return BrevoTimeoutError;
}(BrevoError));
exports.BrevoTimeoutError = BrevoTimeoutError;
/**
 * Unknown/unexpected errors
 */
var BrevoUnknownError = /** @class */ (function (_super) {
    __extends(BrevoUnknownError, _super);
    function BrevoUnknownError(message, cause) {
        if (message === void 0) { message = 'An unexpected error occurred.'; }
        var _this = _super.call(this, message, cause) || this;
        _this.name = 'BrevoUnknownError';
        _this.type = 'unknown_error';
        return _this;
    }
    return BrevoUnknownError;
}(BrevoError));
exports.BrevoUnknownError = BrevoUnknownError;
/**
 * Create appropriate error from HTTP status code and response
 */
function createErrorFromResponse(statusCode, response, cause) {
    var message = (response === null || response === void 0 ? void 0 : response.message) || 'An error occurred';
    var details = (response === null || response === void 0 ? void 0 : response.details) || [];
    switch (statusCode) {
        case 400:
        case 422:
            return new BrevoValidationError(message, details, cause);
        case 401:
            return new BrevoAuthenticationError(message, cause);
        case 402:
            return new BrevoInsufficientCreditsError(message, cause);
        case 403:
            return new BrevoPermissionError(message, cause);
        case 404:
            return new BrevoNotFoundError(message, undefined, cause);
        case 429:
            return new BrevoRateLimitError(message, undefined, cause);
        case 500:
        case 502:
        case 503:
        case 504:
            return new BrevoServerError(message, statusCode, cause);
        default:
            return new BrevoUnknownError(message, cause);
    }
}
/**
 * Check if an error is a Brevo SDK error
 */
function isBrevoError(error) {
    return error instanceof BrevoError;
}
/**
 * Type guard for specific error types
 */
function isBrevoErrorType(error, ErrorClass) {
    return error instanceof ErrorClass;
}
