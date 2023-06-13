# Brevo.WhatsAppCampaignsApi

All URIs are relative to *https://api.brevo.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createWhatsAppCampaign**](WhatsAppCampaignsApi.md#createWhatsAppCampaign) | **POST** /whatsappCampaigns | Create and Send a WhatsApp campaign
[**createWhatsAppTemplate**](WhatsAppCampaignsApi.md#createWhatsAppTemplate) | **POST** /whatsppCampaigns/template | Create a WhatsApp template
[**deleteWhatsAppCampaign**](WhatsAppCampaignsApi.md#deleteWhatsAppCampaign) | **DELETE** /whatsappCampaigns/{campaignId} | Delete a WhatsApp campaign
[**getWhatsAppCampaign**](WhatsAppCampaignsApi.md#getWhatsAppCampaign) | **GET** /whatsappCampaigns/{campaignId} | Get a WhatsApp campaign
[**getWhatsAppCampaigns**](WhatsAppCampaignsApi.md#getWhatsAppCampaigns) | **GET** /whatsappCampaigns | Return all your created WhatsApp campaigns
[**getWhatsAppConfig**](WhatsAppCampaignsApi.md#getWhatsAppConfig) | **GET** /whatsappCampaigns/config | Get your WhatsApp API account information
[**getWhatsAppTemplates**](WhatsAppCampaignsApi.md#getWhatsAppTemplates) | **GET** /whatsappCampaigns/template-list | Return all your created WhatsApp templates
[**sendWhatsAppTemplateApproval**](WhatsAppCampaignsApi.md#sendWhatsAppTemplateApproval) | **POST** /whatsappCampaigns/template/approval/{templateId} | Send your WhatsApp template for approval
[**updateWhatsAppCampaign**](WhatsAppCampaignsApi.md#updateWhatsAppCampaign) | **PUT** /whatsappCampaigns/{campaignId} | Update a WhatsApp campaign


<a name="createWhatsAppCampaign"></a>
# **createWhatsAppCampaign**
> CreateModel createWhatsAppCampaign(whatsAppCampaigns)

Create and Send a WhatsApp campaign

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

var apiInstance = new Brevo.WhatsAppCampaignsApi();

var whatsAppCampaigns = new Brevo.CreateWhatsAppCampaign(); // CreateWhatsAppCampaign | Values to create a campaign

apiInstance.createWhatsAppCampaign(whatsAppCampaigns).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **whatsAppCampaigns** | [**CreateWhatsAppCampaign**](CreateWhatsAppCampaign.md)| Values to create a campaign | 

### Return type

[**CreateModel**](CreateModel.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createWhatsAppTemplate"></a>
# **createWhatsAppTemplate**
> CreateModel createWhatsAppTemplate(whatsAppTemplates)

Create a WhatsApp template

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

var apiInstance = new Brevo.WhatsAppCampaignsApi();

var whatsAppTemplates = new Brevo.CreateWhatsAppTemplate(); // CreateWhatsAppTemplate | Values to create a template

apiInstance.createWhatsAppTemplate(whatsAppTemplates).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **whatsAppTemplates** | [**CreateWhatsAppTemplate**](CreateWhatsAppTemplate.md)| Values to create a template | 

### Return type

[**CreateModel**](CreateModel.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteWhatsAppCampaign"></a>
# **deleteWhatsAppCampaign**
> deleteWhatsAppCampaign(campaignId)

Delete a WhatsApp campaign

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

var apiInstance = new Brevo.WhatsAppCampaignsApi();

var campaignId = 789; // Number | id of the campaign

apiInstance.deleteWhatsAppCampaign(campaignId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | **Number**| id of the campaign | 

### Return type

null (empty response body)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getWhatsAppCampaign"></a>
# **getWhatsAppCampaign**
> GetWhatsappCampaignOverview getWhatsAppCampaign(campaignId)

Get a WhatsApp campaign

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

var apiInstance = new Brevo.WhatsAppCampaignsApi();

var campaignId = 789; // Number | Id of the campaign

apiInstance.getWhatsAppCampaign(campaignId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | **Number**| Id of the campaign | 

### Return type

[**GetWhatsappCampaignOverview**](GetWhatsappCampaignOverview.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getWhatsAppCampaigns"></a>
# **getWhatsAppCampaigns**
> GetWhatsappCampaigns getWhatsAppCampaigns(opts)

Return all your created WhatsApp campaigns

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

var apiInstance = new Brevo.WhatsAppCampaignsApi();

var opts = { 
  'startDate': "startDate_example", // String | **Mandatory if endDate is used**. Starting (urlencoded) UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ) to filter the campaigns created. **Prefer to pass your timezone in date-time format for accurate result** 
  'endDate': "endDate_example", // String | **Mandatory if startDate is used**. Ending (urlencoded) UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ) to filter the campaigns created. **Prefer to pass your timezone in date-time format for accurate result** 
  'limit': 50, // Number | Number of documents per page
  'offset': 0, // Number | Index of the first document in the page
  'sort': "desc" // String | Sort the results in the ascending/descending order of record modification. Default order is **descending** if `sort` is not passed
};
apiInstance.getWhatsAppCampaigns(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startDate** | **String**| **Mandatory if endDate is used**. Starting (urlencoded) UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ) to filter the campaigns created. **Prefer to pass your timezone in date-time format for accurate result**  | [optional] 
 **endDate** | **String**| **Mandatory if startDate is used**. Ending (urlencoded) UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ) to filter the campaigns created. **Prefer to pass your timezone in date-time format for accurate result**  | [optional] 
 **limit** | **Number**| Number of documents per page | [optional] [default to 50]
 **offset** | **Number**| Index of the first document in the page | [optional] [default to 0]
 **sort** | **String**| Sort the results in the ascending/descending order of record modification. Default order is **descending** if `sort` is not passed | [optional] [default to desc]

### Return type

[**GetWhatsappCampaigns**](GetWhatsappCampaigns.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getWhatsAppConfig"></a>
# **getWhatsAppConfig**
> GetWhatsAppConfig getWhatsAppConfig()

Get your WhatsApp API account information

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

var apiInstance = new Brevo.WhatsAppCampaignsApi();
apiInstance.getWhatsAppConfig().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**GetWhatsAppConfig**](GetWhatsAppConfig.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getWhatsAppTemplates"></a>
# **getWhatsAppTemplates**
> GetWATemplates getWhatsAppTemplates(opts)

Return all your created WhatsApp templates

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

var apiInstance = new Brevo.WhatsAppCampaignsApi();

var opts = { 
  'startDate': "startDate_example", // String | **Mandatory if endDate is used**. Starting (urlencoded) UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ) to filter the templates created. **Prefer to pass your timezone in date-time format for accurate result** 
  'endDate': "endDate_example", // String | **Mandatory if startDate is used**. Ending (urlencoded) UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ) to filter the templates created. **Prefer to pass your timezone in date-time format for accurate result** 
  'limit': 50, // Number | Number of documents per page
  'offset': 0, // Number | Index of the first document in the page
  'sort': "desc" // String | Sort the results in the ascending/descending order of record modification. Default order is **descending** if `sort` is not passed
};
apiInstance.getWhatsAppTemplates(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startDate** | **String**| **Mandatory if endDate is used**. Starting (urlencoded) UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ) to filter the templates created. **Prefer to pass your timezone in date-time format for accurate result**  | [optional] 
 **endDate** | **String**| **Mandatory if startDate is used**. Ending (urlencoded) UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ) to filter the templates created. **Prefer to pass your timezone in date-time format for accurate result**  | [optional] 
 **limit** | **Number**| Number of documents per page | [optional] [default to 50]
 **offset** | **Number**| Index of the first document in the page | [optional] [default to 0]
 **sort** | **String**| Sort the results in the ascending/descending order of record modification. Default order is **descending** if `sort` is not passed | [optional] [default to desc]

### Return type

[**GetWATemplates**](GetWATemplates.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sendWhatsAppTemplateApproval"></a>
# **sendWhatsAppTemplateApproval**
> sendWhatsAppTemplateApproval(templateId)

Send your WhatsApp template for approval

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

var apiInstance = new Brevo.WhatsAppCampaignsApi();

var templateId = 789; // Number | id of the campaign

apiInstance.sendWhatsAppTemplateApproval(templateId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateId** | **Number**| id of the campaign | 

### Return type

null (empty response body)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateWhatsAppCampaign"></a>
# **updateWhatsAppCampaign**
> updateWhatsAppCampaign(campaignId, opts)

Update a WhatsApp campaign

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

var apiInstance = new Brevo.WhatsAppCampaignsApi();

var campaignId = 789; // Number | Id of the campaign

var opts = { 
  'whatsAppCampaign': new Brevo.UpdateWhatsAppCampaign() // UpdateWhatsAppCampaign | values to update WhatsApp Campaign
};
apiInstance.updateWhatsAppCampaign(campaignId, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | **Number**| Id of the campaign | 
 **whatsAppCampaign** | [**UpdateWhatsAppCampaign**](UpdateWhatsAppCampaign.md)| values to update WhatsApp Campaign | [optional] 

### Return type

null (empty response body)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

