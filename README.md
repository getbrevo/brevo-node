# Brevo typescript

Brevo's API v3 TypeScript-Node Library

Brevo's API exposes the entire Brevo features via a standardized programmatic interface. Please refer to the full [documentation](https://developers.brevo.com) to learn more.

This is the wrapper for the API. It implements all the features of the API v3. It supports promises.

Brevo's API matches the [OpenAPI v2 definition](https://www.openapis.org/). The specification can be downloaded [here](https://api.brevo.com/v3/swagger_definition_v3.yml).

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



# We have two options:
- First example is where **typescript is not supported** i.e. [v1.0.1]([url](https://www.npmjs.com/package/@getbrevo/brevo/v/1.0.1))
- Second example is where **typescript is supported** i.e. [v2.1.1]([url](https://www.npmjs.com/package/@getbrevo/brevo/v/2.1.1))


```shell
-------------------------------------------------------------------------------------------------------------------------
----------------------------------------------   Typescript not supported v1.0.1  ---------------------------------------
-------------------------------------------------------------------------------------------------------------------------
const brevo = require('@getbrevo/brevo');
let defaultClient = brevo.ApiClient.instance;

let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';

let apiInstance = new brevo.TransactionalEmailsApi();
let sendSmtpEmail = new brevo.SendSmtpEmail();

sendSmtpEmail.subject = "My {{params.subject}}";
sendSmtpEmail.htmlContent = "<html><body><h1>Common: This is my first transactional email {{params.parameter}}</h1></body></html>";
sendSmtpEmail.sender = { "name": "John", "email": "example@example.com" };
sendSmtpEmail.to = [
  { "email": "example@brevo.com", "name": "sample-name" }
];
sendSmtpEmail.replyTo = { "email": "example@brevo.com", "name": "sample-name" };
sendSmtpEmail.headers = { "Some-Custom-Name": "unique-id-1234" };
sendSmtpEmail.params = { "parameter": "My param value", "subject": "common subject" };


apiInstance.sendTransacEmail(sendSmtpEmail).then(function (data) {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, function (error) {
  console.error(error);
});

```
-------------------------------------------------------------------------------------------------------------------------
## Typescript supported with version v2.1.1

```shell
-------------------------------------------------------------------------------------------------------------------------
----------------------------------------------   Typescript supported with v2.1.1  --------------------------------------
-------------------------------------------------------------------------------------------------------------------------
const brevo = require('@getbrevo/brevo');
let apiInstance = new brevo.TransactionalEmailsApi();

let apiKey = apiInstance.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';

let sendSmtpEmail = new brevo.SendSmtpEmail();

sendSmtpEmail.subject = "My {{params.subject}}";
sendSmtpEmail.htmlContent = "<html><body><h1>Common: This is my first transactional email {{params.parameter}}</h1></body></html>";
sendSmtpEmail.sender = { "name": "John", "email": "shubham.upadhyay@sendinblue.com" };
sendSmtpEmail.to = [
  { "email": "shubham.upadhyay@sendinblue.com", "name": "shubham upadhyay" }
];
sendSmtpEmail.replyTo = { "email": "shubham.upadhyay@sendinblue.com", "name": "Shubham Upadhyay" };
sendSmtpEmail.headers = { "Some-Custom-Name": "unique-id-1234" };
sendSmtpEmail.params = { "parameter": "My param value", "subject": "common subject" };


apiInstance.sendTransacEmail(sendSmtpEmail).then(function (data) {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, function (error) {
  console.error(error);
});

```
-------------------------------------------------------------------------------------------------------------------------
## Get Contact attributes API example:

```shell
const brevo = require('@getbrevo/brevo');

let apiInstance = new brevo.ContactsApi()

let apiKey = apiInstance.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';

apiInstance.getAttributes().then(function(data) {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));

}, function(error) {
  console.error(error);
});

```
-------------------------------------------------------------------------------------------------------------------------
## Get Account API example:

```shell
const brevo = require('@getbrevo/brevo');

let apiInstance = new brevo.AccountApi()

let apiKey = apiInstance.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';

apiInstance.getAccount().then(function(data) {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));

}, function(error) {
  console.error(error);
});

```
-------------------------------------------------------------------------------------------------------------------------
## Get Contacts API example:
```shell
const brevo = require('@getbrevo/brevo');

let apiInstance = new brevo.ContactsApi()

let apiKey = apiInstance.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';

apiInstance.getContacts().then(function(data) {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));

}, function(error) {
  console.error(error);
});
```

For more examples, refer the [Endpoints Guide](https://developers.brevo.com/reference)
