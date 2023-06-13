# Brevo.CouponsApi

All URIs are relative to *https://api.brevo.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCouponCollection**](CouponsApi.md#createCouponCollection) | **POST** /couponCollections | Create а coupon collection
[**createCoupons**](CouponsApi.md#createCoupons) | **POST** /coupons | Create coupons for a coupon collection
[**getCouponCollection**](CouponsApi.md#getCouponCollection) | **GET** /couponCollections/{id} | Get a coupon collection by id
[**getCouponCollections**](CouponsApi.md#getCouponCollections) | **GET** /couponCollections | Get all your coupon collections
[**updateCouponCollection**](CouponsApi.md#updateCouponCollection) | **PATCH** /couponCollections/{id} | Update a coupon collection by id


<a name="createCouponCollection"></a>
# **createCouponCollection**
> InlineResponse2012 createCouponCollection(createCouponCollection)

Create а coupon collection

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

var apiInstance = new Brevo.CouponsApi();

var createCouponCollection = new Brevo.CreateCouponCollection(); // CreateCouponCollection | Values to create a coupon collection

apiInstance.createCouponCollection(createCouponCollection).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createCouponCollection** | [**CreateCouponCollection**](CreateCouponCollection.md)| Values to create a coupon collection | 

### Return type

[**InlineResponse2012**](InlineResponse2012.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createCoupons"></a>
# **createCoupons**
> createCoupons(createCoupons)

Create coupons for a coupon collection

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

var apiInstance = new Brevo.CouponsApi();

var createCoupons = new Brevo.CreateCoupons(); // CreateCoupons | Values to create coupons

apiInstance.createCoupons(createCoupons).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createCoupons** | [**CreateCoupons**](CreateCoupons.md)| Values to create coupons | 

### Return type

null (empty response body)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCouponCollection"></a>
# **getCouponCollection**
> GetCouponCollection getCouponCollection(id)

Get a coupon collection by id

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

var apiInstance = new Brevo.CouponsApi();

var id = "id_example"; // String | Id of the collection to return

apiInstance.getCouponCollection(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id of the collection to return | 

### Return type

[**GetCouponCollection**](GetCouponCollection.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCouponCollections"></a>
# **getCouponCollections**
> GetCouponCollection getCouponCollections(opts)

Get all your coupon collections

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

var apiInstance = new Brevo.CouponsApi();

var opts = { 
  'limit': 50, // Number | Number of documents returned per page
  'offset': 0, // Number | Index of the first document on the page
  'sort': "desc" // String | Sort the results by creation time in ascending/descending order
};
apiInstance.getCouponCollections(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| Number of documents returned per page | [optional] [default to 50]
 **offset** | **Number**| Index of the first document on the page | [optional] [default to 0]
 **sort** | **String**| Sort the results by creation time in ascending/descending order | [optional] [default to desc]

### Return type

[**GetCouponCollection**](GetCouponCollection.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateCouponCollection"></a>
# **updateCouponCollection**
> InlineResponse2001 updateCouponCollection(id, updateCouponCollection)

Update a coupon collection by id

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

var apiInstance = new Brevo.CouponsApi();

var id = "id_example"; // String | Id of the collection to update

var updateCouponCollection = new Brevo.UpdateCouponCollection(); // UpdateCouponCollection | Values to update the coupon collection

apiInstance.updateCouponCollection(id, updateCouponCollection).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id of the collection to update | 
 **updateCouponCollection** | [**UpdateCouponCollection**](UpdateCouponCollection.md)| Values to update the coupon collection | 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

