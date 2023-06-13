# Brevo.TransactionalWhatsAppApi

All URIs are relative to *https://api.brevo.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getWhatsappEventReport**](TransactionalWhatsAppApi.md#getWhatsappEventReport) | **GET** /whatsapp/statistics/events | Get all your WhatsApp activity (unaggregated events)
[**sendWhatsappMessage**](TransactionalWhatsAppApi.md#sendWhatsappMessage) | **POST** /whatsapp/sendMessage | Send a WhatsApp message


<a name="getWhatsappEventReport"></a>
# **getWhatsappEventReport**
> GetWhatsappEventReport getWhatsappEventReport(opts)

Get all your WhatsApp activity (unaggregated events)

This endpoint will show the unaggregated statistics for WhatsApp activity (30 days by default if `startDate` and `endDate` or `days` is not passed. The date range can not exceed 90 days)

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

var apiInstance = new Brevo.TransactionalWhatsAppApi();

var opts = { 
  'limit': 2500, // Number | Number limitation for the result returned
  'offset': 0, // Number | Beginning point in the list to retrieve from
  'startDate': "startDate_example", // String | **Mandatory if endDate is used.** Starting date of the report (YYYY-MM-DD). Must be lower than equal to endDate 
  'endDate': "endDate_example", // String | **Mandatory if startDate is used.** Ending date of the report (YYYY-MM-DD). Must be greater than equal to startDate 
  'days': 789, // Number | Number of days in the past including today (positive integer). _Not compatible with 'startDate' and 'endDate'_ 
  'contactNumber': "contactNumber_example", // String | Filter results for specific contact (WhatsApp Number with country code. Example, 85264318721)
  'event': "event_example", // String | Filter the report for a specific event type
  'sort': "desc" // String | Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed
};
apiInstance.getWhatsappEventReport(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| Number limitation for the result returned | [optional] [default to 2500]
 **offset** | **Number**| Beginning point in the list to retrieve from | [optional] [default to 0]
 **startDate** | **String**| **Mandatory if endDate is used.** Starting date of the report (YYYY-MM-DD). Must be lower than equal to endDate  | [optional] 
 **endDate** | **String**| **Mandatory if startDate is used.** Ending date of the report (YYYY-MM-DD). Must be greater than equal to startDate  | [optional] 
 **days** | **Number**| Number of days in the past including today (positive integer). _Not compatible with 'startDate' and 'endDate'_  | [optional] 
 **contactNumber** | **String**| Filter results for specific contact (WhatsApp Number with country code. Example, 85264318721) | [optional] 
 **event** | **String**| Filter the report for a specific event type | [optional] 
 **sort** | **String**| Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed | [optional] [default to desc]

### Return type

[**GetWhatsappEventReport**](GetWhatsappEventReport.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sendWhatsappMessage"></a>
# **sendWhatsappMessage**
> InlineResponse2013 sendWhatsappMessage(sendWhatsappMessage)

Send a WhatsApp message

This endpoint is used to send a WhatsApp message. <br/>(**The first message you send using the API must contain a Template ID. You must create a template on WhatsApp on the Brevo platform to fetch the Template ID.**)

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

var apiInstance = new Brevo.TransactionalWhatsAppApi();

var sendWhatsappMessage = new Brevo.SendWhatsappMessage(); // SendWhatsappMessage | Values to send WhatsApp message

apiInstance.sendWhatsappMessage(sendWhatsappMessage).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sendWhatsappMessage** | [**SendWhatsappMessage**](SendWhatsappMessage.md)| Values to send WhatsApp message | 

### Return type

[**InlineResponse2013**](InlineResponse2013.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

