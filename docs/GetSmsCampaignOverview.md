# Brevo.GetSmsCampaignOverview

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | ID of the SMS Campaign | 
**name** | **String** | Name of the SMS Campaign | 
**status** | **String** | Status of the SMS Campaign | 
**content** | **String** | Content of the SMS Campaign | 
**scheduledAt** | **String** | UTC date-time on which SMS campaign is scheduled. Should be in YYYY-MM-DDTHH:mm:ss.SSSZ format | [optional] 
**sender** | **String** | Sender of the SMS Campaign | 
**createdAt** | **String** | Creation UTC date-time of the SMS campaign (YYYY-MM-DDTHH:mm:ss.SSSZ) | 
**modifiedAt** | **String** | UTC date-time of last modification of the SMS campaign (YYYY-MM-DDTHH:mm:ss.SSSZ) | 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `draft` (value: `"draft"`)

* `sent` (value: `"sent"`)

* `archive` (value: `"archive"`)

* `queued` (value: `"queued"`)

* `suspended` (value: `"suspended"`)

* `inProcess` (value: `"inProcess"`)




