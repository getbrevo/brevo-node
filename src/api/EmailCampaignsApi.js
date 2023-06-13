/*
 * Brevo API
 * Brevo provide a RESTFul API that can be used with any languages. With this API, you will be able to :   - Manage your campaigns and get the statistics   - Manage your contacts   - Send transactional Emails and SMS   - and much more...  You can download our wrappers at https://github.com/orgs/brevo  **Possible responses**   | Code | Message |   | :-------------: | ------------- |   | 200  | OK. Successful Request  |   | 201  | OK. Successful Creation |   | 202  | OK. Request accepted |   | 204  | OK. Successful Update/Deletion  |   | 400  | Error. Bad Request  |   | 401  | Error. Authentication Needed  |   | 402  | Error. Not enough credit, plan upgrade needed  |   | 403  | Error. Permission denied  |   | 404  | Error. Object does not exist |   | 405  | Error. Method not allowed  |   | 406  | Error. Not Acceptable  | 
 *
 * OpenAPI spec version: 3.0.0
 * Contact: contact@brevo.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.32
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AbTestCampaignResult', 'model/CreateEmailCampaign', 'model/CreateModel', 'model/CreatedProcessId', 'model/EmailExportRecipients', 'model/ErrorModel', 'model/GetEmailCampaign', 'model/GetEmailCampaigns', 'model/GetSharedTemplateUrl', 'model/PostSendFailed', 'model/SendReport', 'model/SendTestEmail', 'model/UpdateCampaignStatus', 'model/UpdateEmailCampaign', 'model/UploadImageModel', 'model/UploadImageToGallery'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AbTestCampaignResult'), require('../model/CreateEmailCampaign'), require('../model/CreateModel'), require('../model/CreatedProcessId'), require('../model/EmailExportRecipients'), require('../model/ErrorModel'), require('../model/GetEmailCampaign'), require('../model/GetEmailCampaigns'), require('../model/GetSharedTemplateUrl'), require('../model/PostSendFailed'), require('../model/SendReport'), require('../model/SendTestEmail'), require('../model/UpdateCampaignStatus'), require('../model/UpdateEmailCampaign'), require('../model/UploadImageModel'), require('../model/UploadImageToGallery'));
  } else {
    // Browser globals (root is window)
    if (!root.Brevo) {
      root.Brevo = {};
    }
    root.Brevo.EmailCampaignsApi = factory(root.Brevo.ApiClient, root.Brevo.AbTestCampaignResult, root.Brevo.CreateEmailCampaign, root.Brevo.CreateModel, root.Brevo.CreatedProcessId, root.Brevo.EmailExportRecipients, root.Brevo.ErrorModel, root.Brevo.GetEmailCampaign, root.Brevo.GetEmailCampaigns, root.Brevo.GetSharedTemplateUrl, root.Brevo.PostSendFailed, root.Brevo.SendReport, root.Brevo.SendTestEmail, root.Brevo.UpdateCampaignStatus, root.Brevo.UpdateEmailCampaign, root.Brevo.UploadImageModel, root.Brevo.UploadImageToGallery);
  }
}(this, function(ApiClient, AbTestCampaignResult, CreateEmailCampaign, CreateModel, CreatedProcessId, EmailExportRecipients, ErrorModel, GetEmailCampaign, GetEmailCampaigns, GetSharedTemplateUrl, PostSendFailed, SendReport, SendTestEmail, UpdateCampaignStatus, UpdateEmailCampaign, UploadImageModel, UploadImageToGallery) {
  'use strict';

  /**
   * EmailCampaigns service.
   * @module api/EmailCampaignsApi
   * @version 1.0.0
   */

  /**
   * Constructs a new EmailCampaignsApi. 
   * @alias module:api/EmailCampaignsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create an email campaign
     * @param {module:model/CreateEmailCampaign} emailCampaigns Values to create a campaign
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateModel} and HTTP response
     */
    this.createEmailCampaignWithHttpInfo = function(emailCampaigns) {
      var postBody = emailCampaigns;

      // verify the required parameter 'emailCampaigns' is set
      if (emailCampaigns === undefined || emailCampaigns === null) {
        throw new Error("Missing the required parameter 'emailCampaigns' when calling createEmailCampaign");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api-key', 'partner-key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CreateModel;

      return this.apiClient.callApi(
        '/emailCampaigns', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create an email campaign
     * @param {module:model/CreateEmailCampaign} emailCampaigns Values to create a campaign
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateModel}
     */
    this.createEmailCampaign = function(emailCampaigns) {
      return this.createEmailCampaignWithHttpInfo(emailCampaigns)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete an email campaign
     * @param {Number} campaignId id of the campaign
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteEmailCampaignWithHttpInfo = function(campaignId) {
      var postBody = null;

      // verify the required parameter 'campaignId' is set
      if (campaignId === undefined || campaignId === null) {
        throw new Error("Missing the required parameter 'campaignId' when calling deleteEmailCampaign");
      }


      var pathParams = {
        'campaignId': campaignId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api-key', 'partner-key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/emailCampaigns/{campaignId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete an email campaign
     * @param {Number} campaignId id of the campaign
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteEmailCampaign = function(campaignId) {
      return this.deleteEmailCampaignWithHttpInfo(campaignId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Export the recipients of an email campaign
     * @param {Number} campaignId Id of the campaign
     * @param {Object} opts Optional parameters
     * @param {module:model/EmailExportRecipients} opts.recipientExport Values to send for a recipient export request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreatedProcessId} and HTTP response
     */
    this.emailExportRecipientsWithHttpInfo = function(campaignId, opts) {
      opts = opts || {};
      var postBody = opts['recipientExport'];

      // verify the required parameter 'campaignId' is set
      if (campaignId === undefined || campaignId === null) {
        throw new Error("Missing the required parameter 'campaignId' when calling emailExportRecipients");
      }


      var pathParams = {
        'campaignId': campaignId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api-key', 'partner-key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CreatedProcessId;

      return this.apiClient.callApi(
        '/emailCampaigns/{campaignId}/exportRecipients', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Export the recipients of an email campaign
     * @param {Number} campaignId Id of the campaign
     * @param {Object} opts Optional parameters
     * @param {module:model/EmailExportRecipients} opts.recipientExport Values to send for a recipient export request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreatedProcessId}
     */
    this.emailExportRecipients = function(campaignId, opts) {
      return this.emailExportRecipientsWithHttpInfo(campaignId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get an A/B test email campaign results
     * Obtain winning version of an A/B test email campaign
     * @param {Number} campaignId Id of the A/B test campaign
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AbTestCampaignResult} and HTTP response
     */
    this.getAbTestCampaignResultWithHttpInfo = function(campaignId) {
      var postBody = null;

      // verify the required parameter 'campaignId' is set
      if (campaignId === undefined || campaignId === null) {
        throw new Error("Missing the required parameter 'campaignId' when calling getAbTestCampaignResult");
      }


      var pathParams = {
        'campaignId': campaignId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api-key', 'partner-key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = AbTestCampaignResult;

      return this.apiClient.callApi(
        '/emailCampaigns/{campaignId}/abTestCampaignResult', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get an A/B test email campaign results
     * Obtain winning version of an A/B test email campaign
     * @param {Number} campaignId Id of the A/B test campaign
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AbTestCampaignResult}
     */
    this.getAbTestCampaignResult = function(campaignId) {
      return this.getAbTestCampaignResultWithHttpInfo(campaignId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get an email campaign report
     * @param {Number} campaignId Id of the campaign
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.statistics Filter on the type of statistics required. Example **globalStats** value will only fetch globalStats info of the campaign in returned response.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetEmailCampaign} and HTTP response
     */
    this.getEmailCampaignWithHttpInfo = function(campaignId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'campaignId' is set
      if (campaignId === undefined || campaignId === null) {
        throw new Error("Missing the required parameter 'campaignId' when calling getEmailCampaign");
      }


      var pathParams = {
        'campaignId': campaignId
      };
      var queryParams = {
        'statistics': opts['statistics'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api-key', 'partner-key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = GetEmailCampaign;

      return this.apiClient.callApi(
        '/emailCampaigns/{campaignId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get an email campaign report
     * @param {Number} campaignId Id of the campaign
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.statistics Filter on the type of statistics required. Example **globalStats** value will only fetch globalStats info of the campaign in returned response.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetEmailCampaign}
     */
    this.getEmailCampaign = function(campaignId, opts) {
      return this.getEmailCampaignWithHttpInfo(campaignId, opts)
        .then(function(response_and_data) {
          return JSON.parse(response_and_data.response.text);
        });
    }


    /**
     * Return all your created email campaigns
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.type Filter on the type of the campaigns
     * @param {module:model/String} opts.status Filter on the status of the campaign
     * @param {module:model/String} opts.statistics Filter on the type of statistics required. Example **globalStats** value will only fetch globalStats info of the campaign in returned response.
     * @param {String} opts.startDate Mandatory if endDate is used. Starting (urlencoded) UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ) to filter the sent email campaigns. Prefer to pass your timezone in date-time format for accurate result ( only available if either 'status' not passed and if passed is set to 'sent' )
     * @param {String} opts.endDate Mandatory if startDate is used. Ending (urlencoded) UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ) to filter the sent email campaigns. Prefer to pass your timezone in date-time format for accurate result ( only available if either 'status' not passed and if passed is set to 'sent' )
     * @param {Number} opts.limit Number of documents per page (default to 50)
     * @param {Number} opts.offset Index of the first document in the page (default to 0)
     * @param {module:model/String} opts.sort Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed (default to desc)
     * @param {Boolean} opts.excludeHtmlContent Use this flag to exclude htmlContent from the response body. If set to **true**, htmlContent field will be returned as empty string in the response body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetEmailCampaigns} and HTTP response
     */
    this.getEmailCampaignsWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'type': opts['type'],
        'status': opts['status'],
        'statistics': opts['statistics'],
        'startDate': opts['startDate'],
        'endDate': opts['endDate'],
        'limit': opts['limit'],
        'offset': opts['offset'],
        'sort': opts['sort'],
        'excludeHtmlContent': opts['excludeHtmlContent'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api-key', 'partner-key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = GetEmailCampaigns;

      return this.apiClient.callApi(
        '/emailCampaigns', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Return all your created email campaigns
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.type Filter on the type of the campaigns
     * @param {module:model/String} opts.status Filter on the status of the campaign
     * @param {module:model/String} opts.statistics Filter on the type of statistics required. Example **globalStats** value will only fetch globalStats info of the campaign in returned response.
     * @param {String} opts.startDate Mandatory if endDate is used. Starting (urlencoded) UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ) to filter the sent email campaigns. Prefer to pass your timezone in date-time format for accurate result ( only available if either 'status' not passed and if passed is set to 'sent' )
     * @param {String} opts.endDate Mandatory if startDate is used. Ending (urlencoded) UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ) to filter the sent email campaigns. Prefer to pass your timezone in date-time format for accurate result ( only available if either 'status' not passed and if passed is set to 'sent' )
     * @param {Number} opts.limit Number of documents per page (default to 50)
     * @param {Number} opts.offset Index of the first document in the page (default to 0)
     * @param {module:model/String} opts.sort Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed (default to desc)
     * @param {Boolean} opts.excludeHtmlContent Use this flag to exclude htmlContent from the response body. If set to **true**, htmlContent field will be returned as empty string in the response body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetEmailCampaigns}
     */
    this.getEmailCampaigns = function(opts) {
      return this.getEmailCampaignsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a shared template url
     * Get a unique URL to share & import an email template from one Brevo account to another.
     * @param {Number} campaignId Id of the campaign or template
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetSharedTemplateUrl} and HTTP response
     */
    this.getSharedTemplateUrlWithHttpInfo = function(campaignId) {
      var postBody = null;

      // verify the required parameter 'campaignId' is set
      if (campaignId === undefined || campaignId === null) {
        throw new Error("Missing the required parameter 'campaignId' when calling getSharedTemplateUrl");
      }


      var pathParams = {
        'campaignId': campaignId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api-key', 'partner-key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = GetSharedTemplateUrl;

      return this.apiClient.callApi(
        '/emailCampaigns/{campaignId}/sharedUrl', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a shared template url
     * Get a unique URL to share & import an email template from one Brevo account to another.
     * @param {Number} campaignId Id of the campaign or template
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetSharedTemplateUrl}
     */
    this.getSharedTemplateUrl = function(campaignId) {
      return this.getSharedTemplateUrlWithHttpInfo(campaignId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Send an email campaign immediately, based on campaignId
     * @param {Number} campaignId Id of the campaign
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.sendEmailCampaignNowWithHttpInfo = function(campaignId) {
      var postBody = null;

      // verify the required parameter 'campaignId' is set
      if (campaignId === undefined || campaignId === null) {
        throw new Error("Missing the required parameter 'campaignId' when calling sendEmailCampaignNow");
      }


      var pathParams = {
        'campaignId': campaignId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api-key', 'partner-key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/emailCampaigns/{campaignId}/sendNow', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Send an email campaign immediately, based on campaignId
     * @param {Number} campaignId Id of the campaign
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.sendEmailCampaignNow = function(campaignId) {
      return this.sendEmailCampaignNowWithHttpInfo(campaignId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Send the report of a campaign
     * A PDF will be sent to the specified email addresses
     * @param {Number} campaignId Id of the campaign
     * @param {module:model/SendReport} sendReport Values for send a report
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.sendReportWithHttpInfo = function(campaignId, sendReport) {
      var postBody = sendReport;

      // verify the required parameter 'campaignId' is set
      if (campaignId === undefined || campaignId === null) {
        throw new Error("Missing the required parameter 'campaignId' when calling sendReport");
      }

      // verify the required parameter 'sendReport' is set
      if (sendReport === undefined || sendReport === null) {
        throw new Error("Missing the required parameter 'sendReport' when calling sendReport");
      }


      var pathParams = {
        'campaignId': campaignId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api-key', 'partner-key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/emailCampaigns/{campaignId}/sendReport', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Send the report of a campaign
     * A PDF will be sent to the specified email addresses
     * @param {Number} campaignId Id of the campaign
     * @param {module:model/SendReport} sendReport Values for send a report
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.sendReport = function(campaignId, sendReport) {
      return this.sendReportWithHttpInfo(campaignId, sendReport)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Send an email campaign to your test list
     * @param {Number} campaignId Id of the campaign
     * @param {module:model/SendTestEmail} emailTo 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.sendTestEmailWithHttpInfo = function(campaignId, emailTo) {
      var postBody = emailTo;

      // verify the required parameter 'campaignId' is set
      if (campaignId === undefined || campaignId === null) {
        throw new Error("Missing the required parameter 'campaignId' when calling sendTestEmail");
      }

      // verify the required parameter 'emailTo' is set
      if (emailTo === undefined || emailTo === null) {
        throw new Error("Missing the required parameter 'emailTo' when calling sendTestEmail");
      }


      var pathParams = {
        'campaignId': campaignId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api-key', 'partner-key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/emailCampaigns/{campaignId}/sendTest', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Send an email campaign to your test list
     * @param {Number} campaignId Id of the campaign
     * @param {module:model/SendTestEmail} emailTo 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.sendTestEmail = function(campaignId, emailTo) {
      return this.sendTestEmailWithHttpInfo(campaignId, emailTo)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update an email campaign status
     * @param {Number} campaignId Id of the campaign
     * @param {module:model/UpdateCampaignStatus} status Status of the campaign
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.updateCampaignStatusWithHttpInfo = function(campaignId, status) {
      var postBody = status;

      // verify the required parameter 'campaignId' is set
      if (campaignId === undefined || campaignId === null) {
        throw new Error("Missing the required parameter 'campaignId' when calling updateCampaignStatus");
      }

      // verify the required parameter 'status' is set
      if (status === undefined || status === null) {
        throw new Error("Missing the required parameter 'status' when calling updateCampaignStatus");
      }


      var pathParams = {
        'campaignId': campaignId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api-key', 'partner-key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/emailCampaigns/{campaignId}/status', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update an email campaign status
     * @param {Number} campaignId Id of the campaign
     * @param {module:model/UpdateCampaignStatus} status Status of the campaign
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.updateCampaignStatus = function(campaignId, status) {
      return this.updateCampaignStatusWithHttpInfo(campaignId, status)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update an email campaign
     * @param {Number} campaignId Id of the campaign
     * @param {module:model/UpdateEmailCampaign} emailCampaign Values to update a campaign
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.updateEmailCampaignWithHttpInfo = function(campaignId, emailCampaign) {
      var postBody = emailCampaign;

      // verify the required parameter 'campaignId' is set
      if (campaignId === undefined || campaignId === null) {
        throw new Error("Missing the required parameter 'campaignId' when calling updateEmailCampaign");
      }

      // verify the required parameter 'emailCampaign' is set
      if (emailCampaign === undefined || emailCampaign === null) {
        throw new Error("Missing the required parameter 'emailCampaign' when calling updateEmailCampaign");
      }


      var pathParams = {
        'campaignId': campaignId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api-key', 'partner-key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/emailCampaigns/{campaignId}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update an email campaign
     * @param {Number} campaignId Id of the campaign
     * @param {module:model/UpdateEmailCampaign} emailCampaign Values to update a campaign
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.updateEmailCampaign = function(campaignId, emailCampaign) {
      return this.updateEmailCampaignWithHttpInfo(campaignId, emailCampaign)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Upload an image to your account's image gallery
     * @param {module:model/UploadImageToGallery} uploadImage Parameters to upload an image
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UploadImageModel} and HTTP response
     */
    this.uploadImageToGalleryWithHttpInfo = function(uploadImage) {
      var postBody = uploadImage;

      // verify the required parameter 'uploadImage' is set
      if (uploadImage === undefined || uploadImage === null) {
        throw new Error("Missing the required parameter 'uploadImage' when calling uploadImageToGallery");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api-key', 'partner-key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = UploadImageModel;

      return this.apiClient.callApi(
        '/emailCampaigns/images', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Upload an image to your account's image gallery
     * @param {module:model/UploadImageToGallery} uploadImage Parameters to upload an image
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UploadImageModel}
     */
    this.uploadImageToGallery = function(uploadImage) {
      return this.uploadImageToGalleryWithHttpInfo(uploadImage)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));