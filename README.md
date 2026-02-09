# Brevo Node.js SDK
![](banner.png)

[![fern shield](https://img.shields.io/badge/%F0%9F%8C%BF-Built%20with%20Fern-brightgreen)](https://buildwithfern.com?utm_source=github&utm_medium=github&utm_campaign=readme&utm_source=https%3A%2F%2Fgithub.com%2Fmourraille%2Fdemo-ts)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
[![npm version](https://img.shields.io/npm/v/@getbrevo/brevo)](https://www.npmjs.com/package/@getbrevo/brevo)
[![npm downloads](https://img.shields.io/npm/dm/@getbrevo/brevo)](https://www.npmjs.com/package/@getbrevo/brevo)

[Website](https://brevo.com) • [API Reference](https://developers.brevo.com) • [Support](mailto:support@brevo.com)

---

## Installation

```bash
npm install getbrevo/brevo@^4.0.0
```

## Quick Start

```typescript
import { BrevoClient } from 'getbrevo/brevo@^4.0.0';

const brevo = new BrevoClient({
  apiKey: 'your-api-key',
});

const result = await brevo.transactionalEmails.sendTransacEmail({
  subject: "Hello",
  textContent: "Hello world!",
  sender: { name: "Sender", email: "sender@example.com" },
  to: [{ email: "recipient@example.com" }]
});

console.log('Email sent:', result);
```

---

## Configuration

```typescript
const brevo = new BrevoClient({
  apiKey: 'your-api-key',
  timeout: 30000,      // 30 seconds
  maxRetries: 3        // Default: 2
});
```

---

## Error Handling

The SDK throws specific error types based on HTTP status codes.

```typescript
import { BrevoError, UnauthorizedError, TooManyRequestsError } from 'getbrevo/brevo@^4.0.0';

try {
  await brevo.transactionalEmails.sendTransacEmail({...});
} catch (err) {
  if (err instanceof UnauthorizedError) {
    console.error('Invalid API key');
  } else if (err instanceof TooManyRequestsError) {
    const retryAfter = err.rawResponse.headers['retry-after'];
    console.error(`Rate limited. Retry after ${retryAfter} seconds`);
  } else if (err instanceof BrevoError) {
    console.error(`API Error ${err.statusCode}:`, err.message);
  }
}
```

**Error Types:**
- `400` - `BadRequestError`
- `401` - `UnauthorizedError`
- `403` - `ForbiddenError`
- `404` - `NotFoundError`
- `422` - `UnprocessableEntityError`
- `429` - `TooManyRequestsError`
- `500+` - `InternalServerError`

<details>
<summary>Error properties</summary>

All `BrevoError` instances provide:
- `statusCode`: HTTP status code
- `message`: Error message
- `body`: Parsed error response body
- `rawResponse`: Raw response with headers

</details>

---

## Retries

Automatic retries with exponential backoff are enabled by default (2 retries).

```typescript
// Client-level
const brevo = new BrevoClient({
  apiKey: 'your-api-key',
  maxRetries: 3
});

// Request-level
await brevo.transactionalEmails.sendTransacEmail({...}, {
  maxRetries: 5
});
```

**Retryable status codes:** `408`, `429`, `500`, `502`, `503`, `504`

<details>
<summary>How retries work</summary>

- Exponential backoff: ~1s, ~2s, ~4s (with jitter)
- Respects `Retry-After` header for rate limits
- Can be disabled per request with `maxRetries: 0`

</details>

---

## Timeouts

Default timeout is 60 seconds. Configure at client or request level.

```typescript
// Client-level
const brevo = new BrevoClient({
  apiKey: 'your-api-key',
  timeoutInSeconds: 30
});

// Request-level
await brevo.transactionalEmails.sendTransacEmail({...}, {
  timeoutInSeconds: 10
});
```

**Recommended values:**
- Standard API calls: `30-60s` (default)
- Quick operations: `10-15s`
- Bulk operations: `120-300s`
- Real-time: `5-10s`

---

## Request Options

### Additional Headers

```typescript
await brevo.transactionalEmails.sendTransacEmail({...}, {
  headers: {
    'X-Custom-Header': 'custom-value'
  }
});
```

### Query Parameters

```typescript
await brevo.transactionalEmails.sendTransacEmail({...}, {
  queryParams: {
    'customParam': 'value'
  }
});
```

### Abort Signal

```typescript
const controller = new AbortController();
await brevo.transactionalEmails.sendTransacEmail({...}, {
  abortSignal: controller.signal
});
controller.abort();
```

### Raw Response

```typescript
const { data, rawResponse } = await brevo.transactionalEmails.sendTransacEmail({...})
  .withRawResponse();

console.log(rawResponse.headers['X-My-Header']);
```

---

## Binary Responses

```typescript
const response = await brevo.inboundParsing.getInboundEmailAttachment(...);

// Choose one:
const stream = response.stream();
// const arrayBuffer = await response.arrayBuffer();
// const blob = await response.blob();
// const bytes = await response.bytes();
```

<details>
<summary>Save to file examples</summary>

**Node.js (ReadableStream):**
```typescript
import { createWriteStream } from 'fs';
import { Readable } from 'stream';
import { pipeline } from 'stream/promises';

const stream = response.stream();
const nodeStream = Readable.fromWeb(stream);
await pipeline(nodeStream, createWriteStream('path/to/file'));
```

**Bun:**
```typescript
await Bun.write('path/to/file', response.stream());
```

**Browser:**
```typescript
const blob = await response.blob();
const url = URL.createObjectURL(blob);
const a = document.createElement('a');
a.href = url;
a.download = 'filename';
a.click();
URL.revokeObjectURL(url);
```

</details>

---

## TypeScript Types

All request and response types are exported.

```typescript
import { Brevo } from 'getbrevo/brevo@^4.0.0';

const request: Brevo.SendTransacEmailRequest = {
  subject: "First email",
  textContent: "Hello world!",
  sender: { name: "Bob Wilson", email: "bob.wilson@example.com" },
  to: [{ email: "sarah.davis@example.com", name: "Sarah Davis" }]
};
```

---

## Logging

```typescript
import { BrevoClient, logging } from 'getbrevo/brevo@^4.0.0';

const brevo = new BrevoClient({
  apiKey: 'your-api-key',
  logging: {
    level: logging.LogLevel.Debug,
    logger: new logging.ConsoleLogger(),
    silent: false
  }
});
```

<details>
<summary>Custom logger example</summary>

```typescript
import winston from 'winston';

const winstonLogger = winston.createLogger({...});

const logger: logging.ILogger = {
  debug: (msg, ...args) => winstonLogger.debug(msg, ...args),
  info: (msg, ...args) => winstonLogger.info(msg, ...args),
  warn: (msg, ...args) => winstonLogger.warn(msg, ...args),
  error: (msg, ...args) => winstonLogger.error(msg, ...args),
};
```

</details>

---

## Custom Fetch Client

Override the default fetch implementation for advanced use cases.

```typescript
const customFetcher = async (url: string, options?: RequestInit): Promise<Response> => {
  // Your custom implementation
  return fetch(url, options);
};

const brevo = new BrevoClient({
  apiKey: 'your-api-key',
  fetcher: customFetcher
});
```

<details>
<summary>Common use cases</summary>

**Using node-fetch:**
```typescript
import fetch from 'node-fetch';
const brevo = new BrevoClient({
  apiKey: 'your-api-key',
  fetcher: fetch as any
});
```

**Using undici:**
```typescript
import { fetch } from 'undici';
const brevo = new BrevoClient({
  apiKey: 'your-api-key',
  fetcher: fetch as any
});
```

**With interceptors:**
```typescript
const createFetcherWithInterceptors = () => {
  return async (url: string, options?: RequestInit): Promise<Response> => {
    const modifiedOptions = {
      ...options,
      headers: {
        ...options?.headers,
        'X-Request-ID': generateRequestId()
      }
    };
    const response = await fetch(url, modifiedOptions);
    console.log('Response:', response.status);
    return response;
  };
};
```

</details>

---

## Runtime Compatibility

- Node.js 18+
- Vercel
- Cloudflare Workers
- Deno v1.25+
- Bun 1.0+
- React Native

---

## Migration from v3.x

<details>
<summary>View migration guide</summary>

This version includes breaking changes:

**Key Changes:**
- New client initialization
- Promise-based API
- Improved TypeScript support
- Standardized error handling

**Example:**

**v3.x:**
```typescript
import { TransactionalEmailsApi, SendSmtpEmail } from "@getbrevo/brevo";

let emailAPI = new TransactionalEmailsApi();
(emailAPI as any).authentications.apiKey.apiKey = "xkeysib-xxx";

let message = new SendSmtpEmail();
message.subject = "First email";
message.textContent = "Hello world!";
message.sender = { name: "Bob Wilson", email: "bob.wilson@example.com" };
message.to = [{ email: "sarah.davis@example.com", name: "Sarah Davis" }];

emailAPI.sendTransacEmail(message);
```

**v4.x:**
```typescript
import { BrevoClient } from 'getbrevo/brevo@^4.0.0';

const brevo = new BrevoClient({
  apiKey: 'xkeysib-xxx'
});

await brevo.transactionalEmails.sendTransacEmail({
  subject: "First email",
  textContent: "Hello world!",
  sender: { name: "Bob Wilson", email: "bob.wilson@example.com" },
  to: [{ email: "sarah.davis@example.com", name: "Sarah Davis" }]
});
```

</details>

> [!WARNING]
> The legacy v3.x SDK (`@getbrevo/brevo@^3.0.1`) will continue to receive critical security updates but no new features. We recommend migrating to v4.x.

---

## Contributing

This library is generated programmatically. Changes made directly to the library would be overwritten. Please open an issue first to discuss changes.

Contributions to this README are always welcome!

---

## Support

- [API Reference](https://developers.brevo.com)
- [GitHub Issues](https://github.com/getbrevo/brevo-node/tree/main)
- [Email Support](mailto:support@brevo.com)
