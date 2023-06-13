# Brevo.RequestContactExportCustomContactFilter

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actionForContacts** | **String** | Mandatory if neither actionForEmailCampaigns nor actionForSmsCampaigns is passed. This will export the contacts on the basis of provided action applied on contacts as per the list id. * allContacts - Fetch the list of all contacts for a particular list. * subscribed & unsubscribed - Fetch the list of subscribed / unsubscribed (blacklisted via any means) contacts for a particular list. * unsubscribedPerList - Fetch the list of contacts that are unsubscribed from a particular list only.  | [optional] 
**actionForEmailCampaigns** | **String** | Mandatory if neither actionForContacts nor actionForSmsCampaigns is passed. This will export the contacts on the basis of provided action applied on email campaigns. * openers & nonOpeners - emailCampaignId is mandatory. Fetch the list of readers / non-readers for a particular email campaign. * clickers & nonClickers - emailCampaignId is mandatory. Fetch the list of clickers / non-clickers for a particular email campaign. * unsubscribed - emailCampaignId is mandatory. Fetch the list of all unsubscribed (blacklisted via any means) contacts for a particular email campaign. * hardBounces & softBounces - emailCampaignId is optional. Fetch the list of hard bounces / soft bounces for a particular / all email campaign(s).  | [optional] 
**actionForSmsCampaigns** | **String** | Mandatory if neither actionForContacts nor actionForEmailCampaigns is passed. This will export the contacts on the basis of provided action applied on sms campaigns. * unsubscribed - Fetch the list of all unsubscribed (blacklisted via any means) contacts for all / particular sms campaigns. * hardBounces & softBounces - Fetch the list of hard bounces / soft bounces for all / particular sms campaigns.  | [optional] 
**listId** | **Number** | Mandatory if actionForContacts is passed, ignored otherwise. Id of the list for which the corresponding action shall be applied in the filter. | [optional] 
**emailCampaignId** | **Number** | Considered only if actionForEmailCampaigns is passed, ignored otherwise. Mandatory if action is one of the following - openers, nonOpeners, clickers, nonClickers, unsubscribed. The id of the email campaign for which the corresponding action shall be applied in the filter. | [optional] 
**smsCampaignId** | **Number** | Considered only if actionForSmsCampaigns is passed, ignored otherwise. The id of sms campaign for which the corresponding action shall be applied in the filter. | [optional] 


<a name="ActionForContactsEnum"></a>
## Enum: ActionForContactsEnum


* `allContacts` (value: `"allContacts"`)

* `subscribed` (value: `"subscribed"`)

* `unsubscribed` (value: `"unsubscribed"`)

* `unsubscribedPerList` (value: `"unsubscribedPerList"`)




<a name="ActionForEmailCampaignsEnum"></a>
## Enum: ActionForEmailCampaignsEnum


* `openers` (value: `"openers"`)

* `nonOpeners` (value: `"nonOpeners"`)

* `clickers` (value: `"clickers"`)

* `nonClickers` (value: `"nonClickers"`)

* `unsubscribed` (value: `"unsubscribed"`)

* `hardBounces` (value: `"hardBounces"`)

* `softBounces` (value: `"softBounces"`)




<a name="ActionForSmsCampaignsEnum"></a>
## Enum: ActionForSmsCampaignsEnum


* `hardBounces` (value: `"hardBounces"`)

* `softBounces` (value: `"softBounces"`)

* `unsubscribed` (value: `"unsubscribed"`)




