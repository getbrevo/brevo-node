# Brevo.SsoTokenRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Id of the sub-account organization | 
**email** | **String** | User email of sub-account organization | [optional] 
**target** | **String** | Set target after login success * automation - Redirect to Automation after login * email_campaign - Redirect to Email Campaign after login * contacts - Redirect to Contacts after login * landing_pages - Redirect to Landing Pages after login * email_transactional - Redirect to Email Transactional after login * senders - Redirect to Contacts after login * sms_campaign - Redirect to Sms Campaign after login * sms_transactional - Redirect to Sms Transactional after login  | [optional] 


<a name="TargetEnum"></a>
## Enum: TargetEnum


* `automation` (value: `"automation"`)

* `emailCampaign` (value: `"email_campaign"`)

* `contacts` (value: `"contacts"`)

* `landingPages` (value: `"landing_pages"`)

* `emailTransactional` (value: `"email_transactional"`)

* `senders` (value: `"senders"`)

* `smsCampaign` (value: `"sms_campaign"`)

* `smsTransactional` (value: `"sms_transactional"`)




