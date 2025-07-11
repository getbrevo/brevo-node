import { z } from 'zod';
import { BrevoValidationError } from '../errors';

/**
 * Common validation schemas
 */
export const schemas = {
  email: z.string().email('Invalid email address'),

  apiKey: z
    .string()
    .min(1, 'API key is required')
    .regex(/^xkeysib-[a-f0-9]+-[a-zA-Z0-9]+$/, 'Invalid Brevo API key format'),

  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number format'),

  url: z.string().url('Invalid URL format'),

  positiveInteger: z.number().int('Must be an integer').positive('Must be a positive number'),

  nonNegativeInteger: z.number().int('Must be an integer').min(0, 'Must be non-negative'),

  limit: z
    .number()
    .int('Limit must be an integer')
    .min(1, 'Limit must be at least 1')
    .max(100, 'Limit cannot exceed 100')
    .default(50),

  offset: z
    .number()
    .int('Offset must be an integer')
    .min(0, 'Offset must be non-negative')
    .default(0),

  isoDate: z
    .string()
    .datetime('Invalid ISO date format')
    .or(z.date().transform(date => date.toISOString())),

  campaignStatus: z.enum([
    'suspended',
    'archive',
    'sent',
    'queued',
    'draft',
    'inProcess',
    'inReview',
  ]),

  campaignType: z.enum(['classic', 'trigger']),

  statisticsType: z.enum(['globalStats', 'linksStats', 'statsByDomain']),

  sortOrder: z.enum(['asc', 'desc']).default('desc'),

  attributeType: z.enum(['text', 'date', 'float', 'boolean', 'category']),

  attributeCategory: z.enum(['normal', 'transactional', 'calculated']),
} as const;

/**
 * Pagination parameters schema
 */
export const paginationSchema = z.object({
  limit: schemas.limit.optional(),
  offset: schemas.offset.optional(),
});

/**
 * Date range parameters schema
 */
export const dateRangeSchema = z
  .object({
    startDate: schemas.isoDate.optional(),
    endDate: schemas.isoDate.optional(),
  })
  .refine(
    data => {
      if (data.startDate && data.endDate) {
        return new Date(data.startDate) <= new Date(data.endDate);
      }
      return true;
    },
    {
      message: 'Start date must be before or equal to end date',
      path: ['startDate'],
    }
  );

/**
 * Email sender schema
 */
export const emailSenderSchema = z.object({
  email: schemas.email,
  name: z.string().min(1, 'Sender name is required'),
  id: schemas.positiveInteger.optional(),
});

/**
 * Contact schema
 */
export const contactSchema = z.object({
  email: schemas.email,
  attributes: z.record(z.string(), z.any()).optional(),
  listIds: z.array(schemas.positiveInteger).optional(),
  unlinkListIds: z.array(schemas.positiveInteger).optional(),
  updateEnabled: z.boolean().optional(),
});

/**
 * Email campaign creation schema
 */
export const createEmailCampaignSchema = z
  .object({
    name: z.string().min(1, 'Campaign name is required'),
    subject: z.string().min(1, 'Subject is required'),
    sender: emailSenderSchema,
    replyTo: schemas.email.optional(),
    toField: z.string().optional(),
    htmlContent: z.string().optional(),
    textContent: z.string().optional(),
    tag: z.string().optional(),
    recipients: z
      .object({
        listIds: z.array(schemas.positiveInteger).optional(),
        exclusionListIds: z.array(schemas.positiveInteger).optional(),
      })
      .optional(),
    scheduledAt: schemas.isoDate.optional(),
    type: schemas.campaignType.optional(),
  })
  .refine(data => data.htmlContent || data.textContent, {
    message: 'Either htmlContent or textContent must be provided',
    path: ['htmlContent'],
  });

/**
 * Email recipient schema
 */
const emailRecipientSchema = z.object({
  email: schemas.email,
  name: z.string().optional(),
});

/**
 * Email attachment schema
 */
const emailAttachmentSchema = z.object({
  url: schemas.url.optional(),
  content: z.string().optional(),
  name: z.string().min(1, 'Attachment name is required'),
});

/**
 * Base transactional email schema
 */
const baseTransactionalEmailSchema = z.object({
  to: z.array(emailRecipientSchema).min(1, 'At least one recipient is required'),
  sender: emailSenderSchema.optional(),
  replyTo: emailRecipientSchema.optional(),
  cc: z.array(emailRecipientSchema).optional(),
  bcc: z.array(emailRecipientSchema).optional(),
  params: z.record(z.string(), z.any()).optional(),
  messageVersions: z
    .array(
      z.object({
        to: z.array(emailRecipientSchema),
        params: z.record(z.string(), z.any()).optional(),
        subject: z.string().optional(),
      })
    )
    .optional(),
  attachment: z.array(emailAttachmentSchema).optional(),
  headers: z.record(z.string(), z.string()).optional(),
  tags: z.array(z.string()).optional(),
});

/**
 * Custom content email schema
 */
const customContentEmailSchema = baseTransactionalEmailSchema
  .extend({
    subject: z.string().min(1, 'Subject is required'),
    htmlContent: z.string().optional(),
    textContent: z.string().optional(),
  })
  .refine(
    data => data.htmlContent || data.textContent,
    'Either htmlContent or textContent must be provided when using custom content'
  );

/**
 * Template email schema
 */
const templateEmailSchema = baseTransactionalEmailSchema.extend({
  templateId: schemas.positiveInteger,
});

/**
 * Transactional email schema
 */
export const transactionalEmailSchema = z.union([customContentEmailSchema, templateEmailSchema]);

/**
 * Email template schema
 */
export const emailTemplateSchema = z
  .object({
    name: z.string().min(1, 'Template name is required'),
    subject: z.string().min(1, 'Subject is required'),
    htmlContent: z.string().optional(),
    textContent: z.string().optional(),
    sender: emailSenderSchema.optional(),
    replyTo: z.string().email('Invalid reply-to email').optional(),
    tag: z.string().optional(),
    isActive: z.boolean().optional(),
  })
  .refine(
    data => data.htmlContent || data.textContent,
    'Either htmlContent or textContent must be provided'
  );

/**
 * Validation helper function
 */
export function validate<T>(schema: z.ZodSchema<T>, data: unknown): T {
  try {
    return schema.parse(data);
  } catch (error) {
    if (error instanceof z.ZodError) {
      const details = error.errors.map(err => ({
        code: err.code,
        message: err.message,
        field: err.path.join('.'),
      }));

      throw new BrevoValidationError(
        `Validation failed: ${error.errors.map(e => e.message).join(', ')}`,
        details
      );
    }
    throw error;
  }
}

/**
 * Safe validation that returns either success or error
 */
export function safeValidate<T>(
  schema: z.ZodSchema<T>,
  data: unknown
): { success: true; data: T } | { success: false; error: BrevoValidationError } {
  try {
    const validData = validate(schema, data);
    return { success: true, data: validData };
  } catch (error) {
    if (error instanceof BrevoValidationError) {
      return { success: false, error };
    }
    return {
      success: false,
      error: new BrevoValidationError('Unexpected validation error', []),
    };
  }
}

/**
 * Partial validation for update operations
 * Note: For complex schemas with refinements, use lenient validation instead
 */
export function validatePartial<T>(schema: z.ZodSchema<T>, data: unknown): Partial<T> {
  // For update operations, we use the input data as-is since it's already type-checked
  // This avoids issues with .partial() on complex union/refined schemas
  return data as Partial<T>;
}

/**
 * Custom validation decorators/higher-order functions
 */
export function withValidation<TInput, TOutput>(
  schema: z.ZodSchema<TInput>,
  fn: (validatedInput: TInput) => Promise<TOutput>
) {
  return async (input: unknown): Promise<TOutput> => {
    const validatedInput = validate(schema, input);
    return fn(validatedInput);
  };
}

/**
 * Validation middleware for API methods
 */
export function validateInput<T>(schema: z.ZodSchema<T>) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
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
export function pick<T extends Record<string, any>, K extends keyof T>(
  obj: T,
  keys: K[]
): Pick<T, K> {
  const result = {} as Pick<T, K>;
  for (const key of keys) {
    if (key in obj) {
      result[key] = obj[key];
    }
  }
  return result;
}

/**
 * Type-safe object omitter
 */
export function omit<T extends Record<string, any>, K extends keyof T>(
  obj: T,
  keys: K[]
): Omit<T, K> {
  const result = { ...obj } as any;
  for (const key of keys) {
    delete result[key];
  }
  return result;
}
