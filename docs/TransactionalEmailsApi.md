# Brevo.TransactionalEmailsApi

All URIs are relative to *https://api.brevo.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**blockNewDomain**](TransactionalEmailsApi.md#blockNewDomain) | **POST** /smtp/blockedDomains | Add a new domain to the list of blocked domains
[**createSmtpTemplate**](TransactionalEmailsApi.md#createSmtpTemplate) | **POST** /smtp/templates | Create an email template
[**deleteBlockedDomain**](TransactionalEmailsApi.md#deleteBlockedDomain) | **DELETE** /smtp/blockedDomains/{domain} | Unblock an existing domain from the list of blocked domains
[**deleteHardbounces**](TransactionalEmailsApi.md#deleteHardbounces) | **POST** /smtp/deleteHardbounces | Delete hardbounces
[**deleteScheduledEmailById**](TransactionalEmailsApi.md#deleteScheduledEmailById) | **DELETE** /smtp/email/{identifier} | Delete scheduled emails by batchId or messageId
[**deleteSmtpTemplate**](TransactionalEmailsApi.md#deleteSmtpTemplate) | **DELETE** /smtp/templates/{templateId} | Delete an inactive email template
[**getAggregatedSmtpReport**](TransactionalEmailsApi.md#getAggregatedSmtpReport) | **GET** /smtp/statistics/aggregatedReport | Get your transactional email activity aggregated over a period of time
[**getBlockedDomains**](TransactionalEmailsApi.md#getBlockedDomains) | **GET** /smtp/blockedDomains | Get the list of blocked domains
[**getEmailEventReport**](TransactionalEmailsApi.md#getEmailEventReport) | **GET** /smtp/statistics/events | Get all your transactional email activity (unaggregated events)
[**getScheduledEmailByBatchId**](TransactionalEmailsApi.md#getScheduledEmailByBatchId) | **GET** /smtp/emailStatus/{batchId} | Fetch scheduled emails by batchId
[**getScheduledEmailByMessageId**](TransactionalEmailsApi.md#getScheduledEmailByMessageId) | **GET** /smtp/emailStatus/{messageId} | Fetch scheduled email by messageId
[**getSmtpReport**](TransactionalEmailsApi.md#getSmtpReport) | **GET** /smtp/statistics/reports | Get your transactional email activity aggregated per day
[**getSmtpTemplate**](TransactionalEmailsApi.md#getSmtpTemplate) | **GET** /smtp/templates/{templateId} | Returns the template information
[**getSmtpTemplates**](TransactionalEmailsApi.md#getSmtpTemplates) | **GET** /smtp/templates | Get the list of email templates
[**getTransacBlockedContacts**](TransactionalEmailsApi.md#getTransacBlockedContacts) | **GET** /smtp/blockedContacts | Get the list of blocked or unsubscribed transactional contacts
[**getTransacEmailContent**](TransactionalEmailsApi.md#getTransacEmailContent) | **GET** /smtp/emails/{uuid} | Get the personalized content of a sent transactional email
[**getTransacEmailsList**](TransactionalEmailsApi.md#getTransacEmailsList) | **GET** /smtp/emails | Get the list of transactional emails on the basis of allowed filters
[**sendTestTemplate**](TransactionalEmailsApi.md#sendTestTemplate) | **POST** /smtp/templates/{templateId}/sendTest | Send a template to your test list
[**sendTransacEmail**](TransactionalEmailsApi.md#sendTransacEmail) | **POST** /smtp/email | Send a transactional email
[**smtpBlockedContactsEmailDelete**](TransactionalEmailsApi.md#smtpBlockedContactsEmailDelete) | **DELETE** /smtp/blockedContacts/{email} | Unblock or resubscribe a transactional contact
[**smtpLogMessageIdDelete**](TransactionalEmailsApi.md#smtpLogMessageIdDelete) | **DELETE** /smtp/log/{messageId} | Delete an SMTP transactional log
[**updateSmtpTemplate**](TransactionalEmailsApi.md#updateSmtpTemplate) | **PUT** /smtp/templates/{templateId} | Update an email template


<a name="blockNewDomain"></a>
# **blockNewDomain**
> blockNewDomain(blockDomain)

Add a new domain to the list of blocked domains

Blocks a new domain in order to avoid messages being sent to the same

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

var apiInstance = new Brevo.TransactionalEmailsApi();

var blockDomain = new Brevo.BlockDomain(); // BlockDomain | 

apiInstance.blockNewDomain(blockDomain).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blockDomain** | [**BlockDomain**](BlockDomain.md)|  | 

### Return type

null (empty response body)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createSmtpTemplate"></a>
# **createSmtpTemplate**
> CreateModel createSmtpTemplate(smtpTemplate)

Create an email template

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

var apiInstance = new Brevo.TransactionalEmailsApi();

var smtpTemplate = new Brevo.CreateSmtpTemplate(); // CreateSmtpTemplate | values to update in transactional email template

apiInstance.createSmtpTemplate(smtpTemplate).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **smtpTemplate** | [**CreateSmtpTemplate**](CreateSmtpTemplate.md)| values to update in transactional email template | 

### Return type

[**CreateModel**](CreateModel.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteBlockedDomain"></a>
# **deleteBlockedDomain**
> deleteBlockedDomain(domain)

Unblock an existing domain from the list of blocked domains

Unblocks an existing domain from the list of blocked domains

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

var apiInstance = new Brevo.TransactionalEmailsApi();

var domain = "domain_example"; // String | The name of the domain to be deleted

apiInstance.deleteBlockedDomain(domain).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domain** | **String**| The name of the domain to be deleted | 

### Return type

null (empty response body)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteHardbounces"></a>
# **deleteHardbounces**
> deleteHardbounces(opts)

Delete hardbounces

Delete hardbounces. To use carefully (e.g. in case of temporary ISP failures)

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

var apiInstance = new Brevo.TransactionalEmailsApi();

var opts = { 
  'deleteHardbounces': new Brevo.DeleteHardbounces() // DeleteHardbounces | values to delete hardbounces
};
apiInstance.deleteHardbounces(opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteHardbounces** | [**DeleteHardbounces**](DeleteHardbounces.md)| values to delete hardbounces | [optional] 

### Return type

null (empty response body)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteScheduledEmailById"></a>
# **deleteScheduledEmailById**
> deleteScheduledEmailById(identifier)

Delete scheduled emails by batchId or messageId

Delete scheduled batch of emails by batchId or single scheduled email by messageId

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

var apiInstance = new Brevo.TransactionalEmailsApi();

var identifier = "identifier_example"; // String | The `batchId` of scheduled emails batch (Should be a valid UUIDv4) or the `messageId` of scheduled email.

apiInstance.deleteScheduledEmailById(identifier).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| The `batchId` of scheduled emails batch (Should be a valid UUIDv4) or the `messageId` of scheduled email. | 

### Return type

null (empty response body)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteSmtpTemplate"></a>
# **deleteSmtpTemplate**
> deleteSmtpTemplate(templateId)

Delete an inactive email template

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

var apiInstance = new Brevo.TransactionalEmailsApi();

var templateId = 789; // Number | id of the template

apiInstance.deleteSmtpTemplate(templateId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateId** | **Number**| id of the template | 

### Return type

null (empty response body)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAggregatedSmtpReport"></a>
# **getAggregatedSmtpReport**
> GetAggregatedReport getAggregatedSmtpReport(opts)

Get your transactional email activity aggregated over a period of time

This endpoint will show the aggregated stats for past 90 days by default if `startDate` and `endDate` OR `days` is not passed. The date range can not exceed 90 days

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

var apiInstance = new Brevo.TransactionalEmailsApi();

var opts = { 
  'startDate': "startDate_example", // String | Mandatory if endDate is used. Starting date of the report (YYYY-MM-DD). Must be lower than equal to endDate
  'endDate': "endDate_example", // String | Mandatory if startDate is used. Ending date of the report (YYYY-MM-DD). Must be greater than equal to startDate
  'days': 789, // Number | Number of days in the past including today (positive integer). Not compatible with 'startDate' and 'endDate'
  'tag': "tag_example" // String | Tag of the emails
};
apiInstance.getAggregatedSmtpReport(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startDate** | **String**| Mandatory if endDate is used. Starting date of the report (YYYY-MM-DD). Must be lower than equal to endDate | [optional] 
 **endDate** | **String**| Mandatory if startDate is used. Ending date of the report (YYYY-MM-DD). Must be greater than equal to startDate | [optional] 
 **days** | **Number**| Number of days in the past including today (positive integer). Not compatible with 'startDate' and 'endDate' | [optional] 
 **tag** | **String**| Tag of the emails | [optional] 

### Return type

[**GetAggregatedReport**](GetAggregatedReport.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getBlockedDomains"></a>
# **getBlockedDomains**
> GetBlockedDomains getBlockedDomains()

Get the list of blocked domains

Get the list of blocked domains

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

var apiInstance = new Brevo.TransactionalEmailsApi();
apiInstance.getBlockedDomains().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**GetBlockedDomains**](GetBlockedDomains.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getEmailEventReport"></a>
# **getEmailEventReport**
> GetEmailEventReport getEmailEventReport(opts)

Get all your transactional email activity (unaggregated events)

This endpoint will show the aggregated stats for past 30 days by default if `startDate` and `endDate` OR `days` is not passed. The date range can not exceed 90 days

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

var apiInstance = new Brevo.TransactionalEmailsApi();

var opts = { 
  'limit': 2500, // Number | Number limitation for the result returned
  'offset': 0, // Number | Beginning point in the list to retrieve from.
  'startDate': "startDate_example", // String | Mandatory if endDate is used. Starting date of the report (YYYY-MM-DD). Must be lower than equal to endDate
  'endDate': "endDate_example", // String | Mandatory if startDate is used. Ending date of the report (YYYY-MM-DD). Must be greater than equal to startDate
  'days': 789, // Number | Number of days in the past including today (positive integer). Not compatible with 'startDate' and 'endDate'
  'email': "email_example", // String | Filter the report for a specific email addresses
  'event': "event_example", // String | Filter the report for a specific event type
  'tags': "tags_example", // String | Filter the report for tags (serialized and urlencoded array)
  'messageId': "messageId_example", // String | Filter on a specific message id
  'templateId': 789, // Number | Filter on a specific template id
  'sort': "desc" // String | Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed
};
apiInstance.getEmailEventReport(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| Number limitation for the result returned | [optional] [default to 2500]
 **offset** | **Number**| Beginning point in the list to retrieve from. | [optional] [default to 0]
 **startDate** | **String**| Mandatory if endDate is used. Starting date of the report (YYYY-MM-DD). Must be lower than equal to endDate | [optional] 
 **endDate** | **String**| Mandatory if startDate is used. Ending date of the report (YYYY-MM-DD). Must be greater than equal to startDate | [optional] 
 **days** | **Number**| Number of days in the past including today (positive integer). Not compatible with 'startDate' and 'endDate' | [optional] 
 **email** | **String**| Filter the report for a specific email addresses | [optional] 
 **event** | **String**| Filter the report for a specific event type | [optional] 
 **tags** | **String**| Filter the report for tags (serialized and urlencoded array) | [optional] 
 **messageId** | **String**| Filter on a specific message id | [optional] 
 **templateId** | **Number**| Filter on a specific template id | [optional] 
 **sort** | **String**| Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed | [optional] [default to desc]

### Return type

[**GetEmailEventReport**](GetEmailEventReport.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getScheduledEmailByBatchId"></a>
# **getScheduledEmailByBatchId**
> GetScheduledEmailByBatchId getScheduledEmailByBatchId(batchId, opts)

Fetch scheduled emails by batchId

Fetch scheduled batch of emails by batchId (Can retrieve data upto 30 days old)

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

var apiInstance = new Brevo.TransactionalEmailsApi();

var batchId = "batchId_example"; // String | The batchId of scheduled emails batch (Should be a valid UUIDv4)

var opts = { 
  'startDate': new Date("2013-10-20"), // Date | Mandatory if `endDate` is used. Starting date (YYYY-MM-DD) from which you want to fetch the list. Can be maximum 30 days older tha current date.
  'endDate': new Date("2013-10-20"), // Date | Mandatory if `startDate` is used. Ending date (YYYY-MM-DD) till which you want to fetch the list. Maximum time period that can be selected is one month.
  'sort': "desc", // String | Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed
  'status': "status_example", // String | Filter the records by `status` of the scheduled email batch or message.
  'limit': 100, // Number | Number of documents returned per page
  'offset': 0 // Number | Index of the first document on the page
};
apiInstance.getScheduledEmailByBatchId(batchId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batchId** | **String**| The batchId of scheduled emails batch (Should be a valid UUIDv4) | 
 **startDate** | **Date**| Mandatory if `endDate` is used. Starting date (YYYY-MM-DD) from which you want to fetch the list. Can be maximum 30 days older tha current date. | [optional] 
 **endDate** | **Date**| Mandatory if `startDate` is used. Ending date (YYYY-MM-DD) till which you want to fetch the list. Maximum time period that can be selected is one month. | [optional] 
 **sort** | **String**| Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed | [optional] [default to desc]
 **status** | **String**| Filter the records by `status` of the scheduled email batch or message. | [optional] 
 **limit** | **Number**| Number of documents returned per page | [optional] [default to 100]
 **offset** | **Number**| Index of the first document on the page | [optional] [default to 0]

### Return type

[**GetScheduledEmailByBatchId**](GetScheduledEmailByBatchId.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getScheduledEmailByMessageId"></a>
# **getScheduledEmailByMessageId**
> GetScheduledEmailByMessageId getScheduledEmailByMessageId(messageId, opts)

Fetch scheduled email by messageId

Fetch scheduled email by messageId (Can retrieve data upto 30 days old)

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

var apiInstance = new Brevo.TransactionalEmailsApi();

var messageId = "messageId_example"; // String | The messageId of scheduled email

var opts = { 
  'startDate': new Date("2013-10-20"), // Date | Mandatory if endDate is used. Starting date (YYYY-MM-DD) from which you want to fetch the list. Can be maximum 30 days older tha current date.
  'endDate': new Date("2013-10-20") // Date | Mandatory if startDate is used. Ending date (YYYY-MM-DD) till which you want to fetch the list. Maximum time period that can be selected is one month.
};
apiInstance.getScheduledEmailByMessageId(messageId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **messageId** | **String**| The messageId of scheduled email | 
 **startDate** | **Date**| Mandatory if endDate is used. Starting date (YYYY-MM-DD) from which you want to fetch the list. Can be maximum 30 days older tha current date. | [optional] 
 **endDate** | **Date**| Mandatory if startDate is used. Ending date (YYYY-MM-DD) till which you want to fetch the list. Maximum time period that can be selected is one month. | [optional] 

### Return type

[**GetScheduledEmailByMessageId**](GetScheduledEmailByMessageId.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSmtpReport"></a>
# **getSmtpReport**
> GetReports getSmtpReport(opts)

Get your transactional email activity aggregated per day

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

var apiInstance = new Brevo.TransactionalEmailsApi();

var opts = { 
  'limit': 10, // Number | Number of documents returned per page
  'offset': 0, // Number | Index of the first document on the page
  'startDate': "startDate_example", // String | Mandatory if endDate is used. Starting date of the report (YYYY-MM-DD)
  'endDate': "endDate_example", // String | Mandatory if startDate is used. Ending date of the report (YYYY-MM-DD)
  'days': 789, // Number | Number of days in the past including today (positive integer). Not compatible with 'startDate' and 'endDate'
  'tag': "tag_example", // String | Tag of the emails
  'sort': "desc" // String | Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed
};
apiInstance.getSmtpReport(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| Number of documents returned per page | [optional] [default to 10]
 **offset** | **Number**| Index of the first document on the page | [optional] [default to 0]
 **startDate** | **String**| Mandatory if endDate is used. Starting date of the report (YYYY-MM-DD) | [optional] 
 **endDate** | **String**| Mandatory if startDate is used. Ending date of the report (YYYY-MM-DD) | [optional] 
 **days** | **Number**| Number of days in the past including today (positive integer). Not compatible with 'startDate' and 'endDate' | [optional] 
 **tag** | **String**| Tag of the emails | [optional] 
 **sort** | **String**| Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed | [optional] [default to desc]

### Return type

[**GetReports**](GetReports.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSmtpTemplate"></a>
# **getSmtpTemplate**
> GetSmtpTemplateOverview getSmtpTemplate(templateId)

Returns the template information

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

var apiInstance = new Brevo.TransactionalEmailsApi();

var templateId = 789; // Number | id of the template

apiInstance.getSmtpTemplate(templateId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateId** | **Number**| id of the template | 

### Return type

[**GetSmtpTemplateOverview**](GetSmtpTemplateOverview.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSmtpTemplates"></a>
# **getSmtpTemplates**
> GetSmtpTemplates getSmtpTemplates(opts)

Get the list of email templates

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

var apiInstance = new Brevo.TransactionalEmailsApi();

var opts = { 
  'templateStatus': true, // Boolean | Filter on the status of the template. Active = true, inactive = false
  'limit': 50, // Number | Number of documents returned per page
  'offset': 0, // Number | Index of the first document in the page
  'sort': "desc" // String | Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed
};
apiInstance.getSmtpTemplates(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateStatus** | **Boolean**| Filter on the status of the template. Active = true, inactive = false | [optional] 
 **limit** | **Number**| Number of documents returned per page | [optional] [default to 50]
 **offset** | **Number**| Index of the first document in the page | [optional] [default to 0]
 **sort** | **String**| Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed | [optional] [default to desc]

### Return type

[**GetSmtpTemplates**](GetSmtpTemplates.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTransacBlockedContacts"></a>
# **getTransacBlockedContacts**
> GetTransacBlockedContacts getTransacBlockedContacts(opts)

Get the list of blocked or unsubscribed transactional contacts

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

var apiInstance = new Brevo.TransactionalEmailsApi();

var opts = { 
  'startDate': "startDate_example", // String | Mandatory if endDate is used. Starting date (YYYY-MM-DD) from which you want to fetch the blocked or unsubscribed contacts
  'endDate': "endDate_example", // String | Mandatory if startDate is used. Ending date (YYYY-MM-DD) till which you want to fetch the blocked or unsubscribed contacts
  'limit': 50, // Number | Number of documents returned per page
  'offset': 0, // Number | Index of the first document on the page
  'senders': ["senders_example"], // [String] | Comma separated list of emails of the senders from which contacts are blocked or unsubscribed
  'sort': "desc" // String | Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed
};
apiInstance.getTransacBlockedContacts(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startDate** | **String**| Mandatory if endDate is used. Starting date (YYYY-MM-DD) from which you want to fetch the blocked or unsubscribed contacts | [optional] 
 **endDate** | **String**| Mandatory if startDate is used. Ending date (YYYY-MM-DD) till which you want to fetch the blocked or unsubscribed contacts | [optional] 
 **limit** | **Number**| Number of documents returned per page | [optional] [default to 50]
 **offset** | **Number**| Index of the first document on the page | [optional] [default to 0]
 **senders** | [**[String]**](String.md)| Comma separated list of emails of the senders from which contacts are blocked or unsubscribed | [optional] 
 **sort** | **String**| Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed | [optional] [default to desc]

### Return type

[**GetTransacBlockedContacts**](GetTransacBlockedContacts.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTransacEmailContent"></a>
# **getTransacEmailContent**
> GetTransacEmailContent getTransacEmailContent(uuid)

Get the personalized content of a sent transactional email

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

var apiInstance = new Brevo.TransactionalEmailsApi();

var uuid = "uuid_example"; // String | Unique id of the transactional email that has been sent to a particular contact

apiInstance.getTransacEmailContent(uuid).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**| Unique id of the transactional email that has been sent to a particular contact | 

### Return type

[**GetTransacEmailContent**](GetTransacEmailContent.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTransacEmailsList"></a>
# **getTransacEmailsList**
> GetTransacEmailsList getTransacEmailsList(opts)

Get the list of transactional emails on the basis of allowed filters

This endpoint will show the list of emails for past 30 days by default. To retrieve emails before that time, please pass startDate and endDate in query filters.

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

var apiInstance = new Brevo.TransactionalEmailsApi();

var opts = { 
  'email': "email_example", // String | Mandatory if templateId and messageId are not passed in query filters. Email address to which transactional email has been sent.
  'templateId': 789, // Number | Mandatory if email and messageId are not passed in query filters. Id of the template that was used to compose transactional email.
  'messageId': "messageId_example", // String | Mandatory if templateId and email are not passed in query filters. Message ID of the transactional email sent.
  'startDate': "startDate_example", // String | Mandatory if endDate is used. Starting date (YYYY-MM-DD) from which you want to fetch the list. Maximum time period that can be selected is one month.
  'endDate': "endDate_example", // String | Mandatory if startDate is used. Ending date (YYYY-MM-DD) till which you want to fetch the list. Maximum time period that can be selected is one month.
  'sort': "desc", // String | Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed
  'limit': 500, // Number | Number of documents returned per page
  'offset': 0 // Number | Index of the first document in the page
};
apiInstance.getTransacEmailsList(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **String**| Mandatory if templateId and messageId are not passed in query filters. Email address to which transactional email has been sent. | [optional] 
 **templateId** | **Number**| Mandatory if email and messageId are not passed in query filters. Id of the template that was used to compose transactional email. | [optional] 
 **messageId** | **String**| Mandatory if templateId and email are not passed in query filters. Message ID of the transactional email sent. | [optional] 
 **startDate** | **String**| Mandatory if endDate is used. Starting date (YYYY-MM-DD) from which you want to fetch the list. Maximum time period that can be selected is one month. | [optional] 
 **endDate** | **String**| Mandatory if startDate is used. Ending date (YYYY-MM-DD) till which you want to fetch the list. Maximum time period that can be selected is one month. | [optional] 
 **sort** | **String**| Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed | [optional] [default to desc]
 **limit** | **Number**| Number of documents returned per page | [optional] [default to 500]
 **offset** | **Number**| Index of the first document in the page | [optional] [default to 0]

### Return type

[**GetTransacEmailsList**](GetTransacEmailsList.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sendTestTemplate"></a>
# **sendTestTemplate**
> sendTestTemplate(templateId, sendTestEmail)

Send a template to your test list

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

var apiInstance = new Brevo.TransactionalEmailsApi();

var templateId = 789; // Number | Id of the template

var sendTestEmail = new Brevo.SendTestEmail(); // SendTestEmail | 

apiInstance.sendTestTemplate(templateId, sendTestEmail).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateId** | **Number**| Id of the template | 
 **sendTestEmail** | [**SendTestEmail**](SendTestEmail.md)|  | 

### Return type

null (empty response body)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sendTransacEmail"></a>
# **sendTransacEmail**
> CreateSmtpEmail sendTransacEmail(sendSmtpEmail)

Send a transactional email

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

var apiInstance = new Brevo.TransactionalEmailsApi();

var sendSmtpEmail = new Brevo.SendSmtpEmail(); // SendSmtpEmail | Values to send a transactional email

apiInstance.sendTransacEmail(sendSmtpEmail).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sendSmtpEmail** | [**SendSmtpEmail**](SendSmtpEmail.md)| Values to send a transactional email | 

### Return type

[**CreateSmtpEmail**](CreateSmtpEmail.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="smtpBlockedContactsEmailDelete"></a>
# **smtpBlockedContactsEmailDelete**
> smtpBlockedContactsEmailDelete(email)

Unblock or resubscribe a transactional contact

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

var apiInstance = new Brevo.TransactionalEmailsApi();

var email = "email_example"; // String | contact email (urlencoded) to unblock.

apiInstance.smtpBlockedContactsEmailDelete(email).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **String**| contact email (urlencoded) to unblock. | 

### Return type

null (empty response body)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="smtpLogMessageIdDelete"></a>
# **smtpLogMessageIdDelete**
> smtpLogMessageIdDelete(messageId)

Delete an SMTP transactional log

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

var apiInstance = new Brevo.TransactionalEmailsApi();

var messageId = "messageId_example"; // String | MessageId of the transactional log to delete

apiInstance.smtpLogMessageIdDelete(messageId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **messageId** | **String**| MessageId of the transactional log to delete | 

### Return type

null (empty response body)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateSmtpTemplate"></a>
# **updateSmtpTemplate**
> updateSmtpTemplate(templateId, smtpTemplate)

Update an email template

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

var apiInstance = new Brevo.TransactionalEmailsApi();

var templateId = 789; // Number | id of the template

var smtpTemplate = new Brevo.UpdateSmtpTemplate(); // UpdateSmtpTemplate | values to update in transactional email template

apiInstance.updateSmtpTemplate(templateId, smtpTemplate).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateId** | **Number**| id of the template | 
 **smtpTemplate** | [**UpdateSmtpTemplate**](UpdateSmtpTemplate.md)| values to update in transactional email template | 

### Return type

null (empty response body)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

