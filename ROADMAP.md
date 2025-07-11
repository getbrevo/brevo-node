# Brevo SDK Development Roadmap

## 🎯 Current Status

The SDK currently implements **3 of 7** major resource categories as **comprehensive examples** to demonstrate the architecture:

✅ **Email Campaigns** - Complete implementation (11 methods)
✅ **Contacts** - Complete implementation (12 methods)
✅ **Transactional Email** - Complete implementation (8 methods)
🔲 **SMS Campaigns** - Pending  
🔲 **WhatsApp Campaigns** - Pending  
🔲 **Loyalty Programs** - Pending  
🔲 **Account & Statistics** - Pending

## 🏗️ Architecture Overview

The SDK follows a **resource-based architecture** where each API category becomes a resource class:

```typescript
const brevo = new Brevo({ apiKey: 'your-key' });

// Each major API area becomes a resource
brevo.emailCampaigns.list(); // ✅ Implemented
brevo.contacts.create(); // ✅ Implemented
brevo.transactionalEmail.send(); // ✅ Implemented
brevo.sms.send(); // 🔲 Pending
brevo.whatsapp.send(); // 🔲 Pending
brevo.loyalty.getPrograms(); // 🔲 Pending
brevo.account.getInfo(); // 🔲 Pending
```

## 📋 Implementation Pattern

Each resource follows the **same consistent pattern**:

### 1. Types (`src/types/{resource}.ts`)

```typescript
// Define interfaces for requests/responses
export interface CreateResourceParams { ... }
export interface ResourceResponse { ... }
```

### 2. Resource Class (`src/resources/{resource}.ts`)

```typescript
export class ResourceName {
  constructor(private client: HttpClient) {}

  async list(params?) { ... }     // List with pagination
  async get(id) { ... }          // Get by ID
  async create(params) { ... }    // Create new
  async update(id, params) { ... } // Update existing
  async delete(id) { ... }        // Delete

  // Resource-specific methods
  async customMethod() { ... }

  // Auto-pagination iterator
  iterate(params?) { ... }
}
```

### 3. Add to Main Client (`src/client.ts`)

```typescript
import { ResourceName } from './resources/resource-name';

export class Brevo {
  public readonly resourceName: ResourceName;

  constructor(config, httpClient?) {
    // ...
    this.resourceName = new ResourceName(this.httpClient);
  }
}
```

### 4. Export (`src/index.ts`)

```typescript
export { ResourceName } from './resources/resource-name';
export type * from './types/resource-name';
```

## 🚀 Adding New Resources

Here's how to add the remaining resources:

### 📧 Transactional Email ✅ **COMPLETED**

**API Endpoints**: `/smtp/email`, `/smtp/templates`, `/smtp/statistics`

**Key Methods**:

```typescript
brevo.transactionalEmail.send(params); // Send transactional emails
brevo.transactionalEmail.listTemplates(); // List email templates
brevo.transactionalEmail.getTemplate(id); // Get template by ID
brevo.transactionalEmail.createTemplate(params); // Create new template
brevo.transactionalEmail.updateTemplate(id, params); // Update template
brevo.transactionalEmail.deleteTemplate(id); // Delete template
brevo.transactionalEmail.getStatistics(params); // Get email statistics
brevo.transactionalEmail.iterateTemplates(); // Auto-pagination iterator
```

**Implementation Status**:

- ✅ `src/types/transactional-email.ts` - Type definitions
- ✅ `src/resources/transactional-email.ts` - Resource implementation
- ✅ Added to `src/client.ts` - Main client integration
- ✅ `examples/transactional-email-examples.ts` - Comprehensive examples
- ✅ Validation schemas and error handling
- ✅ Auto-pagination support

### 📱 SMS Campaigns

**API Endpoints**: `/smsCampaigns`, `/transactionalSMS`

**Key Methods**:

```typescript
brevo.sms.listCampaigns();
brevo.sms.createCampaign(params);
brevo.sms.send(params);
brevo.sms.getStatistics();
```

**Files to Create**:

- 🔲 `src/types/sms.ts`
- 🔲 `src/resources/sms.ts`
- 🔲 Add to `src/client.ts`

### 💬 WhatsApp Campaigns

**API Endpoints**: `/whatsappCampaigns`, `/whatsappCampaigns/template`

**Key Methods**:

```typescript
brevo.whatsapp.listCampaigns();
brevo.whatsapp.createCampaign(params);
brevo.whatsapp.getTemplates();
brevo.whatsapp.getConfig();
```

### 🎁 Loyalty Programs

**API Endpoints**: `/loyalty/*` (complex nested structure)

**Key Methods**:

```typescript
brevo.loyalty.getPrograms();
brevo.loyalty.createProgram(params);
brevo.loyalty.getRewards(programId);
brevo.loyalty.createTransaction(params);
```

### 📊 Account & Statistics

**API Endpoints**: `/account`, `/smtp/statistics`, etc.

**Key Methods**:

```typescript
brevo.account.getInfo();
brevo.account.getActivity();
brevo.account.getUsers();
brevo.statistics.getEmailStats(params);
```

## 🔧 Implementation Details

### Validation Schemas

Add Zod schemas for each resource in `src/utils/validation.ts`:

```typescript
export const sendTransactionalEmailSchema = z.object({
  to: z.array(emailRecipientSchema),
  subject: z.string().min(1),
  // ...
});
```

### Error Handling

All resources automatically inherit comprehensive error handling:

- ✅ Typed errors for HTTP status codes
- ✅ Validation errors with field details
- ✅ Automatic retries with exponential backoff
- ✅ Network error handling

### Pagination

Use the same pagination utilities:

```typescript
// Auto-pagination iterator
iterate(params = {}, pageSize = 50) {
  return createPaginationIterator(
    paginationParams => this.list({ ...params, ...paginationParams }),
    pageSize
  );
}
```

## 📝 Documentation Standards

Each resource method should include:

````typescript
/**
 * Method description
 *
 * Detailed explanation of what the method does.
 *
 * @param params - Parameter description
 * @returns Promise resolving to response description
 *
 * @example
 * ```typescript
 * const result = await brevo.resource.method({
 *   param: 'value'
 * });
 * ```
 */
async method(params: MethodParams): Promise<MethodResponse> {
  // Implementation
}
````

## 🧪 Testing Strategy

For each new resource:

1. **Unit Tests**: Test individual methods
2. **Integration Tests**: Test with real API (optional)
3. **Type Tests**: Ensure TypeScript compilation
4. **Example Tests**: Verify examples work

```typescript
// tests/resources/transactional-email.test.ts
describe('TransactionalEmailResource', () => {
  it('should send email with valid parameters', async () => {
    // Test implementation
  });
});
```

## 📦 Release Strategy

### Phase 1: Core Resources (Current)

- ✅ Email Campaigns
- ✅ Contacts
- 🔲 Transactional Email

### Phase 2: Communication

- 🔲 SMS Campaigns
- 🔲 WhatsApp Campaigns

### Phase 3: Advanced Features

- 🔲 Loyalty Programs
- 🔲 Account Management
- 🔲 Advanced Statistics

### Phase 4: Developer Experience

- 🔲 Webhooks handling
- 🔲 Rate limiting utilities
- 🔲 Bulk operations
- 🔲 Response caching

## 🎨 API Design Principles

1. **Consistency**: All resources follow the same patterns
2. **Type Safety**: Everything is strictly typed
3. **Developer Experience**: Intuitive, well-documented APIs
4. **Error Handling**: Comprehensive, actionable error messages
5. **Performance**: Pagination, retries, efficient requests
6. **Extensibility**: Easy to add new resources and methods

## 🤝 Contributing

To add a new resource:

1. Study existing implementations (`email-campaigns.ts`, `contacts.ts`)
2. Create types following the same patterns
3. Implement resource class with full JSDoc
4. Add to main client and exports
5. Create comprehensive examples
6. Add validation schemas
7. Update documentation

The architecture is designed to make adding new resources straightforward while maintaining consistency and quality across the entire SDK!

## 📊 Progress Tracking

- **Architecture**: ✅ Complete
- **Core Infrastructure**: ✅ Complete
- **HTTP Client**: ✅ Complete (Axios + Fetch)
- **Error Handling**: ✅ Complete
- **Validation**: ✅ Complete
- **Pagination**: ✅ Complete
- **Documentation**: ✅ Complete
- **Examples**: ✅ Complete
- **Resource Implementation**: 🔄 28% (2/7 major categories)

The foundation is solid and production-ready. Adding the remaining resources is now a matter of following the established patterns! 🚀
