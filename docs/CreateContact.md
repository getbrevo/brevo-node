# Brevo.CreateContact

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **String** | Email address of the user. Mandatory if \"SMS\" field is not passed in \"attributes\" parameter. Mobile Number in \"SMS\" field should be passed with proper country code. For example {\"SMS\":\"+91xxxxxxxxxx\"} or {\"SMS\":\"0091xxxxxxxxxx\"} | [optional] 
**extId** | **String** | Pass your own Id to create a contact. | [optional] 
**attributes** | **Object** | Pass the set of attributes and their values. The attribute's parameter should be passed in capital letter while creating a contact. These attributes must be present in your Brevo account. For eg. {\"FNAME\":\"Elly\", \"LNAME\":\"Roger\"} | [optional] 
**emailBlacklisted** | **Boolean** | Set this field to blacklist the contact for emails (emailBlacklisted = true) | [optional] 
**smsBlacklisted** | **Boolean** | Set this field to blacklist the contact for SMS (smsBlacklisted = true) | [optional] 
**listIds** | **[Number]** | Ids of the lists to add the contact to | [optional] 
**updateEnabled** | **Boolean** | Facilitate to update the existing contact in the same request (updateEnabled = true) | [optional] [default to false]
**smtpBlacklistSender** | **[String]** | transactional email forbidden sender for contact. Use only for email Contact ( only available if updateEnabled = true ) | [optional] 


