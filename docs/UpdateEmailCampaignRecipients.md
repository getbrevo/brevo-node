# Brevo.UpdateEmailCampaignRecipients

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exclusionListIds** | **[Number]** | List ids which have to be excluded from a campaign | [optional] 
**listIds** | **[Number]** | Lists Ids to send the campaign to. Campaign should only be updated with listIds if listIds were used to create it. REQUIRED if already not present in campaign and scheduledAt is not empty | [optional] 
**segmentIds** | **[Number]** | Mandatory if listIds are not used. Campaign should only be updated with segmentIds if segmentIds were used to create it. Segment ids to send the campaign to. | [optional] 


