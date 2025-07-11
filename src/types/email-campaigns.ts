import type {
  EmailSender,
  CampaignStatus,
  CampaignType,
  StatisticsType,
  PaginationParams,
  SortParams,
  DateRangeParams,
  PaginatedResponse,
} from "./common";

/**
 * Email campaign recipient configuration
 */
export interface CampaignRecipients {
  /** List IDs to include in the campaign */
  lists?: number[];
  /** List IDs to exclude from the campaign */
  exclusionLists?: number[];
}

/**
 * Campaign statistics - global stats
 */
export interface CampaignGlobalStats {
  /** Number of unique clicks */
  uniqueClicks: number;
  /** Number of unique clickers */
  clickers: number;
  /** Number of complaints */
  complaints: number;
  /** Number of delivered emails */
  delivered: number;
  /** Number of sent emails */
  sent: number;
  /** Number of soft bounces */
  softBounces: number;
  /** Number of hard bounces */
  hardBounces: number;
  /** Number of unique views */
  uniqueViews: number;
  /** Number of trackable views */
  trackableViews: number;
  /** Trackable views rate */
  trackableViewsRate: number;
  /** Number of estimated views */
  estimatedViews: number;
  /** Number of unsubscriptions */
  unsubscriptions: number;
  /** Number of views */
  viewed: number;
  /** Opens rate */
  opensRate: number;
  /** Apple MPP opens */
  appleMppOpens: number;
}

/**
 * Campaign statistics by list
 */
export interface CampaignListStats extends CampaignGlobalStats {
  /** List ID */
  listId: number;
  /** Number of deferred emails */
  deferred: number;
}

/**
 * Complete campaign statistics
 */
export interface CampaignStatistics {
  /** Global campaign statistics */
  globalStats?: CampaignGlobalStats;
  /** Statistics by list */
  campaignStats?: CampaignListStats[];
  /** Number of mirror clicks */
  mirrorClick?: number;
  /** Remaining credits */
  remaining?: number;
  /** Link click statistics */
  linksStats?: Record<string, number>;
  /** Statistics by domain */
  statsByDomain?: Record<string, CampaignGlobalStats>;
  /** Statistics by browser */
  statsByBrowser?: Record<string, CampaignGlobalStats>;
}

/**
 * Email campaign data
 */
export interface EmailCampaign {
  /** Campaign ID */
  id: number;
  /** Campaign name */
  name: string;
  /** Email subject */
  subject: string;
  /** Preview text */
  previewText?: string;
  /** Campaign type */
  type: CampaignType;
  /** Campaign status */
  status: CampaignStatus;
  /** Scheduled date (ISO string) */
  scheduledAt?: string;
  /** Whether test was sent */
  testSent?: boolean;
  /** Email header content */
  header?: string;
  /** Email footer content */
  footer?: string;
  /** Sender information */
  sender: EmailSender;
  /** Reply-to email address */
  replyTo?: string;
  /** To field content */
  toField?: string;
  /** HTML content of the email */
  htmlContent?: string;
  /** Text content of the email */
  textContent?: string;
  /** Share link for the campaign */
  shareLink?: string;
  /** Campaign tag */
  tag?: string;
  /** Creation date (ISO string) */
  createdAt: string;
  /** Last modification date (ISO string) */
  modifiedAt: string;
  /** Whether inline image activation is enabled */
  inlineImageActivation?: boolean;
  /** Whether mirror active is enabled */
  mirrorActive?: boolean;
  /** Whether the campaign is recurring */
  recurring?: boolean;
  /** Recipient configuration */
  recipients?: CampaignRecipients;
  /** Campaign statistics */
  statistics?: CampaignStatistics;
}

/**
 * Parameters for listing email campaigns
 */
export interface GetEmailCampaignsParams
  extends PaginationParams,
    SortParams,
    DateRangeParams {
  /** Filter by campaign type */
  type?: CampaignType;
  /** Filter by campaign status */
  status?: CampaignStatus;
  /** Filter by statistics type */
  statistics?: StatisticsType;
  /** Exclude HTML content from response */
  excludeHtmlContent?: boolean;
}

/**
 * Response for listing email campaigns
 */
export interface GetEmailCampaignsResponse
  extends PaginatedResponse<EmailCampaign> {
  /** Array of email campaigns */
  campaigns: EmailCampaign[];
}

/**
 * Parameters for creating an email campaign
 */
export interface CreateEmailCampaignParams {
  /** Campaign name */
  name: string;
  /** Email subject */
  subject: string;
  /** Sender information */
  sender: EmailSender;
  /** Reply-to email address */
  replyTo?: string;
  /** To field content */
  toField?: string;
  /** HTML content of the email */
  htmlContent?: string;
  /** Text content of the email */
  textContent?: string;
  /** Campaign tag */
  tag?: string;
  /** Recipient configuration */
  recipients?: CampaignRecipients;
  /** Scheduled date (ISO string) */
  scheduledAt?: string;
  /** Campaign type */
  type?: CampaignType;
}

/**
 * Response for creating an email campaign
 */
export interface CreateEmailCampaignResponse {
  /** Created campaign ID */
  id: number;
}

/**
 * Parameters for updating an email campaign
 */
export interface UpdateEmailCampaignParams
  extends Partial<CreateEmailCampaignParams> {}

/**
 * Parameters for sending a test email
 */
export interface SendTestEmailParams {
  /** Email addresses to send test to */
  emailTo: string[];
}
