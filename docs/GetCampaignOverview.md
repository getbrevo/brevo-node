# Brevo.GetCampaignOverview

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | ID of the campaign | 
**name** | **String** | Name of the campaign | 
**subject** | **String** | Subject of the campaign. Only available if `abTesting` flag of the campaign is `false` | [optional] 
**previewText** | **String** | Preview text or preheader of the email campaign | [optional] 
**type** | **String** | Type of campaign | 
**status** | **String** | Status of the campaign | 
**scheduledAt** | **String** | UTC date-time on which campaign is scheduled (YYYY-MM-DDTHH:mm:ss.SSSZ) | [optional] 
**abTesting** | **Boolean** | Status of A/B Test for the campaign. abTesting = false means it is disabled, & abTesting = true means it is enabled. | [optional] 
**subjectA** | **String** | Subject A of the ab-test campaign. Only available if `abTesting` flag of the campaign is `true` | [optional] 
**subjectB** | **String** | Subject B of the ab-test campaign. Only available if `abTesting` flag of the campaign is `true` | [optional] 
**splitRule** | **Number** | The size of your ab-test groups. Only available if `abTesting` flag of the campaign is `true` | [optional] 
**winnerCriteria** | **String** | Criteria for the winning version. Only available if `abTesting` flag of the campaign is `true` | [optional] 
**winnerDelay** | **Number** | The duration of the test in hours at the end of which the winning version will be sent. Only available if `abTesting` flag of the campaign is `true` | [optional] 
**sendAtBestTime** | **Boolean** | It is true if you have chosen to send your campaign at best time, otherwise it is false | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `classic` (value: `"classic"`)

* `trigger` (value: `"trigger"`)




<a name="StatusEnum"></a>
## Enum: StatusEnum


* `draft` (value: `"draft"`)

* `sent` (value: `"sent"`)

* `archive` (value: `"archive"`)

* `queued` (value: `"queued"`)

* `suspended` (value: `"suspended"`)

* `inProcess` (value: `"in_process"`)




