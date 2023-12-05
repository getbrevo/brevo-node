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
npm i @getbrevo/brevo --save
# or
yarn add @getbrevo/brevo
```

## Getting Started

Once you have [installed](#installation) the node module in your project, you can execute the following sample code JS code :

```javascript
const SibApiV3Sdk = require('@getbrevo/brevo');

let apiInstance = new SibApiV3Sdk.AccountApi();

apiInstance.setApiKey(SibApiV3Sdk.AccountApiApiKeys.apiKey, 'YOUR API KEY')

apiInstance.getAccount().then(function(data) {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));

}, function(error) {
  console.error(error);
});
```

```javascript
const SibApiV3Sdk = require('@getbrevo/brevo');

let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

let apiKey = apiInstance.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';

let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail(); 

sendSmtpEmail.subject = "My {{params.subject}}";
sendSmtpEmail.htmlContent = "<html><body><h1>This is my first transactional email {{params.parameter}}</h1></body></html>";
sendSmtpEmail.sender = {"name":"John Doe","email":"example@example.com"};
sendSmtpEmail.to = [{"email":"example@example.com","name":"Jane Doe"}];
sendSmtpEmail.cc = [{"email":"example2@example2.com","name":"Janice Doe"}];
sendSmtpEmail.bcc = [{"name":"John Doe","email":"example@example.com"}];
sendSmtpEmail.replyTo = {"email":"replyto@domain.com","name":"John Doe"};
sendSmtpEmail.headers = {"Some-Custom-Name":"unique-id-1234"};
sendSmtpEmail.params = {"parameter":"My param value","subject":"New Subject"};

apiInstance.sendTransacEmail(sendSmtpEmail).then(function(data) {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));

}, function(error) {
  console.error(error);
});
```

For more examples, refer the [Endpoints Guide](https://developers.brevo.com/reference)