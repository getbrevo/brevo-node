# Brevo.ExternalFeedsApi

All URIs are relative to *https://api.brevo.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createExternalFeed**](ExternalFeedsApi.md#createExternalFeed) | **POST** /feeds | Create an external feed
[**deleteExternalFeed**](ExternalFeedsApi.md#deleteExternalFeed) | **DELETE** /feeds/{uuid} | Delete an external feed
[**getAllExternalFeeds**](ExternalFeedsApi.md#getAllExternalFeeds) | **GET** /feeds | Fetch all external feeds
[**getExternalFeedByUUID**](ExternalFeedsApi.md#getExternalFeedByUUID) | **GET** /feeds/{uuid} | Get an external feed by UUID
[**updateExternalFeed**](ExternalFeedsApi.md#updateExternalFeed) | **PUT** /feeds/{uuid} | Update an external feed


<a name="createExternalFeed"></a>
# **createExternalFeed**
> InlineResponse2014 createExternalFeed(createExternalFeed)

Create an external feed

This endpoint will create an external feed.

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

var apiInstance = new Brevo.ExternalFeedsApi();

var createExternalFeed = new Brevo.CreateExternalFeed(); // CreateExternalFeed | Values to create a feed

apiInstance.createExternalFeed(createExternalFeed).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createExternalFeed** | [**CreateExternalFeed**](CreateExternalFeed.md)| Values to create a feed | 

### Return type

[**InlineResponse2014**](InlineResponse2014.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteExternalFeed"></a>
# **deleteExternalFeed**
> deleteExternalFeed(uuid)

Delete an external feed

This endpoint will delete an external feed.

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

var apiInstance = new Brevo.ExternalFeedsApi();

var uuid = "uuid_example"; // String | UUID of the feed to delete

apiInstance.deleteExternalFeed(uuid).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**| UUID of the feed to delete | 

### Return type

null (empty response body)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllExternalFeeds"></a>
# **getAllExternalFeeds**
> GetAllExternalFeeds getAllExternalFeeds(opts)

Fetch all external feeds

This endpoint can fetch all created external feeds.

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

var apiInstance = new Brevo.ExternalFeedsApi();

var opts = { 
  'search': "search_example", // String | Can be used to filter records by search keyword on feed name
  'startDate': new Date("2013-10-20"), // Date | Mandatory if `endDate` is used. Starting date (YYYY-MM-DD) from which you want to fetch the list. Can be maximum 30 days older than current date.
  'endDate': new Date("2013-10-20"), // Date | Mandatory if `startDate` is used. Ending date (YYYY-MM-DD) till which you want to fetch the list. Maximum time period that can be selected is one month.
  'sort': "desc", // String | Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed.
  'authType': "authType_example", // String | Filter the records by `authType` of the feed.
  'limit': 50, // Number | Number of documents returned per page.
  'offset': 0 // Number | Index of the first document on the page.
};
apiInstance.getAllExternalFeeds(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search** | **String**| Can be used to filter records by search keyword on feed name | [optional] 
 **startDate** | **Date**| Mandatory if `endDate` is used. Starting date (YYYY-MM-DD) from which you want to fetch the list. Can be maximum 30 days older than current date. | [optional] 
 **endDate** | **Date**| Mandatory if `startDate` is used. Ending date (YYYY-MM-DD) till which you want to fetch the list. Maximum time period that can be selected is one month. | [optional] 
 **sort** | **String**| Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed. | [optional] [default to desc]
 **authType** | **String**| Filter the records by `authType` of the feed. | [optional] 
 **limit** | **Number**| Number of documents returned per page. | [optional] [default to 50]
 **offset** | **Number**| Index of the first document on the page. | [optional] [default to 0]

### Return type

[**GetAllExternalFeeds**](GetAllExternalFeeds.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getExternalFeedByUUID"></a>
# **getExternalFeedByUUID**
> GetExternalFeedByUUID getExternalFeedByUUID(uuid)

Get an external feed by UUID

This endpoint will update an external feed.

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

var apiInstance = new Brevo.ExternalFeedsApi();

var uuid = "uuid_example"; // String | UUID of the feed to fetch

apiInstance.getExternalFeedByUUID(uuid).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**| UUID of the feed to fetch | 

### Return type

[**GetExternalFeedByUUID**](GetExternalFeedByUUID.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateExternalFeed"></a>
# **updateExternalFeed**
> updateExternalFeed(uuid, updateExternalFeed)

Update an external feed

This endpoint will update an external feed.

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

var apiInstance = new Brevo.ExternalFeedsApi();

var uuid = "uuid_example"; // String | UUID of the feed to update

var updateExternalFeed = new Brevo.UpdateExternalFeed(); // UpdateExternalFeed | Values to update a feed

apiInstance.updateExternalFeed(uuid, updateExternalFeed).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**| UUID of the feed to update | 
 **updateExternalFeed** | [**UpdateExternalFeed**](UpdateExternalFeed.md)| Values to update a feed | 

### Return type

null (empty response body)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

