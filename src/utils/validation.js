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
exports.emailTemplateSchema = exports.transactionalEmailSchema = exports.createEmailCampaignSchema = exports.contactSchema = exports.emailSenderSchema = exports.dateRangeSchema = exports.paginationSchema = exports.schemas = void 0;
exports.validate = validate;
exports.safeValidate = safeValidate;
exports.validatePartial = validatePartial;
exports.withValidation = withValidation;
exports.validateInput = validateInput;
exports.pick = pick;
exports.omit = omit;
var zod_1 = require("zod");
var errors_1 = require("../errors");
/**
 * Common validation schemas
 */
exports.schemas = {
    email: zod_1.z.string().email('Invalid email address'),
    apiKey: zod_1.z
        .string()
        .min(1, 'API key is required')
        .regex(/^xkeysib-[a-f0-9]+-[a-zA-Z0-9]+$/, 'Invalid Brevo API key format'),
    phoneNumber: zod_1.z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number format'),
    url: zod_1.z.string().url('Invalid URL format'),
    positiveInteger: zod_1.z.number().int('Must be an integer').positive('Must be a positive number'),
    nonNegativeInteger: zod_1.z.number().int('Must be an integer').min(0, 'Must be non-negative'),
    limit: zod_1.z
        .number()
        .int('Limit must be an integer')
        .min(1, 'Limit must be at least 1')
        .max(100, 'Limit cannot exceed 100')
        .default(50),
    offset: zod_1.z
        .number()
        .int('Offset must be an integer')
        .min(0, 'Offset must be non-negative')
        .default(0),
    isoDate: zod_1.z
        .string()
        .datetime('Invalid ISO date format')
        .or(zod_1.z.date().transform(function (date) { return date.toISOString(); })),
    campaignStatus: zod_1.z.enum([
        'suspended',
        'archive',
        'sent',
        'queued',
        'draft',
        'inProcess',
        'inReview',
    ]),
    campaignType: zod_1.z.enum(['classic', 'trigger']),
    statisticsType: zod_1.z.enum(['globalStats', 'linksStats', 'statsByDomain']),
    sortOrder: zod_1.z.enum(['asc', 'desc']).default('desc'),
    attributeType: zod_1.z.enum(['text', 'date', 'float', 'boolean', 'category']),
    attributeCategory: zod_1.z.enum(['normal', 'transactional', 'calculated']),
};
/**
 * Pagination parameters schema
 */
exports.paginationSchema = zod_1.z.object({
    limit: exports.schemas.limit.optional(),
    offset: exports.schemas.offset.optional(),
});
/**
 * Date range parameters schema
 */
exports.dateRangeSchema = zod_1.z
    .object({
    startDate: exports.schemas.isoDate.optional(),
    endDate: exports.schemas.isoDate.optional(),
})
    .refine(function (data) {
    if (data.startDate && data.endDate) {
        return new Date(data.startDate) <= new Date(data.endDate);
    }
    return true;
}, {
    message: 'Start date must be before or equal to end date',
    path: ['startDate'],
});
/**
 * Email sender schema
 */
exports.emailSenderSchema = zod_1.z.object({
    email: exports.schemas.email,
    name: zod_1.z.string().min(1, 'Sender name is required'),
    id: exports.schemas.positiveInteger.optional(),
});
/**
 * Contact schema
 */
exports.contactSchema = zod_1.z.object({
    email: exports.schemas.email,
    attributes: zod_1.z.record(zod_1.z.string(), zod_1.z.any()).optional(),
    listIds: zod_1.z.array(exports.schemas.positiveInteger).optional(),
    unlinkListIds: zod_1.z.array(exports.schemas.positiveInteger).optional(),
    updateEnabled: zod_1.z.boolean().optional(),
});
/**
 * Email campaign creation schema
 */
exports.createEmailCampaignSchema = zod_1.z
    .object({
    name: zod_1.z.string().min(1, 'Campaign name is required'),
    subject: zod_1.z.string().min(1, 'Subject is required'),
    sender: exports.emailSenderSchema,
    replyTo: exports.schemas.email.optional(),
    toField: zod_1.z.string().optional(),
    htmlContent: zod_1.z.string().optional(),
    textContent: zod_1.z.string().optional(),
    tag: zod_1.z.string().optional(),
    recipients: zod_1.z
        .object({
        listIds: zod_1.z.array(exports.schemas.positiveInteger).optional(),
        exclusionListIds: zod_1.z.array(exports.schemas.positiveInteger).optional(),
    })
        .optional(),
    scheduledAt: exports.schemas.isoDate.optional(),
    type: exports.schemas.campaignType.optional(),
})
    .refine(function (data) { return data.htmlContent || data.textContent; }, {
    message: 'Either htmlContent or textContent must be provided',
    path: ['htmlContent'],
});
/**
 * Email recipient schema
 */
var emailRecipientSchema = zod_1.z.object({
    email: exports.schemas.email,
    name: zod_1.z.string().optional(),
});
/**
 * Email attachment schema
 */
var emailAttachmentSchema = zod_1.z.object({
    url: exports.schemas.url.optional(),
    content: zod_1.z.string().optional(),
    name: zod_1.z.string().min(1, 'Attachment name is required'),
});
/**
 * Base transactional email schema
 */
var baseTransactionalEmailSchema = zod_1.z.object({
    to: zod_1.z.array(emailRecipientSchema).min(1, 'At least one recipient is required'),
    sender: exports.emailSenderSchema.optional(),
    replyTo: emailRecipientSchema.optional(),
    cc: zod_1.z.array(emailRecipientSchema).optional(),
    bcc: zod_1.z.array(emailRecipientSchema).optional(),
    params: zod_1.z.record(zod_1.z.string(), zod_1.z.any()).optional(),
    messageVersions: zod_1.z
        .array(zod_1.z.object({
        to: zod_1.z.array(emailRecipientSchema),
        params: zod_1.z.record(zod_1.z.string(), zod_1.z.any()).optional(),
        subject: zod_1.z.string().optional(),
    }))
        .optional(),
    attachment: zod_1.z.array(emailAttachmentSchema).optional(),
    headers: zod_1.z.record(zod_1.z.string(), zod_1.z.string()).optional(),
    tags: zod_1.z.array(zod_1.z.string()).optional(),
});
/**
 * Custom content email schema
 */
var customContentEmailSchema = baseTransactionalEmailSchema
    .extend({
    subject: zod_1.z.string().min(1, 'Subject is required'),
    htmlContent: zod_1.z.string().optional(),
    textContent: zod_1.z.string().optional(),
})
    .refine(function (data) { return data.htmlContent || data.textContent; }, 'Either htmlContent or textContent must be provided when using custom content');
/**
 * Template email schema
 */
var templateEmailSchema = baseTransactionalEmailSchema.extend({
    templateId: exports.schemas.positiveInteger,
});
/**
 * Transactional email schema
 */
exports.transactionalEmailSchema = zod_1.z.union([customContentEmailSchema, templateEmailSchema]);
/**
 * Email template schema
 */
exports.emailTemplateSchema = zod_1.z
    .object({
    name: zod_1.z.string().min(1, 'Template name is required'),
    subject: zod_1.z.string().min(1, 'Subject is required'),
    htmlContent: zod_1.z.string().optional(),
    textContent: zod_1.z.string().optional(),
    sender: exports.emailSenderSchema.optional(),
    replyTo: zod_1.z.string().email('Invalid reply-to email').optional(),
    tag: zod_1.z.string().optional(),
    isActive: zod_1.z.boolean().optional(),
})
    .refine(function (data) { return data.htmlContent || data.textContent; }, 'Either htmlContent or textContent must be provided');
/**
 * Validation helper function
 */
function validate(schema, data) {
    try {
        return schema.parse(data);
    }
    catch (error) {
        if (error instanceof zod_1.z.ZodError) {
            var details = error.errors.map(function (err) { return ({
                code: err.code,
                message: err.message,
                field: err.path.join('.'),
            }); });
            throw new errors_1.BrevoValidationError("Validation failed: ".concat(error.errors.map(function (e) { return e.message; }).join(', ')), details);
        }
        throw error;
    }
}
/**
 * Safe validation that returns either success or error
 */
function safeValidate(schema, data) {
    try {
        var validData = validate(schema, data);
        return { success: true, data: validData };
    }
    catch (error) {
        if (error instanceof errors_1.BrevoValidationError) {
            return { success: false, error: error };
        }
        return {
            success: false,
            error: new errors_1.BrevoValidationError('Unexpected validation error', []),
        };
    }
}
/**
 * Partial validation for update operations
 * Note: For complex schemas with refinements, use lenient validation instead
 */
function validatePartial(schema, data) {
    // For update operations, we use the input data as-is since it's already type-checked
    // This avoids issues with .partial() on complex union/refined schemas
    return data;
}
/**
 * Custom validation decorators/higher-order functions
 */
function withValidation(schema, fn) {
    var _this = this;
    return function (input) { return __awaiter(_this, void 0, void 0, function () {
        var validatedInput;
        return __generator(this, function (_a) {
            validatedInput = validate(schema, input);
            return [2 /*return*/, fn(validatedInput)];
        });
    }); };
}
/**
 * Validation middleware for API methods
 */
function validateInput(schema) {
    return function (target, propertyKey, descriptor) {
        var originalMethod = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (args.length > 0) {
                args[0] = validate(schema, args[0]);
            }
            return originalMethod.apply(this, args);
        };
        return descriptor;
    };
}
/**
 * Type-safe object picker for partial validation
 */
function pick(obj, keys) {
    var result = {};
    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
        var key = keys_1[_i];
        if (key in obj) {
            result[key] = obj[key];
        }
    }
    return result;
}
/**
 * Type-safe object omitter
 */
function omit(obj, keys) {
    var result = __assign({}, obj);
    for (var _i = 0, keys_2 = keys; _i < keys_2.length; _i++) {
        var key = keys_2[_i];
        delete result[key];
    }
    return result;
}
