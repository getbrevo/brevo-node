# Brevo.GetExtendedCampaignOverview

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**testSent** | **Boolean** | Retrieved the status of test email sending. (true=Test email has been sent  false=Test email has not been sent) | 
**header** | **String** | Header of the campaign | 
**footer** | **String** | Footer of the campaign | 
**sender** | [**GetExtendedCampaignOverviewSender**](GetExtendedCampaignOverviewSender.md) |  | 
**replyTo** | **String** | Email defined as the \"Reply to\" of the campaign | 
**toField** | **String** | Customisation of the \"to\" field of the campaign | [optional] 
**htmlContent** | **String** | HTML content of the campaign | 
**shareLink** | **String** | Link to share the campaign on social medias | [optional] 
**tag** | **String** | Tag of the campaign | [optional] 
**createdAt** | **String** | Creation UTC date-time of the campaign (YYYY-MM-DDTHH:mm:ss.SSSZ) | 
**modifiedAt** | **String** | UTC date-time of last modification of the campaign (YYYY-MM-DDTHH:mm:ss.SSSZ) | 
**inlineImageActivation** | **Boolean** | Status of inline image. inlineImageActivation = false means image can’t be embedded, & inlineImageActivation = true means image can be embedded, in the email. | [optional] 
**mirrorActive** | **Boolean** | Status of mirror links in campaign. mirrorActive = false means mirror links are deactivated, & mirrorActive = true means mirror links are activated, in the campaign | [optional] 
**recurring** | **Boolean** | FOR TRIGGER ONLY ! Type of trigger campaign.recurring = false means contact can receive the same Trigger campaign only once, & recurring = true means contact can receive the same Trigger campaign several times | [optional] 
**sentDate** | **String** | Sent UTC date-time of the campaign (YYYY-MM-DDTHH:mm:ss.SSSZ). Only available if 'status' of the campaign is 'sent' | [optional] 
**returnBounce** | **Number** | Total number of non-delivered campaigns for a particular campaign id. | [optional] 


