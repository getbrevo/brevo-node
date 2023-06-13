# Brevo.Body6

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Name of task | 
**duration** | **Number** | Duration of task in milliseconds [1 minute = 60000 ms] | [optional] 
**taskTypeId** | **String** | Id for type of task e.g Call / Email / Meeting etc. | 
**_date** | **Date** | Task due date and time | 
**notes** | **String** | Notes added to a task | [optional] 
**done** | **Boolean** | Task marked as done | [optional] 
**assignToId** | **String** | User id to whom task is assigned | [optional] 
**contactsIds** | **[Number]** | Contact ids for contacts linked to this task | [optional] 
**dealsIds** | **[String]** | Deal ids for deals a task is linked to | [optional] 
**companiesIds** | **[String]** | Companies ids for companies a task is linked to | [optional] 
**reminder** | [**TaskReminder**](TaskReminder.md) |  | [optional] 


