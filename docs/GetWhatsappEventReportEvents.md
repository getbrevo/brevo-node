# Brevo.GetWhatsappEventReportEvents

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contactNumber** | **String** | WhatsApp Number with country code. Example, 85264318721 | 
**_date** | **String** | UTC date-time on which the event has been generated | 
**messageId** | **String** | Message ID which generated the event | 
**event** | **String** | Event which occurred | 
**reason** | **String** | Reason for the event (will be there in case of `error` and `soft-bounce` events) | [optional] 
**body** | **String** | Text of the reply (will be there only in case of `reply` event with text) | [optional] 
**mediaUrl** | **String** | Url of the media reply (will be there only in case of `reply` event with media) | [optional] 
**senderNumber** | **String** | WhatsApp Number with country code. Example, 85264318721 | 


<a name="EventEnum"></a>
## Enum: EventEnum


* `sent` (value: `"sent"`)

* `delivered` (value: `"delivered"`)

* `read` (value: `"read"`)

* `error` (value: `"error"`)

* `unsubscribe` (value: `"unsubscribe"`)

* `reply` (value: `"reply"`)

* `softBounce` (value: `"soft-bounce"`)




