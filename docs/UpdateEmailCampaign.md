# Brevo.UpdateEmailCampaign

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tag** | **String** | Tag of the campaign | [optional] 
**sender** | [**UpdateEmailCampaignSender**](UpdateEmailCampaignSender.md) |  | [optional] 
**name** | **String** | Name of the campaign | [optional] 
**htmlContent** | **String** | Body of the message (HTML version). If the campaign is designed using Drag & Drop editor via HTML content, then the design page will not have Drag & Drop editor access for that campaign. REQUIRED if htmlUrl is empty | [optional] 
**htmlUrl** | **String** | Url which contents the body of the email message. REQUIRED if htmlContent is empty | [optional] 
**scheduledAt** | **String** | UTC date-time on which the campaign has to run (YYYY-MM-DDTHH:mm:ss.SSSZ). Prefer to pass your timezone in date-time format for accurate result. If sendAtBestTime is set to true, your campaign will be sent according to the date passed (ignoring the time part). | [optional] 
**subject** | **String** | Subject of the campaign | [optional] 
**previewText** | **String** | Preview text or preheader of the email campaign | [optional] 
**replyTo** | **String** | Email on which campaign recipients will be able to reply to | [optional] 
**toField** | **String** | To personalize the «To» Field. If you want to include the first name and last name of your recipient, add {FNAME} {LNAME}. These contact attributes must already exist in your Brevo account. If input parameter 'params' used please use {{contact.FNAME}} {{contact.LNAME}} for personalization | [optional] 
**recipients** | [**UpdateEmailCampaignRecipients**](UpdateEmailCampaignRecipients.md) |  | [optional] 
**attachmentUrl** | **String** | Absolute url of the attachment (no local file). Extension allowed: xlsx, xls, ods, docx, docm, doc, csv, pdf, txt, gif, jpg, jpeg, png, tif, tiff, rtf, bmp, cgm, css, shtml, html, htm, zip, xml, ppt, pptx, tar, ez, ics, mobi, msg, pub and eps | [optional] 
**inlineImageActivation** | **Boolean** | Status of inline image. inlineImageActivation = false means image can’t be embedded, & inlineImageActivation = true means image can be embedded, in the email. You cannot send a campaign of more than 4MB with images embedded in the email. Campaigns with the images embedded in the email must be sent to less than 5000 contacts. | [optional] [default to false]
**mirrorActive** | **Boolean** | Status of mirror links in campaign. mirrorActive = false means mirror links are deactivated, & mirrorActive = true means mirror links are activated, in the campaign | [optional] 
**recurring** | **Boolean** | FOR TRIGGER ONLY ! Type of trigger campaign.recurring = false means contact can receive the same Trigger campaign only once, & recurring = true means contact can receive the same Trigger campaign several times | [optional] [default to false]
**footer** | **String** | Footer of the email campaign | [optional] 
**header** | **String** | Header of the email campaign | [optional] 
**utmCampaign** | **String** | Customize the utm_campaign value. If this field is empty, the campaign name will be used. Only alphanumeric characters and spaces are allowed | [optional] 
**params** | **Object** | Pass the set of attributes to customize the type 'classic' campaign. For example, {\"FNAME\":\"Joe\", \"LNAME\":\"Doe\"}. The 'params' field will get updated, only if the campaign is in New Template Language, else ignored. The New Template Language is dependent on the values of 'subject', 'htmlContent/htmlUrl', 'sender.name' & 'toField' | [optional] 
**sendAtBestTime** | **Boolean** | Set this to true if you want to send your campaign at best time. Note:- if true, warmup ip will be disabled. | [optional] 
**abTesting** | **Boolean** | Status of A/B Test. abTesting = false means it is disabled, & abTesting = true means it is enabled. 'subjectA', 'subjectB', 'splitRule', 'winnerCriteria' & 'winnerDelay' will be considered if abTesting is set to true. 'subject' if passed is ignored.  Can be set to true only if 'sendAtBestTime' is 'false'. You will be able to set up two subject lines for your campaign and send them to a random sample of your total recipients. Half of the test group will receive version A, and the other half will receive version B | [optional] [default to false]
**subjectA** | **String** | Subject A of the campaign. Considered if abTesting = true. subjectA & subjectB should have unique value | [optional] 
**subjectB** | **String** | Subject B of the campaign. Considered if abTesting = true. subjectA & subjectB should have unique value | [optional] 
**splitRule** | **Number** | Add the size of your test groups. Considered if abTesting = true. We'll send version A and B to a random sample of recipients, and then the winning version to everyone else | [optional] 
**winnerCriteria** | **String** | Choose the metrics that will determinate the winning version. Considered if 'splitRule' >= 1 and < 50. If splitRule = 50, 'winnerCriteria' is ignored if passed or alreday exist in record | [optional] 
**winnerDelay** | **Number** | Choose the duration of the test in hours. Maximum is 7 days, pass 24*7 = 168 hours. The winning version will be sent at the end of the test. Considered if 'splitRule' >= 1 and < 50. If splitRule = 50, 'winnerDelay' is ignored if passed or alreday exist in record | [optional] 
**ipWarmupEnable** | **Boolean** | Available for dedicated ip clients. Set this to true if you wish to warm up your ip. | [optional] [default to false]
**initialQuota** | **Number** | Set an initial quota greater than 1 for warming up your ip. We recommend you set a value of 3000. | [optional] 
**increaseRate** | **Number** | Set a percentage increase rate for warming up your ip. We recommend you set the increase rate to 30% per day. If you want to send the same number of emails every day, set the daily increase value to 0%. | [optional] 
**unsubscriptionPageId** | **String** | Enter an unsubscription page id. The page id is a 24 digit alphanumeric id that can be found in the URL when editing the page. | [optional] 
**updateFormId** | **String** | Mandatory if templateId is used containing the {{ update_profile }} tag. Enter an update profile form id. The form id is a 24 digit alphanumeric id that can be found in the URL when editing the form. | [optional] 


<a name="WinnerCriteriaEnum"></a>
## Enum: WinnerCriteriaEnum


* `open` (value: `"open"`)

* `click` (value: `"click"`)




