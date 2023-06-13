# Brevo.GetProductDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Product ID for which you requested the details | 
**name** | **String** | Name of the product for which you requested the details | 
**createdAt** | **String** | Creation UTC date-time of the product (YYYY-MM-DDTHH:mm:ss.SSSZ) | 
**modifiedAt** | **String** | Last modification UTC date-time of the product (YYYY-MM-DDTHH:mm:ss.SSSZ) | 
**url** | **String** | URL to the product | [optional] 
**imageUrl** | **String** | Absolute URL to the cover image of the product | [optional] 
**sku** | **String** | Product identifier from the shop | [optional] 
**price** | **Number** | Price of the product | [optional] 
**categories** | **[String]** | Category ID-s of the product | [optional] 
**parentId** | **String** | Parent product id of the product | [optional] 
**s3Original** | **String** | S3 url of original image | [optional] 
**s3ThumbAnalytics** | **String** | S3 thumbnail url of original image in 120x120 dimension for analytics section | 
**metaInfo** | **Object** | Meta data of product such as description, vendor, producer, stock level, etc. | [optional] 
**s3ThumbEditor** | **String** | S3 thumbnail url of original image in 600x400 dimension for editor section | 
**isDeleted** | **Boolean** | product deleted from the shop's database | [optional] 


