# Brevo.UpdateBatchContactsContacts

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **String** | Email address of the user to be updated (For each operation only pass one of the supported contact identifiers. Email, id or sms) | [optional] 
**id** | **Number** | id of the user to be updated (For each operation only pass one of the supported contact identifiers. Email, id or sms) | [optional] 
**sms** | **String** | SMS of the user to be updated (For each operation only pass one of the supported contact identifiers. Email, id or sms) | [optional] 
**extId** | **String** | Pass your own Id to update ext_id of a contact. | [optional] 
**attributes** | **{String: Object}** | Pass the set of attributes to be updated. **These attributes must be present in your account**. To update existing email address of a contact with the new one please pass EMAIL in attribtes. For example, **{ \"EMAIL\":\"newemail@domain.com\", \"FNAME\":\"Ellie\", \"LNAME\":\"Roger\"}**. Keep in mind transactional attributes can be updated the same way as normal attributes. Mobile Number in **SMS** field should be passed with proper country code. For example: **{\"SMS\":\"+91xxxxxxxxxx\"} or {\"SMS\":\"0091xxxxxxxxxx\"}**  | [optional] 
**emailBlacklisted** | **Boolean** | Set/unset this field to blacklist/allow the contact for emails (emailBlacklisted = true) | [optional] 
**smsBlacklisted** | **Boolean** | Set/unset this field to blacklist/allow the contact for SMS (smsBlacklisted = true) | [optional] 
**listIds** | **[Number]** | Ids of the lists to add the contact to | [optional] 
**unlinkListIds** | **[Number]** | Ids of the lists to remove the contact from | [optional] 
**smtpBlacklistSender** | **[String]** | transactional email forbidden sender for contact. Use only for email Contact | [optional] 


