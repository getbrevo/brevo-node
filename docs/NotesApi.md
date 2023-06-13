# Brevo.NotesApi

All URIs are relative to *https://api.brevo.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**crmNotesGet**](NotesApi.md#crmNotesGet) | **GET** /crm/notes | Get all notes
[**crmNotesIdDelete**](NotesApi.md#crmNotesIdDelete) | **DELETE** /crm/notes/{id} | Delete a note
[**crmNotesIdGet**](NotesApi.md#crmNotesIdGet) | **GET** /crm/notes/{id} | Get a note
[**crmNotesIdPatch**](NotesApi.md#crmNotesIdPatch) | **PATCH** /crm/notes/{id} | Update a note
[**crmNotesPost**](NotesApi.md#crmNotesPost) | **POST** /crm/notes | Create a note


<a name="crmNotesGet"></a>
# **crmNotesGet**
> NoteList crmNotesGet(opts)

Get all notes

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

var apiInstance = new Brevo.NotesApi();

var opts = { 
  'entity': "entity_example", // String | Filter by note entity type
  'entityIds': "entityIds_example", // String | Filter by note entity IDs
  'dateFrom': 56, // Number | dateFrom to date range filter type (timestamp in milliseconds)
  'dateTo': 56, // Number | dateTo to date range filter type (timestamp in milliseconds)
  'offset': 789, // Number | Index of the first document of the page
  'limit': 50, // Number | Number of documents per page
  'sort': "sort_example" // String | Sort the results in the ascending/descending order. Default order is **descending** by creation if `sort` is not passed
};
apiInstance.crmNotesGet(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entity** | **String**| Filter by note entity type | [optional] 
 **entityIds** | **String**| Filter by note entity IDs | [optional] 
 **dateFrom** | **Number**| dateFrom to date range filter type (timestamp in milliseconds) | [optional] 
 **dateTo** | **Number**| dateTo to date range filter type (timestamp in milliseconds) | [optional] 
 **offset** | **Number**| Index of the first document of the page | [optional] 
 **limit** | **Number**| Number of documents per page | [optional] [default to 50]
 **sort** | **String**| Sort the results in the ascending/descending order. Default order is **descending** by creation if `sort` is not passed | [optional] 

### Return type

[**NoteList**](NoteList.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="crmNotesIdDelete"></a>
# **crmNotesIdDelete**
> crmNotesIdDelete(id)

Delete a note

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

var apiInstance = new Brevo.NotesApi();

var id = "id_example"; // String | Note ID to delete

apiInstance.crmNotesIdDelete(id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Note ID to delete | 

### Return type

null (empty response body)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="crmNotesIdGet"></a>
# **crmNotesIdGet**
> Note crmNotesIdGet(id)

Get a note

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

var apiInstance = new Brevo.NotesApi();

var id = "id_example"; // String | Note ID to get

apiInstance.crmNotesIdGet(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Note ID to get | 

### Return type

[**Note**](Note.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="crmNotesIdPatch"></a>
# **crmNotesIdPatch**
> crmNotesIdPatch(id, body)

Update a note

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

var apiInstance = new Brevo.NotesApi();

var id = "id_example"; // String | Note ID to update

var body = new Brevo.NoteData(); // NoteData | Note data to update a note

apiInstance.crmNotesIdPatch(id, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Note ID to update | 
 **body** | [**NoteData**](NoteData.md)| Note data to update a note | 

### Return type

null (empty response body)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="crmNotesPost"></a>
# **crmNotesPost**
> NoteId crmNotesPost(body)

Create a note

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

var apiInstance = new Brevo.NotesApi();

var body = new Brevo.NoteData(); // NoteData | Note data to create a note.

apiInstance.crmNotesPost(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**NoteData**](NoteData.md)| Note data to create a note. | 

### Return type

[**NoteId**](NoteId.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

