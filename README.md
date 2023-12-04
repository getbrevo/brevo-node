# [DEPRECATED:warning:] brevo-ts

SendinBlue's API v3 TypeScript-Node Library

SendinBlue's API exposes the entire SendinBlue features via a standardized programmatic interface. Please refer to the full [documentation](https://developers.sendinblue.com) to learn more.

This is the wrapper for the API. It implements all the features of the API v3. It supports promises.

SendinBlue's API matches the [OpenAPI v2 definition](https://www.openapis.org/). The specification can be downloaded [here](https://api.sendinblue.com/v3/swagger_definition.yml).

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

The following recommended installation requires [npm](https://npmjs.org/). If you are unfamiliar with npm, see the [npm docs](https://npmjs.org/doc/).

Then install it via:

```shell
npm install @getbrevo/ts --save
# or
yarn add @getbrevo/ts
```

## Getting Started

Once you have [installed](#installation) the node module in your project, you can execute the following sample code JS code :

```javascript
import * as SibApiV3Sdk from '@getbrevo/ts'

const apiInstance = new SibApiV3Sdk.AccountApi()

// Configure API key authorization: apiKey

apiInstance.setApiKey(SibApiV3Sdk.AccountApiApiKeys.apiKey, 'YOUR API KEY')

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
import * as SibApiV3Sdk from '@getbrevo/ts'

const apiInstance = new SibApiV3Sdk.ContactsApi()

// Configure API key authorization: apiKey

apiInstance.setApiKey(SibApiV3Sdk.ContactsApiApiKeys.apiKey, 'YOUR API KEY')

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

For more examples, refer the [Endpoints Guide](https://developers.sendinblue.com/reference)