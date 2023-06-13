# Brevo.CreateDoiContact

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **String** | Email address where the confirmation email will be sent. This email address will be the identifier for all other contact attributes. | 
**attributes** | **Object** | Pass the set of attributes and their values. These attributes must be present in your Brevo account. For eg. {'FNAME':'Elly', 'LNAME':'Roger'} | [optional] 
**includeListIds** | **[Number]** | Lists under user account where contact should be added | 
**excludeListIds** | **[Number]** | Lists under user account where contact should not be added | [optional] 
**templateId** | **Number** | Id of the Double opt-in (DOI) template | 
**redirectionUrl** | **String** | URL of the web page that user will be redirected to after clicking on the double opt in URL. When editing your DOI template you can reference this URL by using the tag {{ params.DOIurl }}. | 


