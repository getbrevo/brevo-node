# Brevo.GetWhatsappCampaignOverview

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | ID of the WhatsApp Campaign | 
**campaignName** | **String** | Name of the WhatsApp Campaign | 
**campaignStatus** | **String** | Status of the WhatsApp Campaign | 
**scheduledAt** | **String** | UTC date-time on which WhatsApp campaign is scheduled. Should be in YYYY-MM-DDTHH:mm:ss.SSSZ format | [optional] 
**senderNumber** | **String** | Sender of the WhatsApp Campaign | 
**stats** | [**WhatsappCampStats**](WhatsappCampStats.md) |  | [optional] 
**template** | [**WhatsappCampTemplate**](WhatsappCampTemplate.md) |  | 
**createdAt** | **String** | Creation UTC date-time of the WhatsApp campaign (YYYY-MM-DDTHH:mm:ss.SSSZ) | 
**modifiedAt** | **String** | UTC date-time of last modification of the WhatsApp campaign (YYYY-MM-DDTHH:mm:ss.SSSZ) | 


<a name="CampaignStatusEnum"></a>
## Enum: CampaignStatusEnum


* `draft` (value: `"draft"`)

* `scheduled` (value: `"scheduled"`)

* `pending` (value: `"pending"`)

* `approved` (value: `"approved"`)

* `running` (value: `"running"`)

* `suspended` (value: `"suspended"`)

* `rejected` (value: `"rejected"`)

* `sent` (value: `"sent"`)




