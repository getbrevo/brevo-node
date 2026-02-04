# Brevo TypeScript Library

[![fern shield](https://img.shields.io/badge/%F0%9F%8C%BF-Built%20with%20Fern-brightgreen)](https://buildwithfern.com?utm_source=github&utm_medium=github&utm_campaign=readme&utm_source=https%3A%2F%2Fgithub.com%2Fgetbrevo%2Fbrevo-node)
[![npm shield](https://img.shields.io/npm/v/)](https://www.npmjs.com/package/)

The Brevo TypeScript library provides convenient access to the Brevo APIs from TypeScript.

## Table of Contents

- [Overview](#overview)
- [Node Js Implementation](#node-js-implementation)
- [Type Script Implementation](#type-script-implementation)
- [Support](#support)
- [License](#license)
- [Installation](#installation)
- [Reference](#reference)
- [Usage](#usage)
- [Request and Response Types](#request-and-response-types)
- [Exception Handling](#exception-handling)
- [File Uploads](#file-uploads)
- [Binary Response](#binary-response)
- [Advanced](#advanced)
  - [Additional Headers](#additional-headers)
  - [Additional Query String Parameters](#additional-query-string-parameters)
  - [Retries](#retries)
  - [Timeouts](#timeouts)
  - [Aborting Requests](#aborting-requests)
  - [Access Raw Response Data](#access-raw-response-data)
  - [Logging](#logging)
  - [Runtime Compatibility](#runtime-compatibility)
- [Contributing](#contributing)

## Overview

Brevo's API exposes the entire Brevo features via a standardized programmatic interface. Please refer to the full [documentation](https://developers.brevo.com) to see all the supported operations.

Brevo's API matches the [OpenAPI v2 definition](https://www.openapis.org/). The specification can be downloaded [here](https://api.brevo.com/v3/swagger_definition_v3.yml).

Our current library is not fully compatible with all modern Node.js and TypeScript environments. To help you integrate Brevo into your applications, we're providing both plain Node.js and TypeScript-specific implementation approaches below while we work on the next generation of our SDK.

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

# Concerning v3.0.0 and above:
> [!IMPORTANT]
> There has been a change in the usage of this library after v3.0.0 which is not backward compatible.

### Installation

```npm i @getbrevo/brevo --save```

### Import packages

```import { CreateContact, ContactsApi } from "@getbrevo/brevo";```

### Instantiate API with your credentials

```
let contactAPI = new ContactsApi();
(contactAPI as any).authentications.apiKey.apiKey = "xkeysib-xxxxxxxxx";
```

### Build your contact

```let contact = new CreateContact();
contact.email = "michael.brown@example.com";
contact.attributes = {
  FIRSTNAME: { value: "Michael" },
  LASTNAME: { value: "Brown" }
};
```

### Create the contact

```contactAPI.createContact(contact).then(res => {
  console.log(JSON.stringify(res.body));
}).catch(err => {
  console.error("Error creating contact:", err.body);
});
```

### Similar other examples:

```typescript

import { TransactionalEmailsApi, TransactionalEmailsApiApiKeys } from '@getbrevo/brevo';

const transactionalEmailsApi = new TransactionalEmailsApi();
transactionalEmailsApi.setApiKey(TransactionalEmailsApiApiKeys.apiKey, 'xkeysib-API_KEY');

async function sendTransactionalEmail() {
  try {
    const result = await transactionalEmailsApi.sendTransacEmail({
      to: [
        { email: 'sampleemail@gmail.com', name: 'John doe' },
      ],
      subject: 'Hello from Brevo SDK!',
      htmlContent: '<h1>This is a transactional email sent using the Brevo SDK.</h1>',
      textContent: 'This is a transactional email sent using the Brevo SDK.',
      sender: { email: 'sampleemail@gmail.com', name: 'John doe' },
    });
    console.log('Email sent! Message ID:', result.body.messageId);
  } catch (error) {
    console.error('Failed to send email:', error);
  }
}

sendTransactionalEmail(); 
```

```typescript

import { DealsApi, DealsApiApiKeys } from '@getbrevo/brevo';

const dealsApi = new DealsApi();
dealsApi.setApiKey(DealsApiApiKeys.apiKey, 'xkeysib-YOUR_API_KEY');

async function getDeals() {
  try {
    const response = await dealsApi.crmDealsGet()
    console.log('Deals info:', response.body);
  } catch (error) {
    console.error('Failed to get account info:', error);
  }
}

getDeals();
```

```typescript

import { AccountApi, AccountApiApiKeys } from '@getbrevo/brevo';

const accountApi = new AccountApi();
accountApi.setApiKey(AccountApiApiKeys.apiKey, 'xkeysib-YOUR_API_KEY');

async function getAccount() {
  try {
    const response = await accountApi.getAccount();
    console.log('Account info:', response.body);
  } catch (error) {
    console.error('Failed to get account info:', error);
  }
}

getAccount();
```

```typescript

import { ContactsApi, ContactsApiApiKeys } from '@getbrevo/brevo';

const contactsApi = new ContactsApi();
contactsApi.setApiKey(ContactsApiApiKeys.apiKey, 'xkeysib-YOUR_API_KEY');

async function getContacts(limit: number, offset: number) {
  try {
    const result = await contactsApi.getContacts(limit, offset);
    console.log('Contacts:', result.body);
  } catch (error) {
    console.error('Failed to get contacts:', error);
  }
}

getContacts(10, 0); // Example: get first 10 contacts 
```


## Support

For questions and support, please refer to our [documentation](https://developers.brevo.com) or contact our support team.

## License

This SDK is distributed under the MIT License.

## Installation

```sh
npm i -s 
```

## Reference

A full reference for this library is available [here](https://github.com/getbrevo/brevo-node/blob/HEAD/./reference.md).

## Usage

Instantiate and use the client with the following:

```typescript
import { BrevoClient } from "";

const client = new BrevoClient({ apiKey: "YOUR_API_KEY" });
await client.masterAccount.createANewGroupOfSubAccounts({
    groupName: "My group"
});
```

## Request and Response Types

The SDK exports all request and response types as TypeScript interfaces. Simply import them with the
following namespace:

```typescript
import { Brevo } from "Brevo";

const request: Brevo.GetAccountActivityRequest = {
    ...
};
```

## Exception Handling

When the API returns a non-success status code (4xx or 5xx response), a subclass of the following error
will be thrown.

```typescript
import { BrevoError } from "Brevo";

try {
    await client.masterAccount.createANewGroupOfSubAccounts(...);
} catch (err) {
    if (err instanceof BrevoError) {
        console.log(err.statusCode);
        console.log(err.message);
        console.log(err.body);
        console.log(err.rawResponse);
    }
}
```

## File Uploads

You can upload files using the client:

```typescript
import { createReadStream } from "fs";
import { BrevoClient } from "";

const client = new BrevoClient({ apiKey: "YOUR_API_KEY" });
await client.companies.importCompaniesCreationAndUpdation({});
```
The client accepts a variety of types for file upload parameters:
* Stream types: `fs.ReadStream`, `stream.Readable`, and `ReadableStream`
* Buffered types: `Buffer`, `Blob`, `File`, `ArrayBuffer`, `ArrayBufferView`, and `Uint8Array`

### Metadata

You can configure metadata when uploading a file:
```typescript
const file: Uploadable.WithMetadata = {
    data: createReadStream("path/to/file"),
    filename: "my-file",       // optional
    contentType: "audio/mpeg", // optional
    contentLength: 1949,       // optional
};
```

Alternatively, you can upload a file directly from a file path:
```typescript
const file : Uploadable.FromPath = {
    path: "path/to/file",
    filename: "my-file",        // optional
    contentType: "audio/mpeg",  // optional
    contentLength: 1949,        // optional
};
```

The metadata is used to set the `Content-Length`, `Content-Type`, and `Content-Disposition` headers. If not provided, the client will attempt to determine them automatically.
For example, `fs.ReadStream` has a `path` property which the SDK uses to retrieve the file size from the filesystem without loading it into memory.


## Binary Response

You can consume binary data from endpoints using the `BinaryResponse` type which lets you choose how to consume the data:

```typescript
const response = await client.inboundParsing.getInboundEmailAttachment(...);
const stream: ReadableStream<Uint8Array> = response.stream();
// const arrayBuffer: ArrayBuffer = await response.arrayBuffer();
// const blob: Blob = response.blob();
// const bytes: Uint8Array = response.bytes();
// You can only use the response body once, so you must choose one of the above methods.
// If you want to check if the response body has been used, you can use the following property.
const bodyUsed = response.bodyUsed;
```
<details>
<summary>Save binary response to a file</summary>

<blockquote>
<details>
<summary>Node.js</summary>

<blockquote>
<details>
<summary>ReadableStream (most-efficient)</summary>

```ts
import { createWriteStream } from 'fs';
import { Readable } from 'stream';
import { pipeline } from 'stream/promises';

const response = await client.inboundParsing.getInboundEmailAttachment(...);

const stream = response.stream();
const nodeStream = Readable.fromWeb(stream);
const writeStream = createWriteStream('path/to/file');

await pipeline(nodeStream, writeStream);
```

</details>
</blockquote>

<blockquote>
<details>
<summary>ArrayBuffer</summary>

```ts
import { writeFile } from 'fs/promises';

const response = await client.inboundParsing.getInboundEmailAttachment(...);

const arrayBuffer = await response.arrayBuffer();
await writeFile('path/to/file', Buffer.from(arrayBuffer));
```

</details>
</blockquote>

<blockquote>
<details>
<summary>Blob</summary>

```ts
import { writeFile } from 'fs/promises';

const response = await client.inboundParsing.getInboundEmailAttachment(...);

const blob = await response.blob();
const arrayBuffer = await blob.arrayBuffer();
await writeFile('output.bin', Buffer.from(arrayBuffer));
```

</details>
</blockquote>

<blockquote>
<details>
<summary>Bytes (UIntArray8)</summary>

```ts
import { writeFile } from 'fs/promises';

const response = await client.inboundParsing.getInboundEmailAttachment(...);

const bytes = await response.bytes();
await writeFile('path/to/file', bytes);
```

</details>
</blockquote>

</details>
</blockquote>

<blockquote>
<details>
<summary>Bun</summary>

<blockquote>
<details>
<summary>ReadableStream (most-efficient)</summary>

```ts
const response = await client.inboundParsing.getInboundEmailAttachment(...);

const stream = response.stream();
await Bun.write('path/to/file', stream);
```

</details>
</blockquote>

<blockquote>
<details>
<summary>ArrayBuffer</summary>

```ts
const response = await client.inboundParsing.getInboundEmailAttachment(...);

const arrayBuffer = await response.arrayBuffer();
await Bun.write('path/to/file', arrayBuffer);
```

</details>
</blockquote>

<blockquote>
<details>
<summary>Blob</summary>

```ts
const response = await client.inboundParsing.getInboundEmailAttachment(...);

const blob = await response.blob();
await Bun.write('path/to/file', blob);
```

</details>
</blockquote>

<blockquote>
<details>
<summary>Bytes (UIntArray8)</summary>

```ts
const response = await client.inboundParsing.getInboundEmailAttachment(...);

const bytes = await response.bytes();
await Bun.write('path/to/file', bytes);
```

</details>
</blockquote>

</details>
</blockquote>

<blockquote>
<details>
<summary>Deno</summary>

<blockquote>
<details>
<summary>ReadableStream (most-efficient)</summary>

```ts
const response = await client.inboundParsing.getInboundEmailAttachment(...);

const stream = response.stream();
const file = await Deno.open('path/to/file', { write: true, create: true });
await stream.pipeTo(file.writable);
```

</details>
</blockquote>

<blockquote>
<details>
<summary>ArrayBuffer</summary>

```ts
const response = await client.inboundParsing.getInboundEmailAttachment(...);

const arrayBuffer = await response.arrayBuffer();
await Deno.writeFile('path/to/file', new Uint8Array(arrayBuffer));
```

</details>
</blockquote>

<blockquote>
<details>
<summary>Blob</summary>

```ts
const response = await client.inboundParsing.getInboundEmailAttachment(...);

const blob = await response.blob();
const arrayBuffer = await blob.arrayBuffer();
await Deno.writeFile('path/to/file', new Uint8Array(arrayBuffer));
```

</details>
</blockquote>

<blockquote>
<details>
<summary>Bytes (UIntArray8)</summary>

```ts
const response = await client.inboundParsing.getInboundEmailAttachment(...);

const bytes = await response.bytes();
await Deno.writeFile('path/to/file', bytes);
```

</details>
</blockquote>

</details>
</blockquote>

<blockquote>
<details>
<summary>Browser</summary>

<blockquote>
<details>
<summary>Blob (most-efficient)</summary>

```ts
const response = await client.inboundParsing.getInboundEmailAttachment(...);

const blob = await response.blob();
const url = URL.createObjectURL(blob);

// trigger download
const a = document.createElement('a');
a.href = url;
a.download = 'filename';
a.click();
URL.revokeObjectURL(url);
```

</details>
</blockquote>

<blockquote>
<details>
<summary>ReadableStream</summary>

```ts
const response = await client.inboundParsing.getInboundEmailAttachment(...);

const stream = response.stream();
const reader = stream.getReader();
const chunks = [];

while (true) {
  const { done, value } = await reader.read();
  if (done) break;
  chunks.push(value);
}

const blob = new Blob(chunks);
const url = URL.createObjectURL(blob);

// trigger download
const a = document.createElement('a');
a.href = url;
a.download = 'filename';
a.click();
URL.revokeObjectURL(url);
```

</details>
</blockquote>

<blockquote>
<details>
<summary>ArrayBuffer</summary>

```ts
const response = await client.inboundParsing.getInboundEmailAttachment(...);

const arrayBuffer = await response.arrayBuffer();
const blob = new Blob([arrayBuffer]);
const url = URL.createObjectURL(blob);

// trigger download
const a = document.createElement('a');
a.href = url;
a.download = 'filename';
a.click();
URL.revokeObjectURL(url);
```

</details>
</blockquote>

<blockquote>
<details>
<summary>Bytes (UIntArray8)</summary>

```ts
const response = await client.inboundParsing.getInboundEmailAttachment(...);

const bytes = await response.bytes();
const blob = new Blob([bytes]);
const url = URL.createObjectURL(blob);

// trigger download
const a = document.createElement('a');
a.href = url;
a.download = 'filename';
a.click();
URL.revokeObjectURL(url);
```

</details>
</blockquote>

</details>
</blockquote>

</details>
</blockquote>

<details>
<summary>Convert binary response to text</summary>

<blockquote>
<details>
<summary>ReadableStream</summary>

```ts
const response = await client.inboundParsing.getInboundEmailAttachment(...);

const stream = response.stream();
const text = await new Response(stream).text();
```

</details>
</blockquote>

<blockquote>
<details>
<summary>ArrayBuffer</summary>

```ts
const response = await client.inboundParsing.getInboundEmailAttachment(...);

const arrayBuffer = await response.arrayBuffer();
const text = new TextDecoder().decode(arrayBuffer);
```

</details>
</blockquote>

<blockquote>
<details>
<summary>Blob</summary>

```ts
const response = await client.inboundParsing.getInboundEmailAttachment(...);

const blob = await response.blob();
const text = await blob.text();
```

</details>
</blockquote>

<blockquote>
<details>
<summary>Bytes (UIntArray8)</summary>

```ts
const response = await client.inboundParsing.getInboundEmailAttachment(...);

const bytes = await response.bytes();
const text = new TextDecoder().decode(bytes);
```

</details>
</blockquote>

</details>

## Advanced

### Additional Headers

If you would like to send additional headers as part of the request, use the `headers` request option.

```typescript
import { BrevoClient } from "Brevo";

const client = new BrevoClient({
    ...
    headers: {
        'X-Custom-Header': 'custom value'
    }
});

const response = await client.masterAccount.createANewGroupOfSubAccounts(..., {
    headers: {
        'X-Custom-Header': 'custom value'
    }
});
```

### Additional Query String Parameters

If you would like to send additional query string parameters as part of the request, use the `queryParams` request option.

```typescript
const response = await client.masterAccount.createANewGroupOfSubAccounts(..., {
    queryParams: {
        'customQueryParamKey': 'custom query param value'
    }
});
```

### Retries

The SDK is instrumented with automatic retries with exponential backoff. A request will be retried as long
as the request is deemed retryable and the number of retry attempts has not grown larger than the configured
retry limit (default: 2).

A request is deemed retryable when any of the following HTTP status codes is returned:

- [408](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/408) (Timeout)
- [429](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429) (Too Many Requests)
- [5XX](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500) (Internal Server Errors)

Use the `maxRetries` request option to configure this behavior.

```typescript
const response = await client.masterAccount.createANewGroupOfSubAccounts(..., {
    maxRetries: 0 // override maxRetries at the request level
});
```

### Timeouts

The SDK defaults to a 60 second timeout. Use the `timeoutInSeconds` option to configure this behavior.

```typescript
const response = await client.masterAccount.createANewGroupOfSubAccounts(..., {
    timeoutInSeconds: 30 // override timeout to 30s
});
```

### Aborting Requests

The SDK allows users to abort requests at any point by passing in an abort signal.

```typescript
const controller = new AbortController();
const response = await client.masterAccount.createANewGroupOfSubAccounts(..., {
    abortSignal: controller.signal
});
controller.abort(); // aborts the request
```

### Access Raw Response Data

The SDK provides access to raw response data, including headers, through the `.withRawResponse()` method.
The `.withRawResponse()` method returns a promise that results to an object with a `data` and a `rawResponse` property.

```typescript
const { data, rawResponse } = await client.masterAccount.createANewGroupOfSubAccounts(...).withRawResponse();

console.log(data);
console.log(rawResponse.headers['X-My-Header']);
```

### Logging

The SDK supports logging. You can configure the logger by passing in a `logging` object to the client options.

```typescript
import { BrevoClient, logging } from "Brevo";

const client = new BrevoClient({
    ...
    logging: {
        level: logging.LogLevel.Debug, // defaults to logging.LogLevel.Info
        logger: new logging.ConsoleLogger(), // defaults to ConsoleLogger
        silent: false, // defaults to true, set to false to enable logging
    }
});
```
The `logging` object can have the following properties:
- `level`: The log level to use. Defaults to `logging.LogLevel.Info`.
- `logger`: The logger to use. Defaults to a `logging.ConsoleLogger`.
- `silent`: Whether to silence the logger. Defaults to `true`.

The `level` property can be one of the following values:
- `logging.LogLevel.Debug`
- `logging.LogLevel.Info`
- `logging.LogLevel.Warn`
- `logging.LogLevel.Error`

To provide a custom logger, you can pass in an object that implements the `logging.ILogger` interface.

<details>
<summary>Custom logger examples</summary>

Here's an example using the popular `winston` logging library.
```ts
import winston from 'winston';

const winstonLogger = winston.createLogger({...});

const logger: logging.ILogger = {
    debug: (msg, ...args) => winstonLogger.debug(msg, ...args),
    info: (msg, ...args) => winstonLogger.info(msg, ...args),
    warn: (msg, ...args) => winstonLogger.warn(msg, ...args),
    error: (msg, ...args) => winstonLogger.error(msg, ...args),
};
```

Here's an example using the popular `pino` logging library.

```ts
import pino from 'pino';

const pinoLogger = pino({...});

const logger: logging.ILogger = {
  debug: (msg, ...args) => pinoLogger.debug(args, msg),
  info: (msg, ...args) => pinoLogger.info(args, msg),
  warn: (msg, ...args) => pinoLogger.warn(args, msg),
  error: (msg, ...args) => pinoLogger.error(args, msg),
};
```
</details>


### Runtime Compatibility


The SDK works in the following runtimes:



- Node.js 18+
- Vercel
- Cloudflare Workers
- Deno v1.25+
- Bun 1.0+
- React Native

### Customizing Fetch Client

The SDK provides a way for you to customize the underlying HTTP client / Fetch function. If you're running in an
unsupported environment, this provides a way for you to break glass and ensure the SDK works.

```typescript
import { BrevoClient } from "Brevo";

const client = new BrevoClient({
    ...
    fetcher: // provide your implementation here
});
```

## Contributing

While we value open-source contributions to this SDK, this library is generated programmatically.
Additions made directly to this library would have to be moved over to our generation code,
otherwise they would be overwritten upon the next generated release. Feel free to open a PR as
a proof of concept, but know that we will not be able to merge it as-is. We suggest opening
an issue first to discuss with us!

On the other hand, contributions to the README are always very welcome!