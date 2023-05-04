# APIv3-typescript-library

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
npm install @brevo/client --save
# or
yarn add @brevo/client
```

## Getting Started

Once you have [installed](#installation) the node module in your project, you can execute the following sample code JS code :

```javascript
import * as BrevoSdk from '@brevo/client'

const apiInstance = new BrevoSdk.AccountApi()

// Configure API key authorization: apiKey

apiInstance.setApiKey(BrevoSdk.AccountApiApiKeys.apiKey, 'YOUR API KEY')

apiInstance.getAccount().then(
  function (data) {
    console.log('API called successfully. Returned data: ', data.body)
  },
  function (error) {
    console.error(error)
  }
)
```

```javascript
import * as BrevoSdk from '@brevo/client'

const apiInstance = new BrevoSdk.ContactsApi()

// Configure API key authorization: apiKey

apiInstance.setApiKey(BrevoSdk.ContactsApiApiKeys.apiKey, 'YOUR API KEY')

const limit = 10 // Number | Number of documents per page
const offset = 0 // Number | Index of the first document of the page

apiInstance.getLists(limit, offset).then(
  function (data) {
    console.log('API called successfully. Returned data: ', data.body)
    apiInstance.getAttributes().then(
      function (data) {
        console.log('API called successfully. Returned data: ', data.body)
      },
      function (error) {
        console.error(error)
      }
    )
  },
  function (error) {
    console.error(error)
  }
)
```

For more examples, refer the [Endpoints Guide](https://developers.brevo.com/reference)
