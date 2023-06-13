# Brevo.GetExternalFeedByUUID

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | ID of the feed | 
**name** | **String** | Name of the feed | 
**url** | **String** | URL of the feed | 
**authType** | **String** | Auth type of the feed: * `basic` * `token` * `noAuth`  | 
**username** | **String** | Username for authType `basic` | [optional] 
**password** | **String** | Password for authType `basic` | [optional] 
**token** | **String** | Token for authType `token` | [optional] 
**headers** | [**[GetExternalFeedByUUIDHeaders]**](GetExternalFeedByUUIDHeaders.md) | Custom headers for the feed | 
**maxRetries** | **Number** | Maximum number of retries on the feed url | 
**cache** | **Boolean** | Toggle caching of feed url response | 
**createdAt** | **Date** | Datetime on which the feed was created | 
**modifiedAt** | **Date** | Datetime on which the feed was modified | 


<a name="AuthTypeEnum"></a>
## Enum: AuthTypeEnum


* `basic` (value: `"basic"`)

* `token` (value: `"token"`)

* `noAuth` (value: `"noAuth"`)




