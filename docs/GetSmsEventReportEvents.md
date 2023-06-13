# Brevo.GetSmsEventReportEvents

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**phoneNumber** | **String** | Phone number which has generated the event | [optional] 
**_date** | **String** | UTC date-time on which the event has been generated | [optional] 
**messageId** | **String** | Message ID which generated the event | [optional] 
**event** | **String** | Event which occurred | [optional] 
**reason** | **String** | Reason of bounce (only available if the event is hardbounce or softbounce) | [optional] 
**reply** | **String** |  | [optional] 
**tag** | **String** | Tag of the SMS which generated the event | [optional] 


<a name="EventEnum"></a>
## Enum: EventEnum


* `bounces` (value: `"bounces"`)

* `hardBounces` (value: `"hardBounces"`)

* `softBounces` (value: `"softBounces"`)

* `delivered` (value: `"delivered"`)

* `sent` (value: `"sent"`)

* `accepted` (value: `"accepted"`)

* `unsubscription` (value: `"unsubscription"`)

* `replies` (value: `"replies"`)

* `blocked` (value: `"blocked"`)

* `rejected` (value: `"rejected"`)




