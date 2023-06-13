# Brevo.GetSmtpTemplateOverview

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | ID of the template | 
**name** | **String** | Name of the template | 
**subject** | **String** | Subject of the template | 
**isActive** | **Boolean** | Status of template (true=active, false=inactive) | 
**testSent** | **Boolean** | Status of test sending for the template (true=test email has been sent, false=test email has not been sent) | 
**sender** | [**GetSmtpTemplateOverviewSender**](GetSmtpTemplateOverviewSender.md) |  | 
**replyTo** | **String** | Email defined as the \"Reply to\" for the template | 
**toField** | **String** | Customisation of the \"to\" field for the template | 
**tag** | **String** | Tag of the template | 
**htmlContent** | **String** | HTML content of the template | 
**createdAt** | **String** | Creation UTC date-time of the template (YYYY-MM-DDTHH:mm:ss.SSSZ) | 
**modifiedAt** | **String** | Last modification UTC date-time of the template (YYYY-MM-DDTHH:mm:ss.SSSZ) | 
**doiTemplate** | **Boolean** | It is true if template is a valid Double opt-in (DOI) template, otherwise it is false. This field will be available only in case of single template detail call. | [optional] 


