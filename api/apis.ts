export * from './accountApi';
import { AccountApi } from './accountApi';
export * from './companiesApi';
import { CompaniesApi } from './companiesApi';
export * from './contactsApi';
import { ContactsApi } from './contactsApi';
export * from './conversationsApi';
import { ConversationsApi } from './conversationsApi';
export * from './couponsApi';
import { CouponsApi } from './couponsApi';
export * from './dealsApi';
import { DealsApi } from './dealsApi';
export * from './domainsApi';
import { DomainsApi } from './domainsApi';
export * from './ecommerceApi';
import { EcommerceApi } from './ecommerceApi';
export * from './emailCampaignsApi';
import { EmailCampaignsApi } from './emailCampaignsApi';
export * from './eventsApi';
import { EventsApi } from './eventsApi';
export * from './externalFeedsApi';
import { ExternalFeedsApi } from './externalFeedsApi';
export * from './filesApi';
import { FilesApi } from './filesApi';
export * from './inboundParsingApi';
import { InboundParsingApi } from './inboundParsingApi';
export * from './masterAccountApi';
import { MasterAccountApi } from './masterAccountApi';
export * from './notesApi';
import { NotesApi } from './notesApi';
export * from './paymentsApi';
import { PaymentsApi } from './paymentsApi';
export * from './processApi';
import { ProcessApi } from './processApi';
export * from './resellerApi';
import { ResellerApi } from './resellerApi';
export * from './sMSCampaignsApi';
import { SMSCampaignsApi } from './sMSCampaignsApi';
export * from './sendersApi';
import { SendersApi } from './sendersApi';
export * from './tasksApi';
import { TasksApi } from './tasksApi';
export * from './transactionalEmailsApi';
import { TransactionalEmailsApi } from './transactionalEmailsApi';
export * from './transactionalSMSApi';
import { TransactionalSMSApi } from './transactionalSMSApi';
export * from './transactionalWhatsAppApi';
import { TransactionalWhatsAppApi } from './transactionalWhatsAppApi';
export * from './userApi';
import { UserApi } from './userApi';
export * from './webhooksApi';
import { WebhooksApi } from './webhooksApi';
export * from './whatsAppCampaignsApi';
import { WhatsAppCampaignsApi } from './whatsAppCampaignsApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [AccountApi, CompaniesApi, ContactsApi, ConversationsApi, CouponsApi, DealsApi, DomainsApi, EcommerceApi, EmailCampaignsApi, EventsApi, ExternalFeedsApi, FilesApi, InboundParsingApi, MasterAccountApi, NotesApi, PaymentsApi, ProcessApi, ResellerApi, SMSCampaignsApi, SendersApi, TasksApi, TransactionalEmailsApi, TransactionalSMSApi, TransactionalWhatsAppApi, UserApi, WebhooksApi, WhatsAppCampaignsApi];
