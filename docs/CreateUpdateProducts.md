# Brevo.CreateUpdateProducts

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Product ID for which you requested the details | 
**name** | **String** | Mandatory in case of creation**. Name of the product for which you requested the details | 
**url** | **String** | URL to the product | [optional] 
**imageUrl** | **String** | Absolute URL to the cover image of the product | [optional] 
**sku** | **String** | Product identifier from the shop | [optional] 
**price** | **Number** | Price of the product | [optional] 
**categories** | **[String]** | Category ID-s of the product | [optional] 
**parentId** | **String** | Parent product id of the product | [optional] 
**metaInfo** | **{String: String}** | Meta data of product such as description, vendor, producer, stock level. The size of cumulative metaInfo shall not exceed **1000 KB**. Maximum length of metaInfo object can be 10. | [optional] 
**deletedAt** | **String** | UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ) of the product deleted from the shop's database | [optional] 


