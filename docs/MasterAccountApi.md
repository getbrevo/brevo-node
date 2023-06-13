# Brevo.MasterAccountApi

All URIs are relative to *https://api.brevo.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**corporateMasterAccountGet**](MasterAccountApi.md#corporateMasterAccountGet) | **GET** /corporate/masterAccount | Get the details of requested master account
[**corporateSubAccountGet**](MasterAccountApi.md#corporateSubAccountGet) | **GET** /corporate/subAccount | Get the list of all the sub-accounts of the master account.
[**corporateSubAccountIdDelete**](MasterAccountApi.md#corporateSubAccountIdDelete) | **DELETE** /corporate/subAccount/{id} | Delete a sub-account
[**corporateSubAccountIdGet**](MasterAccountApi.md#corporateSubAccountIdGet) | **GET** /corporate/subAccount/{id} | Get sub-account details
[**corporateSubAccountIdPlanPut**](MasterAccountApi.md#corporateSubAccountIdPlanPut) | **PUT** /corporate/subAccount/{id}/plan | Update sub-account plan
[**corporateSubAccountKeyPost**](MasterAccountApi.md#corporateSubAccountKeyPost) | **POST** /corporate/subAccount/key | Create an API key for a sub-account
[**corporateSubAccountPost**](MasterAccountApi.md#corporateSubAccountPost) | **POST** /corporate/subAccount | Create a new sub-account under a master account.
[**corporateSubAccountSsoTokenPost**](MasterAccountApi.md#corporateSubAccountSsoTokenPost) | **POST** /corporate/subAccount/ssoToken | Generate SSO token to access Brevo
[**getAccountActivity**](MasterAccountApi.md#getAccountActivity) | **GET** /organization/activities | Get user activity logs


<a name="corporateMasterAccountGet"></a>
# **corporateMasterAccountGet**
> MasterDetailsResponse corporateMasterAccountGet()

Get the details of requested master account

This endpoint will provide the details of the master account.

### Example
```javascript
var Brevo = require('@getbrevo/brevo');
var defaultClient = Brevo.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

// Configure API key authorization: partner-key
var partnerKey = defaultClient.authentications['partner-key'];
partnerKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//partnerKey.apiKeyPrefix = 'Token';

var apiInstance = new Brevo.MasterAccountApi();
apiInstance.corporateMasterAccountGet().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**MasterDetailsResponse**](MasterDetailsResponse.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="corporateSubAccountGet"></a>
# **corporateSubAccountGet**
> SubAccountsResponse corporateSubAccountGet(offset, limit)

Get the list of all the sub-accounts of the master account.

This endpoint will provide the list all the sub-accounts of the master account.

### Example
```javascript
var Brevo = require('@getbrevo/brevo');
var defaultClient = Brevo.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

// Configure API key authorization: partner-key
var partnerKey = defaultClient.authentications['partner-key'];
partnerKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//partnerKey.apiKeyPrefix = 'Token';

var apiInstance = new Brevo.MasterAccountApi();

var offset = 56; // Number | Index of the first sub-account in the page

var limit = 56; // Number | Number of sub-accounts to be displayed on each page

apiInstance.corporateSubAccountGet(offset, limit).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **Number**| Index of the first sub-account in the page | 
 **limit** | **Number**| Number of sub-accounts to be displayed on each page | 

### Return type

[**SubAccountsResponse**](SubAccountsResponse.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="corporateSubAccountIdDelete"></a>
# **corporateSubAccountIdDelete**
> corporateSubAccountIdDelete(id)

Delete a sub-account

### Example
```javascript
var Brevo = require('@getbrevo/brevo');
var defaultClient = Brevo.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

// Configure API key authorization: partner-key
var partnerKey = defaultClient.authentications['partner-key'];
partnerKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//partnerKey.apiKeyPrefix = 'Token';

var apiInstance = new Brevo.MasterAccountApi();

var id = 789; // Number | Id of the sub-account organization to be deleted

apiInstance.corporateSubAccountIdDelete(id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the sub-account organization to be deleted | 

### Return type

null (empty response body)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="corporateSubAccountIdGet"></a>
# **corporateSubAccountIdGet**
> SubAccountDetailsResponse corporateSubAccountIdGet(id)

Get sub-account details

This endpoint will provide the details for the specified sub-account company

### Example
```javascript
var Brevo = require('@getbrevo/brevo');
var defaultClient = Brevo.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

// Configure API key authorization: partner-key
var partnerKey = defaultClient.authentications['partner-key'];
partnerKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//partnerKey.apiKeyPrefix = 'Token';

var apiInstance = new Brevo.MasterAccountApi();

var id = 789; // Number | Id of the sub-account organization

apiInstance.corporateSubAccountIdGet(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the sub-account organization | 

### Return type

[**SubAccountDetailsResponse**](SubAccountDetailsResponse.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="corporateSubAccountIdPlanPut"></a>
# **corporateSubAccountIdPlanPut**
> corporateSubAccountIdPlanPut(id, updatePlanDetails)

Update sub-account plan

This endpoint will update the sub-account plan

### Example
```javascript
var Brevo = require('@getbrevo/brevo');
var defaultClient = Brevo.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

// Configure API key authorization: partner-key
var partnerKey = defaultClient.authentications['partner-key'];
partnerKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//partnerKey.apiKeyPrefix = 'Token';

var apiInstance = new Brevo.MasterAccountApi();

var id = 789; // Number | Id of the sub-account organization

var updatePlanDetails = new Brevo.SubAccountUpdatePlanRequest(); // SubAccountUpdatePlanRequest | Values to update a sub-account plan

apiInstance.corporateSubAccountIdPlanPut(id, updatePlanDetails).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id of the sub-account organization | 
 **updatePlanDetails** | [**SubAccountUpdatePlanRequest**](SubAccountUpdatePlanRequest.md)| Values to update a sub-account plan | 

### Return type

null (empty response body)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="corporateSubAccountKeyPost"></a>
# **corporateSubAccountKeyPost**
> CreateApiKeyResponse corporateSubAccountKeyPost(createApiKeyRequest)

Create an API key for a sub-account

This endpoint will generate an API v3 key for a sub account

### Example
```javascript
var Brevo = require('@getbrevo/brevo');
var defaultClient = Brevo.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

// Configure API key authorization: partner-key
var partnerKey = defaultClient.authentications['partner-key'];
partnerKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//partnerKey.apiKeyPrefix = 'Token';

var apiInstance = new Brevo.MasterAccountApi();

var createApiKeyRequest = new Brevo.CreateApiKeyRequest(); // CreateApiKeyRequest | Values to generate API key for sub-account

apiInstance.corporateSubAccountKeyPost(createApiKeyRequest).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createApiKeyRequest** | [**CreateApiKeyRequest**](CreateApiKeyRequest.md)| Values to generate API key for sub-account | 

### Return type

[**CreateApiKeyResponse**](CreateApiKeyResponse.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="corporateSubAccountPost"></a>
# **corporateSubAccountPost**
> CreateSubAccountResponse corporateSubAccountPost(subAccountCreate)

Create a new sub-account under a master account.

This endpoint will create a new sub-account under a master account

### Example
```javascript
var Brevo = require('@getbrevo/brevo');
var defaultClient = Brevo.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

// Configure API key authorization: partner-key
var partnerKey = defaultClient.authentications['partner-key'];
partnerKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//partnerKey.apiKeyPrefix = 'Token';

var apiInstance = new Brevo.MasterAccountApi();

var subAccountCreate = new Brevo.CreateSubAccount(); // CreateSubAccount | values to create new sub-account

apiInstance.corporateSubAccountPost(subAccountCreate).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subAccountCreate** | [**CreateSubAccount**](CreateSubAccount.md)| values to create new sub-account | 

### Return type

[**CreateSubAccountResponse**](CreateSubAccountResponse.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="corporateSubAccountSsoTokenPost"></a>
# **corporateSubAccountSsoTokenPost**
> GetSsoToken corporateSubAccountSsoTokenPost(ssoTokenRequest)

Generate SSO token to access Brevo

This endpoint generates an sso token to authenticate and access a sub-account of the master using the account endpoint https://account-app.brevo.com/account/login/sub-account/sso/[token], where [token] will be replaced by the actual token.

### Example
```javascript
var Brevo = require('@getbrevo/brevo');
var defaultClient = Brevo.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

// Configure API key authorization: partner-key
var partnerKey = defaultClient.authentications['partner-key'];
partnerKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//partnerKey.apiKeyPrefix = 'Token';

var apiInstance = new Brevo.MasterAccountApi();

var ssoTokenRequest = new Brevo.SsoTokenRequest(); // SsoTokenRequest | Values to generate SSO token for sub-account

apiInstance.corporateSubAccountSsoTokenPost(ssoTokenRequest).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ssoTokenRequest** | [**SsoTokenRequest**](SsoTokenRequest.md)| Values to generate SSO token for sub-account | 

### Return type

[**GetSsoToken**](GetSsoToken.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAccountActivity"></a>
# **getAccountActivity**
> GetAccountActivity getAccountActivity(opts)

Get user activity logs

### Example
```javascript
var Brevo = require('@getbrevo/brevo');
var defaultClient = Brevo.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

// Configure API key authorization: partner-key
var partnerKey = defaultClient.authentications['partner-key'];
partnerKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//partnerKey.apiKeyPrefix = 'Token';

var apiInstance = new Brevo.MasterAccountApi();

var opts = { 
  'startDate': "startDate_example", // String | Mandatory if endDate is used. Enter start date in UTC date (YYYY-MM-DD) format to filter the activity in your account. Maximum time period that can be selected is one month. Additionally, you can retrieve activity logs from the past 12 months from the date of your search.
  'endDate': "endDate_example", // String | Mandatory if startDate is used. Enter end date in UTC date (YYYY-MM-DD) format to filter the activity in your account. Maximum time period that can be selected is one month.
  'limit': 10, // Number | Number of documents per page
  'offset': 0 // Number | Index of the first document in the page.
};
apiInstance.getAccountActivity(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startDate** | **String**| Mandatory if endDate is used. Enter start date in UTC date (YYYY-MM-DD) format to filter the activity in your account. Maximum time period that can be selected is one month. Additionally, you can retrieve activity logs from the past 12 months from the date of your search. | [optional] 
 **endDate** | **String**| Mandatory if startDate is used. Enter end date in UTC date (YYYY-MM-DD) format to filter the activity in your account. Maximum time period that can be selected is one month. | [optional] 
 **limit** | **Number**| Number of documents per page | [optional] [default to 10]
 **offset** | **Number**| Index of the first document in the page. | [optional] [default to 0]

### Return type

[**GetAccountActivity**](GetAccountActivity.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

