import type { EmailSender } from './common';

/**
 * Email recipient information
 */
export interface EmailRecipient {
  /** Recipient email address */
  email: string;
  /** Recipient name */
  name?: string;
}

/**
 * Email attachment
 */
export interface EmailAttachment {
  /** Attachment URL (if hosted) */
  url?: string;
  /** Base64 encoded content */
  content?: string;
  /** Attachment filename */
  name: string;
}

/**
 * Base parameters for sending transactional email
 */
interface BaseTransactionalEmailParams {
  /** Array of recipients */
  to: EmailRecipient[];
  /** Sender information */
  sender?: EmailSender;
  /** Reply-to information */
  replyTo?: EmailRecipient;
  /** CC recipients */
  cc?: EmailRecipient[];
  /** BCC recipients */
  bcc?: EmailRecipient[];
  /** Template parameters */
  params?: Record<string, any>;
  /** Email attachments */
  attachment?: EmailAttachment[];
  /** Custom headers */
  headers?: Record<string, string>;
  /** Email tags for tracking */
  tags?: string[];
  /** Message versions for A/B testing */
  messageVersions?: Array<{
    to: EmailRecipient[];
    params?: Record<string, any>;
    subject?: string;
  }>;
}

/**
 * Parameters for sending email with custom content
 */
interface CustomContentEmailParams extends BaseTransactionalEmailParams {
  /** Email subject */
  subject: string;
  /** HTML content */
  htmlContent?: string;
  /** Plain text content */
  textContent?: string;
}

/**
 * Parameters for sending email using template
 */
interface TemplateEmailParams extends BaseTransactionalEmailParams {
  /** Template ID to use */
  templateId: number;
}

/**
 * Parameters for sending transactional email
 * Can use either custom content (subject + content) or template
 */
export type SendTransactionalEmailParams = CustomContentEmailParams | TemplateEmailParams;

/**
 * Response from sending transactional email
 */
export interface SendTransactionalEmailResponse {
  /** Message ID */
  messageId: string;
}

/**
 * Email template information
 */
export interface EmailTemplate {
  /** Template ID */
  id: number;
  /** Template name */
  name: string;
  /** Template subject */
  subject: string;
  /** Template HTML content */
  htmlContent?: string;
  /** Template text content */
  textContent?: string;
  /** Whether template is active */
  isActive: boolean;
  /** Sender information */
  sender?: EmailSender;
  /** Reply-to email */
  replyTo?: string;
  /** Template tag */
  tag?: string;
  /** Creation date */
  createdAt: string;
  /** Modification date */
  modifiedAt: string;
}

/**
 * Parameters for creating email template
 */
export interface CreateEmailTemplateParams {
  /** Template name */
  name: string;
  /** Template subject */
  subject: string;
  /** HTML content */
  htmlContent?: string;
  /** Text content */
  textContent?: string;
  /** Sender information */
  sender?: EmailSender;
  /** Reply-to email */
  replyTo?: string;
  /** Template tag */
  tag?: string;
  /** Whether template should be active */
  isActive?: boolean;
}

/**
 * Email statistics aggregated report parameters
 */
export interface EmailStatsParams {
  /** Start date (ISO string) */
  startDate?: string;
  /** End date (ISO string) */
  endDate?: string;
  /** Number of days to retrieve */
  days?: number;
  /** Tag filter */
  tag?: string;
}

/**
 * Email statistics data
 */
export interface EmailStats {
  /** Date of the statistics */
  date: string;
  /** Number of requests */
  requests: number;
  /** Number of delivered emails */
  delivered: number;
  /** Number of hard bounces */
  hardBounces: number;
  /** Number of soft bounces */
  softBounces: number;
  /** Number of clicks */
  clicks: number;
  /** Number of unique clicks */
  uniqueClicks: number;
  /** Number of opens */
  opens: number;
  /** Number of unique opens */
  uniqueOpens: number;
  /** Number of spam reports */
  spamReports: number;
  /** Number of blocked emails */
  blocked: number;
  /** Number of invalid emails */
  invalid: number;
  /** Number of unsubscribed */
  unsubscribed: number;
}

/**
 * Email event types
 */
export type EmailEventType =
  | 'bounces'
  | 'hardBounces'
  | 'softBounces'
  | 'delivered'
  | 'spam'
  | 'requests'
  | 'opened'
  | 'clicks'
  | 'invalid'
  | 'deferred'
  | 'blocked'
  | 'unsubscribed';

/**
 * Email event information
 */
export interface EmailEvent {
  /** Event type */
  event: EmailEventType;
  /** Email address */
  email: string;
  /** Event timestamp */
  date: string;
  /** Message ID */
  messageId?: string;
  /** Email subject */
  subject?: string;
  /** Template ID used */
  templateId?: number;
  /** Event tags */
  tags?: string[];
}
