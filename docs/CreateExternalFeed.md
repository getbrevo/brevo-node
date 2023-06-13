# Brevo.CreateExternalFeed

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Name of the feed | 
**url** | **String** | URL of the feed | 
**authType** | **String** | Auth type of the feed:   * `basic`   * `token`   * `noAuth`  | [optional] [default to 'noAuth']
**username** | **String** | Username for authType `basic` | [optional] 
**password** | **String** | Password for authType `basic` | [optional] 
**token** | **String** | Token for authType `token` | [optional] 
**headers** | [**[GetExternalFeedByUUIDHeaders]**](GetExternalFeedByUUIDHeaders.md) | Custom headers for the feed | [optional] 
**maxRetries** | **Number** | Maximum number of retries on the feed url | [optional] 
**cache** | **Boolean** | Toggle caching of feed url response | [optional] [default to false]


<a name="AuthTypeEnum"></a>
## Enum: AuthTypeEnum


* `basic` (value: `"basic"`)

* `token` (value: `"token"`)

* `noAuth` (value: `"noAuth"`)




