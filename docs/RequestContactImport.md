# Brevo.RequestContactImport

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fileUrl** | **String** | Mandatory if fileBody or jsonBody is not defined. URL of the file to be imported (no local file). Possible file formats: .txt, .csv, .json | [optional] 
**fileBody** | **String** | Mandatory if fileUrl and jsonBody is not defined. CSV content to be imported. Use semicolon to separate multiple attributes. Maximum allowed file body size is 10MB . However we recommend a safe limit of around 8 MB to avoid the issues caused due to increase of file body size while parsing. Please use fileUrl instead to import bigger files. | [optional] 
**jsonBody** | **[{String: Object}]** | **Mandatory if fileUrl and fileBody is not defined.** JSON content to be imported. **Maximum allowed json body size is 10MB** . However we recommend a safe limit of around 8 MB to avoid the issues caused due to increase of json body size while parsing. Please use fileUrl instead to import bigger files.  | [optional] 
**listIds** | **[Number]** | Mandatory if newList is not defined. Ids of the lists in which the contacts shall be imported. For example, [2, 4, 7]. | [optional] 
**notifyUrl** | **String** | URL that will be called once the import process is finished. For reference, https://help.brevo.com/hc/en-us/articles/360007666479 | [optional] 
**newList** | [**RequestContactImportNewList**](RequestContactImportNewList.md) |  | [optional] 
**emailBlacklist** | **Boolean** | To blacklist all the contacts for email | [optional] [default to false]
**smsBlacklist** | **Boolean** | To blacklist all the contacts for sms | [optional] [default to false]
**updateExistingContacts** | **Boolean** | To facilitate the choice to update the existing contacts | [optional] [default to true]
**emptyContactsAttributes** | **Boolean** | To facilitate the choice to erase any attribute of the existing contacts with empty value. emptyContactsAttributes = true means the empty fields in your import will erase any attribute that currently contain data in Brevo, & emptyContactsAttributes = false means the empty fields will not affect your existing data ( only available if `updateExistingContacts` set to true ) | [optional] [default to false]


