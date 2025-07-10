# Brevo Node SDK

> ⚠️ **Important Notice**: This is the current stable version but we are currently working on rebuilding our Node library from scratch.

## Overview

Brevo's API exposes the entire Brevo features via a standardized programmatic interface. Please refer to the full [documentation](https://developers.brevo.com) to see all the supported operations.

Brevo's API matches the [OpenAPI v2 definition](https://www.openapis.org/). The specification can be downloaded [here](https://api.brevo.com/v3/swagger_definition_v3.yml).

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
