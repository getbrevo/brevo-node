# Brevo typescript

Brevo's API v3 TypeScript-Node Library

Brevo's API exposes the entire Brevo features via a standardized programmatic interface. Please refer to the full [documentation](https://developers.brevo.com) to learn more.

This is the wrapper for the API. It implements all the features of the API v3. It supports promises.

Brevo's API matches the [OpenAPI v2 definition](https://www.openapis.org/). The specification can be downloaded [here](https://api.brevo.com/v3/swagger_definition.yml).

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

The following recommended installation requires [npm](https://npmjs.org/). If you are unfamiliar with npm, see the [npm docs](https://npmjs.org/doc/).

Then install it via:

```shell
npm i @groupcards/brevo --save
# or
yarn add @groupcards/brevo
```

## Getting Started

Once you have [installed](#installation) the node module in your project, you can execute the following sample code JS code :

```ts
import BrevoApi from "@groupcards/brevo";

const brevo = new BrevoApi({
  headers: {
    "api-key": "YOUR_API_KEY",
  },
});

brevo.account
  .getAccount()
  .then((data) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error) => {
    console.error(error);
  });
```

```ts
import BrevoApi from "@groupcards/brevo";

const brevo = new BrevoApi({
  headers: {
    "api-key": "YOUR_API_KEY",
  },
});

brevo.smtp
  .sendTransacEmail({
    subject: "My {{params.subject}}",
    htmlContent:
      "<html><body><h1>This is my first transactional email {{params.parameter}}</h1></body></html>",
    sender: {
      name: "John Doe",
      email: "example@example.com",
    },
    to: [{ email: "example@example.com", name: "Jane Doe" }],
    cc: [{ email: "example2@example2.com", name: "Janice Doe" }],
    bcc: [{ email: "example@example.com", name: "John Doe" }],
    replyTo: { email: "replyto@domain.com", name: "John Doe" },
    headers: { "Some-Custom-Name": "unique-id-1234" },
    params: { parameter: "My param value", subject: "New Subject" },
  })
  .then((data) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error) => {
    console.error(error);
  });
```

For more examples, refer the [Endpoints Guide](https://developers.brevo.com/reference)

## Contributing

Please refer to the [CONTRIBUTING](CONTRIBUTING.md) file.
