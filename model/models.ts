import localVarRequest from 'request';

export * from './abTestCampaignResult';
export * from './abTestCampaignResultClickedLinks';
export * from './abTestCampaignResultStatistics';
export * from './abTestVersionClicksInner';
export * from './abTestVersionStats';
export * from './addContactToListByEmails';
export * from './addContactToListByExtIDs';
export * from './addContactToListByIDs';
export * from './addContactToListRequest';
export * from './addSubscriptionMemberPayload';
export * from './aggregateBalance';
export * from './authenticateDomainModel';
export * from './balance';
export * from './balanceDataPerContact';
export * from './balanceDefinition';
export * from './balanceDefinitionPage';
export * from './balanceLimit';
export * from './balanceOrder';
export * from './blockDomain';
export * from './cart';
export * from './companiesIdPatchRequest';
export * from './companiesImportPost200Response';
export * from './companiesImportPost400Response';
export * from './companiesLinkUnlinkIdPatchRequest';
export * from './companiesList';
export * from './companiesPost200Response';
export * from './companiesPostRequest';
export * from './company';
export * from './companyAttributesInner';
export * from './componentItems';
export * from './configuration';
export * from './contactBalancesResp';
export * from './contactErrorModel';
export * from './conversationsAgentOnlinePingPostRequest';
export * from './conversationsMessage';
export * from './conversationsMessageFile';
export * from './conversationsMessageFileImageInfo';
export * from './conversationsMessagesIdPutRequest';
export * from './conversationsMessagesPostRequest';
export * from './conversationsPushedMessagesPostRequest';
export * from './conversionSourceMetrics';
export * from './conversionSourceProduct';
export * from './corporateGroupDetailsResponse';
export * from './corporateGroupDetailsResponseGroup';
export * from './corporateGroupDetailsResponseSubAccountsInner';
export * from './corporateGroupDetailsResponseUsersInner';
export * from './corporateGroupIdPutRequest';
export * from './corporateGroupPost201Response';
export * from './corporateGroupPostRequest';
export * from './corporateGroupUnlinkGroupIdSubAccountsPutRequest';
export * from './corporateIpGet200ResponseInner';
export * from './corporateSsoTokenPostRequest';
export * from './corporateSubAccountIpAssociatePostRequest';
export * from './corporateSubAccountIpDissociatePutRequest';
export * from './corporateSubAccountKeyPostRequest';
export * from './corporateSubAccountSsoTokenPostRequest';
export * from './corporateUserEmailPermissionsPutRequest';
export * from './corporateUserEmailPermissionsPutRequestPrivilegesInner';
export * from './corporateUserInvitationActionEmailPut200Response';
export * from './createApiKeyResponse';
export * from './createAttribute';
export * from './createAttributeEnumerationInner';
export * from './createBalanceDefinitionPayload';
export * from './createBalanceLimitPayload';
export * from './createBalancePayload';
export * from './createCategoryModel';
export * from './createContact';
export * from './createCouponCollection201Response';
export * from './createCouponCollectionRequest';
export * from './createCouponsRequest';
export * from './createDoiContact';
export * from './createDoiContactAttributesValue';
export * from './createDomain';
export * from './createDomainModel';
export * from './createDomainModelDnsRecords';
export * from './createDomainModelDnsRecordsDkimRecord';
export * from './createEmailCampaign';
export * from './createEmailCampaignEmailExpirationDate';
export * from './createEmailCampaignRecipients';
export * from './createEmailCampaignSender';
export * from './createExternalFeed';
export * from './createExternalFeed201Response';
export * from './createList';
export * from './createLoyaltyProgramPayload';
export * from './createModel';
export * from './createOrderPayload';
export * from './createPaymentRequest';
export * from './createPaymentResponse';
export * from './createProductModel';
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
export * from './createSubscriptionPayload';
export * from './createSubscriptionResponse';
export * from './createTierGroupRequest';
export * from './createTransactionPayload';
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
export * from './crmAttributesPost200Response';
export * from './crmAttributesPostRequest';
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
export * from './errorResponse';
export * from './event';
export * from './eventContactPropertiesValue';
export * from './eventEventPropertiesValue';
export * from './eventIdentifiers';
export * from './exportWebhooksHistory';
export * from './exportWebhooksHistoryRequest';
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
export * from './getClient';
export * from './getContactCampaignStats';
export * from './getContactCampaignStatsClickedInner';
export * from './getContactCampaignStatsOpenedInner';
export * from './getContactCampaignStatsTransacAttributesInner';
export * from './getContactCampaignStatsUnsubscriptions';
export * from './getContactDetails';
export * from './getContactInfoIdentifierParameter';
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
export * from './getPaymentRequest';
export * from './getProcess';
export * from './getProcesses';
export * from './getProductDetails';
export * from './getProducts';
export * from './getReports';
export * from './getReportsReportsInner';
export * from './getScheduledEmailByBatchId';
export * from './getScheduledEmailByBatchIdBatchesInner';
export * from './getScheduledEmailById200Response';
export * from './getScheduledEmailByMessageId';
export * from './getSegments';
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
export * from './getWebhook';
export * from './getWebhooks';
export * from './getWhatsAppConfig';
export * from './getWhatsappCampaignOverview';
export * from './getWhatsappCampaigns';
export * from './getWhatsappCampaignsCampaignsInner';
export * from './getWhatsappEventReport';
export * from './getWhatsappEventReportEventsInner';
export * from './getWhatsappTemplates';
export * from './getWhatsappTemplatesTemplatesInner';
export * from './inviteAdminUser';
export * from './inviteAdminUserPrivilegesInner';
export * from './inviteuser';
export * from './inviteuserPrivilegesInner';
export * from './inviteuserResponse';
export * from './loyaltyProgram';
export * from './loyaltyProgramPage';
export * from './loyaltyProgramValidationError';
export * from './loyaltyTierPage';
export * from './mainAttributeRewardPayload';
export * from './mainBillingPayload';
export * from './mainCodeCountHttpResponse';
export * from './mainCreateRedeemPayload';
export * from './mainCreateRewardPayload';
export * from './mainCreateRewardResponse';
export * from './mainErrorResponse';
export * from './mainFilter';
export * from './mainGenerator';
export * from './mainGetContactRewardsPayload';
export * from './mainIdentifiersPayload';
export * from './mainLimit';
export * from './mainModelContactReward';
export * from './mainModelContactRewardsResp';
export * from './mainNodeResponse';
export * from './mainOrderPayload';
export * from './mainProduct';
export * from './mainProductPayload';
export * from './mainRedeem';
export * from './mainResultParameterResponse';
export * from './mainReward';
export * from './mainRewardAttribution';
export * from './mainRewardConfigurations';
export * from './mainRewardPage';
export * from './mainRewardPageObj';
export * from './mainRewardValidate';
export * from './mainRule';
export * from './mainRuleConditionResponse';
export * from './mainRuleEventResponse';
export * from './mainRuleResultResponse';
export * from './mainValidateRewardPayload';
export * from './mainValueResponse';
export * from './mainVoucherRevokePayload';
export * from './masterDetailsResponse';
export * from './masterDetailsResponseBillingInfo';
export * from './masterDetailsResponseBillingInfoAddress';
export * from './masterDetailsResponseBillingInfoName';
export * from './masterDetailsResponsePlanInfo';
export * from './masterDetailsResponsePlanInfoFeaturesInner';
export * from './memberContact';
export * from './modelSubscriptionBalanceResp';
export * from './note';
export * from './noteData';
export * from './noteId';
export * from './notification';
export * from './order';
export * from './orderBatch';
export * from './orderBilling';
export * from './orderIdentifiers';
export * from './orderMetaInfoValue';
export * from './orderProductsInner';
export * from './otp';
export * from './patchLoyaltyProgramPayload';
export * from './pipeline';
export * from './pipelineStage';
export * from './postContactInfo';
export * from './postContactInfoContacts';
export * from './postContactInfoContactsFailure';
export * from './postContactInfoContactsSuccess';
export * from './postSendFailed';
export * from './postSendSmsTestFailed';
export * from './putRevokeUserPermission';
export * from './putRevokeUserPermissionResponse';
export * from './putresendcancelinvitation';
export * from './putresendcancelinvitationResponse';
export * from './removeContactFromListByAll';
export * from './removeContactFromListByEmails';
export * from './removeContactFromListByExtIDs';
export * from './removeContactFromListByIDs';
export * from './removeContactFromListRequest';
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
export * from './sendSmsAsync';
export * from './sendSmtpEmail';
export * from './sendSmtpEmailAttachmentInner';
export * from './sendSmtpEmailBccInner';
export * from './sendSmtpEmailCcInner';
export * from './sendSmtpEmailMessageVersionsInner';
export * from './sendSmtpEmailReplyTo';
export * from './sendSmtpEmailSender';
export * from './sendSmtpEmailToInner';
export * from './sendTestEmail';
export * from './sendTestSms';
export * from './sendTransacSms';
export * from './sendWhatsappMessage201Response';
export * from './sendWhatsappMessageRequest';
export * from './sendWhatsappMessageTemplate';
export * from './sendWhatsappMessageText';
export * from './subAccountAppsToggleRequest';
export * from './subAccountDetailsResponse';
export * from './subAccountDetailsResponseGroupsInner';
export * from './subAccountDetailsResponsePlanInfo';
export * from './subAccountDetailsResponsePlanInfoCredits';
export * from './subAccountDetailsResponsePlanInfoCreditsEmails';
export * from './subAccountDetailsResponsePlanInfoCreditsExternalFeeds';
export * from './subAccountDetailsResponsePlanInfoCreditsSms';
export * from './subAccountDetailsResponsePlanInfoCreditsWhatsapp';
export * from './subAccountDetailsResponsePlanInfoCreditsWpSubscribers';
export * from './subAccountDetailsResponsePlanInfoFeatures';
export * from './subAccountDetailsResponsePlanInfoFeaturesInbox';
export * from './subAccountDetailsResponsePlanInfoFeaturesLandingPage';
export * from './subAccountDetailsResponsePlanInfoFeaturesSalesUsers';
export * from './subAccountDetailsResponsePlanInfoFeaturesUsers';
export * from './subAccountUpdatePlanRequest';
export * from './subAccountUpdatePlanRequestCredits';
export * from './subAccountUpdatePlanRequestFeatures';
export * from './subAccountsResponse';
export * from './subAccountsResponseSubAccountsInner';
export * from './subAccountsResponseSubAccountsInnerGroupsInner';
export * from './subAccountsUpdatePlanRequest';
export * from './subAccountsUpdatePlanRequestFeatures';
export * from './subscription';
export * from './subscriptionAggregateBalance';
export * from './subscriptionAttributedReward';
export * from './subscriptionBalances';
export * from './subscriptionHandlerInfo';
export * from './subscriptionMember';
export * from './subscriptionTier';
export * from './task';
export * from './taskList';
export * from './taskReminder';
export * from './taskTypes';
export * from './tier';
export * from './tierAccessConditionsInner';
export * from './tierForContact';
export * from './tierGroup';
export * from './tierGroupPage';
export * from './tierRequest';
export * from './tierRequestAccessConditionsInner';
export * from './tierRequestPutPayload';
export * from './tierRequestTierRewardsInner';
export * from './tierTierRewardsInner';
export * from './transaction';
export * from './transactionHistory';
export * from './transactionHistoryResp';
export * from './unauthorizedResponse';
export * from './updateAttribute';
export * from './updateAttributeEnumerationInner';
export * from './updateBalanceDefinitionPayload';
export * from './updateBalanceLimitPayload';
export * from './updateBatchContacts';
export * from './updateBatchContactsContactsInner';
export * from './updateBatchContactsModel';
export * from './updateCampaignStatus';
export * from './updateContact';
export * from './updateCouponCollection200Response';
export * from './updateCouponCollectionRequest';
export * from './updateEmailCampaign';
export * from './updateEmailCampaignEmailExpirationDate';
export * from './updateEmailCampaignRecipients';
export * from './updateEmailCampaignSender';
export * from './updateExternalFeed';
export * from './updateList';
export * from './updateLoyaltyProgramPayload';
export * from './updateSender';
export * from './updateSmsCampaign';
export * from './updateSmtpTemplate';
export * from './updateSmtpTemplateSender';
export * from './updateTierGroupRequest';
export * from './updateUserResponse';
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
import { AddContactToListByEmails } from './addContactToListByEmails';
import { AddContactToListByExtIDs } from './addContactToListByExtIDs';
import { AddContactToListByIDs } from './addContactToListByIDs';
import { AddContactToListRequest } from './addContactToListRequest';
import { AddSubscriptionMemberPayload } from './addSubscriptionMemberPayload';
import { AggregateBalance } from './aggregateBalance';
import { AuthenticateDomainModel } from './authenticateDomainModel';
import { Balance } from './balance';
import { BalanceDataPerContact } from './balanceDataPerContact';
import { BalanceDefinition } from './balanceDefinition';
import { BalanceDefinitionPage } from './balanceDefinitionPage';
import { BalanceLimit } from './balanceLimit';
import { BalanceOrder } from './balanceOrder';
import { BlockDomain } from './blockDomain';
import { Cart } from './cart';
import { CompaniesIdPatchRequest } from './companiesIdPatchRequest';
import { CompaniesImportPost200Response } from './companiesImportPost200Response';
import { CompaniesImportPost400Response } from './companiesImportPost400Response';
import { CompaniesLinkUnlinkIdPatchRequest } from './companiesLinkUnlinkIdPatchRequest';
import { CompaniesList } from './companiesList';
import { CompaniesPost200Response } from './companiesPost200Response';
import { CompaniesPostRequest } from './companiesPostRequest';
import { Company } from './company';
import { CompanyAttributesInner } from './companyAttributesInner';
import { ComponentItems } from './componentItems';
import { Configuration } from './configuration';
import { ContactBalancesResp } from './contactBalancesResp';
import { ContactErrorModel } from './contactErrorModel';
import { ConversationsAgentOnlinePingPostRequest } from './conversationsAgentOnlinePingPostRequest';
import { ConversationsMessage } from './conversationsMessage';
import { ConversationsMessageFile } from './conversationsMessageFile';
import { ConversationsMessageFileImageInfo } from './conversationsMessageFileImageInfo';
import { ConversationsMessagesIdPutRequest } from './conversationsMessagesIdPutRequest';
import { ConversationsMessagesPostRequest } from './conversationsMessagesPostRequest';
import { ConversationsPushedMessagesPostRequest } from './conversationsPushedMessagesPostRequest';
import { ConversionSourceMetrics } from './conversionSourceMetrics';
import { ConversionSourceProduct } from './conversionSourceProduct';
import { CorporateGroupDetailsResponse } from './corporateGroupDetailsResponse';
import { CorporateGroupDetailsResponseGroup } from './corporateGroupDetailsResponseGroup';
import { CorporateGroupDetailsResponseSubAccountsInner } from './corporateGroupDetailsResponseSubAccountsInner';
import { CorporateGroupDetailsResponseUsersInner } from './corporateGroupDetailsResponseUsersInner';
import { CorporateGroupIdPutRequest } from './corporateGroupIdPutRequest';
import { CorporateGroupPost201Response } from './corporateGroupPost201Response';
import { CorporateGroupPostRequest } from './corporateGroupPostRequest';
import { CorporateGroupUnlinkGroupIdSubAccountsPutRequest } from './corporateGroupUnlinkGroupIdSubAccountsPutRequest';
import { CorporateIpGet200ResponseInner } from './corporateIpGet200ResponseInner';
import { CorporateSsoTokenPostRequest } from './corporateSsoTokenPostRequest';
import { CorporateSubAccountIpAssociatePostRequest } from './corporateSubAccountIpAssociatePostRequest';
import { CorporateSubAccountIpDissociatePutRequest } from './corporateSubAccountIpDissociatePutRequest';
import { CorporateSubAccountKeyPostRequest } from './corporateSubAccountKeyPostRequest';
import { CorporateSubAccountSsoTokenPostRequest } from './corporateSubAccountSsoTokenPostRequest';
import { CorporateUserEmailPermissionsPutRequest } from './corporateUserEmailPermissionsPutRequest';
import { CorporateUserEmailPermissionsPutRequestPrivilegesInner } from './corporateUserEmailPermissionsPutRequestPrivilegesInner';
import { CorporateUserInvitationActionEmailPut200Response } from './corporateUserInvitationActionEmailPut200Response';
import { CreateApiKeyResponse } from './createApiKeyResponse';
import { CreateAttribute } from './createAttribute';
import { CreateAttributeEnumerationInner } from './createAttributeEnumerationInner';
import { CreateBalanceDefinitionPayload } from './createBalanceDefinitionPayload';
import { CreateBalanceLimitPayload } from './createBalanceLimitPayload';
import { CreateBalancePayload } from './createBalancePayload';
import { CreateCategoryModel } from './createCategoryModel';
import { CreateContact } from './createContact';
import { CreateCouponCollection201Response } from './createCouponCollection201Response';
import { CreateCouponCollectionRequest } from './createCouponCollectionRequest';
import { CreateCouponsRequest } from './createCouponsRequest';
import { CreateDoiContact } from './createDoiContact';
import { CreateDoiContactAttributesValue } from './createDoiContactAttributesValue';
import { CreateDomain } from './createDomain';
import { CreateDomainModel } from './createDomainModel';
import { CreateDomainModelDnsRecords } from './createDomainModelDnsRecords';
import { CreateDomainModelDnsRecordsDkimRecord } from './createDomainModelDnsRecordsDkimRecord';
import { CreateEmailCampaign } from './createEmailCampaign';
import { CreateEmailCampaignEmailExpirationDate } from './createEmailCampaignEmailExpirationDate';
import { CreateEmailCampaignRecipients } from './createEmailCampaignRecipients';
import { CreateEmailCampaignSender } from './createEmailCampaignSender';
import { CreateExternalFeed } from './createExternalFeed';
import { CreateExternalFeed201Response } from './createExternalFeed201Response';
import { CreateList } from './createList';
import { CreateLoyaltyProgramPayload } from './createLoyaltyProgramPayload';
import { CreateModel } from './createModel';
import { CreateOrderPayload } from './createOrderPayload';
import { CreatePaymentRequest } from './createPaymentRequest';
import { CreatePaymentResponse } from './createPaymentResponse';
import { CreateProductModel } from './createProductModel';
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
import { CreateSubscriptionPayload } from './createSubscriptionPayload';
import { CreateSubscriptionResponse } from './createSubscriptionResponse';
import { CreateTierGroupRequest } from './createTierGroupRequest';
import { CreateTransactionPayload } from './createTransactionPayload';
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
import { CrmAttributesPost200Response } from './crmAttributesPost200Response';
import { CrmAttributesPostRequest } from './crmAttributesPostRequest';
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
import { ErrorResponse } from './errorResponse';
import { Event } from './event';
import { EventContactPropertiesValue } from './eventContactPropertiesValue';
import { EventEventPropertiesValue } from './eventEventPropertiesValue';
import { EventIdentifiers } from './eventIdentifiers';
import { ExportWebhooksHistory } from './exportWebhooksHistory';
import { ExportWebhooksHistoryRequest } from './exportWebhooksHistoryRequest';
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
import { GetClient } from './getClient';
import { GetContactCampaignStats } from './getContactCampaignStats';
import { GetContactCampaignStatsClickedInner } from './getContactCampaignStatsClickedInner';
import { GetContactCampaignStatsOpenedInner } from './getContactCampaignStatsOpenedInner';
import { GetContactCampaignStatsTransacAttributesInner } from './getContactCampaignStatsTransacAttributesInner';
import { GetContactCampaignStatsUnsubscriptions } from './getContactCampaignStatsUnsubscriptions';
import { GetContactDetails } from './getContactDetails';
import { GetContactInfoIdentifierParameter } from './getContactInfoIdentifierParameter';
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
import { GetPaymentRequest } from './getPaymentRequest';
import { GetProcess } from './getProcess';
import { GetProcesses } from './getProcesses';
import { GetProductDetails } from './getProductDetails';
import { GetProducts } from './getProducts';
import { GetReports } from './getReports';
import { GetReportsReportsInner } from './getReportsReportsInner';
import { GetScheduledEmailByBatchId } from './getScheduledEmailByBatchId';
import { GetScheduledEmailByBatchIdBatchesInner } from './getScheduledEmailByBatchIdBatchesInner';
import { GetScheduledEmailById200Response } from './getScheduledEmailById200Response';
import { GetScheduledEmailByMessageId } from './getScheduledEmailByMessageId';
import { GetSegments } from './getSegments';
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
import { GetWebhook } from './getWebhook';
import { GetWebhooks } from './getWebhooks';
import { GetWhatsAppConfig } from './getWhatsAppConfig';
import { GetWhatsappCampaignOverview } from './getWhatsappCampaignOverview';
import { GetWhatsappCampaigns } from './getWhatsappCampaigns';
import { GetWhatsappCampaignsCampaignsInner } from './getWhatsappCampaignsCampaignsInner';
import { GetWhatsappEventReport } from './getWhatsappEventReport';
import { GetWhatsappEventReportEventsInner } from './getWhatsappEventReportEventsInner';
import { GetWhatsappTemplates } from './getWhatsappTemplates';
import { GetWhatsappTemplatesTemplatesInner } from './getWhatsappTemplatesTemplatesInner';
import { InviteAdminUser } from './inviteAdminUser';
import { InviteAdminUserPrivilegesInner } from './inviteAdminUserPrivilegesInner';
import { Inviteuser } from './inviteuser';
import { InviteuserPrivilegesInner } from './inviteuserPrivilegesInner';
import { InviteuserResponse } from './inviteuserResponse';
import { LoyaltyProgram } from './loyaltyProgram';
import { LoyaltyProgramPage } from './loyaltyProgramPage';
import { LoyaltyProgramValidationError } from './loyaltyProgramValidationError';
import { LoyaltyTierPage } from './loyaltyTierPage';
import { MainAttributeRewardPayload } from './mainAttributeRewardPayload';
import { MainBillingPayload } from './mainBillingPayload';
import { MainCodeCountHttpResponse } from './mainCodeCountHttpResponse';
import { MainCreateRedeemPayload } from './mainCreateRedeemPayload';
import { MainCreateRewardPayload } from './mainCreateRewardPayload';
import { MainCreateRewardResponse } from './mainCreateRewardResponse';
import { MainErrorResponse } from './mainErrorResponse';
import { MainFilter } from './mainFilter';
import { MainGenerator } from './mainGenerator';
import { MainGetContactRewardsPayload } from './mainGetContactRewardsPayload';
import { MainIdentifiersPayload } from './mainIdentifiersPayload';
import { MainLimit } from './mainLimit';
import { MainModelContactReward } from './mainModelContactReward';
import { MainModelContactRewardsResp } from './mainModelContactRewardsResp';
import { MainNodeResponse } from './mainNodeResponse';
import { MainOrderPayload } from './mainOrderPayload';
import { MainProduct } from './mainProduct';
import { MainProductPayload } from './mainProductPayload';
import { MainRedeem } from './mainRedeem';
import { MainResultParameterResponse } from './mainResultParameterResponse';
import { MainReward } from './mainReward';
import { MainRewardAttribution } from './mainRewardAttribution';
import { MainRewardConfigurations } from './mainRewardConfigurations';
import { MainRewardPage } from './mainRewardPage';
import { MainRewardPageObj } from './mainRewardPageObj';
import { MainRewardValidate } from './mainRewardValidate';
import { MainRule } from './mainRule';
import { MainRuleConditionResponse } from './mainRuleConditionResponse';
import { MainRuleEventResponse } from './mainRuleEventResponse';
import { MainRuleResultResponse } from './mainRuleResultResponse';
import { MainValidateRewardPayload } from './mainValidateRewardPayload';
import { MainValueResponse } from './mainValueResponse';
import { MainVoucherRevokePayload } from './mainVoucherRevokePayload';
import { MasterDetailsResponse } from './masterDetailsResponse';
import { MasterDetailsResponseBillingInfo } from './masterDetailsResponseBillingInfo';
import { MasterDetailsResponseBillingInfoAddress } from './masterDetailsResponseBillingInfoAddress';
import { MasterDetailsResponseBillingInfoName } from './masterDetailsResponseBillingInfoName';
import { MasterDetailsResponsePlanInfo } from './masterDetailsResponsePlanInfo';
import { MasterDetailsResponsePlanInfoFeaturesInner } from './masterDetailsResponsePlanInfoFeaturesInner';
import { MemberContact } from './memberContact';
import { ModelSubscriptionBalanceResp } from './modelSubscriptionBalanceResp';
import { Note } from './note';
import { NoteData } from './noteData';
import { NoteId } from './noteId';
import { Notification } from './notification';
import { Order } from './order';
import { OrderBatch } from './orderBatch';
import { OrderBilling } from './orderBilling';
import { OrderIdentifiers } from './orderIdentifiers';
import { OrderMetaInfoValue } from './orderMetaInfoValue';
import { OrderProductsInner } from './orderProductsInner';
import { Otp } from './otp';
import { PatchLoyaltyProgramPayload } from './patchLoyaltyProgramPayload';
import { Pipeline } from './pipeline';
import { PipelineStage } from './pipelineStage';
import { PostContactInfo } from './postContactInfo';
import { PostContactInfoContacts } from './postContactInfoContacts';
import { PostContactInfoContactsFailure } from './postContactInfoContactsFailure';
import { PostContactInfoContactsSuccess } from './postContactInfoContactsSuccess';
import { PostSendFailed } from './postSendFailed';
import { PostSendSmsTestFailed } from './postSendSmsTestFailed';
import { PutRevokeUserPermission } from './putRevokeUserPermission';
import { PutRevokeUserPermissionResponse } from './putRevokeUserPermissionResponse';
import { Putresendcancelinvitation } from './putresendcancelinvitation';
import { PutresendcancelinvitationResponse } from './putresendcancelinvitationResponse';
import { RemoveContactFromListByAll } from './removeContactFromListByAll';
import { RemoveContactFromListByEmails } from './removeContactFromListByEmails';
import { RemoveContactFromListByExtIDs } from './removeContactFromListByExtIDs';
import { RemoveContactFromListByIDs } from './removeContactFromListByIDs';
import { RemoveContactFromListRequest } from './removeContactFromListRequest';
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
import { SendSmsAsync } from './sendSmsAsync';
import { SendSmtpEmail } from './sendSmtpEmail';
import { SendSmtpEmailAttachmentInner } from './sendSmtpEmailAttachmentInner';
import { SendSmtpEmailBccInner } from './sendSmtpEmailBccInner';
import { SendSmtpEmailCcInner } from './sendSmtpEmailCcInner';
import { SendSmtpEmailMessageVersionsInner } from './sendSmtpEmailMessageVersionsInner';
import { SendSmtpEmailReplyTo } from './sendSmtpEmailReplyTo';
import { SendSmtpEmailSender } from './sendSmtpEmailSender';
import { SendSmtpEmailToInner } from './sendSmtpEmailToInner';
import { SendTestEmail } from './sendTestEmail';
import { SendTestSms } from './sendTestSms';
import { SendTransacSms } from './sendTransacSms';
import { SendWhatsappMessage201Response } from './sendWhatsappMessage201Response';
import { SendWhatsappMessageRequest } from './sendWhatsappMessageRequest';
import { SendWhatsappMessageTemplate } from './sendWhatsappMessageTemplate';
import { SendWhatsappMessageText } from './sendWhatsappMessageText';
import { SubAccountAppsToggleRequest } from './subAccountAppsToggleRequest';
import { SubAccountDetailsResponse } from './subAccountDetailsResponse';
import { SubAccountDetailsResponseGroupsInner } from './subAccountDetailsResponseGroupsInner';
import { SubAccountDetailsResponsePlanInfo } from './subAccountDetailsResponsePlanInfo';
import { SubAccountDetailsResponsePlanInfoCredits } from './subAccountDetailsResponsePlanInfoCredits';
import { SubAccountDetailsResponsePlanInfoCreditsEmails } from './subAccountDetailsResponsePlanInfoCreditsEmails';
import { SubAccountDetailsResponsePlanInfoCreditsExternalFeeds } from './subAccountDetailsResponsePlanInfoCreditsExternalFeeds';
import { SubAccountDetailsResponsePlanInfoCreditsSms } from './subAccountDetailsResponsePlanInfoCreditsSms';
import { SubAccountDetailsResponsePlanInfoCreditsWhatsapp } from './subAccountDetailsResponsePlanInfoCreditsWhatsapp';
import { SubAccountDetailsResponsePlanInfoCreditsWpSubscribers } from './subAccountDetailsResponsePlanInfoCreditsWpSubscribers';
import { SubAccountDetailsResponsePlanInfoFeatures } from './subAccountDetailsResponsePlanInfoFeatures';
import { SubAccountDetailsResponsePlanInfoFeaturesInbox } from './subAccountDetailsResponsePlanInfoFeaturesInbox';
import { SubAccountDetailsResponsePlanInfoFeaturesLandingPage } from './subAccountDetailsResponsePlanInfoFeaturesLandingPage';
import { SubAccountDetailsResponsePlanInfoFeaturesSalesUsers } from './subAccountDetailsResponsePlanInfoFeaturesSalesUsers';
import { SubAccountDetailsResponsePlanInfoFeaturesUsers } from './subAccountDetailsResponsePlanInfoFeaturesUsers';
import { SubAccountUpdatePlanRequest } from './subAccountUpdatePlanRequest';
import { SubAccountUpdatePlanRequestCredits } from './subAccountUpdatePlanRequestCredits';
import { SubAccountUpdatePlanRequestFeatures } from './subAccountUpdatePlanRequestFeatures';
import { SubAccountsResponse } from './subAccountsResponse';
import { SubAccountsResponseSubAccountsInner } from './subAccountsResponseSubAccountsInner';
import { SubAccountsResponseSubAccountsInnerGroupsInner } from './subAccountsResponseSubAccountsInnerGroupsInner';
import { SubAccountsUpdatePlanRequest } from './subAccountsUpdatePlanRequest';
import { SubAccountsUpdatePlanRequestFeatures } from './subAccountsUpdatePlanRequestFeatures';
import { Subscription } from './subscription';
import { SubscriptionAggregateBalance } from './subscriptionAggregateBalance';
import { SubscriptionAttributedReward } from './subscriptionAttributedReward';
import { SubscriptionBalances } from './subscriptionBalances';
import { SubscriptionHandlerInfo } from './subscriptionHandlerInfo';
import { SubscriptionMember } from './subscriptionMember';
import { SubscriptionTier } from './subscriptionTier';
import { Task } from './task';
import { TaskList } from './taskList';
import { TaskReminder } from './taskReminder';
import { TaskTypes } from './taskTypes';
import { Tier } from './tier';
import { TierAccessConditionsInner } from './tierAccessConditionsInner';
import { TierForContact } from './tierForContact';
import { TierGroup } from './tierGroup';
import { TierGroupPage } from './tierGroupPage';
import { TierRequest } from './tierRequest';
import { TierRequestAccessConditionsInner } from './tierRequestAccessConditionsInner';
import { TierRequestPutPayload } from './tierRequestPutPayload';
import { TierRequestTierRewardsInner } from './tierRequestTierRewardsInner';
import { TierTierRewardsInner } from './tierTierRewardsInner';
import { Transaction } from './transaction';
import { TransactionHistory } from './transactionHistory';
import { TransactionHistoryResp } from './transactionHistoryResp';
import { UnauthorizedResponse } from './unauthorizedResponse';
import { UpdateAttribute } from './updateAttribute';
import { UpdateAttributeEnumerationInner } from './updateAttributeEnumerationInner';
import { UpdateBalanceDefinitionPayload } from './updateBalanceDefinitionPayload';
import { UpdateBalanceLimitPayload } from './updateBalanceLimitPayload';
import { UpdateBatchContacts } from './updateBatchContacts';
import { UpdateBatchContactsContactsInner } from './updateBatchContactsContactsInner';
import { UpdateBatchContactsModel } from './updateBatchContactsModel';
import { UpdateCampaignStatus } from './updateCampaignStatus';
import { UpdateContact } from './updateContact';
import { UpdateCouponCollection200Response } from './updateCouponCollection200Response';
import { UpdateCouponCollectionRequest } from './updateCouponCollectionRequest';
import { UpdateEmailCampaign } from './updateEmailCampaign';
import { UpdateEmailCampaignEmailExpirationDate } from './updateEmailCampaignEmailExpirationDate';
import { UpdateEmailCampaignRecipients } from './updateEmailCampaignRecipients';
import { UpdateEmailCampaignSender } from './updateEmailCampaignSender';
import { UpdateExternalFeed } from './updateExternalFeed';
import { UpdateList } from './updateList';
import { UpdateLoyaltyProgramPayload } from './updateLoyaltyProgramPayload';
import { UpdateSender } from './updateSender';
import { UpdateSmsCampaign } from './updateSmsCampaign';
import { UpdateSmtpTemplate } from './updateSmtpTemplate';
import { UpdateSmtpTemplateSender } from './updateSmtpTemplateSender';
import { UpdateTierGroupRequest } from './updateTierGroupRequest';
import { UpdateUserResponse } from './updateUserResponse';
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
        "BalanceDefinition.BalanceAvailabilityDurationModifierEnum": BalanceDefinition.BalanceAvailabilityDurationModifierEnum,
        "Cart.CurrencyEnum": Cart.CurrencyEnum,
        "ContactErrorModel.CodeEnum": ContactErrorModel.CodeEnum,
        "ConversationsMessage.TypeEnum": ConversationsMessage.TypeEnum,
        "ConversionSourceMetrics.ConversionSourceEnum": ConversionSourceMetrics.ConversionSourceEnum,
        "CorporateSubAccountSsoTokenPostRequest.TargetEnum": CorporateSubAccountSsoTokenPostRequest.TargetEnum,
        "CorporateUserEmailPermissionsPutRequestPrivilegesInner.FeatureEnum": CorporateUserEmailPermissionsPutRequestPrivilegesInner.FeatureEnum,
        "CorporateUserEmailPermissionsPutRequestPrivilegesInner.PermissionsEnum": CorporateUserEmailPermissionsPutRequestPrivilegesInner.PermissionsEnum,
        "CreateAttribute.TypeEnum": CreateAttribute.TypeEnum,
        "CreateBalanceDefinitionPayload.BalanceAvailabilityDurationModifierEnum": CreateBalanceDefinitionPayload.BalanceAvailabilityDurationModifierEnum,
        "CreateBalanceDefinitionPayload.BalanceAvailabilityDurationUnitEnum": CreateBalanceDefinitionPayload.BalanceAvailabilityDurationUnitEnum,
        "CreateBalanceDefinitionPayload.BalanceOptionAmountOvertakingStrategyEnum": CreateBalanceDefinitionPayload.BalanceOptionAmountOvertakingStrategyEnum,
        "CreateBalanceDefinitionPayload.BalanceOptionCreditRoundingEnum": CreateBalanceDefinitionPayload.BalanceOptionCreditRoundingEnum,
        "CreateBalanceDefinitionPayload.BalanceOptionDebitRoundingEnum": CreateBalanceDefinitionPayload.BalanceOptionDebitRoundingEnum,
        "CreateBalanceDefinitionPayload.UnitEnum": CreateBalanceDefinitionPayload.UnitEnum,
        "CreateBalanceLimitPayload.ConstraintTypeEnum": CreateBalanceLimitPayload.ConstraintTypeEnum,
        "CreateBalanceLimitPayload.DurationUnitEnum": CreateBalanceLimitPayload.DurationUnitEnum,
        "CreateBalanceLimitPayload.TransactionTypeEnum": CreateBalanceLimitPayload.TransactionTypeEnum,
        "CreateEmailCampaign.WinnerCriteriaEnum": CreateEmailCampaign.WinnerCriteriaEnum,
        "CreateEmailCampaignEmailExpirationDate.UnitEnum": CreateEmailCampaignEmailExpirationDate.UnitEnum,
        "CreateExternalFeed.AuthTypeEnum": CreateExternalFeed.AuthTypeEnum,
        "CreateSubAccount.LanguageEnum": CreateSubAccount.LanguageEnum,
        "CreateTierGroupRequest.UpgradeStrategyEnum": CreateTierGroupRequest.UpgradeStrategyEnum,
        "CreateTierGroupRequest.DowngradeStrategyEnum": CreateTierGroupRequest.DowngradeStrategyEnum,
        "CreateWebhook.EventsEnum": CreateWebhook.EventsEnum,
        "CreateWebhook.TypeEnum": CreateWebhook.TypeEnum,
        "CreateWebhook.ChannelEnum": CreateWebhook.ChannelEnum,
        "CreateWhatsAppTemplate.CategoryEnum": CreateWhatsAppTemplate.CategoryEnum,
        "CreateWhatsAppTemplate.SourceEnum": CreateWhatsAppTemplate.SourceEnum,
        "CrmAttributesPostRequest.AttributeTypeEnum": CrmAttributesPostRequest.AttributeTypeEnum,
        "CrmAttributesPostRequest.ObjectTypeEnum": CrmAttributesPostRequest.ObjectTypeEnum,
        "EcommerceAttributionMetricsConversionSourceConversionSourceIdGet200Response.ConversionSourceEnum": EcommerceAttributionMetricsConversionSourceConversionSourceIdGet200Response.ConversionSourceEnum,
        "EmailExportRecipients.RecipientsTypeEnum": EmailExportRecipients.RecipientsTypeEnum,
        "ErrorModel.CodeEnum": ErrorModel.CodeEnum,
        "ExportWebhooksHistory.TypeEnum": ExportWebhooksHistory.TypeEnum,
        "ExportWebhooksHistory.EventEnum": ExportWebhooksHistory.EventEnum,
        "ExportWebhooksHistoryRequest.TypeEnum": ExportWebhooksHistoryRequest.TypeEnum,
        "ExportWebhooksHistoryRequest.EventEnum": ExportWebhooksHistoryRequest.EventEnum,
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
        "GetScheduledEmailById200Response.StatusEnum": GetScheduledEmailById200Response.StatusEnum,
        "GetScheduledEmailByMessageId.StatusEnum": GetScheduledEmailByMessageId.StatusEnum,
        "GetSmsCampaign.StatusEnum": GetSmsCampaign.StatusEnum,
        "GetSmsCampaignOverview.StatusEnum": GetSmsCampaignOverview.StatusEnum,
        "GetSmsCampaignsCampaignsInner.StatusEnum": GetSmsCampaignsCampaignsInner.StatusEnum,
        "GetSmsEventReportEventsInner.EventEnum": GetSmsEventReportEventsInner.EventEnum,
        "GetTransacBlockedContactsContactsInnerReason.CodeEnum": GetTransacBlockedContactsContactsInnerReason.CodeEnum,
        "GetWebhook.TypeEnum": GetWebhook.TypeEnum,
        "GetWebhook.ChannelEnum": GetWebhook.ChannelEnum,
        "GetWhatsAppConfig.PhoneNumberQualityEnum": GetWhatsAppConfig.PhoneNumberQualityEnum,
        "GetWhatsAppConfig.WhatsappBusinessAccountStatusEnum": GetWhatsAppConfig.WhatsappBusinessAccountStatusEnum,
        "GetWhatsAppConfig.PhoneNumberNameStatusEnum": GetWhatsAppConfig.PhoneNumberNameStatusEnum,
        "GetWhatsappCampaignOverview.CampaignStatusEnum": GetWhatsappCampaignOverview.CampaignStatusEnum,
        "GetWhatsappCampaignsCampaignsInner.CampaignStatusEnum": GetWhatsappCampaignsCampaignsInner.CampaignStatusEnum,
        "GetWhatsappEventReportEventsInner.EventEnum": GetWhatsappEventReportEventsInner.EventEnum,
        "InviteAdminUserPrivilegesInner.FeatureEnum": InviteAdminUserPrivilegesInner.FeatureEnum,
        "InviteAdminUserPrivilegesInner.PermissionsEnum": InviteAdminUserPrivilegesInner.PermissionsEnum,
        "InviteuserPrivilegesInner.FeatureEnum": InviteuserPrivilegesInner.FeatureEnum,
        "InviteuserPrivilegesInner.PermissionsEnum": InviteuserPrivilegesInner.PermissionsEnum,
        "LoyaltyProgram.StateEnum": LoyaltyProgram.StateEnum,
        "MainGetContactRewardsPayload.SortEnum": MainGetContactRewardsPayload.SortEnum,
        "MainGetContactRewardsPayload.SortFieldEnum": MainGetContactRewardsPayload.SortFieldEnum,
        "MainReward.ExpirationModifierEnum": MainReward.ExpirationModifierEnum,
        "MasterDetailsResponsePlanInfo.PlanPeriodEnum": MasterDetailsResponsePlanInfo.PlanPeriodEnum,
        "Notification.ChannelEnum": Notification.ChannelEnum,
        "RequestContactExportCustomContactFilter.ActionForContactsEnum": RequestContactExportCustomContactFilter.ActionForContactsEnum,
        "RequestContactExportCustomContactFilter.ActionForEmailCampaignsEnum": RequestContactExportCustomContactFilter.ActionForEmailCampaignsEnum,
        "RequestContactExportCustomContactFilter.ActionForSmsCampaignsEnum": RequestContactExportCustomContactFilter.ActionForSmsCampaignsEnum,
        "RequestSmsRecipientExport.RecipientsTypeEnum": RequestSmsRecipientExport.RecipientsTypeEnum,
        "SendReport.LanguageEnum": SendReport.LanguageEnum,
        "SendTransacSms.TypeEnum": SendTransacSms.TypeEnum,
        "TaskReminder.UnitEnum": TaskReminder.UnitEnum,
        "TaskReminder.TypesEnum": TaskReminder.TypesEnum,
        "TierGroup.UpgradeStrategyEnum": TierGroup.UpgradeStrategyEnum,
        "TierGroup.DowngradeStrategyEnum": TierGroup.DowngradeStrategyEnum,
        "UpdateBalanceDefinitionPayload.BalanceAvailabilityDurationModifierEnum": UpdateBalanceDefinitionPayload.BalanceAvailabilityDurationModifierEnum,
        "UpdateBalanceDefinitionPayload.BalanceAvailabilityDurationUnitEnum": UpdateBalanceDefinitionPayload.BalanceAvailabilityDurationUnitEnum,
        "UpdateBalanceDefinitionPayload.BalanceOptionAmountOvertakingStrategyEnum": UpdateBalanceDefinitionPayload.BalanceOptionAmountOvertakingStrategyEnum,
        "UpdateBalanceDefinitionPayload.BalanceOptionCreditRoundingEnum": UpdateBalanceDefinitionPayload.BalanceOptionCreditRoundingEnum,
        "UpdateBalanceDefinitionPayload.BalanceOptionDebitRoundingEnum": UpdateBalanceDefinitionPayload.BalanceOptionDebitRoundingEnum,
        "UpdateBalanceDefinitionPayload.UnitEnum": UpdateBalanceDefinitionPayload.UnitEnum,
        "UpdateBalanceLimitPayload.ConstraintTypeEnum": UpdateBalanceLimitPayload.ConstraintTypeEnum,
        "UpdateBalanceLimitPayload.DurationUnitEnum": UpdateBalanceLimitPayload.DurationUnitEnum,
        "UpdateBalanceLimitPayload.TransactionTypeEnum": UpdateBalanceLimitPayload.TransactionTypeEnum,
        "UpdateCampaignStatus.StatusEnum": UpdateCampaignStatus.StatusEnum,
        "UpdateEmailCampaign.WinnerCriteriaEnum": UpdateEmailCampaign.WinnerCriteriaEnum,
        "UpdateEmailCampaignEmailExpirationDate.UnitEnum": UpdateEmailCampaignEmailExpirationDate.UnitEnum,
        "UpdateExternalFeed.AuthTypeEnum": UpdateExternalFeed.AuthTypeEnum,
        "UpdateTierGroupRequest.UpgradeStrategyEnum": UpdateTierGroupRequest.UpgradeStrategyEnum,
        "UpdateTierGroupRequest.DowngradeStrategyEnum": UpdateTierGroupRequest.DowngradeStrategyEnum,
        "UpdateWebhook.EventsEnum": UpdateWebhook.EventsEnum,
        "UpdateWhatsAppCampaign.CampaignStatusEnum": UpdateWhatsAppCampaign.CampaignStatusEnum,
}

let typeMap: {[index: string]: any} = {
    "AbTestCampaignResult": AbTestCampaignResult,
    "AbTestCampaignResultClickedLinks": AbTestCampaignResultClickedLinks,
    "AbTestCampaignResultStatistics": AbTestCampaignResultStatistics,
    "AbTestVersionClicksInner": AbTestVersionClicksInner,
    "AbTestVersionStats": AbTestVersionStats,
    "AddContactToListByEmails": AddContactToListByEmails,
    "AddContactToListByExtIDs": AddContactToListByExtIDs,
    "AddContactToListByIDs": AddContactToListByIDs,
    "AddContactToListRequest": AddContactToListRequest,
    "AddSubscriptionMemberPayload": AddSubscriptionMemberPayload,
    "AggregateBalance": AggregateBalance,
    "AuthenticateDomainModel": AuthenticateDomainModel,
    "Balance": Balance,
    "BalanceDataPerContact": BalanceDataPerContact,
    "BalanceDefinition": BalanceDefinition,
    "BalanceDefinitionPage": BalanceDefinitionPage,
    "BalanceLimit": BalanceLimit,
    "BalanceOrder": BalanceOrder,
    "BlockDomain": BlockDomain,
    "Cart": Cart,
    "CompaniesIdPatchRequest": CompaniesIdPatchRequest,
    "CompaniesImportPost200Response": CompaniesImportPost200Response,
    "CompaniesImportPost400Response": CompaniesImportPost400Response,
    "CompaniesLinkUnlinkIdPatchRequest": CompaniesLinkUnlinkIdPatchRequest,
    "CompaniesList": CompaniesList,
    "CompaniesPost200Response": CompaniesPost200Response,
    "CompaniesPostRequest": CompaniesPostRequest,
    "Company": Company,
    "CompanyAttributesInner": CompanyAttributesInner,
    "ComponentItems": ComponentItems,
    "Configuration": Configuration,
    "ContactBalancesResp": ContactBalancesResp,
    "ContactErrorModel": ContactErrorModel,
    "ConversationsAgentOnlinePingPostRequest": ConversationsAgentOnlinePingPostRequest,
    "ConversationsMessage": ConversationsMessage,
    "ConversationsMessageFile": ConversationsMessageFile,
    "ConversationsMessageFileImageInfo": ConversationsMessageFileImageInfo,
    "ConversationsMessagesIdPutRequest": ConversationsMessagesIdPutRequest,
    "ConversationsMessagesPostRequest": ConversationsMessagesPostRequest,
    "ConversationsPushedMessagesPostRequest": ConversationsPushedMessagesPostRequest,
    "ConversionSourceMetrics": ConversionSourceMetrics,
    "ConversionSourceProduct": ConversionSourceProduct,
    "CorporateGroupDetailsResponse": CorporateGroupDetailsResponse,
    "CorporateGroupDetailsResponseGroup": CorporateGroupDetailsResponseGroup,
    "CorporateGroupDetailsResponseSubAccountsInner": CorporateGroupDetailsResponseSubAccountsInner,
    "CorporateGroupDetailsResponseUsersInner": CorporateGroupDetailsResponseUsersInner,
    "CorporateGroupIdPutRequest": CorporateGroupIdPutRequest,
    "CorporateGroupPost201Response": CorporateGroupPost201Response,
    "CorporateGroupPostRequest": CorporateGroupPostRequest,
    "CorporateGroupUnlinkGroupIdSubAccountsPutRequest": CorporateGroupUnlinkGroupIdSubAccountsPutRequest,
    "CorporateIpGet200ResponseInner": CorporateIpGet200ResponseInner,
    "CorporateSsoTokenPostRequest": CorporateSsoTokenPostRequest,
    "CorporateSubAccountIpAssociatePostRequest": CorporateSubAccountIpAssociatePostRequest,
    "CorporateSubAccountIpDissociatePutRequest": CorporateSubAccountIpDissociatePutRequest,
    "CorporateSubAccountKeyPostRequest": CorporateSubAccountKeyPostRequest,
    "CorporateSubAccountSsoTokenPostRequest": CorporateSubAccountSsoTokenPostRequest,
    "CorporateUserEmailPermissionsPutRequest": CorporateUserEmailPermissionsPutRequest,
    "CorporateUserEmailPermissionsPutRequestPrivilegesInner": CorporateUserEmailPermissionsPutRequestPrivilegesInner,
    "CorporateUserInvitationActionEmailPut200Response": CorporateUserInvitationActionEmailPut200Response,
    "CreateApiKeyResponse": CreateApiKeyResponse,
    "CreateAttribute": CreateAttribute,
    "CreateAttributeEnumerationInner": CreateAttributeEnumerationInner,
    "CreateBalanceDefinitionPayload": CreateBalanceDefinitionPayload,
    "CreateBalanceLimitPayload": CreateBalanceLimitPayload,
    "CreateBalancePayload": CreateBalancePayload,
    "CreateCategoryModel": CreateCategoryModel,
    "CreateContact": CreateContact,
    "CreateCouponCollection201Response": CreateCouponCollection201Response,
    "CreateCouponCollectionRequest": CreateCouponCollectionRequest,
    "CreateCouponsRequest": CreateCouponsRequest,
    "CreateDoiContact": CreateDoiContact,
    "CreateDoiContactAttributesValue": CreateDoiContactAttributesValue,
    "CreateDomain": CreateDomain,
    "CreateDomainModel": CreateDomainModel,
    "CreateDomainModelDnsRecords": CreateDomainModelDnsRecords,
    "CreateDomainModelDnsRecordsDkimRecord": CreateDomainModelDnsRecordsDkimRecord,
    "CreateEmailCampaign": CreateEmailCampaign,
    "CreateEmailCampaignEmailExpirationDate": CreateEmailCampaignEmailExpirationDate,
    "CreateEmailCampaignRecipients": CreateEmailCampaignRecipients,
    "CreateEmailCampaignSender": CreateEmailCampaignSender,
    "CreateExternalFeed": CreateExternalFeed,
    "CreateExternalFeed201Response": CreateExternalFeed201Response,
    "CreateList": CreateList,
    "CreateLoyaltyProgramPayload": CreateLoyaltyProgramPayload,
    "CreateModel": CreateModel,
    "CreateOrderPayload": CreateOrderPayload,
    "CreatePaymentRequest": CreatePaymentRequest,
    "CreatePaymentResponse": CreatePaymentResponse,
    "CreateProductModel": CreateProductModel,
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
    "CreateSubscriptionPayload": CreateSubscriptionPayload,
    "CreateSubscriptionResponse": CreateSubscriptionResponse,
    "CreateTierGroupRequest": CreateTierGroupRequest,
    "CreateTransactionPayload": CreateTransactionPayload,
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
    "CrmAttributesPost200Response": CrmAttributesPost200Response,
    "CrmAttributesPostRequest": CrmAttributesPostRequest,
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
    "ErrorResponse": ErrorResponse,
    "Event": Event,
    "EventContactPropertiesValue": EventContactPropertiesValue,
    "EventEventPropertiesValue": EventEventPropertiesValue,
    "EventIdentifiers": EventIdentifiers,
    "ExportWebhooksHistory": ExportWebhooksHistory,
    "ExportWebhooksHistoryRequest": ExportWebhooksHistoryRequest,
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
    "GetClient": GetClient,
    "GetContactCampaignStats": GetContactCampaignStats,
    "GetContactCampaignStatsClickedInner": GetContactCampaignStatsClickedInner,
    "GetContactCampaignStatsOpenedInner": GetContactCampaignStatsOpenedInner,
    "GetContactCampaignStatsTransacAttributesInner": GetContactCampaignStatsTransacAttributesInner,
    "GetContactCampaignStatsUnsubscriptions": GetContactCampaignStatsUnsubscriptions,
    "GetContactDetails": GetContactDetails,
    "GetContactInfoIdentifierParameter": GetContactInfoIdentifierParameter,
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
    "GetPaymentRequest": GetPaymentRequest,
    "GetProcess": GetProcess,
    "GetProcesses": GetProcesses,
    "GetProductDetails": GetProductDetails,
    "GetProducts": GetProducts,
    "GetReports": GetReports,
    "GetReportsReportsInner": GetReportsReportsInner,
    "GetScheduledEmailByBatchId": GetScheduledEmailByBatchId,
    "GetScheduledEmailByBatchIdBatchesInner": GetScheduledEmailByBatchIdBatchesInner,
    "GetScheduledEmailById200Response": GetScheduledEmailById200Response,
    "GetScheduledEmailByMessageId": GetScheduledEmailByMessageId,
    "GetSegments": GetSegments,
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
    "GetWebhook": GetWebhook,
    "GetWebhooks": GetWebhooks,
    "GetWhatsAppConfig": GetWhatsAppConfig,
    "GetWhatsappCampaignOverview": GetWhatsappCampaignOverview,
    "GetWhatsappCampaigns": GetWhatsappCampaigns,
    "GetWhatsappCampaignsCampaignsInner": GetWhatsappCampaignsCampaignsInner,
    "GetWhatsappEventReport": GetWhatsappEventReport,
    "GetWhatsappEventReportEventsInner": GetWhatsappEventReportEventsInner,
    "GetWhatsappTemplates": GetWhatsappTemplates,
    "GetWhatsappTemplatesTemplatesInner": GetWhatsappTemplatesTemplatesInner,
    "InviteAdminUser": InviteAdminUser,
    "InviteAdminUserPrivilegesInner": InviteAdminUserPrivilegesInner,
    "Inviteuser": Inviteuser,
    "InviteuserPrivilegesInner": InviteuserPrivilegesInner,
    "InviteuserResponse": InviteuserResponse,
    "LoyaltyProgram": LoyaltyProgram,
    "LoyaltyProgramPage": LoyaltyProgramPage,
    "LoyaltyProgramValidationError": LoyaltyProgramValidationError,
    "LoyaltyTierPage": LoyaltyTierPage,
    "MainAttributeRewardPayload": MainAttributeRewardPayload,
    "MainBillingPayload": MainBillingPayload,
    "MainCodeCountHttpResponse": MainCodeCountHttpResponse,
    "MainCreateRedeemPayload": MainCreateRedeemPayload,
    "MainCreateRewardPayload": MainCreateRewardPayload,
    "MainCreateRewardResponse": MainCreateRewardResponse,
    "MainErrorResponse": MainErrorResponse,
    "MainFilter": MainFilter,
    "MainGenerator": MainGenerator,
    "MainGetContactRewardsPayload": MainGetContactRewardsPayload,
    "MainIdentifiersPayload": MainIdentifiersPayload,
    "MainLimit": MainLimit,
    "MainModelContactReward": MainModelContactReward,
    "MainModelContactRewardsResp": MainModelContactRewardsResp,
    "MainNodeResponse": MainNodeResponse,
    "MainOrderPayload": MainOrderPayload,
    "MainProduct": MainProduct,
    "MainProductPayload": MainProductPayload,
    "MainRedeem": MainRedeem,
    "MainResultParameterResponse": MainResultParameterResponse,
    "MainReward": MainReward,
    "MainRewardAttribution": MainRewardAttribution,
    "MainRewardConfigurations": MainRewardConfigurations,
    "MainRewardPage": MainRewardPage,
    "MainRewardPageObj": MainRewardPageObj,
    "MainRewardValidate": MainRewardValidate,
    "MainRule": MainRule,
    "MainRuleConditionResponse": MainRuleConditionResponse,
    "MainRuleEventResponse": MainRuleEventResponse,
    "MainRuleResultResponse": MainRuleResultResponse,
    "MainValidateRewardPayload": MainValidateRewardPayload,
    "MainValueResponse": MainValueResponse,
    "MainVoucherRevokePayload": MainVoucherRevokePayload,
    "MasterDetailsResponse": MasterDetailsResponse,
    "MasterDetailsResponseBillingInfo": MasterDetailsResponseBillingInfo,
    "MasterDetailsResponseBillingInfoAddress": MasterDetailsResponseBillingInfoAddress,
    "MasterDetailsResponseBillingInfoName": MasterDetailsResponseBillingInfoName,
    "MasterDetailsResponsePlanInfo": MasterDetailsResponsePlanInfo,
    "MasterDetailsResponsePlanInfoFeaturesInner": MasterDetailsResponsePlanInfoFeaturesInner,
    "MemberContact": MemberContact,
    "ModelSubscriptionBalanceResp": ModelSubscriptionBalanceResp,
    "Note": Note,
    "NoteData": NoteData,
    "NoteId": NoteId,
    "Notification": Notification,
    "Order": Order,
    "OrderBatch": OrderBatch,
    "OrderBilling": OrderBilling,
    "OrderIdentifiers": OrderIdentifiers,
    "OrderMetaInfoValue": OrderMetaInfoValue,
    "OrderProductsInner": OrderProductsInner,
    "Otp": Otp,
    "PatchLoyaltyProgramPayload": PatchLoyaltyProgramPayload,
    "Pipeline": Pipeline,
    "PipelineStage": PipelineStage,
    "PostContactInfo": PostContactInfo,
    "PostContactInfoContacts": PostContactInfoContacts,
    "PostContactInfoContactsFailure": PostContactInfoContactsFailure,
    "PostContactInfoContactsSuccess": PostContactInfoContactsSuccess,
    "PostSendFailed": PostSendFailed,
    "PostSendSmsTestFailed": PostSendSmsTestFailed,
    "PutRevokeUserPermission": PutRevokeUserPermission,
    "PutRevokeUserPermissionResponse": PutRevokeUserPermissionResponse,
    "Putresendcancelinvitation": Putresendcancelinvitation,
    "PutresendcancelinvitationResponse": PutresendcancelinvitationResponse,
    "RemoveContactFromListByAll": RemoveContactFromListByAll,
    "RemoveContactFromListByEmails": RemoveContactFromListByEmails,
    "RemoveContactFromListByExtIDs": RemoveContactFromListByExtIDs,
    "RemoveContactFromListByIDs": RemoveContactFromListByIDs,
    "RemoveContactFromListRequest": RemoveContactFromListRequest,
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
    "SendSmsAsync": SendSmsAsync,
    "SendSmtpEmail": SendSmtpEmail,
    "SendSmtpEmailAttachmentInner": SendSmtpEmailAttachmentInner,
    "SendSmtpEmailBccInner": SendSmtpEmailBccInner,
    "SendSmtpEmailCcInner": SendSmtpEmailCcInner,
    "SendSmtpEmailMessageVersionsInner": SendSmtpEmailMessageVersionsInner,
    "SendSmtpEmailReplyTo": SendSmtpEmailReplyTo,
    "SendSmtpEmailSender": SendSmtpEmailSender,
    "SendSmtpEmailToInner": SendSmtpEmailToInner,
    "SendTestEmail": SendTestEmail,
    "SendTestSms": SendTestSms,
    "SendTransacSms": SendTransacSms,
    "SendWhatsappMessage201Response": SendWhatsappMessage201Response,
    "SendWhatsappMessageRequest": SendWhatsappMessageRequest,
    "SendWhatsappMessageTemplate": SendWhatsappMessageTemplate,
    "SendWhatsappMessageText": SendWhatsappMessageText,
    "SubAccountAppsToggleRequest": SubAccountAppsToggleRequest,
    "SubAccountDetailsResponse": SubAccountDetailsResponse,
    "SubAccountDetailsResponseGroupsInner": SubAccountDetailsResponseGroupsInner,
    "SubAccountDetailsResponsePlanInfo": SubAccountDetailsResponsePlanInfo,
    "SubAccountDetailsResponsePlanInfoCredits": SubAccountDetailsResponsePlanInfoCredits,
    "SubAccountDetailsResponsePlanInfoCreditsEmails": SubAccountDetailsResponsePlanInfoCreditsEmails,
    "SubAccountDetailsResponsePlanInfoCreditsExternalFeeds": SubAccountDetailsResponsePlanInfoCreditsExternalFeeds,
    "SubAccountDetailsResponsePlanInfoCreditsSms": SubAccountDetailsResponsePlanInfoCreditsSms,
    "SubAccountDetailsResponsePlanInfoCreditsWhatsapp": SubAccountDetailsResponsePlanInfoCreditsWhatsapp,
    "SubAccountDetailsResponsePlanInfoCreditsWpSubscribers": SubAccountDetailsResponsePlanInfoCreditsWpSubscribers,
    "SubAccountDetailsResponsePlanInfoFeatures": SubAccountDetailsResponsePlanInfoFeatures,
    "SubAccountDetailsResponsePlanInfoFeaturesInbox": SubAccountDetailsResponsePlanInfoFeaturesInbox,
    "SubAccountDetailsResponsePlanInfoFeaturesLandingPage": SubAccountDetailsResponsePlanInfoFeaturesLandingPage,
    "SubAccountDetailsResponsePlanInfoFeaturesSalesUsers": SubAccountDetailsResponsePlanInfoFeaturesSalesUsers,
    "SubAccountDetailsResponsePlanInfoFeaturesUsers": SubAccountDetailsResponsePlanInfoFeaturesUsers,
    "SubAccountUpdatePlanRequest": SubAccountUpdatePlanRequest,
    "SubAccountUpdatePlanRequestCredits": SubAccountUpdatePlanRequestCredits,
    "SubAccountUpdatePlanRequestFeatures": SubAccountUpdatePlanRequestFeatures,
    "SubAccountsResponse": SubAccountsResponse,
    "SubAccountsResponseSubAccountsInner": SubAccountsResponseSubAccountsInner,
    "SubAccountsResponseSubAccountsInnerGroupsInner": SubAccountsResponseSubAccountsInnerGroupsInner,
    "SubAccountsUpdatePlanRequest": SubAccountsUpdatePlanRequest,
    "SubAccountsUpdatePlanRequestFeatures": SubAccountsUpdatePlanRequestFeatures,
    "Subscription": Subscription,
    "SubscriptionAggregateBalance": SubscriptionAggregateBalance,
    "SubscriptionAttributedReward": SubscriptionAttributedReward,
    "SubscriptionBalances": SubscriptionBalances,
    "SubscriptionHandlerInfo": SubscriptionHandlerInfo,
    "SubscriptionMember": SubscriptionMember,
    "SubscriptionTier": SubscriptionTier,
    "Task": Task,
    "TaskList": TaskList,
    "TaskReminder": TaskReminder,
    "TaskTypes": TaskTypes,
    "Tier": Tier,
    "TierAccessConditionsInner": TierAccessConditionsInner,
    "TierForContact": TierForContact,
    "TierGroup": TierGroup,
    "TierGroupPage": TierGroupPage,
    "TierRequest": TierRequest,
    "TierRequestAccessConditionsInner": TierRequestAccessConditionsInner,
    "TierRequestPutPayload": TierRequestPutPayload,
    "TierRequestTierRewardsInner": TierRequestTierRewardsInner,
    "TierTierRewardsInner": TierTierRewardsInner,
    "Transaction": Transaction,
    "TransactionHistory": TransactionHistory,
    "TransactionHistoryResp": TransactionHistoryResp,
    "UnauthorizedResponse": UnauthorizedResponse,
    "UpdateAttribute": UpdateAttribute,
    "UpdateAttributeEnumerationInner": UpdateAttributeEnumerationInner,
    "UpdateBalanceDefinitionPayload": UpdateBalanceDefinitionPayload,
    "UpdateBalanceLimitPayload": UpdateBalanceLimitPayload,
    "UpdateBatchContacts": UpdateBatchContacts,
    "UpdateBatchContactsContactsInner": UpdateBatchContactsContactsInner,
    "UpdateBatchContactsModel": UpdateBatchContactsModel,
    "UpdateCampaignStatus": UpdateCampaignStatus,
    "UpdateContact": UpdateContact,
    "UpdateCouponCollection200Response": UpdateCouponCollection200Response,
    "UpdateCouponCollectionRequest": UpdateCouponCollectionRequest,
    "UpdateEmailCampaign": UpdateEmailCampaign,
    "UpdateEmailCampaignEmailExpirationDate": UpdateEmailCampaignEmailExpirationDate,
    "UpdateEmailCampaignRecipients": UpdateEmailCampaignRecipients,
    "UpdateEmailCampaignSender": UpdateEmailCampaignSender,
    "UpdateExternalFeed": UpdateExternalFeed,
    "UpdateList": UpdateList,
    "UpdateLoyaltyProgramPayload": UpdateLoyaltyProgramPayload,
    "UpdateSender": UpdateSender,
    "UpdateSmsCampaign": UpdateSmsCampaign,
    "UpdateSmtpTemplate": UpdateSmtpTemplate,
    "UpdateSmtpTemplateSender": UpdateSmtpTemplateSender,
    "UpdateTierGroupRequest": UpdateTierGroupRequest,
    "UpdateUserResponse": UpdateUserResponse,
    "UpdateWebhook": UpdateWebhook,
    "UpdateWhatsAppCampaign": UpdateWhatsAppCampaign,
    "UploadImageModel": UploadImageModel,
    "UploadImageToGallery": UploadImageToGallery,
    "VariablesItems": VariablesItems,
    "WhatsappCampStats": WhatsappCampStats,
    "WhatsappCampTemplate": WhatsappCampTemplate,
}

// Check if a string starts with another string without using es6 features
function startsWith(str: string, match: string): boolean {
    return str.substring(0, match.length) === match;
}

// Check if a string ends with another string without using es6 features
function endsWith(str: string, match: string): boolean {
    return str.length >= match.length && str.substring(str.length - match.length) === match;
}

const nullableSuffix = " | null";
const optionalSuffix = " | undefined";
const arrayPrefix = "Array<";
const arraySuffix = ">";
const mapPrefix = "{ [key: string]: ";
const mapSuffix = "; }";

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

    public static serialize(data: any, type: string): any {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (endsWith(type, nullableSuffix)) {
            let subType: string = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.serialize(data, subType);
        } else if (endsWith(type, optionalSuffix)) {
            let subType: string = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.serialize(data, subType);
        } else if (startsWith(type, arrayPrefix)) {
            let subType: string = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (startsWith(type, mapPrefix)) {
            let subType: string = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.serialize(
                    data[key],
                    subType,
                );
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

    public static deserialize(data: any, type: string): any {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (endsWith(type, nullableSuffix)) {
            let subType: string = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.deserialize(data, subType);
        } else if (endsWith(type, optionalSuffix)) {
            let subType: string = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.deserialize(data, subType);
        } else if (startsWith(type, arrayPrefix)) {
            let subType: string = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (startsWith(type, mapPrefix)) {
            let subType: string = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.deserialize(
                    data[key],
                    subType,
                );
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
