# Brevo.GetWhatsappCampaignsCampaigns

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | ID of the WhatsApp Campaign | 
**campaignName** | **String** | Name of the WhatsApp Campaign | 
**templateId** | **String** | Id of the WhatsApp template | 
**campaignStatus** | **String** | Status of the WhatsApp Campaign | 
**scheduledAt** | **String** | UTC date-time on which WhatsApp campaign is scheduled. Should be in YYYY-MM-DDTHH:mm:ss.SSSZ format | 
**errorReason** | **String** | Error reason in the campaign creation | [optional] 
**invalidatedContacts** | **Number** | Count of invalidated contacts | [optional] 
**readPercentage** | **Number** | Read percentage of the the WhatsApp campaign created | [optional] 
**stats** | [**WhatsappCampStats**](WhatsappCampStats.md) |  | [optional] 
**createdAt** | **String** | Creation UTC date-time of the WhatsApp campaign (YYYY-MM-DDTHH:mm:ss.SSSZ) | 
**modifiedAt** | **String** | UTC date-time of last modification of the whatsapp template (YYYY-MM-DDTHH:mm:ss.SSSZ) | 


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




