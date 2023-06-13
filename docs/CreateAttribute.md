# Brevo.CreateAttribute

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **String** | Value of the attribute. Use only if the attribute's category is 'calculated' or 'global' | [optional] 
**isRecurring** | **Boolean** | Type of the attribute. Use only if the attribute's category is 'calculated' or 'global' | [optional] 
**enumeration** | [**[CreateAttributeEnumeration]**](CreateAttributeEnumeration.md) | List of values and labels that the attribute can take. Use only if the attribute's category is \"category\". For example, [{\"value\":1, \"label\":\"male\"}, {\"value\":2, \"label\":\"female\"}] | [optional] 
**type** | **String** | Type of the attribute. Use only if the attribute's category is 'normal', 'category' or 'transactional' ( type 'boolean' is only available if the category is 'normal' attribute, type 'id' is only available if the category is 'transactional' attribute & type 'category' is only available if the category is 'category' attribute ) | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `text` (value: `"text"`)

* `_date` (value: `"date"`)

* `_float` (value: `"float"`)

* `_boolean` (value: `"boolean"`)

* `id` (value: `"id"`)

* `category` (value: `"category"`)




