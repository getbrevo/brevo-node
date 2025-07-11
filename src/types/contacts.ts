import type {
  PaginationParams,
  SortParams,
  PaginatedResponse,
  AttributeType,
  AttributeCategory,
} from './common';

/**
 * Contact information
 */
export interface Contact {
  /** Contact email address */
  email: string;
  /** Contact ID */
  id?: number;
  /** Whether email blacklisted */
  emailBlacklisted?: boolean;
  /** Whether SMS blacklisted */
  smsBlacklisted?: boolean;
  /** Contact attributes */
  attributes?: Record<string, any>;
  /** List IDs the contact belongs to */
  listIds?: number[];
  /** Date when contact was modified (ISO string) */
  modifiedAt?: string;
}

/**
 * Parameters for creating/updating a contact
 */
export interface CreateContactParams {
  /** Contact email address */
  email: string;
  /** Contact attributes */
  attributes?: Record<string, any>;
  /** List IDs to add contact to */
  listIds?: number[];
  /** List IDs to remove contact from */
  unlinkListIds?: number[];
  /** Whether to update existing contact */
  updateEnabled?: boolean;
  /** Whether to send double opt-in confirmation */
  doubleOptinConfirmation?: boolean;
  /** Template ID for double opt-in */
  templateId?: number;
  /** Redirect URL after double opt-in */
  redirectionUrl?: string;
}

/**
 * Parameters for listing contacts
 */
export interface GetContactsParams extends PaginationParams, SortParams {
  /** Filter by modified date (start) */
  modifiedSince?: string;
  /** Filter by creation date (start) */
  createdSince?: string;
}

/**
 * Response for listing contacts
 */
export interface GetContactsResponse extends PaginatedResponse<Contact> {
  /** Array of contacts */
  contacts: Contact[];
}

/**
 * Contact list information
 */
export interface ContactList {
  /** List ID */
  id: number;
  /** List name */
  name: string;
  /** Total number of contacts */
  totalContacts?: number;
  /** Number of blacklisted contacts */
  totalBlacklisted?: number;
  /** Folder ID */
  folderId?: number;
  /** Creation date (ISO string) */
  createdAt?: string;
}

/**
 * Parameters for creating a contact list
 */
export interface CreateContactListParams {
  /** List name */
  name: string;
  /** Folder ID */
  folderId?: number;
}

/**
 * Contact attribute definition
 */
export interface ContactAttribute {
  /** Attribute name */
  name: string;
  /** Attribute type */
  type: AttributeType;
  /** Attribute category */
  category: AttributeCategory;
  /** Whether attribute is calculated */
  isCalculated?: boolean;
  /** Enumeration values for category type */
  enumeration?: { label: string; value: number }[];
}

/**
 * Parameters for creating a contact attribute
 */
export interface CreateContactAttributeParams {
  /** Attribute value/name */
  value: string;
  /** Whether attribute is calculated */
  isCalculated?: boolean;
  /** Enumeration values for category type */
  enumeration?: { label: string; value: number }[];
}
