# Brevo.FilesApi

All URIs are relative to *https://api.brevo.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**crmFilesGet**](FilesApi.md#crmFilesGet) | **GET** /crm/files | Get all files
[**crmFilesIdDataGet**](FilesApi.md#crmFilesIdDataGet) | **GET** /crm/files/{id}/data | Get file details
[**crmFilesIdDelete**](FilesApi.md#crmFilesIdDelete) | **DELETE** /crm/files/{id} | Delete a file
[**crmFilesIdGet**](FilesApi.md#crmFilesIdGet) | **GET** /crm/files/{id} | Download a file
[**crmFilesPost**](FilesApi.md#crmFilesPost) | **POST** /crm/files | Upload a file


<a name="crmFilesGet"></a>
# **crmFilesGet**
> FileList crmFilesGet(opts)

Get all files

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

var apiInstance = new Brevo.FilesApi();

var opts = { 
  'entity': "entity_example", // String | Filter by file entity type
  'entityIds': "entityIds_example", // String | Filter by file entity IDs
  'dateFrom': 56, // Number | dateFrom to date range filter type (timestamp in milliseconds)
  'dateTo': 56, // Number | dateTo to date range filter type (timestamp in milliseconds)
  'offset': 789, // Number | Index of the first document of the page
  'limit': 50, // Number | Number of documents per page
  'sort': "sort_example" // String | Sort the results in the ascending/descending order. Default order is **descending** by creation if `sort` is not passed
};
apiInstance.crmFilesGet(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entity** | **String**| Filter by file entity type | [optional] 
 **entityIds** | **String**| Filter by file entity IDs | [optional] 
 **dateFrom** | **Number**| dateFrom to date range filter type (timestamp in milliseconds) | [optional] 
 **dateTo** | **Number**| dateTo to date range filter type (timestamp in milliseconds) | [optional] 
 **offset** | **Number**| Index of the first document of the page | [optional] 
 **limit** | **Number**| Number of documents per page | [optional] [default to 50]
 **sort** | **String**| Sort the results in the ascending/descending order. Default order is **descending** by creation if `sort` is not passed | [optional] 

### Return type

[**FileList**](FileList.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="crmFilesIdDataGet"></a>
# **crmFilesIdDataGet**
> FileData crmFilesIdDataGet(id)

Get file details

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

var apiInstance = new Brevo.FilesApi();

var id = "id_example"; // String | File id to get file data.

apiInstance.crmFilesIdDataGet(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| File id to get file data. | 

### Return type

[**FileData**](FileData.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="crmFilesIdDelete"></a>
# **crmFilesIdDelete**
> crmFilesIdDelete(id)

Delete a file

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

var apiInstance = new Brevo.FilesApi();

var id = "id_example"; // String | File id to delete.

apiInstance.crmFilesIdDelete(id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| File id to delete. | 

### Return type

null (empty response body)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="crmFilesIdGet"></a>
# **crmFilesIdGet**
> FileDownloadableLink crmFilesIdGet(id)

Download a file

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

var apiInstance = new Brevo.FilesApi();

var id = "id_example"; // String | File id to download.

apiInstance.crmFilesIdGet(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| File id to download. | 

### Return type

[**FileDownloadableLink**](FileDownloadableLink.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="crmFilesPost"></a>
# **crmFilesPost**
> FileData crmFilesPost(file, opts)

Upload a file

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

var apiInstance = new Brevo.FilesApi();

var file = "/path/to/file.txt"; // File | File data to create a file.

var opts = { 
  'dealId': "dealId_example", // String | Deal id linked to a file
  'contactId': 789, // Number | Contact id linked to a file
  'companyId': "companyId_example" // String | Company id linked to a file
};
apiInstance.crmFilesPost(file, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **File**| File data to create a file. | 
 **dealId** | **String**| Deal id linked to a file | [optional] 
 **contactId** | **Number**| Contact id linked to a file | [optional] 
 **companyId** | **String**| Company id linked to a file | [optional] 

### Return type

[**FileData**](FileData.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

