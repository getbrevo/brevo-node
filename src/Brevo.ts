/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export type GetAccount = GetExtendedClient & {
  /** Information about your plans and credits */
  plan: {
    /**
     * Displays the plan type of the user
     * @example "subscription"
     */
    type: "payAsYouGo" | "free" | "subscription" | "sms" | "reseller";
    /**
     * This is the type of the credit, "Send Limit" is one of the possible types of credit of a user. "Send Limit" implies the total number of emails you can send to the subscribers in your account.
     * @example "sendLimit"
     */
    creditsType: "sendLimit";
    /**
     * Remaining credits of the user
     * @format float
     * @example 8755
     */
    credits: number;
    /**
     * Date of the period from which the plan will start (only available for "subscription" and "reseller" plan type)
     * @format date
     * @example "2016-12-31"
     */
    startDate?: string;
    /**
     * Date of the period from which the plan will end (only available for "subscription" and "reseller" plan type)
     * @format date
     * @example "2017-01-31"
     */
    endDate?: string;
    /**
     * Only in case of reseller account. It implies the total number of child accounts you can add to your account.
     * @example 10
     */
    userLimit?: number;
  }[];
  /** Information about your transactional email account */
  relay: {
    /**
     * Status of your transactional email Account (true=Enabled, false=Disabled)
     * @example true
     */
    enabled: boolean;
    /** Data regarding the transactional email account */
    data: {
      /**
       * Email to use as login on transactional platform
       * @format email
       * @example "john.smith@example.com"
       */
      userName: string;
      /**
       * URL of the SMTP Relay
       * @example "relay.domain.com"
       */
      relay: string;
      /**
       * Port used for SMTP Relay
       * @example 125
       */
      port: number;
    };
  };
  marketingAutomation?: {
    /**
     * Marketing Automation Tracker ID
     * @example "iso05aopqych87ysy0jymf"
     */
    key?: string;
    /**
     * Status of Marketing Automation Plateform activation for your account (true=enabled, false=disabled)
     * @example false
     */
    enabled: boolean;
  };
};

export interface GetChildrenList {
  /** Your children's account information */
  children?: (GetChildInfo & {
    /**
     * ID of the child
     * @format int64
     * @example 187588
     */
    id?: number;
  })[];
  /**
   * Number of child accounts
   * @format int64
   * @example 24
   */
  count: number;
}

export type GetChildInfo = GetClient & {
  /** Credits available for your child */
  credits?: {
    /**
     * Email credits available for your child
     * @format int64
     * @example 98555
     */
    emailCredits?: number;
    /**
     * SMS credits available for your child
     * @format int64
     * @example 87556
     */
    smsCredits?: number;
  };
  /** Statistics about your child account activity */
  statistics?: {
    /**
     * Overall emails sent for the previous month
     * @format int64
     * @example 7654
     */
    previousMonthTotalSent?: number;
    /**
     * Overall emails sent for current month
     * @format int64
     * @example 4566
     */
    currentMonthTotalSent?: number;
    /**
     * Overall emails sent for since the account exists
     * @format int64
     * @example 987554
     */
    totalSent?: number;
  };
  /**
   * The encrypted password of child account
   * @format password
   * @example "abC01De2fGHI3jkL"
   */
  password: string;
  /** IP(s) associated to a child account user */
  ips?: string[];
  /** API Keys associated to child account */
  apiKeys?: {
    v2: {
      /**
       * Name of the key for version 2
       * @example "N˚2"
       */
      name: string;
      /**
       * API Key for version 2
       * @example "nOpxxxxxy7z"
       */
      key: string;
    }[];
    v3?: {
      /**
       * Name of the key for version 3
       * @example "N˚3"
       */
      name: string;
      /**
       * API Key for version 3
       * @example "xkeysib-21881axxxxxcc92e04-mIrexxxx7z"
       */
      key: string;
    }[];
  };
};

export interface GetChildAccountCreationStatus {
  /**
   * Status of child account creation whether it is successfully created (exists) or not.
   * @example true
   */
  childAccountCreated: boolean;
}

export type GetChildDomains = GetChildDomain[];

export interface GetSsoToken {
  /**
   * Session token. It will remain valid for a short period of time only.
   * @example "ede520dxxxxxxxxxxxx76d631fba2"
   */
  token: string;
}

export interface GetChildDomain {
  /**
   * Sender domain
   * @example "mycustomdomain.com"
   */
  domain: string;
  /**
   * indicates whether a domain is verified or not
   * @example true
   */
  active: boolean;
}

export interface GetClient {
  /**
   * Login Email
   * @format email
   * @example "john.smith@example.com"
   */
  email: string;
  /**
   * First Name
   * @example "John"
   */
  firstName: string;
  /**
   * Last Name
   * @example "Smith"
   */
  lastName: string;
  /**
   * Name of the company
   * @example "MyCompany"
   */
  companyName: string;
}

export type GetExtendedClient = GetClient & {
  /** Address informations */
  address: {
    /**
     * Street information
     * @example "47 Harbour Street"
     */
    street: string;
    /**
     * City information
     * @example "New-York"
     */
    city: string;
    /**
     * Zip Code information
     * @example "9867"
     */
    zipCode: string;
    /**
     * Country information
     * @example "United States of America"
     */
    country: string;
  };
};

export interface GetSendersList {
  /** List of the senders available in your account */
  senders?: {
    /**
     * Id of the sender
     * @format int64
     * @example 0
     */
    id: number;
    /**
     * From Name associated to the sender
     * @example "Marketing"
     */
    name: string;
    /**
     * From Email associated to the sender
     * @example "marketing@mycompany.com"
     */
    email: string;
    /**
     * Status of sender (true=activated, false=deactivated)
     * @example false
     */
    active: boolean;
    /** List of dedicated IP(s) available in the account. This data is displayed only for dedicated IPs */
    ips?: {
      /**
       * Dedicated IP available in your account
       * @example "123.98.689.7"
       */
      ip: string;
      /**
       * Domain of the IP
       * @example "mycompany.com"
       */
      domain: string;
      /**
       * Weight of the IP for this sender
       * @format int64
       * @example 50
       */
      weight: number;
    }[];
  }[];
}

export interface CreateChild {
  /**
   * Email address to create the child account
   * @format email
   * @example "josh.cruise@example.com"
   */
  email: string;
  /**
   * First name to use to create the child account
   * @example "Josh"
   */
  firstName: string;
  /**
   * Last name to use to create the child account
   * @example "Cruise"
   */
  lastName: string;
  /**
   * Company name to use to create the child account
   * @example "Your Company"
   */
  companyName: string;
  /**
   * Password for the child account to login
   * @format password
   * @example "Pa55w0rd65"
   */
  password: string;
  /**
   * Language of the child account
   * @example "en"
   */
  language?: "fr" | "es" | "pt" | "it" | "de" | "en";
}

export interface CreateSender {
  /**
   * From Name to use for the sender
   * @example "Newsletter"
   */
  name: string;
  /**
   * From email to use for the sender. A verification email will be sent to this address.
   * @format email
   * @example "newsletter@mycompany.com"
   */
  email: string;
  /** Mandatory in case of dedicated IP, IPs to associate to the sender */
  ips?: {
    /**
     * Dedicated IP available in your account
     * @example "123.98.689.7"
     */
    ip: string;
    /**
     * Domain of the IP
     * @example "mycompany.com"
     */
    domain: string;
    /**
     * Weight to apply to the IP. Sum of all IP weights must be 100. Should be passed for either ALL or NONE of the IPs. If it's not passed, the sending will be equally balanced on all IPs.
     * @format int64
     * @min 1
     * @max 100
     * @example 50
     */
    weight?: number;
  }[];
}

export interface UpdateSender {
  /**
   * From Name to update the sender
   * @example "Newsletter"
   */
  name?: string;
  /**
   * From Email to update the sender
   * @format email
   * @example "newsletter@mycompany.com"
   */
  email?: string;
  /** Only in case of dedicated IP, IPs to associate to the sender. If passed, will replace all the existing IPs. */
  ips?: {
    /**
     * Dedicated IP available in your account
     * @example "123.98.689.7"
     */
    ip: string;
    /**
     * Domain of the IP
     * @example "mycompany.com"
     */
    domain: string;
    /**
     * Weight to apply to the IP. Sum of all IP weights must be 100. Should be passed for either ALL or NONE of the IPs. If it's not passed, the sending will be equally balanced on all IPs.
     * @format int64
     * @min 1
     * @max 100
     * @example 50
     */
    weight?: number;
  }[];
}

export interface UpdateChild {
  /**
   * New Email address to update the child account
   * @format email
   * @example "josh.cruise@example.com"
   */
  email?: string;
  /**
   * New First name to use to update the child account
   * @example "Josh"
   */
  firstName?: string;
  /**
   * New Last name to use to update the child account
   * @example "Cruise"
   */
  lastName?: string;
  /**
   * New Company name to use to update the child account
   * @example "Your Company"
   */
  companyName?: string;
  /**
   * New password for the child account to login
   * @format password
   * @example "Pa55w0rd65"
   */
  password?: string;
}

export interface UpdateChildAccountStatus {
  /**
   * Status of Transactional Email Platform activation for your account (true=enabled, false=disabled)
   * @example false
   */
  transactionalEmail?: boolean;
  /**
   * Status of Transactional SMS Platform activation for your account (true=enabled, false=disabled)
   * @example false
   */
  transactionalSms?: boolean;
  /**
   * Status of Marketing Automation Platform activation for your account (true=enabled, false=disabled)
   * @example true
   */
  marketingAutomation?: boolean;
  /**
   * Status of SMS Campaign Platform activation for your account (true=enabled, false=disabled)
   * @example true
   */
  smsCampaign?: boolean;
}

export interface ErrorModel {
  /**
   * Error code displayed in case of a failure
   * @example "method_not_allowed"
   */
  code:
    | "invalid_parameter"
    | "missing_parameter"
    | "out_of_range"
    | "campaign_processing"
    | "campaign_sent"
    | "document_not_found"
    | "reseller_permission_denied"
    | "not_enough_credits"
    | "permission_denied"
    | "duplicate_parameter"
    | "duplicate_request"
    | "method_not_allowed"
    | "unauthorized"
    | "account_under_validation"
    | "not_acceptable";
  /**
   * Readable message associated to the failure
   * @example "POST Method is not allowed on this path"
   */
  message: string;
}

export interface RemainingCreditModel {
  /** Credits remaining for child account */
  child: {
    /**
     * SMS Credits remaining for child account
     * @format double
     * @example 500
     */
    sms: number;
    /**
     * Email Credits remaining for child account
     * @format double
     * @example 2000
     */
    email: number;
  };
  reseller: {
    /**
     * SMS Credits remaining for reseller account
     * @format double
     * @example 12900
     */
    sms: number;
    /**
     * Email Credits remaining for reseller account
     * @format double
     * @example 2000000
     */
    email: number;
  };
}

export interface AddCredits {
  /**
   * Required if email credits are empty. SMS credits to be added to the child account
   * @format int64
   * @example 450
   */
  sms?: number;
  /**
   * Required if sms credits are empty. Email credits to be added to the child account
   * @format int64
   * @example 1200
   */
  email?: number;
}

export interface RemoveCredits {
  /**
   * Required if email credits are empty. SMS credits to be removed from the child account
   * @format int64
   * @example 300
   */
  sms?: number;
  /**
   * Required if sms credits are empty. Email credits to be removed from the child account
   * @format int64
   * @example 500
   */
  email?: number;
}

export interface AddChildDomain {
  /**
   * Sender domain to add for a specific child account
   * @example "mychilddomain.com"
   */
  domain?: string;
}

export interface UpdateChildDomain {
  /**
   * Value for the sender domain that will replace the existing domain
   * @example "myupdateddomain.com"
   */
  domain?: string;
}

export interface GetProcesses {
  /** List of processes available on your account */
  processes?: GetProcess[];
  /**
   * Number of processes available on your account
   * @format int64
   * @example 5
   */
  count: number;
}

export interface GetProcess {
  /**
   * Id of the process
   * @format int64
   * @example 145
   */
  id: number;
  /**
   * Status of the process
   * @example "queued"
   */
  status: "queued" | "in_process" | "completed";
  /**
   * Process name
   * @example "IMPORTUSER"
   */
  name: string;
  /**
   * URL on which send export the of contacts once the process is completed
   * @example "http://requestb.in/16ua3aj1"
   */
  export_url?: string;
}

export interface GetEmailCampaigns {
  campaigns?: (GetExtendedCampaignOverview & {
    recipients: GetCampaignRecipients;
    statistics: GetExtendedCampaignStats;
    /**
     * Link to share the campaign on social medias
     * @format url
     * @example "http://dhh.sendinblue.com/fhsgccc.html?t=9865448900"
     */
    shareLink?: string;
  })[];
  /**
   * Number of Email campaigns retrieved
   * @format int64
   * @example 24
   */
  count: number;
}

export interface GetSmsCampaigns {
  campaigns?: (GetSmsCampaignOverview & {
    recipients: GetCampaignRecipients;
    statistics: GetSmsCampaignStats;
  })[];
  /**
   * Number of SMS campaigns retrieved
   * @format int64
   * @example 12
   */
  count: number;
}

export type GetSmsCampaign = GetSmsCampaignOverview & {
  recipients: GetCampaignRecipients;
  statistics: GetSmsCampaignStats;
};

export type GetEmailCampaign = GetExtendedCampaignOverview & {
  recipients: GetCampaignRecipients;
  statistics: GetExtendedCampaignStats;
};

export interface GetCampaignOverview {
  /**
   * ID of the campaign
   * @format int64
   * @example 12
   */
  id: number;
  /**
   * Name of the campaign
   * @example "EN - Sales Summer 2017"
   */
  name: string;
  /**
   * Subject of the campaign. Only available if `abTesting` flag of the campaign is `false`
   * @example "20% OFF for 2017 Summer Sales"
   */
  subject?: string;
  /**
   * Type of campaign
   * @example "classic"
   */
  type: "classic" | "trigger";
  /**
   * Status of the campaign
   * @example "sent"
   */
  status: "draft" | "sent" | "archive" | "queued" | "suspended" | "in_process";
  /**
   * UTC date-time on which campaign is scheduled (YYYY-MM-DDTHH:mm:ss.SSSZ)
   * @format date-time
   * @example "2017-06-01T12:30:00Z"
   */
  scheduledAt?: string;
  /**
   * Status of A/B Test for the campaign. abTesting = false means it is disabled, & abTesting = true means it is enabled.
   * @example true
   */
  abTesting?: boolean;
  /**
   * Subject A of the ab-test campaign. Only available if `abTesting` flag of the campaign is `true`
   * @example "Discover the New Collection!"
   */
  subjectA?: string;
  /**
   * Subject B of the ab-test campaign. Only available if `abTesting` flag of the campaign is `true`
   * @example "Want to discover the New Collection?"
   */
  subjectB?: string;
  /**
   * The size of your ab-test groups. Only available if `abTesting` flag of the campaign is `true`
   * @example 25
   */
  splitRule?: number;
  /**
   * Criteria for the winning version. Only available if `abTesting` flag of the campaign is `true`
   * @example "open"
   */
  winnerCriteria?: string;
  /**
   * The duration of the test in hours at the end of which the winning version will be sent. Only available if `abTesting` flag of the campaign is `true`
   * @example 50
   */
  winnerDelay?: number;
  /**
   * It is true if you have chosen to send your campaign at best time, otherwise it is false
   * @example true
   */
  sendAtBestTime?: boolean;
}

export type GetExtendedCampaignOverview = GetCampaignOverview & {
  /**
   * Retrieved the status of test email sending. (true=Test email has been sent  false=Test email has not been sent)
   * @example true
   */
  testSent: boolean;
  /**
   * Header of the campaign
   * @example "[DEFAULT_HEADER]"
   */
  header: string;
  /**
   * Footer of the campaign
   * @example "[DEFAULT_FOOTER]"
   */
  footer: string;
  sender: {
    /**
     * Sender name of the campaign
     * @example "Marketing"
     */
    name?: string;
    /**
     * Sender email of the campaign
     * @format email
     * @example "marketing@mycompany.com"
     */
    email?: string;
    /**
     * Sender id of the campaign
     * @format int64
     * @example 43
     */
    id?: number;
  };
  /**
   * Email defined as the "Reply to" of the campaign
   * @format email
   * @example "replyto@domain.com"
   */
  replyTo: string;
  /**
   * Customisation of the "to" field of the campaign
   * @example "{FNAME} {LNAME}"
   */
  toField: string;
  /**
   * HTML content of the campaign
   * @example "This is my HTML Content"
   */
  htmlContent: string;
  /**
   * Link to share the campaign on social medias
   * @format url
   * @example "http://dhh.sendinblue.com/fhsgccc.html?t=9865448900"
   */
  shareLink?: string;
  /**
   * Tag of the campaign
   * @example "Newsletter"
   */
  tag: string;
  /**
   * Creation UTC date-time of the campaign (YYYY-MM-DDTHH:mm:ss.SSSZ)
   * @format date-time
   * @example "2017-05-01T12:30:00Z"
   */
  createdAt: string;
  /**
   * UTC date-time of last modification of the campaign (YYYY-MM-DDTHH:mm:ss.SSSZ)
   * @format date-time
   * @example "2017-05-01T12:30:00Z"
   */
  modifiedAt: string;
  /**
   * Status of inline image. inlineImageActivation = false means image can’t be embedded, & inlineImageActivation = true means image can be embedded, in the email.
   * @example true
   */
  inlineImageActivation?: boolean;
  /**
   * Status of mirror links in campaign. mirrorActive = false means mirror links are deactivated, & mirrorActive = true means mirror links are activated, in the campaign
   * @example true
   */
  mirrorActive?: boolean;
  /**
   * FOR TRIGGER ONLY ! Type of trigger campaign.recurring = false means contact can receive the same Trigger campaign only once, & recurring = true means contact can receive the same Trigger campaign several times
   * @example true
   */
  recurring?: boolean;
  /**
   * Sent UTC date-time of the campaign (YYYY-MM-DDTHH:mm:ss.SSSZ). Only available if 'status' of the campaign is 'sent'
   * @format date-time
   * @example "2018-12-01T16:30:00Z"
   */
  sentDate?: string;
  /**
   * Total number of non-delivered campaigns for a particular campaign id.
   * @format int64
   * @example 5
   */
  returnBounce?: number;
};

export interface GetCampaignRecipients {
  lists: number[];
  exclusionLists: number[];
}

export interface GetExtendedCampaignStats {
  /** Overall statistics of the campaign */
  globalStats: GetCampaignStats;
  /** List-wise statistics of the campaign. */
  campaignStats: GetCampaignStats[];
  /**
   * Number of clicks on mirror link
   * @format int64
   * @example 120
   */
  mirrorClick: number;
  /**
   * Number of remaning emails to send
   * @format int64
   * @example 1000
   */
  remaining: number;
  /**
   * Statistics about the number of clicks for the links
   * @example {"example.abc.com":7,"example.domain.com":10}
   */
  linksStats: object;
  statsByDomain: GetStatsByDomain;
  /** Statistics about the campaign on the basis of various devices */
  statsByDevice: GetStatsByDevice;
  /** Statistics about the campaign on the basis of various browsers */
  statsByBrowser: GetStatsByBrowser;
}

export type GetStatsByDomain = Record<string, GetCampaignStats>;

export interface GetStatsByDevice {
  /** Statistics of the campaign on the basis of desktop devices */
  desktop?: Record<string, GetDeviceBrowserStats>;
  /** Statistics of the campaign on the basis of mobile devices */
  mobile?: Record<string, GetDeviceBrowserStats>;
  /** Statistics of the campaign on the basis of tablet devices */
  tablet?: Record<string, GetDeviceBrowserStats>;
  /** Statistics of the campaign on the basis of unknown devices */
  unknown?: Record<string, GetDeviceBrowserStats>;
}

export type GetStatsByBrowser = Record<string, GetDeviceBrowserStats>;

export interface AddContactToList {
  /**
   * Emails to add to a list. You can pass a maximum of 150 emails for addition in one request. If you need to add the emails in bulk, please prefer /contacts/import api.
   * @maxItems 150
   * @minItems 1
   */
  emails?: string[];
}

export interface RemoveContactFromList {
  /**
   * Required if 'all' is false. Emails to remove from a list. You can pass a maximum of 150 emails for removal in one request.
   * @maxItems 150
   * @minItems 1
   */
  emails?: string[];
  /**
   * Required if 'emails' is empty. Remove all existing contacts from a list. A process will be created in this scenario. You can fetch the process details to know about the progress
   * @example false
   */
  all?: boolean;
}

export interface GetSmsCampaignOverview {
  /**
   * ID of the SMS Campaign
   * @format int64
   * @example 2
   */
  id: number;
  /**
   * Name of the SMS Campaign
   * @example "PROMO CODE"
   */
  name: string;
  /**
   * Status of the SMS Campaign
   * @example "draft"
   */
  status: "draft" | "sent" | "archive" | "queued" | "suspended" | "inProcess";
  /**
   * Content of the SMS Campaign
   * @example "Visit our Store and get some discount !"
   */
  content: string;
  /**
   * UTC date-time on which SMS campaign is scheduled. Should be in YYYY-MM-DDTHH:mm:ss.SSSZ format
   * @format date-time
   * @example "2017-06-01T12:30:00Z"
   */
  scheduledAt: string;
  /**
   * Sender of the SMS Campaign
   * @example "MyCompany"
   */
  sender: string;
  /**
   * Creation UTC date-time of the SMS campaign (YYYY-MM-DDTHH:mm:ss.SSSZ)
   * @format date-time
   * @example "2017-06-01T12:30:00Z"
   */
  createdAt: string;
  /**
   * UTC date-time of last modification of the SMS campaign (YYYY-MM-DDTHH:mm:ss.SSSZ)
   * @format date-time
   * @example "2017-05-01T12:30:00Z"
   */
  modifiedAt: string;
}

export interface GetWhatsappCampaignOverview {
  /**
   * ID of the WhatsApp Campaign
   * @format int64
   * @example 1672035851100690
   */
  id: number;
  /**
   * Name of the WhatsApp Campaign
   * @example "Test Campaign"
   */
  campaignName: string;
  /**
   * Status of the WhatsApp Campaign
   * @example "draft"
   */
  campaignStatus: "draft" | "scheduled" | "pending" | "approved" | "running" | "suspended" | "rejected" | "sent";
  /**
   * UTC date-time on which WhatsApp campaign is scheduled. Should be in YYYY-MM-DDTHH:mm:ss.SSSZ format
   * @example "2024-04-03T18:18:49.106Z"
   */
  scheduledAt?: string;
  /**
   * Sender of the WhatsApp Campaign
   * @example 9368207029
   */
  senderNumber: string;
  stats?: WhatsappCampStats;
  template: WhatsappCampTemplate;
  /**
   * Creation UTC date-time of the WhatsApp campaign (YYYY-MM-DDTHH:mm:ss.SSSZ)
   * @example "2024-04-03T18:18:49.106Z"
   */
  createdAt: string;
  /**
   * UTC date-time of last modification of the WhatsApp campaign (YYYY-MM-DDTHH:mm:ss.SSSZ)
   * @example "2024-04-03T18:18:49.106Z"
   */
  modifiedAt: string;
}

export interface WhatsappCampStats {
  /** @example 3 */
  sent: number;
  /** @example 3 */
  delivered: number;
  /** @example 2 */
  read: number;
  /** @example 0 */
  unsubscribe: number;
  /** @example 4 */
  notSent: number;
}

export interface WhatsappCampTemplate {
  /**
   * name of the template
   * @example "wta107"
   */
  name?: string;
  /**
   * description of the template
   * @example "Marketing"
   */
  category?: string;
  /**
   * language of the template
   * @example "en_GB"
   */
  language?: string;
  /** @example false */
  contains_button?: boolean;
  /** @example true */
  display_header?: boolean;
  /**
   * type of header
   * @example "text"
   */
  header_type?: string;
  /** array of component item objects */
  components?: ComponentItems[];
  /** array of variables item object */
  header_variables?: VariablesItems[];
  /** array of variables item variables */
  body_variables?: VariablesItems[];
  /** @example "QUICK_REPLIES" */
  button_type?: string;
  /** @example true */
  hide_footer?: boolean;
}

export interface ComponentItems {
  /** @example "BODY" */
  type?: string;
  /** @example "Life is a long lesson in humility" */
  text?: string;
}

export interface VariablesItems {
  /** @example "FIRSTNAME" */
  name?: string;
  /** @example "INVALID_HEADER" */
  default?: string;
  /** @example "text" */
  datatype?: string;
}

export type BodyVariablesItems = object;

export interface GetWATemplates {
  templates: {
    /**
     * id of the template
     * @example 235
     */
    id: string;
    /**
     * Name of the WhatsApp template
     * @example "Test template"
     */
    name: string;
    /**
     * Status of the WhatsApp template
     * @example "approved"
     */
    status: string;
    /**
     * Language in which template exists
     * @example "en"
     */
    language: string;
    /**
     * category of the template
     * @example "MARKETING"
     */
    category: string;
    /**
     * Error reason in the template creation
     * @example "NONE"
     */
    errorReason?: string;
    /**
     * Creation UTC date-time of the whatsApp template (YYYY-MM-DDTHH:mm:ss.SSSZ)
     * @example "2024-04-03T18:18:49.106Z"
     */
    createdAt: string;
    /**
     * UTC date-time of last modification of the whatsApp template (YYYY-MM-DDTHH:mm:ss.SSSZ)
     * @example "2024-04-03T18:18:49.106Z"
     */
    modifiedAt: string;
  }[];
  /**
   * Number of whatsApp templates retrived
   * @format int64
   * @example 24
   */
  count: number;
}

export interface GetWhatsappCampaigns {
  campaigns?: {
    /**
     * ID of the WhatsApp Campaign
     * @format int64
     * @example 1672035851100690
     */
    id: number;
    /**
     * Name of the WhatsApp Campaign
     * @example "Test Campaign"
     */
    campaignName: string;
    /**
     * Id of the WhatsApp template
     * @example 637660278078655
     */
    templateId: string;
    /**
     * Status of the WhatsApp Campaign
     * @example "draft"
     */
    campaignStatus: "draft" | "scheduled" | "pending" | "approved" | "running" | "suspended" | "rejected" | "sent";
    /**
     * UTC date-time on which WhatsApp campaign is scheduled. Should be in YYYY-MM-DDTHH:mm:ss.SSSZ format
     * @example "2024-04-03T18:18:49.106Z"
     */
    scheduledAt: string;
    /**
     * Error reason in the campaign creation
     * @example "NONE"
     */
    errorReason?: string;
    /**
     * Count of invalidated contacts
     * @format int64
     * @example 0
     */
    invalidatedContacts?: number;
    /**
     * Read percentage of the the WhatsApp campaign created
     * @format float
     * @example 28.57
     */
    readPercentage?: number;
    stats?: WhatsappCampStats;
    /**
     * Creation UTC date-time of the WhatsApp campaign (YYYY-MM-DDTHH:mm:ss.SSSZ)
     * @example "2024-04-03T18:18:49.106Z"
     */
    createdAt: string;
    /**
     * UTC date-time of last modification of the whatsApp template (YYYY-MM-DDTHH:mm:ss.SSSZ)
     * @example "2024-04-03T18:18:49.106Z"
     */
    modifiedAt: string;
  }[];
  /**
   * Number of WhatsApp campaigns retrived
   * @format int64
   * @example 24
   */
  count?: number;
}

export interface CreateModel {
  /**
   * ID of the object created
   * @format int64
   * @example 122
   */
  id: number;
}

export interface CreateUpdateContactModel {
  /**
   * ID of the contact when a new contact is created
   * @format int64
   * @example 122
   */
  id?: number;
}

export interface CreateSenderModel {
  /**
   * ID of the Sender created
   * @format int64
   * @example 5
   */
  id: number;
  /**
   * Status of SPF configuration for the sender (true = SPF not well configured, false = SPF well configured)
   * @example true
   */
  spfError?: boolean;
  /**
   * Status of DKIM configuration for the sender (true = DKIM not well configured, false = DKIM well configured)
   * @example false
   */
  dkimError?: boolean;
}

export interface CreateSmtpEmail {
  /**
   * Message ID of the transactional email sent
   * @example "<201798300811.5787683@relay.domain.com>"
   */
  messageId: string;
}

export interface SendTemplateEmail {
  /**
   * Message ID of the template Email sent
   * @example "<201798300811.5787683@relay.domain.com>"
   */
  messageId: string;
}

export interface CreateReseller {
  /**
   * AuthKey of Reseller child created
   * @example "xkeysib-21881axxxxxcc92e04-mIrexxxx7z"
   */
  authKey: string;
  /**
   * Id of Reseller child created
   * @format int64
   * @example 1234567
   */
  id?: number;
}

export interface SendSms {
  /** @example "ab1cde2fgh3i4jklmno" */
  reference: string;
  /**
   * @format int64
   * @example 1511882900176220
   */
  messageId: number;
  /**
   * Count of SMS's to send multiple text messages
   * @format int64
   * @example 2
   */
  smsCount?: number;
  /**
   * SMS credits used per text message
   * @format float
   * @example 0.7
   */
  usedCredits?: number;
  /**
   * Remaining SMS credits of the user
   * @format float
   * @example 82.85
   */
  remainingCredits?: number;
}

export interface CreatedProcessId {
  /**
   * Id of the process created
   * @format int64
   * @example 78
   */
  processId: number;
}

export interface CreateUpdateFolder {
  /**
   * Name of the folder
   * @example "Wordpress Contacts"
   */
  name?: string;
}

export interface PostSendFailed {
  /**
   * Response code
   * @format int64
   * @example "invalid_parameter"
   */
  code: number;
  /**
   * Response message
   * @example "The email could not be sent to all recipients"
   */
  message: string;
  unexistingEmails?: string[];
  withoutListEmails?: string[];
  blackListedEmails?: string[];
}

export interface PostSendSmsTestFailed {
  /**
   * Response code
   * @format int64
   * @example "invalid_parameter"
   */
  code: number;
  /**
   * Response message
   * @example "The SMS could not be sent to all recipients"
   */
  message: string;
  unexistingSms?: string[];
  withoutListSms?: string[];
}

export interface PostContactInfo {
  contacts: {
    success?: string[];
    failure?: string[];
    /**
     * Displays the count of total number of contacts removed from list when user opts for "all" option.
     * @format int64
     * @example 27
     */
    total?: number;
    /**
     * Id of the process created to remove contacts from list when user opts for "all" option.
     * @format int64
     * @example 78
     */
    processId?: number;
  };
}

export interface GetAggregatedReport {
  /**
   * Time frame of the report
   * @example "2016-09-08|2017-04-06"
   */
  range: string;
  /**
   * Number of requests for the timeframe
   * @format int64
   * @example 263
   */
  requests: number;
  /**
   * Number of delivered emails for the timeframe
   * @format int64
   * @example 249
   */
  delivered: number;
  /**
   * Number of hardbounces for the timeframe
   * @format int64
   * @example 1
   */
  hardBounces: number;
  /**
   * Number of softbounces for the timeframe
   * @format int64
   * @example 4
   */
  softBounces: number;
  /**
   * Number of clicks for the timeframe
   * @format int64
   * @example 12
   */
  clicks: number;
  /**
   * Number of unique clicks for the timeframe
   * @format int64
   * @example 8
   */
  uniqueClicks: number;
  /**
   * Number of openings for the timeframe
   * @format int64
   * @example 47
   */
  opens: number;
  /**
   * Number of unique openings for the timeframe
   * @format int64
   * @example 37
   */
  uniqueOpens: number;
  /**
   * Number of complaint (spam report) for the timeframe
   * @format int64
   * @example 0
   */
  spamReports: number;
  /**
   * Number of blocked contact emails for the timeframe
   * @format int64
   * @example 2
   */
  blocked: number;
  /**
   * Number of invalid emails for the timeframe
   * @format int64
   * @example 0
   */
  invalid: number;
  /**
   * Number of unsubscribed emails for the timeframe
   * @format int64
   * @example 0
   */
  unsubscribed: number;
}

export interface GetTransacBlockedContacts {
  /**
   * Count of blocked or unsubscribed contact
   * @format int64
   * @example 1
   */
  count?: number;
  contacts?: {
    /**
     * Email address of the blocked or unsubscribed contact
     * @format email
     * @example "john.smith@example.com"
     */
    email: string;
    /**
     * Sender email address of the blocked or unsubscribed contact
     * @format email
     * @example "john.smith@example.com"
     */
    senderEmail: string;
    /**
     * Reason for blocking / unsubscribing
     * @example "Admin blocked"
     */
    reason: {
      /**
       * Reason code for blocking / unsubscribing (This code is safe for comparison)
       * @example "AdminBlocked"
       */
      code?:
        | "unsubscribedViaMA"
        | "unsubscribedViaEmail"
        | "adminBlocked"
        | "unsubscribedViaApi"
        | "hardBounce"
        | "contactFlaggedAsSpam";
      /**
       * Reason for blocking / unsubscribing (This string is not safe for comparison)
       * @example "Admin blocked"
       */
      message?: string;
    };
    /**
     * Date when the contact was blocked or unsubscribed on
     * @format date-time
     * @example "2017-05-01T12:30:00Z"
     */
    blockedAt: string;
  }[];
}

export interface GetReports {
  reports?: {
    /**
     * Date of the statistics
     * @format date
     * @example "2017-04-06"
     */
    date: string;
    /**
     * Number of requests for the date
     * @format int64
     * @example 65
     */
    requests: number;
    /**
     * Number of delivered emails for the date
     * @format int64
     * @example 63
     */
    delivered: number;
    /**
     * Number of hardbounces for the date
     * @format int64
     * @example 1
     */
    hardBounces: number;
    /**
     * Number of softbounces for the date
     * @format int64
     * @example 1
     */
    softBounces: number;
    /**
     * Number of clicks for the date
     * @format int64
     * @example 6
     */
    clicks: number;
    /**
     * Number of unique clicks for the date
     * @format int64
     * @example 5
     */
    uniqueClicks: number;
    /**
     * Number of openings for the date
     * @format int64
     * @example 58
     */
    opens: number;
    /**
     * Number of unique openings for the date
     * @format int64
     * @example 52
     */
    uniqueOpens: number;
    /**
     * Number of complaints (spam reports) for the date
     * @format int64
     * @example 0
     */
    spamReports: number;
    /**
     * Number of blocked emails for the date
     * @format int64
     * @example 0
     */
    blocked: number;
    /**
     * Number of invalid emails for the date
     * @format int64
     * @example 0
     */
    invalid: number;
    /**
     * Number of unsubscribed emails for the date
     * @format int64
     * @example 0
     */
    unsubscribed: number;
  }[];
}

export interface GetEmailEventReport {
  events?: {
    /**
     * Email address which generates the event
     * @format email
     * @example "john.smith@example.com"
     */
    email: string;
    /**
     * UTC date-time on which the event has been generated
     * @format date-time
     * @example "2017-03-12T12:30:00Z"
     */
    date: string;
    /**
     * Subject of the event
     * @example "Sib client test"
     */
    subject?: string;
    /**
     * Message ID which generated the event
     * @example "<201798300811.5787683@relay.domain.com>"
     */
    messageId: string;
    /**
     * Event which occurred
     * @example "delivered"
     */
    event:
      | "bounces"
      | "hardBounces"
      | "softBounces"
      | "delivered"
      | "spam"
      | "requests"
      | "opened"
      | "clicks"
      | "invalid"
      | "deferred"
      | "blocked"
      | "unsubscribed";
    /**
     * Reason of bounce (only available if the event is hardbounce or softbounce)
     * @example "Error connection timeout"
     */
    reason?: string;
    /**
     * Tag of the email which generated the event
     * @example "OrderConfirmation"
     */
    tag?: string;
    /**
     * IP from which the user has opened the email or clicked on the link (only available if the event is opened or clicks)
     * @example "165.87.3.15"
     */
    ip?: string;
    /**
     * The link which is sent to the user (only available if the event is requests or opened or clicks)
     * @example "https://www.someexamplelink.com"
     */
    link?: string;
    /**
     * Sender email from which the emails are sent
     * @format email
     * @example "john@example.com"
     */
    from?: string;
  }[];
}

export interface GetSmsEventReport {
  events?: {
    /**
     * Phone number which has generated the event
     * @example "00189001094"
     */
    phoneNumber: string;
    /**
     * UTC date-time on which the event has been generated
     * @format date-time
     * @example "2017-03-12T12:30:00Z"
     */
    date: string;
    /**
     * Message ID which generated the event
     * @example "1472640582425378"
     */
    messageId: string;
    /**
     * Event which occurred
     * @example "accepted"
     */
    event:
      | "bounces"
      | "hardBounces"
      | "softBounces"
      | "delivered"
      | "sent"
      | "accepted"
      | "unsubscription"
      | "replies"
      | "blocked"
      | "rejected";
    /**
     * Reason of bounce (only available if the event is hardbounce or softbounce)
     * @example "Message is undeliverable due to an incorrect / invalid / blacklisted / permanently barred MSISDN for this operator"
     */
    reason?: string;
    reply?: string;
    /**
     * Tag of the SMS which generated the event
     * @example "CabWaiting"
     */
    tag?: string;
  }[];
}

export interface GetSmtpTemplateOverview {
  /**
   * ID of the template
   * @format int64
   * @example 4
   */
  id: number;
  /**
   * Name of the template
   * @example "Order Confirmation - EN"
   */
  name: string;
  /**
   * Subject of the template
   * @example "Thanks for your order !"
   */
  subject: string;
  /**
   * Status of template (true=active, false=inactive)
   * @example true
   */
  isActive: boolean;
  /**
   * Status of test sending for the template (true=test email has been sent, false=test email has not been sent)
   * @example true
   */
  testSent: boolean;
  sender: {
    /**
     * From email for the template
     * @example "Mary form MyShop"
     */
    name?: string;
    /**
     * From email for the template
     * @format email
     * @example "contact@myshop.fr"
     */
    email?: string;
    /**
     * Sender id of the template
     * @example 43
     */
    id?: string;
  };
  /**
   * Email defined as the "Reply to" for the template
   * @format email
   * @example "replyto@domain.com"
   */
  replyTo: string;
  /**
   * Customisation of the "to" field for the template
   * @example "{FIRSTNAME} {LASTNAME}"
   */
  toField: string;
  /**
   * Tag of the template
   * @example "sports"
   */
  tag: string;
  /**
   * HTML content of the template
   * @example "Your order n°xxxxx has been confirmed. Thanks for your purchase."
   */
  htmlContent: string;
  /**
   * Creation UTC date-time of the template (YYYY-MM-DDTHH:mm:ss.SSSZ)
   * @format date-time
   * @example "2017-05-01T12:30:00Z"
   */
  createdAt: string;
  /**
   * Last modification UTC date-time of the template (YYYY-MM-DDTHH:mm:ss.SSSZ)
   * @format date-time
   * @example "2017-05-12T12:30:00Z"
   */
  modifiedAt: string;
  /**
   * It is true if template is a valid Double opt-in (DOI) template, otherwise it is false. This field will be available only in case of single template detail call.
   * @example false
   */
  doiTemplate?: boolean;
}

export interface GetSmtpTemplates {
  /**
   * Count of transactional email templates
   * @format int64
   * @example 1
   */
  count?: number;
  templates?: GetSmtpTemplateOverview[];
}

export interface GetWebhook {
  /**
   * URL of the webhook
   * @format url
   * @example "http://requestb.in/173lyyx1"
   */
  url: string;
  /**
   * ID of the webhook
   * @format int64
   * @example 654
   */
  id: number;
  /**
   * Description of the webhook
   * @example "Webhook triggered on campaign openings"
   */
  description: string;
  events: string[];
  /**
   * Type of webhook (marketing or transac)
   * @example "marketing"
   */
  type: "marketing" | "transac";
  /**
   * Creation UTC date-time of the webhook (YYYY-MM-DDTHH:mm:ss.SSSZ)
   * @format date-time
   * @example "2016-12-01T12:50:00Z"
   */
  createdAt: string;
  /**
   * Last modification UTC date-time of the webhook (YYYY-MM-DDTHH:mm:ss.SSSZ)
   * @format date-time
   * @example "2017-05-12T13:15:00Z"
   */
  modifiedAt: string;
}

export interface GetWebhooks {
  webhooks: GetWebhook[];
}

export interface GetContactDetails {
  /**
   * Email address of the contact for which you requested the details
   * @format email
   * @example "john.smith@example.com"
   */
  email?: string;
  /**
   * ID of the contact for which you requested the details
   * @format int64
   * @example 32
   */
  id: number;
  /**
   * Blacklist status for email campaigns (true=blacklisted, false=not blacklisted)
   * @example false
   */
  emailBlacklisted: boolean;
  /**
   * Blacklist status for SMS campaigns (true=blacklisted, false=not blacklisted)
   * @example true
   */
  smsBlacklisted: boolean;
  /**
   * Creation UTC date-time of the contact (YYYY-MM-DDTHH:mm:ss.SSSZ)
   * @format date-time
   * @example "2017-05-12T12:30:00Z"
   */
  createdAt: string;
  /**
   * Last modification UTC date-time of the contact (YYYY-MM-DDTHH:mm:ss.SSSZ)
   * @format date-time
   * @example "2017-05-12T12:30:00Z"
   */
  modifiedAt: string;
  listIds: number[];
  listUnsubscribed?: number[];
  /**
   * Set of attributes of the contact
   * @example {"name":"Joe","email":"joe@example.com"}
   */
  attributes: object;
}

export type GetExtendedContactDetails = GetContactDetails & {
  /** Campaign statistics of the contact */
  statistics: {
    /** Listing of the sent campaign for the contact */
    messagesSent?: {
      /**
       * ID of the campaign which generated the event
       * @format int64
       * @example 3
       */
      campaignId: number;
      /**
       * UTC date-time of the event
       * @format date-time
       * @example "2017-03-12T20:15:13Z"
       */
      eventTime: string;
    }[];
    /** Listing of the hardbounes generated by the contact */
    hardBounces?: {
      /**
       * ID of the campaign which generated the event
       * @format int64
       * @example 3
       */
      campaignId: number;
      /**
       * UTC date-time of the event
       * @format date-time
       * @example "2017-03-12T20:15:13Z"
       */
      eventTime: string;
    }[];
    /** Listing of the softbounes generated by the contact */
    softBounces?: {
      /**
       * ID of the campaign which generated the event
       * @format int64
       * @example 3
       */
      campaignId: number;
      /**
       * UTC date-time of the event
       * @format date-time
       * @example "2017-03-12T20:15:13Z"
       */
      eventTime: string;
    }[];
    /** Listing of the complaints generated by the contact */
    complaints?: {
      /**
       * ID of the campaign which generated the event
       * @format int64
       * @example 3
       */
      campaignId: number;
      /**
       * UTC date-time of the event
       * @format date-time
       * @example "2017-03-12T20:15:13Z"
       */
      eventTime: string;
    }[];
    /** Listing of the unsubscription for the contact */
    unsubscriptions?: {
      /** Contact unsubscribe via unsubscription link in a campaign */
      userUnsubscription: {
        /**
         * ID of the campaign which generated the event
         * @format int64
         * @example 3
         */
        campaignId: number;
        /**
         * UTC date-time of the event
         * @format date-time
         * @example "2017-03-12T20:15:13Z"
         */
        eventTime: string;
        /**
         * IP from which the user has unsubscribed
         * @example "165.87.3.15"
         */
        ip?: string;
      }[];
      /** Contact has been unsubscribed from the administrator */
      adminUnsubscription: {
        /**
         * UTC date-time of the event
         * @format date-time
         * @example "2017-03-12T20:15:13Z"
         */
        eventTime: string;
        /**
         * IP from which the user has been unsubscribed
         * @example "165.87.3.15"
         */
        ip?: string;
      }[];
    };
    /** Listing of the openings generated by the contact */
    opened?: {
      /**
       * ID of the campaign which generated the event
       * @format int64
       * @example 3
       */
      campaignId: number;
      /**
       * Number of openings for the campaign
       * @format int64
       * @example 1
       */
      count: number;
      /**
       * UTC date-time of the event
       * @format date-time
       * @example "2017-03-12T20:15:13Z"
       */
      eventTime: string;
      /**
       * IP from which the user has opened the email
       * @example "165.87.3.15"
       */
      ip: string;
    }[];
    /** Listing of the clicks generated by the contact */
    clicked?: {
      /**
       * ID of the campaign which generated the event
       * @format int64
       * @example 3
       */
      campaignId: number;
      /** Listing of the clicked links for the campaign */
      links: {
        /**
         * Number of clicks on this link for the campaign
         * @format int64
         * @example 1
         */
        count: number;
        /**
         * UTC date-time of the event
         * @format date-time
         * @example "2017-03-12T20:15:13Z"
         */
        eventTime: string;
        /**
         * IP from which the user has clicked on the link
         * @example "165.87.3.15"
         */
        ip: string;
        /**
         * URL of the clicked link
         * @example "www.myshop.com"
         */
        url: string;
      }[];
    }[];
    /** Listing of the transactional attributes for the contact */
    transacAttributes?: object[];
  };
};

/** Campaign Statistics for the contact */
export interface GetContactCampaignStats {
  messagesSent?: {
    /**
     * ID of the campaign which generated the event
     * @format int64
     * @example 3
     */
    campaignId: number;
    /**
     * UTC date-time of the event
     * @format date-time
     * @example "2017-03-12T20:15:13Z"
     */
    eventTime: string;
  }[];
  hardBounces?: {
    /**
     * ID of the campaign which generated the event
     * @format int64
     * @example 3
     */
    campaignId: number;
    /**
     * UTC date-time of the event
     * @format date-time
     * @example "2017-03-12T20:15:13Z"
     */
    eventTime: string;
  }[];
  softBounces?: {
    /**
     * ID of the campaign which generated the event
     * @format int64
     * @example 3
     */
    campaignId: number;
    /**
     * UTC date-time of the event
     * @format date-time
     * @example "2017-03-12T20:15:13Z"
     */
    eventTime: string;
  }[];
  complaints?: {
    /**
     * ID of the campaign which generated the event
     * @format int64
     * @example 3
     */
    campaignId: number;
    /**
     * UTC date-time of the event
     * @format date-time
     * @example "2017-03-12T20:15:13Z"
     */
    eventTime: string;
  }[];
  unsubscriptions?: {
    /** Contact has unsubscribed via the unsubscription link in the email */
    userUnsubscription: {
      /**
       * ID of the campaign which generated the event
       * @format int64
       * @example 3
       */
      campaignId: number;
      /**
       * UTC date-time of the event
       * @format date-time
       * @example "2017-03-12T20:15:13Z"
       */
      eventTime: string;
      /**
       * IP from which the user has unsubscribed
       * @example "165.87.3.15"
       */
      ip?: string;
    }[];
    /** Contact has been unsubscribed from the administrator */
    adminUnsubscription: {
      /**
       * UTC date-time of the event
       * @format date-time
       * @example "2017-03-12T20:15:13Z"
       */
      eventTime: string;
      /**
       * IP from which the user has been unsubscribed
       * @example "165.87.3.15"
       */
      ip?: string;
    }[];
  };
  opened?: {
    /**
     * ID of the campaign which generated the event
     * @format int64
     * @example 3
     */
    campaignId: number;
    /**
     * Number of openings of the campaign
     * @format int64
     * @example 3
     */
    count: number;
    /**
     * UTC date-time of the event
     * @format date-time
     * @example "2017-03-12T20:15:13Z"
     */
    eventTime: string;
    /**
     * IP from which the user has opened the campaign
     * @example "165.87.3.15"
     */
    ip: string;
  }[];
  clicked?: {
    /**
     * ID of the campaign which generated the event
     * @format int64
     * @example 3
     */
    campaignId: number;
    links: {
      /**
       * Number of clicks on this link for the campaign
       * @format int64
       * @example 1
       */
      count: number;
      /**
       * UTC date-time of the event
       * @format date-time
       * @example "2017-03-12T20:15:13Z"
       */
      eventTime: string;
      /**
       * IP from which the user has clicked on the link
       * @example "165.87.3.15"
       */
      ip: string;
      /**
       * URL of the clicked link
       * @example "www.myshop.com"
       */
      url: string;
    }[];
  }[];
  transacAttributes?: {
    /**
     * Date of the order
     * @format date
     * @example "2017-03-12"
     */
    orderDate: string;
    /**
     * Price of the order
     * @format float
     * @example 24.99
     */
    orderPrice: number;
    /**
     * ID of the order
     * @format int64
     * @example 248
     */
    orderId: number;
  }[];
}

export interface GetContacts {
  contacts: GetContactDetails[];
  /**
   * Number of contacts
   * @format int64
   * @example 17655
   */
  count: number;
}

export interface GetAttributes {
  /** Listing of available contact attributes in your account */
  attributes: {
    /**
     * Name of the attribute
     * @example "LASTNAME"
     */
    name: string;
    /**
     * Category of the attribute
     * @example "category"
     */
    category: "normal" | "transactional" | "category" | "calculated" | "global";
    /**
     * Type of the attribute
     * @example "text"
     */
    type?: "text" | "date" | "float" | "id" | "boolean";
    /** Parameter only available for "category" type attributes. */
    enumeration?: {
      /**
       * ID of Value of the "category" type attribute
       * @format int64
       * @example 1
       */
      value: number;
      /**
       * Label of the "category" type attribute
       * @example "Women"
       */
      label: string;
    }[];
    /**
     * Calculated value formula
     * @example "COUNT[ORDER_ID,ORDER_DATE,==,NOW(-1)]"
     */
    calculatedValue?: string;
  }[];
}

export interface GetFolders {
  folders?: GetFolder[];
  /**
   * Number of folders available in your account
   * @format int64
   * @example 10
   */
  count?: number;
}

export interface GetFolder {
  /**
   * ID of the folder
   * @format int64
   * @example 2
   */
  id: number;
  /**
   * Name of the folder
   * @example "Magento Customers"
   */
  name: string;
  /**
   * Number of blacklisted contacts in the folder
   * @format int64
   * @example 32
   */
  totalBlacklisted: number;
  /**
   * Number of contacts in the folder
   * @format int64
   * @example 19777
   */
  totalSubscribers: number;
  /**
   * Number of unique contacts in the folder
   * @format int64
   * @example 16222
   */
  uniqueSubscribers: number;
}

export interface GetSegments {
  /** Listing of all the segments available in your account */
  segments?: {
    /**
     * ID of the list
     * @format int64
     * @example 23
     */
    id?: number;
    /**
     * Name of the Segment
     * @example "My Segment"
     */
    segmentName?: string;
    /**
     * Name of the Segment Category
     * @format string
     * @example "New Category"
     */
    categoryName?: string;
    /**
     * Updation UTC date-time of the segment (YYYY-MM-DDTHH:mm:ss.SSSZ)
     * @example "2017-03-13T17:05:09Z"
     */
    updatedAt?: string;
  };
  /**
   * Number of Segments in your account
   * @format int64
   * @example 10
   */
  count?: number;
}

export interface GetFolderLists {
  lists: GetList[];
  /**
   * Number of lists in the folder
   * @format int64
   * @example 6
   */
  count: number;
}

export interface GetLists {
  /** Listing of all the lists available in your account */
  lists: (GetList & {
    /**
     * ID of the folder
     * @format int64
     * @example 2
     */
    folderId: number;
  })[];
  /**
   * Number of lists in your account
   * @format int64
   * @example 150
   */
  count: number;
}

export interface GetList {
  /**
   * ID of the list
   * @format int64
   * @example 23
   */
  id: number;
  /**
   * Name of the list
   * @example "Magento Customers - EN"
   */
  name: string;
  /**
   * Number of blacklisted contacts in the list
   * @format int64
   * @example 13
   */
  totalBlacklisted: number;
  /**
   * Number of contacts in the list
   * @format int64
   * @example 1776
   */
  totalSubscribers: number;
}

export type GetExtendedList = GetList & {
  /**
   * ID of the folder
   * @format int64
   * @example 2
   */
  folderId: number;
  /**
   * Creation UTC date-time of the list (YYYY-MM-DDTHH:mm:ss.SSSZ)
   * @format date-time
   * @example "2017-03-13T17:05:09Z"
   */
  createdAt: string;
  campaignStats?: {
    /**
     * ID of the campaign
     * @format int64
     * @example 143
     */
    campaignId: number;
    stats: GetCampaignStats;
  }[];
  /**
   * Status telling if the list is dynamic or not (true=dynamic, false=not dynamic)
   * @example false
   */
  dynamicList?: boolean;
};

export interface GetSmsCampaignStats {
  /**
   * Number of delivered SMS
   * @format int64
   * @example 2987
   */
  delivered: number;
  /**
   * Number of sent SMS
   * @format int64
   * @example 3000
   */
  sent: number;
  /**
   * Number of processing SMS
   * @format int64
   * @example 0
   */
  processing: number;
  /**
   * Number of softbounced SMS
   * @format int64
   * @example 3
   */
  softBounces: number;
  /**
   * Number of hardbounced SMS
   * @format int64
   * @example 1
   */
  hardBounces: number;
  /**
   * Number of unsubscription SMS
   * @format int64
   * @example 3
   */
  unsubscriptions: number;
  /**
   * Number of replies to the SMS
   * @format int64
   * @example 2
   */
  answered: number;
}

export interface GetDeviceBrowserStats {
  /**
   * Number of total clicks for the campaign using the particular browser
   * @format int64
   * @example 2665
   */
  clickers: number;
  /**
   * Number of unique clicks for the campaign using the particular browser
   * @format int64
   * @example 2300
   */
  uniqueClicks: number;
  /**
   * Number of openings for the campaign using the particular browser
   * @format int64
   * @example 8999
   */
  viewed: number;
  /**
   * Number of unique openings for the campaign using the particular browser
   * @format int64
   * @example 7779
   */
  uniqueViews: number;
}

export interface GetCampaignStats {
  /**
   * List Id of email campaign (only in case of get email campaign(s)(not for global stats))
   * @format int64
   * @example 2
   */
  listId?: number;
  /**
   * Number of unique clicks for the campaign
   * @format int64
   * @example 2300
   */
  uniqueClicks: number;
  /**
   * Number of total clicks for the campaign
   * @format int64
   * @example 2665
   */
  clickers: number;
  /**
   * Number of complaints (Spam reports) for the campaign
   * @format int64
   * @example 1
   */
  complaints: number;
  /**
   * Number of delivered emails for the campaign
   * @format int64
   * @example 19765
   */
  delivered: number;
  /**
   * Number of sent emails for the campaign
   * @format int64
   * @example 19887
   */
  sent: number;
  /**
   * Number of softbounce for the campaign
   * @format int64
   * @example 100
   */
  softBounces: number;
  /**
   * Number of harbounce for the campaign
   * @format int64
   * @example 87
   */
  hardBounces: number;
  /**
   * Number of unique openings for the campaign
   * @format int64
   * @example 7779
   */
  uniqueViews: number;
  /**
   * Recipients without any privacy protection option enabled in their email client
   * @format int64
   * @example 5661
   */
  trackableViews: number;
  /**
   * Number of unsubscription for the campaign
   * @format int64
   * @example 2
   */
  unsubscriptions: number;
  /**
   * Number of openings for the campaign
   * @format int64
   * @example 8999
   */
  viewed: number;
  /**
   * Number of deferred emails for the campaign
   * @format int64
   * @example 30
   */
  deferred?: number;
  /**
   * Total number of non-delivered campaigns for a particular campaign id.
   * @format int64
   * @example 5
   */
  returnBounce?: number;
}

export interface UpdateSmtpTemplate {
  /**
   * Tag of the template
   * @example "OrderConfirmation"
   */
  tag?: string;
  /** Sender details including id or email and name (optional). Only one of either Sender's email or Sender's ID shall be passed in one request at a time. For example `{"name":"xyz", "email":"example@abc.com"}` , `{"name":"xyz", "id":123}` */
  sender?: {
    /**
     * Name of the sender
     * @example "Mary from MyShop"
     */
    name?: string;
    /**
     * Email of the sender
     * @format email
     * @example "contact@myshop.com"
     */
    email?: string;
    /**
     * Select the sender for the template on the basis of sender id. In order to select a sender with specific pool of IP’s, dedicated ip users shall pass id (instead of email).
     * @format int64
     * @example 3
     */
    id?: number;
  };
  /**
   * Name of the template
   * @example "Order Confirmation - EN"
   */
  templateName?: string;
  /**
   * Required if htmlUrl is empty. Body of the message (HTML must have more than 10 characters)
   * @example "The order n°xxxxx has been confirmed. Thanks for your purchase"
   */
  htmlContent?: string;
  /**
   * Required if htmlContent is empty. URL to the body of the email (HTML)
   * @format url
   * @example "https://html.domain.com"
   */
  htmlUrl?: string;
  /**
   * Subject of the email
   * @example "Thanks for your purchase !"
   */
  subject?: string;
  /**
   * Email on which campaign recipients will be able to reply to
   * @format email
   * @example "support@myshop.com"
   */
  replyTo?: string;
  /**
   * To personalize the «To» Field. If you want to include the first name and last name of your recipient, add {FNAME} {LNAME}. These contact attributes must already exist in your SendinBlue account. If input parameter 'params' used please use {{contact.FNAME}} {{contact.LNAME}} for personalization
   * @example "{FNAME} {LNAME}"
   */
  toField?: string;
  /**
   * Absolute url of the attachment (no local file). Extension allowed: xlsx, xls, ods, docx, docm, doc, csv, pdf, txt, gif, jpg, jpeg, png, tif, tiff, rtf, bmp, cgm, css, shtml, html, htm, zip, xml, ppt, pptx, tar, ez, ics, mobi, msg, pub and eps
   * @format url
   * @example "https://attachment.domain.com"
   */
  attachmentUrl?: string;
  /**
   * Status of the template. isActive = false means template is inactive, isActive = true means template is active
   * @example true
   */
  isActive?: boolean;
}

/**
 * Status of the campaign
 * @example "draft"
 */
export interface UpdateCampaignStatus {
  /** Note:- replicateTemplate status will be available only for template type campaigns. */
  status?: "suspended" | "archive" | "darchive" | "sent" | "queued" | "replicate" | "replicateTemplate" | "draft";
}

export interface CreateSmtpTemplate {
  /**
   * Tag of the template
   * @example "OrderConfirmation"
   */
  tag?: string;
  /** Sender details including id or email and name (optional). Only one of either Sender's email or Sender's ID shall be passed in one request at a time. For example `{"name":"xyz", "email":"example@abc.com"}` , `{"name":"xyz", "id":123}` */
  sender: {
    /**
     * Name of the sender. If not passed, will be set to default
     * @example "Mary from MyShop"
     */
    name?: string;
    /**
     * Email of the sender
     * @format email
     * @example "contact@myshop.com"
     */
    email?: string;
    /**
     * Select the sender for the template on the basis of sender id. In order to select a sender with specific pool of IP’s, dedicated ip users shall pass id (instead of email).
     * @format int64
     * @example 3
     */
    id?: number;
  };
  /**
   * Name of the template
   * @example "Order Confirmation - EN"
   */
  templateName: string;
  /**
   * Body of the message (HTML version). The field must have more than 10 characters. REQUIRED if htmlUrl is empty
   * @example "The order n°xxxxx has been confirmed. Thanks for your purchase"
   */
  htmlContent?: string;
  /**
   * Url which contents the body of the email message. REQUIRED if htmlContent is empty
   * @format url
   * @example "https://html.domain.com"
   */
  htmlUrl?: string;
  /**
   * Subject of the template
   * @example "Thanks for your purchase !"
   */
  subject: string;
  /**
   * Email on which campaign recipients will be able to reply to
   * @format email
   * @example "support@myshop.com"
   */
  replyTo?: string;
  /**
   * To personalize the «To» Field. If you want to include the first name and last name of your recipient, add {FNAME} {LNAME}. These contact attributes must already exist in your SendinBlue account. If input parameter 'params' used please use {{contact.FNAME}} {{contact.LNAME}} for personalization
   * @example "{FNAME} {LNAME}"
   */
  toField?: string;
  /**
   * Absolute url of the attachment (no local file). Extension allowed: xlsx, xls, ods, docx, docm, doc, csv, pdf, txt, gif, jpg, jpeg, png, tif, tiff, rtf, bmp, cgm, css, shtml, html, htm, zip, xml, ppt, pptx, tar, ez, ics, mobi, msg, pub and eps
   * @format url
   * @example "https://attachment.domain.com"
   */
  attachmentUrl?: string;
  /**
   * Status of template. isActive = true means template is active and isActive = false means template is inactive
   * @example true
   */
  isActive?: boolean;
}

export interface CreateEmailCampaign {
  /**
   * Tag of the campaign
   * @example "Newsletter"
   */
  tag?: string;
  /** Sender details including id or email and name (optional). Only one of either Sender's email or Sender's ID shall be passed in one request at a time. For example `{"name":"xyz", "email":"example@abc.com"}` , `{"name":"xyz", "id":123}` */
  sender: {
    /**
     * Sender Name
     * @example "Mary from MyShop"
     */
    name?: string;
    /**
     * Sender email
     * @format email
     * @example "newsletter@myshop.com"
     */
    email?: string;
    /**
     * Select the sender for the campaign on the basis of sender id. In order to select a sender with specific pool of IP’s, dedicated ip users shall pass id (instead of email).
     * @format int64
     * @example 3
     */
    id?: number;
  };
  /**
   * Name of the campaign
   * @example "Newsletter - May 2017"
   */
  name: string;
  /**
   * Mandatory if htmlUrl and templateId are empty. Body of the message (HTML)
   * @example "Spring is here, discover my new collection"
   */
  htmlContent?: string;
  /**
   * Mandatory if htmlContent and templateId are empty. Url to the message (HTML)
   * @format url
   * @example "https://html.domain.com"
   */
  htmlUrl?: string;
  /**
   * Mandatory if htmlContent and htmlUrl are empty. Id of the transactional email template with status 'active'. Used to copy only its content fetched from htmlContent/htmlUrl to an email campaign for RSS feature.
   * @format int64
   */
  templateId?: number;
  /**
   * Sending UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ). Prefer to pass your timezone in date-time format for accurate result. If sendAtBestTime is set to true, your campaign will be sent according to the date passed (ignoring the time part).
   * @format date-time
   * @example "2017-06-01T12:30:00+02:00"
   */
  scheduledAt?: string;
  /**
   * Subject of the campaign. Mandatory if abTesting is false. Ignored if abTesting is true.
   * @example "Discover the New Collection !"
   */
  subject?: string;
  /**
   * Email on which the campaign recipients will be able to reply to
   * @format email
   * @example "support@myshop.com"
   */
  replyTo?: string;
  /**
   * To personalize the «To» Field. If you want to include the first name and last name of your recipient, add {FNAME} {LNAME}. These contact attributes must already exist in your SendinBlue account. If input parameter 'params' used please use {{contact.FNAME}} {{contact.LNAME}} for personalization
   * @example "{FNAME} {LNAME}"
   */
  toField?: string;
  /** List ids to include/exclude from campaign */
  recipients?: {
    /** List ids to exclude from the campaign */
    exclusionListIds?: number[];
    /** Mandatory if scheduledAt is not empty. List Ids to send the campaign to */
    listIds?: number[];
  };
  /**
   * Absolute url of the attachment (no local file). Extension allowed: xlsx, xls, ods, docx, docm, doc, csv, pdf, txt, gif, jpg, jpeg, png, tif, tiff, rtf, bmp, cgm, css, shtml, html, htm, zip, xml, ppt, pptx, tar, ez, ics, mobi, msg, pub and eps
   * @format url
   * @example "https://attachment.domain.com"
   */
  attachmentUrl?: string;
  /**
   * Use true to embedded the images in your email. Final size of the email should be less than 4MB. Campaigns with embedded images can not be sent to more than 5000 contacts
   * @default false
   * @example true
   */
  inlineImageActivation?: boolean;
  /**
   * Use true to enable the mirror link
   * @example true
   */
  mirrorActive?: boolean;
  /**
   * Footer of the email campaign
   * @example "[DEFAULT_FOOTER]"
   */
  footer?: string;
  /**
   * Header of the email campaign
   * @example "[DEFAULT_HEADER]"
   */
  header?: string;
  /**
   * Customize the utm_campaign value. If this field is empty, the campaign name will be used. Only alphanumeric characters and spaces are allowed
   * @example "NL_05_2017"
   */
  utmCampaign?: string;
  /**
   * Pass the set of attributes to customize the type classic campaign. For example, {"FNAME":"Joe", "LNAME":"Doe"}. Only available if 'type' is 'classic'. It's considered only if campaign is in New Template Language format. The New Template Language is dependent on the values of 'subject', 'htmlContent/htmlUrl', 'sender.name' & 'toField'
   * @example {"FNAME":"Joe","LNAME":"Doe"}
   */
  params?: object;
  /**
   * Set this to true if you want to send your campaign at best time.
   * @default false
   * @example true
   */
  sendAtBestTime?: boolean;
  /**
   * Status of A/B Test. abTesting = false means it is disabled, & abTesting = true means it is enabled. 'subjectA', 'subjectB', 'splitRule', 'winnerCriteria' & 'winnerDelay' will be considered when abTesting is set to true. 'subjectA' & 'subjectB' are mandatory together & 'subject' if passed is ignored. Can be set to true only if 'sendAtBestTime' is 'false'. You will be able to set up two subject lines for your campaign and send them to a random sample of your total recipients. Half of the test group will receive version A, and the other half will receive version B
   * @default false
   * @example true
   */
  abTesting?: boolean;
  /**
   * Subject A of the campaign. Mandatory if abTesting = true. subjectA & subjectB should have unique value
   * @example "Discover the New Collection!"
   */
  subjectA?: string;
  /**
   * Subject B of the campaign. Mandatory if abTesting = true. subjectA & subjectB should have unique value
   * @example "Want to discover the New Collection?"
   */
  subjectB?: string;
  /**
   * Add the size of your test groups. Mandatory if abTesting = true & 'recipients' is passed. We'll send version A and B to a random sample of recipients, and then the winning version to everyone else
   * @format int64
   * @min 1
   * @max 50
   * @example 50
   */
  splitRule?: number;
  /**
   * Choose the metrics that will determinate the winning version. Mandatory if 'splitRule' >= 1 and < 50. If splitRule = 50, 'winnerCriteria' is ignored if passed
   * @example "open"
   */
  winnerCriteria?: "open" | "click";
  /**
   * Choose the duration of the test in hours. Maximum is 7 days, pass 24*7 = 168 hours. The winning version will be sent at the end of the test. Mandatory if 'splitRule' >= 1 and < 50. If splitRule = 50, 'winnerDelay' is ignored if passed
   * @format int64
   * @min 1
   * @max 168
   * @example 50
   */
  winnerDelay?: number;
  /**
   * Available for dedicated ip clients. Set this to true if you wish to warm up your ip.
   * @default false
   * @example true
   */
  ipWarmupEnable?: boolean;
  /**
   * Mandatory if ipWarmupEnable is set to true. Set an initial quota greater than 1 for warming up your ip. We recommend you set a value of 3000.
   * @format int64
   * @example 3000
   */
  initialQuota?: number;
  /**
   * Mandatory if ipWarmupEnable is set to true. Set a percentage increase rate for warming up your ip. We recommend you set the increase rate to 30% per day. If you want to send the same number of emails every day, set the daily increase value to 0%.
   * @format int64
   * @min 0
   * @max 100
   * @example 70
   */
  increaseRate?: number;
}

export interface UpdateEmailCampaign {
  /**
   * Tag of the campaign
   * @example "Newsletter"
   */
  tag?: string;
  /** Sender details including id or email and name (optional). Only one of either Sender's email or Sender's ID shall be passed in one request at a time. For example `{"name":"xyz", "email":"example@abc.com"}` , `{"name":"xyz", "id":123}` */
  sender?: {
    /**
     * Sender Name from which the campaign emails are sent
     * @example "Mary from MyShop"
     */
    name?: string;
    /**
     * Sender email from which the campaign emails are sent
     * @format email
     * @example "newsletter@myshop.com"
     */
    email?: string;
    /**
     * Select the sender for the campaign on the basis of sender id. In order to select a sender with specific pool of IP’s, dedicated ip users shall pass id (instead of email).
     * @format int64
     * @example 3
     */
    id?: number;
  };
  /**
   * Name of the campaign
   * @example "Newsletter - May 2017"
   */
  name?: string;
  /**
   * Body of the message (HTML version). REQUIRED if htmlUrl is empty
   * @example "Spring is here, discover my new collection"
   */
  htmlContent?: string;
  /**
   * Url which contents the body of the email message. REQUIRED if htmlContent is empty
   * @format url
   * @example "https://html.domain.com"
   */
  htmlUrl?: string;
  /**
   * UTC date-time on which the campaign has to run (YYYY-MM-DDTHH:mm:ss.SSSZ). Prefer to pass your timezone in date-time format for accurate result. If sendAtBestTime is set to true, your campaign will be sent according to the date passed (ignoring the time part).
   * @format date-time
   * @example "2017-06-01T12:30:00+02:00"
   */
  scheduledAt?: string;
  /**
   * Subject of the campaign
   * @example "Discover the New Collection !"
   */
  subject?: string;
  /**
   * Email on which campaign recipients will be able to reply to
   * @format email
   * @example "support@myshop.com"
   */
  replyTo?: string;
  /**
   * To personalize the «To» Field. If you want to include the first name and last name of your recipient, add {FNAME} {LNAME}. These contact attributes must already exist in your SendinBlue account. If input parameter 'params' used please use {{contact.FNAME}} {{contact.LNAME}} for personalization
   * @example "{FNAME} {LNAME}"
   */
  toField?: string;
  /** List ids to include/exclude from campaign */
  recipients?: {
    /** List ids which have to be excluded from a campaign */
    exclusionListIds?: number[];
    /** Lists Ids to send the campaign to. REQUIRED if already not present in campaign and scheduledAt is not empty */
    listIds?: number[];
  };
  /**
   * Absolute url of the attachment (no local file). Extension allowed: xlsx, xls, ods, docx, docm, doc, csv, pdf, txt, gif, jpg, jpeg, png, tif, tiff, rtf, bmp, cgm, css, shtml, html, htm, zip, xml, ppt, pptx, tar, ez, ics, mobi, msg, pub and eps
   * @format url
   * @example "https://attachment.domain.com"
   */
  attachmentUrl?: string;
  /**
   * Status of inline image. inlineImageActivation = false means image can’t be embedded, & inlineImageActivation = true means image can be embedded, in the email. You cannot send a campaign of more than 4MB with images embedded in the email. Campaigns with the images embedded in the email must be sent to less than 5000 contacts.
   * @default false
   * @example true
   */
  inlineImageActivation?: boolean;
  /**
   * Status of mirror links in campaign. mirrorActive = false means mirror links are deactivated, & mirrorActive = true means mirror links are activated, in the campaign
   * @example true
   */
  mirrorActive?: boolean;
  /**
   * FOR TRIGGER ONLY ! Type of trigger campaign.recurring = false means contact can receive the same Trigger campaign only once, & recurring = true means contact can receive the same Trigger campaign several times
   * @default false
   * @example false
   */
  recurring?: boolean;
  /**
   * Footer of the email campaign
   * @example "[DEFAULT_FOOTER]"
   */
  footer?: string;
  /**
   * Header of the email campaign
   * @example "[DEFAULT_HEADER]"
   */
  header?: string;
  /**
   * Customize the utm_campaign value. If this field is empty, the campaign name will be used. Only alphanumeric characters and spaces are allowed
   * @example "NL_05_2017"
   */
  utmCampaign?: string;
  /**
   * Pass the set of attributes to customize the type 'classic' campaign. For example, {"FNAME":"Joe", "LNAME":"Doe"}. The 'params' field will get updated, only if the campaign is in New Template Language, else ignored. The New Template Language is dependent on the values of 'subject', 'htmlContent/htmlUrl', 'sender.name' & 'toField'
   * @example {"FNAME":"Joe","LNAME":"Doe"}
   */
  params?: object;
  /**
   * Set this to true if you want to send your campaign at best time. Note:- if true, warmup ip will be disabled.
   * @example true
   */
  sendAtBestTime?: boolean;
  /**
   * Status of A/B Test. abTesting = false means it is disabled, & abTesting = true means it is enabled. 'subjectA', 'subjectB', 'splitRule', 'winnerCriteria' & 'winnerDelay' will be considered if abTesting is set to true. 'subject' if passed is ignored.  Can be set to true only if 'sendAtBestTime' is 'false'. You will be able to set up two subject lines for your campaign and send them to a random sample of your total recipients. Half of the test group will receive version A, and the other half will receive version B
   * @default false
   * @example true
   */
  abTesting?: boolean;
  /**
   * Subject A of the campaign. Considered if abTesting = true. subjectA & subjectB should have unique value
   * @example "Discover the New Collection!"
   */
  subjectA?: string;
  /**
   * Subject B of the campaign. Considered if abTesting = true. subjectA & subjectB should have unique value
   * @example "Want to discover the New Collection?"
   */
  subjectB?: string;
  /**
   * Add the size of your test groups. Considered if abTesting = true. We'll send version A and B to a random sample of recipients, and then the winning version to everyone else
   * @format int64
   * @min 1
   * @max 50
   * @example 50
   */
  splitRule?: number;
  /**
   * Choose the metrics that will determinate the winning version. Considered if 'splitRule' >= 1 and < 50. If splitRule = 50, 'winnerCriteria' is ignored if passed or alreday exist in record
   * @example "open"
   */
  winnerCriteria?: "open" | "click";
  /**
   * Choose the duration of the test in hours. Maximum is 7 days, pass 24*7 = 168 hours. The winning version will be sent at the end of the test. Considered if 'splitRule' >= 1 and < 50. If splitRule = 50, 'winnerDelay' is ignored if passed or alreday exist in record
   * @format int64
   * @min 1
   * @max 168
   * @example 50
   */
  winnerDelay?: number;
  /**
   * Available for dedicated ip clients. Set this to true if you wish to warm up your ip.
   * @default false
   * @example true
   */
  ipWarmupEnable?: boolean;
  /**
   * Set an initial quota greater than 1 for warming up your ip. We recommend you set a value of 3000.
   * @format int64
   * @example 3000
   */
  initialQuota?: number;
  /**
   * Set a percentage increase rate for warming up your ip. We recommend you set the increase rate to 30% per day. If you want to send the same number of emails every day, set the daily increase value to 0%.
   * @format int64
   * @min 0
   * @max 100
   * @example 70
   */
  increaseRate?: number;
}

export interface GetSharedTemplateUrl {
  /**
   * A unique URL for the email campaign or transactional template. This URL can be shared with other Sendinblue users.
   * @format url
   * @example "https://my.sendinblue.com/pt2YU7R5W_guXlowgumy_VX4pFsKu._zd0Gjj96x1_GMmzc1Qps5ZIpj6nx-"
   */
  sharedUrl: string;
}

export interface AbTestCampaignResult {
  /**
   * Winning Campaign Info. pending = Campaign has been picked for sending and winning version is yet to be decided, tie = A tie happened between both the versions, notAvailable = Campaign has not yet been picked for sending.
   * @example "A"
   */
  winningVersion?: "notAvailable" | "pending" | "tie" | "A" | "B";
  /**
   * Criteria choosen for winning version (Open/Click)
   * @example "Open"
   */
  winningCriteria?: "Open" | "Click";
  /**
   * Subject Line of current winning version
   * @example "Subject Line A"
   */
  winningSubjectLine?: string;
  /**
   * Open rate for current winning version
   * @example "70%"
   */
  openRate?: string;
  /**
   * Click rate for current winning version
   * @example "70%"
   */
  clickRate?: string;
  /**
   * Open/Click rate for the winner version
   * @example "70%"
   */
  winningVersionRate?: string;
  statistics?: {
    /** Percentage of a particular event for both versions */
    openers: AbTestVersionStats;
    /** Percentage of a particular event for both versions */
    clicks: AbTestVersionStats;
    /** Percentage of a particular event for both versions */
    unsubscribed: AbTestVersionStats;
    /** Percentage of a particular event for both versions */
    hardBounces: AbTestVersionStats;
    /** Percentage of a particular event for both versions */
    softBounces: AbTestVersionStats;
    /** Percentage of a particular event for both versions */
    complaints: AbTestVersionStats;
  };
  clickedLinks?: {
    /** Information on clicked links for a particular version */
    "Version A": AbTestVersionClicks;
    /** Information on clicked links for a particular version */
    "Version B": AbTestVersionClicks;
  };
}

export interface EmailExportRecipients {
  /**
   * Webhook called once the export process is finished. For reference, https://help.sendinblue.com/hc/en-us/articles/360007666479
   * @format url
   * @example "http://requestb.in/173lyyx1"
   */
  notifyURL?: string;
  /**
   * Type of recipients to export for a campaign
   * @example "openers"
   */
  recipientsType:
    | "all"
    | "nonClickers"
    | "nonOpeners"
    | "clickers"
    | "openers"
    | "softBounces"
    | "hardBounces"
    | "unsubscribed";
}

export interface RequestSmsRecipientExport {
  /**
   * URL that will be called once the export process is finished. For reference, https://help.sendinblue.com/hc/en-us/articles/360007666479
   * @format url
   * @example "http://requestb.in/173lyyx1"
   */
  notifyURL?: string;
  /**
   * Filter the recipients based on how they interacted with the campaign
   * @example "answered"
   */
  recipientsType: "all" | "delivered" | "answered" | "softBounces" | "hardBounces" | "unsubscribed";
}

export interface SendReport {
  /**
   * Language of email content for campaign report sending.
   * @default "fr"
   * @example "en"
   */
  language?: "fr" | "es" | "pt" | "it" | "de" | "en";
  /** Custom attributes for the report email. */
  email: {
    /** Email addresses of the recipients */
    to: string[];
    /**
     * Custom text message to be presented in the report email.
     * @example "Please find attached the report of our last email campaign."
     */
    body: string;
  };
}

export interface UploadImageToGallery {
  /**
   * The absolute url of the image (no local file). Maximum allowed size for image is 2MB. Allowed extensions for images are - jpeg, jpg, png, bmp, gif.
   * @example "https://somedomain.com/image1.jpg"
   */
  imageUrl: string;
  /**
   * Name of the image.
   * @example "nature.jpg"
   */
  name?: string;
}

export interface SendSmtpEmail {
  /** Mandatory if 'templateId' is not passed. Pass name (optional) and email of sender from which emails will be sent. For example, {"name":"Mary from MyShop", "email":"no-reply@myshop.com"} */
  sender?: {
    /**
     * Name of the sender from which the emails will be sent. Maximum allowed characters are 70.
     * @example "Mary from MyShop"
     */
    name?: string;
    /**
     * Email of the sender from which the emails will be sent
     * @format email
     * @example "no-reply@myshop.com"
     */
    email: string;
  };
  /** List of email addresses and names (optional) of the recipients. For example, [{"name":"Jimmy", "email":"jimmy98@example.com"}, {"name":"Joe", "email":"joe@example.com"}] */
  to: {
    /**
     * Email address of the recipient
     * @format email
     * @example "jimmy98@example.com"
     */
    email: string;
    /**
     * Name of the recipient. Maximum allowed characters are 70.
     * @example "Jimmy"
     */
    name?: string;
  }[];
  /** List of email addresses and names (optional) of the recipients in bcc */
  bcc?: {
    /**
     * Email address of the recipient in bcc
     * @format email
     * @example "helen9766@example.com"
     */
    email: string;
    /**
     * Name of the recipient in bcc. Maximum allowed characters are 70.
     * @example "Helen"
     */
    name?: string;
  }[];
  /** List of email addresses and names (optional) of the recipients in cc */
  cc?: {
    /**
     * Email address of the recipient in cc
     * @format email
     * @example "ann6533@example.com"
     */
    email: string;
    /**
     * Name of the recipient in cc. Maximum allowed characters are 70.
     * @example "Ann"
     */
    name?: string;
  }[];
  /**
   * HTML body of the message ( Mandatory if 'templateId' is not passed, ignored if 'templateId' is passed )
   * @example "<!DOCTYPE html> <html> <body> <h1>Confirm you email</h1> <p>Please confirm your email address by clicking on the link below</p> </body> </html>"
   */
  htmlContent?: string;
  /**
   * Plain Text body of the message ( Ignored if 'templateId' is passed )
   * @example "Please confirm your email address by clicking on the link https://text.domain.com"
   */
  textContent?: string;
  /**
   * Subject of the message. Mandatory if 'templateId' is not passed
   * @example "Login Email confirmation"
   */
  subject?: string;
  /** Email (required), along with name (optional), on which transactional mail recipients will be able to reply back. For example, {"email":"ann6533@example.com", "name":"Ann"}. */
  replyTo?: {
    /**
     * Email address in reply to
     * @format email
     * @example "ann6533@example.com"
     */
    email: string;
    /**
     * Name in reply to. Maximum allowed characters are 70.
     * @example "Ann"
     */
    name?: string;
  };
  /** Pass the absolute URL (no local file) or the base64 content of the attachment along with the attachment name (Mandatory if attachment content is passed). For example, `[{"url":"https://attachment.domain.com/myAttachmentFromUrl.jpg", "name":"myAttachmentFromUrl.jpg"}, {"content":"base64 example content", "name":"myAttachmentFromBase64.jpg"}]`. Allowed extensions for attachment file: xlsx, xls, ods, docx, docm, doc, csv, pdf, txt, gif, jpg, jpeg, png, tif, tiff, rtf, bmp, cgm, css, shtml, html, htm, zip, xml, ppt, pptx, tar, ez, ics, mobi, msg, pub, eps, odt, mp3, m4a, m4v, wma, ogg, flac, wav, aif, aifc, aiff, mp4, mov, avi, mkv, mpeg, mpg and wmv ( If 'templateId' is passed and is in New Template Language format then both attachment url and content are accepted. If template is in Old template Language format, then 'attachment' is ignored ) */
  attachment?: {
    /**
     * Absolute url of the attachment (no local file).
     * @format url
     * @example "https://attachment.domain.com/myAttachmentFromUrl.jpg"
     */
    url?: string;
    /**
     * Base64 encoded chunk data of the attachment generated on the fly
     * @format byte
     * @example "b3JkZXIucGRm"
     */
    content?: string;
    /**
     * Required if content is passed. Name of the attachment
     * @example "myAttachment.png"
     */
    name?: string;
  }[];
  /**
   * Pass the set of custom headers (not the standard headers) that shall be sent along the mail headers in the original email. 'sender.ip' header can be set (only for dedicated ip users) to mention the IP to be used for sending transactional emails. Headers are allowed in `This-Case-Only` (i.e. words separated by hyphen with first letter of each word in capital letter), they will be converted to such case styling if not in this format in the request payload. For example, `{"sender.ip":"1.2.3.4", "X-Mailin-custom":"some_custom_header", "idempotencyKey":"abc-123"}`.
   * @example {"sender.ip":"1.2.3.4","X-Mailin-custom":"some_custom_header","idempotencyKey":"abc-123"}
   */
  headers?: object;
  /**
   * Id of the template
   * @format int64
   * @example 2
   */
  templateId?: number;
  /**
   * Pass the set of attributes to customize the template. For example, {"FNAME":"Joe", "LNAME":"Doe"}. It's considered only if template is in New Template Language format.
   * @example {"FNAME":"Joe","LNAME":"Doe"}
   */
  params?: object;
  /** Tag your emails to find them more easily */
  tags?: string[];
}

export interface DeleteHardbounces {
  /**
   * Starting date (YYYY-MM-DD) of the time period for deletion. The hardbounces occurred after this date will be deleted. Must be less than or equal to the endDate
   * @example "2016-12-31"
   */
  startDate?: string;
  /**
   * Ending date (YYYY-MM-DD) of the time period for deletion. The hardbounces until this date will be deleted. Must be greater than or equal to the startDate
   * @example "2017-01-31"
   */
  endDate?: string;
  /**
   * Target a specific email address
   * @format email
   * @example "alex76@example.com"
   */
  contactEmail?: string;
}

export interface CreateWebhook {
  /**
   * URL of the webhook
   * @format url
   * @example "http://requestb.in/173lyyx1"
   */
  url: string;
  /**
   * Description of the webhook
   * @example "Webhook triggered on unsubscription"
   */
  description?: string;
  /** Events triggering the webhook. Possible values for Transactional type webhook – `sent` OR `request`, `delivered`, `hardBounce`, `softBounce`, `blocked`, `spam`, `invalid`, `deferred`, `click`, `opened`, `uniqueOpened` and `unsubscribed` and possible values for Marketing type webhook – `spam`, `opened`, `click`, `hardBounce`, `softBounce`, `unsubscribed`, `listAddition` & `delivered` */
  events: (
    | "sent"
    | "hardBounce"
    | "softBounce"
    | "blocked"
    | "spam"
    | "delivered"
    | "request"
    | "click"
    | "invalid"
    | "deferred"
    | "opened"
    | "uniqueOpened"
    | "unsubscribed"
    | "listAddition"
    | "contactUpdated"
    | "contactDeleted"
  )[];
  /**
   * Type of the webhook
   * @default "transactional"
   * @example "marketing"
   */
  type?: "transactional" | "marketing";
}

export interface UpdateWebhook {
  /**
   * URL of the webhook
   * @format url
   * @example "http://requestb.in/173lyyx1"
   */
  url?: string;
  /**
   * Description of the webhook
   * @example "Webhook triggered on contact hardbounce"
   */
  description?: string;
  /** Events triggering the webhook. Possible values for Transactional type webhook – `sent` OR `request`, `delivered`, `hardBounce`, `softBounce`, `blocked`, `spam`, `invalid`, `deferred`, `click`, `opened`, `uniqueOpened` and `unsubscribed` and possible values for Marketing type webhook – `spam`, `opened`, `click`, `hardBounce`, `softBounce`, `unsubscribed`, `listAddition` and `delivered` */
  events?: (
    | "hardBounce"
    | "softBounce"
    | "blocked"
    | "spam"
    | "delivered"
    | "request"
    | "click"
    | "invalid"
    | "deferred"
    | "opened"
    | "uniqueOpened"
    | "unsubscribed"
    | "listAddition"
    | "contactUpdated"
    | "contactDeleted"
  )[];
}

export interface CreateDoiContact {
  /**
   * Email address where the confirmation email will be sent. This email address will be the identifier for all other contact attributes.
   * @format email
   * @example "elly@example.com"
   */
  email: string;
  /**
   * Pass the set of attributes and their values. These attributes must be present in your SendinBlue account. For eg. {'FNAME':'Elly', 'LNAME':'Roger'}
   * @example {"FNAME":"Elly","LNAME":"Roger"}
   */
  attributes?: object;
  /** Lists under user account where contact should be added */
  includeListIds: number[];
  /** Lists under user account where contact should not be added */
  excludeListIds?: number[];
  /**
   * Id of the Double opt-in (DOI) template
   * @format int64
   * @example 2
   */
  templateId: number;
  /**
   * URL of the web page that user will be redirected to after clicking on the double opt in URL. When editing your DOI template you can reference this URL by using the tag {{ params.DOIurl }}.
   * @format url
   * @example "http://requestb.in/173lyyx1"
   */
  redirectionUrl: string;
}

export interface CreateContact {
  /**
   * Email address of the user. Mandatory if "SMS" field is not passed in "attributes" parameter. Mobile Number in "SMS" field should be passed with proper country code. For example {"SMS":"+91xxxxxxxxxx"} or {"SMS":"0091xxxxxxxxxx"}
   * @format email
   * @example "elly@example.com"
   */
  email?: string;
  /**
   * Pass the set of attributes and their values. These attributes must be present in your SendinBlue account. For eg. {"FNAME":"Elly", "LNAME":"Roger"}
   * @example {"FNAME":"Elly","LNAME":"Roger"}
   */
  attributes?: object;
  /**
   * Set this field to blacklist the contact for emails (emailBlacklisted = true)
   * @example false
   */
  emailBlacklisted?: boolean;
  /**
   * Set this field to blacklist the contact for SMS (smsBlacklisted = true)
   * @example false
   */
  smsBlacklisted?: boolean;
  /** Ids of the lists to add the contact to */
  listIds?: number[];
  /**
   * Facilitate to update the existing contact in the same request (updateEnabled = true)
   * @default false
   * @example false
   */
  updateEnabled?: boolean;
  /** transactional email forbidden sender for contact. Use only for email Contact ( only available if updateEnabled = true ) */
  smtpBlacklistSender?: string[];
}

export interface UpdateContact {
  /**
   * Pass the set of attributes to be updated. These attributes must be present in your account. To update existing email address of a contact with the new one please pass EMAIL in attribtes. For example, `{ "EMAIL":"newemail@domain.com", "FNAME":"Ellie", "LNAME":"Roger"}`. Keep in mind transactional attributes can be updated the same way as normal attributes. Mobile Number in "SMS" field should be passed with proper country code. For example {"SMS":"+91xxxxxxxxxx"} or {"SMS":"0091xxxxxxxxxx"}
   * @example {"EMAIL":"newemail@domain.com","FNAME":"Ellie","LNAME":"Roger"}
   */
  attributes?: object;
  /**
   * Set/unset this field to blacklist/allow the contact for emails (emailBlacklisted = true)
   * @example false
   */
  emailBlacklisted?: boolean;
  /**
   * Set/unset this field to blacklist/allow the contact for SMS (smsBlacklisted = true)
   * @example true
   */
  smsBlacklisted?: boolean;
  /** Ids of the lists to add the contact to */
  listIds?: number[];
  /** Ids of the lists to remove the contact from */
  unlinkListIds?: number[];
  /** transactional email forbidden sender for contact. Use only for email Contact */
  smtpBlacklistSender?: string[];
}

export interface CreateAttribute {
  /**
   * Value of the attribute. Use only if the attribute's category is 'calculated' or 'global'
   * @example "COUNT[BLACKLISTED,BLACKLISTED,<,NOW()]"
   */
  value?: string;
  /** List of values and labels that the attribute can take. Use only if the attribute's category is "category". For example, [{"value":1, "label":"male"}, {"value":2, "label":"female"}] */
  enumeration?: {
    /**
     * Id of the value
     * @example 1
     */
    value: number;
    /**
     * Label of the value
     * @example "Women"
     */
    label: string;
  }[];
  /**
   * Type of the attribute. Use only if the attribute's category is 'normal', 'category' or 'transactional' ( type 'boolean' is only available if the category is 'normal' attribute, type 'id' is only available if the category is 'transactional' attribute & type 'category' is only available if the category is 'category' attribute )
   * @example "text"
   */
  type?: "text" | "date" | "float" | "boolean" | "id" | "category";
}

export interface UpdateAttribute {
  /**
   * Value of the attribute to update. Use only if the attribute's category is 'calculated' or 'global'
   * @example "COUNT[BLACKLISTED,BLACKLISTED,<,NOW()]"
   */
  value?: string;
  /** List of the values and labels that the attribute can take. Use only if the attribute's category is "category". For example, [{"value":1, "label":"male"}, {"value":2, "label":"female"}] */
  enumeration?: {
    /**
     * Id of the value
     * @example 1
     */
    value: number;
    /**
     * Label of the value
     * @example "Men"
     */
    label: string;
  }[];
}

export interface CreateList {
  /**
   * Name of the list
   * @example "Magento Customer - ES"
   */
  name: string;
  /**
   * Id of the parent folder in which this list is to be created
   * @format int64
   * @example 2
   */
  folderId: number;
}

export interface UpdateList {
  /**
   * Name of the list. Either of the two parameters (name, folderId) can be updated at a time.
   * @example "Magento Customer - ES"
   */
  name?: string;
  /**
   * Id of the folder in which the list is to be moved. Either of the two parameters (name, folderId) can be updated at a time.
   * @format int64
   * @example 2
   */
  folderId?: number;
}

export interface RequestContactExport {
  /** List of all the attributes that you want to export. These attributes must be present in your contact database. For example, ['fname', 'lname', 'email']. */
  exportAttributes?: string[];
  /**
   * This attribute has been deprecated and will be removed by January 1st, 2021. Only one of the two filter options (contactFilter or customContactFilter) can be passed in the request. Set the filter for the contacts to be exported. For example, {"blacklisted":true} will export all the blacklisted contacts.
   * @example {"blacklisted":true,"listid.id":32}
   */
  contactFilter?: object;
  /** Only one of the two filter options (contactFilter or customContactFilter) can be passed in the request. Set the filter for the contacts to be exported. */
  customContactFilter?: {
    /** Mandatory if neither actionForEmailCampaigns nor actionForSmsCampaigns is passed. This will export the contacts on the basis of provided action applied on contacts as per the list id. * allContacts - Fetch the list of all contacts for a particular list. * subscribed & unsubscribed - Fetch the list of subscribed / unsubscribed (blacklisted via any means) contacts for a particular list. * unsubscribedPerList - Fetch the list of contacts that are unsubscribed from a particular list only. */
    actionForContacts?: "allContacts" | "subscribed" | "unsubscribed" | "unsubscribedPerList";
    /** Mandatory if neither actionForContacts nor actionForSmsCampaigns is passed. This will export the contacts on the basis of provided action applied on email campaigns. * openers & nonOpeners - emailCampaignId is mandatory. Fetch the list of readers / non-readers for a particular email campaign. * clickers & nonClickers - emailCampaignId is mandatory. Fetch the list of clickers / non-clickers for a particular email campaign. * unsubscribed - emailCampaignId is mandatory. Fetch the list of all unsubscribed (blacklisted via any means) contacts for a particular email campaign. * hardBounces & softBounces - emailCampaignId is optional. Fetch the list of hard bounces / soft bounces for a particular / all email campaign(s). */
    actionForEmailCampaigns?:
      | "openers"
      | "nonOpeners"
      | "clickers"
      | "nonClickers"
      | "unsubscribed"
      | "hardBounces"
      | "softBounces";
    /** Mandatory if neither actionForContacts nor actionForEmailCampaigns is passed. This will export the contacts on the basis of provided action applied on sms campaigns. * unsubscribed - Fetch the list of all unsubscribed (blacklisted via any means) contacts for all / particular sms campaigns. * hardBounces & softBounces - Fetch the list of hard bounces / soft bounces for all / particular sms campaigns. */
    actionForSmsCampaigns?: "hardBounces" | "softBounces" | "unsubscribed";
    /**
     * Mandatory if actionForContacts is passed, ignored otherwise. Id of the list for which the corresponding action shall be applied in the filter.
     * @format int64
     * @example 2
     */
    listId?: number;
    /**
     * Considered only if actionForEmailCampaigns is passed, ignored otherwise. Mandatory if action is one of the following - openers, nonOpeners, clickers, nonClickers, unsubscribed. The id of the email campaign for which the corresponding action shall be applied in the filter.
     * @format int64
     * @example 12
     */
    emailCampaignId?: number;
    /**
     * Considered only if actionForSmsCampaigns is passed, ignored otherwise. The id of sms campaign for which the corresponding action shall be applied in the filter.
     * @format int64
     * @example 12
     */
    smsCampaignId?: number;
  };
  /**
   * Webhook that will be called once the export process is finished. For reference, https://help.sendinblue.com/hc/en-us/articles/360007666479
   * @format url
   * @example "http://requestb.in/173lyyx1"
   */
  notifyUrl?: string;
}

export interface RequestContactImport {
  /**
   * Mandatory if fileBody is not defined. URL of the file to be imported (no local file). Possible file formats: .txt, .csv
   * @format url
   * @example "https://importfile.domain.com"
   */
  fileUrl?: string;
  /**
   * Mandatory if fileUrl is not defined. CSV content to be imported. Use semicolon to separate multiple attributes. Maximum allowed file body size is 10MB . However we recommend a safe limit of around 8 MB to avoid the issues caused due to increase of file body size while parsing. Please use fileUrl instead to import bigger files.
   * @example "NAME;SURNAME;EMAIL\n"Smith";"John";"john.smith@example.com"\n"Roger";"Ellie";"ellie36@example.com"
   */
  fileBody?: string;
  /** Mandatory if newList is not defined. Ids of the lists in which the contacts shall be imported. For example, [2, 4, 7]. */
  listIds?: number[];
  /**
   * URL that will be called once the import process is finished. For reference, https://help.sendinblue.com/hc/en-us/articles/360007666479
   * @format url
   * @example "http://requestb.in/173lyyx1"
   */
  notifyUrl?: string;
  /** To create a new list and import the contacts into it, pass the listName and an optional folderId. */
  newList?: {
    /**
     * List with listName will be created first and users will be imported in it (Mandatory if listIds is empty).
     * @example "ContactImport - 2017-05"
     */
    listName?: string;
    /**
     * Id of the folder where this new list shall be created (Mandatory if listName is not empty).
     * @format int64
     * @example 2
     */
    folderId?: number;
  };
  /**
   * To blacklist all the contacts for email
   * @default false
   * @example false
   */
  emailBlacklist?: boolean;
  /**
   * To disable email notification
   * @default false
   * @example false
   */
  disableNotification?: boolean;
  /**
   * To blacklist all the contacts for sms
   * @default false
   * @example false
   */
  smsBlacklist?: boolean;
  /**
   * To facilitate the choice to update the existing contacts
   * @default true
   * @example true
   */
  updateExistingContacts?: boolean;
  /**
   * To facilitate the choice to erase any attribute of the existing contacts with empty value. emptyContactsAttributes = true means the empty fields in your import will erase any attribute that currently contain data in SendinBlue, & emptyContactsAttributes = false means the empty fields will not affect your existing data ( only available if `updateExistingContacts` set to true )
   * @default false
   * @example true
   */
  emptyContactsAttributes?: boolean;
}

export interface CreateSmsCampaign {
  /**
   * Name of the campaign
   * @example "Spring Promo Code"
   */
  name: string;
  /**
   * Name of the sender. **The number of characters is limited to 11 for alphanumeric characters and 15 for numeric characters**
   * @maxLength 15
   * @example "MyShop"
   */
  sender: string;
  /**
   * Content of the message. The maximum characters used per SMS is 160, if used more than that, it will be counted as more than one SMS
   * @example "Get a discount by visiting our NY store and saying : Happy Spring !"
   */
  content: string;
  recipients?: {
    /** Lists Ids to send the campaign to. REQUIRED if scheduledAt is not empty */
    listIds: number[];
    /** List ids which have to be excluded from a campaign */
    exclusionListIds?: number[];
  };
  /**
   * UTC date-time on which the campaign has to run (YYYY-MM-DDTHH:mm:ss.SSSZ). Prefer to pass your timezone in date-time format for accurate result.
   * @format date-time
   * @example "2017-05-05T12:30:00+02:00"
   */
  scheduledAt?: string;
}

export interface UpdateSmsCampaign {
  /**
   * Name of the campaign
   * @example "Spring Promo Code"
   */
  name?: string;
  /**
   * Name of the sender. **The number of characters is limited to 11 for alphanumeric characters and 15 for numeric characters**
   * @maxLength 15
   * @example "MyShop"
   */
  sender?: string;
  /**
   * Content of the message. The maximum characters used per SMS is 160, if used more than that, it will be counted as more than one SMS
   * @example "Get a discount by visiting our NY store and saying : Happy Spring!"
   */
  content?: string;
  recipients?: {
    /** Lists Ids to send the campaign to. REQUIRED if scheduledAt is not empty */
    listIds: number[];
    /** List ids which have to be excluded from a campaign */
    exclusionListIds?: number[];
  };
  /**
   * UTC date-time on which the campaign has to run (YYYY-MM-DDTHH:mm:ss.SSSZ). Prefer to pass your timezone in date-time format for accurate result.
   * @format date-time
   * @example "2017-05-05T12:30:00+02:00"
   */
  scheduledAt?: string;
}

export interface SendTransacSms {
  /**
   * Name of the sender. **The number of characters is limited to 11 for alphanumeric characters and 15 for numeric characters**
   * @maxLength 15
   * @example "MyShop"
   */
  sender: string;
  /**
   * Mobile number to send SMS with the country code
   * @example "33689965433"
   */
  recipient: string;
  /**
   * Content of the message. If more than 160 characters long, will be sent as multiple text messages
   * @example "Enter this code:CCJJG8 to validate your account"
   */
  content: string;
  /**
   * Type of the SMS. Marketing SMS messages are those sent typically with marketing content. Transactional SMS messages are sent to individuals and are triggered in response to some action, such as a sign-up, purchase, etc.
   * @default "transactional"
   * @example "marketing"
   */
  type?: "transactional" | "marketing";
  /**
   * Tag of the message
   * @example "accountValidation"
   */
  tag?: string;
  /**
   * Webhook to call for each event triggered by the message (delivered etc.)
   * @format url
   * @example "http://requestb.in/173lyyx1"
   */
  webUrl?: string;
  /**
   * A recognizable prefix will ensure your audience knows who you are.**Mandatory for U.S. Carriers**.This will be added as your Brand Name before the message content and will be included in content,**Prefer to verify maximum length of 160 characters including this prefix to avoid multiple sending of same sms**.
   * @example "MyCompany"
   */
  organisationPrefix?: string;
}

export interface SendTestEmail {
  /** List of the email addresses of the recipients whom you wish to send the test mail. If left empty, the test mail will be sent to your entire test list. */
  emailTo?: string[];
}

export interface SendTestSms {
  /**
   * Mobile number of the recipient with the country code. This number must belong to one of your contacts in SendinBlue account and must not be blacklisted
   * @example "33689965433"
   */
  phoneNumber?: string;
}

export interface GetTransacAggregatedSmsReport {
  /**
   * Time frame of the report
   * @example "2016-09-08|2017-04-06"
   */
  range: string;
  /**
   * Number of requests for the timeframe
   * @format int64
   * @example 263
   */
  requests: number;
  /**
   * Number of delivered SMS for the timeframe
   * @format int64
   * @example 249
   */
  delivered: number;
  /**
   * Number of hardbounces for the timeframe
   * @format int64
   * @example 1
   */
  hardBounces: number;
  /**
   * Number of softbounces for the timeframe
   * @format int64
   * @example 4
   */
  softBounces: number;
  /**
   * Number of blocked contact for the timeframe
   * @format int64
   * @example 2
   */
  blocked: number;
  /**
   * Number of unsubscription for the timeframe
   * @format int64
   * @example 6
   */
  unsubscribed: number;
  /**
   * Number of answered SMS for the timeframe
   * @format int64
   * @example 12
   */
  replied: number;
  /**
   * Number of accepted for the timeframe
   * @format int64
   * @example 252
   */
  accepted: number;
  /**
   * Number of rejected for the timeframe
   * @format int64
   * @example 8
   */
  rejected: number;
}

export interface GetTransacSmsReport {
  reports?: {
    /**
     * Date for which statistics are retrieved
     * @format date
     * @example "2017-03-17"
     */
    date: string;
    /**
     * Number of requests for the date
     * @format int64
     * @example 87
     */
    requests: number;
    /**
     * Number of delivered SMS for the date
     * @format int64
     * @example 85
     */
    delivered: number;
    /**
     * Number of hardbounces for the date
     * @format int64
     * @example 1
     */
    hardBounces: number;
    /**
     * Number of softbounces for the date
     * @format int64
     * @example 1
     */
    softBounces: number;
    /**
     * Number of blocked contact for the date
     * @format int64
     * @example 0
     */
    blocked: number;
    /**
     * Number of unsubscription for the date
     * @format int64
     * @example 1
     */
    unsubscribed: number;
    /**
     * Number of answered SMS for the date
     * @format int64
     * @example 2
     */
    replied: number;
    /**
     * Number of accepted for the date
     * @format int64
     * @example 85
     */
    accepted: number;
    /**
     * Number of rejected for the date
     * @format int64
     * @example 1
     */
    rejected: number;
  }[];
}

export interface GetIp {
  /**
   * ID of the dedicated IP
   * @format int64
   * @example 3
   */
  id: number;
  /**
   * Dedicated IP
   * @example "123.65.8.22"
   */
  ip: string;
  /**
   * Status of the IP (true=active, false=inactive)
   * @example true
   */
  active: boolean;
  /**
   * Domain associated to the IP
   * @example "mailing.myshop.com"
   */
  domain: string;
}

export interface GetIpsFromSender {
  /** Dedicated IP(s) linked to a sender */
  ips: GetIpFromSender[];
}

export interface GetIps {
  /** Dedicated IP(s) available on your account */
  ips: GetIp[];
}

export interface GetIpFromSender {
  /**
   * ID of the dedicated IP
   * @format int64
   * @example 3
   */
  id: number;
  /**
   * Dedicated IP
   * @example "123.65.8.22"
   */
  ip: string;
  /**
   * Domain associated to the IP
   * @example "mailing.myshop.dom"
   */
  domain: string;
  /**
   * Weight of the IP
   * @format int64
   * @example 75
   */
  weight: number;
}

export interface ManageIp {
  /**
   * Dedicated ID
   * @example "123.65.8.22"
   */
  ip?: string;
}

export interface SendEmail {
  /** List of the email addresses of the recipients. For example, ['abc@example.com', 'asd@example.com']. */
  emailTo: string[];
  /** List of the email addresses of the recipients in bcc */
  emailBcc?: string[];
  /** List of the email addresses of the recipients in cc */
  emailCc?: string[];
  /**
   * Email address which shall be used by campaign recipients to reply back
   * @format email
   * @example "support@myshop.com"
   */
  replyTo?: string;
  /**
   * Absolute url of the attachment (no local file). Extension allowed: xlsx, xls, ods, docx, docm, doc, csv, pdf, txt, gif, jpg, jpeg, png, tif, tiff, rtf, bmp, cgm, css, shtml, html, htm, zip, xml, ppt, pptx, tar, ez, ics, mobi, msg, pub and eps
   * @format url
   * @example "https://attachment.domain.com"
   */
  attachmentUrl?: string;
  /** Pass the list of content (base64 encoded) and name of the attachment. For example, [{"content":"base64 encoded content 1", "name":"attcahment1"}, {"content":"base64 encoded content 2", "name":"attcahment2"}]. */
  attachment?: {
    /**
     * Base64 encoded chunk data of the attachment generated on the fly
     * @format byte
     * @example "b3JkZXIucGRm"
     */
    content: string;
    /**
     * Required for content. Name of the attachment
     * @example "myAttachment.png"
     */
    name: string;
  }[];
  /**
   * Pass the set of headers that shall be sent along the mail headers in the original email. 'sender.ip' header can be set (only for dedicated ip users) to mention the IP to be used for sending transactional emails. Headers are allowed in `This-Case-Only` (i.e. words separated by hyphen with first letter of each word in capital letter), they will be converted to such case styling if not in this format in the request payload. For example, {"Content-Type":"text/html", "charset":"iso-8859-1", "sender.ip":"1.2.3.4"}
   * @example {"Content-Type":"text/html","charset":"iso-8859-1","sender.ip":"1.2.3.4"}
   */
  headers?: object;
  /**
   * Pass the set of attributes to customize the template. For example, {"FNAME":"Joe", "LNAME":"Doe"}
   * @example {"FNAME":"Joe","LNAME":"Doe"}
   */
  attributes?: object;
  /** Tag your emails to find them more easily */
  tags?: string[];
}

export interface GetTransacEmailContent {
  /**
   * Email address to which transactional email has been sent
   * @format email
   * @example "abc@example.com"
   */
  email: string;
  /**
   * Subject of the sent email
   * @example "Summer Camp"
   */
  subject: string;
  /**
   * Id of the template
   * @format int64
   * @example 2
   */
  templateId?: number;
  /**
   * Date on which transactional email was sent
   * @format date-time
   * @example "2017-03-12T12:30:00Z"
   */
  date: string;
  /** Series of events which occurred on the transactional email */
  events: {
    /**
     * Name of the event that occurred on the sent email
     * @example "delivered"
     */
    name: string;
    /**
     * Time at which the event occurred
     * @format date-time
     * @example "2017-03-12T12:30:00Z"
     */
    time: string;
  }[];
  /**
   * Actual content of the transactional email that has been sent
   * @example "<!DOCTYPE html> <html> <body> <h1>Greetings from the team</h1> <p>This is the actual html content sent</p> </body> </html>"
   */
  body: string;
  /**
   * Count of the attachments that were sent in the email
   * @format int64
   * @example 2
   */
  attachmentCount: number;
}

export interface GetTransacEmailsList {
  transactionalEmails?: {
    /**
     * Email address to which transactional email has been sent
     * @format email
     * @example "john.smith@example.com"
     */
    email: string;
    /**
     * Subject of the sent email
     * @example "Summer Camp"
     */
    subject: string;
    /**
     * Id of the template
     * @format int64
     * @example 2
     */
    templateId?: number;
    /**
     * Message Id of the sent email
     * @example "<201798300811.5700093@relay.domain.com>"
     */
    messageId: string;
    /**
     * Unique id of the email sent to a particular contact
     * @example "5a78c-209ok98262910-s99a341"
     */
    uuid: string;
    /**
     * Date on which transactional email was sent
     * @format date-time
     * @example "2017-03-12T12:30:00Z"
     */
    date: string;
    /**
     * Email address of the sender from which the email was sent
     * @format email
     * @example "diana.doe@example.com"
     */
    from?: string;
    /** Tags used for your email */
    tags?: string[];
  }[];
}

/** Percentage of a particular event for both versions */
export interface AbTestVersionStats {
  /**
   * percentage of an event for version A
   * @example "50%"
   */
  "Version A": string;
  /**
   * percentage of an event for version B
   * @example "50%"
   */
  "Version B": string;
}

/** Information on clicked links for a particular version */
export type AbTestVersionClicks = {
  /**
   * URL of the link
   * @example "https://facbook.com/versionA"
   */
  link: string;
  /**
   * Number of times a link is clicked
   * @format int64
   * @example 3
   */
  clicksCount: number;
  /**
   * Percentage of clicks of link with respect to total clicks
   * @example "40%"
   */
  clickRate: string;
}[];

export interface BlockDomain {
  /**
   * name of the domain to be blocked
   * @example "example.com"
   */
  domain: string;
}

/** list of blocked domains */
export interface GetBlockedDomains {
  /** List of all blocked domains */
  domains: string[];
}

import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, HeadersDefaults, ResponseType } from "axios";
import axios from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "https://api.sendinblue.com/v3" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method && this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== "string") {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title SendinBlue API
 * @version 3.0.0
 * @license MIT (http://opensource.org/licenses/MIT)
 * @baseUrl https://api.sendinblue.com/v3
 * @contact Sendinblue Support <contact@sendinblue.com> (https://account.sendinblue.com/support)
 *
 * SendinBlue provide a RESTFul API that can be used with any languages. With this API, you will be able to :
 *   - Manage your campaigns and get the statistics
 *   - Manage your contacts
 *   - Send transactional Emails and SMS
 *   - and much more...
 *
 * You can download our wrappers at https://github.com/orgs/sendinblue
 *
 * **Possible responses**
 *   | Code | Message |
 *   | :-------------: | ------------- |
 *   | 200  | OK. Successful Request  |
 *   | 201  | OK. Successful Creation |
 *   | 202  | OK. Request accepted |
 *   | 204  | OK. Successful Update/Deletion  |
 *   | 400  | Error. Bad Request  |
 *   | 401  | Error. Authentication Needed  |
 *   | 402  | Error. Not enough credit, plan upgrade needed  |
 *   | 403  | Error. Permission denied  |
 *   | 404  | Error. Object does not exist |
 *   | 405  | Error. Method not allowed  |
 *   | 406  | Error. Not Acceptable  |
 */
export class Brevo<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  emailCampaigns = {
    /**
     * No description
     *
     * @tags Email Campaigns
     * @name GetEmailCampaigns
     * @summary Return all your created email campaigns
     * @request GET:/emailCampaigns
     * @secure
     */
    getEmailCampaigns: (
      query?: {
        /** Filter on the type of the campaigns */
        type?: "classic" | "trigger";
        /** Filter on the status of the campaign */
        status?: "suspended" | "archive" | "sent" | "queued" | "draft" | "inProcess";
        /** Filter on type of the statistics required. Example **globalStats** value will only fetch globalStats info of the campaign in returned response. */
        statistics?: "globalStats" | "linksStats" | "statsByDomain";
        /**
         * Mandatory if endDate is used. Starting (urlencoded) UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ) to filter the sent email campaigns. Prefer to pass your timezone in date-time format for accurate result ( only available if either 'status' not passed and if passed is set to 'sent' )
         * @format date-time
         */
        startDate?: string;
        /**
         * Mandatory if startDate is used. Ending (urlencoded) UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ) to filter the sent email campaigns. Prefer to pass your timezone in date-time format for accurate result ( only available if either 'status' not passed and if passed is set to 'sent' )
         * @format date-time
         */
        endDate?: string;
        /**
         * Number of documents per page
         * @format int64
         * @max 1000
         * @default 500
         */
        limit?: number;
        /**
         * Index of the first document in the page
         * @format int64
         * @default 0
         */
        offset?: number;
        /** Use this flag to exclude htmlContent from the response body. If set to **true**, htmlContent field will be returned as empty string in the response body */
        excludeHtmlContent?: true | false;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetEmailCampaigns, ErrorModel>({
        path: `/emailCampaigns`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Email Campaigns
     * @name CreateEmailCampaign
     * @summary Create an email campaign
     * @request POST:/emailCampaigns
     * @secure
     */
    createEmailCampaign: (emailCampaigns: CreateEmailCampaign, params: RequestParams = {}) =>
      this.request<CreateModel, ErrorModel>({
        path: `/emailCampaigns`,
        method: "POST",
        body: emailCampaigns,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Email Campaigns
     * @name GetEmailCampaign
     * @summary Get an email campaign report
     * @request GET:/emailCampaigns/{campaignId}
     * @secure
     */
    getEmailCampaign: (
      campaignId: number,
      query?: {
        /** Filter on type of the statistics required. Example **globalStats** value will only fetch globalStats info of the campaign in returned response. */
        statistics?: "globalStats" | "linksStats" | "statsByDomain" | "statsByDevice" | "statsByBrowser";
      },
      params: RequestParams = {},
    ) =>
      this.request<GetEmailCampaign, ErrorModel>({
        path: `/emailCampaigns/${campaignId}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Email Campaigns
     * @name UpdateEmailCampaign
     * @summary Update an email campaign
     * @request PUT:/emailCampaigns/{campaignId}
     * @secure
     */
    updateEmailCampaign: (campaignId: number, emailCampaign: UpdateEmailCampaign, params: RequestParams = {}) =>
      this.request<void, ErrorModel>({
        path: `/emailCampaigns/${campaignId}`,
        method: "PUT",
        body: emailCampaign,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Email Campaigns
     * @name DeleteEmailCampaign
     * @summary Delete an email campaign
     * @request DELETE:/emailCampaigns/{campaignId}
     * @secure
     */
    deleteEmailCampaign: (campaignId: number, params: RequestParams = {}) =>
      this.request<void, ErrorModel>({
        path: `/emailCampaigns/${campaignId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Email Campaigns
     * @name SendEmailCampaignNow
     * @summary Send an email campaign immediately, based on campaignId
     * @request POST:/emailCampaigns/{campaignId}/sendNow
     * @secure
     */
    sendEmailCampaignNow: (campaignId: number, params: RequestParams = {}) =>
      this.request<void, ErrorModel>({
        path: `/emailCampaigns/${campaignId}/sendNow`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Email Campaigns
     * @name SendTestEmail
     * @summary Send an email campaign to your test list
     * @request POST:/emailCampaigns/{campaignId}/sendTest
     * @secure
     */
    sendTestEmail: (campaignId: number, emailTo: SendTestEmail, params: RequestParams = {}) =>
      this.request<void, PostSendFailed | ErrorModel>({
        path: `/emailCampaigns/${campaignId}/sendTest`,
        method: "POST",
        body: emailTo,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Email Campaigns
     * @name UpdateCampaignStatus
     * @summary Update an email campaign status
     * @request PUT:/emailCampaigns/{campaignId}/status
     * @secure
     */
    updateCampaignStatus: (campaignId: number, status: UpdateCampaignStatus, params: RequestParams = {}) =>
      this.request<void, ErrorModel>({
        path: `/emailCampaigns/${campaignId}/status`,
        method: "PUT",
        body: status,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description A PDF will be sent to the specified email addresses
     *
     * @tags Email Campaigns
     * @name SendReport
     * @summary Send the report of a campaign
     * @request POST:/emailCampaigns/{campaignId}/sendReport
     * @secure
     */
    sendReport: (campaignId: number, sendReport: SendReport, params: RequestParams = {}) =>
      this.request<void, ErrorModel>({
        path: `/emailCampaigns/${campaignId}/sendReport`,
        method: "POST",
        body: sendReport,
        secure: true,
        ...params,
      }),

    /**
     * @description Obtain winning version of an A/B test email campaign
     *
     * @tags Email Campaigns
     * @name GetAbTestCampaignResult
     * @summary Get an A/B test email campaign results
     * @request GET:/emailCampaigns/{campaignId}/abTestCampaignResult
     * @secure
     */
    getAbTestCampaignResult: (campaignId: number, params: RequestParams = {}) =>
      this.request<AbTestCampaignResult, ErrorModel>({
        path: `/emailCampaigns/${campaignId}/abTestCampaignResult`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get a unique URL to share & import an email template from one Sendinblue account to another.
     *
     * @tags Email Campaigns
     * @name GetSharedTemplateUrl
     * @summary Get a shared template url
     * @request GET:/emailCampaigns/{campaignId}/sharedUrl
     * @secure
     */
    getSharedTemplateUrl: (campaignId: number, params: RequestParams = {}) =>
      this.request<GetSharedTemplateUrl, ErrorModel>({
        path: `/emailCampaigns/${campaignId}/sharedUrl`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Email Campaigns
     * @name EmailExportRecipients
     * @summary Export the recipients of an email campaign
     * @request POST:/emailCampaigns/{campaignId}/exportRecipients
     * @secure
     */
    emailExportRecipients: (campaignId: number, recipientExport: EmailExportRecipients, params: RequestParams = {}) =>
      this.request<CreatedProcessId, ErrorModel>({
        path: `/emailCampaigns/${campaignId}/exportRecipients`,
        method: "POST",
        body: recipientExport,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Email Campaigns
     * @name UploadImageToGallery
     * @summary Upload an image to your account's image gallery
     * @request POST:/emailCampaigns/images
     * @secure
     */
    uploadImageToGallery: (uploadImage: UploadImageToGallery, params: RequestParams = {}) =>
      this.request<void, ErrorModel>({
        path: `/emailCampaigns/images`,
        method: "POST",
        body: uploadImage,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  smtp = {
    /**
     * No description
     *
     * @tags SMTP
     * @name SendTransacEmail
     * @summary Send a transactional email
     * @request POST:/smtp/email
     * @secure
     */
    sendTransacEmail: (sendSmtpEmail: SendSmtpEmail, params: RequestParams = {}) =>
      this.request<CreateSmtpEmail, ErrorModel>({
        path: `/smtp/email`,
        method: "POST",
        body: sendSmtpEmail,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description This endpoint will show the list of emails for past 30 days by default. To retrieve emails before that time, please pass startDate and endDate in query filters.
     *
     * @tags SMTP
     * @name GetTransacEmailsList
     * @summary Get the list of transactional emails on the basis of allowed filters
     * @request GET:/smtp/emails
     * @secure
     */
    getTransacEmailsList: (
      query?: {
        /** Mandatory if templateId and messageId are not passed in query filters. Email address to which transactional email has been sent. */
        email?: string;
        /**
         * Mandatory if email and messageId are not passed in query filters. Id of the template that was used to compose transactional email.
         * @format int64
         */
        templateId?: number;
        /** Mandatory if templateId and email are not passed in query filters. Message ID of the transactional email sent. */
        messageId?: string;
        /**
         * Mandatory if endDate is used. Starting date (YYYY-MM-DD) from which you want to fetch the list. Maximum time period that can be selected is one month.
         * @format date
         */
        startDate?: string;
        /**
         * Mandatory if startDate is used. Ending date (YYYY-MM-DD) till which you want to fetch the list. Maximum time period that can be selected is one month.
         * @format date
         */
        endDate?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetTransacEmailsList, ErrorModel>({
        path: `/smtp/emails`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SMTP
     * @name GetTransacEmailContent
     * @summary Get the personalized content of a sent transactional email
     * @request GET:/smtp/emails/{uuid}
     * @secure
     */
    getTransacEmailContent: (uuid: string, params: RequestParams = {}) =>
      this.request<GetTransacEmailContent, any>({
        path: `/smtp/emails/${uuid}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SMTP
     * @name DeleteSmtp
     * @summary Delete an SMTP transactional log
     * @request DELETE:/smtp/log/{messageId}
     * @secure
     */
    deleteSmtp: (messageId: string, params: RequestParams = {}) =>
      this.request<void, ErrorModel>({
        path: `/smtp/log/${messageId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags SMTP
     * @name GetSmtpTemplates
     * @summary Get the list of email templates
     * @request GET:/smtp/templates
     * @secure
     */
    getSmtpTemplates: (
      query?: {
        /** Filter on the status of the template. Active = true, inactive = false */
        templateStatus?: boolean;
        /**
         * Number of documents returned per page
         * @format int64
         * @max 1000
         * @default 50
         */
        limit?: number;
        /**
         * Index of the first document in the page
         * @format int64
         * @default 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetSmtpTemplates, ErrorModel>({
        path: `/smtp/templates`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SMTP
     * @name CreateSmtpTemplate
     * @summary Create an email template
     * @request POST:/smtp/templates
     * @secure
     */
    createSmtpTemplate: (smtpTemplate: CreateSmtpTemplate, params: RequestParams = {}) =>
      this.request<CreateModel, ErrorModel>({
        path: `/smtp/templates`,
        method: "POST",
        body: smtpTemplate,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SMTP
     * @name GetSmtpTemplate
     * @summary Returns the template information
     * @request GET:/smtp/templates/{templateId}
     * @secure
     */
    getSmtpTemplate: (templateId: number, params: RequestParams = {}) =>
      this.request<GetSmtpTemplateOverview, ErrorModel>({
        path: `/smtp/templates/${templateId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SMTP
     * @name UpdateSmtpTemplate
     * @summary Update an email template
     * @request PUT:/smtp/templates/{templateId}
     * @secure
     */
    updateSmtpTemplate: (templateId: number, smtpTemplate: UpdateSmtpTemplate, params: RequestParams = {}) =>
      this.request<void, ErrorModel>({
        path: `/smtp/templates/${templateId}`,
        method: "PUT",
        body: smtpTemplate,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags SMTP
     * @name DeleteSmtpTemplate
     * @summary Delete an inactive email template
     * @request DELETE:/smtp/templates/{templateId}
     * @secure
     */
    deleteSmtpTemplate: (templateId: number, params: RequestParams = {}) =>
      this.request<void, ErrorModel>({
        path: `/smtp/templates/${templateId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags SMTP
     * @name SendTestTemplate
     * @summary Send a template to your test list
     * @request POST:/smtp/templates/{templateId}/sendTest
     * @secure
     */
    sendTestTemplate: (templateId: number, sendTestEmail: SendTestEmail, params: RequestParams = {}) =>
      this.request<void, PostSendFailed | ErrorModel>({
        path: `/smtp/templates/${templateId}/sendTest`,
        method: "POST",
        body: sendTestEmail,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags SMTP
     * @name GetAggregatedSmtpReport
     * @summary Get your transactional email activity aggregated over a period of time
     * @request GET:/smtp/statistics/aggregatedReport
     * @secure
     */
    getAggregatedSmtpReport: (
      query?: {
        /** Mandatory if endDate is used. Starting date of the report (YYYY-MM-DD). Must be lower than equal to endDate */
        startDate?: string;
        /** Mandatory if startDate is used. Ending date of the report (YYYY-MM-DD). Must be greater than equal to startDate */
        endDate?: string;
        /** Number of days in the past including today (positive integer). Not compatible with 'startDate' and 'endDate' */
        days?: number;
        /** Tag of the emails */
        tag?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetAggregatedReport, ErrorModel>({
        path: `/smtp/statistics/aggregatedReport`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SMTP
     * @name GetSmtpReport
     * @summary Get your transactional email activity aggregated per day
     * @request GET:/smtp/statistics/reports
     * @secure
     */
    getSmtpReport: (
      query?: {
        /**
         * Number of documents returned per page
         * @format int64
         * @max 30
         * @default 10
         */
        limit?: number;
        /**
         * Index of the first document on the page
         * @format int64
         * @default 0
         */
        offset?: number;
        /** Mandatory if endDate is used. Starting date of the report (YYYY-MM-DD) */
        startDate?: string;
        /** Mandatory if startDate is used. Ending date of the report (YYYY-MM-DD) */
        endDate?: string;
        /** Number of days in the past including today (positive integer). Not compatible with 'startDate' and 'endDate' */
        days?: number;
        /** Tag of the emails */
        tag?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetReports, ErrorModel>({
        path: `/smtp/statistics/reports`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SMTP
     * @name GetEmailEventReport
     * @summary Get all your transactional email activity (unaggregated events)
     * @request GET:/smtp/statistics/events
     * @secure
     */
    getEmailEventReport: (
      query?: {
        /**
         * Number limitation for the result returned
         * @format int64
         * @max 100
         * @default 50
         */
        limit?: number;
        /**
         * Beginning point in the list to retrieve from.
         * @format int64
         * @default 0
         */
        offset?: number;
        /** Mandatory if endDate is used. Starting date of the report (YYYY-MM-DD). Must be lower than equal to endDate */
        startDate?: string;
        /** Mandatory if startDate is used. Ending date of the report (YYYY-MM-DD). Must be greater than equal to startDate */
        endDate?: string;
        /** Number of days in the past including today (positive integer). Not compatible with 'startDate' and 'endDate' */
        days?: number;
        /**
         * Filter the report for a specific email addresses
         * @format email
         */
        email?: string;
        /** Filter the report for a specific event type */
        event?:
          | "bounces"
          | "hardBounces"
          | "softBounces"
          | "delivered"
          | "spam"
          | "requests"
          | "opened"
          | "clicks"
          | "invalid"
          | "deferred"
          | "blocked"
          | "unsubscribed";
        /** Filter the report for tags (serialized and urlencoded array) */
        tags?: string;
        /** Filter on a specific message id */
        messageId?: string;
        /**
         * Filter on a specific template id
         * @format int64
         */
        templateId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetEmailEventReport, ErrorModel>({
        path: `/smtp/statistics/events`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SMTP
     * @name BlockedContactsDelete
     * @summary Unblock or resubscribe a transactional contact
     * @request DELETE:/smtp/blockedContacts/{email}
     * @secure
     */
    blockedContactsDelete: (email: string, params: RequestParams = {}) =>
      this.request<void, ErrorModel>({
        path: `/smtp/blockedContacts/${email}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags SMTP
     * @name GetTransacBlockedContacts
     * @summary Get the list of blocked or unsubscribed transactional contacts
     * @request GET:/smtp/blockedContacts
     * @secure
     */
    getTransacBlockedContacts: (
      query?: {
        /** Mandatory if endDate is used. Starting date (YYYY-MM-DD) from which you want to fetch the blocked or unsubscribed contacts */
        startDate?: string;
        /** Mandatory if startDate is used. Ending date (YYYY-MM-DD) till which you want to fetch the blocked or unsubscribed contacts */
        endDate?: string;
        /**
         * Number of documents returned per page
         * @format int64
         * @max 100
         * @default 50
         */
        limit?: number;
        /**
         * Index of the first document on the page
         * @format int64
         * @default 0
         */
        offset?: number;
        /** Comma separated list of emails of the senders from which contacts are blocked or unsubscribed */
        senders?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<GetTransacBlockedContacts, ErrorModel>({
        path: `/smtp/blockedContacts`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get the list of blocked domains
     *
     * @tags SMTP
     * @name GetBlockedDomains
     * @summary Get the list of blocked domains
     * @request GET:/smtp/blockedDomains
     * @secure
     */
    getBlockedDomains: (params: RequestParams = {}) =>
      this.request<GetBlockedDomains, any>({
        path: `/smtp/blockedDomains`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Blocks a new domain in order to avoid messages being sent to the same
     *
     * @tags SMTP
     * @name BlockNewDomain
     * @summary Add a new domain to the list of blocked domains
     * @request POST:/smtp/blockedDomains
     * @secure
     */
    blockNewDomain: (blockDomain: BlockDomain, params: RequestParams = {}) =>
      this.request<void, ErrorModel>({
        path: `/smtp/blockedDomains`,
        method: "POST",
        body: blockDomain,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Unblocks an existing domain from the list of blocked domains
     *
     * @tags SMTP
     * @name DeleteBlockedDomain
     * @summary Unblock an existing domain from the list of blocked domains
     * @request DELETE:/smtp/blockedDomains/{domain}
     * @secure
     */
    deleteBlockedDomain: (domain: string, params: RequestParams = {}) =>
      this.request<void, ErrorModel | void>({
        path: `/smtp/blockedDomains/${domain}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Delete hardbounces. To use carefully (e.g. in case of temporary ISP failures)
     *
     * @tags SMTP
     * @name DeleteHardbounces
     * @summary Delete hardbounces
     * @request POST:/smtp/deleteHardbounces
     * @secure
     */
    deleteHardbounces: (deleteHardbounces: DeleteHardbounces, params: RequestParams = {}) =>
      this.request<void, ErrorModel>({
        path: `/smtp/deleteHardbounces`,
        method: "POST",
        body: deleteHardbounces,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description This endpoint is deprecated. Prefer v3/smtp/email instead.
     *
     * @tags SMTP
     * @name SendTemplate
     * @summary Send a template
     * @request POST:/smtp/templates/{templateId}/send
     * @deprecated
     * @secure
     */
    sendTemplate: (templateId: number, sendEmail: SendEmail, params: RequestParams = {}) =>
      this.request<SendTemplateEmail, PostSendFailed | ErrorModel>({
        path: `/smtp/templates/${templateId}/send`,
        method: "POST",
        body: sendEmail,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  contacts = {
    /**
     * No description
     *
     * @tags Contacts
     * @name GetContacts
     * @summary Get all the contacts
     * @request GET:/contacts
     * @secure
     */
    getContacts: (
      query?: {
        /**
         * Number of documents per page
         * @format int64
         * @max 1000
         * @default 50
         */
        limit?: number;
        /**
         * Index of the first document of the page
         * @format int64
         * @default 0
         */
        offset?: number;
        /**
         * Filter (urlencoded) the contacts modified after a given UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ). Prefer to pass your timezone in date-time format for accurate result.
         * @format date-time
         */
        modifiedSince?: string;
        /**
         * Filter (urlencoded) the contacts created after a given UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ). Prefer to pass your timezone in date-time format for accurate result.
         * @format date-time
         */
        createdSince?: string;
        /**
         * Sort the results in the ascending/descending order of record creation
         * @default "desc"
         */
        sort?: "asc" | "desc";
      },
      params: RequestParams = {},
    ) =>
      this.request<GetContacts, ErrorModel>({
        path: `/contacts`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Contacts
     * @name CreateContact
     * @summary Create a contact
     * @request POST:/contacts
     * @secure
     */
    createContact: (createContact: CreateContact, params: RequestParams = {}) =>
      this.request<CreateUpdateContactModel, ErrorModel>({
        path: `/contacts`,
        method: "POST",
        body: createContact,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Contacts
     * @name CreateDoiContact
     * @summary Create Contact via DOI (Double-Opt-In) Flow
     * @request POST:/contacts/doubleOptinConfirmation
     * @secure
     */
    createDoiContact: (createDoiContact: CreateDoiContact, params: RequestParams = {}) =>
      this.request<void, ErrorModel>({
        path: `/contacts/doubleOptinConfirmation`,
        method: "POST",
        body: createDoiContact,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Contacts
     * @name GetContactInfo
     * @summary Get a contact's details
     * @request GET:/contacts/{email}
     * @secure
     */
    getContactInfo: (email: string, params: RequestParams = {}) =>
      this.request<GetExtendedContactDetails, ErrorModel>({
        path: `/contacts/${email}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Contacts
     * @name UpdateContact
     * @summary Update a contact
     * @request PUT:/contacts/{email}
     * @secure
     */
    updateContact: (email: string, updateContact: UpdateContact, params: RequestParams = {}) =>
      this.request<void, ErrorModel>({
        path: `/contacts/${email}`,
        method: "PUT",
        body: updateContact,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Contacts
     * @name DeleteContact
     * @summary Delete a contact
     * @request DELETE:/contacts/{email}
     * @secure
     */
    deleteContact: (email: string, params: RequestParams = {}) =>
      this.request<void, ErrorModel>({
        path: `/contacts/${email}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Contacts
     * @name GetContactStats
     * @summary Get email campaigns' statistics for a contact
     * @request GET:/contacts/{email}/campaignStats
     * @secure
     */
    getContactStats: (
      email: string,
      query?: {
        /**
         * Mandatory if endDate is used. Starting date (YYYY-MM-DD) of the statistic events specific to campaigns. Must be lower than equal to endDate
         * @format date
         */
        startDate?: string;
        /**
         * Mandatory if startDate is used. Ending date (YYYY-MM-DD) of the statistic events specific to campaigns. Must be greater than equal to startDate
         * @format date
         */
        endDate?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetContactCampaignStats, ErrorModel>({
        path: `/contacts/${email}/campaignStats`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Contacts, Attributes
     * @name GetAttributes
     * @summary List all attributes
     * @request GET:/contacts/attributes
     * @secure
     */
    getAttributes: (params: RequestParams = {}) =>
      this.request<GetAttributes, any>({
        path: `/contacts/attributes`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Contacts, Attributes
     * @name CreateAttribute
     * @summary Create contact attribute
     * @request POST:/contacts/attributes/{attributeCategory}/{attributeName}
     * @secure
     */
    createAttribute: (
      attributeCategory: "normal" | "transactional" | "category" | "calculated" | "global",
      attributeName: string,
      createAttribute: CreateAttribute,
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorModel>({
        path: `/contacts/attributes/${attributeCategory}/${attributeName}`,
        method: "POST",
        body: createAttribute,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Contacts, Attributes
     * @name UpdateAttribute
     * @summary Update contact attribute
     * @request PUT:/contacts/attributes/{attributeCategory}/{attributeName}
     * @secure
     */
    updateAttribute: (
      attributeCategory: "category" | "calculated" | "global",
      attributeName: string,
      updateAttribute: UpdateAttribute,
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorModel>({
        path: `/contacts/attributes/${attributeCategory}/${attributeName}`,
        method: "PUT",
        body: updateAttribute,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Contacts, Attributes
     * @name DeleteAttribute
     * @summary Delete an attribute
     * @request DELETE:/contacts/attributes/{attributeCategory}/{attributeName}
     * @secure
     */
    deleteAttribute: (
      attributeCategory: "normal" | "transactional" | "category" | "calculated" | "global",
      attributeName: string,
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorModel>({
        path: `/contacts/attributes/${attributeCategory}/${attributeName}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Contacts, Folders
     * @name GetFolders
     * @summary Get all folders
     * @request GET:/contacts/folders
     * @secure
     */
    getFolders: (
      query: {
        /**
         * Number of documents per page
         * @format int64
         * @max 50
         * @default 10
         */
        limit: number;
        /**
         * Index of the first document of the page
         * @format int64
         * @default 0
         */
        offset: number;
        /**
         * Sort the results in the ascending/descending order of record creation
         * @default "desc"
         */
        sort?: "asc" | "desc";
      },
      params: RequestParams = {},
    ) =>
      this.request<GetFolders, ErrorModel>({
        path: `/contacts/folders`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Contacts, Folders
     * @name CreateFolder
     * @summary Create a folder
     * @request POST:/contacts/folders
     * @secure
     */
    createFolder: (createFolder: CreateUpdateFolder, params: RequestParams = {}) =>
      this.request<CreateModel, ErrorModel>({
        path: `/contacts/folders`,
        method: "POST",
        body: createFolder,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Contacts
     * @name GetSegments
     * @summary Get all the segments
     * @request GET:/contacts/segments
     * @secure
     */
    getSegments: (
      query: {
        /**
         * Number of documents per page
         * @format int64
         * @max 50
         * @default 10
         */
        limit: number;
        /**
         * Index of the first document of the page
         * @format int64
         * @default 0
         */
        offset: number;
        /**
         * Sort the results in the ascending/descending order of record creation
         * @default "desc"
         */
        sort?: "asc" | "desc";
      },
      params: RequestParams = {},
    ) =>
      this.request<GetSegments, ErrorModel>({
        path: `/contacts/segments`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Contacts, Folders
     * @name GetFolder
     * @summary Returns a folder's details
     * @request GET:/contacts/folders/{folderId}
     * @secure
     */
    getFolder: (folderId: number, params: RequestParams = {}) =>
      this.request<GetFolder, ErrorModel>({
        path: `/contacts/folders/${folderId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Contacts, Folders
     * @name UpdateFolder
     * @summary Update a folder
     * @request PUT:/contacts/folders/{folderId}
     * @secure
     */
    updateFolder: (folderId: number, updateFolder: CreateUpdateFolder, params: RequestParams = {}) =>
      this.request<void, ErrorModel>({
        path: `/contacts/folders/${folderId}`,
        method: "PUT",
        body: updateFolder,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Contacts, Folders
     * @name DeleteFolder
     * @summary Delete a folder (and all its lists)
     * @request DELETE:/contacts/folders/{folderId}
     * @secure
     */
    deleteFolder: (folderId: number, params: RequestParams = {}) =>
      this.request<void, ErrorModel>({
        path: `/contacts/folders/${folderId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Contacts, Folders, Lists
     * @name GetFolderLists
     * @summary Get lists in a folder
     * @request GET:/contacts/folders/{folderId}/lists
     * @secure
     */
    getFolderLists: (
      folderId: number,
      query?: {
        /**
         * Number of documents per page
         * @format int64
         * @max 50
         * @default 10
         */
        limit?: number;
        /**
         * Index of the first document of the page
         * @format int64
         * @default 0
         */
        offset?: number;
        /**
         * Sort the results in the ascending/descending order of record creation
         * @default "desc"
         */
        sort?: "asc" | "desc";
      },
      params: RequestParams = {},
    ) =>
      this.request<GetFolderLists, ErrorModel>({
        path: `/contacts/folders/${folderId}/lists`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Contacts, Lists
     * @name GetLists
     * @summary Get all the lists
     * @request GET:/contacts/lists
     * @secure
     */
    getLists: (
      query?: {
        /**
         * Number of documents per page
         * @format int64
         * @max 50
         * @default 10
         */
        limit?: number;
        /**
         * Index of the first document of the page
         * @format int64
         * @default 0
         */
        offset?: number;
        /**
         * Sort the results in the ascending/descending order of record creation
         * @default "desc"
         */
        sort?: "asc" | "desc";
      },
      params: RequestParams = {},
    ) =>
      this.request<GetLists, ErrorModel>({
        path: `/contacts/lists`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Contacts, Lists
     * @name CreateList
     * @summary Create a list
     * @request POST:/contacts/lists
     * @secure
     */
    createList: (createList: CreateList, params: RequestParams = {}) =>
      this.request<CreateModel, ErrorModel>({
        path: `/contacts/lists`,
        method: "POST",
        body: createList,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Contacts, Lists
     * @name GetList
     * @summary Get a list's details
     * @request GET:/contacts/lists/{listId}
     * @secure
     */
    getList: (listId: number, params: RequestParams = {}) =>
      this.request<GetExtendedList, ErrorModel>({
        path: `/contacts/lists/${listId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Contacts, Lists
     * @name UpdateList
     * @summary Update a list
     * @request PUT:/contacts/lists/{listId}
     * @secure
     */
    updateList: (listId: number, updateList: UpdateList, params: RequestParams = {}) =>
      this.request<void, ErrorModel>({
        path: `/contacts/lists/${listId}`,
        method: "PUT",
        body: updateList,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Contacts, Lists
     * @name DeleteList
     * @summary Delete a list
     * @request DELETE:/contacts/lists/{listId}
     * @secure
     */
    deleteList: (listId: number, params: RequestParams = {}) =>
      this.request<void, ErrorModel>({
        path: `/contacts/lists/${listId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Contacts, Lists
     * @name GetContactsFromList
     * @summary Get contacts in a list
     * @request GET:/contacts/lists/{listId}/contacts
     * @secure
     */
    getContactsFromList: (
      listId: number,
      query?: {
        /**
         * Filter (urlencoded) the contacts modified after a given UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ). Prefer to pass your timezone in date-time format for accurate result.
         * @format date-time
         */
        modifiedSince?: string;
        /**
         * Number of documents per page
         * @format int64
         * @max 500
         * @default 50
         */
        limit?: number;
        /**
         * Index of the first document of the page
         * @format int64
         * @default 0
         */
        offset?: number;
        /**
         * Sort the results in the ascending/descending order of record creation
         * @default "desc"
         */
        sort?: "asc" | "desc";
      },
      params: RequestParams = {},
    ) =>
      this.request<GetContacts, ErrorModel>({
        path: `/contacts/lists/${listId}/contacts`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Contacts, Lists
     * @name AddContactToList
     * @summary Add existing contacts to a list
     * @request POST:/contacts/lists/{listId}/contacts/add
     * @secure
     */
    addContactToList: (listId: number, contactEmails: AddContactToList, params: RequestParams = {}) =>
      this.request<PostContactInfo, ErrorModel>({
        path: `/contacts/lists/${listId}/contacts/add`,
        method: "POST",
        body: contactEmails,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Contacts, Lists
     * @name RemoveContactFromList
     * @summary Delete a contact from a list
     * @request POST:/contacts/lists/{listId}/contacts/remove
     * @secure
     */
    removeContactFromList: (listId: number, contactEmails: RemoveContactFromList, params: RequestParams = {}) =>
      this.request<PostContactInfo, ErrorModel>({
        path: `/contacts/lists/${listId}/contacts/remove`,
        method: "POST",
        body: contactEmails,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description It returns the background process ID which on completion calls the notify URL that you have set in the input. File will be available in csv.
     *
     * @tags Contacts
     * @name RequestContactExport
     * @summary Export contacts
     * @request POST:/contacts/export
     * @secure
     */
    requestContactExport: (requestContactExport: RequestContactExport, params: RequestParams = {}) =>
      this.request<CreatedProcessId, ErrorModel>({
        path: `/contacts/export`,
        method: "POST",
        body: requestContactExport,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description It returns the background process ID which on completion calls the notify URL that you have set in the input.
     *
     * @tags Contacts
     * @name ImportContacts
     * @summary Import contacts
     * @request POST:/contacts/import
     * @secure
     */
    importContacts: (requestContactImport: RequestContactImport, params: RequestParams = {}) =>
      this.request<CreatedProcessId, ErrorModel>({
        path: `/contacts/import`,
        method: "POST",
        body: requestContactImport,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  smsCampaigns = {
    /**
     * No description
     *
     * @tags SMS Campaigns
     * @name GetSmsCampaigns
     * @summary Returns the information for all your created SMS campaigns
     * @request GET:/smsCampaigns
     * @secure
     */
    getSmsCampaigns: (
      query?: {
        /** Status of campaign. */
        status?: "suspended" | "archive" | "sent" | "queued" | "draft" | "inProcess";
        /**
         * Mandatory if endDate is used. Starting (urlencoded) UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ) to filter the sent sms campaigns. Prefer to pass your timezone in date-time format for accurate result ( only available if either 'status' not passed and if passed is set to 'sent' )
         * @format date-time
         */
        startDate?: string;
        /**
         * Mandatory if startDate is used. Ending (urlencoded) UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ) to filter the sent sms campaigns. Prefer to pass your timezone in date-time format for accurate result ( only available if either 'status' not passed and if passed is set to 'sent' )
         * @format date-time
         */
        endDate?: string;
        /**
         * Number limitation for the result returned
         * @format int64
         * @max 1000
         * @default 500
         */
        limit?: number;
        /**
         * Beginning point in the list to retrieve from.
         * @format int64
         * @default 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetSmsCampaigns, ErrorModel>({
        path: `/smsCampaigns`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SMS Campaigns
     * @name CreateSmsCampaign
     * @summary Creates an SMS campaign
     * @request POST:/smsCampaigns
     * @secure
     */
    createSmsCampaign: (createSmsCampaign: CreateSmsCampaign, params: RequestParams = {}) =>
      this.request<CreateModel, ErrorModel>({
        path: `/smsCampaigns`,
        method: "POST",
        body: createSmsCampaign,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SMS Campaigns
     * @name GetSmsCampaign
     * @summary Get an SMS campaign
     * @request GET:/smsCampaigns/{campaignId}
     * @secure
     */
    getSmsCampaign: (campaignId: number, params: RequestParams = {}) =>
      this.request<GetSmsCampaign, ErrorModel>({
        path: `/smsCampaigns/${campaignId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SMS Campaigns
     * @name UpdateSmsCampaign
     * @summary Update an SMS campaign
     * @request PUT:/smsCampaigns/{campaignId}
     * @secure
     */
    updateSmsCampaign: (campaignId: number, updateSmsCampaign: UpdateSmsCampaign, params: RequestParams = {}) =>
      this.request<void, ErrorModel>({
        path: `/smsCampaigns/${campaignId}`,
        method: "PUT",
        body: updateSmsCampaign,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags SMS Campaigns
     * @name DeleteSmsCampaign
     * @summary Delete an SMS campaign
     * @request DELETE:/smsCampaigns/{campaignId}
     * @secure
     */
    deleteSmsCampaign: (campaignId: number, params: RequestParams = {}) =>
      this.request<void, ErrorModel>({
        path: `/smsCampaigns/${campaignId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags SMS Campaigns
     * @name SendSmsCampaignNow
     * @summary Send your SMS campaign immediately
     * @request POST:/smsCampaigns/{campaignId}/sendNow
     * @secure
     */
    sendSmsCampaignNow: (campaignId: number, params: RequestParams = {}) =>
      this.request<void, ErrorModel>({
        path: `/smsCampaigns/${campaignId}/sendNow`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags SMS Campaigns
     * @name UpdateSmsCampaignStatus
     * @summary Update a campaign's status
     * @request PUT:/smsCampaigns/{campaignId}/status
     * @secure
     */
    updateSmsCampaignStatus: (campaignId: number, status: UpdateCampaignStatus, params: RequestParams = {}) =>
      this.request<void, ErrorModel>({
        path: `/smsCampaigns/${campaignId}/status`,
        method: "PUT",
        body: status,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags SMS Campaigns
     * @name SendTestSms
     * @summary Send a test SMS campaign
     * @request POST:/smsCampaigns/{campaignId}/sendTest
     * @secure
     */
    sendTestSms: (campaignId: number, phoneNumber: SendTestSms, params: RequestParams = {}) =>
      this.request<void, PostSendSmsTestFailed | ErrorModel>({
        path: `/smsCampaigns/${campaignId}/sendTest`,
        method: "POST",
        body: phoneNumber,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description It returns the background process ID which on completion calls the notify URL that you have set in the input.
     *
     * @tags SMS Campaigns
     * @name RequestSmsRecipientExport
     * @summary Export an SMS campaign's recipients
     * @request POST:/smsCampaigns/{campaignId}/exportRecipients
     * @secure
     */
    requestSmsRecipientExport: (
      campaignId: number,
      recipientExport: RequestSmsRecipientExport,
      params: RequestParams = {},
    ) =>
      this.request<CreatedProcessId, ErrorModel>({
        path: `/smsCampaigns/${campaignId}/exportRecipients`,
        method: "POST",
        body: recipientExport,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Send report of Sent and Archived campaign, to the specified email addresses, with respective data and a pdf attachment in detail.
     *
     * @tags SMS Campaigns
     * @name SendSmsReport
     * @summary Send an SMS campaign's report
     * @request POST:/smsCampaigns/{campaignId}/sendReport
     * @secure
     */
    sendSmsReport: (campaignId: number, sendReport: SendReport, params: RequestParams = {}) =>
      this.request<void, ErrorModel>({
        path: `/smsCampaigns/${campaignId}/sendReport`,
        method: "POST",
        body: sendReport,
        secure: true,
        ...params,
      }),
  };
  transactionalSms = {
    /**
     * No description
     *
     * @tags Transactional SMS
     * @name SendTransacSms
     * @summary Send SMS message to a mobile number
     * @request POST:/transactionalSMS/sms
     * @secure
     */
    sendTransacSms: (sendTransacSms: SendTransacSms, params: RequestParams = {}) =>
      this.request<SendSms, ErrorModel>({
        path: `/transactionalSMS/sms`,
        method: "POST",
        body: sendTransacSms,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Transactional SMS
     * @name GetTransacAggregatedSmsReport
     * @summary Get your SMS activity aggregated over a period of time
     * @request GET:/transactionalSMS/statistics/aggregatedReport
     * @secure
     */
    getTransacAggregatedSmsReport: (
      query?: {
        /** Mandatory if endDate is used. Starting date (YYYY-MM-DD) of the report */
        startDate?: string;
        /** Mandatory if startDate is used. Ending date (YYYY-MM-DD) of the report */
        endDate?: string;
        /** Number of days in the past including today (positive integer). Not compatible with startDate and endDate */
        days?: number;
        /** Filter on a tag */
        tag?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetTransacAggregatedSmsReport, ErrorModel>({
        path: `/transactionalSMS/statistics/aggregatedReport`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Transactional SMS
     * @name GetTransacSmsReport
     * @summary Get your SMS activity aggregated per day
     * @request GET:/transactionalSMS/statistics/reports
     * @secure
     */
    getTransacSmsReport: (
      query?: {
        /** Mandatory if endDate is used. Starting date (YYYY-MM-DD) of the report */
        startDate?: string;
        /** Mandatory if startDate is used. Ending date (YYYY-MM-DD) of the report */
        endDate?: string;
        /** Number of days in the past including today (positive integer). Not compatible with 'startDate' and 'endDate' */
        days?: number;
        /** Filter on a tag */
        tag?: string;
        /**
         * Sort the results in the ascending/descending order of record creation
         * @default "desc"
         */
        sort?: "asc" | "desc";
      },
      params: RequestParams = {},
    ) =>
      this.request<GetTransacSmsReport, ErrorModel>({
        path: `/transactionalSMS/statistics/reports`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Transactional SMS
     * @name GetSmsEvents
     * @summary Get all your SMS activity (unaggregated events)
     * @request GET:/transactionalSMS/statistics/events
     * @secure
     */
    getSmsEvents: (
      query?: {
        /**
         * Number of documents per page
         * @format int64
         * @max 100
         * @default 50
         */
        limit?: number;
        /** Mandatory if endDate is used. Starting date (YYYY-MM-DD) of the report */
        startDate?: string;
        /** Mandatory if startDate is used. Ending date (YYYY-MM-DD) of the report */
        endDate?: string;
        /**
         * Index of the first document of the page
         * @format int64
         * @default 0
         */
        offset?: number;
        /** Number of days in the past including today (positive integer). Not compatible with 'startDate' and 'endDate' */
        days?: number;
        /** Filter the report for a specific phone number */
        phoneNumber?: string;
        /** Filter the report for specific events */
        event?:
          | "bounces"
          | "hardBounces"
          | "softBounces"
          | "delivered"
          | "sent"
          | "accepted"
          | "unsubscription"
          | "replies"
          | "blocked"
          | "rejected";
        /** Filter the report for specific tags passed as a serialized urlencoded array */
        tags?: string;
        /**
         * Sort the results in the ascending/descending order of record creation
         * @default "desc"
         */
        sort?: "asc" | "desc";
      },
      params: RequestParams = {},
    ) =>
      this.request<GetSmsEventReport, ErrorModel>({
        path: `/transactionalSMS/statistics/events`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  whatsappCampaigns = {
    /**
     * No description
     *
     * @tags WhatsApp Campaigns
     * @name GetWhatsAppCampaign
     * @summary Get a WhatsApp campaign
     * @request GET:/whatsappCampaigns/{campaignId}
     * @secure
     */
    getWhatsAppCampaign: (campaignId: number, params: RequestParams = {}) =>
      this.request<GetWhatsappCampaignOverview, ErrorModel>({
        path: `/whatsappCampaigns/${campaignId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags WhatsApp Campaigns
     * @name DeleteWhatsAppCampaign
     * @summary Delete a WhatsApp campaign
     * @request DELETE:/whatsappCampaigns/{campaignId}
     * @secure
     */
    deleteWhatsAppCampaign: (campaignId: number, params: RequestParams = {}) =>
      this.request<void, ErrorModel>({
        path: `/whatsappCampaigns/${campaignId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags WhatsApp Campaigns
     * @name GetWhatsAppTemplates
     * @summary Return all your created WhatsApp templates
     * @request GET:/whatsappCampaigns/template-list
     * @secure
     */
    getWhatsAppTemplates: (
      query?: {
        /**
         * **Mandatory if endDate is used**. Starting (urlencoded) UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ) to filter the templates created.
         * **Prefer to pass your timezone in date-time format for accurate result**
         */
        startDate?: string;
        /**
         * **Mandatory if startDate is used**. Ending (urlencoded) UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ) to filter the templates created.
         * **Prefer to pass your timezone in date-time format for accurate result**
         */
        endDate?: string;
        /**
         * Number of documents per page
         * @format int64
         * @min 0
         * @max 100
         * @default 50
         */
        limit?: number;
        /**
         * Index of the first document in the page
         * @format int64
         * @default 0
         */
        offset?: number;
        /**
         * Sort the results in the ascending/descending order of record modification. Default order is **descending** if `sort` is not passed
         * @default "desc"
         */
        sort?: "asc" | "desc";
      },
      params: RequestParams = {},
    ) =>
      this.request<GetWATemplates, ErrorModel>({
        path: `/whatsappCampaigns/template-list`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags WhatsApp Campaigns
     * @name GetWhatsAppCampaigns
     * @summary Return all your created WhatsApp campaigns
     * @request GET:/whatsappCampaigns
     * @secure
     */
    getWhatsAppCampaigns: (
      query?: {
        /**
         * **Mandatory if endDate is used**. Starting (urlencoded) UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ) to filter the campaigns created.
         * **Prefer to pass your timezone in date-time format for accurate result**
         */
        startDate?: string;
        /**
         * **Mandatory if startDate is used**. Ending (urlencoded) UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ) to filter the campaigns created.
         * **Prefer to pass your timezone in date-time format for accurate result**
         */
        endDate?: string;
        /**
         * Number of documents per page
         * @format int64
         * @min 0
         * @max 100
         * @default 50
         */
        limit?: number;
        /**
         * Index of the first document in the page
         * @format int64
         * @default 0
         */
        offset?: number;
        /**
         * Sort the results in the ascending/descending order of record modification. Default order is **descending** if `sort` is not passed
         * @default "desc"
         */
        sort?: "asc" | "desc";
      },
      params: RequestParams = {},
    ) =>
      this.request<GetWhatsappCampaigns, ErrorModel>({
        path: `/whatsappCampaigns`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  senders = {
    /**
     * No description
     *
     * @tags Senders
     * @name GetSenders
     * @summary Get the list of all your senders
     * @request GET:/senders
     * @secure
     */
    getSenders: (
      query?: {
        /** Filter your senders for a specific ip (available for dedicated IP usage only) */
        ip?: string;
        /** Filter your senders for a specific domain */
        domain?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetSendersList, ErrorModel>({
        path: `/senders`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Senders
     * @name CreateSender
     * @summary Create a new sender
     * @request POST:/senders
     * @secure
     */
    createSender: (sender: CreateSender, params: RequestParams = {}) =>
      this.request<CreateSenderModel, ErrorModel>({
        path: `/senders`,
        method: "POST",
        body: sender,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Senders
     * @name UpdateSender
     * @summary Update a sender
     * @request PUT:/senders/{senderId}
     * @secure
     */
    updateSender: (senderId: number, sender: UpdateSender, params: RequestParams = {}) =>
      this.request<void, ErrorModel>({
        path: `/senders/${senderId}`,
        method: "PUT",
        body: sender,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Senders
     * @name DeleteSender
     * @summary Delete a sender
     * @request DELETE:/senders/{senderId}
     * @secure
     */
    deleteSender: (senderId: number, params: RequestParams = {}) =>
      this.request<void, ErrorModel>({
        path: `/senders/${senderId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Senders
     * @name GetIpsFromSender
     * @summary Get all the dedicated IPs for a sender
     * @request GET:/senders/{senderId}/ips
     * @secure
     */
    getIpsFromSender: (senderId: number, params: RequestParams = {}) =>
      this.request<GetIpsFromSender, ErrorModel>({
        path: `/senders/${senderId}/ips`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Senders
     * @name GetIps
     * @summary Get all the dedicated IPs for your account
     * @request GET:/senders/ips
     * @secure
     */
    getIps: (params: RequestParams = {}) =>
      this.request<GetIps, any>({
        path: `/senders/ips`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  webhooks = {
    /**
     * No description
     *
     * @tags Webhooks
     * @name CreateWebhook
     * @summary Create a webhook
     * @request POST:/webhooks
     * @secure
     */
    createWebhook: (createWebhook: CreateWebhook, params: RequestParams = {}) =>
      this.request<CreateModel, ErrorModel>({
        path: `/webhooks`,
        method: "POST",
        body: createWebhook,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Webhooks
     * @name GetWebhooks
     * @summary Get all webhooks
     * @request GET:/webhooks
     * @secure
     */
    getWebhooks: (
      query?: {
        /**
         * Filter on webhook type
         * @default "transactional"
         */
        type?: "marketing" | "transactional";
        /**
         * Sort the results in the ascending/descending order of webhook creation
         * @default "desc"
         */
        sort?: "asc" | "desc";
      },
      params: RequestParams = {},
    ) =>
      this.request<GetWebhooks, ErrorModel>({
        path: `/webhooks`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Webhooks
     * @name GetWebhook
     * @summary Get a webhook details
     * @request GET:/webhooks/{webhookId}
     * @secure
     */
    getWebhook: (webhookId: number, params: RequestParams = {}) =>
      this.request<GetWebhook, ErrorModel>({
        path: `/webhooks/${webhookId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Webhooks
     * @name UpdateWebhook
     * @summary Update a webhook
     * @request PUT:/webhooks/{webhookId}
     * @secure
     */
    updateWebhook: (webhookId: number, updateWebhook: UpdateWebhook, params: RequestParams = {}) =>
      this.request<void, ErrorModel>({
        path: `/webhooks/${webhookId}`,
        method: "PUT",
        body: updateWebhook,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Webhooks
     * @name DeleteWebhook
     * @summary Delete a webhook
     * @request DELETE:/webhooks/{webhookId}
     * @secure
     */
    deleteWebhook: (webhookId: number, params: RequestParams = {}) =>
      this.request<void, ErrorModel>({
        path: `/webhooks/${webhookId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  reseller = {
    /**
     * No description
     *
     * @tags Reseller
     * @name GetResellerChilds
     * @summary Get the list of all children accounts
     * @request GET:/reseller/children
     * @secure
     */
    getResellerChilds: (
      query?: {
        /**
         * Number of documents for child accounts information per page
         * @format int64
         * @max 20
         * @default 10
         */
        limit?: number;
        /**
         * Index of the first document in the page
         * @format int64
         * @default 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetChildrenList, ErrorModel>({
        path: `/reseller/children`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reseller
     * @name CreateResellerChild
     * @summary Creates a reseller child
     * @request POST:/reseller/children
     * @secure
     */
    createResellerChild: (resellerChild: CreateChild, params: RequestParams = {}) =>
      this.request<CreateReseller, ErrorModel>({
        path: `/reseller/children`,
        method: "POST",
        body: resellerChild,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reseller
     * @name GetChildInfo
     * @summary Get a child account's details
     * @request GET:/reseller/children/{childIdentifier}
     * @secure
     */
    getChildInfo: (childIdentifier: string, params: RequestParams = {}) =>
      this.request<GetChildInfo, ErrorModel>({
        path: `/reseller/children/${childIdentifier}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reseller
     * @name UpdateResellerChild
     * @summary Update info of reseller's child based on the child identifier supplied
     * @request PUT:/reseller/children/{childIdentifier}
     * @secure
     */
    updateResellerChild: (childIdentifier: string, resellerChild: UpdateChild, params: RequestParams = {}) =>
      this.request<void, ErrorModel>({
        path: `/reseller/children/${childIdentifier}`,
        method: "PUT",
        body: resellerChild,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reseller
     * @name DeleteResellerChild
     * @summary Delete a single reseller child based on the child identifier supplied
     * @request DELETE:/reseller/children/{childIdentifier}
     * @secure
     */
    deleteResellerChild: (childIdentifier: string, params: RequestParams = {}) =>
      this.request<void, ErrorModel>({
        path: `/reseller/children/${childIdentifier}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reseller
     * @name UpdateChildAccountStatus
     * @summary Update info of reseller's child account status based on the identifier supplied
     * @request PUT:/reseller/children/{childIdentifier}/accountStatus
     * @secure
     */
    updateChildAccountStatus: (
      childIdentifier: string,
      updateChildAccountStatus: UpdateChildAccountStatus,
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorModel>({
        path: `/reseller/children/${childIdentifier}/accountStatus`,
        method: "PUT",
        body: updateChildAccountStatus,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reseller
     * @name GetChildAccountCreationStatus
     * @summary Get the status of a reseller's child account creation, whether it is successfully created (exists) or not based on the childIdentifier supplied
     * @request GET:/reseller/children/{childIdentifier}/accountCreationStatus
     * @secure
     */
    getChildAccountCreationStatus: (childIdentifier: string, params: RequestParams = {}) =>
      this.request<GetChildAccountCreationStatus, ErrorModel>({
        path: `/reseller/children/${childIdentifier}/accountCreationStatus`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reseller
     * @name AssociateIpToChild
     * @summary Associate a dedicated IP to the child
     * @request POST:/reseller/children/{childIdentifier}/ips/associate
     * @secure
     */
    associateIpToChild: (childIdentifier: string, ip: ManageIp, params: RequestParams = {}) =>
      this.request<void, ErrorModel>({
        path: `/reseller/children/${childIdentifier}/ips/associate`,
        method: "POST",
        body: ip,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reseller
     * @name DissociateIpFromChild
     * @summary Dissociate a dedicated IP to the child
     * @request POST:/reseller/children/{childIdentifier}/ips/dissociate
     * @secure
     */
    dissociateIpFromChild: (childIdentifier: string, ip: ManageIp, params: RequestParams = {}) =>
      this.request<void, ErrorModel>({
        path: `/reseller/children/${childIdentifier}/ips/dissociate`,
        method: "POST",
        body: ip,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reseller
     * @name AddCredits
     * @summary Add Email and/or SMS credits to a specific child account
     * @request POST:/reseller/children/{childIdentifier}/credits/add
     * @secure
     */
    addCredits: (childIdentifier: string, addCredits: AddCredits, params: RequestParams = {}) =>
      this.request<RemainingCreditModel, ErrorModel>({
        path: `/reseller/children/${childIdentifier}/credits/add`,
        method: "POST",
        body: addCredits,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reseller
     * @name RemoveCredits
     * @summary Remove Email and/or SMS credits from a specific child account
     * @request POST:/reseller/children/{childIdentifier}/credits/remove
     * @secure
     */
    removeCredits: (childIdentifier: string, removeCredits: RemoveCredits, params: RequestParams = {}) =>
      this.request<RemainingCreditModel, ErrorModel>({
        path: `/reseller/children/${childIdentifier}/credits/remove`,
        method: "POST",
        body: removeCredits,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reseller
     * @name GetChildDomains
     * @summary Get all sender domains for a specific child account
     * @request GET:/reseller/children/{childIdentifier}/domains
     * @secure
     */
    getChildDomains: (childIdentifier: string, params: RequestParams = {}) =>
      this.request<GetChildDomains, ErrorModel>({
        path: `/reseller/children/${childIdentifier}/domains`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reseller
     * @name CreateChildDomain
     * @summary Create a domain for a child account
     * @request POST:/reseller/children/{childIdentifier}/domains
     * @secure
     */
    createChildDomain: (childIdentifier: string, addChildDomain: AddChildDomain, params: RequestParams = {}) =>
      this.request<void, ErrorModel>({
        path: `/reseller/children/${childIdentifier}/domains`,
        method: "POST",
        body: addChildDomain,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reseller
     * @name UpdateChildDomain
     * @summary Update the sender domain of reseller's child based on the childIdentifier and domainName passed
     * @request PUT:/reseller/children/{childIdentifier}/domains/{domainName}
     * @secure
     */
    updateChildDomain: (
      childIdentifier: string,
      domainName: string,
      updateChildDomain: UpdateChildDomain,
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorModel>({
        path: `/reseller/children/${childIdentifier}/domains/${domainName}`,
        method: "PUT",
        body: updateChildDomain,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reseller
     * @name DeleteChildDomain
     * @summary Delete the sender domain of the reseller child based on the childIdentifier and domainName passed
     * @request DELETE:/reseller/children/{childIdentifier}/domains/{domainName}
     * @secure
     */
    deleteChildDomain: (childIdentifier: string, domainName: string, params: RequestParams = {}) =>
      this.request<void, ErrorModel>({
        path: `/reseller/children/${childIdentifier}/domains/${domainName}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description It returns a session [token] which will remain valid for a short period of time. A child account will be able to access a white-labeled section by using the following url pattern => https:/email.mydomain.com/login/sso?token=[token]
     *
     * @tags Reseller
     * @name GetSsoToken
     * @summary Get session token to access Sendinblue (SSO)
     * @request GET:/reseller/children/{childIdentifier}/auth
     * @secure
     */
    getSsoToken: (childIdentifier: string, params: RequestParams = {}) =>
      this.request<GetSsoToken, ErrorModel>({
        path: `/reseller/children/${childIdentifier}/auth`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  account = {
    /**
     * No description
     *
     * @tags Account
     * @name GetAccount
     * @summary Get your account information, plan and credits details
     * @request GET:/account
     * @secure
     */
    getAccount: (params: RequestParams = {}) =>
      this.request<GetAccount, any>({
        path: `/account`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  processes = {
    /**
     * No description
     *
     * @tags Process
     * @name GetProcesses
     * @summary Return all the processes for your account
     * @request GET:/processes
     * @secure
     */
    getProcesses: (
      query?: {
        /**
         * Number limitation for the result returned
         * @format int64
         * @max 50
         * @default 10
         */
        limit?: number;
        /**
         * Beginning point in the list to retrieve from.
         * @format int64
         * @default 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetProcesses, ErrorModel>({
        path: `/processes`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Process
     * @name GetProcess
     * @summary Return the informations for a process
     * @request GET:/processes/{processId}
     * @secure
     */
    getProcess: (processId: number, params: RequestParams = {}) =>
      this.request<GetProcess, ErrorModel>({
        path: `/processes/${processId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
}
