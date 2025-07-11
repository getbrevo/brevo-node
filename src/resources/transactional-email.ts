import type { HttpClient } from '../http/client';
import type {
  SendTransactionalEmailParams,
  SendTransactionalEmailResponse,
  EmailTemplate,
  CreateEmailTemplateParams,
  EmailStats,
  EmailStatsParams,
  EmailEvent,
  EmailEventType,
} from '../types/transactional-email';
import type { PaginationParams, PaginatedResponse } from '../types/common';
import { validate } from '../utils/validation';
import {
  transactionalEmailSchema,
  paginationSchema,
  emailTemplateSchema,
} from '../utils/validation';
import { createPaginationIterator, type PaginationIterator } from '../utils/pagination';

/**
 * Response for listing email templates
 */
interface GetEmailTemplatesResponse extends PaginatedResponse<EmailTemplate> {
  templates: EmailTemplate[];
}

/**
 * Parameters for listing email templates
 */
interface GetEmailTemplatesParams extends PaginationParams {
  /** Filter by template name */
  templateName?: string;
  /** Filter by active status */
  isActive?: boolean;
}

/**
 * Parameters for getting email events
 */
interface GetEmailEventsParams extends PaginationParams {
  /** Start date (ISO string) */
  startDate?: string;
  /** End date (ISO string) */
  endDate?: string;
  /** Filter by event type */
  event?: EmailEventType;
  /** Filter by email address */
  email?: string;
  /** Filter by template ID */
  templateId?: number;
  /** Filter by message ID */
  messageId?: string;
}

/**
 * Response for listing email events
 */
interface GetEmailEventsResponse extends PaginatedResponse<EmailEvent> {
  events: EmailEvent[];
}

/**
 * Transactional Email resource for sending individual emails and managing templates
 */
export class TransactionalEmailResource {
  constructor(private readonly client: HttpClient) {}

  /**
   * Send a transactional email
   */
  async send(params: SendTransactionalEmailParams): Promise<SendTransactionalEmailResponse> {
    const validatedParams = validate(transactionalEmailSchema, params);

    const response = await this.client.request<SendTransactionalEmailResponse>({
      method: 'POST',
      url: '/smtp/email',
      data: validatedParams,
    });

    return response.data;
  }

  /**
   * List email templates
   */
  async listTemplates(params: GetEmailTemplatesParams = {}): Promise<GetEmailTemplatesResponse> {
    const validatedPagination = validate(paginationSchema, {
      limit: params.limit,
      offset: params.offset,
    });

    const response = await this.client.request<GetEmailTemplatesResponse>({
      method: 'GET',
      url: '/smtp/templates',
      params: {
        ...validatedPagination,
        templateName: params.templateName,
        isActive: params.isActive,
      },
    });

    return response.data;
  }

  /**
   * Get a specific email template by ID
   */
  async getTemplate(templateId: number): Promise<EmailTemplate> {
    const response = await this.client.request<EmailTemplate>({
      method: 'GET',
      url: `/smtp/templates/${templateId}`,
    });

    return response.data;
  }

  /**
   * Create a new email template
   */
  async createTemplate(params: CreateEmailTemplateParams): Promise<{ id: number }> {
    const validatedParams = validate(emailTemplateSchema, params);

    const response = await this.client.request<{ id: number }>({
      method: 'POST',
      url: '/smtp/templates',
      data: validatedParams,
    });

    return response.data;
  }

  /**
   * Update an existing email template
   */
  async updateTemplate(
    templateId: number,
    params: Partial<CreateEmailTemplateParams>
  ): Promise<void> {
    // For updates, we use more lenient validation since fields are optional
    const validatedParams = params;

    await this.client.request({
      method: 'PUT',
      url: `/smtp/templates/${templateId}`,
      data: validatedParams,
    });
  }

  /**
   * Delete an email template
   */
  async deleteTemplate(templateId: number): Promise<void> {
    await this.client.request({
      method: 'DELETE',
      url: `/smtp/templates/${templateId}`,
    });
  }

  /**
   * Get email statistics
   */
  async getStatistics(params: EmailStatsParams = {}): Promise<EmailStats[]> {
    const response = await this.client.request<EmailStats[]>({
      method: 'GET',
      url: '/smtp/statistics',
      params: {
        startDate: params.startDate,
        endDate: params.endDate,
        days: params.days,
        tag: params.tag,
      },
    });

    return response.data;
  }

  /**
   * Create a pagination iterator for email templates
   */
  iterateTemplates(
    params: Omit<GetEmailTemplatesParams, 'limit' | 'offset'> = {},
    pageSize = 50
  ): PaginationIterator<EmailTemplate> {
    return createPaginationIterator(
      paginationParams => this.listTemplates({ ...params, ...paginationParams }),
      pageSize
    );
  }
}
