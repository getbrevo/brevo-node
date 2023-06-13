# Brevo.EmailCampaignsApi

All URIs are relative to *https://api.brevo.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createEmailCampaign**](EmailCampaignsApi.md#createEmailCampaign) | **POST** /emailCampaigns | Create an email campaign
[**deleteEmailCampaign**](EmailCampaignsApi.md#deleteEmailCampaign) | **DELETE** /emailCampaigns/{campaignId} | Delete an email campaign
[**emailExportRecipients**](EmailCampaignsApi.md#emailExportRecipients) | **POST** /emailCampaigns/{campaignId}/exportRecipients | Export the recipients of an email campaign
[**getAbTestCampaignResult**](EmailCampaignsApi.md#getAbTestCampaignResult) | **GET** /emailCampaigns/{campaignId}/abTestCampaignResult | Get an A/B test email campaign results
[**getEmailCampaign**](EmailCampaignsApi.md#getEmailCampaign) | **GET** /emailCampaigns/{campaignId} | Get an email campaign report
[**getEmailCampaigns**](EmailCampaignsApi.md#getEmailCampaigns) | **GET** /emailCampaigns | Return all your created email campaigns
[**getSharedTemplateUrl**](EmailCampaignsApi.md#getSharedTemplateUrl) | **GET** /emailCampaigns/{campaignId}/sharedUrl | Get a shared template url
[**sendEmailCampaignNow**](EmailCampaignsApi.md#sendEmailCampaignNow) | **POST** /emailCampaigns/{campaignId}/sendNow | Send an email campaign immediately, based on campaignId
[**sendReport**](EmailCampaignsApi.md#sendReport) | **POST** /emailCampaigns/{campaignId}/sendReport | Send the report of a campaign
[**sendTestEmail**](EmailCampaignsApi.md#sendTestEmail) | **POST** /emailCampaigns/{campaignId}/sendTest | Send an email campaign to your test list
[**updateCampaignStatus**](EmailCampaignsApi.md#updateCampaignStatus) | **PUT** /emailCampaigns/{campaignId}/status | Update an email campaign status
[**updateEmailCampaign**](EmailCampaignsApi.md#updateEmailCampaign) | **PUT** /emailCampaigns/{campaignId} | Update an email campaign
[**uploadImageToGallery**](EmailCampaignsApi.md#uploadImageToGallery) | **POST** /emailCampaigns/images | Upload an image to your account's image gallery


<a name="createEmailCampaign"></a>
# **createEmailCampaign**
> CreateModel createEmailCampaign(emailCampaigns)

Create an email campaign

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

var apiInstance = new Brevo.EmailCampaignsApi();

var emailCampaigns = new Brevo.CreateEmailCampaign(); // CreateEmailCampaign | Values to create a campaign

apiInstance.createEmailCampaign(emailCampaigns).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **emailCampaigns** | [**CreateEmailCampaign**](CreateEmailCampaign.md)| Values to create a campaign | 

### Return type

[**CreateModel**](CreateModel.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteEmailCampaign"></a>
# **deleteEmailCampaign**
> deleteEmailCampaign(campaignId)

Delete an email campaign

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

var apiInstance = new Brevo.EmailCampaignsApi();

var campaignId = 789; // Number | id of the campaign

apiInstance.deleteEmailCampaign(campaignId).then(function() {
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

<a name="emailExportRecipients"></a>
# **emailExportRecipients**
> CreatedProcessId emailExportRecipients(campaignId, opts)

Export the recipients of an email campaign

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

var apiInstance = new Brevo.EmailCampaignsApi();

var campaignId = 789; // Number | Id of the campaign

var opts = { 
  'recipientExport': new Brevo.EmailExportRecipients() // EmailExportRecipients | Values to send for a recipient export request
};
apiInstance.emailExportRecipients(campaignId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | **Number**| Id of the campaign | 
 **recipientExport** | [**EmailExportRecipients**](EmailExportRecipients.md)| Values to send for a recipient export request | [optional] 

### Return type

[**CreatedProcessId**](CreatedProcessId.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAbTestCampaignResult"></a>
# **getAbTestCampaignResult**
> AbTestCampaignResult getAbTestCampaignResult(campaignId)

Get an A/B test email campaign results

Obtain winning version of an A/B test email campaign

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

var apiInstance = new Brevo.EmailCampaignsApi();

var campaignId = 789; // Number | Id of the A/B test campaign

apiInstance.getAbTestCampaignResult(campaignId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | **Number**| Id of the A/B test campaign | 

### Return type

[**AbTestCampaignResult**](AbTestCampaignResult.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getEmailCampaign"></a>
# **getEmailCampaign**
> GetEmailCampaign getEmailCampaign(campaignId, opts)

Get an email campaign report

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

var apiInstance = new Brevo.EmailCampaignsApi();

var campaignId = 789; // Number | Id of the campaign

var opts = { 
  'statistics': "statistics_example" // String | Filter on the type of statistics required. Example **globalStats** value will only fetch globalStats info of the campaign in returned response.
};
apiInstance.getEmailCampaign(campaignId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | **Number**| Id of the campaign | 
 **statistics** | **String**| Filter on the type of statistics required. Example **globalStats** value will only fetch globalStats info of the campaign in returned response. | [optional] 

### Return type

[**GetEmailCampaign**](GetEmailCampaign.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getEmailCampaigns"></a>
# **getEmailCampaigns**
> GetEmailCampaigns getEmailCampaigns(opts)

Return all your created email campaigns

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

var apiInstance = new Brevo.EmailCampaignsApi();

var opts = { 
  'type': "type_example", // String | Filter on the type of the campaigns
  'status': "status_example", // String | Filter on the status of the campaign
  'statistics': "statistics_example", // String | Filter on the type of statistics required. Example **globalStats** value will only fetch globalStats info of the campaign in returned response.
  'startDate': "startDate_example", // String | Mandatory if endDate is used. Starting (urlencoded) UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ) to filter the sent email campaigns. Prefer to pass your timezone in date-time format for accurate result ( only available if either 'status' not passed and if passed is set to 'sent' )
  'endDate': "endDate_example", // String | Mandatory if startDate is used. Ending (urlencoded) UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ) to filter the sent email campaigns. Prefer to pass your timezone in date-time format for accurate result ( only available if either 'status' not passed and if passed is set to 'sent' )
  'limit': 50, // Number | Number of documents per page
  'offset': 0, // Number | Index of the first document in the page
  'sort': "desc", // String | Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed
  'excludeHtmlContent': true // Boolean | Use this flag to exclude htmlContent from the response body. If set to **true**, htmlContent field will be returned as empty string in the response body
};
apiInstance.getEmailCampaigns(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **String**| Filter on the type of the campaigns | [optional] 
 **status** | **String**| Filter on the status of the campaign | [optional] 
 **statistics** | **String**| Filter on the type of statistics required. Example **globalStats** value will only fetch globalStats info of the campaign in returned response. | [optional] 
 **startDate** | **String**| Mandatory if endDate is used. Starting (urlencoded) UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ) to filter the sent email campaigns. Prefer to pass your timezone in date-time format for accurate result ( only available if either 'status' not passed and if passed is set to 'sent' ) | [optional] 
 **endDate** | **String**| Mandatory if startDate is used. Ending (urlencoded) UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ) to filter the sent email campaigns. Prefer to pass your timezone in date-time format for accurate result ( only available if either 'status' not passed and if passed is set to 'sent' ) | [optional] 
 **limit** | **Number**| Number of documents per page | [optional] [default to 50]
 **offset** | **Number**| Index of the first document in the page | [optional] [default to 0]
 **sort** | **String**| Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed | [optional] [default to desc]
 **excludeHtmlContent** | **Boolean**| Use this flag to exclude htmlContent from the response body. If set to **true**, htmlContent field will be returned as empty string in the response body | [optional] 

### Return type

[**GetEmailCampaigns**](GetEmailCampaigns.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSharedTemplateUrl"></a>
# **getSharedTemplateUrl**
> GetSharedTemplateUrl getSharedTemplateUrl(campaignId)

Get a shared template url

Get a unique URL to share & import an email template from one Brevo account to another.

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

var apiInstance = new Brevo.EmailCampaignsApi();

var campaignId = 789; // Number | Id of the campaign or template

apiInstance.getSharedTemplateUrl(campaignId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | **Number**| Id of the campaign or template | 

### Return type

[**GetSharedTemplateUrl**](GetSharedTemplateUrl.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sendEmailCampaignNow"></a>
# **sendEmailCampaignNow**
> sendEmailCampaignNow(campaignId)

Send an email campaign immediately, based on campaignId

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

var apiInstance = new Brevo.EmailCampaignsApi();

var campaignId = 789; // Number | Id of the campaign

apiInstance.sendEmailCampaignNow(campaignId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | **Number**| Id of the campaign | 

### Return type

null (empty response body)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sendReport"></a>
# **sendReport**
> sendReport(campaignId, sendReport)

Send the report of a campaign

A PDF will be sent to the specified email addresses

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

var apiInstance = new Brevo.EmailCampaignsApi();

var campaignId = 789; // Number | Id of the campaign

var sendReport = new Brevo.SendReport(); // SendReport | Values for send a report

apiInstance.sendReport(campaignId, sendReport).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | **Number**| Id of the campaign | 
 **sendReport** | [**SendReport**](SendReport.md)| Values for send a report | 

### Return type

null (empty response body)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sendTestEmail"></a>
# **sendTestEmail**
> sendTestEmail(campaignId, emailTo)

Send an email campaign to your test list

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

var apiInstance = new Brevo.EmailCampaignsApi();

var campaignId = 789; // Number | Id of the campaign

var emailTo = new Brevo.SendTestEmail(); // SendTestEmail | 

apiInstance.sendTestEmail(campaignId, emailTo).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | **Number**| Id of the campaign | 
 **emailTo** | [**SendTestEmail**](SendTestEmail.md)|  | 

### Return type

null (empty response body)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateCampaignStatus"></a>
# **updateCampaignStatus**
> updateCampaignStatus(campaignId, status)

Update an email campaign status

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

var apiInstance = new Brevo.EmailCampaignsApi();

var campaignId = 789; // Number | Id of the campaign

var status = new Brevo.UpdateCampaignStatus(); // UpdateCampaignStatus | Status of the campaign

apiInstance.updateCampaignStatus(campaignId, status).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | **Number**| Id of the campaign | 
 **status** | [**UpdateCampaignStatus**](UpdateCampaignStatus.md)| Status of the campaign | 

### Return type

null (empty response body)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateEmailCampaign"></a>
# **updateEmailCampaign**
> updateEmailCampaign(campaignId, emailCampaign)

Update an email campaign

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

var apiInstance = new Brevo.EmailCampaignsApi();

var campaignId = 789; // Number | Id of the campaign

var emailCampaign = new Brevo.UpdateEmailCampaign(); // UpdateEmailCampaign | Values to update a campaign

apiInstance.updateEmailCampaign(campaignId, emailCampaign).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | **Number**| Id of the campaign | 
 **emailCampaign** | [**UpdateEmailCampaign**](UpdateEmailCampaign.md)| Values to update a campaign | 

### Return type

null (empty response body)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="uploadImageToGallery"></a>
# **uploadImageToGallery**
> UploadImageModel uploadImageToGallery(uploadImage)

Upload an image to your account's image gallery

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

var apiInstance = new Brevo.EmailCampaignsApi();

var uploadImage = new Brevo.UploadImageToGallery(); // UploadImageToGallery | Parameters to upload an image

apiInstance.uploadImageToGallery(uploadImage).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uploadImage** | [**UploadImageToGallery**](UploadImageToGallery.md)| Parameters to upload an image | 

### Return type

[**UploadImageModel**](UploadImageModel.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

