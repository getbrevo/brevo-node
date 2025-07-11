import type { HttpClient } from '../http/client';
import type {
  Contact,
  GetContactsParams,
  GetContactsResponse,
  CreateContactParams,
  ContactList,
  CreateContactListParams,
  ContactAttribute,
  CreateContactAttributeParams,
} from '../types/contacts';
import { validate } from '../utils/validation';
import { contactSchema, paginationSchema } from '../utils/validation';
import { createPaginationIterator, type PaginationIterator } from '../utils/pagination';

/**
 * Contacts resource for managing contacts and contact lists
 *
 * @example
 * ```typescript
 * // Create a contact
 * const contact = await brevo.contacts.create({
 *   email: 'user@example.com',
 *   attributes: { FIRSTNAME: 'John', LASTNAME: 'Doe' },
 *   listIds: [1, 2]
 * });
 *
 * // List contacts
 * const contacts = await brevo.contacts.list({ limit: 50 });
 *
 * // Get contact by email
 * const contact = await brevo.contacts.get('user@example.com');
 * ```
 */
export class ContactsResource {
  constructor(private readonly client: HttpClient) {}

  /**
   * List all contacts
   *
   * Retrieve all contacts with optional filtering and pagination.
   *
   * @param params - Query parameters for filtering and pagination
   * @returns Promise resolving to paginated contacts list
   *
   * @example
   * ```typescript
   * // Get recent contacts
   * const contacts = await brevo.contacts.list({
   *   limit: 100,
   *   modifiedSince: '2024-01-01T00:00:00Z'
   * });
   *
   * console.log(`Found ${contacts.count} contacts`);
   * ```
   */
  async list(params: GetContactsParams = {}): Promise<GetContactsResponse> {
    const validatedPagination = validate(paginationSchema, {
      limit: params.limit,
      offset: params.offset,
    });

    const response = await this.client.request<GetContactsResponse>({
      method: 'GET',
      url: '/contacts',
      params: {
        ...validatedPagination,
        sort: params.sort ?? 'desc',
        modifiedSince: params.modifiedSince,
        createdSince: params.createdSince,
      },
    });

    return response.data;
  }

  /**
   * Get a specific contact by email or ID
   *
   * @param identifier - Contact email address or ID
   * @returns Promise resolving to the contact details
   *
   * @example
   * ```typescript
   * // Get by email
   * const contact = await brevo.contacts.get('user@example.com');
   *
   * // Get by ID
   * const contact = await brevo.contacts.get(123);
   * ```
   */
  async get(identifier: string | number): Promise<Contact> {
    const response = await this.client.request<Contact>({
      method: 'GET',
      url: `/contacts/${identifier}`,
    });

    return response.data;
  }

  /**
   * Create a new contact
   *
   * Creates a new contact with the specified email and attributes.
   *
   * @param params - Contact creation parameters
   * @returns Promise resolving to the created contact ID
   *
   * @example
   * ```typescript
   * const contact = await brevo.contacts.create({
   *   email: 'john.doe@example.com',
   *   attributes: {
   *     FIRSTNAME: 'John',
   *     LASTNAME: 'Doe',
   *     COMPANY: 'Acme Corp'
   *   },
   *   listIds: [1, 2, 3],
   *   updateEnabled: true
   * });
   * ```
   */
  async create(params: CreateContactParams): Promise<{ id: number }> {
    const validatedParams = validate(contactSchema, params);

    const response = await this.client.request<{ id: number }>({
      method: 'POST',
      url: '/contacts',
      data: validatedParams,
    });

    return response.data;
  }

  /**
   * Update an existing contact
   *
   * @param identifier - Contact email address or ID
   * @param params - Contact update parameters
   * @returns Promise resolving when update is complete
   *
   * @example
   * ```typescript
   * await brevo.contacts.update('user@example.com', {
   *   attributes: { LASTNAME: 'Smith' },
   *   listIds: [4, 5]
   * });
   * ```
   */
  async update(identifier: string | number, params: Partial<CreateContactParams>): Promise<void> {
    const validatedParams = validate(contactSchema.partial(), params);

    await this.client.request({
      method: 'PUT',
      url: `/contacts/${identifier}`,
      data: validatedParams,
    });
  }

  /**
   * Delete a contact
   *
   * @param identifier - Contact email address or ID
   * @returns Promise resolving when deletion is complete
   *
   * @example
   * ```typescript
   * await brevo.contacts.delete('user@example.com');
   * ```
   */
  async delete(identifier: string | number): Promise<void> {
    await this.client.request({
      method: 'DELETE',
      url: `/contacts/${identifier}`,
    });
  }

  /**
   * Get contact lists
   *
   * @param params - Pagination parameters
   * @returns Promise resolving to contact lists
   *
   * @example
   * ```typescript
   * const lists = await brevo.contacts.getLists({ limit: 50 });
   * ```
   */
  async getLists(
    params: { limit?: number; offset?: number } = {}
  ): Promise<{ lists: ContactList[]; count: number }> {
    const validatedPagination = validate(paginationSchema, params);

    const response = await this.client.request<{ lists: ContactList[]; count: number }>({
      method: 'GET',
      url: '/contacts/lists',
      params: validatedPagination,
    });

    return response.data;
  }

  /**
   * Create a contact list
   *
   * @param params - List creation parameters
   * @returns Promise resolving to the created list ID
   *
   * @example
   * ```typescript
   * const list = await brevo.contacts.createList({
   *   name: 'Newsletter Subscribers',
   *   folderId: 1
   * });
   * ```
   */
  async createList(params: CreateContactListParams): Promise<{ id: number }> {
    const response = await this.client.request<{ id: number }>({
      method: 'POST',
      url: '/contacts/lists',
      data: params,
    });

    return response.data;
  }

  /**
   * Get contacts in a specific list
   *
   * @param listId - List ID
   * @param params - Pagination parameters
   * @returns Promise resolving to contacts in the list
   *
   * @example
   * ```typescript
   * const contacts = await brevo.contacts.getListContacts(1, { limit: 100 });
   * ```
   */
  async getListContacts(
    listId: number,
    params: { limit?: number; offset?: number } = {}
  ): Promise<{ contacts: Contact[]; count: number }> {
    const validatedPagination = validate(paginationSchema, params);

    const response = await this.client.request<{ contacts: Contact[]; count: number }>({
      method: 'GET',
      url: `/contacts/lists/${listId}/contacts`,
      params: validatedPagination,
    });

    return response.data;
  }

  /**
   * Add contacts to a list
   *
   * @param listId - List ID
   * @param contactIds - Array of contact IDs or emails
   * @returns Promise resolving when contacts are added
   *
   * @example
   * ```typescript
   * await brevo.contacts.addToList(1, ['user@example.com', 'user2@example.com']);
   * ```
   */
  async addToList(listId: number, contactIds: (string | number)[]): Promise<void> {
    await this.client.request({
      method: 'POST',
      url: `/contacts/lists/${listId}/contacts/add`,
      data: { ids: contactIds },
    });
  }

  /**
   * Remove contacts from a list
   *
   * @param listId - List ID
   * @param contactIds - Array of contact IDs or emails
   * @returns Promise resolving when contacts are removed
   *
   * @example
   * ```typescript
   * await brevo.contacts.removeFromList(1, ['user@example.com']);
   * ```
   */
  async removeFromList(listId: number, contactIds: (string | number)[]): Promise<void> {
    await this.client.request({
      method: 'POST',
      url: `/contacts/lists/${listId}/contacts/remove`,
      data: { ids: contactIds },
    });
  }

  /**
   * Get contact attributes
   *
   * @returns Promise resolving to available contact attributes
   *
   * @example
   * ```typescript
   * const attributes = await brevo.contacts.getAttributes();
   * console.log('Available attributes:', attributes);
   * ```
   */
  async getAttributes(): Promise<{ attributes: ContactAttribute[] }> {
    const response = await this.client.request<{ attributes: ContactAttribute[] }>({
      method: 'GET',
      url: '/contacts/attributes',
    });

    return response.data;
  }

  /**
   * Create a contact attribute
   *
   * @param category - Attribute category ('normal', 'transactional', 'calculated')
   * @param name - Attribute name
   * @param params - Attribute creation parameters
   * @returns Promise resolving when attribute is created
   *
   * @example
   * ```typescript
   * await brevo.contacts.createAttribute('normal', 'CUSTOM_FIELD', {
   *   value: 'string'
   * });
   * ```
   */
  async createAttribute(
    category: 'normal' | 'transactional' | 'calculated',
    name: string,
    params: CreateContactAttributeParams
  ): Promise<void> {
    await this.client.request({
      method: 'POST',
      url: `/contacts/attributes/${category}/${name}`,
      data: params,
    });
  }

  /**
   * Create a pagination iterator for contacts
   *
   * @param params - Query parameters for filtering
   * @param pageSize - Number of items per page (default: 50)
   * @returns Pagination iterator
   *
   * @example
   * ```typescript
   * // Iterate through all contacts
   * for await (const contactPage of brevo.contacts.iterate()) {
   *   contactPage.forEach(contact => console.log(contact.email));
   * }
   * ```
   */
  iterate(
    params: Omit<GetContactsParams, 'limit' | 'offset'> = {},
    pageSize = 50
  ): PaginationIterator<Contact> {
    return createPaginationIterator(
      paginationParams => this.list({ ...params, ...paginationParams }),
      pageSize
    );
  }
}
