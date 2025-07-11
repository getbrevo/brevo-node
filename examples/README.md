# Brevo SDK Examples

This directory contains comprehensive examples demonstrating all features of the Brevo TypeScript SDK.

## 📁 Available Examples

### 🚀 Quick Start

- **[`basic-usage.ts`](./basic-usage.ts)** - Basic SDK usage and setup
  - Connection testing
  - Simple campaign creation
  - Error handling patterns
  - Auto-pagination examples

### 📧 Email Campaigns Resource

- **[`email-campaigns-examples.ts`](./email-campaigns-examples.ts)** - Complete EmailCampaigns functionality
  - **CRUD Operations**: Create, read, update, delete campaigns
  - **Listing & Filtering**: Status, type, date range filtering
  - **Sending Operations**: Test emails, live sending, status management
  - **Statistics & Analytics**: Global stats, performance analysis, rates calculation
  - **Campaign Sharing**: Shared URLs for web viewing
  - **Pagination**: Manual pagination and auto-iteration
  - **Advanced Operations**: Bulk creation, templates, search, performance analysis
  - **Error Handling**: Comprehensive error scenarios

### 👥 Contacts Resource

- **[`contacts-examples.ts`](./contacts-examples.ts)** - Complete Contacts functionality
  - **CRUD Operations**: Create, read, update, delete contacts
  - **List Management**: Create lists, add/remove contacts from lists
  - **Attributes**: Get all attributes, create custom attributes
  - **Pagination**: Manual pagination and auto-iteration
  - **Advanced Operations**: Bulk contact creation, filtering, search
  - **Error Handling**: Validation errors, duplicate handling

### 📧 Transactional Email Resource

- **[`transactional-email-examples.ts`](./transactional-email-examples.ts)** - Complete Transactional Email functionality
  - **Email Sending**: Send personalized emails (welcome, order confirmations, password resets)
  - **Template Management**: Create, read, update, delete email templates
  - **Template-based Sending**: Use templates for consistent messaging
  - **Statistics & Analytics**: Delivery rates, opens, clicks, bounces by date ranges
  - **Advanced Features**: Attachments, CC/BCC, custom headers, A/B testing
  - **Error Handling**: Invalid emails, template errors, validation failures

### 🔄 Multi-Resource Workflow

- **[`multiple-resources.ts`](./multiple-resources.ts)** - Cross-resource integration
  - Contact and campaign workflow
  - Resource architecture demonstration
  - Real-world usage patterns

## 🏃‍♂️ Running Examples

### Prerequisites

1. **Set your API key**:

   ```bash
   export BREVO_API_KEY=xkeysib-your-actual-api-key-here
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Build the SDK**:
   ```bash
   npm run build
   ```

### Run Individual Examples

```bash
# Quick start example
npx tsx examples/basic-usage.ts

# Email campaigns comprehensive examples
npx tsx examples/email-campaigns-examples.ts

# Contacts comprehensive examples
npx tsx examples/contacts-examples.ts

# Transactional email comprehensive examples
npx tsx examples/transactional-email-examples.ts

# Multi-resource workflow
npx tsx examples/multiple-resources.ts
```

### Run All Examples

```bash
# Create a script to run all examples
npm run examples
```

## 📚 Example Structure

Each comprehensive example follows this structure:

### 1. **CRUD Operations**

- Create new resources
- Read/retrieve resources
- Update existing resources
- Delete resources

### 2. **Listing and Filtering**

- Paginated listing
- Status/type filtering
- Date range filtering
- Advanced search

### 3. **Resource-Specific Operations**

- Sending (campaigns)
- List management (contacts)
- Statistics and analytics
- Sharing and URLs

### 4. **Pagination Examples**

- Manual pagination
- Auto-pagination iterators
- Filtered iterations

### 5. **Advanced Operations**

- Bulk operations
- Templates and reuse
- Performance analysis
- Search and filtering

### 6. **Error Handling**

- Validation errors
- Not found errors
- Permission errors
- Network errors

## 🎯 Example Features Demonstrated

### ✅ All Resources Include:

- **Type Safety**: Full TypeScript support with autocomplete
- **Error Handling**: Comprehensive error catching and typed errors
- **Validation**: Input validation with detailed error messages
- **Pagination**: Both manual and automatic pagination
- **Documentation**: Extensive JSDoc with examples
- **Real-world Usage**: Practical, production-ready code patterns

### 📧 Email Campaigns Specific:

- Campaign creation with rich HTML/text content
- Template usage and personalization
- Test email sending
- Live campaign sending
- Statistics and performance analysis
- Campaign sharing and URLs
- Status management (draft, sent, suspended, archive)

### 👥 Contacts Specific:

- Contact attribute management
- List creation and management
- Bulk contact operations
- Contact search and filtering
- Custom attribute creation
- List membership management

### 📧 Transactional Email Specific:

- Individual email sending with personalization
- Template creation and management
- Template-based email delivery
- Email statistics and analytics
- Attachment support and custom headers
- Multi-recipient (CC/BCC) support
- Error handling for email validation

## 🛡️ Safety Notes

### ⚠️ Important Warnings:

1. **Test Mode**: Examples use test data and safe operations
2. **API Limits**: Be mindful of API rate limits during testing
3. **Real Data**: Some examples create real contacts/campaigns
4. **Cleanup**: Examples include cleanup where appropriate
5. **Costs**: Sending operations may incur costs

### 🔧 Development Tips:

1. **Use Test Lists**: Create dedicated test contact lists
2. **Test Emails**: Use your own email for test sending
3. **API Key**: Keep your API key secure and never commit it
4. **Iterative Testing**: Run examples section by section
5. **Error Logging**: Check console output for detailed error information

## 📋 Function Reference

### Email Campaigns (`brevo.emailCampaigns`)

| Method                     | Description                   | Example                                           |
| -------------------------- | ----------------------------- | ------------------------------------------------- |
| `list(params?)`            | List campaigns with filtering | [📧 Line 134](./email-campaigns-examples.ts#L134) |
| `get(id, stats?)`          | Get campaign by ID            | [📧 Line 82](./email-campaigns-examples.ts#L82)   |
| `create(params)`           | Create new campaign           | [📧 Line 20](./email-campaigns-examples.ts#L20)   |
| `update(id, params)`       | Update campaign               | [📧 Line 100](./email-campaigns-examples.ts#L100) |
| `delete(id)`               | Delete campaign               | [📧 Line 661](./email-campaigns-examples.ts#L661) |
| `sendTest(id, params)`     | Send test email               | [📧 Line 234](./email-campaigns-examples.ts#L234) |
| `sendNow(id)`              | Send campaign immediately     | [📧 Line 593](./email-campaigns-examples.ts#L593) |
| `updateStatus(id, status)` | Update campaign status        | [📧 Line 248](./email-campaigns-examples.ts#L248) |
| `getStatistics(id)`        | Get campaign statistics       | [📧 Line 286](./email-campaigns-examples.ts#L286) |
| `getSharedUrl(id)`         | Get shareable URL             | [📧 Line 358](./email-campaigns-examples.ts#L358) |
| `iterate(params?)`         | Auto-pagination iterator      | [📧 Line 410](./email-campaigns-examples.ts#L410) |

### Contacts (`brevo.contacts`)

| Method                                    | Description                  | Example                                    |
| ----------------------------------------- | ---------------------------- | ------------------------------------------ |
| `list(params?)`                           | List contacts with filtering | [👥 Line 77](./contacts-examples.ts#L77)   |
| `get(identifier)`                         | Get contact by email/ID      | [👥 Line 34](./contacts-examples.ts#L34)   |
| `create(params)`                          | Create new contact           | [👥 Line 18](./contacts-examples.ts#L18)   |
| `update(id, params)`                      | Update contact               | [👥 Line 45](./contacts-examples.ts#L45)   |
| `delete(identifier)`                      | Delete contact               | [👥 Line 65](./contacts-examples.ts#L65)   |
| `getLists(params?)`                       | Get contact lists            | [👥 Line 121](./contacts-examples.ts#L121) |
| `createList(params)`                      | Create contact list          | [👥 Line 131](./contacts-examples.ts#L131) |
| `getListContacts(listId)`                 | Get contacts in list         | [👥 Line 141](./contacts-examples.ts#L141) |
| `addToList(listId, contacts)`             | Add contacts to list         | [👥 Line 155](./contacts-examples.ts#L155) |
| `removeFromList(listId, contacts)`        | Remove contacts from list    | [👥 Line 170](./contacts-examples.ts#L170) |
| `getAttributes()`                         | Get contact attributes       | [👥 Line 187](./contacts-examples.ts#L187) |
| `createAttribute(category, name, params)` | Create custom attribute      | [👥 Line 212](./contacts-examples.ts#L212) |
| `iterate(params?)`                        | Auto-pagination iterator     | [👥 Line 272](./contacts-examples.ts#L272) |

### Transactional Email (`brevo.transactionalEmail`)

| Method                       | Description              | Example                                               |
| ---------------------------- | ------------------------ | ----------------------------------------------------- |
| `send(params)`               | Send transactional email | [📧 Line 23](./transactional-email-examples.ts#L23)   |
| `listTemplates(params?)`     | List email templates     | [📧 Line 162](./transactional-email-examples.ts#L162) |
| `getTemplate(id)`            | Get template by ID       | [📧 Line 148](./transactional-email-examples.ts#L148) |
| `createTemplate(params)`     | Create email template    | [📧 Line 102](./transactional-email-examples.ts#L102) |
| `updateTemplate(id, params)` | Update email template    | [📧 Line 175](./transactional-email-examples.ts#L175) |
| `deleteTemplate(id)`         | Delete email template    | [📧 Line 181](./transactional-email-examples.ts#L181) |
| `getStatistics(params?)`     | Get email statistics     | [📧 Line 187](./transactional-email-examples.ts#L187) |
| `iterateTemplates(params?)`  | Auto-pagination iterator | [📧 Line 193](./transactional-email-examples.ts#L193) |

## 🚀 Next Steps

1. **Explore Examples**: Start with `basic-usage.ts` then dive into specific resources
2. **Customize**: Modify examples for your specific use cases
3. **Production**: Use patterns from examples in your production code
4. **Extend**: Add new resources following the same patterns
5. **Contribute**: Share improvements and additional examples

## 💡 Learning Path

1. **Beginner**: Start with `basic-usage.ts`
2. **Intermediate**: Explore individual resource examples
3. **Advanced**: Study `multiple-resources.ts` for integration patterns
4. **Expert**: Implement additional resources using established patterns

Happy coding! 🎉
