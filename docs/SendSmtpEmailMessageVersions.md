# Brevo.SendSmtpEmailMessageVersions

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**to** | [**[SendSmtpEmailTo1]**](SendSmtpEmailTo1.md) | List of email addresses and names (_optional_) of the recipients. For example, [{\"name\":\"Jimmy\", \"email\":\"jimmy98@example.com\"}, {\"name\":\"Joe\", \"email\":\"joe@example.com\"}] | 
**params** | **{String: Object}** | Pass the set of attributes to customize the template. For example, {\"FNAME\":\"Joe\", \"LNAME\":\"Doe\"}. It's considered only if template is in New Template Language format. | [optional] 
**bcc** | [**[SendSmtpEmailBcc]**](SendSmtpEmailBcc.md) | List of email addresses and names (optional) of the recipients in bcc | [optional] 
**cc** | [**[SendSmtpEmailCc]**](SendSmtpEmailCc.md) | List of email addresses and names (optional) of the recipients in cc | [optional] 
**replyTo** | [**SendSmtpEmailReplyTo1**](SendSmtpEmailReplyTo1.md) |  | [optional] 
**subject** | **String** | Custom subject specific to message version  | [optional] 


