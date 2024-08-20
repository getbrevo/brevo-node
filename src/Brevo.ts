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
    type: "payAsYouGo" | "free" | "subscription" | "sms";
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
     * Date of the period from which the plan will start (only available for "subscription" plan type)
     * @format date
     * @example "2016-12-31T00:00:00.000Z"
     */
    startDate?: string;
    /**
     * Date of the period from which the plan will end (only available for "subscription" plan type)
     * @format date
     * @example "2017-01-31T00:00:00.000Z"
     */
    endDate?: string;
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

export interface GetAccountActivity {
  /** Get user activity logs */
  logs?: {
    /**
     * Type of activity in the account.
     * @example "login-success"
     */
    action: string;
    /**
     * Time of the activity.
     * @example "2023-03-27T16:30:00Z"
     */
    date: string;
    /**
     * Email address of the user who performed activity in the account.
     * @example "test@mycompany.com"
     */
    user_email: string;
    /**
     * IP address of the user who performed activity in the account.
     * @example "192.158.1.38"
     */
    user_ip: string;
    /**
     * Browser details of the user who performed the activity.
     * @example "Mozilla/5.0 (iPad; U; CPU OS 3_2_1 like Mac OS X; en-us)"
     */
    user_agent: string;
  }[];
}

export interface GetInvitedUsersList {
  /** Get invited users list */
  users?: {
    /**
     * Email address of the user.
     * @example "pendingInvitedUser@company.com"
     */
    email: string;
    /**
     * Flag for indicating is user owner of the organization.
     * @example true
     */
    is_owner: string;
    /**
     * Status of the invited user.
     * @example "active"
     */
    status: string;
    /** Feature accessiblity given to the user. */
    feature_access: {
      /**
       * Marketing features accessiblity.
       * @example "custom"
       */
      marketing?: string;
      /**
       * Conversations features accessiblity.
       * @example "none"
       */
      conversations?: string;
      /**
       * CRM features accessiblity.
       * @example "full"
       */
      crm?: string;
    };
  }[];
}

export interface GetCorporateInvitedUsersList {
  /** Get invited users list */
  users?: {
    /** Admin user groups list */
    groups?: {
      /**
       * group id
       * @example "a5c4f22c08d9ed37ef1ca342"
       */
      id?: string;
      /**
       * group name
       * @example "My group"
       */
      name?: string;
    };
    /**
     * Email address of the user.
     * @example "pendingInvitedUser@company.com"
     */
    email: string;
    /**
     * Flag for indicating is user owner of the organization.
     * @example false
     */
    is_owner: string;
    /**
     * Status of the invited user.
     * @example "active"
     */
    status: string;
    /** Feature accessiblity given to the user. (Required only if status is active) */
    feature_access: {
      /** User management accessiblity. */
      user_management?: string[];
      /** Api keys accessiblity. */
      api_keys?: string[];
      /** My plan accessiblity. */
      my_plan?: string[];
      /** Apps management accessiblity | Not available in ENTv2 */
      apps_management?: string[];
      /** Group creation, modification or deletion accessibility */
      sub_organization_groups?: string[];
      /** Authorization to create sub-organization in the admin account. If the user creating the sub-organization, belongs to a group, the user must choose a group at the sub-organization creation. */
      create_sub_organizations?: string[];
      /** Authorization to manage and access sub-organizations in the admin account. */
      manage_sub_organizations?: string[];
      /** Analytics dashboard accessibility */
      analytics?: string[];
      /** Security page accessibility */
      security?: string[];
    };
  }[];
}

/** Check admin user permissions */
export interface GetCorporateUserPermission {
  /**
   * Email address of the user.
   * @example "invitedUser@company.com"
   */
  email: string;
  /**
   * Status of the invited user.
   * @example "active / pending"
   */
  status: string;
  groups: {
    /**
     * group identifier
     * @example "6cbcxxxxxxxxxxxxxxxx457a"
     */
    id?: string;
    /**
     * Group name
     * @example "Staff"
     */
    name?: string;
  }[];
  /** Granular feature permissions given to the user. */
  feature_access: {
    /** Permission on api keys */
    api_keys?: string[];
    /** Permission on my plan */
    my_plan?: string[];
    /** Permission on user management */
    user_management?: string[];
    /** Permission on apps management */
    apps_management?: string[];
    /** Permission on groups */
    sub_organization_groups?: string[];
    /** Permission on create sub-accounts */
    create_sub_organizations?: string[];
    /** Permission on manage sub-accounts */
    manage_sub_organizations?: string[];
    /** Permission on analytics */
    analytics?: string[];
    /** Permission on security */
    security?: string[];
  };
}

/** Check user permission */
export interface GetUserPermission {
  /**
   * Email address of the user.
   * @example "invitedUser@company.com"
   */
  email: string;
  /**
   * Status of the invited user.
   * @example "active"
   */
  status: string;
  /** Granular feature permissions given to the user. */
  privileges: {
    /** @example "Email campaign" */
    feature: string;
    permissions: string[];
  }[];
}

/** Revoke user permission */
export interface PutRevokeUserPermission {
  /**
   * Email address of the user.
   * @example "invitedUser@company.com"
   */
  email: string;
}

export interface PutRevokeUserPermissionResponse {
  /**
   * Status of the API operation.
   * @example "OK"
   */
  status: string;
  /** Credit note */
  credit_notes?: string[];
}

/** Revoke user permission */
export interface Putresendcancelinvitation {
  /**
   * Email address of the user.
   * @example "invitedUser@company.com"
   */
  email: string;
}

export interface PutresendcancelinvitationResponse {
  /**
   * Status of the API operation.
   * @example "OK"
   */
  status: string;
  /** Credit note */
  credit_notes?: string[];
}

export interface InviteAdminUser {
  /**
   * Email address for the organization
   * @format email
   * @example "inviteuser@example.com"
   */
  email: string;
  /**
   * All access to the features
   * @example true
   */
  all_features_access: true | false;
  /**
   * Ids of Group
   * @example ["2baxxxxxxxxxxxxxxxxxxxxxcaa","65axxxxxxxxxxxxxxxxxxxxxc5a"]
   */
  groupIds?: string[];
  privileges: {
    /**
     * Feature name
     * @example "user_management"
     */
    feature?:
      | "my_plan"
      | "api"
      | "user_management"
      | "app_management"
      | "sub_organization_groups"
      | "create_sub_organizations"
      | "manage_sub_organizations"
      | "analytics"
      | "security";
    /** Permissions for a given feature */
    permissions?: ("all" | "none" | "create" | "edit_delete" | "download_data" | "create_alerts")[];
  }[];
}

export interface Inviteuser {
  /**
   * Email address for the organization
   * @format email
   * @example "inviteuser@example.com"
   */
  email: string;
  /**
   * All access to the features
   * @example true
   */
  all_features_access: true | false;
  privileges: {
    /**
     * Feature name
     * @example "email_campaigns"
     */
    feature?:
      | "email_campaigns"
      | "sms_campaigns"
      | "contacts"
      | "templates"
      | "workflows"
      | "facebook_ads"
      | "landing_pages"
      | "transactional_emails"
      | "smtp_api"
      | "user_management"
      | "sales_platform"
      | "phone"
      | "conversations"
      | "senders_domains_dedicated_ips"
      | "push_notifications"
      | "companies";
    /** Permissions for a given feature */
    permissions?: (
      | "create_edit_delete"
      | "send_schedule_suspend"
      | "view"
      | "import"
      | "export"
      | "list_and_attributes"
      | "forms"
      | "activate_deactivate"
      | "activate_deactivate_pause"
      | "settings"
      | "schedule_pause"
      | "all"
      | "logs"
      | "access"
      | "assign"
      | "configure"
      | "manage_owned_deals_tasks"
      | "manage_others_deals_tasks"
      | "manage_owned_companies"
      | "manage_others_companies"
      | "reports"
      | "senders_management"
      | "domains_management"
      | "dedicated_ips_management"
      | "send"
      | "smtp"
      | "api_keys"
      | "authorized_ips"
      | "none"
    )[];
  }[];
}

export interface InviteuserResponse {
  /**
   * Status of the API operation.
   * @example "OK"
   */
  status: string;
  /** Invoice id */
  invoice_id?: string;
}

export interface UpdateUserResponse {
  /**
   * Status of the API operation.
   * @example "OK"
   */
  status: string;
  /** Credit note */
  credit_notes?: string[];
  /** Invoice id */
  invoice_id?: string;
}

export interface GetSsoToken {
  /**
   * Session token, it will remain valid for 15 days.
   * @example "ede520dxxxxxxxxxxxx76d631fba2"
   */
  token: string;
}

export interface CreateApiKeyResponse {
  /**
   * Status of the API operation.
   * @example "success"
   */
  status: string;
  /**
   * API key
   * @example "xkeysib-21881axxxxxcc92e04-mIrexxxx7z"
   */
  key: string;
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

export interface GetDomainsList {
  /** List of the domains available in your account */
  domains?: {
    /**
     * Id of the domain
     * @format int64
     * @example 1
     */
    id: number;
    /**
     * Domain name
     * @example "mycompany.com"
     */
    domain_name: string;
    /**
     * Status of domain authentication (true=authenticated, false=non authenticated)
     * @example true
     */
    authenticated: boolean;
    /**
     * Status of domain verification (true=verified, false=non verified)
     * @example false
     */
    verified: boolean;
    /**
     * Dedicated IP associated with domain
     * @example "123.98.689.7"
     */
    ip?: string;
  }[];
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
  /** **Mandatory in case of dedicated IP**. IPs to associate to the sender */
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
  /** **Only in case of dedicated IP**. IPs to associate to the sender. If passed, will replace all the existing IPs. */
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

export interface Otp {
  /**
   * 6 digit OTP received on email
   * @example 123456
   */
  otp: number;
}

export interface CreateDomain {
  /**
   * Domain name
   * @example "mycompany.com"
   */
  name: string;
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
    | "not_enough_credits"
    | "permission_denied"
    | "duplicate_parameter"
    | "duplicate_request"
    | "method_not_allowed"
    | "unauthorized"
    | "account_under_validation"
    | "not_acceptable"
    | "bad_request"
    | "unprocessable_entity";
  /**
   * Readable message associated to the failure
   * @example "POST Method is not allowed on this path"
   */
  message: string;
}

export interface GetProcesses {
  /** List of processes available on your account */
  processes?: GetProcess[];
  /**
   * Number of processes available on your account
   * @format int64
   * @example 5
   */
  count?: number;
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
     * @example "http://dhh.brevo.com/fhsgccc.html?t=9865448900"
     */
    shareLink?: string;
  })[];
  /**
   * Number of Email campaigns retrieved
   * @format int64
   * @example 24
   */
  count?: number;
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
  count?: number;
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
   * Preview text or preheader of the email campaign
   * @example "Thanks for your order!"
   */
  previewText?: string;
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
   * @example "2017-06-01T12:30:00.000Z"
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
   * utm parameter associated with campaign
   * @example "myutm"
   */
  utmCampaignValue?: string;
  /** @example "Brevo" */
  utmSource?: string;
  /** @example "EMAIL" */
  utmMedium?: string;
  /**
   * utm id activate
   * @example true
   */
  utmIDActive?: boolean;
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
  toField?: string;
  /**
   * HTML content of the campaign
   * @example "This is my HTML Content"
   */
  htmlContent: string;
  /**
   * Link to share the campaign on social medias
   * @format url
   * @example "http://dhh.brevo.com/fhsgccc.html?t=9865448900"
   */
  shareLink?: string;
  /**
   * Tag of the campaign
   * @example "Newsletter"
   */
  tag?: string;
  /**
   * Creation UTC date-time of the campaign (YYYY-MM-DDTHH:mm:ss.SSSZ)
   * @example "2017-05-01T12:30:00.000Z"
   */
  createdAt: string;
  /**
   * UTC date-time of last modification of the campaign (YYYY-MM-DDTHH:mm:ss.SSSZ)
   * @example "2017-05-01T12:30:00.000Z"
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
   * @example "2018-12-01T16:30:00.000Z"
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
  statsByDevice: GetStatsByDevice;
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

export interface AddContactToListByEmails {
  /**
   * Emails to add to a list. You can pass a **maximum of 150 emails** for addition in one request. **_If you need to add the emails in bulk, please prefer /contacts/import api._**
   * @maxItems 150
   * @minItems 1
   */
  emails?: string[];
}

export interface AddContactToListByIDs {
  /**
   * IDs to add to a list. You can pass a **maximum of 150 IDs** for addition in one request. **_If you need to add the emails in bulk, please prefer /contacts/import api._**
   * @maxItems 150
   * @minItems 1
   */
  ids?: number[];
}

export interface RemoveContactFromListByEmails {
  /**
   * **Required if 'all' is false and 'ids' is empty.** Emails to remove from a list. You can pass a **maximum of 150 emails** for removal in one request.
   * @maxItems 150
   * @minItems 1
   */
  emails?: string[];
}

export interface RemoveContactFromListByIDs {
  /**
   * **Required if 'all' is false and 'emails' is empty.** IDs to remove from a list. You can pass a **maximum of 150 IDs** for removal in one request.
   * @maxItems 150
   * @minItems 1
   */
  ids?: number[];
}

export interface RemoveContactFromListByAll {
  /**
   * **Required if 'emails' and 'ids' are empty.** Remove all existing contacts from a list. A process will be created in this scenario. You can fetch the process details to know about the progress
   * @example true
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
   * @example "2017-06-01T12:30:00.000Z"
   */
  scheduledAt?: string;
  /**
   * Sender of the SMS Campaign
   * @example "MyCompany"
   */
  sender: string;
  /**
   * Creation UTC date-time of the SMS campaign (YYYY-MM-DDTHH:mm:ss.SSSZ)
   * @example "2017-06-01T12:30:00.000Z"
   */
  createdAt: string;
  /**
   * UTC date-time of last modification of the SMS campaign (YYYY-MM-DDTHH:mm:ss.SSSZ)
   * @example "2017-05-01T12:30:00.000Z"
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
   * @example "2017-06-01T12:30:00.000Z"
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
   * @example "2017-06-01T12:30:00.000Z"
   */
  createdAt: string;
  /**
   * UTC date-time of last modification of the WhatsApp campaign (YYYY-MM-DDTHH:mm:ss.SSSZ)
   * @example "2017-05-01T12:30:00.000Z"
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

export interface GetWhatsappTemplates {
  templates?: {
    /**
     * ID of the WhatsApp template
     * @format int64
     * @example 235
     */
    id: number;
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
     * Creation UTC date-time of the WhatsApp template (YYYY-MM-DDTHH:mm:ss.SSSZ)
     * @example "2017-06-01T12:30:00.000Z"
     */
    createdAt: string;
    /**
     * UTC date-time of last modification of the WhatsApp template (YYYY-MM-DDTHH:mm:ss.SSSZ)
     * @example "2017-05-01T12:30:00.000Z"
     */
    modifiedAt: string;
  }[];
  /**
   * Number of WhatsApp templates retrieved
   * @format int64
   * @example 24
   */
  count?: number;
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
     * @example "2017-06-01T12:30:00.000Z"
     */
    scheduledAt: string;
    /** Error Reason associated with the WhatsApp campaign sending */
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
     * Creation UTC date-time of the WhatsApp template (YYYY-MM-DDTHH:mm:ss.SSSZ)
     * @example "2017-06-01T12:30:00.000Z"
     */
    createdAt: string;
    /**
     * UTC date-time of last modification of the WhatsApp template (YYYY-MM-DDTHH:mm:ss.SSSZ)
     * @example "2017-05-01T12:30:00.000Z"
     */
    modifiedAt: string;
  }[];
  /**
   * Number of WhatsApp campaigns retrieved
   * @format int64
   * @example 40
   */
  count?: number;
}

export interface CreateWhatsAppCampaign {
  /**
   * Name of the WhatsApp campaign creation
   * @example "Test Campaign"
   */
  name: string;
  /**
   * Id of the WhatsApp template in **approved** state
   * @example 19
   */
  templateId: number;
  /**
   * Sending UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ). **Prefer to pass your timezone in date-time format for accurate result.For example: **2017-06-01T12:30:00+02:00**
   * @example "2017-06-01T10:30:00.000Z"
   */
  scheduledAt: string;
  /** Segment ids and List ids to include/exclude from campaign */
  recipients: {
    /** List ids to exclude from the campaign */
    excludedListIds?: number[];
    /** **Mandatory if scheduledAt is not empty**. List Ids to send the campaign to */
    listIds?: number[];
    /** **Mandatory if listIds are not used**. Segment ids to send the campaign to. */
    segments?: number[];
  };
}

export interface GetWhatsAppConfig {
  /**
   * Id of the WhatsApp business account
   * @example 105569359072383
   */
  whatsappBusinessAccountId?: string;
  /**
   * Sending limit Information of the WhatsApp API account
   * @example "TIER_1K"
   */
  sendingLimit?: string;
  /**
   * Quality status of phone number associated with WhatsApp account. There are three quality ratings. example - **High (GREEN) , Medium (YELLOW) and Low(RED)**
   * @example "GREEN"
   */
  phoneNumberQuality?: "GREEN" | "YELLOW" | "RED";
  /**
   * Status information related to WhatsApp API account
   * @example "APPROVED"
   */
  whatsappBusinessAccountStatus?: "APPROVED" | "PENDING" | "REJECTED";
  /**
   * Verification status information of the Business account
   * @example "verified"
   */
  businessStatus?: string;
  /**
   * Status of the name associated with WhatsApp Phone number
   * @example "APPROVED"
   */
  phoneNumberNameStatus?: "APPROVED" | "PENDING" | "REJECTED";
}

export interface CreateWhatsAppTemplate {
  /**
   * Name of the template
   * @example "Test template"
   */
  name: string;
  /**
   * Language of the template. For Example :
   * **en** for English
   * @example "en"
   */
  language: string;
  /**
   * Category of the template
   * @example "MARKETING"
   */
  category: "MARKETING" | "UTILITY";
  /**
   * Absolute url of the media file **(no local file)** for the header. **Use this field in you want to add media in Template header and headerText is empty**.
   * Allowed extensions for media files are:
   * #### jpeg | png | mp4 | pdf
   * @example "https://attachment.domain.com"
   */
  mediaUrl?: string;
  /**
   * Body of the template. **Maximum allowed characters are 1024**
   * @example "making it look like readable English"
   */
  bodyText: string;
  /**
   * Text content of the header in the template. **Maximum allowed characters are 45**
   * **Use this field to add text content in template header and if mediaUrl is empty**
   * @example "Test WhatsApp campaign"
   */
  headerText?: string;
  /** source of the template */
  source?: "Automation" | "Conversations";
}

export interface UpdateWhatsAppCampaign {
  /**
   * Name of the campaign
   * @example "Test WhatsApp"
   */
  campaignName?: string;
  /**
   * Status of the campaign
   * @default "scheduled"
   * @example "scheduled"
   */
  campaignStatus?: "scheduled" | "suspended";
  /**
   * Reschedule the sending UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ) of campaign. **Prefer to pass your timezone in date-time format for accurate result.For example: **2017-06-01T12:30:00+02:00**
   * Use this field to update the scheduledAt of any existing draft or scheduled WhatsApp campaign.
   * @example "2017-06-01T10:30:00.000Z"
   */
  rescheduleFor?: string;
  /** Segment ids and List ids to include/exclude from campaign */
  recipients?: {
    /** List ids to exclude from the campaign */
    excludedListIds?: number[];
    /** **Mandatory if scheduledAt is not empty**. List Ids to send the campaign to */
    listIds?: number[];
    /** **Mandatory if listIds are not used**. Segment ids to send the campaign to. */
    segments?: number[];
  };
}

export interface CreateModel {
  /**
   * ID of the object created
   * @format int64
   * @example 5
   */
  id: number;
}

export interface CreatePaymentResponse {
  /**
   * ID of the object created
   * @format int64
   * @example 122
   */
  id: number;
  /**
   * URL of the payment request created
   * @example "https://pay.brevo.com/payment/6d4ec0b2b48ef803df4103ve"
   */
  url?: string;
}

export interface CreateUpdateContactModel {
  /**
   * ID of the contact when a new contact is created
   * @format int64
   * @example 122
   */
  id?: number;
}

export interface UpdateBatchContactsModel {
  /** @example "1,2" */
  successIds?: number[];
  /** @example "3,4" */
  failureIds?: number[];
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

export interface CreateDomainModel {
  /**
   * ID of the Domain created
   * @format int64
   * @example 5
   */
  id: number;
  /**
   * Domain
   * @example "example.com"
   */
  domain_name?: string;
  /**
   * Domain Provider
   * @example "GoDaddy"
   */
  domain_provider?: string;
  /**
   * Success message
   * @example "Domain added successfully. To authenticate it, add following DNS records"
   */
  message?: string;
  dns_records?: {
    dkim_record?: {
      type?: string;
      value?: string;
      host_name?: string;
      status?: boolean;
    };
    brevo_code?: {
      type?: string;
      value?: string;
      host_name?: string;
      status?: boolean;
    };
    dmarc_record?: {
      type?: string;
      value?: string;
      host_name?: string;
      status?: boolean;
    };
  };
}

export interface AuthenticateDomainModel {
  /**
   * Domain
   * @example "myexample.com"
   */
  domain_name: string;
  /**
   * Success message
   * @example "Domain has been authenticated successfully."
   */
  message: string;
}

export interface GetDomainConfigurationModel {
  /**
   * Domain
   * @example "myexample.com"
   */
  domain: string;
  /**
   * Status of domain verification (true=verified, false=non verified)
   * @example true
   */
  verified: boolean;
  /**
   * Status of domain authentication (true=authenticated, false=non authenticated)
   * @example false
   */
  authenticated: boolean;
  dns_records: {
    dkim_record?: {
      type?: string;
      value?: string;
      host_name?: string;
      status?: boolean;
    };
    brevo_code?: {
      type?: string;
      value?: string;
      host_name?: string;
      status?: boolean;
    };
    dmarc_record?: {
      type?: string;
      value?: string;
      host_name?: string;
      status?: boolean;
    };
  };
}

export interface CreateSmtpEmail {
  /**
   * Message ID of the transactional email sent
   * @example "<201798300811.5787683@relay.domain.com>"
   */
  messageId?: string;
  messageIds?: string[];
}

export interface UploadImageModel {
  /**
   * URL of the image uploaded
   * @example "https://img.mailinblue.com/100000/images/rnb/original/62casdase8wewq9df1c2f27c.jpeg"
   */
  url?: string;
}

export interface ScheduleSmtpEmail {
  /**
   * Message ID of the transactional email scheduled
   * @example "<201798300811.5787683@relay.domain.com>"
   */
  messageId?: string;
  messageIds?: string[];
  /**
   * Batch ID of the batch transactional email scheduled
   * @example "5c6cfa04-eed9-42c2-8b5c-6d470d978e9d"
   */
  batchId?: string;
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
   * @example "invalid_parameter"
   */
  code: string;
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
   * @example "invalid_parameter"
   */
  code: string;
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
    success?: string[] | number[];
    failure?: string[] | number[];
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
  range?: string;
  /**
   * Number of requests for the timeframe
   * @format int64
   * @example 263
   */
  requests?: number;
  /**
   * Number of delivered emails for the timeframe
   * @format int64
   * @example 249
   */
  delivered?: number;
  /**
   * Number of hardbounces for the timeframe
   * @format int64
   * @example 1
   */
  hardBounces?: number;
  /**
   * Number of softbounces for the timeframe
   * @format int64
   * @example 4
   */
  softBounces?: number;
  /**
   * Number of clicks for the timeframe
   * @format int64
   * @example 12
   */
  clicks?: number;
  /**
   * Number of unique clicks for the timeframe
   * @format int64
   * @example 8
   */
  uniqueClicks?: number;
  /**
   * Number of openings for the timeframe
   * @format int64
   * @example 47
   */
  opens?: number;
  /**
   * Number of unique openings for the timeframe
   * @format int64
   * @example 37
   */
  uniqueOpens?: number;
  /**
   * Number of complaint (spam report) for the timeframe
   * @format int64
   * @example 0
   */
  spamReports?: number;
  /**
   * Number of blocked contact emails for the timeframe
   * @format int64
   * @example 2
   */
  blocked?: number;
  /**
   * Number of invalid emails for the timeframe
   * @format int64
   * @example 0
   */
  invalid?: number;
  /**
   * Number of unsubscribed emails for the timeframe
   * @format int64
   * @example 0
   */
  unsubscribed?: number;
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
     * @example "2017-05-01T12:30:00.000Z"
     */
    blockedAt: string;
  }[];
}

export interface GetReports {
  reports?: {
    /**
     * Date of the statistics
     * @format date
     * @example "2017-04-06T00:00:00.000Z"
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
     * @example "2017-03-12T12:30:00.000Z"
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
      | "unsubscribed"
      | "error"
      | "loadedByProxy";
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
    /**
     * ID of the template (only available if the email is template based)
     * @format int64
     * @example 4
     */
    templateId?: number;
  }[];
}

export interface GetSmsEventReport {
  events?: {
    /**
     * Phone number which has generated the event
     * @example "00189001094"
     */
    phoneNumber?: string;
    /**
     * UTC date-time on which the event has been generated
     * @example "2017-03-12T12:30:00.000Z"
     */
    date?: string;
    /**
     * Message ID which generated the event
     * @example "1472640582425378"
     */
    messageId?: string;
    /**
     * Event which occurred
     * @example "accepted"
     */
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
      | "rejected"
      | "skipped";
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
     * @example "43"
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
   * @example "2017-05-01T12:30:00.000Z"
   */
  createdAt: string;
  /**
   * Last modification UTC date-time of the template (YYYY-MM-DDTHH:mm:ss.SSSZ)
   * @example "2017-05-12T12:30:00.000Z"
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
   * Type of webhook (marketing or transactional)
   * @example "marketing"
   */
  type: "marketing" | "transactional";
  /**
   * Creation UTC date-time of the webhook (YYYY-MM-DDTHH:mm:ss.SSSZ)
   * @example "2016-12-01T12:50:00.000Z"
   */
  createdAt: string;
  /**
   * Last modification UTC date-time of the webhook (YYYY-MM-DDTHH:mm:ss.SSSZ)
   * @example "2017-05-12T13:15:00.000Z"
   */
  modifiedAt: string;
  /**
   * Batching configuration of the webhook, we send batched webhooks if its true
   * @example true
   */
  batched?: boolean;
  /**
   * Authentication header to be send with the webhook requests
   * @example {"type":"bearer","token":"test-auth-token1234"}
   */
  auth?: object;
  headers?: object[];
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
   * @example "2017-05-12T12:30:00.000Z"
   */
  createdAt: string;
  /**
   * Last modification UTC date-time of the contact (YYYY-MM-DDTHH:mm:ss.SSSZ)
   * @example "2017-05-12T12:30:00.000Z"
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
       * @example "2017-03-12T20:15:13.000Z"
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
       * @example "2017-03-12T20:15:13.000Z"
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
       * @example "2017-03-12T20:15:13.000Z"
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
       * @example "2017-03-12T20:15:13.000Z"
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
         * @example "2017-03-12T20:15:13.000Z"
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
         * @example "2017-03-12T20:15:13.000Z"
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
       * @example "2017-03-12T20:15:13.000Z"
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
         * @example "2017-03-12T20:15:13.000Z"
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
    /** Listing of the delivered campaign for the contact */
    delivered?: {
      /**
       * ID of the campaign which generated the event
       * @format int64
       * @example 3
       */
      campaignId: number;
      /**
       * UTC date-time of the event
       * @example "2017-03-12T20:15:13.000Z"
       */
      eventTime: string;
    }[];
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
     * @example "2017-03-12T20:15:13.000Z"
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
     * @example "2017-03-12T20:15:13.000Z"
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
     * @example "2017-03-12T20:15:13.000Z"
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
     * @example "2017-03-12T20:15:13.000Z"
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
       * @example "2017-03-12T20:15:13.000Z"
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
       * @example "2017-03-12T20:15:13.000Z"
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
     * @example "2017-03-12T20:15:13.000Z"
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
       * @example "2017-03-12T20:15:13.000Z"
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
     * @example "2017-03-12T00:00:00.000Z"
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
  delivered?: {
    /**
     * ID of the campaign which generated the event
     * @format int64
     * @example 3
     */
    campaignId: number;
    /**
     * UTC date-time of the event
     * @example "2017-03-12T20:15:13.000Z"
     */
    eventTime: string;
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

export interface GetFolderLists {
  lists?: GetList[];
  /**
   * Number of lists in the folder
   * @format int64
   * @example 6
   */
  count?: number;
}

export interface GetLists {
  /** Listing of all the lists available in your account */
  lists?: (GetList & {
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
  count?: number;
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
  /**
   * Number of unique contacts in the list
   * @format int64
   * @example 1789
   */
  uniqueSubscribers: number;
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
   * @example "2017-03-13T17:05:09.000Z"
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
   * Rate of recipients without any privacy protection option enabled in their email client
   * @format float
   * @example 23.45
   */
  trackableViewsRate?: number;
  /**
   * Rate of recipients without any privacy protection option enabled in their email client, applied to all delivered emails
   * @format int64
   * @example 560
   */
  estimatedViews?: number;
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
  /**
   * Sender details including id or email and name (_optional_). Only one of either Sender's email or Sender's ID shall be passed in one request at a time. For example:
   * **{"name":"xyz", "email":"example@abc.com"}**
   * **{"name":"xyz", "id":123}**
   */
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
     * Select the sender for the template on the basis of sender id.
     * _In order to select a sender with specific pool of IP’s, dedicated ip users shall pass id (instead of email)_.
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
   * **Required if htmlUrl is empty**. If the template is designed using Drag & Drop editor via HTML content, then the design page will not have Drag & Drop editor access for that template. Body of the message (HTML must have more than 10 characters)
   * @example "The order n°xxxxx has been confirmed. Thanks for your purchase"
   */
  htmlContent?: string;
  /**
   * **Required if htmlContent is empty**. URL to the body of the email (HTML)
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
   * To personalize the **To** Field. If you want to include the first name and last name of your recipient, add **{FNAME} {LNAME}**. These contact attributes must already exist in your Brevo account. If input parameter **params** used please use **{{contact.FNAME}} {{contact.LNAME}}** for personalization
   * @example "{FNAME} {LNAME}"
   */
  toField?: string;
  /**
   * Absolute url of the attachment (**no local file**). Extensions allowed:
   * #### xlsx, xls, ods, docx, docm, doc, csv, pdf, txt, gif, jpg, jpeg, png, tif, tiff, rtf, bmp, cgm, css, shtml, html, htm, zip, xml, ppt, pptx, tar, ez, ics, mobi, msg, pub and eps
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
  /** Note:- **replicateTemplate** status will be available **only for template type campaigns.** */
  status?: "suspended" | "archive" | "darchive" | "sent" | "queued" | "replicate" | "replicateTemplate" | "draft";
}

export interface CreateSmtpTemplate {
  /**
   * Tag of the template
   * @example "OrderConfirmation"
   */
  tag?: string;
  /**
   * Sender details including id or email and name (_optional_). Only one of either Sender's email or Sender's ID shall be passed in one request at a time. For example:
   * **{"name":"xyz", "email":"example@abc.com"}**
   * **{"name":"xyz", "id":123}**
   */
  sender: {
    /**
     * Name of the sender. **If not passed, will be set to default**
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
     * Select the sender for the template on the basis of sender id.
     * _In order to select a sender with specific pool of IP’s, dedicated ip users shall pass id (instead of email)_.
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
   * Body of the message (HTML version). The field must have more than 10 characters. **REQUIRED if htmlUrl is empty**
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
   * To personalize the **To** Field. If you want to include the first name and last name of your recipient, add **{FNAME} {LNAME}**. These contact attributes must already exist in your Brevo account. If input parameter **params** used please use **{{contact.FNAME}} {{contact.LNAME}}** for personalization
   * @example "{FNAME} {LNAME}"
   */
  toField?: string;
  /**
   * Absolute url of the attachment (**no local file**). Extension allowed:
   * #### xlsx, xls, ods, docx, docm, doc, csv, pdf, txt, gif, jpg, jpeg, png, tif, tiff, rtf, bmp, cgm, css, shtml, html, htm, zip, xml, ppt, pptx, tar, ez, ics, mobi, msg, pub and eps'
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
  /**
   * Sender details including id or email and name (_optional_). Only one of either Sender's email or Sender's ID shall be passed in one request at a time. For example:
   * **{"name":"xyz", "email":"example@abc.com"}**
   * **{"name":"xyz", "id":123}**
   */
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
     * Select the sender for the campaign on the basis of sender id.
     * _In order to select a sender with specific pool of IP’s, dedicated ip users shall pass id (instead of email)_.
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
   * Mandatory if htmlUrl and templateId are empty. Body of the message (HTML).
   * @example "<!DOCTYPE html> <html> <body> <h1>Confirm you email</h1> <p>Please confirm your email address by clicking on the link below</p> </body> </html>"
   */
  htmlContent?: string;
  /**
   * **Mandatory if htmlContent and templateId are empty**. Url to the message (HTML). For example:
   * **https://html.domain.com**
   * @format url
   * @example "https://html.domain.com"
   */
  htmlUrl?: string;
  /**
   * **Mandatory if htmlContent and htmlUrl are empty**. Id of the transactional
   * email template with status _active_. Used to copy only its content fetched
   * from htmlContent/htmlUrl to an email campaign for RSS feature.
   * @format int64
   */
  templateId?: number;
  /**
   * Sending UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ). **Prefer to pass your timezone in date-time format for accurate result**.
   * If sendAtBestTime is set to true, your campaign will be sent according to the date passed (ignoring the time part). For example:
   * **2017-06-01T12:30:00+02:00**
   * @example "2017-06-01T10:30:00.000Z"
   */
  scheduledAt?: string;
  /**
   * Subject of the campaign. **Mandatory if abTesting is false**.
   * Ignored if abTesting is true.
   * @example "Discover the New Collection !"
   */
  subject?: string;
  /**
   * Preview text or preheader of the email campaign
   * @example "Thanks for your order!"
   */
  previewText?: string;
  /**
   * Email on which the campaign recipients will be able to reply to
   * @format email
   * @example "support@myshop.com"
   */
  replyTo?: string;
  /**
   * To personalize the **To** Field. If you want to include the first name and last name of your recipient, add **{FNAME} {LNAME}**. These contact attributes must already exist in your Brevo account. If input parameter **params** used please use **{{contact.FNAME}} {{contact.LNAME}}** for personalization
   * @example "{FNAME} {LNAME}"
   */
  toField?: string;
  /** Segment ids and List ids to include/exclude from campaign */
  recipients?: {
    /** List ids to exclude from the campaign */
    exclusionListIds?: number[];
    /** **Mandatory if scheduledAt is not empty**. List Ids to send the campaign to */
    listIds?: number[];
    /** **Mandatory if listIds are not used**. Segment ids to send the campaign to. */
    segmentIds?: number[];
  };
  /**
   * Absolute url of the attachment (no local file).
   * Extension allowed:
   * #### xlsx, xls, ods, docx, docm, doc, csv, pdf, txt, gif, jpg, jpeg, png, tif, tiff, rtf, bmp, cgm, css, shtml, html, htm, zip, xml, ppt, pptx, tar, ez, ics, mobi, msg, pub and eps
   * @format url
   * @example "https://attachment.domain.com"
   */
  attachmentUrl?: string;
  /**
   * Use true to embedded the images in your email. Final size of
   * the email should be less than **4MB**. Campaigns with embedded images can
   * _not be sent to more than 5000 contacts_
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
   * Pass the set of attributes to customize the type classic campaign. For example: **{"FNAME":"Joe", "LNAME":"Doe"}**. Only available if **type** is **classic**. It's considered only if campaign is in _New Template Language format_. The New Template Language is dependent on the values of **subject, htmlContent/htmlUrl, sender.name & toField**
   * @example {"FNAME":"Joe","LNAME":"Doe"}
   */
  params?: Record<string, any>;
  /**
   * Set this to true if you want to send your campaign at best time.
   * @default false
   * @example true
   */
  sendAtBestTime?: boolean;
  /**
   * Status of A/B Test. abTesting = false means it is disabled & abTesting = true means it is enabled. **subjectA, subjectB, splitRule, winnerCriteria & winnerDelay** will be considered when abTesting is set to true.
   * subjectA & subjectB are mandatory together & subject if passed is ignored. **Can be set to true only if sendAtBestTime is false**.
   * You will be able to set up two subject lines for your campaign and send them to a random sample of your total recipients. Half of the test group will receive version A, and the other half will receive version B
   * @default false
   * @example true
   */
  abTesting?: boolean;
  /**
   * Subject A of the campaign. **Mandatory if abTesting = true**.
   * subjectA & subjectB should have unique value
   * @example "Discover the New Collection!"
   */
  subjectA?: string;
  /**
   * Subject B of the campaign. **Mandatory if abTesting = true**.
   * subjectA & subjectB should have unique value
   * @example "Want to discover the New Collection?"
   */
  subjectB?: string;
  /**
   * Add the size of your test groups. **Mandatory if abTesting = true & 'recipients' is passed**. We'll send version A and B to a random sample of recipients, and then the winning version to everyone else
   * @format int64
   * @min 1
   * @max 50
   * @example 50
   */
  splitRule?: number;
  /**
   * Choose the metrics that will determinate the winning version. **Mandatory if _splitRule_ >= 1 and < 50**. If splitRule = 50, `winnerCriteria` is ignored if passed
   * @example "open"
   */
  winnerCriteria?: "open" | "click";
  /**
   * Choose the duration of the test in hours. Maximum is 7 days, pass 24*7 = 168 hours. The winning version will be sent at the end of the test. **Mandatory if _splitRule_ >= 1 and < 50**. If splitRule = 50, `winnerDelay` is ignored if passed
   * @format int64
   * @min 1
   * @max 168
   * @example 50
   */
  winnerDelay?: number;
  /**
   * **Available for dedicated ip clients**. Set this to true if you wish to warm up your ip.
   * @default false
   * @example true
   */
  ipWarmupEnable?: boolean;
  /**
   * **Mandatory if ipWarmupEnable is set to true**. Set an initial quota greater than 1 for warming up your ip. We recommend you set a value of 3000.
   * @format int64
   * @example 3000
   */
  initialQuota?: number;
  /**
   * **Mandatory if ipWarmupEnable is set to true**. Set a percentage increase rate for warming up your ip. We recommend you set the increase rate to 30% per day. If you want to send the same number of emails every day, set the daily increase value to 0%.
   * @format int64
   * @min 0
   * @max 100
   * @example 70
   */
  increaseRate?: number;
  /**
   * Enter an unsubscription page id. The page id is a 24 digit alphanumeric id that can be found in the URL when editing the page. If not entered, then the default unsubscription page will be used.
   * @example "62cbb7fabbe85021021aac52"
   */
  unsubscriptionPageId?: string;
  /**
   * **Mandatory if templateId is used containing the {{ update_profile }} tag**. Enter an update profile form id. The form id is a 24 digit alphanumeric id that can be found in the URL when editing the form. If not entered, then the default update profile form will be used.
   * @example "6313436b9ad40e23b371d095"
   */
  updateFormId?: string;
}

export interface UpdateEmailCampaign {
  /**
   * Tag of the campaign
   * @example "Newsletter"
   */
  tag?: string;
  /**
   * Sender details including id or email and name (optional). Only one of either Sender's email or Sender's ID shall be passed in one request at a time. For example:
   * **{"name":"xyz", "email":"example@abc.com"}**
   * **{"name":"xyz", "id":123}**
   */
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
     * Select the sender for the campaign on the basis of sender id. **In order to select a sender with specific pool of IP’s, dedicated ip users shall pass id (instead of email)**.
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
   * Body of the message (HTML version). If the campaign is designed using Drag & Drop editor via HTML content, then the design page will not have Drag & Drop editor access for that campaign. **REQUIRED if htmlUrl is empty**
   * @example "<!DOCTYPE html> <html> <body> <h1>Confirm you email</h1> <p>Please confirm your email address by clicking on the link below</p> </body> </html>"
   */
  htmlContent?: string;
  /**
   * Url which contents the body of the email message. **REQUIRED if htmlContent is empty**
   * @format url
   * @example "https://html.domain.com"
   */
  htmlUrl?: string;
  /**
   * UTC date-time on which the campaign has to run (YYYY-MM-DDTHH:mm:ss.SSSZ).
   * **Prefer to pass your timezone in date-time format for accurate result.**
   * If sendAtBestTime is set to true, your campaign will be sent according
   * to the date passed (ignoring the time part).
   * @example "2017-06-01T10:30:00.000Z"
   */
  scheduledAt?: string;
  /**
   * Subject of the campaign
   * @example "Discover the New Collection !"
   */
  subject?: string;
  /**
   * Preview text or preheader of the email campaign
   * @example "Thanks for your order!"
   */
  previewText?: string;
  /**
   * Email on which campaign recipients will be able to reply to
   * @format email
   * @example "support@myshop.com"
   */
  replyTo?: string;
  /**
   * To personalize the **To** Field. If you want to include the first
   * name and last name of your recipient, add **{FNAME} {LNAME}**. These contact
   * attributes must already exist in your Brevo account. If input parameter
   * **params** used please use **{{contact.FNAME}} {{contact.LNAME}}** for personalization
   * @example "{FNAME} {LNAME}"
   */
  toField?: string;
  /** Segment ids and List ids to include/exclude from campaign */
  recipients?: {
    /** List ids which have to be excluded from a campaign */
    exclusionListIds?: number[];
    /** Lists Ids to send the campaign to. **Campaign should only be updated with listIds if listIds were used to create it. REQUIRED if already not present in campaign and scheduledAt is not empty** */
    listIds?: number[];
    /** **Mandatory if listIds are not used. Campaign should only be updated with segmentIds if segmentIds were used to create it.** Segment ids to send the campaign to. */
    segmentIds?: number[];
  };
  /**
   * Absolute url of the attachment (no local file).
   * Extension allowed:
   * #### xlsx, xls, ods, docx, docm, doc, csv, pdf, txt, gif, jpg, jpeg, png, tif, tiff, rtf, bmp, cgm, css, shtml, html, htm, zip, xml, ppt, pptx, tar, ez, ics, mobi, msg, pub and eps'
   * @format url
   * @example "https://attachment.domain.com"
   */
  attachmentUrl?: string;
  /**
   * Status of inline image. inlineImageActivation = false means image can’t be embedded, & inlineImageActivation = true means image can be embedded, in the email.
   * You cannot send a campaign of more than **4MB** with images embedded in the email. Campaigns with the images embedded in the email _must be sent to less than 5000 contacts_.
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
   * **FOR TRIGGER ONLY !** Type of trigger campaign.recurring = false means contact can receive the same Trigger campaign only once, & recurring = true means contact can receive the same Trigger campaign several times
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
   * Pass the set of attributes to customize the type classic campaign. For example: **{"FNAME":"Joe", "LNAME":"Doe"}**. Only available if **type** is **classic**. It's considered only if campaign is in _New Template Language format_. The New Template Language is dependent on the values of **subject, htmlContent/htmlUrl, sender.name & toField**
   * @example {"FNAME":"Joe","LNAME":"Doe"}
   */
  params?: Record<string, any>;
  /**
   * Set this to true if you want to send your campaign at best time.
   * Note:- **if true, warmup ip will be disabled.**
   * @example true
   */
  sendAtBestTime?: boolean;
  /**
   * Status of A/B Test. abTesting = false means it is disabled & abTesting = true means it is enabled. **subjectA, subjectB, splitRule, winnerCriteria & winnerDelay** will be considered when abTesting is set to true.
   * subjectA & subjectB are mandatory together & subject if passed is ignored. **Can be set to true only if sendAtBestTime is false**.
   * You will be able to set up two subject lines for your campaign and send them to a random sample of your total recipients. Half of the test group will receive version A, and the other half will receive version B
   * @default false
   * @example true
   */
  abTesting?: boolean;
  /**
   * Subject A of the campaign. **Mandatory if abTesting = true**.
   * subjectA & subjectB should have unique value
   * @example "Discover the New Collection!"
   */
  subjectA?: string;
  /**
   * Subject B of the campaign. **Mandatory if abTesting = true**.
   * subjectA & subjectB should have unique value
   * @example "Want to discover the New Collection?"
   */
  subjectB?: string;
  /**
   * Add the size of your test groups. **Mandatory if abTesting = true & 'recipients' is passed**. We'll send version A and B to a random sample of recipients, and then the winning version to everyone else
   * @format int64
   * @min 1
   * @max 50
   * @example 50
   */
  splitRule?: number;
  /**
   * Choose the metrics that will determinate the winning version. **Mandatory if _splitRule_ >= 1 and < 50**. If splitRule = 50, `winnerCriteria` is ignored if passed
   * @example "open"
   */
  winnerCriteria?: "open" | "click";
  /**
   * Choose the duration of the test in hours. Maximum is 7 days, pass 24*7 = 168 hours. The winning version will be sent at the end of the test. **Mandatory if _splitRule_ >= 1 and < 50**. If splitRule = 50, `winnerDelay` is ignored if passed
   * @format int64
   * @min 1
   * @max 168
   * @example 50
   */
  winnerDelay?: number;
  /**
   * **Available for dedicated ip clients**. Set this to true if you wish to warm up your ip.
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
  /**
   * Enter an unsubscription page id. The page id is a 24 digit alphanumeric id that can be found in the URL when editing the page.
   * @example "62cbb7fabbe85021021aac52"
   */
  unsubscriptionPageId?: string;
  /**
   * **Mandatory if templateId is used containing the {{ update_profile }} tag**. Enter an update profile form id. The form id is a 24 digit alphanumeric id that can be found in the URL when editing the form.
   * @example "6313436b9ad40e23b371d095"
   */
  updateFormId?: string;
}

export interface GetSharedTemplateUrl {
  /**
   * A unique URL for the email campaign or transactional template. This URL can be shared with other Brevo users.
   * @format url
   * @example "https://my.brevo.com/pt2YU7R5W_guXlowgumy_VX4pFsKu._zd0Gjj96x1_GMmzc1Qps5ZIpj6nx-"
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
   * Webhook called once the export process is finished. For reference, https://help.brevo.com/hc/en-us/articles/360007666479
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
   * URL that will be called once the export process is finished. For reference, https://help.brevo.com/hc/en-us/articles/360007666479
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
   * The absolute url of the image (**no local file**). Maximum allowed size for image is **2MB**.
   * Allowed extensions for images are:
   * #### jpeg, jpg, png, bmp, gif.
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
  /**
   * **Mandatory if `templateId` is not passed**. Pass name (_optional_) and email or id of sender from which emails will be sent. **`name` will be ignored if passed along with sender `id`**. For example,
   * **{"name":"Mary from MyShop", "email":"no-reply@myshop.com"}**
   * **{"id":2}**
   */
  sender?: {
    /**
     * description: Name of the sender from which the emails will be sent. **Maximum allowed characters are 70**. Applicable only when email is passed.
     * @example "Mary from MyShop"
     */
    name?: string;
    /**
     * Email of the sender from which the emails will be sent. Mandatory if sender id is not passed.
     * @format email
     * @example "no-reply@myshop.com"
     */
    email?: string;
    /**
     * Id of the sender from which the emails will be sent. In order to select a sender with specific pool of IP’s, dedicated ip users shall pass id (instead of email). Mandatory if email is not passed.
     * @format int64
     * @example 2
     */
    id?: number;
  };
  /**
   * **Mandatory if messageVersions are not passed, ignored if messageVersions are passed**
   * List of email addresses and names (_optional_) of the recipients. For example,
   * **[{"name":"Jimmy", "email":"jimmy98@example.com"}, {"name":"Joe", "email":"joe@example.com"}]**
   */
  to?: {
    /**
     * Email address of the recipient
     * @format email
     * @example "jimmy98@example.com"
     */
    email: string;
    /**
     * Name of the recipient. **Maximum allowed characters are 70**.
     * @example "Jimmy"
     */
    name?: string;
  }[];
  /** List of email addresses and names (_optional_) of the recipients in bcc */
  bcc?: {
    /**
     * Email address of the recipient in bcc
     * @format email
     * @example "helen9766@example.com"
     */
    email: string;
    /**
     * Name of the recipient in bcc. **Maximum allowed characters are 70**.
     * @example "Helen"
     */
    name?: string;
  }[];
  /** List of email addresses and names (_optional_) of the recipients in cc */
  cc?: {
    /**
     * Email address of the recipient in cc
     * @format email
     * @example "ann6533@example.com"
     */
    email: string;
    /**
     * Name of the recipient in cc. **Maximum allowed characters are 70**.
     * @example "Ann"
     */
    name?: string;
  }[];
  /**
   * HTML body of the message. **Mandatory if 'templateId' is not passed, ignored if 'templateId' is passed**
   * @example "<!DOCTYPE html> <html> <body> <h1>Confirm you email</h1> <p>Please confirm your email address by clicking on the link below</p> </body> </html>"
   */
  htmlContent?: string;
  /**
   * Plain Text body of the message. **Ignored if 'templateId' is passed**
   * @example "Please confirm your email address by clicking on the link https://text.domain.com"
   */
  textContent?: string;
  /**
   * Subject of the message. **Mandatory if 'templateId' is not passed**
   * @example "Login Email confirmation"
   */
  subject?: string;
  /**
   * Email (**required**), along with name (_optional_), on which transactional mail recipients will be able to reply back. For example,
   * **{"email":"ann6533@example.com", "name":"Ann"}**
   */
  replyTo?: {
    /**
     * Email address in reply to
     * @format email
     * @example "ann6533@example.com"
     */
    email: string;
    /**
     * Name in reply to. **Maximum allowed characters are 70**.
     * @example "Ann"
     */
    name?: string;
  };
  /**
   * Pass the _absolute URL_ (**no local file**) or the _base64 content_ of the attachment along with the attachment name. **Mandatory if attachment content is passed**. For example,
   * **[{"url":"https://attachment.domain.com/myAttachmentFromUrl.jpg", "name":"myAttachmentFromUrl.jpg"}, {"content":"base64 example content", "name":"myAttachmentFromBase64.jpg"}]**.
   * Allowed extensions for attachment file:
   * #### xlsx, xls, ods, docx, docm, doc, csv, pdf, txt, gif, jpg, jpeg, png, tif, tiff, rtf, bmp, cgm, css, shtml, html, htm, zip, xml, ppt, pptx, tar, ez, ics, mobi, msg, pub, eps, odt, mp3, m4a, m4v, wma, ogg, flac, wav, aif, aifc, aiff, mp4, mov, avi, mkv, mpeg, mpg, wmv, pkpass and xlsm.
   * If `templateId` is passed and is in New Template Language format then both attachment url and content are accepted. If template is in Old template Language format, then `attachment` is ignored
   */
  attachment?: {
    /**
     * Absolute url of the attachment (**no local file**).
     * @format url
     * @example "https://attachment.domain.com/myAttachmentFromUrl.jpg"
     */
    url?: string;
    /**
     * Base64 encoded chunk data of the attachment generated on the fly
     * @format byte
     * @pattern ^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$
     * @example "b3JkZXIucGRm"
     */
    content?: string;
    /**
     * **Required if content is passed**. Name of the attachment
     * @example "myAttachment.png"
     */
    name?: string;
  }[];
  /**
   * Pass the set of custom headers (_not the standard headers_) that shall be sent along the mail headers in the original email. **'sender.ip'** header can be set (**only for dedicated ip users**) to mention the IP to be used for sending transactional emails. Headers are allowed in `This-Case-Only` (i.e. words separated by hyphen with first letter of each word in capital letter), they will be converted to such case styling if not in this format in the request payload. For example,
   * **{"sender.ip":"1.2.3.4", "X-Mailin-custom":"some_custom_header", "idempotencyKey":"abc-123"}**.
   * @example {"sender.ip":"1.2.3.4","X-Mailin-custom":"some_custom_header","idempotencyKey":"abc-123"}
   */
  headers?: Record<string, any>;
  /**
   * Id of the template.
   * @format int64
   * @example 2
   */
  templateId?: number;
  /**
   * Pass the set of attributes to customize the template. For example, **{"FNAME":"Joe", "LNAME":"Doe"}**. It's **considered only if template is in New Template Language format**.
   * @example {"FNAME":"Joe","LNAME":"Doe"}
   */
  params?: Record<string, any>;
  /**
   * You can customize and send out multiple versions of a mail. **templateId** can be customized only if global parameter contains templateId. **htmlContent and textContent** can be customized only if any of the two, htmlContent or textContent, is present in global parameters. Some global parameters such as **to(mandatory), bcc, cc, replyTo, subject** can also be customized specific to each version.
   * Total number of recipients in one API request must not exceed 2000. However, you can still pass upto 99 recipients maximum in one message version.
   * The size of individual params in all the messageVersions shall not exceed **100 KB** limit and that of cumulative params shall not exceed **1000 KB**.
   * You can follow this **step-by-step guide** on how to use **messageVersions** to batch send emails - **https://developers.brevo.com/docs/batch-send-transactional-emails**
   */
  messageVersions?: {
    /**
     * List of email addresses and names (_optional_) of the recipients. For example,
     * **[{"name":"Jimmy", "email":"jimmy98@example.com"}, {"name":"Joe", "email":"joe@example.com"}]**
     */
    to: {
      /**
       * Email address of the recipient
       * @format email
       * @example "jimmy98@example.com"
       */
      email: string;
      /**
       * Name of the recipient. **Maximum allowed characters are 70**.
       * @example "Jimmy"
       */
      name?: string;
    }[];
    /**
     * Pass the set of attributes to customize the template. For example, **{"FNAME":"Joe", "LNAME":"Doe"}**. It's **considered only if template is in New Template Language format**.
     * @example {"FNAME":"Joe","LNAME":"Doe"}
     */
    params?: Record<string, any>;
    /** List of email addresses and names (_optional_) of the recipients in bcc */
    bcc?: {
      /**
       * Email address of the recipient in bcc
       * @format email
       * @example "helen9766@example.com"
       */
      email: string;
      /**
       * Name of the recipient in bcc. **Maximum allowed characters are 70**.
       * @example "Helen"
       */
      name?: string;
    }[];
    /** List of email addresses and names (_optional_) of the recipients in cc */
    cc?: {
      /**
       * Email address of the recipient in cc
       * @format email
       * @example "ann6533@example.com"
       */
      email: string;
      /**
       * Name of the recipient in cc. **Maximum allowed characters are 70**.
       * @example "Ann"
       */
      name?: string;
    }[];
    /**
     * Email (**required**), along with name (_optional_), on which transactional mail recipients will be able to reply back. For example,
     * **{"email":"ann6533@example.com", "name":"Ann"}**
     */
    replyTo?: {
      /**
       * Email address in reply to
       * @format email
       * @example "ann6533@example.com"
       */
      email: string;
      /**
       * Name in reply to. **Maximum allowed characters are 70**.
       * @example "Ann"
       */
      name?: string;
    };
    /**
     * Custom subject specific to message version
     * @example "Login Email confirmation"
     */
    subject?: string;
    /**
     * HTML body of the message. **Mandatory if 'templateId' is not passed, ignored if 'templateId' is passed**
     * @example "<!DOCTYPE html> <html> <body> <h1>Confirm you email</h1> <p>Please confirm your email address by clicking on the link below</p> </body> </html>"
     */
    htmlContent?: string;
    /**
     * Plain Text body of the message. **Ignored if 'templateId' is passed**
     * @example "Please confirm your email address by clicking on the link https://text.domain.com"
     */
    textContent?: string;
  }[];
  /** Tag your emails to find them more easily */
  tags?: string[];
  /**
   * UTC date-time on which the email has to schedule (YYYY-MM-DDTHH:mm:ss.SSSZ). Prefer to pass your timezone in date-time format for scheduling. There can be an expected delay of +5 minutes in scheduled email delivery.
   * @format date-time
   * @example "2022-04-05T12:30:00+02:00"
   */
  scheduledAt?: string;
  /**
   * Valid UUIDv4 batch id to identify the scheduled batches transactional email. If not passed we will create a valid UUIDv4 batch id at our end.
   * @example "5c6cfa04-eed9-42c2-8b5c-6d470d978e9d"
   */
  batchId?: string;
}

export interface DeleteHardbounces {
  /**
   * Starting date (YYYY-MM-DD) of the time period for deletion. The hardbounces occurred after this date will be deleted. Must be less than or equal to the endDate
   * @example "2016-12-31T00:00:00.000Z"
   */
  startDate?: string;
  /**
   * Ending date (YYYY-MM-DD) of the time period for deletion. The hardbounces until this date will be deleted. Must be greater than or equal to the startDate
   * @example "2017-01-31T00:00:00.000Z"
   */
  endDate?: string;
  /**
   * Target a specific email address
   * @format email
   * @example "alex76@example.com"
   */
  contactEmail?: string;
}

export interface BlockDomain {
  /**
   * name of the domain to be blocked
   * @example "example.com"
   */
  domain: string;
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
  /**
   * - Events triggering the webhook. Possible values for **Transactional** type webhook:
   * #### `sent` OR `request`, `delivered`, `hardBounce`, `softBounce`, `blocked`, `spam`, `invalid`, `deferred`, `click`, `opened`, `uniqueOpened` and `unsubscribed`
   * - Possible values for **Marketing** type webhook:
   * #### `spam`, `opened`, `click`, `hardBounce`, `softBounce`, `unsubscribed`, `listAddition` & `delivered`
   * - Possible values for **Inbound** type webhook:
   * #### `inboundEmailProcessed`
   */
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
    | "inboundEmailProcessed"
  )[];
  /**
   * Type of the webhook
   * @default "transactional"
   * @example "marketing"
   */
  type?: "transactional" | "marketing" | "inbound";
  /**
   * Inbound domain of webhook, required in case of event type `inbound`
   * @example "example.com"
   */
  domain?: string;
  /**
   * Batching configuration of the webhook, we send batched webhooks if its true
   * @example true
   */
  batched?: boolean;
  /**
   * Authentication header to be send with the webhook requests
   * @example {"type":"bearer","token":"test-auth-token1234"}
   */
  auth?: object;
  headers?: object[];
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
  /**
   * - Events triggering the webhook. Possible values for **Transactional** type webhook:
   * #### `sent` OR `request`, `delivered`, `hardBounce`, `softBounce`, `blocked`, `spam`, `invalid`, `deferred`, `click`, `opened`, `uniqueOpened` and `unsubscribed`
   * - Possible values for **Marketing** type webhook:
   * #### `spam`, `opened`, `click`, `hardBounce`, `softBounce`, `unsubscribed`, `listAddition` & `delivered`
   * - Possible values for **Inbound** type webhook:
   * #### `inboundEmailProcessed`
   */
  events?: (
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
    | "inboundEmailProcessed"
  )[];
  /**
   * Inbound domain of webhook, used in case of event type `inbound`
   * @example "example.com"
   */
  domain?: string;
  /**
   * Batching configuration of the webhook, we send batched webhooks if its true
   * @example true
   */
  batched?: boolean;
  /**
   * Authentication header to be send with the webhook requests
   * @example {"type":"bearer","token":"test-auth-token1234"}
   */
  auth?: object;
  headers?: object[];
}

export interface CreateDoiContact {
  /**
   * Email address where the confirmation email will be sent. This email address will be the identifier for all other contact attributes.
   * @format email
   * @example "elly@example.com"
   */
  email: string;
  /**
   * Pass the set of attributes and their values. **These attributes must be present in your Brevo account**. For eg. **{'FNAME':'Elly', 'LNAME':'Roger', 'COUNTRIES':['India','China']}**
   * @example {"FNAME":"Elly","LNAME":"Roger","COUNTRIES":["India","China"]}
   */
  attributes?: Record<string, number | string | boolean | string[]>;
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
   * URL of the web page that user will be redirected to after clicking on the double opt in URL. When editing your DOI template you can reference this URL by using the tag **{{ params.DOIurl }}**.
   * @format url
   * @example "http://requestb.in/173lyyx1"
   */
  redirectionUrl: string;
}

export interface CreateContact {
  /**
   * Email address of the user. **Mandatory if "SMS" field is not passed in "attributes" parameter**. Mobile Number in **SMS** field should be passed with proper country code. For example:
   * **{"SMS":"+91xxxxxxxxxx"}** or **{"SMS":"0091xxxxxxxxxx"}**
   * @format email
   * @example "elly@example.com"
   */
  email?: string;
  /**
   * Pass your own Id to create a contact.
   * @example "externalId"
   */
  ext_id?: string;
  /**
   * Pass the set of attributes and their values. The attribute's parameter should be passed in capital letter while creating a contact. Values that don't match the attribute type (e.g. text or string in a date attribute) will be ignored. **These attributes must be present in your Brevo account.**. For eg:
   * **{"FNAME":"Elly", "LNAME":"Roger", "COUNTRIES":["India","China"]}**
   * @example {"FNAME":"Elly","LNAME":"Roger","COUNTRIES":["India","China"]}
   */
  attributes?: Record<string, number | string | boolean | string[]>;
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
   * Pass the set of attributes to be updated. **These attributes must be present in your account**. To update existing email address of a contact with the new one please pass EMAIL in attributes. For example, **{ "EMAIL":"newemail@domain.com", "FNAME":"Ellie", "LNAME":"Roger", "COUNTRIES":["India","China"]}**.
   * The attribute's parameter should be passed in capital letter while updating a contact. Values that don't match the attribute type (e.g. text or string in a date attribute) will be ignored. Keep in mind transactional attributes can be updated the same way as normal attributes. Mobile Number in **SMS** field should be passed with proper country code. For example: **{"SMS":"+91xxxxxxxxxx"} or {"SMS":"0091xxxxxxxxxx"}**
   * @example {"EMAIL":"newemail@domain.com","FNAME":"Ellie","LNAME":"Roger","COUNTRIES":["India","China"]}
   */
  attributes?: Record<string, number | string | boolean | string[]>;
  /**
   * Pass your own Id to update ext_id of a contact.
   * @example "updateExternalId"
   */
  ext_id?: string;
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

export interface UpdateBatchContacts {
  /** List of contacts to be updated */
  contacts?: {
    /**
     * Email address of the user to be updated (For each operation only pass one of the supported contact identifiers. Email, id or sms)
     * @format email
     * @example "elly@example.com"
     */
    email?: string;
    /**
     * id of the user to be updated (For each operation only pass one of the supported contact identifiers. Email, id or sms)
     * @format int64
     * @example 31
     */
    id?: number;
    /**
     * SMS of the user to be updated (For each operation only pass one of the supported contact identifiers. Email, id or sms)
     * @example "+91xxxxxxxxxx"
     */
    sms?: string;
    /**
     * Pass your own Id to update ext_id of a contact.
     * @example "UpdateExternalId"
     */
    ext_id?: string;
    /**
     * Pass the set of attributes to be updated. **These attributes must be present in your account**. To update existing email address of a contact with the new one please pass EMAIL in attribtes. For example, **{ "EMAIL":"newemail@domain.com", "FNAME":"Ellie", "LNAME":"Roger"}**.
     * Keep in mind transactional attributes can be updated the same way as normal attributes. Mobile Number in **SMS** field should be passed with proper country code. For example: **{"SMS":"+91xxxxxxxxxx"} or {"SMS":"0091xxxxxxxxxx"}**
     * @example {"EMAIL":"newemail@domain.com","FNAME":"Ellie","LNAME":"Roger"}
     */
    attributes?: Record<string, any>;
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
  }[];
}

export interface CreateAttribute {
  /**
   * Value of the attribute. **Use only if the attribute's category is 'calculated' or 'global'**
   * @example "COUNT[BLACKLISTED,BLACKLISTED,<,NOW()]"
   */
  value?: string;
  /**
   * Type of the attribute. **Use only if the attribute's category is 'calculated' or 'global'**
   * @example true
   */
  isRecurring?: boolean;
  /**
   * List of values and labels that the attribute can take. **Use only if the attribute's category is "category"**. For example:
   * **[{"value":1, "label":"male"}, {"value":2, "label":"female"}]**
   */
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
   * List of options you want to add for multiple-choice attribute. **Use only if the attribute's category is "normal" and attribute's type is "multiple-choice".** For example:
   * **["USA","INDIA"]**
   */
  multiCategoryOptions?: string[];
  /**
   * Type of the attribute. **Use only if the attribute's category is 'normal', 'category' or 'transactional'**
   * Type **boolean and multiple-choice** is only available if the category is **normal** attribute
   * Type **id** is only available if the category is **transactional** attribute
   * Type **category** is only available if the category is **category** attribute
   * @example "text"
   */
  type?: "text" | "date" | "float" | "boolean" | "id" | "category" | "multiple-choice";
}

export interface UpdateAttribute {
  /**
   * Value of the attribute to update. **Use only if the attribute's category is 'calculated' or 'global'**
   * @example "COUNT[BLACKLISTED,BLACKLISTED,<,NOW()]"
   */
  value?: string;
  /**
   * List of the values and labels that the attribute can take. **Use only if the attribute's category is "category"**. For example,
   * **[{"value":1, "label":"male"}, {"value":2, "label":"female"}]**
   */
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
  /**
   * Use this option to add multiple-choice attributes options only if the attribute's category is "normal". **This option is specifically designed for updating multiple-choice attributes**. For example:
   * **["USA","INDIA"]**
   */
  multiCategoryOptions?: string[];
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
  /**
   * List of all the attributes that you want to export. **These attributes must be present in your contact database.** For example:
   * **['fname', 'lname', 'email']**
   */
  exportAttributes?: string[];
  /** Set the filter for the contacts to be exported. */
  customContactFilter: {
    /**
     * **Mandatory if neither actionForEmailCampaigns nor actionForSmsCampaigns is passed.** This will export the contacts on the basis of provided action applied on contacts as per the list id.
     * * **allContacts** - Fetch the list of all contacts for a particular list.
     * * **subscribed & unsubscribed** - Fetch the list of subscribed / unsubscribed (blacklisted via any means) contacts for a particular list.
     * * **unsubscribedPerList** - Fetch the list of contacts that are unsubscribed from a particular list only.
     */
    actionForContacts?: "allContacts" | "subscribed" | "unsubscribed" | "unsubscribedPerList";
    /**
     * **Mandatory if neither actionForContacts nor actionForSmsCampaigns is passed.** This will export the contacts on the basis of provided action applied on email campaigns.
     * * **openers & nonOpeners** - emailCampaignId is mandatory. Fetch the list of readers / non-readers for a particular email campaign.
     * * **clickers & nonClickers** - emailCampaignId is mandatory. Fetch the list of clickers / non-clickers for a particular email campaign.
     * * **unsubscribed** - emailCampaignId is mandatory. Fetch the list of all unsubscribed (blacklisted via any means) contacts for a particular email campaign.
     * * **hardBounces & softBounces** - emailCampaignId is optional. Fetch the list of hard bounces / soft bounces for a particular / all email campaign(s).
     */
    actionForEmailCampaigns?:
      | "openers"
      | "nonOpeners"
      | "clickers"
      | "nonClickers"
      | "unsubscribed"
      | "hardBounces"
      | "softBounces";
    /**
     * **Mandatory if neither actionForContacts nor actionForEmailCampaigns is passed.** This will export the contacts on the basis of provided action applied on sms campaigns.
     * * **unsubscribed** - Fetch the list of all unsubscribed (blacklisted via any means) contacts for all / particular sms campaigns.
     * * **hardBounces & softBounces** - Fetch the list of hard bounces / soft bounces for all / particular sms campaigns.
     */
    actionForSmsCampaigns?: "hardBounces" | "softBounces" | "unsubscribed";
    /**
     * **Mandatory if actionForContacts is passed, ignored otherwise.** Id of the list for which the corresponding action shall be applied in the filter.
     * @format int64
     * @example 2
     */
    listId?: number;
    /**
     * Considered only if **actionForEmailCampaigns** is passed, ignored otherwise. **Mandatory if action is one of the following - openers, nonOpeners, clickers, nonClickers, unsubscribed.**
     * The id of the email campaign for which the corresponding action shall be applied in the filter.
     * @format int64
     * @example 12
     */
    emailCampaignId?: number;
    /**
     * Considered only if **actionForSmsCampaigns** is passed, ignored otherwise. The id of sms campaign for which the corresponding action shall be applied in the filter.
     * @format int64
     * @example 12
     */
    smsCampaignId?: number;
  };
  /**
   * Webhook that will be called once the export process is finished. For reference, https://help.brevo.com/hc/en-us/articles/360007666479
   * @format url
   * @example "http://requestb.in/173lyyx1"
   */
  notifyUrl?: string;
}

export interface RequestContactImport {
  /**
   * **Mandatory if fileBody and jsonBody is not defined.** URL of the file to be imported (**no local file**). Possible file formats:
   * #### .txt, .csv, .json
   * @format url
   * @example "https://importfile.domain.com"
   */
  fileUrl?: string;
  /**
   * **Mandatory if fileUrl and jsonBody is not defined.** CSV content to be imported. Use semicolon to separate multiple attributes. **Maximum allowed file body size is 10MB** . However we recommend a safe limit of around 8 MB to avoid the issues caused due to increase of file body size while parsing. Please use fileUrl instead to import bigger files.
   * @example "NAME;SURNAME;EMAIL
   * Smith;John;john.smith@example.com
   * Roger;Ellie;ellie36@example.com"
   */
  fileBody?: string;
  /** **Mandatory if fileUrl and fileBody is not defined.** JSON content to be imported. **Maximum allowed json body size is 10MB** . However we recommend a safe limit of around 8 MB to avoid the issues caused due to increase of json body size while parsing. Please use fileUrl instead to import bigger files. */
  jsonBody?: {
    email?: string;
    /** List of attributes to be imported */
    attributes?: Record<string, any>;
  }[];
  /** **Mandatory if newList is not defined.** Ids of the lists in which the contacts shall be imported. For example, **[2, 4, 7]**. */
  listIds?: number[];
  /**
   * URL that will be called once the import process is finished. For reference, https://help.brevo.com/hc/en-us/articles/360007666479
   * @format url
   * @example "http://requestb.in/173lyyx1"
   */
  notifyUrl?: string;
  /** To create a new list and import the contacts into it, pass the listName and an optional folderId. */
  newList?: {
    /**
     * List with listName will be created first and users will be imported in it. **Mandatory if listIds is empty**.
     * @example "ContactImport - 2017-05"
     */
    listName?: string;
    /**
     * Id of the folder where this new list shall be created. **Mandatory if listName is not empty**
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
   * To facilitate the choice to erase any attribute of the existing contacts with empty value. emptyContactsAttributes = true means the empty fields in your import will erase any attribute that currently contain data in Brevo, & emptyContactsAttributes = false means the empty fields will not affect your existing data ( **only available if `updateExistingContacts` set to true **)
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
   * Content of the message. The **maximum characters used per SMS is 160**, if used more than that, it will be counted as more than one SMS
   * @example "Get a discount by visiting our NY store and saying : Happy Spring!"
   */
  content: string;
  recipients?: {
    /** Lists Ids to send the campaign to. **REQUIRED if scheduledAt is not empty** */
    listIds: number[];
    /** List ids which have to be excluded from a campaign */
    exclusionListIds?: number[];
  };
  /**
   * UTC date-time on which the campaign has to run (YYYY-MM-DDTHH:mm:ss.SSSZ). **Prefer to pass your timezone in date-time format for accurate result.**
   * @example "2017-05-05T10:30:00.000Z"
   */
  scheduledAt?: string;
  /**
   * Format of the message. It indicates whether the content should be treated as unicode or not.
   * @default false
   * @example true
   */
  unicodeEnabled?: boolean;
  /**
   * A recognizable prefix will ensure your audience knows who you are. Recommended by U.S. carriers. This will be added as your Brand Name before the message content. **Prefer verifying maximum length of 160 characters including this prefix in message content to avoid multiple sending of same sms.**
   * @example "MyCompany"
   */
  organisationPrefix?: string;
  /**
   * Instructions to unsubscribe from future communications. Recommended by U.S. carriers. Must include **STOP** keyword. This will be added as instructions after the end of message content. **Prefer verifying maximum length of 160 characters including this instructions in message content to avoid multiple sending of same sms.**
   * @example "send Stop if you want to unsubscribe."
   */
  unsubscribeInstruction?: string;
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
   * Content of the message. The **maximum characters used per SMS is 160**, if used more than that, it will be counted as more than one SMS
   * @example "Get a discount by visiting our NY store and saying : Happy Spring!"
   */
  content?: string;
  recipients?: {
    /** Lists Ids to send the campaign to. **REQUIRED if scheduledAt is not empty** */
    listIds: number[];
    /** List ids which have to be excluded from a campaign */
    exclusionListIds?: number[];
  };
  /**
   * UTC date-time on which the campaign has to run (YYYY-MM-DDTHH:mm:ss.SSSZ). **Prefer to pass your timezone in date-time format for accurate result.**
   * @example "2017-05-05T10:30:00.000Z"
   */
  scheduledAt?: string;
  /**
   * Format of the message. It indicates whether the content should be treated as unicode or not.
   * @default false
   * @example true
   */
  unicodeEnabled?: boolean;
  /**
   * A recognizable prefix will ensure your audience knows who you are. Recommended by U.S. carriers. This will be added as your Brand Name before the message content. **Prefer verifying maximum length of 160 characters including this prefix in message content to avoid multiple sending of same sms.**
   * @example "MyCompany"
   */
  organisationPrefix?: string;
  /**
   * Instructions to unsubscribe from future communications. Recommended by U.S. carriers. Must include **STOP** keyword. This will be added as instructions after the end of message content. **Prefer verifying maximum length of 160 characters including this instructions in message content to avoid multiple sending of same sms.**
   * @example "send Stop if you want to unsubscribe."
   */
  unsubscribeInstruction?: string;
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
   * Content of the message. If more than **160 characters** long, will be sent as multiple text messages
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
   * Format of the message. It indicates whether the content should be treated as unicode or not.
   * @default false
   * @example true
   */
  unicodeEnabled?: boolean;
  /**
   * A recognizable prefix will ensure your audience knows who you are. Recommended by U.S. carriers. This will be added as your Brand Name before the message content. **Prefer verifying maximum length of 160 characters including this prefix in message content to avoid multiple sending of same sms.**
   * @example "MyCompany"
   */
  organisationPrefix?: string;
}

export interface SendTestEmail {
  /**
   * List of the email addresses of the recipients whom you wish to send the test mail.
   * _If left empty, the test mail will be sent to your entire test list. You can not send more than 50 test emails per day_.
   */
  emailTo?: string[];
}

export interface SendTestSms {
  /**
   * Mobile number of the recipient with the country code. This number **must belong to one of your contacts in Brevo account and must not be blacklisted**
   * @example "33689965433"
   */
  phoneNumber?: string;
}

export interface GetTransacAggregatedSmsReport {
  /**
   * Time frame of the report
   * @example "2016-09-08|2017-04-06"
   */
  range?: string;
  /**
   * Number of requests for the timeframe
   * @format int64
   * @example 263
   */
  requests?: number;
  /**
   * Number of delivered SMS for the timeframe
   * @format int64
   * @example 249
   */
  delivered?: number;
  /**
   * Number of hardbounces for the timeframe
   * @format int64
   * @example 1
   */
  hardBounces?: number;
  /**
   * Number of softbounces for the timeframe
   * @format int64
   * @example 4
   */
  softBounces?: number;
  /**
   * Number of blocked contact for the timeframe
   * @format int64
   * @example 2
   */
  blocked?: number;
  /**
   * Number of unsubscription for the timeframe
   * @format int64
   * @example 6
   */
  unsubscribed?: number;
  /**
   * Number of answered SMS for the timeframe
   * @format int64
   * @example 12
   */
  replied?: number;
  /**
   * Number of accepted SMS for the timeframe
   * @format int64
   * @example 252
   */
  accepted?: number;
  /**
   * Number of rejected SMS for the timeframe
   * @format int64
   * @example 8
   */
  rejected?: number;
  /**
   * Number of skipped SMS for the timeframe
   * @format int64
   * @example 8
   */
  skipped?: number;
}

export interface GetTransacSmsReport {
  reports?: {
    /**
     * Date for which statistics are retrieved
     * @format date
     * @example "2017-03-17T00:00:00.000Z"
     */
    date?: string;
    /**
     * Number of requests for the date
     * @format int64
     * @example 87
     */
    requests?: number;
    /**
     * Number of delivered SMS for the date
     * @format int64
     * @example 85
     */
    delivered?: number;
    /**
     * Number of hardbounces for the date
     * @format int64
     * @example 1
     */
    hardBounces?: number;
    /**
     * Number of softbounces for the date
     * @format int64
     * @example 1
     */
    softBounces?: number;
    /**
     * Number of blocked contact for the date
     * @format int64
     * @example 0
     */
    blocked?: number;
    /**
     * Number of unsubscription for the date
     * @format int64
     * @example 1
     */
    unsubscribed?: number;
    /**
     * Number of answered SMS for the date
     * @format int64
     * @example 2
     */
    replied?: number;
    /**
     * Number of accepted SMS for the date
     * @format int64
     * @example 85
     */
    accepted?: number;
    /**
     * Number of rejected SMS for the date
     * @format int64
     * @example 1
     */
    rejected?: number;
    /**
     * Number of skipped SMS for the date
     * @format int64
     * @example 1
     */
    skipped?: number;
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
   * @example "2017-03-12T12:30:00.000Z"
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
     * @example "2017-03-12T12:30:00.000Z"
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
  /**
   * Total number of transactional emails available on your account according to the passed filter
   * @format int64
   * @example 5
   */
  count?: number;
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
     * @example "2017-03-12T12:30:00.000Z"
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

export interface GetBlockedDomains {
  /** List of all blocked domains */
  domains: string[];
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

export interface GetInboundEmailEvents {
  events?: {
    /**
     * UUID that can be used to fetch additional data
     * @format uuid
     */
    uuid: string;
    /**
     * Date when email was received on SMTP relay
     * @format date-time
     */
    date: string;
    /**
     * Sender’s email address
     * @format email
     */
    sender: string;
    /**
     * Recipient’s email address
     * @format email
     */
    recipient: string;
  }[];
}

export interface GetInboundEmailEventsByUuid {
  /**
   * Date when email was received on SMTP relay
   * @format date-time
   * @example "2019-05-25T11:53:26Z"
   */
  receivedAt?: string;
  /**
   * Date when email was delivered successfully to client’s webhook
   * @format date-time
   */
  deliveredAt?: string | null;
  /**
   * Recipient’s email address
   * @format email
   */
  recipient?: string;
  /**
   * Sender’s email address
   * @format email
   */
  sender?: string;
  /** Value of the Message-ID header. This will be present only after the processing is done. */
  messageId?: string;
  /** Value of the Subject header. This will be present only after the processing is done.  */
  subject?: string;
  /** List of attachments of the email. This will be present only after the processing is done. */
  attachments?: {
    /** filename specified in the Content-Disposition header of the attachment */
    name?: string;
    /** value of the Content-Type header of the attachment */
    contentType?: string;
    /** value of the Content-ID header of the attachment. */
    contentId?: string;
    /** size of the attachment in bytes */
    contentLength?: number;
  }[];
  /** List of events/logs that describe the lifecycle of the email on SIB platform */
  logs?: {
    /**
     * Date of the event
     * @format date-time
     */
    date?: string;
    /** Type of the event */
    type?: "received" | "processed" | "webhookFailed" | "webhookDelivered";
  }[];
}

export interface GetScheduledEmailByBatchId {
  /** Total number of batches */
  count?: number;
  batches?: {
    /**
     * Datetime for which the batch was scheduled
     * @format date-time
     */
    scheduledAt: string;
    /**
     * Datetime on which the batch was scheduled
     * @format date-time
     */
    createdAt: string;
    /** Current status of the scheduled batch */
    status: "inProgress" | "queued" | "processed" | "error";
  }[];
}

export interface GetScheduledEmailByMessageId {
  /**
   * Datetime for which the email was scheduled
   * @format date-time
   */
  scheduledAt: string;
  /**
   * Datetime on which the email was scheduled
   * @format date-time
   */
  createdAt: string;
  /** Current status of the scheduled email */
  status: "inProgress" | "queued" | "processed" | "error";
}

export interface SubAccountsResponse {
  /** Total number of subaccounts */
  count?: number;
  subAccounts?: {
    /**
     * id of the sub-account
     * @format int64
     */
    id: number;
    /** Name of the sub-account company */
    companyName: string;
    /** Whether the sub-account is active or not */
    active: boolean;
    /**
     * Timestamp when the sub-account was created
     * @format int64
     */
    createdAt: number;
    /** Group details */
    groups: {
      /** Group identifier */
      id?: string;
      /** Name of the group */
      name?: string;
    }[];
  }[];
}

/** @example {"companyName":"Test Sub-account","email":"test-sub@example.com","timezone":"Europe/Paris","language":"en","groupIds":["5f8f8c3b5f56a02d4433b3a7","5f8f8c3b5f56a02d4433b3a8"]} */
export interface CreateSubAccount {
  /** Set the name of the sub-account company */
  companyName: string;
  /** Email address for the organization */
  email: string;
  /** Set the language of the sub-account */
  language?: "en" | "fr" | "it" | "es" | "pt" | "de";
  /** Set the timezone of the sub-account */
  timezone?: string;
  /** Set the group(s) for the sub-account */
  groupIds?: string[];
}

export interface CreateSubAccountResponse {
  /**
   * ID of the sub-account created
   * @format int64
   * @example 5
   */
  id: number;
}

export interface CorporateGroupDetailsResponse {
  group?: {
    /** Group id */
    id?: string;
    /** Name of the group */
    groupName?: string;
    /** Group creation date */
    createdAt?: string;
  };
  "sub-accounts"?: {
    /**
     * Id of the sub-account organzation
     * @format int64
     */
    id?: number;
    /** Name of the sub-account organzation */
    companyName?: string;
    /** Creation date of the sub-account organzation */
    createdAt?: string;
  }[];
  users?: {
    /** Email address of the user */
    email?: string;
    /** Last name of the user */
    lastName?: string;
    /** First name of the user */
    firstName?: string;
  }[];
}

export interface MasterDetailsResponse {
  /** Email id of master account */
  email?: string;
  /** Company name of master account organization */
  companyName?: string;
  /**
   * Unique identifier of the master account organization
   * @format int64
   */
  id?: number;
  /** Currency code of the master account organization */
  currencyCode?: string;
  /** Timezone of the master account organization */
  timezone?: string;
  /** Billing details of the master account organization */
  billingInfo?: {
    /** Billing email id of master account */
    email?: string;
    /** Company name of master account */
    companyName?: string;
    /** Billing name of master account holder */
    name?: {
      /** First name for billing */
      givenName?: string;
      /** Last name for billing */
      familyName?: string;
    };
    /** Billing address of master account */
    address?: {
      /** Street address */
      streetAddress?: string;
      /** Locality */
      locality?: string;
      /** Postal code */
      postalCode?: string;
      /** State code */
      stateCode?: string;
      /** Country code */
      countryCode?: string;
    };
  };
  /** Plan details */
  planInfo?: {
    /** Plan currency */
    currencyCode?: string;
    /**
     * Timestamp of next billing date
     * @format int64
     */
    nextBillingAt?: number;
    /** Plan amount */
    price?: number;
    /** Plan period type */
    planPeriod?: "month" | "year";
    /** Number of sub-accounts */
    subAccounts?: number;
    /** List of provided features in the plan */
    features?: {
      /** Name of the feature */
      name?: string;
      /** Unit value of the feature */
      unitValue?: string;
      /**
       * Quantity provided in the plan
       * @format int64
       */
      quantity?: number;
      /**
       * Quantity with overages provided in the plan (only applicable on ENTv2)
       * @format int64
       */
      quantityWithOverages?: number;
      /**
       * Quantity consumed by master
       * @format int64
       */
      used?: number;
      /**
       * Quantity consumed by sub-organizations over the admin plan limit (only applicable on ENTv2)
       * @format int64
       */
      usedOverages?: number;
      /**
       * Quantity remaining in the plan
       * @format int64
       */
      remaining?: number;
    }[];
  };
}

export interface SubAccountDetailsResponse {
  /** Name of the sub-account user */
  name?: string;
  /** Email id of the sub-account organization */
  email?: string;
  /** Sub-account company name */
  companyName?: string;
  groups?: {
    /** Group id */
    id?: string;
    /** Name of the group */
    name?: string;
  }[];
  /** Sub-account plan details */
  planInfo?: {
    /** Credits quota and remaining credits on the sub-account */
    credits?: {
      /** Email credits remaining on the sub-account */
      emails?: {
        /**
         * Quantity of email messaging limits provided
         * @format int64
         */
        quantity?: number;
        /**
         * Available email messaging limits for use
         * @format int64
         */
        remaining?: number;
      };
      /** SMS credits remaining on the sub-account */
      sms?: {
        /**
         * Quantity of SMS messaging limits provided
         * @format int64
         */
        quantity?: number;
        /**
         * Available SMS messaging limits for use
         * @format int64
         */
        remaining?: number;
      };
      /** Push credits remaining on the sub-account */
      wpSubscribers?: {
        /**
         * Quantity of Push sending limits provided
         * @format int64
         */
        quantity?: number;
        /**
         * Available Push sending limits for use
         * @format int64
         */
        remaining?: number;
      };
    };
    /** Features available on the sub-account */
    features?: {
      /** Inbox details / Not available on ENTv2 */
      inbox?: {
        /**
         * Quantity of inbox provided
         * @format int64
         */
        quantity?: number;
        /**
         * Available inboxes for use
         * @format int64
         */
        remaining?: number;
      };
      /** Landing page details / Not available on ENTv2 */
      landingPage?: {
        /**
         * Quantity of landing pages provided
         * @format int64
         */
        quantity?: number;
        /**
         * Available landing pages for use
         * @format int64
         */
        remaining?: number;
      };
      /** Multi-account details */
      users?: {
        /**
         * Quantity of multi-account's provided
         * @format int64
         */
        quantity?: number;
        /**
         * Available multi-accounts for use
         * @format int64
         */
        remaining?: number;
      };
    };
    /** type of the plan */
    planType?: string;
  };
}

/**
 * Details of the plan to be changed
 * @example {"credits":{"email":5000,"sms":2000,"wpSubscribers":-1},"features":{"users":15,"landingPage":20,"inbox":10}}
 */
export interface SubAccountUpdatePlanRequest {
  /** Credit details to update */
  credits?: {
    /**
     * Number of email credits | Pass the value -1 for unlimited emails in ENTv2 only
     * @format int64
     */
    email?: number;
    /**
     * Number of SMS credits | Pass the value -1 for unlimited SMS in ENTv2 only
     * @format float
     */
    sms?: number;
    /**
     * Number of Push credits, possible value is 0 and -1 | available in ENT-v2 only
     * @format int64
     */
    wpSubscribers?: number;
  };
  /** Features details to update */
  features?: {
    /**
     * Number of multi-users
     * @format int64
     */
    users?: number;
    /**
     * Number of landing pages
     * @format int64
     */
    landingPage?: number;
    /**
     * Number of inboxes / Not required on ENTv2
     * @format int64
     */
    inbox?: number;
  };
}

/**
 * List of enable/disable applications on the sub-account
 * @example {"landing-pages":true,"sms-campaigns":false,"whatsapp":true,"meetings":true,"web-push":false}
 */
export interface SubAccountAppsToggleRequest {
  /** Set this field to enable or disable Inbox on the sub-account / Not applicable on ENTv2 */
  inbox?: boolean;
  /** Set this field to enable or disable Whatsapp campaigns on the sub-account */
  whatsapp?: boolean;
  /** Set this field to enable or disable Automation on the sub-account */
  automation?: boolean;
  /** Set this field to enable or disable Email Campaigns on the sub-account */
  "email-campaigns"?: boolean;
  /** Set this field to enable or disable SMS Marketing on the sub-account */
  "sms-campaigns"?: boolean;
  /** Set this field to enable or disable Landing pages on the sub-account */
  "landing-pages"?: boolean;
  /** Set this field to enable or disable Transactional Email on the sub-account */
  "transactional-emails"?: boolean;
  /** Set this field to enable or disable Transactional SMS on the sub-account */
  "transactional-sms"?: boolean;
  /** Set this field to enable or disable Facebook ads on the sub-account */
  "facebook-ads"?: boolean;
  /** Set this field to enable or disable Web Push on the sub-account */
  "web-push"?: boolean;
  /** Set this field to enable or disable Meetings on the sub-account */
  meetings?: boolean;
  /** Set this field to enable or disable Conversations on the sub-account */
  conversations?: boolean;
  /** Set this field to enable or disable Sales CRM on the sub-account */
  crm?: boolean;
}

/** Task types details */
export interface TaskTypes {
  /**
   * Id of task type
   * @example "61a88a2eb7a574180261234"
   */
  id?: string;
  /**
   * Title of task type
   * @example "Email"
   */
  title?: string;
}

/** Task Details */
export interface Task {
  /**
   * Unique task id
   * @example "61a5cd07ca1347c82306ad06"
   */
  id?: string;
  /**
   * Id for type of task e.g Call / Email / Meeting etc.
   * @example "61a5cd07ca1347c82306ad09"
   */
  taskTypeId: string;
  /**
   * Name of task
   * @example "Task: Connect with client"
   */
  name: string;
  /**
   * Contact ids for contacts linked to this task
   * @example [1,2,3]
   */
  contactsIds?: number[];
  /**
   * Deal ids for deals a task is linked to
   * @example ["61a5ce58c5d4795761045990","61a5ce58c5d4795761045991","61a5ce58c5d4795761045992"]
   */
  dealsIds?: string[];
  /**
   * Companies ids for companies a task is linked to
   * @example ["61a5ce58c5d4795761045990","61a5ce58c5d4795761045991","61a5ce58c5d4795761045992"]
   */
  companiesIds?: string[];
}

/** Task reminder date/time for a task */
export interface TaskReminder {
  /**
   * Value of time unit before reminder is to be sent
   * @example 10
   */
  value: number;
  /** Unit of time before reminder is to be sent */
  unit: "minutes" | "hours" | "weeks" | "days";
  /**
   * Type of task reminder e.g email, push
   * @example ["email"]
   */
  types: ("email" | "push")[];
}

/** List of files */
export type FileList = FileData[];

/** Downloadable file link */
export interface FileDownloadableLink {
  /**
   * A unique link to download the requested file.
   * @example "https://storage.googleapis.com/brevo-app-crm.......-sample.pdf"
   */
  fileUrl?: string;
}

/** File data that is uploaded */
export interface FileData {
  /**
   * Name of uploaded file
   * @example "example.png"
   */
  name?: string;
  /**
   * Account id of user which created the file
   * @example "61a5ce58y5d4795761045991"
   */
  authorId?: string;
  /**
   * Contact id of contact on which file is uploaded
   * @format int64
   * @example 1
   */
  contactId?: number;
  /**
   * Deal id linked to a file
   * @example "61a5ce58c5d4795761045991"
   */
  dealId?: string;
  /**
   * Company id linked to a file
   * @example "61a5ce58c5d4795761045991"
   */
  companyId?: string;
  /**
   * Size of file in bytes
   * @format int64
   * @example 10
   */
  size?: number;
  /**
   * File created date/time
   * @format date-time
   * @example "2017-05-01T17:05:03.000Z"
   */
  createdAt?: string;
}

/** Note data to be saved */
export interface NoteData {
  /**
   * Text content of a note
   * @minLength 1
   * @maxLength 3000
   * @example "In communication with client for resolution of queries."
   */
  text: string;
  /**
   * Contact Ids linked to a note
   * @example [247,1,2]
   */
  contactIds?: number[];
  /**
   * Deal Ids linked to a note
   * @example ["61a5ce58c5d4795761045990","61a5ce58c5d4795761045991"]
   */
  dealIds?: string[];
  /**
   * Company Ids linked to a note
   * @example ["61a5ce58c5d4795761045990","61a5ce58c5d4795761045991"]
   */
  companyIds?: string[];
}

/** Note Details */
export interface Note {
  /**
   * Unique note Id
   * @example "61a5cd07ca1347c82306ad09"
   */
  id?: string;
  /**
   * Text content of a note
   * @minLength 1
   * @maxLength 3000
   * @example "In communication with client for resolution of queries."
   */
  text: string;
  /**
   * Contact ids linked to a note
   * @example [247,1,2]
   */
  contactIds?: number[];
  /**
   * Deal ids linked to a note
   * @example ["61a5ce58c5d4795761045990","61a5ce58c5d4795761045991"]
   */
  dealIds?: string[];
  /**
   * Account details of user which created the note
   * @example {"id":"61a5ce58y5d4795761045991","email":"johndoe@example.com","locale":"en_GB","timezone":"Asia/Kolkata","name":{"fullName":"John Doe"}}
   */
  authorId?: object;
  /**
   * Note created date/time
   * @format date-time
   * @example "2017-05-01T17:05:03.000Z"
   */
  createdAt?: string;
  /**
   * Note updated date/time
   * @format date-time
   * @example "2017-05-01T17:05:03.000Z"
   */
  updatedAt?: string;
}

/** Updated Note ID */
export interface NoteId {
  /**
   * Unique note Id
   * @example "61a5cd07ca1347c82306ad09"
   */
  id?: string;
}

/** List of notes */
export type NoteList = Note[];

/** List of tasks */
export interface TaskList {
  /** List of tasks */
  items?: Task[];
}

/** List of pipeline */
export type Pipelines = Pipeline[];

/** List of stages */
export interface PipelineStage {
  /**
   * Stage id
   * @example "9e577ff7-8e42-4ab3-be26-2b5e01b42518"
   */
  id?: string;
  /**
   * Stage name
   * @example "New"
   */
  name?: string;
}

/** List of stages */
export interface Pipeline {
  /**
   * Pipeline name
   * @example "Sales Pipeline"
   */
  pipeline_name?: string;
  /**
   * Pipeline id
   * @example "5ea675e3da0dd085acaea610"
   */
  pipeline?: string;
  /** List of stages */
  stages?: PipelineStage[];
}

/** List of deal attributes */
export type DealAttributes = {
  /** @example "deal_name" */
  internalName?: string;
  /** @example "Deal Name" */
  label?: string;
  /** @example "text" */
  attributeTypeName?: string;
  attributeOptions?: object[];
  /** @example true */
  isRequired?: boolean;
}[];

/** List of Deals */
export interface DealsList {
  /** List of deals */
  items?: Deal[];
}

/** Deal Details */
export interface Deal {
  /**
   * Unique deal id
   * @example "629475917295261d9b1f4403"
   */
  id?: string;
  /**
   * Deal attributes with values
   * @example {"deal_name":"testname","deal_owner":"6093d2425a9b436e9519d034","amount":12,"pipeline":"6093d296ad1e9c5cf2140a58","deal_stage":"9e577ff7-8e42-4ab3-be26-2b5e01b42518","stage_updated_at":"2022-05-30T07:42:05.671Z","created_at":"2022-05-30T07:42:05.671Z","number_of_contacts":1,"last_updated_date":"2022-06-06T08:38:36.761Z","last_activity_date":"2022-06-06T08:38:36.000Z","next_activity_date":null,"number_of_activities":0}
   */
  attributes?: object;
  /**
   * Contact ids for contacts linked to this deal
   * @example [1,2,3]
   */
  linkedContactsIds?: number[];
  /**
   * Companies ids for companies linked to this deal
   * @example ["61a5ce58c5d4795761045990","61a5ce58c5d4795761045991","61a5ce58c5d4795761045992"]
   */
  linkedCompaniesIds?: string[];
}

/** List of companies */
export interface CompaniesList {
  /** List of compaies */
  items?: Company[];
}

/** Company Details */
export interface Company {
  /**
   * Unique comoany id
   * @example "629475917295261d9b1f4403"
   */
  id?: string;
  /**
   * Company attributes with values
   * @example {"created_at":"2022-01-13T19:04:24.376+05:30","domain":"xyz","last_updated_at":"2022-04-01T18:47:48.283+05:30","name":"text","number_of_contacts":0,"owner":"62260474111b1101704a9d85","owner_assign_date":"2022-04-01T18:21:13.379+05:30","phone_number":8171844192,"revenue":10}
   */
  attributes?: object;
  /**
   * Contact ids for contacts linked to this company
   * @format in64
   * @example [1,2,3]
   */
  linkedContactsIds?: number[];
  /**
   * Deals ids for companies linked to this company
   * @format objectID
   * @example ["61a5ce58c5d4795761045990","61a5ce58c5d4795761045991","61a5ce58c5d4795761045992"]
   */
  linkedDealsIds?: string[];
}

/** List of company attributes */
export type CompanyAttributes = {
  /** @example "name" */
  internalName?: string;
  /** @example "Company Name" */
  label?: string;
  /** @example "text" */
  attributeTypeName?: string;
  attributeOptions?: object[];
  /** @example true */
  isRequired?: boolean;
}[];

/** a Conversations message */
export interface ConversationsMessage {
  /**
   * Message ID. It can be used for further manipulations with the message.
   * @example "eYBEm3gq3zc5ayE2g"
   */
  id?: string;
  /**
   * `"agent"` for agents’ messages, `"visitor"` for visitors’ messages.
   * @example "agent"
   */
  type?: "agent" | "visitor";
  /**
   * Message text or name of the attached file
   * @example "Good morning! How can I help you?"
   */
  text?: string;
  /**
   * visitor’s ID
   * @example "kZMvWhf8npAu3H6qd57w2Hv6nh6rnxvg"
   */
  visitorId?: string;
  /**
   * ID of the agent on whose behalf the message was sent (only in messages sent by an agent).
   * @example "d9nKoegKSjmCtyK78"
   */
  agentId?: string;
  /**
   * Agent’s name as displayed to the visitor. Only in the messages sent by an agent.
   * @example "Liz"
   */
  agentName?: string;
  /**
   * Timestamp in milliseconds.
   * @format int64
   * @min 0
   * @example 1470222622433
   */
  createdAt?: number;
  /**
   * `true` for pushed messages
   * @example true
   */
  isPushed?: boolean;
  /**
   * In two-way integrations, messages sent via REST API can be marked with receivedFrom property and then filtered out when received in a webhook to avoid infinite loop.
   * @example "SuperAwesomeHelpdesk"
   */
  receivedFrom?: string;
  file?: {
    /**
     * Name of the file
     * @example "conversations.png"
     */
    filename?: string;
    /**
     * Size in bytes
     * @format int64
     * @min 0
     * @example 15538
     */
    size?: number;
    /**
     * Whether the file is an image
     * @example true
     */
    isImage?: boolean;
    /**
     * URL of the file
     * @format url
     * @example "https://ucarecdn.com/cee5c10c-8302-45c1-b1fb-43860ca941a9/"
     */
    url?: string;
    /** image info is passed in case the file is an image */
    imageInfo?: {
      /**
       * Width of the image
       * @format int64
       * @min 0
       * @example 1129
       */
      width?: number;
      /**
       * height of the image
       * @format int64
       * @min 0
       * @example 525
       */
      height?: number;
      /**
       * URL of the preview
       * @format url
       * @example "https://ucarecdn.com/03cd56cd-1de9-4f65-996d-08afdf27fa1b/-/preview/800x800/-/quality/lighter/"
       */
      previewUrl?: string;
    };
  };
}

export interface Event {
  /**
   * The name of the event that occurred. This is how you will find your event in Brevo. Limited to 255 characters, alphanumerical characters and - _ only.
   * @example "video_played"
   */
  event_name: string;
  /**
   * Timestamp of when the event occurred (e.g. "2024-01-24T17:39:57+01:00"). If no value is passed, the timestamp of the event creation is used.
   * @example "2024-02-06T20:59:23.383Z"
   */
  event_date?: string;
  /** Identifies the contact associated with the event. At least one identifier is required. */
  identifiers: {
    /**
     * Email Id associated with the event
     * @example "jane.doe@example.com"
     */
    email_id?: string;
    /**
     * SMS associated with the event
     * @example "+91xxxxxxxxxx"
     */
    phone_id?: string;
    /**
     * whatsapp associated with the event
     * @example "+91xxxxxxxxxx"
     */
    whatsapp_id?: string;
    /**
     * landline_number associated with the event
     * @example "+91xxxxxxxxxx"
     */
    landline_number_id?: string;
    /**
     * ext_id associated with the event
     * @example "abc123"
     */
    ext_id?: string;
  };
  /**
   * Properties defining the state of the contact associated to this event. Useful to update contact attributes defined in your contacts database while passing the event. For example: **"FIRSTNAME": "Jane" , "AGE": 37**
   * @example {"AGE":32,"GENDER":"FEMALE"}
   */
  contact_properties?: Record<string, string | number>;
  /**
   * Properties of the event. Top level properties and nested properties can be used to better segment contacts and personalise workflow conditions. The following field type are supported: string, number, boolean (true/false), date (Timestamp e.g. "2024-01-24T17:39:57+01:00"). Keys are limited to 255 characters, alphanumerical characters and - _ only. Size is limited to 50Kb.
   * @example {"video_title":"Brevo — The most approachable CRM suite","vide_description":"Create your free account today!","duration":142,"autoplayed":false,"upload_date":"2023-11-24T12:09:10+01:00"}
   */
  event_properties?: Record<string, string | number | object | any[]>;
}

export interface ConversionSourceMetrics {
  /** @format integer */
  id: number;
  conversionSource: "email_campaign";
  /** @format integer */
  ordersCount: number;
  /** @format float */
  revenue: number;
  /** @format float */
  averageBasket: number;
}

export interface ConversionSourceProduct {
  /** @example "1" */
  id: string;
  /** @example "Milky Way Galaxy" */
  name?: string;
  /** @example "sku-1" */
  sku?: string;
  /**
   * @format float
   * @example 1000
   */
  price?: number;
  /** @example "https://mydomain.com/products/alpina-panoma-classic" */
  url?: string;
  /** @example "http://mydomain.com/product-absoulte-url/img.jpeg" */
  imageUrl?: string;
  /** @example 200 */
  ordersCount?: number;
  /**
   * @format float
   * @example 999.99
   */
  revenue?: number;
}

export interface Order {
  /**
   * Unique ID of the order.
   * @example "14"
   */
  id: string;
  /**
   * Event occurrence UTC date-time (YYYY-MM-DDTHH:mm:ssZ), when order is actually created.
   * @example "2021-07-29T20:59:23.383Z"
   */
  createdAt: string;
  /**
   * Event updated UTC date-time (YYYY-MM-DDTHH:mm:ssZ), when the status of the order is actually changed/updated.
   * @example "2021-07-30T10:59:23.383Z"
   */
  updatedAt: string;
  /**
   * State of the order.
   * @example "completed"
   */
  status: string;
  /**
   * Total amount of the order, including all shipping expenses, tax and the price of items.
   * @example 308.42
   */
  amount: number;
  /**
   * ID of store where the order is placed
   * @example "ST-21"
   */
  storeId?: string;
  /** Identifies the contact associated with the order. */
  identifiers?: {
    /**
     * ext_id associated with the order
     * @example "ext_id_1"
     */
    ext_id?: string;
    /**
     * loyalty_subscription_id associated with the order
     * @example "loyalty_id_1"
     */
    loyalty_subscription_id?: string;
  };
  products: {
    /**
     * ID of the product.
     * @example "P1"
     */
    productId: string;
    /**
     * How many pieces of the product the visitor has added to the cart.
     * @example 10
     */
    quantity: number;
    /**
     * Product ID of the red color shirts.
     * @example "P100"
     */
    variantId?: string;
    /**
     * The price of a unit of product
     * @example 99.99
     */
    price: number;
  }[];
  /**
   * Email of the contact, Mandatory if "phone" field is not passed in "billing" parameter.
   * @example "example@brevo.com"
   */
  email?: string;
  /** Billing details of an order. */
  billing?: {
    /**
     * Full billing address.
     * @example "15 Somewhere Road, Brynmenyn"
     */
    address?: string;
    /**
     * Exact city of the address.
     * @example "Basel"
     */
    city?: string;
    /**
     * Billing country 2-letter ISO code.
     * @example "CA"
     */
    countryCode?: string;
    /**
     * Billing country name.
     * @example "Canada"
     */
    country?: string;
    /**
     * Phone number to contact for further details about the order, Mandatory if "email" field is not passed.
     * @example "01559 032133"
     */
    phone?: string;
    /**
     * Postcode for delivery and billing.
     * @example "4052"
     */
    postCode?: string;
    /**
     * How the visitor will pay for the item(s), e.g. paypal, check, etc.
     * @example "PayPal"
     */
    paymentMethod?: string;
    /**
     * Exact region (state/province) for delivery and billing.
     * @example "Northwestern Switzerland"
     */
    region?: string;
  };
  /**
   * Coupons applied to the order. Stored case insensitive.
   * @example ["EASTER15OFF"]
   */
  coupons?: string[];
}

export interface OrderBatch {
  /** array of order objects */
  orders: Order[];
  /**
   * Notify Url provided by client to get the status of batch request
   * @example "https://en.wikipedia.org/wiki/Webhook"
   */
  notifyUrl?: string;
  /**
   * Defines wether you want your orders to be considered as live data or as historical data (import of past data, synchronising data). True: orders will not trigger any automation workflows. False: orders will trigger workflows as usual.
   * @default true
   * @example true
   */
  historical?: boolean;
}

export interface CreatedBatchId {
  /**
   * Batch ID of the request
   * @example "1"
   */
  batchId: number;
  /**
   * Number of orders
   * @format int64
   * @example 17655
   */
  count?: number;
}

export interface GetCategories {
  categories: GetCategoryDetails[];
  /**
   * Number of categories
   * @format int64
   * @example 17655
   */
  count: number;
}

export interface GetCategoryDetails {
  /**
   * Category ID for which you requested the details
   * @format string
   * @example "C11"
   */
  id: string;
  /**
   * Name of the category for which you requested the details
   * @format string
   * @example "Electronics"
   */
  name: string;
  /**
   * Creation UTC date-time of the category (YYYY-MM-DDTHH:mm:ss.SSSZ)
   * @example "2017-05-12T12:30:00.000Z"
   */
  createdAt: string;
  /**
   * Last modification UTC date-time of the category (YYYY-MM-DDTHH:mm:ss.SSSZ)
   * @example "2017-05-12T12:30:00.000Z"
   */
  modifiedAt: string;
  /**
   * URL to the category
   * @format string
   * @example "http://mydomain.com/category/clothing"
   */
  url?: string;
  /**
   * category deleted from the shop's database
   * @format string
   * @example true
   */
  isDeleted?: boolean;
}

export interface CreateUpdateCategory {
  /**
   * Unique Category ID as saved in the shop
   * @format email
   * @example "CAT123"
   */
  id: string;
  /**
   * **Mandatory in case of creation**. Name of the Category, as displayed in the shop
   * @example "Electronics"
   */
  name?: string;
  /**
   * URL to the category
   * @example "http://mydomain.com/category/electronics"
   */
  url?: string;
  /**
   * Facilitate to update the existing category in the same request (updateEnabled = true)
   * @default false
   * @example false
   */
  updateEnabled?: boolean;
  /**
   * UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ) of the category deleted from the shop's database
   * @example "2017-05-12T12:30:00.000Z"
   */
  deletedAt?: string;
  /**
   * category deleted from the shop's database
   * @example true
   */
  isDeleted?: boolean;
}

export interface CreateUpdateCategories {
  /**
   * Unique Category ID as saved in the shop
   * @format email
   * @example "CAT123"
   */
  id: string;
  /**
   * **Mandatory in case of creation**. Name of the Category, as displayed in the shop
   * @example "Electronics"
   */
  name?: string;
  /**
   * URL to the category
   * @example "http://mydomain.com/category/electronics"
   */
  url?: string;
  /**
   * UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ) of the category deleted from the shop's database
   * @example "2017-05-12T12:30:00.000Z"
   */
  deletedAt?: string;
  /**
   * category deleted from the shop's database
   * @example true
   */
  isDeleted?: boolean;
}

export interface CreateUpdateBatchCategory {
  /** array of categories objects */
  categories: CreateUpdateCategories[];
  /** Facilitate to update the existing categories in the same request (updateEnabled = true) */
  updateEnabled?: boolean;
}

export interface CreateCategoryModel {
  /**
   * ID of the category when a new category is created
   * @format int64
   * @example 122
   */
  id?: number;
}

export interface CreateUpdateBatchCategoryModel {
  /**
   * Number of the new created categories
   * @format int64
   * @example 7
   */
  createdCount?: number;
  /**
   * Number of the existing categories updated
   * @format int64
   * @example 5
   */
  updatedCount?: number;
}

export interface GetProducts {
  products: GetProductDetails[];
  /**
   * Number of products
   * @format int64
   * @example 17655
   */
  count: number;
}

export interface GetProductDetails {
  /**
   * Product ID for which you requested the details
   * @format string
   * @example "P11"
   */
  id: string;
  /**
   * Name of the product for which you requested the details
   * @format string
   * @example "Iphone 11"
   */
  name: string;
  /**
   * Creation UTC date-time of the product (YYYY-MM-DDTHH:mm:ss.SSSZ)
   * @example "2017-05-12T12:30:00.000Z"
   */
  createdAt: string;
  /**
   * Last modification UTC date-time of the product (YYYY-MM-DDTHH:mm:ss.SSSZ)
   * @example "2017-05-12T12:30:00.000Z"
   */
  modifiedAt: string;
  /**
   * URL to the product
   * @format string
   * @example "http://mydomain.com/product/electronics/product1"
   */
  url?: string;
  /**
   * Absolute URL to the cover image of the product
   * @format string
   * @example "http://mydomain.com/product-absoulte-url/img.jpeg"
   */
  imageUrl?: string;
  /**
   * Product identifier from the shop
   * @format string
   */
  sku?: string;
  /**
   * Price of the product
   * @format float
   */
  price?: number;
  /** Category ID-s of the product */
  categories?: string[];
  /**
   * Parent product id of the product
   * @format string
   */
  parentId?: string;
  /**
   * S3 url of original image
   * @format string
   */
  s3Original?: string;
  /**
   * S3 thumbnail url of original image in 120x120 dimension for analytics section
   * @format string
   */
  s3ThumbAnalytics: string;
  /**
   * S3 thumbnail url of original image in 600x400 dimension for editor section
   * @format string
   */
  s3ThumbEditor: string;
  /**
   * Meta data of product such as description, vendor, producer, stock level, etc.
   * @example {"description":"Shoes for sports","brand":"addidas"}
   */
  metaInfo?: object;
  /**
   * product deleted from the shop's database
   * @example true
   */
  isDeleted?: boolean;
}

export interface CreateUpdateProduct {
  /**
   * Product ID for which you requested the details
   * @format string
   * @example "P11"
   */
  id: string;
  /**
   * Mandatory in case of creation**. Name of the product for which you requested the details
   * @format string
   * @example "Iphone 11"
   */
  name: string;
  /**
   * URL to the product
   * @format string
   * @example "http://mydomain.com/product/electronics/product1"
   */
  url?: string;
  /**
   * Absolute URL to the cover image of the product
   * @format string
   * @example "http://mydomain.com/product-absoulte-url/img.jpeg"
   */
  imageUrl?: string;
  /**
   * Product identifier from the shop
   * @format string
   */
  sku?: string;
  /**
   * Price of the product
   * @format float
   */
  price?: number;
  /** Category ID-s of the product */
  categories?: string[];
  /**
   * Parent product id of the product
   * @format string
   */
  parentId?: string;
  /**
   * Meta data of product such as description, vendor, producer, stock level. The size of cumulative metaInfo shall not exceed **1000 KB**. Maximum length of metaInfo object can be 10.
   * @example {"description":"Shoes for sports","brand":"addidas"}
   */
  metaInfo?: Record<string, string | number>;
  /**
   * Facilitate to update the existing category in the same request (updateEnabled = true)
   * @default false
   * @example false
   */
  updateEnabled?: boolean;
  /** UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ) of the product deleted from the shop's database */
  deletedAt?: string;
  /**
   * product deleted from the shop's database
   * @example true
   */
  isDeleted?: boolean;
}

export interface CreateUpdateBatchProducts {
  /** array of products objects */
  products: CreateUpdateProducts[];
  /** Facilitate to update the existing categories in the same request (updateEnabled = true) */
  updateEnabled?: boolean;
}

export interface CreateUpdateProducts {
  /**
   * Product ID for which you requested the details
   * @format string
   * @example "P11"
   */
  id: string;
  /**
   * Mandatory in case of creation**. Name of the product for which you requested the details
   * @format string
   * @example "Iphone 11"
   */
  name: string;
  /**
   * URL to the product
   * @format string
   * @example "http://mydomain.com/product/electronics/product1"
   */
  url?: string;
  /**
   * Absolute URL to the cover image of the product
   * @format string
   * @example "http://mydomain.com/product-absoulte-url/img.jpeg"
   */
  imageUrl?: string;
  /**
   * Product identifier from the shop
   * @format string
   */
  sku?: string;
  /**
   * Price of the product
   * @format float
   */
  price?: number;
  /** Category ID-s of the product */
  categories?: string[];
  /**
   * Parent product id of the product
   * @format string
   */
  parentId?: string;
  /**
   * Meta data of product such as description, vendor, producer, stock level. The size of cumulative metaInfo shall not exceed **1000 KB**. Maximum length of metaInfo object can be 10.
   * @example {"description":"Shoes for sports","brand":"addidas"}
   */
  metaInfo?: Record<string, string | number>;
  /** UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ) of the product deleted from the shop's database */
  deletedAt?: string;
  /**
   * product deleted from the shop's database
   * @example true
   */
  isDeleted?: boolean;
}

export interface CreateProductModel {
  /**
   * ID of the Product when a new product is created
   * @format int64
   * @example 122
   */
  id?: number;
}

export interface CreateUpdateBatchProductsModel {
  /**
   * Number of the new created products
   * @format int64
   * @example 7
   */
  createdCount?: number;
  /**
   * Number of the existing products updated
   * @format int64
   * @example 5
   */
  updatedCount?: number;
}

export interface GetCouponCollection {
  /**
   * The id of the collection.
   * @format uuidv4
   * @example "23befbae-1505-47a8-bd27-e30ef739f32c"
   */
  id: string;
  /**
   * The name of the collection.
   * @format uuidv4
   * @example "SummerPromotions"
   */
  name: string;
  /**
   * The default coupon of the collection.
   * @example "10 OFF"
   */
  defaultCoupon: string;
  /**
   * Datetime on which the collection was created.
   * @format date-time
   * @example "2023-01-06T05:03:47.053Z"
   */
  createdAt: string;
  /**
   * Total number of coupons in the collection.
   * @format int64
   * @example 10000
   */
  totalCoupons: number;
  /**
   * Number of coupons that have not been sent yet.
   * @format int64
   * @example 5000
   */
  remainingCoupons: number;
  /**
   * Expiration date for the coupon collection in RFC3339 format.
   * @format date-time
   * @example "2024-01-01T00:00:00Z"
   */
  expirationDate?: string;
  /**
   * If present, an email notification is going to be sent the defined amount of days before to the expiration date.
   * @example 5
   */
  remainingDaysAlert?: number;
  /**
   * If present, an email notification is going to be sent when the total number of available coupons falls below the defined threshold.
   * @example 5
   */
  remainingCouponsAlert?: number;
}

export interface SendWhatsappMessageTemplate {
  /**
   * ID of the template to send
   * @example 123
   */
  templateId: number;
  /**
   * WhatsApp Number with country code. Example, 85264318721
   * @format mobile
   * @example 919876543210
   */
  senderNumber: string;
  /**
   * Pass the set of attributes to customize the template. For example, {"FNAME":"Joe", "LNAME":"Doe"}.
   * @example {"FNAME":"Joe","LNAME":"Doe"}
   */
  params?: object;
  /** List of phone numbers of the contacts */
  contactNumbers: string[];
}

export interface SendWhatsappMessageText {
  /**
   * WhatsApp Number with country code. Example, 85264318721
   * @format mobile
   * @example 919876543210
   */
  senderNumber: string;
  /**
   * Text to be sent as message body (will be overridden if templateId is passed in the same request)
   * @example "Hi! There i am a message"
   */
  text: string;
  /** List of phone numbers of the contacts */
  contactNumbers: string[];
}

export interface GetWhatsappEventReport {
  events?: {
    /**
     * WhatsApp Number with country code. Example, 85264318721
     * @format mobile
     * @example 919876543210
     */
    contactNumber: string;
    /**
     * UTC date-time on which the event has been generated
     * @example "2017-03-12T12:30:00.000Z"
     */
    date: string;
    /**
     * Message ID which generated the event
     * @example "23befbae-1505-47a8-bd27-e30ef739f32c"
     */
    messageId: string;
    /**
     * Event which occurred
     * @example "delivered"
     */
    event: "sent" | "delivered" | "read" | "error" | "unsubscribe" | "reply" | "soft-bounce";
    /**
     * Reason for the event (will be there in case of `error` and `soft-bounce` events)
     * @example "23befbae-1505-47a8-bd27-e30ef739f32c"
     */
    reason?: string;
    /**
     * Text of the reply (will be there only in case of `reply` event with text)
     * @example "Hi! I am a reply"
     */
    body?: string;
    /**
     * Url of the media reply (will be there only in case of `reply` event with media)
     * @format url
     * @example "https://example.com/media.png"
     */
    mediaUrl?: string;
    /**
     * WhatsApp Number with country code. Example, 85264318721
     * @format mobile
     * @example 919876543210
     */
    senderNumber: string;
  }[];
}

export interface GetExternalFeedByUUID {
  /**
   * ID of the feed
   * @format uuidv4
   * @example "54377442-20a2-4c20-b761-d636c72de7b7"
   */
  id: string;
  /**
   * Name of the feed
   * @example "New feed"
   */
  name: string;
  /**
   * URL of the feed
   * @format url
   * @example "http://requestb.in/173lyyx1"
   */
  url: string;
  /** Auth type of the feed: * `basic` * `token` * `noAuth` */
  authType: "basic" | "token" | "noAuth";
  /**
   * Username for authType `basic`
   * @example "user"
   */
  username?: string;
  /**
   * Password for authType `basic`
   * @example "password"
   */
  password?: string;
  /**
   * Token for authType `token`
   * @example "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
   */
  token?: string;
  /** Custom headers for the feed */
  headers: {
    /**
     * Name of the header
     * @example "userId"
     */
    name?: string;
    /**
     * Value of the header
     * @example "user12345"
     */
    value?: string;
  }[];
  /**
   * Maximum number of retries on the feed url
   * @min 0
   * @max 5
   * @default 5
   * @example 5
   */
  maxRetries: number;
  /**
   * Toggle caching of feed url response
   * @example true
   */
  cache: boolean;
  /**
   * Datetime on which the feed was created
   * @format date-time
   * @example "2022-10-06T05:03:47.053000000Z"
   */
  createdAt: string;
  /**
   * Datetime on which the feed was modified
   * @format date-time
   * @example "2022-10-06T05:03:47.053000000Z"
   */
  modifiedAt: string;
}

export interface GetAllExternalFeeds {
  /** Total number of batches */
  count?: number;
  feeds?: {
    /**
     * ID of the feed
     * @format uuidv4
     * @example "54377442-20a2-4c20-b761-d636c72de7b7"
     */
    id: string;
    /**
     * Name of the feed
     * @example "New feed"
     */
    name: string;
    /**
     * URL of the feed
     * @format url
     * @example "http://requestb.in/173lyyx1"
     */
    url: string;
    /** Auth type of the feed: * `basic` * `token` * `noAuth` */
    authType: "basic" | "token" | "noAuth";
    /**
     * Username for authType `basic`
     * @example "user"
     */
    username?: string;
    /**
     * Password for authType `basic`
     * @example "password"
     */
    password?: string;
    /**
     * Token for authType `token`
     * @example "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
     */
    token?: string;
    /** Custom headers for the feed */
    headers: {
      /**
       * Name of the header
       * @example "userId"
       */
      name?: string;
      /**
       * Value of the header
       * @example "user12345"
       */
      value?: string;
    }[];
    /**
     * Maximum number of retries on the feed url
     * @min 0
     * @max 5
     * @default 5
     * @example 5
     */
    maxRetries: number;
    /**
     * Toggle caching of feed url response
     * @example true
     */
    cache: boolean;
    /**
     * Datetime on which the feed was created
     * @format date-time
     * @example "2022-10-06T05:03:47.053000000Z"
     */
    createdAt: string;
    /**
     * Datetime on which the feed was modified
     * @format date-time
     * @example "2022-10-06T05:03:47.053000000Z"
     */
    modifiedAt: string;
  }[];
}

export interface CreateExternalFeed {
  /**
   * Name of the feed
   * @example "New feed"
   */
  name: string;
  /**
   * URL of the feed
   * @format url
   * @example "http://requestb.in/173lyyx1"
   */
  url: string;
  /**
   * Auth type of the feed:
   *  * `basic`
   *  * `token`
   *  * `noAuth`
   * @default "noAuth"
   */
  authType?: "basic" | "token" | "noAuth";
  /**
   * Username for authType `basic`
   * @example "user"
   */
  username?: string;
  /**
   * Password for authType `basic`
   * @example "password"
   */
  password?: string;
  /**
   * Token for authType `token`
   * @example "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
   */
  token?: string;
  /**
   * Custom headers for the feed
   * @example [{"name":"header1","value":"value1"},{"name":"header2","value":"value2"}]
   */
  headers?: {
    /**
     * Name of the header
     * @example "userId"
     */
    name?: string;
    /**
     * Value of the header
     * @example "user12345"
     */
    value?: string;
  }[];
  /**
   * Maximum number of retries on the feed url
   * @min 0
   * @max 5
   * @default 5
   * @example 5
   */
  maxRetries?: number;
  /**
   * Toggle caching of feed url response
   * @default false
   * @example true
   */
  cache?: boolean;
}

export interface UpdateExternalFeed {
  /**
   * Name of the feed
   * @example "New feed"
   */
  name?: string;
  /**
   * URL of the feed
   * @format url
   * @example "http://requestb.in/173lyyx1"
   */
  url?: string;
  /**
   * Auth type of the feed:
   *  * `basic`
   *  * `token`
   *  * `noAuth`
   */
  authType?: "basic" | "token" | "noAuth";
  /**
   * Username for authType `basic`
   * @example "user"
   */
  username?: string;
  /**
   * Password for authType `basic`
   * @example "password"
   */
  password?: string;
  /**
   * Token for authType `token`
   * @example "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
   */
  token?: string;
  /**
   * Custom headers for the feed
   * @example [{"name":"header1","value":"value1"},{"name":"header2","value":"value2"}]
   */
  headers?: {
    /**
     * Name of the header
     * @example "userId"
     */
    name?: string;
    /**
     * Value of the header
     * @example "user12345"
     */
    value?: string;
  }[];
  /**
   * Maximum number of retries on the feed url
   * @min 0
   * @max 5
   * @default 5
   * @example 5
   */
  maxRetries?: number;
  /**
   * Toggle caching of feed url response
   * @default false
   * @example true
   */
  cache?: boolean;
}

export interface ExportWebhooksHistory {
  /**
   * Number of days in the past including today (positive integer). _Not compatible with 'startDate' and 'endDate'_
   * @example 7
   */
  days?: number;
  /**
   * Mandatory if endDate is used. Starting date of the history (YYYY-MM-DD). Must be lower than equal to endDate
   * @example "2023-02-13T00:00:00.000Z"
   */
  startDate?: string;
  /**
   * Mandatory if startDate is used. Ending date of the report (YYYY-MM-DD). Must be greater than equal to startDate
   * @example "2023-02-17T00:00:00.000Z"
   */
  endDate?: string;
  /**
   * Sorting order of records (asc or desc)
   * @example "desc"
   */
  sort?: string;
  /**
   * Filter the history based on webhook type
   * @example "transactional"
   */
  type: "transactional" | "marketing";
  /**
   * Filter the history for a specific event type
   * @example "request"
   */
  event:
    | "invalid_parameter"
    | "missing_parameter"
    | "hardBounce"
    | "softBounce"
    | "delivered"
    | "spam"
    | "request"
    | "opened"
    | "click"
    | "invalid"
    | "deferred"
    | "blocked"
    | "unsubscribed"
    | "error"
    | "uniqueOpened"
    | "loadedByProxy"
    | "allEvents";
  /**
   * Webhook URL to receive CSV file link
   * @example "https://brevo.com"
   */
  notifyURL: string;
  /**
   * Filter the history for a specific webhook id
   * @example 2345
   */
  webhookId?: number;
  /**
   * Filter the history for a specific email
   * @example "example@brevo.com"
   */
  email?: string;
  /**
   * Filter the history for a specific message id. Applicable only for transactional webhooks.
   * @example "<23befbae-1505-47a8-bd27-e30ef739f32c@fr.sib>"
   */
  messageId?: number;
}

export interface CreatePaymentRequest {
  /**
   * Reference of the payment request, it will appear on the payment page.
   * @example "Invoice #INV0001"
   */
  reference: string;
  /** Specify the payment currency and amount. */
  cart: Cart;
  /**
   * Brevo ID of the contact requested to pay.
   * @format int64
   * @example 43
   */
  contactId: number;
  /**
   * description of payment request
   * @example "Shipping Cost for sending bottles to NYC"
   */
  description?: string;
  /** Optional. Use this object if you want to let Brevo send an email to the contact, with the payment request URL. If empty, no notifications (message and reminders) will be sent. */
  notification?: Notification;
  /** Optional. Redirect contact to a custom success page once payment is successful. If empty the default Brevo page will be displayed once a payment is validated */
  configuration?: Configuration;
}

/** Optional. Redirect contact to a custom success page once payment is successful. If empty the default Brevo page will be displayed once a payment is validated */
export interface Configuration {
  /**
   * Absolute URL of the custom success page.
   * @format url
   * @example "https://my-company.com/payment-success"
   */
  customSuccessUrl: string;
}

/** Specify the payment currency and amount. */
export interface Cart {
  /**
   * Currency code for the payment amount.
   * @example "EUR"
   */
  currency: "EUR";
  /**
   * Payment amount, in cents.
   * e.g. if you want to request €12.00, then the amount in cents is 1200.
   * @format int64
   * @example 1200
   */
  specificAmount: number;
}

/** Optional. Use this object if you want to let Brevo send an email to the contact, with the payment request URL. If empty, no notifications (message and reminders) will be sent. */
export interface Notification {
  /**
   * Channel used to send the notifications.
   * @example "email"
   */
  channel: "email";
  /**
   * Use this field if you want to give more context to your contact about the payment request.
   * @example "Please pay for your yoga class."
   */
  text: string;
}

export interface GetPaymentRequest {
  /**
   * Reference of the payment request, it will appear on the payment page.
   * @example "Invoice #INV0001
   * "
   */
  reference: string;
  /**
   * Status of the payment request.
   * @example "paid"
   */
  status: "created" | "sent" | "reminderSent" | "paid";
  /** Optional. Redirect contact to a custom success page once payment is successful. If empty the default Brevo page will be displayed once a payment is validated */
  configuration?: Configuration;
  /**
   * Brevo ID of the contact requested to pay.
   * @format int64
   * @example 43
   */
  contactId?: number;
  /**
   * number of reminders sent.
   * @format int64
   * @example 5
   */
  numberOfRemindersSent?: number;
  /** Specify the payment currency and amount. */
  cart: Cart;
  /** Optional. Use this object if you want to let Brevo send an email to the contact, with the payment request URL. If empty, no notifications (message and reminders) will be sent. */
  notification: Notification;
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
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "https://api.brevo.com/v3" });
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
 * @title Brevo API
 * @version 3.0.0
 * @license MIT (http://opensource.org/licenses/MIT)
 * @baseUrl https://api.brevo.com/v3
 * @contact Brevo Support <contact@brevo.com> (https://account.brevo.com/support)
 *
 * Brevo provide a RESTFul API that can be used with any languages. With this API, you will be able to :
 *   - Manage your campaigns and get the statistics
 *   - Manage your contacts
 *   - Send transactional Emails and SMS
 *   - and much more...
 *
 * You can download our wrappers at https://github.com/orgs/brevo
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
 *   | 422  | Error. Unprocessable Entity |
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
        /** Filter on the type of statistics required. Example **globalStats** value will only fetch globalStats info of the campaign in returned response.This option only returns data for events occurred in the last 6 months.For older campaigns, it’s advisable to use the **Get Campaign Report** endpoint. */
        statistics?: "globalStats" | "linksStats" | "statsByDomain";
        /**
         * **Mandatory if endDate is used**. Starting (urlencoded) UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ) to filter the sent email campaigns.
         * **Prefer to pass your timezone in date-time format for accurate result** ( only available if either 'status' not passed and if passed is set to 'sent' )
         */
        startDate?: string;
        /**
         * **Mandatory if startDate is used**. Ending (urlencoded) UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ) to filter the sent email campaigns.
         * **Prefer to pass your timezone in date-time format for accurate result** ( only available if either 'status' not passed and if passed is set to 'sent' )
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
         * Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed
         * @default "desc"
         */
        sort?: "asc" | "desc";
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
    createEmailCampaign: (data: CreateEmailCampaign, params: RequestParams = {}) =>
      this.request<CreateModel, ErrorModel>({
        path: `/emailCampaigns`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
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
        /** Filter on the type of statistics required. Example **globalStats** value will only fetch globalStats info of the campaign in returned response. */
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
    updateEmailCampaign: (campaignId: number, data: UpdateEmailCampaign, params: RequestParams = {}) =>
      this.request<void, ErrorModel>({
        path: `/emailCampaigns/${campaignId}`,
        method: "PUT",
        body: data,
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
    sendTestEmail: (campaignId: number, data: SendTestEmail, params: RequestParams = {}) =>
      this.request<void, PostSendFailed>({
        path: `/emailCampaigns/${campaignId}/sendTest`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
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
    updateCampaignStatus: (campaignId: number, data: UpdateCampaignStatus, params: RequestParams = {}) =>
      this.request<void, ErrorModel>({
        path: `/emailCampaigns/${campaignId}/status`,
        method: "PUT",
        body: data,
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
    sendReport: (campaignId: number, data: SendReport, params: RequestParams = {}) =>
      this.request<void, ErrorModel>({
        path: `/emailCampaigns/${campaignId}/sendReport`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
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
     * @description Get a unique URL to share & import an email template from one Brevo account to another.
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
    emailExportRecipients: (campaignId: number, data?: EmailExportRecipients, params: RequestParams = {}) =>
      this.request<CreatedProcessId, ErrorModel>({
        path: `/emailCampaigns/${campaignId}/exportRecipients`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
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
    uploadImageToGallery: (data: UploadImageToGallery, params: RequestParams = {}) =>
      this.request<UploadImageModel, ErrorModel>({
        path: `/emailCampaigns/images`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  smtp = {
    /**
     * No description
     *
     * @tags Transactional emails
     * @name SendTransacEmail
     * @summary Send a transactional email
     * @request POST:/smtp/email
     * @secure
     */
    sendTransacEmail: (data: SendSmtpEmail, params: RequestParams = {}) =>
      this.request<CreateSmtpEmail, ErrorModel>({
        path: `/smtp/email`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description This endpoint will show the list of emails for past 30 days by default. To retrieve emails before that time, please pass startDate and endDate in query filters.
     *
     * @tags Transactional emails
     * @name GetTransacEmailsList
     * @summary Get the list of transactional emails on the basis of allowed filters
     * @request GET:/smtp/emails
     * @secure
     */
    getTransacEmailsList: (
      query?: {
        /** **Mandatory if templateId and messageId are not passed in query filters.** Email address to which transactional email has been sent. */
        email?: string;
        /**
         * **Mandatory if email and messageId are not passed in query filters.** Id of the template that was used to compose transactional email.
         * @format int64
         */
        templateId?: number;
        /** **Mandatory if templateId and email are not passed in query filters.** Message ID of the transactional email sent. */
        messageId?: string;
        /** **Mandatory if endDate is used.** Starting date (YYYY-MM-DD) from which you want to fetch the list. **Maximum time period that can be selected is one month**. */
        startDate?: string;
        /** **Mandatory if startDate is used.** Ending date (YYYY-MM-DD) till which you want to fetch the list. **Maximum time period that can be selected is one month.** */
        endDate?: string;
        /**
         * Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed
         * @default "desc"
         */
        sort?: "asc" | "desc";
        /**
         * Number of documents returned per page
         * @format int64
         * @min 0
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
     * @tags Transactional emails
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
     * @tags Transactional emails
     * @name DeleteSmtp
     * @summary Delete an SMTP transactional log
     * @request DELETE:/smtp/log/{identifier}
     * @secure
     */
    deleteSmtp: (identifier: string, params: RequestParams = {}) =>
      this.request<void, ErrorModel>({
        path: `/smtp/log/${identifier}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Transactional emails
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
         * @min 0
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
        /**
         * Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed
         * @default "desc"
         */
        sort?: "asc" | "desc";
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
     * @tags Transactional emails
     * @name CreateSmtpTemplate
     * @summary Create an email template
     * @request POST:/smtp/templates
     * @secure
     */
    createSmtpTemplate: (data: CreateSmtpTemplate, params: RequestParams = {}) =>
      this.request<CreateModel, ErrorModel>({
        path: `/smtp/templates`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Transactional emails
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
     * @tags Transactional emails
     * @name UpdateSmtpTemplate
     * @summary Update an email template
     * @request PUT:/smtp/templates/{templateId}
     * @secure
     */
    updateSmtpTemplate: (templateId: number, data: UpdateSmtpTemplate, params: RequestParams = {}) =>
      this.request<void, ErrorModel>({
        path: `/smtp/templates/${templateId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Transactional emails
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
     * @tags Transactional emails
     * @name SendTestTemplate
     * @summary Send a template to your test list
     * @request POST:/smtp/templates/{templateId}/sendTest
     * @secure
     */
    sendTestTemplate: (templateId: number, data: SendTestEmail, params: RequestParams = {}) =>
      this.request<void, PostSendFailed | ErrorModel>({
        path: `/smtp/templates/${templateId}/sendTest`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description This endpoint will show the aggregated stats for past 90 days by default if `startDate` and `endDate` OR `days` is not passed. The date range can not exceed 90 days
     *
     * @tags Transactional emails
     * @name GetAggregatedSmtpReport
     * @summary Get your transactional email activity aggregated over a period of time
     * @request GET:/smtp/statistics/aggregatedReport
     * @secure
     */
    getAggregatedSmtpReport: (
      query?: {
        /** **Mandatory if endDate is used.** Starting date of the report (YYYY-MM-DD). Must be lower than equal to endDate */
        startDate?: string;
        /** **Mandatory if startDate is used.** Ending date of the report (YYYY-MM-DD). Must be greater than equal to startDate */
        endDate?: string;
        /**
         * Number of days in the past including today (positive integer). _Not compatible with 'startDate' and 'endDate'_
         * @format int64
         */
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
     * @tags Transactional emails
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
         * @min 0
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
        /** **Mandatory if endDate is used.** Starting date of the report (YYYY-MM-DD) */
        startDate?: string;
        /** **Mandatory if startDate is used.** Ending date of the report (YYYY-MM-DD) */
        endDate?: string;
        /**
         * Number of days in the past including today (positive integer). _Not compatible with 'startDate' and 'endDate'_
         * @format int64
         */
        days?: number;
        /** Tag of the emails */
        tag?: string;
        /**
         * Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed
         * @default "desc"
         */
        sort?: "asc" | "desc";
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
     * @description This endpoint will show the aggregated stats for past 30 days by default if `startDate` and `endDate` OR `days` is not passed. The date range can not exceed 90 days
     *
     * @tags Transactional emails
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
         * @min 0
         * @max 5000
         * @default 2500
         */
        limit?: number;
        /**
         * Beginning point in the list to retrieve from.
         * @format int64
         * @default 0
         */
        offset?: number;
        /** **Mandatory if endDate is used.** Starting date of the report (YYYY-MM-DD). Must be lower than equal to endDate */
        startDate?: string;
        /** **Mandatory if startDate is used.** Ending date of the report (YYYY-MM-DD). Must be greater than equal to startDate */
        endDate?: string;
        /**
         * Number of days in the past including today (positive integer). _Not compatible with 'startDate' and 'endDate'_
         * @format int64
         */
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
          | "unsubscribed"
          | "error"
          | "loadedByProxy";
        /** Filter the report for tags (serialized and urlencoded array) */
        tags?: string;
        /** Filter on a specific message id */
        messageId?: string;
        /**
         * Filter on a specific template id
         * @format int64
         */
        templateId?: number;
        /**
         * Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed
         * @default "desc"
         */
        sort?: "asc" | "desc";
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
     * @tags Transactional emails
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
     * @tags Transactional emails
     * @name GetTransacBlockedContacts
     * @summary Get the list of blocked or unsubscribed transactional contacts
     * @request GET:/smtp/blockedContacts
     * @secure
     */
    getTransacBlockedContacts: (
      query?: {
        /** **Mandatory if endDate is used.** Starting date (YYYY-MM-DD) from which you want to fetch the blocked or unsubscribed contacts */
        startDate?: string;
        /** **Mandatory if startDate is used.** Ending date (YYYY-MM-DD) till which you want to fetch the blocked or unsubscribed contacts */
        endDate?: string;
        /**
         * Number of documents returned per page
         * @format int64
         * @min 0
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
        /**
         * Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed
         * @default "desc"
         */
        sort?: "asc" | "desc";
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
     * @tags Transactional emails
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
     * @tags Transactional emails
     * @name BlockNewDomain
     * @summary Add a new domain to the list of blocked domains
     * @request POST:/smtp/blockedDomains
     * @secure
     */
    blockNewDomain: (data: BlockDomain, params: RequestParams = {}) =>
      this.request<void, ErrorModel>({
        path: `/smtp/blockedDomains`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Unblocks an existing domain from the list of blocked domains
     *
     * @tags Transactional emails
     * @name DeleteBlockedDomain
     * @summary Unblock an existing domain from the list of blocked domains
     * @request DELETE:/smtp/blockedDomains/{domain}
     * @secure
     */
    deleteBlockedDomain: (domain: string, params: RequestParams = {}) =>
      this.request<void, ErrorModel>({
        path: `/smtp/blockedDomains/${domain}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Delete hardbounces. To use carefully (e.g. in case of temporary ISP failures)
     *
     * @tags Transactional emails
     * @name DeleteHardbounces
     * @summary Delete hardbounces
     * @request POST:/smtp/deleteHardbounces
     * @secure
     */
    deleteHardbounces: (data?: DeleteHardbounces, params: RequestParams = {}) =>
      this.request<void, ErrorModel>({
        path: `/smtp/deleteHardbounces`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Fetch scheduled batch of emails by batchId or single scheduled email by messageId (Can retrieve data upto 30 days old)
     *
     * @tags Transactional emails
     * @name GetScheduledEmailById
     * @summary Fetch scheduled emails by batchId or messageId
     * @request GET:/smtp/emailStatus/{identifier}
     * @secure
     */
    getScheduledEmailById: (
      identifier: string,
      query?: {
        /**
         * Mandatory if `endDate` is used. Starting date (YYYY-MM-DD) from which you want to fetch the list. Can be maximum 30 days older tha current date.
         * @format date
         * @example "2022-02-02"
         */
        startDate?: string;
        /**
         * Mandatory if `startDate` is used. Ending date (YYYY-MM-DD) till which you want to fetch the list. Maximum time period that can be selected is one month.
         * @format date
         * @example "2022-03-02"
         */
        endDate?: string;
        /**
         * Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed. Not valid when identifier is `messageId`.
         * @default "desc"
         */
        sort?: "asc" | "desc";
        /** Filter the records by `status` of the scheduled email batch or message. Not valid when identifier is `messageId`. */
        status?: "processed" | "inProgress" | "queued";
        /**
         * Number of documents returned per page. Not valid when identifier is `messageId`.
         * @format int64
         * @min 0
         * @max 500
         * @default 100
         * @example 100
         */
        limit?: number;
        /**
         * Index of the first document on the page.  Not valid when identifier is `messageId`.
         * @format int64
         * @default 0
         * @example 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetScheduledEmailByBatchId | GetScheduledEmailByMessageId, ErrorModel>({
        path: `/smtp/emailStatus/${identifier}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Delete scheduled batch of emails by batchId or single scheduled email by messageId
     *
     * @tags Transactional emails
     * @name DeleteScheduledEmailById
     * @summary Delete scheduled emails by batchId or messageId
     * @request DELETE:/smtp/email/{identifier}
     * @secure
     */
    deleteScheduledEmailById: (identifier: string, params: RequestParams = {}) =>
      this.request<void, ErrorModel>({
        path: `/smtp/email/${identifier}`,
        method: "DELETE",
        secure: true,
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
         * @min 0
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
        /** Filter (urlencoded) the contacts modified after a given UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ). **Prefer to pass your timezone in date-time format for accurate result.** */
        modifiedSince?: string;
        /** Filter (urlencoded) the contacts created after a given UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ). **Prefer to pass your timezone in date-time format for accurate result.** */
        createdSince?: string;
        /**
         * Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed
         * @default "desc"
         */
        sort?: "asc" | "desc";
        /**
         * Id of the segment. **Either listIds or segmentId can be passed.**
         * @format int64
         */
        segmentId?: number;
        /** Ids of the list. **Either listIds or segmentId can be passed.** */
        listIds?: number[];
        /** Filter the contacts on the basis of attributes. **Allowed operator: equals. (e.g. filter=equals(FIRSTNAME,"Antoine"), filter=equals(B1, true), filter=equals(DOB, "1989-11-23"))** */
        filter?: string;
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
    createContact: (data: CreateContact, params: RequestParams = {}) =>
      this.request<CreateUpdateContactModel, ErrorModel>({
        path: `/contacts`,
        method: "POST",
        body: data,
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
    createDoiContact: (data: CreateDoiContact, params: RequestParams = {}) =>
      this.request<void, ErrorModel>({
        path: `/contacts/doubleOptinConfirmation`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Along with the contact details, this endpoint will show the statistics of contact for the recent 90 days by default. To fetch the earlier statistics, please use Get contact campaign stats ``https://developers.brevo.com/reference/contacts-7#getcontactstats`` endpoint with the appropriate date ranges.
     *
     * @tags Contacts
     * @name GetContactInfo
     * @summary Get a contact's details
     * @request GET:/contacts/{identifier}
     * @secure
     */
    getContactInfo: (
      identifier: string | number,
      query?: {
        /** email_id for Email, phone_id for SMS attribute, contact_id for ID of the contact, ext_id for EXT_ID attribute */
        identifierType?: "email_id" | "phone_id" | "contact_id" | "ext_id";
        /** **Mandatory if endDate is used.** Starting date (YYYY-MM-DD) of the statistic events specific to campaigns. Must be lower than equal to endDate */
        startDate?: string;
        /** **Mandatory if startDate is used.** Ending date (YYYY-MM-DD) of the statistic events specific to campaigns. Must be greater than equal to startDate. */
        endDate?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetExtendedContactDetails, ErrorModel>({
        path: `/contacts/${identifier}`,
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
     * @name DeleteContact
     * @summary Delete a contact
     * @request DELETE:/contacts/{identifier}
     * @secure
     */
    deleteContact: (
      identifier: string | number,
      query?: {
        /** email_id for Email, contact_id for ID of the contact, ext_id for EXT_ID attribute */
        identifierType?: "email_id" | "contact_id" | "ext_id";
      },
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorModel>({
        path: `/contacts/${identifier}`,
        method: "DELETE",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Contacts
     * @name UpdateContact
     * @summary Update a contact
     * @request PUT:/contacts/{identifier}
     * @secure
     */
    updateContact: (identifier: string | number, data: UpdateContact, params: RequestParams = {}) =>
      this.request<void, ErrorModel>({
        path: `/contacts/${identifier}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Contacts
     * @name UpdateBatchContacts
     * @summary Update multiple contacts
     * @request POST:/contacts/batch
     * @secure
     */
    updateBatchContacts: (data: UpdateBatchContacts, params: RequestParams = {}) =>
      this.request<void, ErrorModel>({
        path: `/contacts/batch`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Contacts
     * @name GetContactStats
     * @summary Get email campaigns' statistics for a contact
     * @request GET:/contacts/{identifier}/campaignStats
     * @secure
     */
    getContactStats: (
      identifier: string | number,
      query?: {
        /** **Mandatory if endDate is used.** Starting date (YYYY-MM-DD) of the statistic events specific to campaigns. Must be lower than equal to endDate */
        startDate?: string;
        /** **Mandatory if startDate is used.** Ending date (YYYY-MM-DD) of the statistic events specific to campaigns. Must be greater than equal to startDate. Maximum difference between startDate and endDate should not be greater than 90 days */
        endDate?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetContactCampaignStats, ErrorModel>({
        path: `/contacts/${identifier}/campaignStats`,
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
     * @tags Contacts
     * @name UpdateAttribute
     * @summary Update contact attribute
     * @request PUT:/contacts/attributes/{attributeCategory}/{attributeName}
     * @secure
     */
    updateAttribute: (
      attributeCategory: "category" | "calculated" | "global" | "normal",
      attributeName: string,
      data: UpdateAttribute,
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorModel>({
        path: `/contacts/attributes/${attributeCategory}/${attributeName}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Contacts
     * @name CreateAttribute
     * @summary Create contact attribute
     * @request POST:/contacts/attributes/{attributeCategory}/{attributeName}
     * @secure
     */
    createAttribute: (
      attributeCategory: "normal" | "transactional" | "category" | "calculated" | "global",
      attributeName: string,
      data: CreateAttribute,
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorModel>({
        path: `/contacts/attributes/${attributeCategory}/${attributeName}`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Contacts
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
     * @tags Contacts
     * @name DeleteMultiAttributeOptions
     * @summary Delete a multiple-choice attribute option
     * @request DELETE:/contacts/attributes/{attributeType}/{multipleChoiceAttribute}/{multipleChoiceAttributeOption}
     * @secure
     */
    deleteMultiAttributeOptions: (
      attributeType: "multiple-choice",
      multipleChoiceAttribute: string,
      multipleChoiceAttributeOption: string,
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorModel>({
        path: `/contacts/attributes/${attributeType}/${multipleChoiceAttribute}/${multipleChoiceAttributeOption}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Contacts
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
         * @min 0
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
         * Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed
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
     * @tags Contacts
     * @name CreateFolder
     * @summary Create a folder
     * @request POST:/contacts/folders
     * @secure
     */
    createFolder: (data: CreateUpdateFolder, params: RequestParams = {}) =>
      this.request<CreateModel, ErrorModel>({
        path: `/contacts/folders`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Contacts
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
     * @tags Contacts
     * @name UpdateFolder
     * @summary Update a folder
     * @request PUT:/contacts/folders/{folderId}
     * @secure
     */
    updateFolder: (folderId: number, data: CreateUpdateFolder, params: RequestParams = {}) =>
      this.request<void, ErrorModel>({
        path: `/contacts/folders/${folderId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Contacts
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
     * @tags Contacts
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
         * @min 0
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
         * Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed
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
     * @tags Contacts
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
         * @min 0
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
         * Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed
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
     * @tags Contacts
     * @name CreateList
     * @summary Create a list
     * @request POST:/contacts/lists
     * @secure
     */
    createList: (data: CreateList, params: RequestParams = {}) =>
      this.request<CreateModel, ErrorModel>({
        path: `/contacts/lists`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Contacts
     * @name GetList
     * @summary Get a list's details
     * @request GET:/contacts/lists/{listId}
     * @secure
     */
    getList: (
      listId: number,
      query?: {
        /**
         * **Mandatory if endDate is used**. Ending (urlencoded) UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ) to aggregate the sent email campaigns for a specific list id.
         * **Prefer to pass your timezone in date-time format for accurate result**
         */
        startDate?: string;
        /**
         * **Mandatory if startDate is used**. Ending (urlencoded) UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ) to aggregate the sent email campaigns for a specific list id.
         * **Prefer to pass your timezone in date-time format for accurate result**
         */
        endDate?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetExtendedList, ErrorModel>({
        path: `/contacts/lists/${listId}`,
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
     * @name UpdateList
     * @summary Update a list
     * @request PUT:/contacts/lists/{listId}
     * @secure
     */
    updateList: (listId: number, data: UpdateList, params: RequestParams = {}) =>
      this.request<void, ErrorModel>({
        path: `/contacts/lists/${listId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Contacts
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
     * @tags Contacts
     * @name GetSegments
     * @summary Get all the segments
     * @request GET:/contacts/segments
     * @secure
     */
    getSegments: (
      query?: {
        /**
         * Number of documents per page
         * @format int64
         * @min 0
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
         * Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed
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
     * @tags Contacts
     * @name GetContactsFromList
     * @summary Get contacts in a list
     * @request GET:/contacts/lists/{listId}/contacts
     * @secure
     */
    getContactsFromList: (
      listId: number,
      query?: {
        /** Filter (urlencoded) the contacts modified after a given UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ). **Prefer to pass your timezone in date-time format for accurate result.** */
        modifiedSince?: string;
        /**
         * Number of documents per page
         * @format int64
         * @min 0
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
         * Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed
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
     * @tags Contacts
     * @name AddContactToList
     * @summary Add existing contacts to a list
     * @request POST:/contacts/lists/{listId}/contacts/add
     * @secure
     */
    addContactToList: (
      listId: number,
      data: AddContactToListByEmails | AddContactToListByIDs,
      params: RequestParams = {},
    ) =>
      this.request<PostContactInfo, ErrorModel>({
        path: `/contacts/lists/${listId}/contacts/add`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Contacts
     * @name RemoveContactFromList
     * @summary Delete a contact from a list
     * @request POST:/contacts/lists/{listId}/contacts/remove
     * @secure
     */
    removeContactFromList: (
      listId: number,
      data: RemoveContactFromListByEmails | RemoveContactFromListByIDs | RemoveContactFromListByAll,
      params: RequestParams = {},
    ) =>
      this.request<PostContactInfo, ErrorModel>({
        path: `/contacts/lists/${listId}/contacts/remove`,
        method: "POST",
        body: data,
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
    requestContactExport: (data: RequestContactExport, params: RequestParams = {}) =>
      this.request<CreatedProcessId, ErrorModel>({
        path: `/contacts/export`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description It returns the background process ID which on completion calls the notify URL that you have set in the input. **Note**: - Any contact attribute that doesn't exist in your account will be ignored at import end.
     *
     * @tags Contacts
     * @name ImportContacts
     * @summary Import contacts
     * @request POST:/contacts/import
     * @secure
     */
    importContacts: (data: RequestContactImport, params: RequestParams = {}) =>
      this.request<CreatedProcessId, ErrorModel>({
        path: `/contacts/import`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
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
        /** **Mandatory if endDate is used.** Starting (urlencoded) UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ) to filter the sent sms campaigns. **Prefer to pass your timezone in date-time format for accurate result** ( only available if either 'status' not passed and if passed is set to 'sent' ) */
        startDate?: string;
        /** **Mandatory if startDate is used.** Ending (urlencoded) UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ) to filter the sent sms campaigns. **Prefer to pass your timezone in date-time format for accurate result** ( only available if either 'status' not passed and if passed is set to 'sent' ) */
        endDate?: string;
        /**
         * Number limitation for the result returned
         * @format int64
         * @min 0
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
        /**
         * Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed
         * @default "desc"
         */
        sort?: "asc" | "desc";
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
    createSmsCampaign: (data: CreateSmsCampaign, params: RequestParams = {}) =>
      this.request<CreateModel, ErrorModel>({
        path: `/smsCampaigns`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
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
    updateSmsCampaign: (campaignId: number, data: UpdateSmsCampaign, params: RequestParams = {}) =>
      this.request<void, ErrorModel>({
        path: `/smsCampaigns/${campaignId}`,
        method: "PUT",
        body: data,
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
    updateSmsCampaignStatus: (campaignId: number, data: UpdateCampaignStatus, params: RequestParams = {}) =>
      this.request<void, ErrorModel>({
        path: `/smsCampaigns/${campaignId}/status`,
        method: "PUT",
        body: data,
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
    sendTestSms: (campaignId: number, data: SendTestSms, params: RequestParams = {}) =>
      this.request<void, PostSendSmsTestFailed | ErrorModel>({
        path: `/smsCampaigns/${campaignId}/sendTest`,
        method: "POST",
        body: data,
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
    requestSmsRecipientExport: (campaignId: number, data?: RequestSmsRecipientExport, params: RequestParams = {}) =>
      this.request<CreatedProcessId, ErrorModel>({
        path: `/smsCampaigns/${campaignId}/exportRecipients`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
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
    sendSmsReport: (campaignId: number, data: SendReport, params: RequestParams = {}) =>
      this.request<void, ErrorModel>({
        path: `/smsCampaigns/${campaignId}/sendReport`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
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
    sendTransacSms: (data: SendTransacSms, params: RequestParams = {}) =>
      this.request<SendSms, ErrorModel>({
        path: `/transactionalSMS/sms`,
        method: "POST",
        body: data,
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
        /** **Mandatory if endDate is used.** Starting date (YYYY-MM-DD) of the report */
        startDate?: string;
        /** **Mandatory if startDate is used.** Ending date (YYYY-MM-DD) of the report */
        endDate?: string;
        /**
         * Number of days in the past including today (positive integer). **Not compatible with startDate and endDate**
         * @format int64
         */
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
        /** **Mandatory if endDate is used.** Starting date (YYYY-MM-DD) of the report */
        startDate?: string;
        /** **Mandatory if startDate is used.** Ending date (YYYY-MM-DD) of the report */
        endDate?: string;
        /**
         * Number of days in the past including today (positive integer). **Not compatible with 'startDate' and 'endDate'**
         * @format int64
         */
        days?: number;
        /** Filter on a tag */
        tag?: string;
        /**
         * Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed
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
         * @min 0
         * @max 100
         * @default 50
         */
        limit?: number;
        /** **Mandatory if endDate is used.** Starting date (YYYY-MM-DD) of the report */
        startDate?: string;
        /** **Mandatory if startDate is used.** Ending date (YYYY-MM-DD) of the report */
        endDate?: string;
        /**
         * Index of the first document of the page
         * @format int64
         * @default 0
         */
        offset?: number;
        /**
         * Number of days in the past including today (positive integer). **Not compatible with 'startDate' and 'endDate'**
         * @format int64
         */
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
          | "rejected"
          | "skipped";
        /** Filter the report for specific tags passed as a serialized urlencoded array */
        tags?: string;
        /**
         * Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed
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
     * @name UpdateWhatsAppCampaign
     * @summary Update a WhatsApp campaign
     * @request PUT:/whatsappCampaigns/{campaignId}
     * @secure
     */
    updateWhatsAppCampaign: (campaignId: number, data: UpdateWhatsAppCampaign, params: RequestParams = {}) =>
      this.request<void, ErrorModel>({
        path: `/whatsappCampaigns/${campaignId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
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
        /** source of the template */
        source?: "Automation" | "Conversations";
      },
      params: RequestParams = {},
    ) =>
      this.request<GetWhatsappTemplates, ErrorModel>({
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
     * @name CreateWhatsAppCampaign
     * @summary Create and Send a WhatsApp campaign
     * @request POST:/whatsappCampaigns
     * @secure
     */
    createWhatsAppCampaign: (data: CreateWhatsAppCampaign, params: RequestParams = {}) =>
      this.request<CreateModel, ErrorModel>({
        path: `/whatsappCampaigns`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
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
         * **Mandatory if endDate is used**. Starting (urlencoded) UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ) to filter the WhatsApp campaigns created.
         * **Prefer to pass your timezone in date-time format for accurate result**
         */
        startDate?: string;
        /**
         * **Mandatory if startDate is used**. Ending (urlencoded) UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ) to filter the WhatsApp campaigns created.
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

    /**
     * No description
     *
     * @tags WhatsApp Campaigns
     * @name CreateWhatsAppTemplate
     * @summary Create a WhatsApp template
     * @request POST:/whatsappCampaigns/template
     * @secure
     */
    createWhatsAppTemplate: (data: CreateWhatsAppTemplate, params: RequestParams = {}) =>
      this.request<CreateModel, ErrorModel>({
        path: `/whatsappCampaigns/template`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags WhatsApp Campaigns
     * @name SendWhatsAppTemplateApproval
     * @summary Send your WhatsApp template for approval
     * @request POST:/whatsappCampaigns/template/approval/{templateId}
     * @secure
     */
    sendWhatsAppTemplateApproval: (templateId: number, params: RequestParams = {}) =>
      this.request<void, ErrorModel>({
        path: `/whatsappCampaigns/template/approval/${templateId}`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags WhatsApp Campaigns
     * @name GetWhatsAppConfig
     * @summary Get your WhatsApp API account information
     * @request GET:/whatsappCampaigns/config
     * @secure
     */
    getWhatsAppConfig: (params: RequestParams = {}) =>
      this.request<GetWhatsAppConfig, ErrorModel>({
        path: `/whatsappCampaigns/config`,
        method: "GET",
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
        /** Filter your senders for a specific ip. **Available for dedicated IP usage only** */
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
    createSender: (data?: CreateSender, params: RequestParams = {}) =>
      this.request<CreateSenderModel, ErrorModel>({
        path: `/senders`,
        method: "POST",
        body: data,
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
    updateSender: (senderId: number, data?: UpdateSender, params: RequestParams = {}) =>
      this.request<void, ErrorModel>({
        path: `/senders/${senderId}`,
        method: "PUT",
        body: data,
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
     * @name ValidateSenderByOtp
     * @summary Validate Sender using OTP
     * @request PUT:/senders/{senderId}/validate
     * @secure
     */
    validateSenderByOtp: (senderId: number, data?: Otp, params: RequestParams = {}) =>
      this.request<void, ErrorModel>({
        path: `/senders/${senderId}/validate`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
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

    /**
     * No description
     *
     * @tags Domains
     * @name GetDomains
     * @summary Get the list of all your domains
     * @request GET:/senders/domains
     * @secure
     */
    getDomains: (params: RequestParams = {}) =>
      this.request<GetDomainsList, ErrorModel>({
        path: `/senders/domains`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Domains
     * @name CreateDomain
     * @summary Create a new domain
     * @request POST:/senders/domains
     * @secure
     */
    createDomain: (data?: CreateDomain, params: RequestParams = {}) =>
      this.request<CreateDomainModel, ErrorModel>({
        path: `/senders/domains`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Domains
     * @name DeleteDomain
     * @summary Delete a domain
     * @request DELETE:/senders/domains/{domainName}
     * @secure
     */
    deleteDomain: (domainName: string, params: RequestParams = {}) =>
      this.request<void, ErrorModel>({
        path: `/senders/domains/${domainName}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Domains
     * @name GetDomainConfiguration
     * @summary Validate domain configuration
     * @request GET:/senders/domains/{domainName}
     * @secure
     */
    getDomainConfiguration: (domainName: string, params: RequestParams = {}) =>
      this.request<GetDomainConfigurationModel, ErrorModel>({
        path: `/senders/domains/${domainName}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Domains
     * @name AuthenticateDomain
     * @summary Authenticate a domain
     * @request PUT:/senders/domains/{domainName}/authenticate
     * @secure
     */
    authenticateDomain: (domainName: string, params: RequestParams = {}) =>
      this.request<AuthenticateDomainModel, ErrorModel>({
        path: `/senders/domains/${domainName}/authenticate`,
        method: "PUT",
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
        type?: "marketing" | "transactional" | "inbound";
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
     * @name CreateWebhook
     * @summary Create a webhook
     * @request POST:/webhooks
     * @secure
     */
    createWebhook: (data: CreateWebhook, params: RequestParams = {}) =>
      this.request<CreateModel, ErrorModel>({
        path: `/webhooks`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
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
    updateWebhook: (webhookId: number, data: UpdateWebhook, params: RequestParams = {}) =>
      this.request<void, ErrorModel>({
        path: `/webhooks/${webhookId}`,
        method: "PUT",
        body: data,
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

    /**
     * @description This endpoint will submit a request to get the history of webhooks in the CSV file. The link to download the CSV file will be sent to the webhook that was provided in the notifyURL.
     *
     * @tags Webhooks
     * @name ExportWebhooksHistory
     * @summary Export all webhook events
     * @request POST:/webhooks/export
     * @secure
     */
    exportWebhooksHistory: (data: ExportWebhooksHistory, params: RequestParams = {}) =>
      this.request<CreatedProcessId, ErrorModel>({
        path: `/webhooks/export`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
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
  organization = {
    /**
     * No description
     *
     * @tags Account, Master account
     * @name GetAccountActivity
     * @summary Get user activity logs
     * @request GET:/organization/activities
     * @secure
     */
    getAccountActivity: (
      query?: {
        /** Mandatory if endDate is used. Enter start date in UTC date (YYYY-MM-DD) format to filter the activity in your account. Maximum time period that can be selected is one month. Additionally, you can retrieve activity logs from the past 12 months from the date of your search. */
        startDate?: string;
        /** Mandatory if startDate is used. Enter end date in UTC date (YYYY-MM-DD) format to filter the activity in your account. Maximum time period that can be selected is one month. */
        endDate?: string;
        /**
         * Number of documents per page
         * @format int64
         * @min 1
         * @max 100
         * @default 10
         */
        limit?: number;
        /**
         * Index of the first document in the page.
         * @format int64
         * @default 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetAccountActivity, ErrorModel>({
        path: `/organization/activities`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name GetInvitedUsersList
     * @summary Get the list of all your users
     * @request GET:/organization/invited/users
     * @secure
     */
    getInvitedUsersList: (params: RequestParams = {}) =>
      this.request<GetInvitedUsersList, ErrorModel>({
        path: `/organization/invited/users`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name GetUserPermission
     * @summary Check user permission
     * @request GET:/organization/user/{email}/permissions
     * @secure
     */
    getUserPermission: (email: string, params: RequestParams = {}) =>
      this.request<GetUserPermission, ErrorModel>({
        path: `/organization/user/${email}/permissions`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name PutRevokeUserPermission
     * @summary Revoke user permission
     * @request PUT:/organization/user/invitation/revoke/{email}
     * @secure
     */
    putRevokeUserPermission: (email: string, params: RequestParams = {}) =>
      this.request<PutRevokeUserPermissionResponse, ErrorModel>({
        path: `/organization/user/invitation/revoke/${email}`,
        method: "PUT",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name Putresendcancelinvitation
     * @summary Resend / Cancel invitation
     * @request PUT:/organization/user/invitation/{action}/{email}
     * @secure
     */
    putresendcancelinvitation: (action: "resend" | "cancel", email: string, params: RequestParams = {}) =>
      this.request<PutresendcancelinvitationResponse, ErrorModel>({
        path: `/organization/user/invitation/${action}/${email}`,
        method: "PUT",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description `Feature` - A Feature represents a specific functionality like Email campaign, Deals, Calls, Automations, etc. on Brevo. While inviting a user, determine which feature you want to manage access to. You must specify the feature accurately to avoid errors. `Permission` - A Permission defines the level of access or control a user has over a specific feature. While inviting user, decide on the permission level required for the selected feature. Make sure the chosen permission is related to the selected feature. Features and their respective permissions are as below: - `email_campaigns`: - "create_edit_delete" - "send_schedule_suspend" - `sms_campaigns`: - "create_edit_delete" - "send_schedule_suspend" - `contacts`: - "view" - "create_edit_delete" - "import" - "export" - "list_and_attributes" - "forms" - `templates`: - "create_edit_delete" - "activate_deactivate" - `workflows`: - "create_edit_delete" - "activate_deactivate_pause" - "settings" - `facebook_ads`: - "create_edit_delete" - "schedule_pause" - `landing_pages`: - "all" - `transactional_emails`: - "settings" - "logs" - `smtp_api`: - "smtp" - "api_keys" - "authorized_ips" - `user_management`: - "all" - `sales_platform`: - "manage_owned_deals_tasks" - "manage_others_deals_tasks" - "reports" - "settings" - `phone`: - "all" - `conversations`: - "access" - "assign" - "configure" - `senders_domains_dedicated_ips`: - "senders_management" - "domains_management" - "dedicated_ips_management" - `push_notifications`: - "view" - "create_edit_delete" - "send" - "settings" - `companies`: - "manage_owned_companies" - "manage_other_companies" - "settings" **Note**: - If `all_features_access: false` then only privileges are required otherwise if `true` then it's assumed that all permissions will be there for the invited user. - The availability of feature and its permission depends on your current plan. Please select the features and permissions accordingly.
     *
     * @tags User
     * @name Inviteuser
     * @summary Send invitation to user
     * @request POST:/organization/user/invitation/send
     * @secure
     */
    inviteuser: (data: Inviteuser, params: RequestParams = {}) =>
      this.request<InviteuserResponse, ErrorModel>({
        path: `/organization/user/invitation/send`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description `Feature` - A Feature represents a specific functionality like Email campaign, Deals, Calls, Automations, etc. on Brevo. While inviting a user, determine which feature you want to manage access to. You must specify the feature accurately to avoid errors. `Permission` - A Permission defines the level of access or control a user has over a specific feature. While inviting user, decide on the permission level required for the selected feature. Make sure the chosen permission is related to the selected feature. Features and their respective permissions are as below: - `email_campaigns`: - "create_edit_delete" - "send_schedule_suspend" - `sms_campaigns`: - "create_edit_delete" - "send_schedule_suspend" - `contacts`: - "view" - "create_edit_delete" - "import" - "export" - "list_and_attributes" - "forms" - `templates`: - "create_edit_delete" - "activate_deactivate" - `workflows`: - "create_edit_delete" - "activate_deactivate_pause" - "settings" - `facebook_ads`: - "create_edit_delete" - "schedule_pause" - `landing_pages`: - "all" - `transactional_emails`: - "settings" - "logs" - `smtp_api`: - "smtp" - "api_keys" - "authorized_ips" - `user_management`: - "all" - `sales_platform`: - "manage_owned_deals_tasks" - "manage_others_deals_tasks" - "reports" - "settings" - `phone`: - "all" - `conversations`: - "access" - "assign" - "configure" - `senders_domains_dedicated_ips`: - "senders_management" - "domains_management" - "dedicated_ips_management" - `push_notifications`: - "view" - "create_edit_delete" - "send" - "settings" - `companies`: - "manage_owned_companies" - "manage_other_companies" - "settings" **Note**: - The privileges array remains the same as in the send invitation; the user simply needs to provide the permissions that need to be updated. - The availability of feature and its permission depends on your current plan. Please select the features and permissions accordingly.
     *
     * @tags User
     * @name EditUserPermission
     * @summary Update permission for a user
     * @request POST:/organization/user/update/permissions
     * @secure
     */
    editUserPermission: (data: Inviteuser, params: RequestParams = {}) =>
      this.request<UpdateUserResponse, ErrorModel>({
        path: `/organization/user/update/permissions`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
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
         * @min 0
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
        /**
         * Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed
         * @default "desc"
         */
        sort?: "asc" | "desc";
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
  inbound = {
    /**
     * @description This endpoint will show the list of all the events for the received emails.
     *
     * @tags Inbound Parsing
     * @name GetInboundEmailEvents
     * @summary Get the list of all the events for the received emails.
     * @request GET:/inbound/events
     * @secure
     */
    getInboundEmailEvents: (
      query?: {
        /** Email address of the sender. */
        sender?: string;
        /**
         * Mandatory if endDate is used. Starting date (YYYY-MM-DD or YYYY-MM-DDTHH:mm:ss.SSSZ) from which you want to fetch the list. Maximum time period that can be selected is one month.
         * @format datetime
         */
        startDate?: string;
        /**
         * Mandatory if startDate is used. Ending date (YYYY-MM-DD or YYYY-MM-DDTHH:mm:ss.SSSZ) till which you want to fetch the list. Maximum time period that can be selected is one month.
         * @format datetime
         */
        endDate?: string;
        /**
         * Number of documents returned per page
         * @format int64
         * @min 0
         * @max 500
         * @default 100
         */
        limit?: number;
        /**
         * Index of the first document on the page
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
      this.request<GetInboundEmailEvents, ErrorModel>({
        path: `/inbound/events`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description This endpoint will show the list of all events history for one particular received email.
     *
     * @tags Inbound Parsing
     * @name GetInboundEmailEventsByUuid
     * @summary Fetch all events history for one particular received email.
     * @request GET:/inbound/events/{uuid}
     * @secure
     */
    getInboundEmailEventsByUuid: (uuid: string, params: RequestParams = {}) =>
      this.request<GetInboundEmailEventsByUuid, ErrorModel>({
        path: `/inbound/events/${uuid}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description This endpoint will retrieve inbound attachment with download token.
     *
     * @tags Inbound Parsing
     * @name GetInboundEmailAttachment
     * @summary Retrieve inbound attachment with download token.
     * @request GET:/inbound/attachments/{downloadToken}
     * @secure
     */
    getInboundEmailAttachment: (downloadToken: string, params: RequestParams = {}) =>
      this.request<File, ErrorModel>({
        path: `/inbound/attachments/${downloadToken}`,
        method: "GET",
        secure: true,
        ...params,
      }),
  };
  corporate = {
    /**
     * @description This endpoint will provide the list all the sub-accounts of the master account.
     *
     * @tags Master account
     * @name SubAccountList
     * @summary Get the list of all the sub-accounts of the master account.
     * @request GET:/corporate/subAccount
     * @secure
     */
    subAccountList: (
      query: {
        /** Index of the first sub-account in the page */
        offset: number;
        /** Number of sub-accounts to be displayed on each page */
        limit: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<SubAccountsResponse, ErrorModel>({
        path: `/corporate/subAccount`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description This endpoint will create a new sub-account under a master account
     *
     * @tags Master account
     * @name SubAccountCreate
     * @summary Create a new sub-account under a master account.
     * @request POST:/corporate/subAccount
     * @secure
     */
    subAccountCreate: (data: CreateSubAccount, params: RequestParams = {}) =>
      this.request<CreateSubAccountResponse, ErrorModel>({
        path: `/corporate/subAccount`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description This endpoint will provide the details for the specified sub-account company
     *
     * @tags Master account
     * @name SubAccountDetail
     * @summary Get sub-account details
     * @request GET:/corporate/subAccount/{id}
     * @secure
     */
    subAccountDetail: (id: number, params: RequestParams = {}) =>
      this.request<SubAccountDetailsResponse, ErrorModel>({
        path: `/corporate/subAccount/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Master account
     * @name SubAccountDelete
     * @summary Delete a sub-account
     * @request DELETE:/corporate/subAccount/{id}
     * @secure
     */
    subAccountDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, ErrorModel>({
        path: `/corporate/subAccount/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description This endpoint will update the sub-account plan. On the Corporate solution new version v2, you can set an unlimited number of credits in your sub-organization. Please pass the value “-1" to set the consumable in unlimited mode.
     *
     * @tags Master account
     * @name SubAccountPlanUpdate
     * @summary Update sub-account plan
     * @request PUT:/corporate/subAccount/{id}/plan
     * @secure
     */
    subAccountPlanUpdate: (id: number, data: SubAccountUpdatePlanRequest, params: RequestParams = {}) =>
      this.request<void, ErrorModel>({
        path: `/corporate/subAccount/${id}/plan`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description This endpoint generates an SSO token to authenticate and access the admin account using the endpoint https://account-app.brevo.com/account/login/corporate/sso/[token], where [token] will be replaced by the actual token.
     *
     * @tags Master account
     * @name SsoTokenCreate
     * @summary Generate SSO token to access admin account
     * @request POST:/corporate/ssoToken
     * @secure
     */
    ssoTokenCreate: (
      data: {
        /**
         * User email of admin account
         * @example "vipin+ent-user@brevo.com"
         */
        email: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetSsoToken, ErrorModel>({
        path: `/corporate/ssoToken`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description This endpoint generates an sso token to authenticate and access a sub-account of the master using the account endpoint https://account-app.brevo.com/account/login/sub-account/sso/[token], where [token] will be replaced by the actual token.
     *
     * @tags Master account
     * @name SubAccountSsoTokenCreate
     * @summary Generate SSO token to access sub-account
     * @request POST:/corporate/subAccount/ssoToken
     * @secure
     */
    subAccountSsoTokenCreate: (
      data: {
        /**
         * Id of the sub-account organization
         * @format int64
         * @example 3232323
         */
        id: number;
        /**
         * User email of sub-account organization
         * @example "vipin+subaccount@brevo.com"
         */
        email?: string;
        /**
         * **Set target after login success**
         * * **automation** - Redirect to Automation after login
         * * **email_campaign** - Redirect to Email Campaign after login
         * * **contacts** - Redirect to Contacts after login
         * * **landing_pages** - Redirect to Landing Pages after login
         * * **email_transactional** - Redirect to Email Transactional after login
         * * **senders** - Redirect to Senders after login
         * * **sms_campaign** - Redirect to Sms Campaign after login
         * * **sms_transactional** - Redirect to Sms Transactional after login
         * @example "contacts"
         */
        target?:
          | "automation"
          | "email_campaign"
          | "contacts"
          | "landing_pages"
          | "email_transactional"
          | "senders"
          | "sms_campaign"
          | "sms_transactional";
        /**
         * Set the full target URL after login success. The user will land directly on this target URL after login
         * @example "https://app.brevo.com/senders/domain/list"
         */
        url?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetSsoToken, ErrorModel>({
        path: `/corporate/subAccount/ssoToken`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description This endpoint will provide the details of the master account.
     *
     * @tags Master account
     * @name MasterAccountList
     * @summary Get the details of requested master account
     * @request GET:/corporate/masterAccount
     * @secure
     */
    masterAccountList: (params: RequestParams = {}) =>
      this.request<MasterDetailsResponse, ErrorModel>({
        path: `/corporate/masterAccount`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description This endpoint will generate an API v3 key for a sub account
     *
     * @tags Master account
     * @name SubAccountKeyCreate
     * @summary Create an API key for a sub-account
     * @request POST:/corporate/subAccount/key
     * @secure
     */
    subAccountKeyCreate: (
      data: {
        /**
         * Id of the sub-account organization
         * @format int64
         * @example 3232323
         */
        id: number;
        /**
         * Name of the API key
         * @example "My Api Key"
         */
        name: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<CreateApiKeyResponse, ErrorModel>({
        path: `/corporate/subAccount/key`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description API endpoints for the Corporate owner to enable/disable applications on the sub-account
     *
     * @tags Master account
     * @name SubAccountApplicationsToggleUpdate
     * @summary Enable/disable sub-account application(s)
     * @request PUT:/corporate/subAccount/{id}/applications/toggle
     * @secure
     */
    subAccountApplicationsToggleUpdate: (id: number, data: SubAccountAppsToggleRequest, params: RequestParams = {}) =>
      this.request<void, ErrorModel>({
        path: `/corporate/subAccount/${id}/applications/toggle`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description This endpoint allows to create a group of sub-accounts
     *
     * @tags Master account
     * @name GroupCreate
     * @summary Create a group of sub-accounts
     * @request POST:/corporate/group
     * @secure
     */
    groupCreate: (
      data: {
        /**
         * The name of the group of sub-accounts
         * @example "My group"
         */
        groupName: string;
        /**
         * Pass the list of sub-account Ids to be included in the group
         * @example [234322,325553,893432]
         */
        subAccountIds?: number[];
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          id?: string;
        },
        ErrorModel
      >({
        path: `/corporate/group`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description This endpoint allows to associate an IP to sub-accounts
     *
     * @tags Master account
     * @name SubAccountIpAssociateCreate
     * @summary Associate an IP to sub-accounts
     * @request POST:/corporate/subAccount/ip/associate
     * @secure
     */
    subAccountIpAssociateCreate: (
      data: {
        /**
         * IP address
         * @example "103.11.32.88"
         */
        ip: string;
        /**
         * Pass the list of sub-account Ids to be associated with the IP address
         * @example [234322,325553,893432]
         */
        ids: number[];
      },
      params: RequestParams = {},
    ) =>
      this.request<BodyVariablesItems, ErrorModel>({
        path: `/corporate/subAccount/ip/associate`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description This endpoint allows to dissociate an IP from sub-accounts
     *
     * @tags Master account
     * @name SubAccountIpDissociateUpdate
     * @summary Dissociate an IP to sub-accounts
     * @request PUT:/corporate/subAccount/ip/dissociate
     * @secure
     */
    subAccountIpDissociateUpdate: (
      data: {
        /**
         * IP address
         * @example "103.11.32.88"
         */
        ip: string;
        /**
         * Pass the list of sub-account Ids to be dissociated from the IP address
         * @example [234322,325553,893432]
         */
        ids: number[];
      },
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorModel>({
        path: `/corporate/subAccount/ip/dissociate`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description This endpoint allows you to retrieve a specific group’s information such as the list of sub-organizations and the user associated with the group.
     *
     * @tags Master account
     * @name GroupDetail
     * @summary GET a group details
     * @request GET:/corporate/group/{id}
     * @secure
     */
    groupDetail: (id: string, params: RequestParams = {}) =>
      this.request<CorporateGroupDetailsResponse, any>({
        path: `/corporate/group/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description This endpoint allows to update a group of sub-accounts
     *
     * @tags Master account
     * @name GroupUpdate
     * @summary Update a group of sub-accounts
     * @request PUT:/corporate/group/{id}
     * @secure
     */
    groupUpdate: (
      id: string,
      data: {
        /**
         * The name of the group of sub-accounts
         * @example "My group"
         */
        groupName?: string;
        /**
         * Pass the list of sub-account Ids to be included in the group
         * @example [234322,325553,893432]
         */
        subAccountIds?: number[];
      },
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorModel>({
        path: `/corporate/group/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description This endpoint allows you to delete a group of sub-organizations. When a group is deleted, the sub-organizations are no longer part of this group. The users associated with the group are no longer associated with the group once deleted.
     *
     * @tags Master account
     * @name GroupDelete
     * @summary Delete a group
     * @request DELETE:/corporate/group/{id}
     * @secure
     */
    groupDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, ErrorModel>({
        path: `/corporate/group/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description This endpoint allows you to remove a sub-organization from a group.
     *
     * @tags Master account
     * @name GroupUnlinkSubAccountsUpdate
     * @summary Delete sub-account from group
     * @request PUT:/corporate/group/unlink/{groupId}/subAccounts
     * @secure
     */
    groupUnlinkSubAccountsUpdate: (
      groupId: string,
      data: {
        /**
         * List of sub-account ids
         * @example [423432,234323,87678]
         */
        subAccountIds: number[];
      },
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorModel>({
        path: `/corporate/group/unlink/${groupId}/subAccounts`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description `This endpoint allows you to invite a member to manage the Admin account Features and their respective permissions are as below: - `my_plan`: - "all" - `api`: - "none" - `user_management`: - "all" - `app_management` | Not available in ENTv2: - "all" - `sub_organization_groups` - "create" - "edit_delete" - `create_sub_organizations` - "all" - `manage_sub_organizations` - "all" - `analytics` - "download_data" - "create_alerts" - `security` - "all" **Note**: - If `all_features_access: false` then only privileges are required otherwise if `true` then it's assumed that all permissions will be there for the invited admin user.
     *
     * @tags Master account
     * @name InviteAdminUser
     * @summary Send invitation to an admin user
     * @request POST:/corporate/user/invitation/send
     * @secure
     */
    inviteAdminUser: (data: InviteAdminUser, params: RequestParams = {}) =>
      this.request<
        {
          id?: string;
        },
        ErrorModel
      >({
        path: `/corporate/user/invitation/send`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description This endpoint will allow the user to: - Resend an admin user invitation - Cancel an admin user invitation
     *
     * @tags Master account
     * @name UserInvitationUpdate
     * @summary Resend / cancel admin user invitation
     * @request PUT:/corporate/user/invitation/{action}/{email}
     * @secure
     */
    userInvitationUpdate: (action: "resend" | "cancel", email: string, params: RequestParams = {}) =>
      this.request<
        {
          /** Action success message */
          message?: string;
        },
        ErrorModel
      >({
        path: `/corporate/user/invitation/${action}/${email}`,
        method: "PUT",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description This endpoint allows to revoke/remove an invited member of your Admin account
     *
     * @tags Master account
     * @name UserRevokeDelete
     * @summary Revoke an admin user
     * @request DELETE:/corporate/user/revoke/{email}
     * @secure
     */
    userRevokeDelete: (email: string, params: RequestParams = {}) =>
      this.request<void, ErrorModel>({
        path: `/corporate/user/revoke/${email}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description This endpoint allows you to list all Admin users of your Admin account
     *
     * @tags Master account
     * @name GetCorporateInvitedUsersList
     * @summary Get the list of all admin users
     * @request GET:/corporate/invited/users
     * @secure
     */
    getCorporateInvitedUsersList: (params: RequestParams = {}) =>
      this.request<GetCorporateInvitedUsersList, any>({
        path: `/corporate/invited/users`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Master account
     * @name GetCorporateUserPermission
     * @summary Check admin user permissions
     * @request GET:/corporate/user/{email}/permissions
     * @secure
     */
    getCorporateUserPermission: (email: string, params: RequestParams = {}) =>
      this.request<GetCorporateUserPermission, ErrorModel>({
        path: `/corporate/user/${email}/permissions`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description This endpoint allows you to list all groups created on your Admin account.
     *
     * @tags Master account
     * @name GetSubAccountGroups
     * @summary Get the list of groups
     * @request GET:/corporate/groups
     * @secure
     */
    getSubAccountGroups: (params: RequestParams = {}) =>
      this.request<
        {
          /** Unique id of the group */
          id?: string;
          /** The name of the group of sub-accounts */
          groupName?: string;
        }[],
        any
      >({
        path: `/corporate/groups`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  companies = {
    /**
     * No description
     *
     * @tags Companies
     * @name CompaniesList
     * @summary Get all Companies
     * @request GET:/companies
     * @secure
     */
    companiesList: (
      query?: {
        /** Filter by attrbutes. If you have filter for owner on your side please send it as {"attributes.owner":"6299dcf3874a14eacbc65c46"} */
        filters?: string;
        /**
         * Filter by linked contacts ids
         * @format int64
         */
        linkedContactsIds?: number;
        /**
         * Filter by linked Deals ids
         * @format objectID
         */
        linkedDealsIds?: string;
        /**
         * Index of the first document of the page
         * @format int64
         */
        page?: number;
        /**
         * Number of documents per page
         * @format int64
         */
        limit?: number;
        /** Sort the results in the ascending/descending order. Default order is **descending** by creation if `sort` is not passed */
        sort?: "asc" | "desc";
        /** The field used to sort field names. */
        sortBy?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<CompaniesList, ErrorModel>({
        path: `/companies`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Companies
     * @name CompaniesCreate
     * @summary Create a company
     * @request POST:/companies
     * @secure
     */
    companiesCreate: (
      data: {
        /**
         * Name of company
         * @example "company"
         */
        name: string;
        /**
         * Attributes for company creation
         * @example {"domain":"https://example.com","industry":"Fabric","owner":"60e68d60582a3b006f524197"}
         */
        attributes?: object;
        /**
         * Country code if phone_number is passed in attributes.
         * @format int64
         * @example 91
         */
        countryCode?: number;
        /**
         * Contact ids to be linked with company
         * @example [1,2,3]
         */
        linkedContactsIds?: number[];
        /**
         * Deal ids to be linked with company
         * @example ["61a5ce58c5d4795761045990","61a5ce58c5d4795761045991","61a5ce58c5d4795761045992"]
         */
        linkedDealsIds?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * Unique company id
           * @example "61a5cd07ca1347c82306ad06"
           */
          id: string;
        },
        ErrorModel
      >({
        path: `/companies`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Companies
     * @name CompaniesDetail
     * @summary Get a company
     * @request GET:/companies/{id}
     * @secure
     */
    companiesDetail: (id: string, params: RequestParams = {}) =>
      this.request<Company, ErrorModel>({
        path: `/companies/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Companies
     * @name CompaniesDelete
     * @summary Delete a company
     * @request DELETE:/companies/{id}
     * @secure
     */
    companiesDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, ErrorModel>({
        path: `/companies/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Companies
     * @name CompaniesPartialUpdate
     * @summary Update a company
     * @request PATCH:/companies/{id}
     * @secure
     */
    companiesPartialUpdate: (
      id: string,
      data: {
        /**
         * Name of company
         * @example "company"
         */
        name?: string;
        /**
         * Attributes for company update
         * @example {"category":"label_2","domain":"xyz","date":"2022-05-04T00:00:00+05:30","industry":"flipkart","number_of_contacts":1,"number_of_employees":100,"owner":"5b1a17d914b73d35a76ca0c7","phone_number":"81718441912","revenue":10000.34222}
         */
        attributes?: object;
        /**
         * Country code if phone_number is passed in attributes.
         * @format int64
         * @example 91
         */
        countryCode?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<Company, ErrorModel>({
        path: `/companies/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Companies
     * @name AttributesList
     * @summary Get company attributes
     * @request GET:/companies/attributes
     * @secure
     */
    attributesList: (params: RequestParams = {}) =>
      this.request<CompanyAttributes, any>({
        path: `/companies/attributes`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Companies
     * @name LinkUnlinkPartialUpdate
     * @summary Link and Unlink company with contact and deal
     * @request PATCH:/companies/link-unlink/{id}
     * @secure
     */
    linkUnlinkPartialUpdate: (
      id: string,
      data: {
        /**
         * Contact ids for contacts to be linked with company
         * @example [1,2,3]
         */
        linkContactIds?: number[];
        /**
         * Contact ids for contacts to be unlinked from company
         * @example [4,5,6]
         */
        unlinkContactIds?: number[];
        /**
         * Deal ids for deals to be linked with company
         * @example ["61a5ce58c5d4795761045990","61a5ce58c5d4795761045991","61a5ce58c5d4795761045992"]
         */
        linkDealsIds?: string[];
        /**
         * Deal ids for deals to be unlinked from company
         * @example ["61a5ce58c5d4795761045994","61a5ce58c5d479576104595","61a5ce58c5d4795761045996"]
         */
        unlinkDealsIds?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorModel>({
        path: `/companies/link-unlink/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Import companies from a CSV file with mapping options.
     *
     * @tags Companies
     * @name ImportCreate
     * @summary Import companies(creation and updation)
     * @request POST:/companies/import
     * @secure
     */
    importCreate: (
      data: {
        /**
         * The CSV file to upload.The file should have the first row as the mapping attribute. Some default attribute names are
         * (a) company_id [brevo mongoID to update deals]
         * (b) associated_contact
         * (c) associated_deal
         * (f) any other attribute with internal name
         * @format binary
         * @example false
         */
        file?: File;
        /**
         * The mapping options in JSON format. Here is an example of the JSON structure:
         * ```json
         * {
         *   "link_entities": true, // Determines whether to link related entities during the import process
         *   "unlink_entities": false, // Determines whether to unlink related entities during the import process
         *   "update_existing_records": true, // Determines whether to update based on company ID or treat every row as create
         *   "unset_empty_attributes": false // Determines whether to unset a specific attribute during update if the values input is blank
         * }
         * ```
         */
        mapping?: object;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * The ID of the import process
           * @example 50
           */
          processId?: number;
        },
        {
          /** @example "Bad request : With reason" */
          message?: string;
        }
      >({
        path: `/companies/import`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),
  };
  crm = {
    /**
     * @description This endpoint is deprecated. Prefer /crm/pipeline/details/{pipelineID} instead.
     *
     * @tags Deals
     * @name PipelineDetailsList
     * @summary Get pipeline stages
     * @request GET:/crm/pipeline/details
     * @deprecated
     * @secure
     */
    pipelineDetailsList: (params: RequestParams = {}) =>
      this.request<Pipeline, any>({
        path: `/crm/pipeline/details`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Deals
     * @name PipelineDetailsDetail
     * @summary Get a pipeline
     * @request GET:/crm/pipeline/details/{pipelineID}
     * @secure
     */
    pipelineDetailsDetail: (pipelineId: string, params: RequestParams = {}) =>
      this.request<Pipelines, ErrorModel>({
        path: `/crm/pipeline/details/${pipelineId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Deals
     * @name PipelineDetailsAllList
     * @summary Get all pipelines
     * @request GET:/crm/pipeline/details/all
     * @secure
     */
    pipelineDetailsAllList: (params: RequestParams = {}) =>
      this.request<Pipelines, ErrorModel>({
        path: `/crm/pipeline/details/all`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Deals
     * @name AttributesDealsList
     * @summary Get deal attributes
     * @request GET:/crm/attributes/deals
     * @secure
     */
    attributesDealsList: (params: RequestParams = {}) =>
      this.request<DealAttributes, any>({
        path: `/crm/attributes/deals`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Deals
     * @name DealsList
     * @summary Get all deals
     * @request GET:/crm/deals
     * @secure
     */
    dealsList: (
      query?: {
        /** Filter by attributes. If you have a filter for the owner on your end, please send it as filters[attributes.deal_owner] and utilize the account email for the filtering. */
        filtersAttributesDealName?: string;
        /** Filter by linked companies ids */
        "filters[linkedCompaniesIds]"?: string;
        /** Filter by linked companies ids */
        "filters[linkedContactsIds]"?: string;
        /**
         * Index of the first document of the page
         * @format int64
         */
        offset?: number;
        /**
         * Number of documents per page
         * @format int64
         */
        limit?: number;
        /** Sort the results in the ascending/descending order. Default order is **descending** by creation if `sort` is not passed */
        sort?: "asc" | "desc";
      },
      params: RequestParams = {},
    ) =>
      this.request<DealsList, ErrorModel>({
        path: `/crm/deals`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Deals
     * @name DealsCreate
     * @summary Create a deal
     * @request POST:/crm/deals
     * @secure
     */
    dealsCreate: (
      data: {
        /**
         * Name of deal
         * @example "Deal: Connect with company"
         */
        name: string;
        /**
         * Attributes for deal creation
         *
         * To assign owner of a Deal you can send attributes.deal_owner and utilize the account email or ID.
         *
         * If you want to create a deal on a specific pipeline and stage you can use the following attributes `pipeline` and `deal_stage`.
         *
         * Pipeline and deal_stage are ids you can fetch using this endpoint `/crm/pipeline/details/{pipelineID}`
         * @example {"deal_owner":"6093d2425a9b436e9519d034","amount":12}
         */
        attributes?: object;
        /**
         * Contact ids to be linked with deal
         * @example [1,2,3]
         */
        linkedContactsIds?: number[];
        /**
         * Company ids to be linked with deal
         * @example ["61a5ce58c5d4795761045990","61a5ce58c5d4795761045991","61a5ce58c5d4795761045992"]
         */
        linkedCompaniesIds?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * Unique deal id
           * @example "61a5cd07ca1347c82306ad06"
           */
          id: string;
        },
        void
      >({
        path: `/crm/deals`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Deals
     * @name DealsDetail
     * @summary Get a deal
     * @request GET:/crm/deals/{id}
     * @secure
     */
    dealsDetail: (id: string, params: RequestParams = {}) =>
      this.request<Deal, ErrorModel>({
        path: `/crm/deals/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Deals
     * @name DealsDelete
     * @summary Delete a deal
     * @request DELETE:/crm/deals/{id}
     * @secure
     */
    dealsDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, ErrorModel>({
        path: `/crm/deals/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Deals
     * @name DealsPartialUpdate
     * @summary Update a deal
     * @request PATCH:/crm/deals/{id}
     * @secure
     */
    dealsPartialUpdate: (
      id: string,
      data: {
        /**
         * Name of deal
         * @example "Deal: Connect with client"
         */
        name?: string;
        /**
         * Attributes for deal update
         *
         * To assign owner of a Deal you can send attributes.deal_owner and utilize the account email or ID.
         *
         * If you wish to update the pipeline of a deal you need to provide the `pipeline` and the `deal_stage`
         *
         * Pipeline and deal_stage are ids you can fetch using this endpoint `/crm/pipeline/details/{pipelineID}`
         * @example {"deal_owner":"6093d2425a9b436e9519d034","amount":12}
         */
        attributes?: object;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorModel>({
        path: `/crm/deals/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Deals
     * @name DealsLinkUnlinkPartialUpdate
     * @summary Link and Unlink a deal with contacts and companies
     * @request PATCH:/crm/deals/link-unlink/{id}
     * @secure
     */
    dealsLinkUnlinkPartialUpdate: (
      id: string,
      data: {
        /**
         * Contact ids for contacts to be linked with deal
         * @example [1,2,3]
         */
        linkContactIds?: number[];
        /**
         * Contact ids for contacts to be unlinked from deal
         * @example [4,5,6]
         */
        unlinkContactIds?: number[];
        /**
         * Company ids to be linked with deal
         * @example ["61a5ce58c5d4795761045990","61a5ce58c5d4795761045991","61a5ce58c5d4795761045992"]
         */
        linkCompanyIds?: string[];
        /**
         * Company ids to be unlinked from deal
         * @example ["61a5ce58c5d4795761045994","61a5ce58c5d479576104595","61a5ce58c5d4795761045996"]
         */
        unlinkCompanyIds?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorModel>({
        path: `/crm/deals/link-unlink/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Import deals from a CSV file with mapping options.
     *
     * @tags Deals
     * @name DealsImportCreate
     * @summary Import deals(creation and updation)
     * @request POST:/crm/deals/import
     * @secure
     */
    dealsImportCreate: (
      data: {
        /**
         * The CSV file to upload.The file should have the first row as the mapping attribute. Some default attribute names are
         * (a) deal_id [brevo mongoID to update deals]
         * (b) associated_contact
         * (c) associated_company
         * (f) any other attribute with internal name
         * @format binary
         * @example false
         */
        file?: File;
        /**
         * The mapping options in JSON format. Here is an example of the JSON structure:
         *   ```json
         * {
         *   "link_entities": true, // Determines whether to link related entities during the import process
         *   "unlink_entities": false, // Determines whether to unlink related entities during the import process
         *   "update_existing_records": true, // Determines whether to update based on company ID or treat every row as create
         *   "unset_empty_attributes": false // Determines whether to unset a specific attribute during update if the values input is blank
         * }
         *  ```
         */
        mapping?: object;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * The ID of the import process
           * @example 50
           */
          processId?: number;
        },
        {
          /** @example "Bad request : With reason" */
          message?: string;
        }
      >({
        path: `/crm/deals/import`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tasks
     * @name TasktypesList
     * @summary Get all task types
     * @request GET:/crm/tasktypes
     * @secure
     */
    tasktypesList: (params: RequestParams = {}) =>
      this.request<TaskTypes, any>({
        path: `/crm/tasktypes`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tasks
     * @name TasksList
     * @summary Get all tasks
     * @request GET:/crm/tasks
     * @secure
     */
    tasksList: (
      query?: {
        /** Filter by task type (ID) */
        "filter[type]"?: string;
        /** Filter by task status */
        "filter[status]"?: "done" | "undone";
        /** Filter by date */
        "filter[date]"?: "overdue" | "today" | "tomorrow" | "week" | "range";
        /** Filter by the "assignTo" ID. You can utilize account emails for the "assignTo" attribute. */
        "filter[assignTo]"?: string;
        /** Filter by contact ids */
        "filter[contacts]"?: string;
        /** Filter by deals ids */
        "filter[deals]"?: string;
        /** Filter by companies ids */
        "filter[companies]"?: string;
        /** dateFrom to date range filter type (timestamp in milliseconds) */
        dateFrom?: number;
        /** dateTo to date range filter type (timestamp in milliseconds) */
        dateTo?: number;
        /**
         * Index of the first document of the page
         * @format int64
         */
        offset?: number;
        /**
         * Number of documents per page
         * @format int64
         * @default 50
         */
        limit?: number;
        /** Sort the results in the ascending/descending order. Default order is **descending** by creation if `sort` is not passed */
        sort?: "asc" | "desc";
        /**
         * The field used to sort field names.
         * @example "name"
         */
        sortBy?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<TaskList, ErrorModel>({
        path: `/crm/tasks`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tasks
     * @name TasksCreate
     * @summary Create a task
     * @request POST:/crm/tasks
     * @secure
     */
    tasksCreate: (
      data: {
        /**
         * Name of task
         * @example "Task: Connect with client"
         */
        name: string;
        /**
         * Duration of task in milliseconds [1 minute = 60000 ms]
         * @format int64
         * @min 0
         * @example 600000
         */
        duration?: number;
        /**
         * Id for type of task e.g Call / Email / Meeting etc.
         * @example "61a5cd07ca1347c82306ad09"
         */
        taskTypeId: string;
        /**
         * Task due date and time
         * @format date-time
         * @example "2021-11-01T17:44:54.668Z"
         */
        date: string;
        /**
         * Notes added to a task
         * @example "In communication with client for resolution of queries."
         */
        notes?: string;
        /**
         * Task marked as done
         * @example false
         */
        done?: boolean;
        /**
         * To assign a task to a user you can use either the account email or ID.
         * @example "5faab4b7f195bb3c4c31e62a"
         */
        assignToId?: string;
        /**
         * Contact ids for contacts linked to this task
         * @example [1,2,3]
         */
        contactsIds?: number[];
        /**
         * Deal ids for deals a task is linked to
         * @example ["61a5ce58c5d4795761045990","61a5ce58c5d4795761045991","61a5ce58c5d4795761045992"]
         */
        dealsIds?: string[];
        /**
         * Companies ids for companies a task is linked to
         * @example ["61a5ce58c5d4795761045990","61a5ce58c5d4795761045991","61a5ce58c5d4795761045992"]
         */
        companiesIds?: string[];
        /** Task reminder date/time for a task */
        reminder?: TaskReminder;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * Unique task id
           * @example "61a5cd07ca1347c82306ad06"
           */
          id: string;
        },
        void
      >({
        path: `/crm/tasks`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tasks
     * @name TasksDetail
     * @summary Get a task
     * @request GET:/crm/tasks/{id}
     * @secure
     */
    tasksDetail: (id: string, params: RequestParams = {}) =>
      this.request<Task, ErrorModel>({
        path: `/crm/tasks/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tasks
     * @name TasksDelete
     * @summary Delete a task
     * @request DELETE:/crm/tasks/{id}
     * @secure
     */
    tasksDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, ErrorModel>({
        path: `/crm/tasks/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tasks
     * @name TasksPartialUpdate
     * @summary Update a task
     * @request PATCH:/crm/tasks/{id}
     * @secure
     */
    tasksPartialUpdate: (
      id: string,
      data: {
        /**
         * Name of task
         * @example "Task: Connect with client"
         */
        name?: string;
        /**
         * Duration of task in milliseconds [1 minute = 60000 ms]
         * @format int64
         * @example 600000
         */
        duration?: number;
        /**
         * Id for type of task e.g Call / Email / Meeting etc.
         * @example "61a5cd07ca1347c82306ad09"
         */
        taskTypeId?: string;
        /**
         * Task date/time
         * @format date-time
         * @example "2021-11-01T17:44:54.668Z"
         */
        date?: string;
        /**
         * Notes added to a task
         * @example "In communication with client for resolution of queries."
         */
        notes?: string;
        /**
         * Task marked as done
         * @example false
         */
        done?: boolean;
        /**
         * To assign a task to a user you can use either the account email or ID.
         * @example "5faab4b7f195bb3c4c31e62a"
         */
        assignToId?: string;
        /**
         * Contact ids for contacts linked to this task
         * @example [1,2,3]
         */
        contactsIds?: number[];
        /**
         * Deal ids for deals a task is linked to
         * @example ["61a5ce58c5d4795761045990","61a5ce58c5d4795761045991","61a5ce58c5d4795761045992"]
         */
        dealsIds?: string[];
        /**
         * Companies ids for companies a task is linked to
         * @example ["61a5ce58c5d4795761045990","61a5ce58c5d4795761045991","61a5ce58c5d4795761045992"]
         */
        companiesIds?: string[];
        /** Task reminder date/time for a task */
        reminder?: TaskReminder;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorModel>({
        path: `/crm/tasks/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Notes
     * @name NotesList
     * @summary Get all notes
     * @request GET:/crm/notes
     * @secure
     */
    notesList: (
      query?: {
        /** Filter by note entity type */
        entity?: "companies" | "deals" | "contacts";
        /** Filter by note entity IDs */
        entityIds?: string;
        /** dateFrom to date range filter type (timestamp in milliseconds) */
        dateFrom?: number;
        /** dateTo to date range filter type (timestamp in milliseconds) */
        dateTo?: number;
        /**
         * Index of the first document of the page
         * @format int64
         */
        offset?: number;
        /**
         * Number of documents per page
         * @format int64
         * @default 50
         */
        limit?: number;
        /** Sort the results in the ascending/descending order. Default order is **descending** by creation if `sort` is not passed */
        sort?: "asc" | "desc";
      },
      params: RequestParams = {},
    ) =>
      this.request<NoteList, ErrorModel>({
        path: `/crm/notes`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Notes
     * @name NotesCreate
     * @summary Create a note
     * @request POST:/crm/notes
     * @secure
     */
    notesCreate: (data: NoteData, params: RequestParams = {}) =>
      this.request<NoteId, ErrorModel>({
        path: `/crm/notes`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Notes
     * @name NotesDetail
     * @summary Get a note
     * @request GET:/crm/notes/{id}
     * @secure
     */
    notesDetail: (id: string, params: RequestParams = {}) =>
      this.request<Note, ErrorModel>({
        path: `/crm/notes/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Notes
     * @name NotesPartialUpdate
     * @summary Update a note
     * @request PATCH:/crm/notes/{id}
     * @secure
     */
    notesPartialUpdate: (id: string, data: NoteData, params: RequestParams = {}) =>
      this.request<void, ErrorModel>({
        path: `/crm/notes/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Notes
     * @name NotesDelete
     * @summary Delete a note
     * @request DELETE:/crm/notes/{id}
     * @secure
     */
    notesDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, ErrorModel>({
        path: `/crm/notes/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Files
     * @name FilesList
     * @summary Get all files
     * @request GET:/crm/files
     * @secure
     */
    filesList: (
      query?: {
        /** Filter by file entity type */
        entity?: "companies" | "deals" | "contacts";
        /** Filter by file entity IDs */
        entityIds?: string;
        /** dateFrom to date range filter type (timestamp in milliseconds) */
        dateFrom?: number;
        /** dateTo to date range filter type (timestamp in milliseconds) */
        dateTo?: number;
        /**
         * Index of the first document of the page
         * @format int64
         */
        offset?: number;
        /**
         * Number of documents per page
         * @format int64
         * @default 50
         */
        limit?: number;
        /** Sort the results in the ascending/descending order. Default order is **descending** by creation if `sort` is not passed */
        sort?: "asc" | "desc";
      },
      params: RequestParams = {},
    ) =>
      this.request<FileList, ErrorModel>({
        path: `/crm/files`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Files
     * @name FilesCreate
     * @summary Upload a file
     * @request POST:/crm/files
     * @secure
     */
    filesCreate: (
      data: {
        /**
         * File data to create a file.
         * @format binary
         */
        file: File;
        dealId?: string;
        /** @format int64 */
        contactId?: number;
        companyId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<FileData, ErrorModel>({
        path: `/crm/files`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Files
     * @name FilesDetail
     * @summary Download a file
     * @request GET:/crm/files/{id}
     * @secure
     */
    filesDetail: (id: string, params: RequestParams = {}) =>
      this.request<FileDownloadableLink, ErrorModel>({
        path: `/crm/files/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Files
     * @name FilesDelete
     * @summary Delete a file
     * @request DELETE:/crm/files/{id}
     * @secure
     */
    filesDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, ErrorModel>({
        path: `/crm/files/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Files
     * @name FilesDataDetail
     * @summary Get file details
     * @request GET:/crm/files/{id}/data
     * @secure
     */
    filesDataDetail: (id: string, params: RequestParams = {}) =>
      this.request<FileData, ErrorModel>({
        path: `/crm/files/${id}/data`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  conversations = {
    /**
     * No description
     *
     * @tags Conversations
     * @name MessagesCreate
     * @summary Send a message as an agent
     * @request POST:/conversations/messages
     * @secure
     */
    messagesCreate: (
      data: {
        /** visitor’s ID received <a href="https://developers.brevo.com/docs/conversations-webhooks">from a webhook</a> or generated by you to <a href="https://developers.brevo.com/docs/customize-the-widget#identifying-existing-users">bind existing user account to Conversations</a> */
        visitorId: any;
        /** message text */
        text: any;
        /** agent ID. It can be found on agent’s page or received <a href="https://developers.brevo.com/docs/conversations-webhooks">from a webhook</a>. Alternatively, you can use `agentEmail` + `agentName` + `receivedFrom` instead (all 3 fields required). */
        agentId?: any;
        /** mark your messages to distinguish messages created by you from the others. */
        receivedFrom?: any;
        /** agent email. When sending messages from a standalone system, it’s hard to maintain a 1-to-1 relationship between the users of both systems. In this case, an agent can be specified by their email address. */
        agentEmail?: any;
        /** agent name */
        agentName?: any;
      },
      params: RequestParams = {},
    ) =>
      this.request<ConversationsMessage, ErrorModel>({
        path: `/conversations/messages`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Conversations
     * @name MessagesDetail
     * @summary Get a message
     * @request GET:/conversations/messages/{id}
     * @secure
     */
    messagesDetail: (id: string, params: RequestParams = {}) =>
      this.request<ConversationsMessage, ErrorModel>({
        path: `/conversations/messages/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Only agents’ messages can be edited.
     *
     * @tags Conversations
     * @name MessagesUpdate
     * @summary Update a message sent by an agent
     * @request PUT:/conversations/messages/{id}
     * @secure
     */
    messagesUpdate: (
      id: string,
      data: {
        /** edited message text */
        text: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ConversationsMessage, ErrorModel>({
        path: `/conversations/messages/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Only agents’ messages can be deleted.
     *
     * @tags Conversations
     * @name MessagesDelete
     * @summary Delete a message sent by an agent
     * @request DELETE:/conversations/messages/{id}
     * @secure
     */
    messagesDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, ErrorModel>({
        path: `/conversations/messages/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Example of automated messages: order status, announce new features in your web app, etc.
     *
     * @tags Conversations
     * @name PushedMessagesCreate
     * @summary Send an automated message to a visitor
     * @request POST:/conversations/pushedMessages
     * @secure
     */
    pushedMessagesCreate: (
      data: {
        /** visitor’s ID received <a href="https://developers.brevo.com/docs/conversations-webhooks">from a webhook</a> or generated by you to <a href="https://developers.brevo.com/docs/customize-the-widget#identifying-existing-users">bind existing user account to Conversations</a> */
        visitorId: any;
        /** message text */
        text: any;
        /** agent ID. It can be found on agent’s page or received <a href="https://developers.brevo.com/docs/conversations-webhooks">from a webhook</a>. */
        agentId?: any;
        /** group ID. It can be found on group’s page. */
        groupId?: any;
      },
      params: RequestParams = {},
    ) =>
      this.request<ConversationsMessage, ErrorModel>({
        path: `/conversations/pushedMessages`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Conversations
     * @name PushedMessagesDetail
     * @summary Get an automated message
     * @request GET:/conversations/pushedMessages/{id}
     * @secure
     */
    pushedMessagesDetail: (id: string, params: RequestParams = {}) =>
      this.request<ConversationsMessage, ErrorModel>({
        path: `/conversations/pushedMessages/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Conversations
     * @name PushedMessagesUpdate
     * @summary Update an automated message
     * @request PUT:/conversations/pushedMessages/{id}
     * @secure
     */
    pushedMessagesUpdate: (
      id: string,
      data: {
        /** edited message text */
        text: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ConversationsMessage, ErrorModel>({
        path: `/conversations/pushedMessages/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Conversations
     * @name PushedMessagesDelete
     * @summary Delete an automated message
     * @request DELETE:/conversations/pushedMessages/{id}
     * @secure
     */
    pushedMessagesDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, ErrorModel>({
        path: `/conversations/pushedMessages/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description We recommend pinging this endpoint every minute for as long as the agent has to be considered online.
     *
     * @tags Conversations
     * @name AgentOnlinePingCreate
     * @summary Sets agent’s status to online for 2-3 minutes
     * @request POST:/conversations/agentOnlinePing
     * @secure
     */
    agentOnlinePingCreate: (
      data: {
        /** agent ID. It can be found on agent’s page or received <a href="https://developers.brevo.com/docs/conversations-webhooks">from a webhook</a>. Alternatively, you can use `agentEmail` + `agentName` + `receivedFrom` instead (all 3 fields required). */
        agentId?: any;
        /** mark your messages to distinguish messages created by you from the others. */
        receivedFrom?: any;
        /** agent email. When sending online pings from a standalone system, it’s hard to maintain a 1-to-1 relationship between the users of both systems. In this case, an agent can be specified by their email address. If there’s no agent with the specified email address in your Brevo organization, a dummy agent will be created automatically. */
        agentEmail?: any;
        /** agent name */
        agentName?: any;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorModel>({
        path: `/conversations/agentOnlinePing`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  ecommerce = {
    /**
     * @description Getting access to Brevo eCommerce.
     *
     * @tags Ecommerce
     * @name ActivateCreate
     * @summary Activate the eCommerce app
     * @request POST:/ecommerce/activate
     * @secure
     */
    activateCreate: (params: RequestParams = {}) =>
      this.request<void, ErrorModel>({
        path: `/ecommerce/activate`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Ecommerce
     * @name SetConfigDisplayCurrency
     * @summary Set the ISO 4217 compliant display currency code for your Brevo account
     * @request POST:/ecommerce/config/displayCurrency
     * @secure
     */
    setConfigDisplayCurrency: (
      data: {
        /**
         * ISO 4217 compliant display currency code
         * @example "EUR"
         */
        code: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * ISO 4217 compliant display currency code
           * @example "EUR"
           */
          code: string;
        },
        ErrorModel
      >({
        path: `/ecommerce/config/displayCurrency`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Ecommerce
     * @name ConfigDisplayCurrencyList
     * @summary Get the ISO 4217 compliant display currency code for your Brevo account
     * @request GET:/ecommerce/config/displayCurrency
     * @secure
     */
    configDisplayCurrencyList: (params: RequestParams = {}) =>
      this.request<
        {
          /**
           * ISO 4217 compliant display currency code
           * @example "EUR"
           */
          code: string;
        },
        ErrorModel
      >({
        path: `/ecommerce/config/displayCurrency`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Ecommerce
     * @name AttributionMetricsList
     * @summary Get attribution metrics for one or more Brevo campaigns
     * @request GET:/ecommerce/attribution/metrics
     * @secure
     */
    attributionMetricsList: (
      query?: {
        /**
         * When getting metrics for a specific period, define the starting datetime in RFC3339 format
         * @format date-time
         * @example "2022-01-02T00:00:00Z"
         */
        periodFrom?: string;
        /**
         * When getting metrics for a specific period, define the end datetime in RFC3339 format
         * @format date-time
         * @example "2022-01-03T00:00:00Z"
         */
        periodTo?: string;
        /** The email campaign id(s) to get metrics for */
        "emailCampaignId[]"?: number[];
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * List of conversion attribution metrics
           * @example [{"id":2,"conversionSource":"email_campaign","ordersCount":300,"revenue":900,"averageBasket":3},{"id":1,"conversionSource":"email_campaign","ordersCount":200,"revenue":800,"averageBasket":4}]
           */
          results: ConversionSourceMetrics[];
          /**
           * Attribution list aggregated totals
           * @example {"ordersCount":500,"revenue":1700,"averageBasket":3.4}
           */
          totals: {
            /** @format integer */
            ordersCount: number;
            /** @format float */
            revenue: number;
            /** @format float */
            averageBasket: number;
          };
        },
        ErrorModel
      >({
        path: `/ecommerce/attribution/metrics`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Ecommerce
     * @name AttributionMetricsDetail
     * @summary Get detailed attribution metrics for a single Brevo campaign
     * @request GET:/ecommerce/attribution/metrics/{conversionSource}/{conversionSourceId}
     * @secure
     */
    attributionMetricsDetail: (
      conversionSource: "email_campaign",
      conversionSourceId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        ConversionSourceMetrics & {
          /** @format integer */
          newCustomersCount: number;
        },
        ErrorModel
      >({
        path: `/ecommerce/attribution/metrics/${conversionSource}/${conversionSourceId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Ecommerce
     * @name AttributionProductsDetail
     * @summary Get attributed product sales for a single Brevo campaign
     * @request GET:/ecommerce/attribution/products/{conversionSource}/{conversionSourceId}
     * @secure
     */
    attributionProductsDetail: (
      conversionSource: "email_campaign",
      conversionSourceId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** List of attributed products */
          products: ConversionSourceProduct[];
        },
        ErrorModel
      >({
        path: `/ecommerce/attribution/products/${conversionSource}/${conversionSourceId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  orders = {
    /**
     * @description Get all the orders
     *
     * @tags Ecommerce
     * @name GetOrders
     * @summary Get order details
     * @request GET:/orders
     * @secure
     */
    getOrders: (
      query?: {
        /**
         * Number of documents per page
         * @format int64
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
         * Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed
         * @default "desc"
         */
        sort?: "asc" | "desc";
        /** Filter (urlencoded) the orders modified after a given UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ). **Prefer to pass your timezone in date-time format for accurate result.** */
        modifiedSince?: string;
        /** Filter (urlencoded) the orders created after a given UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ). **Prefer to pass your timezone in date-time format for accurate result.** */
        createdSince?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorModel>({
        path: `/orders`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Manages the transactional status of the order
     *
     * @tags Ecommerce
     * @name CreateOrder
     * @summary Managing the status of the order
     * @request POST:/orders/status
     * @secure
     */
    createOrder: (data: Order, params: RequestParams = {}) =>
      this.request<void, ErrorModel>({
        path: `/orders/status`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Create multiple orders at one time instead of one order at a time
     *
     * @tags Ecommerce
     * @name CreateBatchOrder
     * @summary Create orders in batch
     * @request POST:/orders/status/batch
     * @secure
     */
    createBatchOrder: (data: OrderBatch, params: RequestParams = {}) =>
      this.request<CreatedBatchId, ErrorModel>({
        path: `/orders/status/batch`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  events = {
    /**
     * @description Create an event to track a contact's interaction.
     *
     * @tags Event
     * @name CreateEvent
     * @summary Create an event
     * @request POST:/events
     * @secure
     */
    createEvent: (data: Event, params: RequestParams = {}) =>
      this.request<void, ErrorModel>({
        path: `/events`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  categories = {
    /**
     * No description
     *
     * @tags Ecommerce
     * @name GetCategories
     * @summary Return all your categories
     * @request GET:/categories
     * @secure
     */
    getCategories: (
      query?: {
        /**
         * Number of documents per page
         * @format int64
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
         * Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed
         * @default "desc"
         */
        sort?: "asc" | "desc";
        /** Filter by category ids */
        ids?: string[];
        /** Filter by category name */
        name?: string;
        /** Filter (urlencoded) the categories modified after a given UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ). **Prefer to pass your timezone in date-time format for accurate result.** */
        modifiedSince?: string;
        /** Filter (urlencoded) the categories created after a given UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ). **Prefer to pass your timezone in date-time format for accurate result.** */
        createdSince?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetCategories, ErrorModel>({
        path: `/categories`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Ecommerce
     * @name CreateUpdateCategory
     * @summary Create/Update a category
     * @request POST:/categories
     * @secure
     */
    createUpdateCategory: (data: CreateUpdateCategory, params: RequestParams = {}) =>
      this.request<CreateCategoryModel, ErrorModel>({
        path: `/categories`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Ecommerce
     * @name GetCategoryInfo
     * @summary Get a category details
     * @request GET:/categories/{id}
     * @secure
     */
    getCategoryInfo: (id: string, params: RequestParams = {}) =>
      this.request<GetCategoryDetails, ErrorModel>({
        path: `/categories/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Ecommerce
     * @name CreateUpdateBatchCategory
     * @summary Create categories in batch
     * @request POST:/categories/batch
     * @secure
     */
    createUpdateBatchCategory: (data: CreateUpdateBatchCategory, params: RequestParams = {}) =>
      this.request<CreateUpdateBatchCategoryModel, ErrorModel>({
        path: `/categories/batch`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  products = {
    /**
     * No description
     *
     * @tags Ecommerce
     * @name GetProducts
     * @summary Return all your products
     * @request GET:/products
     * @secure
     */
    getProducts: (
      query?: {
        /**
         * Number of documents per page
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
        /**
         * Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed
         * @default "desc"
         */
        sort?: "asc" | "desc";
        /** Filter by product ids */
        ids?: string[];
        /** Filter by product name, minimum 3 characters should be present for search */
        name?: string;
        /** Price filter for products less than and equals to particular amount */
        "price[lte]"?: number;
        /** Price filter for products greater than and equals to particular amount */
        "price[gte]"?: number;
        /** Price filter for products less than particular amount */
        "price[lt]"?: number;
        /** Price filter for products greater than particular amount */
        "price[gt]"?: number;
        /** Price filter for products equals to particular amount */
        "price[eq]"?: number;
        /** Price filter for products not equals to particular amount */
        "price[ne]"?: number;
        /** Filter by product categories */
        categories?: string[];
        /** Filter (urlencoded) the orders modified after a given UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ). **Prefer to pass your timezone in date-time format for accurate result.** */
        modifiedSince?: string;
        /** Filter (urlencoded) the orders created after a given UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ). **Prefer to pass your timezone in date-time format for accurate result.** */
        createdSince?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetProducts, ErrorModel>({
        path: `/products`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Ecommerce
     * @name CreateUpdateProduct
     * @summary Create/Update a product
     * @request POST:/products
     * @secure
     */
    createUpdateProduct: (data: CreateUpdateProduct, params: RequestParams = {}) =>
      this.request<CreateProductModel, ErrorModel>({
        path: `/products`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Ecommerce
     * @name GetProductInfo
     * @summary Get a product's details
     * @request GET:/products/{id}
     * @secure
     */
    getProductInfo: (id: string, params: RequestParams = {}) =>
      this.request<GetProductDetails, ErrorModel>({
        path: `/products/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Ecommerce
     * @name CreateUpdateBatchProducts
     * @summary Create products in batch
     * @request POST:/products/batch
     * @secure
     */
    createUpdateBatchProducts: (data: CreateUpdateBatchProducts, params: RequestParams = {}) =>
      this.request<CreateUpdateBatchProductsModel, ErrorModel>({
        path: `/products/batch`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  couponCollections = {
    /**
     * No description
     *
     * @tags Coupons
     * @name GetCouponCollections
     * @summary Get all your coupon collections
     * @request GET:/couponCollections
     * @secure
     */
    getCouponCollections: (
      query?: {
        /**
         * Number of documents returned per page
         * @format int64
         * @min 0
         * @max 100
         * @default 50
         */
        limit?: number;
        /**
         * Index of the first document on the page
         * @format int64
         * @min 0
         * @default 0
         */
        offset?: number;
        /**
         * Sort the results by creation time in ascending/descending order
         * @default "desc"
         */
        sort?: "asc" | "desc";
        /**
         * The field used to sort coupon collections
         * @default "createdAt"
         */
        sortBy?: "createdAt" | "remainingCoupons" | "expirationDate";
      },
      params: RequestParams = {},
    ) =>
      this.request<GetCouponCollection, ErrorModel>({
        path: `/couponCollections`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Coupons
     * @name CreateCouponCollection
     * @summary Create а coupon collection
     * @request POST:/couponCollections
     * @secure
     */
    createCouponCollection: (
      data: {
        /**
         * Name of the coupons collection
         * @example "10%OFF"
         */
        name: string;
        /**
         * Default coupons collection name
         * @example "Winter"
         */
        defaultCoupon: string;
        /**
         * Specify an expiration date for the coupon collection in RFC3339 format. Use null to remove the expiration date.
         * @format date-time
         * @example "2022-01-02T00:00:00Z"
         */
        expirationDate?: string;
        /**
         * Send a notification alert (email) when the remaining days until the expiration date are equal or fall bellow this number. Use null to disable alerts.
         * @example 5
         */
        remainingDaysAlert?: number;
        /**
         * Send a notification alert (email) when the remaining coupons count is equal or fall bellow this number. Use null to disable alerts.
         * @example 5
         */
        remainingCouponsAlert?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * The id of the created collection
           * @format uuidv4
           * @example "23befbae-1505-47a8-bd27-e30ef739f32c"
           */
          id: string;
        },
        ErrorModel
      >({
        path: `/couponCollections`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Coupons
     * @name GetCouponCollection
     * @summary Get a coupon collection by id
     * @request GET:/couponCollections/{id}
     * @secure
     */
    getCouponCollection: (id: string, params: RequestParams = {}) =>
      this.request<GetCouponCollection, ErrorModel>({
        path: `/couponCollections/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Coupons
     * @name UpdateCouponCollection
     * @summary Update a coupon collection by id
     * @request PATCH:/couponCollections/{id}
     * @secure
     */
    updateCouponCollection: (
      id: string,
      data: {
        /**
         * A default coupon to be used in case there are no coupons left
         * @example "10 OFF"
         */
        defaultCoupon?: string;
        /**
         * Specify an expiration date for the coupon collection in RFC3339 format. Use null to remove the expiration date.
         * @format date-time
         * @example "2024-01-01T00:00:00Z"
         */
        expirationDate?: string;
        /**
         * Send a notification alert (email) when the remaining days until the expiration date are equal or fall bellow this number. Use null to disable alerts.
         * @example 5
         */
        remainingDaysAlert?: number;
        /**
         * Send a notification alert (email) when the remaining coupons count is equal or fall bellow this number. Use null to disable alerts.
         * @example 5
         */
        remainingCouponsAlert?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * The id of the collection
           * @format uuidv4
           * @example "23befbae-1505-47a8-bd27-e30ef739f32c"
           */
          id: string;
          /**
           * The name of the collection
           * @format uuidv4
           * @example "SummerPromotions"
           */
          name: string;
          /**
           * The default coupon of the collection
           * @example "10 OFF"
           */
          defaultCoupon: string;
        },
        ErrorModel
      >({
        path: `/couponCollections/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  coupons = {
    /**
     * No description
     *
     * @tags Coupons
     * @name CreateCoupons
     * @summary Create coupons for a coupon collection
     * @request POST:/coupons
     * @secure
     */
    createCoupons: (
      data: {
        /**
         * The id of the coupon collection for which the coupons will be created
         * @format uuidv4
         * @example "23befbae-1505-47a8-bd27-e30ef739f32c"
         */
        collectionId: string;
        /**
         * @maxItems 1000
         * @minItems 1
         * @uniqueItems true
         */
        coupons: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorModel>({
        path: `/coupons`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  whatsapp = {
    /**
     * @description This endpoint is used to send a WhatsApp message. <br/>(**The first message you send using the API must contain a Template ID. You must create a template on WhatsApp on the Brevo platform to fetch the Template ID.**)
     *
     * @tags Transactional WhatsApp
     * @name SendWhatsappMessage
     * @summary Send a WhatsApp message
     * @request POST:/whatsapp/sendMessage
     * @secure
     */
    sendWhatsappMessage: (data: SendWhatsappMessageTemplate | SendWhatsappMessageText, params: RequestParams = {}) =>
      this.request<
        {
          /**
           * messageId of sent message
           * @format uuidv4
           * @example "23befbae-1505-47a8-bd27-e30ef739f32c"
           */
          messageId: string;
        },
        ErrorModel
      >({
        path: `/whatsapp/sendMessage`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description This endpoint will show the unaggregated statistics for WhatsApp activity (30 days by default if `startDate` and `endDate` or `days` is not passed. The date range can not exceed 90 days)
     *
     * @tags Transactional WhatsApp
     * @name GetWhatsappEventReport
     * @summary Get all your WhatsApp activity (unaggregated events)
     * @request GET:/whatsapp/statistics/events
     * @secure
     */
    getWhatsappEventReport: (
      query?: {
        /**
         * Number limitation for the result returned
         * @format int64
         * @min 0
         * @max 5000
         * @default 2500
         */
        limit?: number;
        /**
         * Beginning point in the list to retrieve from
         * @format int64
         * @default 0
         */
        offset?: number;
        /** **Mandatory if endDate is used.** Starting date of the report (YYYY-MM-DD). Must be lower than equal to endDate */
        startDate?: string;
        /** **Mandatory if startDate is used.** Ending date of the report (YYYY-MM-DD). Must be greater than equal to startDate */
        endDate?: string;
        /**
         * Number of days in the past including today (positive integer). _Not compatible with 'startDate' and 'endDate'_
         * @format int64
         */
        days?: number;
        /**
         * Filter results for specific contact (WhatsApp Number with country code. Example, 85264318721)
         * @format mobile
         */
        contactNumber?: string;
        /** Filter the report for a specific event type */
        event?: "sent" | "delivered" | "read" | "error" | "unsubscribe" | "reply" | "soft-bounce";
        /**
         * Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed
         * @default "desc"
         */
        sort?: "asc" | "desc";
      },
      params: RequestParams = {},
    ) =>
      this.request<GetWhatsappEventReport, ErrorModel>({
        path: `/whatsapp/statistics/events`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  feeds = {
    /**
     * @description This endpoint can fetch all created external feeds.
     *
     * @tags External Feeds
     * @name GetAllExternalFeeds
     * @summary Fetch all external feeds
     * @request GET:/feeds
     * @secure
     */
    getAllExternalFeeds: (
      query?: {
        /**
         * Can be used to filter records by search keyword on feed name
         * @example "search"
         */
        search?: string;
        /**
         * Mandatory if `endDate` is used. Starting date (YYYY-MM-DD) from which you want to fetch the list. Can be maximum 30 days older than current date.
         * @format date
         * @example "2022-09-04"
         */
        startDate?: string;
        /**
         * Mandatory if `startDate` is used. Ending date (YYYY-MM-DD) till which you want to fetch the list. Maximum time period that can be selected is one month.
         * @format date
         * @example "2022-10-01"
         */
        endDate?: string;
        /**
         * Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed.
         * @default "desc"
         */
        sort?: "asc" | "desc";
        /** Filter the records by `authType` of the feed. */
        authType?: "basic" | "token" | "noAuth";
        /**
         * Number of documents returned per page.
         * @format int64
         * @min 0
         * @max 500
         * @default 50
         * @example 100
         */
        limit?: number;
        /**
         * Index of the first document on the page.
         * @format int64
         * @default 0
         * @example 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetAllExternalFeeds, ErrorModel>({
        path: `/feeds`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description This endpoint will create an external feed.
     *
     * @tags External Feeds
     * @name CreateExternalFeed
     * @summary Create an external feed
     * @request POST:/feeds
     * @secure
     */
    createExternalFeed: (data: CreateExternalFeed, params: RequestParams = {}) =>
      this.request<
        {
          /**
           * ID of the object created
           * @format uuidv4
           * @example "23befbae-1505-47a8-bd27-e30ef739f32c"
           */
          id: string;
        },
        ErrorModel
      >({
        path: `/feeds`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description This endpoint will update an external feed.
     *
     * @tags External Feeds
     * @name GetExternalFeedByUuid
     * @summary Get an external feed by UUID
     * @request GET:/feeds/{uuid}
     * @secure
     */
    getExternalFeedByUuid: (uuid: string, params: RequestParams = {}) =>
      this.request<GetExternalFeedByUUID, ErrorModel>({
        path: `/feeds/${uuid}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description This endpoint will update an external feed.
     *
     * @tags External Feeds
     * @name UpdateExternalFeed
     * @summary Update an external feed
     * @request PUT:/feeds/{uuid}
     * @secure
     */
    updateExternalFeed: (uuid: string, data: UpdateExternalFeed, params: RequestParams = {}) =>
      this.request<void, ErrorModel>({
        path: `/feeds/${uuid}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description This endpoint will delete an external feed.
     *
     * @tags External Feeds
     * @name DeleteExternalFeed
     * @summary Delete an external feed
     * @request DELETE:/feeds/{uuid}
     * @secure
     */
    deleteExternalFeed: (uuid: string, params: RequestParams = {}) =>
      this.request<void, ErrorModel>({
        path: `/feeds/${uuid}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  payments = {
    /**
     * No description
     *
     * @tags Payments
     * @name CreatePaymentRequest
     * @summary Create a payment request
     * @request POST:/payments/requests
     * @secure
     */
    createPaymentRequest: (data: CreatePaymentRequest, params: RequestParams = {}) =>
      this.request<CreatePaymentResponse, ErrorModel>({
        path: `/payments/requests`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Payments
     * @name GetPaymentRequest
     * @summary Get payment request details
     * @request GET:/payments/requests/{id}
     * @secure
     */
    getPaymentRequest: (id: string, params: RequestParams = {}) =>
      this.request<GetPaymentRequest, ErrorModel>({
        path: `/payments/requests/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Payments
     * @name DeletePaymentRequest
     * @summary Delete a payment request.
     * @request DELETE:/payments/requests/{id}
     * @secure
     */
    deletePaymentRequest: (id: string, params: RequestParams = {}) =>
      this.request<void, ErrorModel>({
        path: `/payments/requests/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
}
