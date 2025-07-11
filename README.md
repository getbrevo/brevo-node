<<<<<<< Updated upstream
# Brevo Node SDK

> ⚠️ **Important Notice**: This is the current stable version but we are currently working on rebuilding our Node library from scratch.

## Overview

Brevo's API exposes the entire Brevo features via a standardized programmatic interface. Please refer to the full [documentation](https://developers.brevo.com) to see all the supported operations.
=======
# Brevo TypeScript SDK

[![npm version](https://img.shields.io/npm/v/@brevo/api-sdk.svg)](https://www.npmjs.com/package/@brevo/api-sdk)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Official TypeScript SDK for the [Brevo API](https://developers.brevo.com/). This SDK provides a modern, type-safe interface for all Brevo services including email campaigns, transactional emails, contacts, SMS, and more.

## ✨ Features
>>>>>>> Stashed changes

- **🔒 Fully Typed**: Complete TypeScript support with strict typing
- **🔄 Auto-Pagination**: Automatic handling of paginated responses
- **🛡️ Error Handling**: Comprehensive error types with detailed information
- **⚡ HTTP Client Abstraction**: Support for both Axios and Fetch
- **🔁 Automatic Retries**: Built-in retry logic with exponential backoff
- **📝 Input Validation**: Zod-based validation for all inputs
- **📚 JSDoc Documentation**: Complete documentation for auto-generated docs
- **🎯 Resource-Based Architecture**: Clean, intuitive API organization
- **🔧 Extensible**: Easy to extend and customize

<<<<<<< Updated upstream
Our current library is not fully compatible with all modern Node.js and TypeScript environments. To help you integrate Brevo into your applications, we're providing both plain Node.js and TypeScript-specific implementation approaches below while we work on the next generation of our SDK.

## Table of Contents

- [Node.js Implementation](#nodejs-implementation)
  - [Send Transactional Email](#send-transactional-email)
  - [Create Contact](#create-contact)
- [TypeScript Implementation](#typescript-implementation)
  - [Send Transactional Email](#send-transactional-email-1)
  - [Create Contact](#create-contact-1)
- [Support](#support)
- [License](#license)

## Node.js Implementation

### Send Transactional Email

#### Installation

```bash
npm i @getbrevo/brevo --save
```

#### Import packages

```javascript
import { TransactionalEmailsApi, SendSmtpEmail } from "@getbrevo/brevo";
```

#### Instantiate API with your credentials

```javascript
let emailAPI = new TransactionalEmailsApi();
emailAPI.authentications.apiKey.apiKey = "xkeysib-xxxxxxxxxxxxxxxxxxxxx"
```

#### Build your message

```javascript
let message = new SendSmtpEmail();
message.subject = "First email";
message.textContent = "Hello world!";
message.sender = { name: "John Doe", email: "john.doe@example.com" };
message.to = [{ email: "jane.smith@example.com", name: "Jane Smith" }];
```

#### Send the message

```javascript
emailAPI.sendTransacEmail(message)
```

#### (Optional) Log the response

```javascript
emailAPI.sendTransacEmail(message).then(res => {
    console.log(JSON.stringify(res.body));
}).catch(err => {
    console.error("Error sending email:", err.body);
});
```

### Create Contact

#### Installation

```bash
npm i @getbrevo/brevo --save
```

#### Import packages

```javascript
import { CreateContact, ContactsApi } from "@getbrevo/brevo";
```

#### Instantiate API with your credentials

```javascript
let contactAPI = new ContactsApi();
contactAPI.authentications.apiKey.apiKey = "xkeysib-xxxxxx"
```

#### Build your contact

```javascript
let contact = new CreateContact();
contact.email = "alice.johnson@example.com";
contact.attributes = {
  FIRSTNAME: "Alice",
  LASTNAME: "Johnson",
};
```

#### Create the contact

```javascript
contactAPI.createContact(contact).then(res => {
  console.log(JSON.stringify(res.body));
}).catch(err => {
  console.error("Error creating contact:", err.body);
});
```

## TypeScript Implementation

### Recommended tsconfig.json Settings

We recommend using the following TypeScript configuration for optimal compatibility:

```json
{
  "compilerOptions": {
    "target": "es2020",
    "module": "commonjs",
    "outDir": "dist",
    "rootDir": "src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  },
  "include": ["src"]
}
```

### Send Transactional Email

#### Installation

```bash
npm i @getbrevo/brevo --save
```

#### Import packages

```typescript
import { TransactionalEmailsApi, SendSmtpEmail } from "@getbrevo/brevo";
```

#### Instantiate API with your credentials

```typescript
let emailAPI = new TransactionalEmailsApi();
(emailAPI as any).authentications.apiKey.apiKey = "xkeysib-xxxxxxxxxxxxxxxxxxxxx";
```

#### Build your message

```typescript
let message = new SendSmtpEmail();
message.subject = "First email";
message.textContent = "Hello world!";
message.sender = { name: "Bob Wilson", email: "bob.wilson@example.com" };
message.to = [{ email: "sarah.davis@example.com", name: "Sarah Davis" }];
```

#### Send the message

```typescript
emailAPI.sendTransacEmail(message)
```

#### (Optional) Log the response

```typescript
emailAPI
  .sendTransacEmail(message)
  .then((res) => {
    console.log(JSON.stringify(res.body));
  })
  .catch((err) => {
    console.error("Error sending email:", err.body);
  });
```

### Create Contact

#### Installation

```bash
npm i @getbrevo/brevo --save
```

#### Import packages

```typescript
import { CreateContact, ContactsApi } from "@getbrevo/brevo";
```

#### Instantiate API with your credentials

```typescript
let contactAPI = new ContactsApi();
(contactAPI as any).authentications.apiKey.apiKey = "xkeysib-xxxxxxxxx"
```

#### Build your contact

```typescript
let contact = new CreateContact();
contact.email = "michael.brown@example.com";
contact.attributes = {
  FIRSTNAME: { value: "Michael" },
  LASTNAME: { value: "Brown" },
};
```

#### Create the contact

```typescript
contactAPI.createContact(contact).then(res => {
  console.log(JSON.stringify(res.body));
}).catch(err => {
  console.error("Error creating contact:", err.body);
});
```

## Support

For questions and support, please refer to our [documentation](https://developers.brevo.com) or contact our support team.

## License

This SDK is distributed under the MIT License.
=======
## 🚀 Installation

```bash
npm install @brevo/api-sdk
# or
yarn add @brevo/api-sdk
# or
pnpm add @brevo/api-sdk
```

## 📋 Requirements

- Node.js 16.0.0 or higher
- TypeScript 5.0.0 or higher (for TypeScript projects)

## 🔑 Authentication

Get your API key from the [Brevo dashboard](https://app.brevo.com/settings/keys/api).

## 🏁 Quick Start

```typescript
import { Brevo } from '@brevo/api-sdk';

const brevo = new Brevo({
  apiKey: 'xkeysib-your-api-key-here',
});

// Test the connection
const result = await brevo.testConnection();
console.log(result.connected ? 'Connected!' : 'Failed to connect');

// List email campaigns
const campaigns = await brevo.emailCampaigns.list({
  limit: 10,
  status: 'sent',
});

console.log(`Found ${campaigns.count} campaigns`);
```

## 📖 Usage Examples

### 📁 Comprehensive Examples

We provide detailed examples demonstrating every feature:

- **[`examples/basic-usage.ts`](./examples/basic-usage.ts)** - Quick start and basic operations
- **[`examples/contacts-examples.ts`](./examples/contacts-examples.ts)** - Complete contacts functionality
- **[`examples/email-campaigns-examples.ts`](./examples/email-campaigns-examples.ts)** - Complete campaigns functionality
- **[`examples/transactional-email-examples.ts`](./examples/transactional-email-examples.ts)** - Complete transactional email functionality
- **[`examples/multiple-resources.ts`](./examples/multiple-resources.ts)** - Cross-resource workflows
- **[`examples/README.md`](./examples/README.md)** - Detailed examples documentation

Run examples:

```bash
# Set your API key
export BREVO_API_KEY=xkeysib-your-actual-key

# Run specific examples
npx tsx examples/contacts-examples.ts
npx tsx examples/email-campaigns-examples.ts
npx tsx examples/transactional-email-examples.ts
```

### Quick Start

```typescript
import { Brevo } from '@brevo/api-sdk';

const brevo = new Brevo({
  apiKey: 'xkeysib-your-api-key-here',
});

// Test connection and create contact
const result = await brevo.testConnection();
await brevo.contacts.create({
  email: 'user@example.com',
  attributes: { FIRSTNAME: 'John', LASTNAME: 'Doe' },
  listIds: [1, 2],
});
```

### Email Campaigns

```typescript
// Create a new email campaign
const campaign = await brevo.emailCampaigns.create({
  name: 'Summer Sale 2024',
  subject: '50% off everything!',
  sender: {
    email: 'sales@company.com',
    name: 'Sales Team',
  },
  htmlContent: `
    <h1>Summer Sale!</h1>
    <p>Get 50% off on all products.</p>
  `,
  recipients: {
    lists: [1, 2], // Your list IDs
    exclusionLists: [3], // Lists to exclude
  },
  scheduledAt: '2024-07-01T10:00:00Z',
});

console.log(`Campaign created with ID: ${campaign.id}`);

// Send a test email
await brevo.emailCampaigns.sendTest(campaign.id, {
  emailTo: ['test@company.com'],
});

// Get campaign statistics
const stats = await brevo.emailCampaigns.getStatistics(campaign.id);
console.log(`Opens: ${stats.globalStats?.viewed}`);
console.log(`Clicks: ${stats.globalStats?.uniqueClicks}`);

// Send campaign now
await brevo.emailCampaigns.sendNow(campaign.id);
```

### Transactional Email

```typescript
// Send a personalized transactional email
const result = await brevo.transactionalEmail.send({
  to: [{ email: 'user@example.com', name: 'John Doe' }],
  subject: 'Welcome to our service!',
  htmlContent: `
    <h1>Welcome {{params.firstName}}!</h1>
    <p>Thank you for joining us. Your account is now active.</p>
  `,
  sender: { email: 'hello@company.com', name: 'Company Team' },
  params: { firstName: 'John' },
});

// Create reusable email templates
const template = await brevo.transactionalEmail.createTemplate({
  name: 'Order Confirmation',
  subject: 'Order {{params.orderNumber}} Confirmed',
  htmlContent: `
    <h1>Thank you {{params.customerName}}!</h1>
    <p>Your order {{params.orderNumber}} has been confirmed.</p>
    <p>Total: {{params.total}}</p>
  `,
  sender: { email: 'orders@company.com', name: 'Orders Team' },
});

// Send using template
await brevo.transactionalEmail.send({
  to: [{ email: 'customer@example.com' }],
  templateId: template.id,
  params: {
    customerName: 'Jane Smith',
    orderNumber: 'ORD-12345',
    total: '$99.99',
  },
});

// Get email statistics
const stats = await brevo.transactionalEmail.getStatistics({ days: 7 });
console.log(`Total emails sent: ${stats.reduce((sum, day) => sum + day.requests, 0)}`);
```

### Pagination

```typescript
// Method 1: Manual pagination
let offset = 0;
const limit = 50;

while (true) {
  const page = await brevo.emailCampaigns.list({ offset, limit });

  // Process campaigns
  page.campaigns.forEach(campaign => {
    console.log(campaign.name);
  });

  // Check if we have more pages
  if (page.campaigns.length < limit) break;
  offset += limit;
}

// Method 2: Auto-pagination iterator
const iterator = brevo.emailCampaigns.iterate({ status: 'sent' });

for await (const campaignPage of iterator) {
  campaignPage.forEach(campaign => {
    console.log(campaign.name);
  });
}

// Method 3: Get all items at once
const allCampaigns = await brevo.emailCampaigns.iterate().all();
console.log(`Total campaigns: ${allCampaigns.length}`);
```

### Error Handling

```typescript
import { isBrevoError, BrevoValidationError, BrevoNotFoundError } from '@brevo/api-sdk';

try {
  const campaign = await brevo.emailCampaigns.get(123);
} catch (error) {
  if (isBrevoError(error)) {
    switch (error.type) {
      case 'not_found_error':
        console.log('Campaign not found');
        break;
      case 'authentication_error':
        console.log('Invalid API key');
        break;
      case 'validation_error':
        console.log('Validation failed:', error.message);
        if (error instanceof BrevoValidationError) {
          // Access specific field errors
          error.details.forEach(detail => {
            console.log(`${detail.field}: ${detail.message}`);
          });
        }
        break;
      default:
        console.log(`API Error: ${error.message}`);
    }
  } else {
    console.log('Unexpected error:', error);
  }
}
```

### Custom HTTP Client

```typescript
// Use Fetch instead of Axios
const brevo = Brevo.withFetch({
  apiKey: 'your-api-key',
  timeout: 15000,
});

// Or provide your own HTTP client
import { FetchHttpClient } from '@brevo/api-sdk';

const customClient = new FetchHttpClient({
  apiKey: 'your-api-key',
  baseUrl: 'https://api.brevo.com/v3',
  timeout: 30000,
});

const brevo = new Brevo({ apiKey: 'your-api-key' }, customClient);
```

## 🔧 Configuration

```typescript
const brevo = new Brevo({
  apiKey: 'xkeysib-your-api-key', // Required
  baseUrl: 'https://api.brevo.com/v3', // Optional, defaults to official API
  timeout: 30000, // Optional, request timeout in ms (default: 30000)
  maxRetries: 3, // Optional, max retry attempts (default: 3)
  retryDelay: 1000, // Optional, base delay between retries in ms (default: 1000)
  headers: {
    // Optional, custom headers
    'X-Custom-Header': 'value',
  },
});
```

## 📚 API Reference

### Email Campaigns

| Method                        | Description                                        |
| ----------------------------- | -------------------------------------------------- |
| `list(params?)`               | List email campaigns with filtering and pagination |
| `get(id, statistics?)`        | Get a specific campaign by ID                      |
| `create(params)`              | Create a new email campaign                        |
| `update(id, params)`          | Update an existing campaign                        |
| `delete(id)`                  | Delete a campaign                                  |
| `sendNow(id)`                 | Send a campaign immediately                        |
| `sendTest(id, params)`        | Send a test email                                  |
| `updateStatus(id, status)`    | Update campaign status                             |
| `getStatistics(id)`           | Get campaign statistics                            |
| `getSharedUrl(id)`            | Get shareable URL for campaign                     |
| `iterate(params?, pageSize?)` | Create pagination iterator                         |

### Contacts

| Method                                    | Description                                 |
| ----------------------------------------- | ------------------------------------------- |
| `list(params?)`                           | List contacts with filtering and pagination |
| `get(identifier)`                         | Get contact by email or ID                  |
| `create(params)`                          | Create a new contact                        |
| `update(identifier, params)`              | Update an existing contact                  |
| `delete(identifier)`                      | Delete a contact                            |
| `getLists(params?)`                       | Get contact lists                           |
| `createList(params)`                      | Create a new contact list                   |
| `getListContacts(listId)`                 | Get contacts in a specific list             |
| `addToList(listId, contacts)`             | Add contacts to a list                      |
| `removeFromList(listId, contacts)`        | Remove contacts from a list                 |
| `getAttributes()`                         | Get available contact attributes            |
| `createAttribute(category, name, params)` | Create custom attribute                     |
| `iterate(params?, pageSize?)`             | Create pagination iterator                  |

### Transactional Email

| Method                       | Description                         |
| ---------------------------- | ----------------------------------- |
| `send(params)`               | Send a transactional email          |
| `listTemplates(params?)`     | List email templates with filtering |
| `getTemplate(id)`            | Get a specific template by ID       |
| `createTemplate(params)`     | Create a new email template         |
| `updateTemplate(id, params)` | Update an existing template         |
| `deleteTemplate(id)`         | Delete a template                   |
| `getStatistics(params?)`     | Get email statistics by date range  |
| `iterateTemplates(params?)`  | Create template pagination iterator |

### Client Methods

| Method                                 | Description               |
| -------------------------------------- | ------------------------- |
| `testConnection()`                     | Test API connectivity     |
| `getConfig()`                          | Get current configuration |
| `request(method, url, data?, params?)` | Make raw API request      |

## 🏗️ Architecture

The SDK follows a clean, modular architecture:

```
src/
├── client.ts              # Main client class
├── types/                 # TypeScript type definitions
│   ├── common.ts          # Common types and interfaces
│   └── email-campaigns.ts # Email campaign types
├── resources/             # API resource classes
│   └── email-campaigns.ts # Email campaigns resource
├── http/                  # HTTP client abstraction
│   └── client.ts          # HTTP client implementations
├── errors/                # Error classes and utilities
│   └── index.ts           # All error types
├── utils/                 # Utility functions
│   ├── pagination.ts      # Pagination helpers
│   └── validation.ts      # Input validation
└── index.ts               # Main entry point
```

## 🔍 Type Safety

The SDK is built with strict TypeScript for maximum type safety:

```typescript
// All parameters are fully typed
const campaign: EmailCampaign = await brevo.emailCampaigns.get(123);

// Type-safe parameter validation
const params: CreateEmailCampaignParams = {
  name: 'Test Campaign',
  subject: 'Test Subject',
  sender: { email: 'test@example.com', name: 'Test' },
  htmlContent: '<h1>Test</h1>',
  // TypeScript will ensure all required fields are present
};

// Type-safe responses
const campaigns: GetEmailCampaignsResponse = await brevo.emailCampaigns.list();
campaigns.campaigns.forEach((campaign: EmailCampaign) => {
  console.log(campaign.name); // TypeScript knows this is a string
});
```

## 🧪 Testing

```bash
# Run type checking
npm run type-check

# Run linting
npm run lint

# Run tests
npm test

# Run tests with coverage
npm run test:coverage
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- 📖 [Official Documentation](https://developers.brevo.com/)
- 💬 [Community Forum](https://community.brevo.com/)
- 📧 [Support Email](mailto:support@brevo.com)
- 🐛 [Report Issues](https://github.com/brevo/brevo-typescript-sdk/issues)

## 🗺️ Roadmap

- [ ] Transactional Email support
- [ ] Contacts management
- [ ] SMS campaigns
- [ ] WhatsApp campaigns
- [ ] Loyalty programs
- [ ] Webhooks support
- [ ] Rate limiting utilities
- [ ] Bulk operations
- [ ] Template management

## 📋 Changelog

See [CHANGELOG.md](CHANGELOG.md) for a list of changes and version history.

---

Made with ❤️ by the Brevo team
>>>>>>> Stashed changes
