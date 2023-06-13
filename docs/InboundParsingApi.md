# Brevo.InboundParsingApi

All URIs are relative to *https://api.brevo.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getInboundEmailAttachment**](InboundParsingApi.md#getInboundEmailAttachment) | **GET** /inbound/attachments/{downloadToken} | Retrieve inbound attachment with download token.
[**getInboundEmailEvents**](InboundParsingApi.md#getInboundEmailEvents) | **GET** /inbound/events | Get the list of all the events for the received emails.
[**getInboundEmailEventsByUuid**](InboundParsingApi.md#getInboundEmailEventsByUuid) | **GET** /inbound/events/{uuid} | Fetch all events history for one particular received email.


<a name="getInboundEmailAttachment"></a>
# **getInboundEmailAttachment**
> File getInboundEmailAttachment(downloadToken)

Retrieve inbound attachment with download token.

This endpoint will retrieve inbound attachment with download token.

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

var apiInstance = new Brevo.InboundParsingApi();

var downloadToken = "downloadToken_example"; // String | Token to fetch a particular attachment

apiInstance.getInboundEmailAttachment(downloadToken).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **downloadToken** | **String**| Token to fetch a particular attachment | 

### Return type

**File**

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getInboundEmailEvents"></a>
# **getInboundEmailEvents**
> GetInboundEmailEvents getInboundEmailEvents(opts)

Get the list of all the events for the received emails.

This endpoint will show the list of all the events for the received emails.

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

var apiInstance = new Brevo.InboundParsingApi();

var opts = { 
  'sender': "sender_example", // String | Email address of the sender.
  'startDate': "startDate_example", // String | Mandatory if endDate is used. Starting date (YYYY-MM-DD or YYYY-MM-DDTHH:mm:ss.SSSZ) from which you want to fetch the list. Maximum time period that can be selected is one month.
  'endDate': "endDate_example", // String | Mandatory if startDate is used. Ending date (YYYY-MM-DD or YYYY-MM-DDTHH:mm:ss.SSSZ) till which you want to fetch the list. Maximum time period that can be selected is one month.
  'limit': 100, // Number | Number of documents returned per page
  'offset': 0, // Number | Index of the first document on the page
  'sort': "desc" // String | Sort the results in the ascending/descending order of record creation
};
apiInstance.getInboundEmailEvents(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sender** | **String**| Email address of the sender. | [optional] 
 **startDate** | **String**| Mandatory if endDate is used. Starting date (YYYY-MM-DD or YYYY-MM-DDTHH:mm:ss.SSSZ) from which you want to fetch the list. Maximum time period that can be selected is one month. | [optional] 
 **endDate** | **String**| Mandatory if startDate is used. Ending date (YYYY-MM-DD or YYYY-MM-DDTHH:mm:ss.SSSZ) till which you want to fetch the list. Maximum time period that can be selected is one month. | [optional] 
 **limit** | **Number**| Number of documents returned per page | [optional] [default to 100]
 **offset** | **Number**| Index of the first document on the page | [optional] [default to 0]
 **sort** | **String**| Sort the results in the ascending/descending order of record creation | [optional] [default to desc]

### Return type

[**GetInboundEmailEvents**](GetInboundEmailEvents.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getInboundEmailEventsByUuid"></a>
# **getInboundEmailEventsByUuid**
> GetInboundEmailEventsByUuid getInboundEmailEventsByUuid(uuid)

Fetch all events history for one particular received email.

This endpoint will show the list of all events history for one particular received email.

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

var apiInstance = new Brevo.InboundParsingApi();

var uuid = "uuid_example"; // String | UUID to fetch events specific to recieved email

apiInstance.getInboundEmailEventsByUuid(uuid).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**| UUID to fetch events specific to recieved email | 

### Return type

[**GetInboundEmailEventsByUuid**](GetInboundEmailEventsByUuid.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

