# Brevo.Order

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique ID of the order. | 
**createdAt** | **String** | Event occurrence UTC date-time (YYYY-MM-DDTHH:mm:ssZ), when order is actually created. | 
**updatedAt** | **String** | Event updated UTC date-time (YYYY-MM-DDTHH:mm:ssZ), when the status of the order is actually changed/updated. | 
**status** | **String** | State of the order. | 
**amount** | **Number** | Total amount of the order, including all shipping expenses, tax and the price of items. | 
**products** | [**[OrderProducts]**](OrderProducts.md) |  | 
**email** | **String** | Email of the contact, Mandatory if \"phone\" field is not passed in \"billing\" parameter. | [optional] 
**billing** | [**OrderBilling**](OrderBilling.md) |  | [optional] 
**coupons** | **[String]** | Coupons applied to the order. Stored case insensitive. | [optional] 


