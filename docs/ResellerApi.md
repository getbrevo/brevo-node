# Brevo.ResellerApi

All URIs are relative to *https://api.brevo.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addCredits**](ResellerApi.md#addCredits) | **POST** /reseller/children/{childIdentifier}/credits/add | Add Email and/or SMS credits to a specific child account
[**associateIpToChild**](ResellerApi.md#associateIpToChild) | **POST** /reseller/children/{childIdentifier}/ips/associate | Associate a dedicated IP to the child
[**createChildDomain**](ResellerApi.md#createChildDomain) | **POST** /reseller/children/{childIdentifier}/domains | Create a domain for a child account
[**createResellerChild**](ResellerApi.md#createResellerChild) | **POST** /reseller/children | Creates a reseller child
[**deleteChildDomain**](ResellerApi.md#deleteChildDomain) | **DELETE** /reseller/children/{childIdentifier}/domains/{domainName} | Delete the sender domain of the reseller child based on the childIdentifier and domainName passed
[**deleteResellerChild**](ResellerApi.md#deleteResellerChild) | **DELETE** /reseller/children/{childIdentifier} | Delete a single reseller child based on the child identifier supplied
[**dissociateIpFromChild**](ResellerApi.md#dissociateIpFromChild) | **POST** /reseller/children/{childIdentifier}/ips/dissociate | Dissociate a dedicated IP to the child
[**getChildAccountCreationStatus**](ResellerApi.md#getChildAccountCreationStatus) | **GET** /reseller/children/{childIdentifier}/accountCreationStatus | Get the status of a reseller's child account creation, whether it is successfully created (exists) or not based on the identifier supplied
[**getChildDomains**](ResellerApi.md#getChildDomains) | **GET** /reseller/children/{childIdentifier}/domains | Get all sender domains for a specific child account
[**getChildInfo**](ResellerApi.md#getChildInfo) | **GET** /reseller/children/{childIdentifier} | Get a child account's details
[**getResellerChilds**](ResellerApi.md#getResellerChilds) | **GET** /reseller/children | Get the list of all children accounts
[**getSsoToken**](ResellerApi.md#getSsoToken) | **GET** /reseller/children/{childIdentifier}/auth | Get session token to access Brevo (SSO)
[**removeCredits**](ResellerApi.md#removeCredits) | **POST** /reseller/children/{childIdentifier}/credits/remove | Remove Email and/or SMS credits from a specific child account
[**updateChildAccountStatus**](ResellerApi.md#updateChildAccountStatus) | **PUT** /reseller/children/{childIdentifier}/accountStatus | Update info of reseller's child account status based on the childIdentifier supplied
[**updateChildDomain**](ResellerApi.md#updateChildDomain) | **PUT** /reseller/children/{childIdentifier}/domains/{domainName} | Update the sender domain of reseller's child based on the childIdentifier and domainName passed
[**updateResellerChild**](ResellerApi.md#updateResellerChild) | **PUT** /reseller/children/{childIdentifier} | Update info of reseller's child based on the child identifier supplied


<a name="addCredits"></a>
# **addCredits**
> RemainingCreditModel addCredits(childIdentifier, addCredits)

Add Email and/or SMS credits to a specific child account

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

var apiInstance = new Brevo.ResellerApi();

var childIdentifier = "childIdentifier_example"; // String | Either auth key or id of reseller's child

var addCredits = new Brevo.AddCredits(); // AddCredits | Values to post to add credit to a specific child account

apiInstance.addCredits(childIdentifier, addCredits).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **childIdentifier** | **String**| Either auth key or id of reseller's child | 
 **addCredits** | [**AddCredits**](AddCredits.md)| Values to post to add credit to a specific child account | 

### Return type

[**RemainingCreditModel**](RemainingCreditModel.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="associateIpToChild"></a>
# **associateIpToChild**
> associateIpToChild(childIdentifier, ip)

Associate a dedicated IP to the child

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

var apiInstance = new Brevo.ResellerApi();

var childIdentifier = "childIdentifier_example"; // String | Either auth key or id of reseller's child

var ip = new Brevo.ManageIp(); // ManageIp | IP to associate

apiInstance.associateIpToChild(childIdentifier, ip).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **childIdentifier** | **String**| Either auth key or id of reseller's child | 
 **ip** | [**ManageIp**](ManageIp.md)| IP to associate | 

### Return type

null (empty response body)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createChildDomain"></a>
# **createChildDomain**
> createChildDomain(childIdentifier, addChildDomain)

Create a domain for a child account

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

var apiInstance = new Brevo.ResellerApi();

var childIdentifier = "childIdentifier_example"; // String | Either auth key or id of reseller's child

var addChildDomain = new Brevo.AddChildDomain(); // AddChildDomain | Sender domain to add for a specific child account. This will not be displayed to the parent account.

apiInstance.createChildDomain(childIdentifier, addChildDomain).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **childIdentifier** | **String**| Either auth key or id of reseller's child | 
 **addChildDomain** | [**AddChildDomain**](AddChildDomain.md)| Sender domain to add for a specific child account. This will not be displayed to the parent account. | 

### Return type

null (empty response body)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createResellerChild"></a>
# **createResellerChild**
> CreateReseller createResellerChild(opts)

Creates a reseller child

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

var apiInstance = new Brevo.ResellerApi();

var opts = { 
  'resellerChild': new Brevo.CreateChild() // CreateChild | reseller child to add
};
apiInstance.createResellerChild(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resellerChild** | [**CreateChild**](CreateChild.md)| reseller child to add | [optional] 

### Return type

[**CreateReseller**](CreateReseller.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteChildDomain"></a>
# **deleteChildDomain**
> deleteChildDomain(childIdentifier, domainName)

Delete the sender domain of the reseller child based on the childIdentifier and domainName passed

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

var apiInstance = new Brevo.ResellerApi();

var childIdentifier = "childIdentifier_example"; // String | Either auth key or id of reseller's child

var domainName = "domainName_example"; // String | Pass the existing domain that needs to be deleted

apiInstance.deleteChildDomain(childIdentifier, domainName).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **childIdentifier** | **String**| Either auth key or id of reseller's child | 
 **domainName** | **String**| Pass the existing domain that needs to be deleted | 

### Return type

null (empty response body)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteResellerChild"></a>
# **deleteResellerChild**
> deleteResellerChild(childIdentifier)

Delete a single reseller child based on the child identifier supplied

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

var apiInstance = new Brevo.ResellerApi();

var childIdentifier = "childIdentifier_example"; // String | Either auth key or child id of reseller's child

apiInstance.deleteResellerChild(childIdentifier).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **childIdentifier** | **String**| Either auth key or child id of reseller's child | 

### Return type

null (empty response body)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="dissociateIpFromChild"></a>
# **dissociateIpFromChild**
> dissociateIpFromChild(childIdentifier, ip)

Dissociate a dedicated IP to the child

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

var apiInstance = new Brevo.ResellerApi();

var childIdentifier = "childIdentifier_example"; // String | Either auth key or id of reseller's child

var ip = new Brevo.ManageIp(); // ManageIp | IP to dissociate

apiInstance.dissociateIpFromChild(childIdentifier, ip).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **childIdentifier** | **String**| Either auth key or id of reseller's child | 
 **ip** | [**ManageIp**](ManageIp.md)| IP to dissociate | 

### Return type

null (empty response body)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getChildAccountCreationStatus"></a>
# **getChildAccountCreationStatus**
> GetChildAccountCreationStatus getChildAccountCreationStatus(childIdentifier)

Get the status of a reseller's child account creation, whether it is successfully created (exists) or not based on the identifier supplied

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

var apiInstance = new Brevo.ResellerApi();

var childIdentifier = "childIdentifier_example"; // String | Either auth key or id of reseller's child

apiInstance.getChildAccountCreationStatus(childIdentifier).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **childIdentifier** | **String**| Either auth key or id of reseller's child | 

### Return type

[**GetChildAccountCreationStatus**](GetChildAccountCreationStatus.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getChildDomains"></a>
# **getChildDomains**
> GetChildDomains getChildDomains(childIdentifier)

Get all sender domains for a specific child account

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

var apiInstance = new Brevo.ResellerApi();

var childIdentifier = "childIdentifier_example"; // String | Either auth key or id of reseller's child

apiInstance.getChildDomains(childIdentifier).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **childIdentifier** | **String**| Either auth key or id of reseller's child | 

### Return type

[**GetChildDomains**](GetChildDomains.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getChildInfo"></a>
# **getChildInfo**
> GetChildInfo getChildInfo(childIdentifier)

Get a child account's details

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

var apiInstance = new Brevo.ResellerApi();

var childIdentifier = "childIdentifier_example"; // String | Either auth key or id of reseller's child

apiInstance.getChildInfo(childIdentifier).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **childIdentifier** | **String**| Either auth key or id of reseller's child | 

### Return type

[**GetChildInfo**](GetChildInfo.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getResellerChilds"></a>
# **getResellerChilds**
> GetChildrenList getResellerChilds(opts)

Get the list of all children accounts

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

var apiInstance = new Brevo.ResellerApi();

var opts = { 
  'limit': 10, // Number | Number of documents for child accounts information per page
  'offset': 0 // Number | Index of the first document in the page
};
apiInstance.getResellerChilds(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| Number of documents for child accounts information per page | [optional] [default to 10]
 **offset** | **Number**| Index of the first document in the page | [optional] [default to 0]

### Return type

[**GetChildrenList**](GetChildrenList.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSsoToken"></a>
# **getSsoToken**
> GetSsoToken getSsoToken(childIdentifier)

Get session token to access Brevo (SSO)

It returns a session [token] which will remain valid for a short period of time. A child account will be able to access a white-labeled section by using the following url pattern => https:/email.mydomain.com/login/sso?token=[token]

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

var apiInstance = new Brevo.ResellerApi();

var childIdentifier = "childIdentifier_example"; // String | Either auth key or id of reseller's child

apiInstance.getSsoToken(childIdentifier).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **childIdentifier** | **String**| Either auth key or id of reseller's child | 

### Return type

[**GetSsoToken**](GetSsoToken.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removeCredits"></a>
# **removeCredits**
> RemainingCreditModel removeCredits(childIdentifier, removeCredits)

Remove Email and/or SMS credits from a specific child account

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

var apiInstance = new Brevo.ResellerApi();

var childIdentifier = "childIdentifier_example"; // String | Either auth key or id of reseller's child

var removeCredits = new Brevo.RemoveCredits(); // RemoveCredits | Values to post to remove email or SMS credits from a specific child account

apiInstance.removeCredits(childIdentifier, removeCredits).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **childIdentifier** | **String**| Either auth key or id of reseller's child | 
 **removeCredits** | [**RemoveCredits**](RemoveCredits.md)| Values to post to remove email or SMS credits from a specific child account | 

### Return type

[**RemainingCreditModel**](RemainingCreditModel.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateChildAccountStatus"></a>
# **updateChildAccountStatus**
> updateChildAccountStatus(childIdentifier, updateChildAccountStatus)

Update info of reseller's child account status based on the childIdentifier supplied

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

var apiInstance = new Brevo.ResellerApi();

var childIdentifier = "childIdentifier_example"; // String | Either auth key or id of reseller's child

var updateChildAccountStatus = new Brevo.UpdateChildAccountStatus(); // UpdateChildAccountStatus | values to update in child account status

apiInstance.updateChildAccountStatus(childIdentifier, updateChildAccountStatus).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **childIdentifier** | **String**| Either auth key or id of reseller's child | 
 **updateChildAccountStatus** | [**UpdateChildAccountStatus**](UpdateChildAccountStatus.md)| values to update in child account status | 

### Return type

null (empty response body)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateChildDomain"></a>
# **updateChildDomain**
> updateChildDomain(childIdentifier, domainName, updateChildDomain)

Update the sender domain of reseller's child based on the childIdentifier and domainName passed

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

var apiInstance = new Brevo.ResellerApi();

var childIdentifier = "childIdentifier_example"; // String | Either auth key or id of reseller's child

var domainName = "domainName_example"; // String | Pass the existing domain that needs to be updated

var updateChildDomain = new Brevo.UpdateChildDomain(); // UpdateChildDomain | value to update for sender domain

apiInstance.updateChildDomain(childIdentifier, domainName, updateChildDomain).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **childIdentifier** | **String**| Either auth key or id of reseller's child | 
 **domainName** | **String**| Pass the existing domain that needs to be updated | 
 **updateChildDomain** | [**UpdateChildDomain**](UpdateChildDomain.md)| value to update for sender domain | 

### Return type

null (empty response body)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateResellerChild"></a>
# **updateResellerChild**
> updateResellerChild(childIdentifier, resellerChild)

Update info of reseller's child based on the child identifier supplied

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

var apiInstance = new Brevo.ResellerApi();

var childIdentifier = "childIdentifier_example"; // String | Either auth key or id of reseller's child

var resellerChild = new Brevo.UpdateChild(); // UpdateChild | values to update in child profile

apiInstance.updateResellerChild(childIdentifier, resellerChild).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **childIdentifier** | **String**| Either auth key or id of reseller's child | 
 **resellerChild** | [**UpdateChild**](UpdateChild.md)| values to update in child profile | 

### Return type

null (empty response body)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

