# Brevo.ExportWebhooksHistory

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**days** | **Number** | Number of days in the past including today (positive integer). _Not compatible with 'startDate' and 'endDate'_ | [optional] 
**startDate** | **String** | Mandatory if endDate is used. Starting date of the history (YYYY-MM-DD). Must be lower than equal to endDate | [optional] 
**endDate** | **String** | Mandatory if startDate is used. Ending date of the report (YYYY-MM-DD). Must be greater than equal to startDate | [optional] 
**sort** | **String** | Sorting order of records (asc or desc) | [optional] 
**event** | **String** | Filter the history for a specific event type | 
**notifyURL** | **String** | Webhook URL to receive CSV file link | 
**webhookId** | **Number** | Filter the history for a specific webhook id | [optional] 
**email** | **String** | Filter the history for a specific email | [optional] 
**messageId** | **Number** | Filter the history for a specific message id | [optional] 


<a name="EventEnum"></a>
## Enum: EventEnum


* `invalidParameter` (value: `"invalid_parameter"`)

* `missingParameter` (value: `"missing_parameter"`)

* `hardBounce` (value: `"hardBounce"`)

* `softBounce` (value: `"softBounce"`)

* `delivered` (value: `"delivered\""`)

* `spam` (value: `"spam"`)

* `request` (value: `"request"`)

* `opened` (value: `"opened"`)

* `click` (value: `"click"`)

* `invalid` (value: `"invalid"`)

* `deferred` (value: `"deferred"`)

* `blocked` (value: `"blocked"`)

* `unsubscribed` (value: `"unsubscribed"`)

* `error` (value: `"error"`)

* `uniqueOpened` (value: `"uniqueOpened"`)

* `loadedByProxy` (value: `"loadedByProxy"`)

* `allEvents` (value: `"allEvents"`)




