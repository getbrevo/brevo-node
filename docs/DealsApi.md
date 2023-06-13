# Brevo.DealsApi

All URIs are relative to *https://api.brevo.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**crmAttributesDealsGet**](DealsApi.md#crmAttributesDealsGet) | **GET** /crm/attributes/deals | Get deal attributes
[**crmDealsGet**](DealsApi.md#crmDealsGet) | **GET** /crm/deals | Get all deals
[**crmDealsIdDelete**](DealsApi.md#crmDealsIdDelete) | **DELETE** /crm/deals/{id} | Delete a deal
[**crmDealsIdGet**](DealsApi.md#crmDealsIdGet) | **GET** /crm/deals/{id} | Get a deal
[**crmDealsIdPatch**](DealsApi.md#crmDealsIdPatch) | **PATCH** /crm/deals/{id} | Update a deal
[**crmDealsLinkUnlinkIdPatch**](DealsApi.md#crmDealsLinkUnlinkIdPatch) | **PATCH** /crm/deals/link-unlink/{id} | Link and Unlink a deal with contacts and companies
[**crmDealsPost**](DealsApi.md#crmDealsPost) | **POST** /crm/deals | Create a deal
[**crmPipelineDetailsGet**](DealsApi.md#crmPipelineDetailsGet) | **GET** /crm/pipeline/details | Get pipeline stages
[**crmPipelineDetailsPipelineIDGet**](DealsApi.md#crmPipelineDetailsPipelineIDGet) | **GET** /crm/pipeline/details/{pipelineID} | Get pipelines and their details


<a name="crmAttributesDealsGet"></a>
# **crmAttributesDealsGet**
> DealAttributes crmAttributesDealsGet()

Get deal attributes

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

var apiInstance = new Brevo.DealsApi();
apiInstance.crmAttributesDealsGet().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**DealAttributes**](DealAttributes.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="crmDealsGet"></a>
# **crmDealsGet**
> DealsList crmDealsGet(opts)

Get all deals

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

var apiInstance = new Brevo.DealsApi();

var opts = { 
  'filtersAttributes': "filtersAttributes_example", // String | Filter by attrbutes. If you have filter for owner on your side please send it as `attributes.owner`.\"
  'filtersLinkedCompaniesIds': "filtersLinkedCompaniesIds_example", // String | Filter by linked companies ids
  'filtersLinkedContactsIds': "filtersLinkedContactsIds_example", // String | Filter by linked companies ids
  'offset': 789, // Number | Index of the first document of the page
  'limit': 50, // Number | Number of documents per page
  'sort': "sort_example", // String | Sort the results in the ascending/descending order. Default order is **descending** by creation if `sort` is not passed
  'sortBy': "sortBy_example" // String | The field used to sort field names.
};
apiInstance.crmDealsGet(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filtersAttributes** | **String**| Filter by attrbutes. If you have filter for owner on your side please send it as `attributes.owner`.\" | [optional] 
 **filtersLinkedCompaniesIds** | **String**| Filter by linked companies ids | [optional] 
 **filtersLinkedContactsIds** | **String**| Filter by linked companies ids | [optional] 
 **offset** | **Number**| Index of the first document of the page | [optional] 
 **limit** | **Number**| Number of documents per page | [optional] [default to 50]
 **sort** | **String**| Sort the results in the ascending/descending order. Default order is **descending** by creation if `sort` is not passed | [optional] 
 **sortBy** | **String**| The field used to sort field names. | [optional] 

### Return type

[**DealsList**](DealsList.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="crmDealsIdDelete"></a>
# **crmDealsIdDelete**
> crmDealsIdDelete(id)

Delete a deal

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

var apiInstance = new Brevo.DealsApi();

var id = "id_example"; // String | 

apiInstance.crmDealsIdDelete(id).then(function() {
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

<a name="crmDealsIdGet"></a>
# **crmDealsIdGet**
> Deal crmDealsIdGet(id)

Get a deal

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

var apiInstance = new Brevo.DealsApi();

var id = "id_example"; // String | 

apiInstance.crmDealsIdGet(id).then(function(data) {
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

[**Deal**](Deal.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="crmDealsIdPatch"></a>
# **crmDealsIdPatch**
> crmDealsIdPatch(id, body)

Update a deal

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

var apiInstance = new Brevo.DealsApi();

var id = "id_example"; // String | 

var body = new Brevo.Body4(); // Body4 | Updated deal details.

apiInstance.crmDealsIdPatch(id, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **body** | [**Body4**](Body4.md)| Updated deal details. | 

### Return type

null (empty response body)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="crmDealsLinkUnlinkIdPatch"></a>
# **crmDealsLinkUnlinkIdPatch**
> crmDealsLinkUnlinkIdPatch(id, body)

Link and Unlink a deal with contacts and companies

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

var apiInstance = new Brevo.DealsApi();

var id = "id_example"; // String | 

var body = new Brevo.Body5(); // Body5 | Linked / Unlinked contacts and companies ids.

apiInstance.crmDealsLinkUnlinkIdPatch(id, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **body** | [**Body5**](Body5.md)| Linked / Unlinked contacts and companies ids. | 

### Return type

null (empty response body)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="crmDealsPost"></a>
# **crmDealsPost**
> InlineResponse201 crmDealsPost(body)

Create a deal

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

var apiInstance = new Brevo.DealsApi();

var body = new Brevo.Body3(); // Body3 | Deal create data.

apiInstance.crmDealsPost(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body3**](Body3.md)| Deal create data. | 

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="crmPipelineDetailsGet"></a>
# **crmPipelineDetailsGet**
> Pipeline crmPipelineDetailsGet()

Get pipeline stages

This endpoint is deprecated. Prefer /crm/pipeline/details/{pipelineID} instead.

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

var apiInstance = new Brevo.DealsApi();
apiInstance.crmPipelineDetailsGet().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Pipeline**](Pipeline.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="crmPipelineDetailsPipelineIDGet"></a>
# **crmPipelineDetailsPipelineIDGet**
> Pipelines crmPipelineDetailsPipelineIDGet(pipelineID)

Get pipelines and their details

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

var apiInstance = new Brevo.DealsApi();

var pipelineID = "pipelineID_example"; // String | Gets the pipeline details with given pipelineID and all if no pipeline provided

apiInstance.crmPipelineDetailsPipelineIDGet(pipelineID).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pipelineID** | **String**| Gets the pipeline details with given pipelineID and all if no pipeline provided | 

### Return type

[**Pipelines**](Pipelines.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

