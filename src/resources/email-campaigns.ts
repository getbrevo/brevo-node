import type { HttpClient } from '../http/client';
import type {
  EmailCampaign,
  GetEmailCampaignsParams,
  GetEmailCampaignsResponse,
  CreateEmailCampaignParams,
  CreateEmailCampaignResponse,
  UpdateEmailCampaignParams,
  SendTestEmailParams,
  CampaignStatistics,
} from '../types/email-campaigns';
import { validate } from '../utils/validation';
import { createEmailCampaignSchema, paginationSchema, dateRangeSchema } from '../utils/validation';
import { createPaginationIterator, type PaginationIterator } from '../utils/pagination';

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
export class EmailCampaignsResource {
  constructor(private readonly client: HttpClient) {}

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
  async list(params: GetEmailCampaignsParams = {}): Promise<GetEmailCampaignsResponse> {
    // Validate pagination parameters
    const validatedPagination = validate(paginationSchema, {
      limit: params.limit,
      offset: params.offset,
    });

    // Validate date range if provided
    if (params.startDate || params.endDate) {
      validate(dateRangeSchema, {
        startDate: params.startDate,
        endDate: params.endDate,
      });
    }

    const response = await this.client.request<GetEmailCampaignsResponse>({
      method: 'GET',
      url: '/emailCampaigns',
      params: {
        ...validatedPagination,
        type: params.type,
        status: params.status,
        statistics: params.statistics,
        startDate: params.startDate,
        endDate: params.endDate,
        sort: params.sort ?? 'desc',
        excludeHtmlContent: params.excludeHtmlContent,
      },
    });

    return response.data;
  }

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
  async get(
    campaignId: number,
    statistics?: 'globalStats' | 'linksStats' | 'statsByDomain'
  ): Promise<EmailCampaign> {
    const response = await this.client.request<EmailCampaign>({
      method: 'GET',
      url: `/emailCampaigns/${campaignId}`,
      ...(statistics && { params: { statistics } }),
    });

    return response.data;
  }

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
  async create(params: CreateEmailCampaignParams): Promise<CreateEmailCampaignResponse> {
    const validatedParams = validate(createEmailCampaignSchema, params);

    const response = await this.client.request<CreateEmailCampaignResponse>({
      method: 'POST',
      url: '/emailCampaigns',
      data: validatedParams,
    });

    return response.data;
  }

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
  async update(campaignId: number, params: UpdateEmailCampaignParams): Promise<void> {
    // For updates, we use a more lenient validation since fields are optional
    const validatedParams = params;

    await this.client.request({
      method: 'PUT',
      url: `/emailCampaigns/${campaignId}`,
      data: validatedParams,
    });
  }

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
  async delete(campaignId: number): Promise<void> {
    await this.client.request({
      method: 'DELETE',
      url: `/emailCampaigns/${campaignId}`,
    });
  }

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
  async sendNow(campaignId: number): Promise<void> {
    await this.client.request({
      method: 'POST',
      url: `/emailCampaigns/${campaignId}/sendNow`,
    });
  }

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
  async sendTest(campaignId: number, params: SendTestEmailParams): Promise<void> {
    await this.client.request({
      method: 'POST',
      url: `/emailCampaigns/${campaignId}/sendTest`,
      data: params,
    });
  }

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
  async updateStatus(campaignId: number, status: 'suspended' | 'archive'): Promise<void> {
    await this.client.request({
      method: 'PUT',
      url: `/emailCampaigns/${campaignId}/status`,
      data: { status },
    });
  }

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
  async getStatistics(campaignId: number): Promise<CampaignStatistics> {
    const campaign = await this.get(campaignId, 'globalStats');
    return campaign.statistics || {};
  }

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
  async getSharedUrl(campaignId: number): Promise<{ sharedUrl: string }> {
    const response = await this.client.request<{ sharedUrl: string }>({
      method: 'GET',
      url: `/emailCampaigns/${campaignId}/sharedUrl`,
    });

    return response.data;
  }

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
  iterate(
    params: Omit<GetEmailCampaignsParams, 'limit' | 'offset'> = {},
    pageSize = 50
  ): PaginationIterator<EmailCampaign> {
    return createPaginationIterator(
      paginationParams => this.list({ ...params, ...paginationParams }),
      pageSize
    );
  }
}
