# Brevo.TasksApi

All URIs are relative to *https://api.brevo.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**crmTasksGet**](TasksApi.md#crmTasksGet) | **GET** /crm/tasks | Get all tasks
[**crmTasksIdDelete**](TasksApi.md#crmTasksIdDelete) | **DELETE** /crm/tasks/{id} | Delete a task
[**crmTasksIdGet**](TasksApi.md#crmTasksIdGet) | **GET** /crm/tasks/{id} | Get a task
[**crmTasksIdPatch**](TasksApi.md#crmTasksIdPatch) | **PATCH** /crm/tasks/{id} | Update a task
[**crmTasksPost**](TasksApi.md#crmTasksPost) | **POST** /crm/tasks | Create a task
[**crmTasktypesGet**](TasksApi.md#crmTasktypesGet) | **GET** /crm/tasktypes | Get all task types


<a name="crmTasksGet"></a>
# **crmTasksGet**
> TaskList crmTasksGet(opts)

Get all tasks

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

var apiInstance = new Brevo.TasksApi();

var opts = { 
  'filterType': "filterType_example", // String | Filter by task type (ID)
  'filterStatus': "filterStatus_example", // String | Filter by task status
  'filterDate': "filterDate_example", // String | Filter by date
  'filterAssignTo': "filterAssignTo_example", // String | Filter by assignTo id
  'filterContacts': "filterContacts_example", // String | Filter by contact ids
  'filterDeals': "filterDeals_example", // String | Filter by deals ids
  'filterCompanies': "filterCompanies_example", // String | Filter by companies ids
  'dateFrom': 56, // Number | dateFrom to date range filter type (timestamp in milliseconds)
  'dateTo': 56, // Number | dateTo to date range filter type (timestamp in milliseconds)
  'offset': 789, // Number | Index of the first document of the page
  'limit': 50, // Number | Number of documents per page
  'sort': "sort_example", // String | Sort the results in the ascending/descending order. Default order is **descending** by creation if `sort` is not passed
  'sortBy': "sortBy_example" // String | The field used to sort field names.
};
apiInstance.crmTasksGet(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterType** | **String**| Filter by task type (ID) | [optional] 
 **filterStatus** | **String**| Filter by task status | [optional] 
 **filterDate** | **String**| Filter by date | [optional] 
 **filterAssignTo** | **String**| Filter by assignTo id | [optional] 
 **filterContacts** | **String**| Filter by contact ids | [optional] 
 **filterDeals** | **String**| Filter by deals ids | [optional] 
 **filterCompanies** | **String**| Filter by companies ids | [optional] 
 **dateFrom** | **Number**| dateFrom to date range filter type (timestamp in milliseconds) | [optional] 
 **dateTo** | **Number**| dateTo to date range filter type (timestamp in milliseconds) | [optional] 
 **offset** | **Number**| Index of the first document of the page | [optional] 
 **limit** | **Number**| Number of documents per page | [optional] [default to 50]
 **sort** | **String**| Sort the results in the ascending/descending order. Default order is **descending** by creation if `sort` is not passed | [optional] 
 **sortBy** | **String**| The field used to sort field names. | [optional] 

### Return type

[**TaskList**](TaskList.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="crmTasksIdDelete"></a>
# **crmTasksIdDelete**
> crmTasksIdDelete(id)

Delete a task

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

var apiInstance = new Brevo.TasksApi();

var id = "id_example"; // String | 

apiInstance.crmTasksIdDelete(id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="crmTasksIdGet"></a>
# **crmTasksIdGet**
> Task crmTasksIdGet(id)

Get a task

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

var apiInstance = new Brevo.TasksApi();

var id = "id_example"; // String | 

apiInstance.crmTasksIdGet(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

[**Task**](Task.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="crmTasksIdPatch"></a>
# **crmTasksIdPatch**
> crmTasksIdPatch(id, body)

Update a task

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

var apiInstance = new Brevo.TasksApi();

var id = "id_example"; // String | 

var body = new Brevo.Body7(); // Body7 | Updated task details.

apiInstance.crmTasksIdPatch(id, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **body** | [**Body7**](Body7.md)| Updated task details. | 

### Return type

null (empty response body)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="crmTasksPost"></a>
# **crmTasksPost**
> InlineResponse2011 crmTasksPost(body)

Create a task

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

var apiInstance = new Brevo.TasksApi();

var body = new Brevo.Body6(); // Body6 | Task name.

apiInstance.crmTasksPost(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body6**](Body6.md)| Task name. | 

### Return type

[**InlineResponse2011**](InlineResponse2011.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="crmTasktypesGet"></a>
# **crmTasktypesGet**
> TaskTypes crmTasktypesGet()

Get all task types

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

var apiInstance = new Brevo.TasksApi();
apiInstance.crmTasktypesGet().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**TaskTypes**](TaskTypes.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

