import localVarRequest from 'request';

export * from './abTestCampaignResult';
export * from './abTestCampaignResultClickedLinks';
export * from './abTestCampaignResultStatistics';
export * from './abTestVersionClicksInner';
export * from './abTestVersionStats';
export * from './addChildDomain';
export * from './addContactToList';
export * from './addCredits';
export * from './authenticateDomainModel';
export * from './blockDomain';
export * from './cart';
export * from './companiesIdPatchRequest';
export * from './companiesLinkUnlinkIdPatchRequest';
export * from './companiesList';
export * from './companiesPost200Response';
export * from './companiesPostRequest';
export * from './company';
export * from './companyAttributesInner';
export * from './componentItems';
export * from './configuration';
export * from './conversationsAgentOnlinePingPostRequest';
export * from './conversationsMessage';
export * from './conversationsMessageFile';
export * from './conversationsMessageFileImageInfo';
export * from './conversationsMessagesIdPutRequest';
export * from './conversationsMessagesPostRequest';
export * from './conversationsPushedMessagesIdPutRequest';
export * from './conversationsPushedMessagesPostRequest';
export * from './conversionSourceMetrics';
export * from './conversionSourceProduct';
export * from './corporateGroupDetailsResponse';
export * from './corporateGroupDetailsResponseGroup';
export * from './corporateGroupDetailsResponseSubAccountsInner';
export * from './corporateGroupDetailsResponseUsersInner';
export * from './corporateGroupPost201Response';
export * from './corporateGroupPostRequest';
export * from './corporateGroupUnlinkGroupIdSubAccountsPutRequest';
export * from './corporateSubAccountIpAssociatePostRequest';
export * from './corporateSubAccountIpDissociatePutRequest';
export * from './corporateUserInvitationActionEmailPut200Response';
export * from './createApiKeyRequest';
export * from './createApiKeyResponse';
export * from './createAttribute';
export * from './createAttributeEnumerationInner';
export * from './createCategoryModel';
export * from './createChild';
export * from './createContact';
export * from './createCouponCollection201Response';
export * from './createCouponCollectionRequest';
export * from './createCouponsRequest';
export * from './createDoiContact';
export * from './createDomain';
export * from './createDomainModel';
export * from './createDomainModelDnsRecords';
export * from './createDomainModelDnsRecordsDkimRecord';
export * from './createEmailCampaign';
export * from './createEmailCampaignRecipients';
export * from './createEmailCampaignSender';
export * from './createExternalFeed';
export * from './createExternalFeed201Response';
export * from './createList';
export * from './createModel';
export * from './createPaymentRequest';
export * from './createPaymentResponse';
export * from './createProductModel';
export * from './createReseller';
export * from './createSender';
export * from './createSenderIpsInner';
export * from './createSenderModel';
export * from './createSmsCampaign';
export * from './createSmsCampaignRecipients';
export * from './createSmtpEmail';
export * from './createSmtpTemplate';
export * from './createSmtpTemplateSender';
export * from './createSubAccount';
export * from './createSubAccountResponse';
export * from './createUpdateBatchCategory';
export * from './createUpdateBatchCategoryModel';
export * from './createUpdateBatchProducts';
export * from './createUpdateBatchProductsModel';
export * from './createUpdateCategories';
export * from './createUpdateCategory';
export * from './createUpdateContactModel';
export * from './createUpdateFolder';
export * from './createUpdateProduct';
export * from './createUpdateProducts';
export * from './createWebhook';
export * from './createWhatsAppCampaign';
export * from './createWhatsAppCampaignRecipients';
export * from './createWhatsAppTemplate';
export * from './createdBatchId';
export * from './createdProcessId';
export * from './crmDealsIdPatchRequest';
export * from './crmDealsLinkUnlinkIdPatchRequest';
export * from './crmDealsPost201Response';
export * from './crmDealsPostRequest';
export * from './crmTasksIdPatchRequest';
export * from './crmTasksPost201Response';
export * from './crmTasksPostRequest';
export * from './deal';
export * from './dealAttributesInner';
export * from './dealsList';
export * from './deleteHardbounces';
export * from './ecommerceAttributionMetricsConversionSourceConversionSourceIdGet200Response';
export * from './ecommerceAttributionMetricsGet200Response';
export * from './ecommerceAttributionMetricsGet200ResponseTotals';
export * from './ecommerceAttributionProductsConversionSourceConversionSourceIdGet200Response';
export * from './ecommerceConfigDisplayCurrencyGet200Response';
export * from './emailExportRecipients';
export * from './errorModel';
export * from './event';
export * from './eventIdentifiers';
export * from './exportWebhooksHistory';
export * from './fileData';
export * from './fileDownloadableLink';
export * from './getAccount';
export * from './getAccountActivity';
export * from './getAccountActivityLogsInner';
export * from './getAccountAllOfMarketingAutomation';
export * from './getAccountAllOfPlan';
export * from './getAccountAllOfRelay';
export * from './getAccountAllOfRelayData';
export * from './getAggregatedReport';
export * from './getAllExternalFeeds';
export * from './getAllExternalFeedsFeedsInner';
export * from './getAttributes';
export * from './getAttributesAttributesInner';
export * from './getAttributesAttributesInnerEnumerationInner';
export * from './getBlockedDomains';
export * from './getCampaignOverview';
export * from './getCampaignRecipients';
export * from './getCampaignStats';
export * from './getCategories';
export * from './getCategoryDetails';
export * from './getChildAccountCreationStatus';
export * from './getChildDomain';
export * from './getChildInfo';
export * from './getChildInfoAllOfApiKeys';
export * from './getChildInfoAllOfApiKeysV2';
export * from './getChildInfoAllOfApiKeysV3';
export * from './getChildInfoAllOfCredits';
export * from './getChildInfoAllOfStatistics';
export * from './getChildrenList';
export * from './getChildrenListChildrenInner';
export * from './getClient';
export * from './getContactCampaignStats';
export * from './getContactCampaignStatsClickedInner';
export * from './getContactCampaignStatsClickedInnerLinksInner';
export * from './getContactCampaignStatsMessagesSentInner';
export * from './getContactCampaignStatsOpenedInner';
export * from './getContactCampaignStatsTransacAttributesInner';
export * from './getContactCampaignStatsUnsubscriptions';
export * from './getContactCampaignStatsUnsubscriptionsAdminUnsubscriptionInner';
export * from './getContactCampaignStatsUnsubscriptionsUserUnsubscriptionInner';
export * from './getContactDetails';
export * from './getContacts';
export * from './getCorporateInvitedUsersList';
export * from './getCorporateInvitedUsersListUsersInner';
export * from './getCorporateInvitedUsersListUsersInnerFeatureAccess';
export * from './getCorporateInvitedUsersListUsersInnerGroups';
export * from './getCorporateUserPermission';
export * from './getCorporateUserPermissionFeatureAccess';
export * from './getCorporateUserPermissionGroupsInner';
export * from './getCouponCollection';
export * from './getDeviceBrowserStats';
export * from './getDomainConfigurationModel';
export * from './getDomainsList';
export * from './getDomainsListDomainsInner';
export * from './getEmailCampaign';
export * from './getEmailCampaigns';
export * from './getEmailCampaignsCampaignsInner';
export * from './getEmailEventReport';
export * from './getEmailEventReportEventsInner';
export * from './getExtendedCampaignOverview';
export * from './getExtendedCampaignOverviewAllOfSender';
export * from './getExtendedCampaignStats';
export * from './getExtendedClient';
export * from './getExtendedClientAllOfAddress';
export * from './getExtendedContactDetails';
export * from './getExtendedContactDetailsAllOfStatistics';
export * from './getExtendedContactDetailsAllOfStatisticsClicked';
export * from './getExtendedContactDetailsAllOfStatisticsLinks';
export * from './getExtendedContactDetailsAllOfStatisticsMessagesSent';
export * from './getExtendedContactDetailsAllOfStatisticsOpened';
export * from './getExtendedContactDetailsAllOfStatisticsUnsubscriptions';
export * from './getExtendedContactDetailsAllOfStatisticsUnsubscriptionsAdminUnsubscription';
export * from './getExtendedContactDetailsAllOfStatisticsUnsubscriptionsUserUnsubscription';
export * from './getExtendedList';
export * from './getExtendedListAllOfCampaignStats';
export * from './getExternalFeedByUUID';
export * from './getExternalFeedByUUIDHeadersInner';
export * from './getFolder';
export * from './getFolderLists';
export * from './getFolders';
export * from './getInboundEmailEvents';
export * from './getInboundEmailEventsByUuid';
export * from './getInboundEmailEventsByUuidAttachmentsInner';
export * from './getInboundEmailEventsByUuidLogsInner';
export * from './getInboundEmailEventsEventsInner';
export * from './getInvitedUsersList';
export * from './getInvitedUsersListUsersInner';
export * from './getInvitedUsersListUsersInnerFeatureAccess';
export * from './getIp';
export * from './getIpFromSender';
export * from './getIps';
export * from './getIpsFromSender';
export * from './getList';
export * from './getLists';
export * from './getListsListsInner';
export * from './getOrders';
export * from './getOrdersOrdersInner';
export * from './getPaymentRequest';
export * from './getProcess';
export * from './getProcesses';
export * from './getProductDetails';
export * from './getProducts';
export * from './getReports';
export * from './getReportsReportsInner';
export * from './getScheduledEmailByBatchId';
export * from './getScheduledEmailByBatchIdBatchesInner';
export * from './getScheduledEmailByMessageId';
export * from './getSegments';
export * from './getSegmentsSegments';
export * from './getSendersList';
export * from './getSendersListSendersInner';
export * from './getSendersListSendersInnerIpsInner';
export * from './getSharedTemplateUrl';
export * from './getSmsCampaign';
export * from './getSmsCampaignOverview';
export * from './getSmsCampaignStats';
export * from './getSmsCampaigns';
export * from './getSmsCampaignsCampaignsInner';
export * from './getSmsEventReport';
export * from './getSmsEventReportEventsInner';
export * from './getSmtpTemplateOverview';
export * from './getSmtpTemplateOverviewSender';
export * from './getSmtpTemplates';
export * from './getSsoToken';
export * from './getStatsByDevice';
export * from './getSubAccountGroups200ResponseInner';
export * from './getTransacAggregatedSmsReport';
export * from './getTransacBlockedContacts';
export * from './getTransacBlockedContactsContactsInner';
export * from './getTransacBlockedContactsContactsInnerReason';
export * from './getTransacEmailContent';
export * from './getTransacEmailContentEventsInner';
export * from './getTransacEmailsList';
export * from './getTransacEmailsListTransactionalEmailsInner';
export * from './getTransacSmsReport';
export * from './getTransacSmsReportReportsInner';
export * from './getUserPermission';
export * from './getUserPermissionPrivilegesInner';
export * from './getWATemplates';
export * from './getWATemplatesTemplatesInner';
export * from './getWebhook';
export * from './getWebhookAuth';
export * from './getWebhookHeadersInner';
export * from './getWebhooks';
export * from './getWhatsAppConfig';
export * from './getWhatsappCampaignOverview';
export * from './getWhatsappCampaigns';
export * from './getWhatsappCampaignsCampaignsInner';
export * from './getWhatsappEventReport';
export * from './getWhatsappEventReportEventsInner';
export * from './inviteAdminUser';
export * from './inviteAdminUserPrivilegesInner';
export * from './inviteuser';
export * from './inviteuserPrivilegesInner';
export * from './manageIp';
export * from './masterDetailsResponse';
export * from './masterDetailsResponseBillingInfo';
export * from './masterDetailsResponseBillingInfoAddress';
export * from './masterDetailsResponseBillingInfoName';
export * from './masterDetailsResponsePlanInfo';
export * from './masterDetailsResponsePlanInfoFeaturesInner';
export * from './note';
export * from './noteData';
export * from './noteId';
export * from './notification';
export * from './order';
export * from './orderBatch';
export * from './orderBilling';
export * from './orderProductsInner';
export * from './otp';
export * from './pipeline';
export * from './pipelineStage';
export * from './postContactInfo';
export * from './postContactInfoContacts';
export * from './postSendFailed';
export * from './postSendSmsTestFailed';
export * from './putRevokeUserPermission';
export * from './putresendcancelinvitation';
export * from './remainingCreditModel';
export * from './remainingCreditModelChild';
export * from './remainingCreditModelReseller';
export * from './removeContactFromList';
export * from './removeCredits';
export * from './requestContactExport';
export * from './requestContactExportCustomContactFilter';
export * from './requestContactImport';
export * from './requestContactImportJsonBodyInner';
export * from './requestContactImportNewList';
export * from './requestSmsRecipientExport';
export * from './scheduleSmtpEmail';
export * from './sendReport';
export * from './sendReportEmail';
export * from './sendSms';
export * from './sendSmtpEmail';
export * from './sendSmtpEmailAttachmentInner';
export * from './sendSmtpEmailBccInner';
export * from './sendSmtpEmailCcInner';
export * from './sendSmtpEmailMessageVersionsInner';
export * from './sendSmtpEmailMessageVersionsInnerReplyTo';
export * from './sendSmtpEmailMessageVersionsInnerToInner';
export * from './sendSmtpEmailReplyTo';
export * from './sendSmtpEmailSender';
export * from './sendSmtpEmailToInner';
export * from './sendTestEmail';
export * from './sendTestSms';
export * from './sendTransacSms';
export * from './sendWhatsappMessage';
export * from './sendWhatsappMessage201Response';
export * from './ssoTokenRequest';
export * from './ssoTokenRequestCorporate';
export * from './subAccountAppsToggleRequest';
export * from './subAccountDetailsResponse';
export * from './subAccountDetailsResponseGroupsInner';
export * from './subAccountDetailsResponsePlanInfo';
export * from './subAccountDetailsResponsePlanInfoCredits';
export * from './subAccountDetailsResponsePlanInfoCreditsEmails';
export * from './subAccountDetailsResponsePlanInfoCreditsSms';
export * from './subAccountDetailsResponsePlanInfoCreditsWpSubscribers';
export * from './subAccountDetailsResponsePlanInfoFeatures';
export * from './subAccountDetailsResponsePlanInfoFeaturesInbox';
export * from './subAccountDetailsResponsePlanInfoFeaturesLandingPage';
export * from './subAccountDetailsResponsePlanInfoFeaturesUsers';
export * from './subAccountUpdatePlanRequest';
export * from './subAccountUpdatePlanRequestCredits';
export * from './subAccountUpdatePlanRequestFeatures';
export * from './subAccountsResponse';
export * from './subAccountsResponseSubAccountsInner';
export * from './subAccountsResponseSubAccountsInnerGroupsInner';
export * from './task';
export * from './taskList';
export * from './taskReminder';
export * from './taskTypes';
export * from './updateAttribute';
export * from './updateAttributeEnumerationInner';
export * from './updateBatchContacts';
export * from './updateBatchContactsContactsInner';
export * from './updateBatchContactsModel';
export * from './updateCampaignStatus';
export * from './updateChild';
export * from './updateChildAccountStatus';
export * from './updateChildDomain';
export * from './updateContact';
export * from './updateCouponCollection200Response';
export * from './updateCouponCollectionRequest';
export * from './updateEmailCampaign';
export * from './updateEmailCampaignRecipients';
export * from './updateEmailCampaignSender';
export * from './updateExternalFeed';
export * from './updateList';
export * from './updateSender';
export * from './updateSmsCampaign';
export * from './updateSmtpTemplate';
export * from './updateSmtpTemplateSender';
export * from './updateWebhook';
export * from './updateWhatsAppCampaign';
export * from './uploadImageModel';
export * from './uploadImageToGallery';
export * from './variablesItems';
export * from './whatsappCampStats';
export * from './whatsappCampTemplate';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { AbTestCampaignResult } from './abTestCampaignResult';
import { AbTestCampaignResultClickedLinks } from './abTestCampaignResultClickedLinks';
import { AbTestCampaignResultStatistics } from './abTestCampaignResultStatistics';
import { AbTestVersionClicksInner } from './abTestVersionClicksInner';
import { AbTestVersionStats } from './abTestVersionStats';
import { AddChildDomain } from './addChildDomain';
import { AddContactToList } from './addContactToList';
import { AddCredits } from './addCredits';
import { AuthenticateDomainModel } from './authenticateDomainModel';
import { BlockDomain } from './blockDomain';
import { Cart } from './cart';
import { CompaniesIdPatchRequest } from './companiesIdPatchRequest';
import { CompaniesLinkUnlinkIdPatchRequest } from './companiesLinkUnlinkIdPatchRequest';
import { CompaniesList } from './companiesList';
import { CompaniesPost200Response } from './companiesPost200Response';
import { CompaniesPostRequest } from './companiesPostRequest';
import { Company } from './company';
import { CompanyAttributesInner } from './companyAttributesInner';
import { ComponentItems } from './componentItems';
import { Configuration } from './configuration';
import { ConversationsAgentOnlinePingPostRequest } from './conversationsAgentOnlinePingPostRequest';
import { ConversationsMessage } from './conversationsMessage';
import { ConversationsMessageFile } from './conversationsMessageFile';
import { ConversationsMessageFileImageInfo } from './conversationsMessageFileImageInfo';
import { ConversationsMessagesIdPutRequest } from './conversationsMessagesIdPutRequest';
import { ConversationsMessagesPostRequest } from './conversationsMessagesPostRequest';
import { ConversationsPushedMessagesIdPutRequest } from './conversationsPushedMessagesIdPutRequest';
import { ConversationsPushedMessagesPostRequest } from './conversationsPushedMessagesPostRequest';
import { ConversionSourceMetrics } from './conversionSourceMetrics';
import { ConversionSourceProduct } from './conversionSourceProduct';
import { CorporateGroupDetailsResponse } from './corporateGroupDetailsResponse';
import { CorporateGroupDetailsResponseGroup } from './corporateGroupDetailsResponseGroup';
import { CorporateGroupDetailsResponseSubAccountsInner } from './corporateGroupDetailsResponseSubAccountsInner';
import { CorporateGroupDetailsResponseUsersInner } from './corporateGroupDetailsResponseUsersInner';
import { CorporateGroupPost201Response } from './corporateGroupPost201Response';
import { CorporateGroupPostRequest } from './corporateGroupPostRequest';
import { CorporateGroupUnlinkGroupIdSubAccountsPutRequest } from './corporateGroupUnlinkGroupIdSubAccountsPutRequest';
import { CorporateSubAccountIpAssociatePostRequest } from './corporateSubAccountIpAssociatePostRequest';
import { CorporateSubAccountIpDissociatePutRequest } from './corporateSubAccountIpDissociatePutRequest';
import { CorporateUserInvitationActionEmailPut200Response } from './corporateUserInvitationActionEmailPut200Response';
import { CreateApiKeyRequest } from './createApiKeyRequest';
import { CreateApiKeyResponse } from './createApiKeyResponse';
import { CreateAttribute } from './createAttribute';
import { CreateAttributeEnumerationInner } from './createAttributeEnumerationInner';
import { CreateCategoryModel } from './createCategoryModel';
import { CreateChild } from './createChild';
import { CreateContact } from './createContact';
import { CreateCouponCollection201Response } from './createCouponCollection201Response';
import { CreateCouponCollectionRequest } from './createCouponCollectionRequest';
import { CreateCouponsRequest } from './createCouponsRequest';
import { CreateDoiContact } from './createDoiContact';
import { CreateDomain } from './createDomain';
import { CreateDomainModel } from './createDomainModel';
import { CreateDomainModelDnsRecords } from './createDomainModelDnsRecords';
import { CreateDomainModelDnsRecordsDkimRecord } from './createDomainModelDnsRecordsDkimRecord';
import { CreateEmailCampaign } from './createEmailCampaign';
import { CreateEmailCampaignRecipients } from './createEmailCampaignRecipients';
import { CreateEmailCampaignSender } from './createEmailCampaignSender';
import { CreateExternalFeed } from './createExternalFeed';
import { CreateExternalFeed201Response } from './createExternalFeed201Response';
import { CreateList } from './createList';
import { CreateModel } from './createModel';
import { CreatePaymentRequest } from './createPaymentRequest';
import { CreatePaymentResponse } from './createPaymentResponse';
import { CreateProductModel } from './createProductModel';
import { CreateReseller } from './createReseller';
import { CreateSender } from './createSender';
import { CreateSenderIpsInner } from './createSenderIpsInner';
import { CreateSenderModel } from './createSenderModel';
import { CreateSmsCampaign } from './createSmsCampaign';
import { CreateSmsCampaignRecipients } from './createSmsCampaignRecipients';
import { CreateSmtpEmail } from './createSmtpEmail';
import { CreateSmtpTemplate } from './createSmtpTemplate';
import { CreateSmtpTemplateSender } from './createSmtpTemplateSender';
import { CreateSubAccount } from './createSubAccount';
import { CreateSubAccountResponse } from './createSubAccountResponse';
import { CreateUpdateBatchCategory } from './createUpdateBatchCategory';
import { CreateUpdateBatchCategoryModel } from './createUpdateBatchCategoryModel';
import { CreateUpdateBatchProducts } from './createUpdateBatchProducts';
import { CreateUpdateBatchProductsModel } from './createUpdateBatchProductsModel';
import { CreateUpdateCategories } from './createUpdateCategories';
import { CreateUpdateCategory } from './createUpdateCategory';
import { CreateUpdateContactModel } from './createUpdateContactModel';
import { CreateUpdateFolder } from './createUpdateFolder';
import { CreateUpdateProduct } from './createUpdateProduct';
import { CreateUpdateProducts } from './createUpdateProducts';
import { CreateWebhook } from './createWebhook';
import { CreateWhatsAppCampaign } from './createWhatsAppCampaign';
import { CreateWhatsAppCampaignRecipients } from './createWhatsAppCampaignRecipients';
import { CreateWhatsAppTemplate } from './createWhatsAppTemplate';
import { CreatedBatchId } from './createdBatchId';
import { CreatedProcessId } from './createdProcessId';
import { CrmDealsIdPatchRequest } from './crmDealsIdPatchRequest';
import { CrmDealsLinkUnlinkIdPatchRequest } from './crmDealsLinkUnlinkIdPatchRequest';
import { CrmDealsPost201Response } from './crmDealsPost201Response';
import { CrmDealsPostRequest } from './crmDealsPostRequest';
import { CrmTasksIdPatchRequest } from './crmTasksIdPatchRequest';
import { CrmTasksPost201Response } from './crmTasksPost201Response';
import { CrmTasksPostRequest } from './crmTasksPostRequest';
import { Deal } from './deal';
import { DealAttributesInner } from './dealAttributesInner';
import { DealsList } from './dealsList';
import { DeleteHardbounces } from './deleteHardbounces';
import { EcommerceAttributionMetricsConversionSourceConversionSourceIdGet200Response } from './ecommerceAttributionMetricsConversionSourceConversionSourceIdGet200Response';
import { EcommerceAttributionMetricsGet200Response } from './ecommerceAttributionMetricsGet200Response';
import { EcommerceAttributionMetricsGet200ResponseTotals } from './ecommerceAttributionMetricsGet200ResponseTotals';
import { EcommerceAttributionProductsConversionSourceConversionSourceIdGet200Response } from './ecommerceAttributionProductsConversionSourceConversionSourceIdGet200Response';
import { EcommerceConfigDisplayCurrencyGet200Response } from './ecommerceConfigDisplayCurrencyGet200Response';
import { EmailExportRecipients } from './emailExportRecipients';
import { ErrorModel } from './errorModel';
import { Event } from './event';
import { EventIdentifiers } from './eventIdentifiers';
import { ExportWebhooksHistory } from './exportWebhooksHistory';
import { FileData } from './fileData';
import { FileDownloadableLink } from './fileDownloadableLink';
import { GetAccount } from './getAccount';
import { GetAccountActivity } from './getAccountActivity';
import { GetAccountActivityLogsInner } from './getAccountActivityLogsInner';
import { GetAccountAllOfMarketingAutomation } from './getAccountAllOfMarketingAutomation';
import { GetAccountAllOfPlan } from './getAccountAllOfPlan';
import { GetAccountAllOfRelay } from './getAccountAllOfRelay';
import { GetAccountAllOfRelayData } from './getAccountAllOfRelayData';
import { GetAggregatedReport } from './getAggregatedReport';
import { GetAllExternalFeeds } from './getAllExternalFeeds';
import { GetAllExternalFeedsFeedsInner } from './getAllExternalFeedsFeedsInner';
import { GetAttributes } from './getAttributes';
import { GetAttributesAttributesInner } from './getAttributesAttributesInner';
import { GetAttributesAttributesInnerEnumerationInner } from './getAttributesAttributesInnerEnumerationInner';
import { GetBlockedDomains } from './getBlockedDomains';
import { GetCampaignOverview } from './getCampaignOverview';
import { GetCampaignRecipients } from './getCampaignRecipients';
import { GetCampaignStats } from './getCampaignStats';
import { GetCategories } from './getCategories';
import { GetCategoryDetails } from './getCategoryDetails';
import { GetChildAccountCreationStatus } from './getChildAccountCreationStatus';
import { GetChildDomain } from './getChildDomain';
import { GetChildInfo } from './getChildInfo';
import { GetChildInfoAllOfApiKeys } from './getChildInfoAllOfApiKeys';
import { GetChildInfoAllOfApiKeysV2 } from './getChildInfoAllOfApiKeysV2';
import { GetChildInfoAllOfApiKeysV3 } from './getChildInfoAllOfApiKeysV3';
import { GetChildInfoAllOfCredits } from './getChildInfoAllOfCredits';
import { GetChildInfoAllOfStatistics } from './getChildInfoAllOfStatistics';
import { GetChildrenList } from './getChildrenList';
import { GetChildrenListChildrenInner } from './getChildrenListChildrenInner';
import { GetClient } from './getClient';
import { GetContactCampaignStats } from './getContactCampaignStats';
import { GetContactCampaignStatsClickedInner } from './getContactCampaignStatsClickedInner';
import { GetContactCampaignStatsClickedInnerLinksInner } from './getContactCampaignStatsClickedInnerLinksInner';
import { GetContactCampaignStatsMessagesSentInner } from './getContactCampaignStatsMessagesSentInner';
import { GetContactCampaignStatsOpenedInner } from './getContactCampaignStatsOpenedInner';
import { GetContactCampaignStatsTransacAttributesInner } from './getContactCampaignStatsTransacAttributesInner';
import { GetContactCampaignStatsUnsubscriptions } from './getContactCampaignStatsUnsubscriptions';
import { GetContactCampaignStatsUnsubscriptionsAdminUnsubscriptionInner } from './getContactCampaignStatsUnsubscriptionsAdminUnsubscriptionInner';
import { GetContactCampaignStatsUnsubscriptionsUserUnsubscriptionInner } from './getContactCampaignStatsUnsubscriptionsUserUnsubscriptionInner';
import { GetContactDetails } from './getContactDetails';
import { GetContacts } from './getContacts';
import { GetCorporateInvitedUsersList } from './getCorporateInvitedUsersList';
import { GetCorporateInvitedUsersListUsersInner } from './getCorporateInvitedUsersListUsersInner';
import { GetCorporateInvitedUsersListUsersInnerFeatureAccess } from './getCorporateInvitedUsersListUsersInnerFeatureAccess';
import { GetCorporateInvitedUsersListUsersInnerGroups } from './getCorporateInvitedUsersListUsersInnerGroups';
import { GetCorporateUserPermission } from './getCorporateUserPermission';
import { GetCorporateUserPermissionFeatureAccess } from './getCorporateUserPermissionFeatureAccess';
import { GetCorporateUserPermissionGroupsInner } from './getCorporateUserPermissionGroupsInner';
import { GetCouponCollection } from './getCouponCollection';
import { GetDeviceBrowserStats } from './getDeviceBrowserStats';
import { GetDomainConfigurationModel } from './getDomainConfigurationModel';
import { GetDomainsList } from './getDomainsList';
import { GetDomainsListDomainsInner } from './getDomainsListDomainsInner';
import { GetEmailCampaign } from './getEmailCampaign';
import { GetEmailCampaigns } from './getEmailCampaigns';
import { GetEmailCampaignsCampaignsInner } from './getEmailCampaignsCampaignsInner';
import { GetEmailEventReport } from './getEmailEventReport';
import { GetEmailEventReportEventsInner } from './getEmailEventReportEventsInner';
import { GetExtendedCampaignOverview } from './getExtendedCampaignOverview';
import { GetExtendedCampaignOverviewAllOfSender } from './getExtendedCampaignOverviewAllOfSender';
import { GetExtendedCampaignStats } from './getExtendedCampaignStats';
import { GetExtendedClient } from './getExtendedClient';
import { GetExtendedClientAllOfAddress } from './getExtendedClientAllOfAddress';
import { GetExtendedContactDetails } from './getExtendedContactDetails';
import { GetExtendedContactDetailsAllOfStatistics } from './getExtendedContactDetailsAllOfStatistics';
import { GetExtendedContactDetailsAllOfStatisticsClicked } from './getExtendedContactDetailsAllOfStatisticsClicked';
import { GetExtendedContactDetailsAllOfStatisticsLinks } from './getExtendedContactDetailsAllOfStatisticsLinks';
import { GetExtendedContactDetailsAllOfStatisticsMessagesSent } from './getExtendedContactDetailsAllOfStatisticsMessagesSent';
import { GetExtendedContactDetailsAllOfStatisticsOpened } from './getExtendedContactDetailsAllOfStatisticsOpened';
import { GetExtendedContactDetailsAllOfStatisticsUnsubscriptions } from './getExtendedContactDetailsAllOfStatisticsUnsubscriptions';
import { GetExtendedContactDetailsAllOfStatisticsUnsubscriptionsAdminUnsubscription } from './getExtendedContactDetailsAllOfStatisticsUnsubscriptionsAdminUnsubscription';
import { GetExtendedContactDetailsAllOfStatisticsUnsubscriptionsUserUnsubscription } from './getExtendedContactDetailsAllOfStatisticsUnsubscriptionsUserUnsubscription';
import { GetExtendedList } from './getExtendedList';
import { GetExtendedListAllOfCampaignStats } from './getExtendedListAllOfCampaignStats';
import { GetExternalFeedByUUID } from './getExternalFeedByUUID';
import { GetExternalFeedByUUIDHeadersInner } from './getExternalFeedByUUIDHeadersInner';
import { GetFolder } from './getFolder';
import { GetFolderLists } from './getFolderLists';
import { GetFolders } from './getFolders';
import { GetInboundEmailEvents } from './getInboundEmailEvents';
import { GetInboundEmailEventsByUuid } from './getInboundEmailEventsByUuid';
import { GetInboundEmailEventsByUuidAttachmentsInner } from './getInboundEmailEventsByUuidAttachmentsInner';
import { GetInboundEmailEventsByUuidLogsInner } from './getInboundEmailEventsByUuidLogsInner';
import { GetInboundEmailEventsEventsInner } from './getInboundEmailEventsEventsInner';
import { GetInvitedUsersList } from './getInvitedUsersList';
import { GetInvitedUsersListUsersInner } from './getInvitedUsersListUsersInner';
import { GetInvitedUsersListUsersInnerFeatureAccess } from './getInvitedUsersListUsersInnerFeatureAccess';
import { GetIp } from './getIp';
import { GetIpFromSender } from './getIpFromSender';
import { GetIps } from './getIps';
import { GetIpsFromSender } from './getIpsFromSender';
import { GetList } from './getList';
import { GetLists } from './getLists';
import { GetListsListsInner } from './getListsListsInner';
import { GetOrders } from './getOrders';
import { GetOrdersOrdersInner } from './getOrdersOrdersInner';
import { GetPaymentRequest } from './getPaymentRequest';
import { GetProcess } from './getProcess';
import { GetProcesses } from './getProcesses';
import { GetProductDetails } from './getProductDetails';
import { GetProducts } from './getProducts';
import { GetReports } from './getReports';
import { GetReportsReportsInner } from './getReportsReportsInner';
import { GetScheduledEmailByBatchId } from './getScheduledEmailByBatchId';
import { GetScheduledEmailByBatchIdBatchesInner } from './getScheduledEmailByBatchIdBatchesInner';
import { GetScheduledEmailByMessageId } from './getScheduledEmailByMessageId';
import { GetSegments } from './getSegments';
import { GetSegmentsSegments } from './getSegmentsSegments';
import { GetSendersList } from './getSendersList';
import { GetSendersListSendersInner } from './getSendersListSendersInner';
import { GetSendersListSendersInnerIpsInner } from './getSendersListSendersInnerIpsInner';
import { GetSharedTemplateUrl } from './getSharedTemplateUrl';
import { GetSmsCampaign } from './getSmsCampaign';
import { GetSmsCampaignOverview } from './getSmsCampaignOverview';
import { GetSmsCampaignStats } from './getSmsCampaignStats';
import { GetSmsCampaigns } from './getSmsCampaigns';
import { GetSmsCampaignsCampaignsInner } from './getSmsCampaignsCampaignsInner';
import { GetSmsEventReport } from './getSmsEventReport';
import { GetSmsEventReportEventsInner } from './getSmsEventReportEventsInner';
import { GetSmtpTemplateOverview } from './getSmtpTemplateOverview';
import { GetSmtpTemplateOverviewSender } from './getSmtpTemplateOverviewSender';
import { GetSmtpTemplates } from './getSmtpTemplates';
import { GetSsoToken } from './getSsoToken';
import { GetStatsByDevice } from './getStatsByDevice';
import { GetSubAccountGroups200ResponseInner } from './getSubAccountGroups200ResponseInner';
import { GetTransacAggregatedSmsReport } from './getTransacAggregatedSmsReport';
import { GetTransacBlockedContacts } from './getTransacBlockedContacts';
import { GetTransacBlockedContactsContactsInner } from './getTransacBlockedContactsContactsInner';
import { GetTransacBlockedContactsContactsInnerReason } from './getTransacBlockedContactsContactsInnerReason';
import { GetTransacEmailContent } from './getTransacEmailContent';
import { GetTransacEmailContentEventsInner } from './getTransacEmailContentEventsInner';
import { GetTransacEmailsList } from './getTransacEmailsList';
import { GetTransacEmailsListTransactionalEmailsInner } from './getTransacEmailsListTransactionalEmailsInner';
import { GetTransacSmsReport } from './getTransacSmsReport';
import { GetTransacSmsReportReportsInner } from './getTransacSmsReportReportsInner';
import { GetUserPermission } from './getUserPermission';
import { GetUserPermissionPrivilegesInner } from './getUserPermissionPrivilegesInner';
import { GetWATemplates } from './getWATemplates';
import { GetWATemplatesTemplatesInner } from './getWATemplatesTemplatesInner';
import { GetWebhook } from './getWebhook';
import { GetWebhookAuth } from './getWebhookAuth';
import { GetWebhookHeadersInner } from './getWebhookHeadersInner';
import { GetWebhooks } from './getWebhooks';
import { GetWhatsAppConfig } from './getWhatsAppConfig';
import { GetWhatsappCampaignOverview } from './getWhatsappCampaignOverview';
import { GetWhatsappCampaigns } from './getWhatsappCampaigns';
import { GetWhatsappCampaignsCampaignsInner } from './getWhatsappCampaignsCampaignsInner';
import { GetWhatsappEventReport } from './getWhatsappEventReport';
import { GetWhatsappEventReportEventsInner } from './getWhatsappEventReportEventsInner';
import { InviteAdminUser } from './inviteAdminUser';
import { InviteAdminUserPrivilegesInner } from './inviteAdminUserPrivilegesInner';
import { Inviteuser } from './inviteuser';
import { InviteuserPrivilegesInner } from './inviteuserPrivilegesInner';
import { ManageIp } from './manageIp';
import { MasterDetailsResponse } from './masterDetailsResponse';
import { MasterDetailsResponseBillingInfo } from './masterDetailsResponseBillingInfo';
import { MasterDetailsResponseBillingInfoAddress } from './masterDetailsResponseBillingInfoAddress';
import { MasterDetailsResponseBillingInfoName } from './masterDetailsResponseBillingInfoName';
import { MasterDetailsResponsePlanInfo } from './masterDetailsResponsePlanInfo';
import { MasterDetailsResponsePlanInfoFeaturesInner } from './masterDetailsResponsePlanInfoFeaturesInner';
import { Note } from './note';
import { NoteData } from './noteData';
import { NoteId } from './noteId';
import { Notification } from './notification';
import { Order } from './order';
import { OrderBatch } from './orderBatch';
import { OrderBilling } from './orderBilling';
import { OrderProductsInner } from './orderProductsInner';
import { Otp } from './otp';
import { Pipeline } from './pipeline';
import { PipelineStage } from './pipelineStage';
import { PostContactInfo } from './postContactInfo';
import { PostContactInfoContacts } from './postContactInfoContacts';
import { PostSendFailed } from './postSendFailed';
import { PostSendSmsTestFailed } from './postSendSmsTestFailed';
import { PutRevokeUserPermission } from './putRevokeUserPermission';
import { Putresendcancelinvitation } from './putresendcancelinvitation';
import { RemainingCreditModel } from './remainingCreditModel';
import { RemainingCreditModelChild } from './remainingCreditModelChild';
import { RemainingCreditModelReseller } from './remainingCreditModelReseller';
import { RemoveContactFromList } from './removeContactFromList';
import { RemoveCredits } from './removeCredits';
import { RequestContactExport } from './requestContactExport';
import { RequestContactExportCustomContactFilter } from './requestContactExportCustomContactFilter';
import { RequestContactImport } from './requestContactImport';
import { RequestContactImportJsonBodyInner } from './requestContactImportJsonBodyInner';
import { RequestContactImportNewList } from './requestContactImportNewList';
import { RequestSmsRecipientExport } from './requestSmsRecipientExport';
import { ScheduleSmtpEmail } from './scheduleSmtpEmail';
import { SendReport } from './sendReport';
import { SendReportEmail } from './sendReportEmail';
import { SendSms } from './sendSms';
import { SendSmtpEmail } from './sendSmtpEmail';
import { SendSmtpEmailAttachmentInner } from './sendSmtpEmailAttachmentInner';
import { SendSmtpEmailBccInner } from './sendSmtpEmailBccInner';
import { SendSmtpEmailCcInner } from './sendSmtpEmailCcInner';
import { SendSmtpEmailMessageVersionsInner } from './sendSmtpEmailMessageVersionsInner';
import { SendSmtpEmailMessageVersionsInnerReplyTo } from './sendSmtpEmailMessageVersionsInnerReplyTo';
import { SendSmtpEmailMessageVersionsInnerToInner } from './sendSmtpEmailMessageVersionsInnerToInner';
import { SendSmtpEmailReplyTo } from './sendSmtpEmailReplyTo';
import { SendSmtpEmailSender } from './sendSmtpEmailSender';
import { SendSmtpEmailToInner } from './sendSmtpEmailToInner';
import { SendTestEmail } from './sendTestEmail';
import { SendTestSms } from './sendTestSms';
import { SendTransacSms } from './sendTransacSms';
import { SendWhatsappMessage } from './sendWhatsappMessage';
import { SendWhatsappMessage201Response } from './sendWhatsappMessage201Response';
import { SsoTokenRequest } from './ssoTokenRequest';
import { SsoTokenRequestCorporate } from './ssoTokenRequestCorporate';
import { SubAccountAppsToggleRequest } from './subAccountAppsToggleRequest';
import { SubAccountDetailsResponse } from './subAccountDetailsResponse';
import { SubAccountDetailsResponseGroupsInner } from './subAccountDetailsResponseGroupsInner';
import { SubAccountDetailsResponsePlanInfo } from './subAccountDetailsResponsePlanInfo';
import { SubAccountDetailsResponsePlanInfoCredits } from './subAccountDetailsResponsePlanInfoCredits';
import { SubAccountDetailsResponsePlanInfoCreditsEmails } from './subAccountDetailsResponsePlanInfoCreditsEmails';
import { SubAccountDetailsResponsePlanInfoCreditsSms } from './subAccountDetailsResponsePlanInfoCreditsSms';
import { SubAccountDetailsResponsePlanInfoCreditsWpSubscribers } from './subAccountDetailsResponsePlanInfoCreditsWpSubscribers';
import { SubAccountDetailsResponsePlanInfoFeatures } from './subAccountDetailsResponsePlanInfoFeatures';
import { SubAccountDetailsResponsePlanInfoFeaturesInbox } from './subAccountDetailsResponsePlanInfoFeaturesInbox';
import { SubAccountDetailsResponsePlanInfoFeaturesLandingPage } from './subAccountDetailsResponsePlanInfoFeaturesLandingPage';
import { SubAccountDetailsResponsePlanInfoFeaturesUsers } from './subAccountDetailsResponsePlanInfoFeaturesUsers';
import { SubAccountUpdatePlanRequest } from './subAccountUpdatePlanRequest';
import { SubAccountUpdatePlanRequestCredits } from './subAccountUpdatePlanRequestCredits';
import { SubAccountUpdatePlanRequestFeatures } from './subAccountUpdatePlanRequestFeatures';
import { SubAccountsResponse } from './subAccountsResponse';
import { SubAccountsResponseSubAccountsInner } from './subAccountsResponseSubAccountsInner';
import { SubAccountsResponseSubAccountsInnerGroupsInner } from './subAccountsResponseSubAccountsInnerGroupsInner';
import { Task } from './task';
import { TaskList } from './taskList';
import { TaskReminder } from './taskReminder';
import { TaskTypes } from './taskTypes';
import { UpdateAttribute } from './updateAttribute';
import { UpdateAttributeEnumerationInner } from './updateAttributeEnumerationInner';
import { UpdateBatchContacts } from './updateBatchContacts';
import { UpdateBatchContactsContactsInner } from './updateBatchContactsContactsInner';
import { UpdateBatchContactsModel } from './updateBatchContactsModel';
import { UpdateCampaignStatus } from './updateCampaignStatus';
import { UpdateChild } from './updateChild';
import { UpdateChildAccountStatus } from './updateChildAccountStatus';
import { UpdateChildDomain } from './updateChildDomain';
import { UpdateContact } from './updateContact';
import { UpdateCouponCollection200Response } from './updateCouponCollection200Response';
import { UpdateCouponCollectionRequest } from './updateCouponCollectionRequest';
import { UpdateEmailCampaign } from './updateEmailCampaign';
import { UpdateEmailCampaignRecipients } from './updateEmailCampaignRecipients';
import { UpdateEmailCampaignSender } from './updateEmailCampaignSender';
import { UpdateExternalFeed } from './updateExternalFeed';
import { UpdateList } from './updateList';
import { UpdateSender } from './updateSender';
import { UpdateSmsCampaign } from './updateSmsCampaign';
import { UpdateSmtpTemplate } from './updateSmtpTemplate';
import { UpdateSmtpTemplateSender } from './updateSmtpTemplateSender';
import { UpdateWebhook } from './updateWebhook';
import { UpdateWhatsAppCampaign } from './updateWhatsAppCampaign';
import { UploadImageModel } from './uploadImageModel';
import { UploadImageToGallery } from './uploadImageToGallery';
import { VariablesItems } from './variablesItems';
import { WhatsappCampStats } from './whatsappCampStats';
import { WhatsappCampTemplate } from './whatsappCampTemplate';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "AbTestCampaignResult.WinningVersionEnum": AbTestCampaignResult.WinningVersionEnum,
        "AbTestCampaignResult.WinningCriteriaEnum": AbTestCampaignResult.WinningCriteriaEnum,
        "Cart.CurrencyEnum": Cart.CurrencyEnum,
        "ConversationsMessage.TypeEnum": ConversationsMessage.TypeEnum,
        "ConversionSourceMetrics.ConversionSourceEnum": ConversionSourceMetrics.ConversionSourceEnum,
        "CreateAttribute.TypeEnum": CreateAttribute.TypeEnum,
        "CreateChild.LanguageEnum": CreateChild.LanguageEnum,
        "CreateEmailCampaign.WinnerCriteriaEnum": CreateEmailCampaign.WinnerCriteriaEnum,
        "CreateExternalFeed.AuthTypeEnum": CreateExternalFeed.AuthTypeEnum,
        "CreateSubAccount.LanguageEnum": CreateSubAccount.LanguageEnum,
        "CreateWebhook.EventsEnum": CreateWebhook.EventsEnum,
        "CreateWebhook.TypeEnum": CreateWebhook.TypeEnum,
        "CreateWhatsAppTemplate.CategoryEnum": CreateWhatsAppTemplate.CategoryEnum,
        "CreateWhatsAppTemplate.SourceEnum": CreateWhatsAppTemplate.SourceEnum,
        "EcommerceAttributionMetricsConversionSourceConversionSourceIdGet200Response.ConversionSourceEnum": EcommerceAttributionMetricsConversionSourceConversionSourceIdGet200Response.ConversionSourceEnum,
        "EmailExportRecipients.RecipientsTypeEnum": EmailExportRecipients.RecipientsTypeEnum,
        "ErrorModel.CodeEnum": ErrorModel.CodeEnum,
        "ExportWebhooksHistory.TypeEnum": ExportWebhooksHistory.TypeEnum,
        "ExportWebhooksHistory.EventEnum": ExportWebhooksHistory.EventEnum,
        "GetAccountAllOfPlan.TypeEnum": GetAccountAllOfPlan.TypeEnum,
        "GetAccountAllOfPlan.CreditsTypeEnum": GetAccountAllOfPlan.CreditsTypeEnum,
        "GetAllExternalFeedsFeedsInner.AuthTypeEnum": GetAllExternalFeedsFeedsInner.AuthTypeEnum,
        "GetAttributesAttributesInner.CategoryEnum": GetAttributesAttributesInner.CategoryEnum,
        "GetAttributesAttributesInner.TypeEnum": GetAttributesAttributesInner.TypeEnum,
        "GetCampaignOverview.TypeEnum": GetCampaignOverview.TypeEnum,
        "GetCampaignOverview.StatusEnum": GetCampaignOverview.StatusEnum,
        "GetEmailCampaign.TypeEnum": GetEmailCampaign.TypeEnum,
        "GetEmailCampaign.StatusEnum": GetEmailCampaign.StatusEnum,
        "GetEmailCampaignsCampaignsInner.TypeEnum": GetEmailCampaignsCampaignsInner.TypeEnum,
        "GetEmailCampaignsCampaignsInner.StatusEnum": GetEmailCampaignsCampaignsInner.StatusEnum,
        "GetEmailEventReportEventsInner.EventEnum": GetEmailEventReportEventsInner.EventEnum,
        "GetExtendedCampaignOverview.TypeEnum": GetExtendedCampaignOverview.TypeEnum,
        "GetExtendedCampaignOverview.StatusEnum": GetExtendedCampaignOverview.StatusEnum,
        "GetExternalFeedByUUID.AuthTypeEnum": GetExternalFeedByUUID.AuthTypeEnum,
        "GetInboundEmailEventsByUuidLogsInner.TypeEnum": GetInboundEmailEventsByUuidLogsInner.TypeEnum,
        "GetPaymentRequest.StatusEnum": GetPaymentRequest.StatusEnum,
        "GetProcess.StatusEnum": GetProcess.StatusEnum,
        "GetScheduledEmailByBatchIdBatchesInner.StatusEnum": GetScheduledEmailByBatchIdBatchesInner.StatusEnum,
        "GetScheduledEmailByMessageId.StatusEnum": GetScheduledEmailByMessageId.StatusEnum,
        "GetSmsCampaign.StatusEnum": GetSmsCampaign.StatusEnum,
        "GetSmsCampaignOverview.StatusEnum": GetSmsCampaignOverview.StatusEnum,
        "GetSmsCampaignsCampaignsInner.StatusEnum": GetSmsCampaignsCampaignsInner.StatusEnum,
        "GetSmsEventReportEventsInner.EventEnum": GetSmsEventReportEventsInner.EventEnum,
        "GetTransacBlockedContactsContactsInnerReason.CodeEnum": GetTransacBlockedContactsContactsInnerReason.CodeEnum,
        "GetWebhook.TypeEnum": GetWebhook.TypeEnum,
        "GetWhatsAppConfig.PhoneNumberQualityEnum": GetWhatsAppConfig.PhoneNumberQualityEnum,
        "GetWhatsAppConfig.PhoneNumberNameStatusEnum": GetWhatsAppConfig.PhoneNumberNameStatusEnum,
        "GetWhatsappCampaignOverview.CampaignStatusEnum": GetWhatsappCampaignOverview.CampaignStatusEnum,
        "GetWhatsappCampaignsCampaignsInner.CampaignStatusEnum": GetWhatsappCampaignsCampaignsInner.CampaignStatusEnum,
        "GetWhatsappEventReportEventsInner.EventEnum": GetWhatsappEventReportEventsInner.EventEnum,
        "InviteAdminUserPrivilegesInner.FeatureEnum": InviteAdminUserPrivilegesInner.FeatureEnum,
        "InviteAdminUserPrivilegesInner.PermissionsEnum": InviteAdminUserPrivilegesInner.PermissionsEnum,
        "InviteuserPrivilegesInner.FeatureEnum": InviteuserPrivilegesInner.FeatureEnum,
        "InviteuserPrivilegesInner.PermissionsEnum": InviteuserPrivilegesInner.PermissionsEnum,
        "MasterDetailsResponsePlanInfo.PlanPeriodEnum": MasterDetailsResponsePlanInfo.PlanPeriodEnum,
        "Notification.ChannelEnum": Notification.ChannelEnum,
        "RequestContactExportCustomContactFilter.ActionForContactsEnum": RequestContactExportCustomContactFilter.ActionForContactsEnum,
        "RequestContactExportCustomContactFilter.ActionForEmailCampaignsEnum": RequestContactExportCustomContactFilter.ActionForEmailCampaignsEnum,
        "RequestContactExportCustomContactFilter.ActionForSmsCampaignsEnum": RequestContactExportCustomContactFilter.ActionForSmsCampaignsEnum,
        "RequestSmsRecipientExport.RecipientsTypeEnum": RequestSmsRecipientExport.RecipientsTypeEnum,
        "SendReport.LanguageEnum": SendReport.LanguageEnum,
        "SendTransacSms.TypeEnum": SendTransacSms.TypeEnum,
        "SsoTokenRequest.TargetEnum": SsoTokenRequest.TargetEnum,
        "TaskReminder.UnitEnum": TaskReminder.UnitEnum,
        "UpdateCampaignStatus.StatusEnum": UpdateCampaignStatus.StatusEnum,
        "UpdateEmailCampaign.WinnerCriteriaEnum": UpdateEmailCampaign.WinnerCriteriaEnum,
        "UpdateExternalFeed.AuthTypeEnum": UpdateExternalFeed.AuthTypeEnum,
        "UpdateWebhook.EventsEnum": UpdateWebhook.EventsEnum,
        "UpdateWhatsAppCampaign.CampaignStatusEnum": UpdateWhatsAppCampaign.CampaignStatusEnum,
}

let typeMap: {[index: string]: any} = {
    "AbTestCampaignResult": AbTestCampaignResult,
    "AbTestCampaignResultClickedLinks": AbTestCampaignResultClickedLinks,
    "AbTestCampaignResultStatistics": AbTestCampaignResultStatistics,
    "AbTestVersionClicksInner": AbTestVersionClicksInner,
    "AbTestVersionStats": AbTestVersionStats,
    "AddChildDomain": AddChildDomain,
    "AddContactToList": AddContactToList,
    "AddCredits": AddCredits,
    "AuthenticateDomainModel": AuthenticateDomainModel,
    "BlockDomain": BlockDomain,
    "Cart": Cart,
    "CompaniesIdPatchRequest": CompaniesIdPatchRequest,
    "CompaniesLinkUnlinkIdPatchRequest": CompaniesLinkUnlinkIdPatchRequest,
    "CompaniesList": CompaniesList,
    "CompaniesPost200Response": CompaniesPost200Response,
    "CompaniesPostRequest": CompaniesPostRequest,
    "Company": Company,
    "CompanyAttributesInner": CompanyAttributesInner,
    "ComponentItems": ComponentItems,
    "Configuration": Configuration,
    "ConversationsAgentOnlinePingPostRequest": ConversationsAgentOnlinePingPostRequest,
    "ConversationsMessage": ConversationsMessage,
    "ConversationsMessageFile": ConversationsMessageFile,
    "ConversationsMessageFileImageInfo": ConversationsMessageFileImageInfo,
    "ConversationsMessagesIdPutRequest": ConversationsMessagesIdPutRequest,
    "ConversationsMessagesPostRequest": ConversationsMessagesPostRequest,
    "ConversationsPushedMessagesIdPutRequest": ConversationsPushedMessagesIdPutRequest,
    "ConversationsPushedMessagesPostRequest": ConversationsPushedMessagesPostRequest,
    "ConversionSourceMetrics": ConversionSourceMetrics,
    "ConversionSourceProduct": ConversionSourceProduct,
    "CorporateGroupDetailsResponse": CorporateGroupDetailsResponse,
    "CorporateGroupDetailsResponseGroup": CorporateGroupDetailsResponseGroup,
    "CorporateGroupDetailsResponseSubAccountsInner": CorporateGroupDetailsResponseSubAccountsInner,
    "CorporateGroupDetailsResponseUsersInner": CorporateGroupDetailsResponseUsersInner,
    "CorporateGroupPost201Response": CorporateGroupPost201Response,
    "CorporateGroupPostRequest": CorporateGroupPostRequest,
    "CorporateGroupUnlinkGroupIdSubAccountsPutRequest": CorporateGroupUnlinkGroupIdSubAccountsPutRequest,
    "CorporateSubAccountIpAssociatePostRequest": CorporateSubAccountIpAssociatePostRequest,
    "CorporateSubAccountIpDissociatePutRequest": CorporateSubAccountIpDissociatePutRequest,
    "CorporateUserInvitationActionEmailPut200Response": CorporateUserInvitationActionEmailPut200Response,
    "CreateApiKeyRequest": CreateApiKeyRequest,
    "CreateApiKeyResponse": CreateApiKeyResponse,
    "CreateAttribute": CreateAttribute,
    "CreateAttributeEnumerationInner": CreateAttributeEnumerationInner,
    "CreateCategoryModel": CreateCategoryModel,
    "CreateChild": CreateChild,
    "CreateContact": CreateContact,
    "CreateCouponCollection201Response": CreateCouponCollection201Response,
    "CreateCouponCollectionRequest": CreateCouponCollectionRequest,
    "CreateCouponsRequest": CreateCouponsRequest,
    "CreateDoiContact": CreateDoiContact,
    "CreateDomain": CreateDomain,
    "CreateDomainModel": CreateDomainModel,
    "CreateDomainModelDnsRecords": CreateDomainModelDnsRecords,
    "CreateDomainModelDnsRecordsDkimRecord": CreateDomainModelDnsRecordsDkimRecord,
    "CreateEmailCampaign": CreateEmailCampaign,
    "CreateEmailCampaignRecipients": CreateEmailCampaignRecipients,
    "CreateEmailCampaignSender": CreateEmailCampaignSender,
    "CreateExternalFeed": CreateExternalFeed,
    "CreateExternalFeed201Response": CreateExternalFeed201Response,
    "CreateList": CreateList,
    "CreateModel": CreateModel,
    "CreatePaymentRequest": CreatePaymentRequest,
    "CreatePaymentResponse": CreatePaymentResponse,
    "CreateProductModel": CreateProductModel,
    "CreateReseller": CreateReseller,
    "CreateSender": CreateSender,
    "CreateSenderIpsInner": CreateSenderIpsInner,
    "CreateSenderModel": CreateSenderModel,
    "CreateSmsCampaign": CreateSmsCampaign,
    "CreateSmsCampaignRecipients": CreateSmsCampaignRecipients,
    "CreateSmtpEmail": CreateSmtpEmail,
    "CreateSmtpTemplate": CreateSmtpTemplate,
    "CreateSmtpTemplateSender": CreateSmtpTemplateSender,
    "CreateSubAccount": CreateSubAccount,
    "CreateSubAccountResponse": CreateSubAccountResponse,
    "CreateUpdateBatchCategory": CreateUpdateBatchCategory,
    "CreateUpdateBatchCategoryModel": CreateUpdateBatchCategoryModel,
    "CreateUpdateBatchProducts": CreateUpdateBatchProducts,
    "CreateUpdateBatchProductsModel": CreateUpdateBatchProductsModel,
    "CreateUpdateCategories": CreateUpdateCategories,
    "CreateUpdateCategory": CreateUpdateCategory,
    "CreateUpdateContactModel": CreateUpdateContactModel,
    "CreateUpdateFolder": CreateUpdateFolder,
    "CreateUpdateProduct": CreateUpdateProduct,
    "CreateUpdateProducts": CreateUpdateProducts,
    "CreateWebhook": CreateWebhook,
    "CreateWhatsAppCampaign": CreateWhatsAppCampaign,
    "CreateWhatsAppCampaignRecipients": CreateWhatsAppCampaignRecipients,
    "CreateWhatsAppTemplate": CreateWhatsAppTemplate,
    "CreatedBatchId": CreatedBatchId,
    "CreatedProcessId": CreatedProcessId,
    "CrmDealsIdPatchRequest": CrmDealsIdPatchRequest,
    "CrmDealsLinkUnlinkIdPatchRequest": CrmDealsLinkUnlinkIdPatchRequest,
    "CrmDealsPost201Response": CrmDealsPost201Response,
    "CrmDealsPostRequest": CrmDealsPostRequest,
    "CrmTasksIdPatchRequest": CrmTasksIdPatchRequest,
    "CrmTasksPost201Response": CrmTasksPost201Response,
    "CrmTasksPostRequest": CrmTasksPostRequest,
    "Deal": Deal,
    "DealAttributesInner": DealAttributesInner,
    "DealsList": DealsList,
    "DeleteHardbounces": DeleteHardbounces,
    "EcommerceAttributionMetricsConversionSourceConversionSourceIdGet200Response": EcommerceAttributionMetricsConversionSourceConversionSourceIdGet200Response,
    "EcommerceAttributionMetricsGet200Response": EcommerceAttributionMetricsGet200Response,
    "EcommerceAttributionMetricsGet200ResponseTotals": EcommerceAttributionMetricsGet200ResponseTotals,
    "EcommerceAttributionProductsConversionSourceConversionSourceIdGet200Response": EcommerceAttributionProductsConversionSourceConversionSourceIdGet200Response,
    "EcommerceConfigDisplayCurrencyGet200Response": EcommerceConfigDisplayCurrencyGet200Response,
    "EmailExportRecipients": EmailExportRecipients,
    "ErrorModel": ErrorModel,
    "Event": Event,
    "EventIdentifiers": EventIdentifiers,
    "ExportWebhooksHistory": ExportWebhooksHistory,
    "FileData": FileData,
    "FileDownloadableLink": FileDownloadableLink,
    "GetAccount": GetAccount,
    "GetAccountActivity": GetAccountActivity,
    "GetAccountActivityLogsInner": GetAccountActivityLogsInner,
    "GetAccountAllOfMarketingAutomation": GetAccountAllOfMarketingAutomation,
    "GetAccountAllOfPlan": GetAccountAllOfPlan,
    "GetAccountAllOfRelay": GetAccountAllOfRelay,
    "GetAccountAllOfRelayData": GetAccountAllOfRelayData,
    "GetAggregatedReport": GetAggregatedReport,
    "GetAllExternalFeeds": GetAllExternalFeeds,
    "GetAllExternalFeedsFeedsInner": GetAllExternalFeedsFeedsInner,
    "GetAttributes": GetAttributes,
    "GetAttributesAttributesInner": GetAttributesAttributesInner,
    "GetAttributesAttributesInnerEnumerationInner": GetAttributesAttributesInnerEnumerationInner,
    "GetBlockedDomains": GetBlockedDomains,
    "GetCampaignOverview": GetCampaignOverview,
    "GetCampaignRecipients": GetCampaignRecipients,
    "GetCampaignStats": GetCampaignStats,
    "GetCategories": GetCategories,
    "GetCategoryDetails": GetCategoryDetails,
    "GetChildAccountCreationStatus": GetChildAccountCreationStatus,
    "GetChildDomain": GetChildDomain,
    "GetChildInfo": GetChildInfo,
    "GetChildInfoAllOfApiKeys": GetChildInfoAllOfApiKeys,
    "GetChildInfoAllOfApiKeysV2": GetChildInfoAllOfApiKeysV2,
    "GetChildInfoAllOfApiKeysV3": GetChildInfoAllOfApiKeysV3,
    "GetChildInfoAllOfCredits": GetChildInfoAllOfCredits,
    "GetChildInfoAllOfStatistics": GetChildInfoAllOfStatistics,
    "GetChildrenList": GetChildrenList,
    "GetChildrenListChildrenInner": GetChildrenListChildrenInner,
    "GetClient": GetClient,
    "GetContactCampaignStats": GetContactCampaignStats,
    "GetContactCampaignStatsClickedInner": GetContactCampaignStatsClickedInner,
    "GetContactCampaignStatsClickedInnerLinksInner": GetContactCampaignStatsClickedInnerLinksInner,
    "GetContactCampaignStatsMessagesSentInner": GetContactCampaignStatsMessagesSentInner,
    "GetContactCampaignStatsOpenedInner": GetContactCampaignStatsOpenedInner,
    "GetContactCampaignStatsTransacAttributesInner": GetContactCampaignStatsTransacAttributesInner,
    "GetContactCampaignStatsUnsubscriptions": GetContactCampaignStatsUnsubscriptions,
    "GetContactCampaignStatsUnsubscriptionsAdminUnsubscriptionInner": GetContactCampaignStatsUnsubscriptionsAdminUnsubscriptionInner,
    "GetContactCampaignStatsUnsubscriptionsUserUnsubscriptionInner": GetContactCampaignStatsUnsubscriptionsUserUnsubscriptionInner,
    "GetContactDetails": GetContactDetails,
    "GetContacts": GetContacts,
    "GetCorporateInvitedUsersList": GetCorporateInvitedUsersList,
    "GetCorporateInvitedUsersListUsersInner": GetCorporateInvitedUsersListUsersInner,
    "GetCorporateInvitedUsersListUsersInnerFeatureAccess": GetCorporateInvitedUsersListUsersInnerFeatureAccess,
    "GetCorporateInvitedUsersListUsersInnerGroups": GetCorporateInvitedUsersListUsersInnerGroups,
    "GetCorporateUserPermission": GetCorporateUserPermission,
    "GetCorporateUserPermissionFeatureAccess": GetCorporateUserPermissionFeatureAccess,
    "GetCorporateUserPermissionGroupsInner": GetCorporateUserPermissionGroupsInner,
    "GetCouponCollection": GetCouponCollection,
    "GetDeviceBrowserStats": GetDeviceBrowserStats,
    "GetDomainConfigurationModel": GetDomainConfigurationModel,
    "GetDomainsList": GetDomainsList,
    "GetDomainsListDomainsInner": GetDomainsListDomainsInner,
    "GetEmailCampaign": GetEmailCampaign,
    "GetEmailCampaigns": GetEmailCampaigns,
    "GetEmailCampaignsCampaignsInner": GetEmailCampaignsCampaignsInner,
    "GetEmailEventReport": GetEmailEventReport,
    "GetEmailEventReportEventsInner": GetEmailEventReportEventsInner,
    "GetExtendedCampaignOverview": GetExtendedCampaignOverview,
    "GetExtendedCampaignOverviewAllOfSender": GetExtendedCampaignOverviewAllOfSender,
    "GetExtendedCampaignStats": GetExtendedCampaignStats,
    "GetExtendedClient": GetExtendedClient,
    "GetExtendedClientAllOfAddress": GetExtendedClientAllOfAddress,
    "GetExtendedContactDetails": GetExtendedContactDetails,
    "GetExtendedContactDetailsAllOfStatistics": GetExtendedContactDetailsAllOfStatistics,
    "GetExtendedContactDetailsAllOfStatisticsClicked": GetExtendedContactDetailsAllOfStatisticsClicked,
    "GetExtendedContactDetailsAllOfStatisticsLinks": GetExtendedContactDetailsAllOfStatisticsLinks,
    "GetExtendedContactDetailsAllOfStatisticsMessagesSent": GetExtendedContactDetailsAllOfStatisticsMessagesSent,
    "GetExtendedContactDetailsAllOfStatisticsOpened": GetExtendedContactDetailsAllOfStatisticsOpened,
    "GetExtendedContactDetailsAllOfStatisticsUnsubscriptions": GetExtendedContactDetailsAllOfStatisticsUnsubscriptions,
    "GetExtendedContactDetailsAllOfStatisticsUnsubscriptionsAdminUnsubscription": GetExtendedContactDetailsAllOfStatisticsUnsubscriptionsAdminUnsubscription,
    "GetExtendedContactDetailsAllOfStatisticsUnsubscriptionsUserUnsubscription": GetExtendedContactDetailsAllOfStatisticsUnsubscriptionsUserUnsubscription,
    "GetExtendedList": GetExtendedList,
    "GetExtendedListAllOfCampaignStats": GetExtendedListAllOfCampaignStats,
    "GetExternalFeedByUUID": GetExternalFeedByUUID,
    "GetExternalFeedByUUIDHeadersInner": GetExternalFeedByUUIDHeadersInner,
    "GetFolder": GetFolder,
    "GetFolderLists": GetFolderLists,
    "GetFolders": GetFolders,
    "GetInboundEmailEvents": GetInboundEmailEvents,
    "GetInboundEmailEventsByUuid": GetInboundEmailEventsByUuid,
    "GetInboundEmailEventsByUuidAttachmentsInner": GetInboundEmailEventsByUuidAttachmentsInner,
    "GetInboundEmailEventsByUuidLogsInner": GetInboundEmailEventsByUuidLogsInner,
    "GetInboundEmailEventsEventsInner": GetInboundEmailEventsEventsInner,
    "GetInvitedUsersList": GetInvitedUsersList,
    "GetInvitedUsersListUsersInner": GetInvitedUsersListUsersInner,
    "GetInvitedUsersListUsersInnerFeatureAccess": GetInvitedUsersListUsersInnerFeatureAccess,
    "GetIp": GetIp,
    "GetIpFromSender": GetIpFromSender,
    "GetIps": GetIps,
    "GetIpsFromSender": GetIpsFromSender,
    "GetList": GetList,
    "GetLists": GetLists,
    "GetListsListsInner": GetListsListsInner,
    "GetOrders": GetOrders,
    "GetOrdersOrdersInner": GetOrdersOrdersInner,
    "GetPaymentRequest": GetPaymentRequest,
    "GetProcess": GetProcess,
    "GetProcesses": GetProcesses,
    "GetProductDetails": GetProductDetails,
    "GetProducts": GetProducts,
    "GetReports": GetReports,
    "GetReportsReportsInner": GetReportsReportsInner,
    "GetScheduledEmailByBatchId": GetScheduledEmailByBatchId,
    "GetScheduledEmailByBatchIdBatchesInner": GetScheduledEmailByBatchIdBatchesInner,
    "GetScheduledEmailByMessageId": GetScheduledEmailByMessageId,
    "GetSegments": GetSegments,
    "GetSegmentsSegments": GetSegmentsSegments,
    "GetSendersList": GetSendersList,
    "GetSendersListSendersInner": GetSendersListSendersInner,
    "GetSendersListSendersInnerIpsInner": GetSendersListSendersInnerIpsInner,
    "GetSharedTemplateUrl": GetSharedTemplateUrl,
    "GetSmsCampaign": GetSmsCampaign,
    "GetSmsCampaignOverview": GetSmsCampaignOverview,
    "GetSmsCampaignStats": GetSmsCampaignStats,
    "GetSmsCampaigns": GetSmsCampaigns,
    "GetSmsCampaignsCampaignsInner": GetSmsCampaignsCampaignsInner,
    "GetSmsEventReport": GetSmsEventReport,
    "GetSmsEventReportEventsInner": GetSmsEventReportEventsInner,
    "GetSmtpTemplateOverview": GetSmtpTemplateOverview,
    "GetSmtpTemplateOverviewSender": GetSmtpTemplateOverviewSender,
    "GetSmtpTemplates": GetSmtpTemplates,
    "GetSsoToken": GetSsoToken,
    "GetStatsByDevice": GetStatsByDevice,
    "GetSubAccountGroups200ResponseInner": GetSubAccountGroups200ResponseInner,
    "GetTransacAggregatedSmsReport": GetTransacAggregatedSmsReport,
    "GetTransacBlockedContacts": GetTransacBlockedContacts,
    "GetTransacBlockedContactsContactsInner": GetTransacBlockedContactsContactsInner,
    "GetTransacBlockedContactsContactsInnerReason": GetTransacBlockedContactsContactsInnerReason,
    "GetTransacEmailContent": GetTransacEmailContent,
    "GetTransacEmailContentEventsInner": GetTransacEmailContentEventsInner,
    "GetTransacEmailsList": GetTransacEmailsList,
    "GetTransacEmailsListTransactionalEmailsInner": GetTransacEmailsListTransactionalEmailsInner,
    "GetTransacSmsReport": GetTransacSmsReport,
    "GetTransacSmsReportReportsInner": GetTransacSmsReportReportsInner,
    "GetUserPermission": GetUserPermission,
    "GetUserPermissionPrivilegesInner": GetUserPermissionPrivilegesInner,
    "GetWATemplates": GetWATemplates,
    "GetWATemplatesTemplatesInner": GetWATemplatesTemplatesInner,
    "GetWebhook": GetWebhook,
    "GetWebhookAuth": GetWebhookAuth,
    "GetWebhookHeadersInner": GetWebhookHeadersInner,
    "GetWebhooks": GetWebhooks,
    "GetWhatsAppConfig": GetWhatsAppConfig,
    "GetWhatsappCampaignOverview": GetWhatsappCampaignOverview,
    "GetWhatsappCampaigns": GetWhatsappCampaigns,
    "GetWhatsappCampaignsCampaignsInner": GetWhatsappCampaignsCampaignsInner,
    "GetWhatsappEventReport": GetWhatsappEventReport,
    "GetWhatsappEventReportEventsInner": GetWhatsappEventReportEventsInner,
    "InviteAdminUser": InviteAdminUser,
    "InviteAdminUserPrivilegesInner": InviteAdminUserPrivilegesInner,
    "Inviteuser": Inviteuser,
    "InviteuserPrivilegesInner": InviteuserPrivilegesInner,
    "ManageIp": ManageIp,
    "MasterDetailsResponse": MasterDetailsResponse,
    "MasterDetailsResponseBillingInfo": MasterDetailsResponseBillingInfo,
    "MasterDetailsResponseBillingInfoAddress": MasterDetailsResponseBillingInfoAddress,
    "MasterDetailsResponseBillingInfoName": MasterDetailsResponseBillingInfoName,
    "MasterDetailsResponsePlanInfo": MasterDetailsResponsePlanInfo,
    "MasterDetailsResponsePlanInfoFeaturesInner": MasterDetailsResponsePlanInfoFeaturesInner,
    "Note": Note,
    "NoteData": NoteData,
    "NoteId": NoteId,
    "Notification": Notification,
    "Order": Order,
    "OrderBatch": OrderBatch,
    "OrderBilling": OrderBilling,
    "OrderProductsInner": OrderProductsInner,
    "Otp": Otp,
    "Pipeline": Pipeline,
    "PipelineStage": PipelineStage,
    "PostContactInfo": PostContactInfo,
    "PostContactInfoContacts": PostContactInfoContacts,
    "PostSendFailed": PostSendFailed,
    "PostSendSmsTestFailed": PostSendSmsTestFailed,
    "PutRevokeUserPermission": PutRevokeUserPermission,
    "Putresendcancelinvitation": Putresendcancelinvitation,
    "RemainingCreditModel": RemainingCreditModel,
    "RemainingCreditModelChild": RemainingCreditModelChild,
    "RemainingCreditModelReseller": RemainingCreditModelReseller,
    "RemoveContactFromList": RemoveContactFromList,
    "RemoveCredits": RemoveCredits,
    "RequestContactExport": RequestContactExport,
    "RequestContactExportCustomContactFilter": RequestContactExportCustomContactFilter,
    "RequestContactImport": RequestContactImport,
    "RequestContactImportJsonBodyInner": RequestContactImportJsonBodyInner,
    "RequestContactImportNewList": RequestContactImportNewList,
    "RequestSmsRecipientExport": RequestSmsRecipientExport,
    "ScheduleSmtpEmail": ScheduleSmtpEmail,
    "SendReport": SendReport,
    "SendReportEmail": SendReportEmail,
    "SendSms": SendSms,
    "SendSmtpEmail": SendSmtpEmail,
    "SendSmtpEmailAttachmentInner": SendSmtpEmailAttachmentInner,
    "SendSmtpEmailBccInner": SendSmtpEmailBccInner,
    "SendSmtpEmailCcInner": SendSmtpEmailCcInner,
    "SendSmtpEmailMessageVersionsInner": SendSmtpEmailMessageVersionsInner,
    "SendSmtpEmailMessageVersionsInnerReplyTo": SendSmtpEmailMessageVersionsInnerReplyTo,
    "SendSmtpEmailMessageVersionsInnerToInner": SendSmtpEmailMessageVersionsInnerToInner,
    "SendSmtpEmailReplyTo": SendSmtpEmailReplyTo,
    "SendSmtpEmailSender": SendSmtpEmailSender,
    "SendSmtpEmailToInner": SendSmtpEmailToInner,
    "SendTestEmail": SendTestEmail,
    "SendTestSms": SendTestSms,
    "SendTransacSms": SendTransacSms,
    "SendWhatsappMessage": SendWhatsappMessage,
    "SendWhatsappMessage201Response": SendWhatsappMessage201Response,
    "SsoTokenRequest": SsoTokenRequest,
    "SsoTokenRequestCorporate": SsoTokenRequestCorporate,
    "SubAccountAppsToggleRequest": SubAccountAppsToggleRequest,
    "SubAccountDetailsResponse": SubAccountDetailsResponse,
    "SubAccountDetailsResponseGroupsInner": SubAccountDetailsResponseGroupsInner,
    "SubAccountDetailsResponsePlanInfo": SubAccountDetailsResponsePlanInfo,
    "SubAccountDetailsResponsePlanInfoCredits": SubAccountDetailsResponsePlanInfoCredits,
    "SubAccountDetailsResponsePlanInfoCreditsEmails": SubAccountDetailsResponsePlanInfoCreditsEmails,
    "SubAccountDetailsResponsePlanInfoCreditsSms": SubAccountDetailsResponsePlanInfoCreditsSms,
    "SubAccountDetailsResponsePlanInfoCreditsWpSubscribers": SubAccountDetailsResponsePlanInfoCreditsWpSubscribers,
    "SubAccountDetailsResponsePlanInfoFeatures": SubAccountDetailsResponsePlanInfoFeatures,
    "SubAccountDetailsResponsePlanInfoFeaturesInbox": SubAccountDetailsResponsePlanInfoFeaturesInbox,
    "SubAccountDetailsResponsePlanInfoFeaturesLandingPage": SubAccountDetailsResponsePlanInfoFeaturesLandingPage,
    "SubAccountDetailsResponsePlanInfoFeaturesUsers": SubAccountDetailsResponsePlanInfoFeaturesUsers,
    "SubAccountUpdatePlanRequest": SubAccountUpdatePlanRequest,
    "SubAccountUpdatePlanRequestCredits": SubAccountUpdatePlanRequestCredits,
    "SubAccountUpdatePlanRequestFeatures": SubAccountUpdatePlanRequestFeatures,
    "SubAccountsResponse": SubAccountsResponse,
    "SubAccountsResponseSubAccountsInner": SubAccountsResponseSubAccountsInner,
    "SubAccountsResponseSubAccountsInnerGroupsInner": SubAccountsResponseSubAccountsInnerGroupsInner,
    "Task": Task,
    "TaskList": TaskList,
    "TaskReminder": TaskReminder,
    "TaskTypes": TaskTypes,
    "UpdateAttribute": UpdateAttribute,
    "UpdateAttributeEnumerationInner": UpdateAttributeEnumerationInner,
    "UpdateBatchContacts": UpdateBatchContacts,
    "UpdateBatchContactsContactsInner": UpdateBatchContactsContactsInner,
    "UpdateBatchContactsModel": UpdateBatchContactsModel,
    "UpdateCampaignStatus": UpdateCampaignStatus,
    "UpdateChild": UpdateChild,
    "UpdateChildAccountStatus": UpdateChildAccountStatus,
    "UpdateChildDomain": UpdateChildDomain,
    "UpdateContact": UpdateContact,
    "UpdateCouponCollection200Response": UpdateCouponCollection200Response,
    "UpdateCouponCollectionRequest": UpdateCouponCollectionRequest,
    "UpdateEmailCampaign": UpdateEmailCampaign,
    "UpdateEmailCampaignRecipients": UpdateEmailCampaignRecipients,
    "UpdateEmailCampaignSender": UpdateEmailCampaignSender,
    "UpdateExternalFeed": UpdateExternalFeed,
    "UpdateList": UpdateList,
    "UpdateSender": UpdateSender,
    "UpdateSmsCampaign": UpdateSmsCampaign,
    "UpdateSmtpTemplate": UpdateSmtpTemplate,
    "UpdateSmtpTemplateSender": UpdateSmtpTemplateSender,
    "UpdateWebhook": UpdateWebhook,
    "UpdateWhatsAppCampaign": UpdateWhatsAppCampaign,
    "UploadImageModel": UploadImageModel,
    "UploadImageToGallery": UploadImageToGallery,
    "VariablesItems": VariablesItems,
    "WhatsappCampStats": WhatsappCampStats,
    "WhatsappCampTemplate": WhatsappCampTemplate,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
