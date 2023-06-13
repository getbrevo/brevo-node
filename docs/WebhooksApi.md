# Brevo.WebhooksApi

All URIs are relative to *https://api.brevo.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createWebhook**](WebhooksApi.md#createWebhook) | **POST** /webhooks | Create a webhook
[**deleteWebhook**](WebhooksApi.md#deleteWebhook) | **DELETE** /webhooks/{webhookId} | Delete a webhook
[**exportWebhooksHistory**](WebhooksApi.md#exportWebhooksHistory) | **POST** /webhooks/export | Export all transactional events
[**getWebhook**](WebhooksApi.md#getWebhook) | **GET** /webhooks/{webhookId} | Get a webhook details
[**getWebhooks**](WebhooksApi.md#getWebhooks) | **GET** /webhooks | Get all webhooks
[**updateWebhook**](WebhooksApi.md#updateWebhook) | **PUT** /webhooks/{webhookId} | Update a webhook


<a name="createWebhook"></a>
# **createWebhook**
> CreateModel createWebhook(createWebhook)

Create a webhook

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

var apiInstance = new Brevo.WebhooksApi();

var createWebhook = new Brevo.CreateWebhook(); // CreateWebhook | Values to create a webhook

apiInstance.createWebhook(createWebhook).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createWebhook** | [**CreateWebhook**](CreateWebhook.md)| Values to create a webhook | 

### Return type

[**CreateModel**](CreateModel.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteWebhook"></a>
# **deleteWebhook**
> deleteWebhook(webhookId)

Delete a webhook

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

var apiInstance = new Brevo.WebhooksApi();

var webhookId = 789; // Number | Id of the webhook

apiInstance.deleteWebhook(webhookId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhookId** | **Number**| Id of the webhook | 

### Return type

null (empty response body)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="exportWebhooksHistory"></a>
# **exportWebhooksHistory**
> CreatedProcessId exportWebhooksHistory(exportWebhookHistory)

Export all transactional events

This endpoint will submit a request to get the history of webhooks in the CSV file. The link to download that CSV file will send to the webhook link provided in notifyURL of the body payload.

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

var apiInstance = new Brevo.WebhooksApi();

var exportWebhookHistory = new Brevo.ExportWebhooksHistory(); // ExportWebhooksHistory | Values to submit for webhooks history

apiInstance.exportWebhooksHistory(exportWebhookHistory).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exportWebhookHistory** | [**ExportWebhooksHistory**](ExportWebhooksHistory.md)| Values to submit for webhooks history | 

### Return type

[**CreatedProcessId**](CreatedProcessId.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getWebhook"></a>
# **getWebhook**
> GetWebhook getWebhook(webhookId)

Get a webhook details

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

var apiInstance = new Brevo.WebhooksApi();

var webhookId = 789; // Number | Id of the webhook

apiInstance.getWebhook(webhookId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhookId** | **Number**| Id of the webhook | 

### Return type

[**GetWebhook**](GetWebhook.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getWebhooks"></a>
# **getWebhooks**
> GetWebhooks getWebhooks(opts)

Get all webhooks

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

var apiInstance = new Brevo.WebhooksApi();

var opts = { 
  'type': "transactional", // String | Filter on webhook type
  'sort': "desc" // String | Sort the results in the ascending/descending order of webhook creation
};
apiInstance.getWebhooks(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **String**| Filter on webhook type | [optional] [default to transactional]
 **sort** | **String**| Sort the results in the ascending/descending order of webhook creation | [optional] [default to desc]

### Return type

[**GetWebhooks**](GetWebhooks.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateWebhook"></a>
# **updateWebhook**
> updateWebhook(webhookId, updateWebhook)

Update a webhook

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

var apiInstance = new Brevo.WebhooksApi();

var webhookId = 789; // Number | Id of the webhook

var updateWebhook = new Brevo.UpdateWebhook(); // UpdateWebhook | Values to update a webhook

apiInstance.updateWebhook(webhookId, updateWebhook).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhookId** | **Number**| Id of the webhook | 
 **updateWebhook** | [**UpdateWebhook**](UpdateWebhook.md)| Values to update a webhook | 

### Return type

null (empty response body)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

