# Brevo.UpdateWebhook

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **String** | URL of the webhook | [optional] 
**description** | **String** | Description of the webhook | [optional] 
**events** | **[String]** | - Events triggering the webhook. Possible values for **Transactional** type webhook: #### `sent` OR `request`, `delivered`, `hardBounce`, `softBounce`, `blocked`, `spam`, `invalid`, `deferred`, `click`, `opened`, `uniqueOpened` and `unsubscribed` - Possible values for **Marketing** type webhook: #### `spam`, `opened`, `click`, `hardBounce`, `softBounce`, `unsubscribed`, `listAddition` & `delivered` - Possible values for **Inbound** type webhook: #### `inboundEmailProcessed`  | [optional] 
**domain** | **String** | Inbound domain of webhook, used in case of event type `inbound` | [optional] 


<a name="[EventsEnum]"></a>
## Enum: [EventsEnum]


* `sent` (value: `"sent"`)

* `hardBounce` (value: `"hardBounce"`)

* `softBounce` (value: `"softBounce"`)

* `blocked` (value: `"blocked"`)

* `spam` (value: `"spam"`)

* `delivered` (value: `"delivered"`)

* `request` (value: `"request"`)

* `click` (value: `"click"`)

* `invalid` (value: `"invalid"`)

* `deferred` (value: `"deferred"`)

* `opened` (value: `"opened"`)

* `uniqueOpened` (value: `"uniqueOpened"`)

* `unsubscribed` (value: `"unsubscribed"`)

* `listAddition` (value: `"listAddition"`)

* `contactUpdated` (value: `"contactUpdated"`)

* `contactDeleted` (value: `"contactDeleted"`)

* `inboundEmailProcessed` (value: `"inboundEmailProcessed"`)




