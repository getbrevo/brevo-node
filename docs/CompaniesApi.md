# Brevo.CompaniesApi

All URIs are relative to *https://api.brevo.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**companiesAttributesGet**](CompaniesApi.md#companiesAttributesGet) | **GET** /companies/attributes | Get company attributes
[**companiesGet**](CompaniesApi.md#companiesGet) | **GET** /companies | Get all companies
[**companiesIdDelete**](CompaniesApi.md#companiesIdDelete) | **DELETE** /companies/{id} | Delete a company
[**companiesIdGet**](CompaniesApi.md#companiesIdGet) | **GET** /companies/{id} | Get a company
[**companiesIdPatch**](CompaniesApi.md#companiesIdPatch) | **PATCH** /companies/{id} | Update a company
[**companiesLinkUnlinkIdPatch**](CompaniesApi.md#companiesLinkUnlinkIdPatch) | **PATCH** /companies/link-unlink/{id} | Link and Unlink company with contacts and deals
[**companiesPost**](CompaniesApi.md#companiesPost) | **POST** /companies | Create a company


<a name="companiesAttributesGet"></a>
# **companiesAttributesGet**
> CompanyAttributes companiesAttributesGet()

Get company attributes

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

var apiInstance = new Brevo.CompaniesApi();
apiInstance.companiesAttributesGet().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**CompanyAttributes**](CompanyAttributes.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="companiesGet"></a>
# **companiesGet**
> CompaniesList companiesGet(opts)

Get all companies

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

var apiInstance = new Brevo.CompaniesApi();

var opts = { 
  'filters': "filters_example", // String | Filter by attrbutes. If you have filter for owner on your side please send it as {\"attributes.owner\":\"5b1a17d914b73d35a76ca0c7\"}
  'linkedContactsIds': 789, // Number | Filter by linked contacts ids
  'linkedDealsIds': "linkedDealsIds_example", // String | Filter by linked deals ids
  'page': 789, // Number | Index of the first document of the page
  'limit': 50, // Number | Number of documents per page
  'sort': "sort_example", // String | Sort the results in the ascending/descending order. Default order is **descending** by creation if `sort` is not passed
  'sortBy': "sortBy_example" // String | The field used to sort field names.
};
apiInstance.companiesGet(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filters** | **String**| Filter by attrbutes. If you have filter for owner on your side please send it as {\"attributes.owner\":\"5b1a17d914b73d35a76ca0c7\"} | [optional] 
 **linkedContactsIds** | **Number**| Filter by linked contacts ids | [optional] 
 **linkedDealsIds** | **String**| Filter by linked deals ids | [optional] 
 **page** | **Number**| Index of the first document of the page | [optional] 
 **limit** | **Number**| Number of documents per page | [optional] [default to 50]
 **sort** | **String**| Sort the results in the ascending/descending order. Default order is **descending** by creation if `sort` is not passed | [optional] 
 **sortBy** | **String**| The field used to sort field names. | [optional] 

### Return type

[**CompaniesList**](CompaniesList.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="companiesIdDelete"></a>
# **companiesIdDelete**
> companiesIdDelete(id)

Delete a company

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

var apiInstance = new Brevo.CompaniesApi();

var id = "id_example"; // String | 

apiInstance.companiesIdDelete(id).then(function() {
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

<a name="companiesIdGet"></a>
# **companiesIdGet**
> Company companiesIdGet(id)

Get a company

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

var apiInstance = new Brevo.CompaniesApi();

var id = "id_example"; // String | 

apiInstance.companiesIdGet(id).then(function(data) {
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

[**Company**](Company.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="companiesIdPatch"></a>
# **companiesIdPatch**
> Company companiesIdPatch(id, body)

Update a company

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

var apiInstance = new Brevo.CompaniesApi();

var id = "id_example"; // String | 

var body = new Brevo.Body1(); // Body1 | Updated company details.

apiInstance.companiesIdPatch(id, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **body** | [**Body1**](Body1.md)| Updated company details. | 

### Return type

[**Company**](Company.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="companiesLinkUnlinkIdPatch"></a>
# **companiesLinkUnlinkIdPatch**
> companiesLinkUnlinkIdPatch(id, body)

Link and Unlink company with contacts and deals

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

var apiInstance = new Brevo.CompaniesApi();

var id = "id_example"; // String | 

var body = new Brevo.Body2(); // Body2 | Linked / Unlinked contacts and deals ids.

apiInstance.companiesLinkUnlinkIdPatch(id, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **body** | [**Body2**](Body2.md)| Linked / Unlinked contacts and deals ids. | 

### Return type

null (empty response body)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="companiesPost"></a>
# **companiesPost**
> InlineResponse200 companiesPost(body)

Create a company

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

var apiInstance = new Brevo.CompaniesApi();

var body = new Brevo.Body(); // Body | Company create data.

apiInstance.companiesPost(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body**](Body.md)| Company create data. | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

