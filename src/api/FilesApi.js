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
    define(['ApiClient', 'model/ErrorModel', 'model/FileData', 'model/FileDownloadableLink', 'model/FileList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ErrorModel'), require('../model/FileData'), require('../model/FileDownloadableLink'), require('../model/FileList'));
  } else {
    // Browser globals (root is window)
    if (!root.Brevo) {
      root.Brevo = {};
    }
    root.Brevo.FilesApi = factory(root.Brevo.ApiClient, root.Brevo.ErrorModel, root.Brevo.FileData, root.Brevo.FileDownloadableLink, root.Brevo.FileList);
  }
}(this, function(ApiClient, ErrorModel, FileData, FileDownloadableLink, FileList) {
  'use strict';

  /**
   * Files service.
   * @module api/FilesApi
   * @version 1.0.0
   */

  /**
   * Constructs a new FilesApi. 
   * @alias module:api/FilesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get all files
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.entity Filter by file entity type
     * @param {String} opts.entityIds Filter by file entity IDs
     * @param {Number} opts.dateFrom dateFrom to date range filter type (timestamp in milliseconds)
     * @param {Number} opts.dateTo dateTo to date range filter type (timestamp in milliseconds)
     * @param {Number} opts.offset Index of the first document of the page
     * @param {Number} opts.limit Number of documents per page (default to 50)
     * @param {module:model/String} opts.sort Sort the results in the ascending/descending order. Default order is **descending** by creation if `sort` is not passed
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FileList} and HTTP response
     */
    this.crmFilesGetWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'entity': opts['entity'],
        'entityIds': opts['entityIds'],
        'dateFrom': opts['dateFrom'],
        'dateTo': opts['dateTo'],
        'offset': opts['offset'],
        'limit': opts['limit'],
        'sort': opts['sort'],
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
      var returnType = FileList;

      return this.apiClient.callApi(
        '/crm/files', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get all files
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.entity Filter by file entity type
     * @param {String} opts.entityIds Filter by file entity IDs
     * @param {Number} opts.dateFrom dateFrom to date range filter type (timestamp in milliseconds)
     * @param {Number} opts.dateTo dateTo to date range filter type (timestamp in milliseconds)
     * @param {Number} opts.offset Index of the first document of the page
     * @param {Number} opts.limit Number of documents per page (default to 50)
     * @param {module:model/String} opts.sort Sort the results in the ascending/descending order. Default order is **descending** by creation if `sort` is not passed
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FileList}
     */
    this.crmFilesGet = function(opts) {
      return this.crmFilesGetWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get file details
     * @param {String} id File id to get file data.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FileData} and HTTP response
     */
    this.crmFilesIdDataGetWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling crmFilesIdDataGet");
      }


      var pathParams = {
        'id': id
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
      var returnType = FileData;

      return this.apiClient.callApi(
        '/crm/files/{id}/data', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get file details
     * @param {String} id File id to get file data.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FileData}
     */
    this.crmFilesIdDataGet = function(id) {
      return this.crmFilesIdDataGetWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a file
     * @param {String} id File id to delete.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.crmFilesIdDeleteWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling crmFilesIdDelete");
      }


      var pathParams = {
        'id': id
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
        '/crm/files/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a file
     * @param {String} id File id to delete.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.crmFilesIdDelete = function(id) {
      return this.crmFilesIdDeleteWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Download a file
     * @param {String} id File id to download.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FileDownloadableLink} and HTTP response
     */
    this.crmFilesIdGetWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling crmFilesIdGet");
      }


      var pathParams = {
        'id': id
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
      var returnType = FileDownloadableLink;

      return this.apiClient.callApi(
        '/crm/files/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Download a file
     * @param {String} id File id to download.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FileDownloadableLink}
     */
    this.crmFilesIdGet = function(id) {
      return this.crmFilesIdGetWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Upload a file
     * @param {File} file File data to create a file.
     * @param {Object} opts Optional parameters
     * @param {String} opts.dealId Deal id linked to a file
     * @param {Number} opts.contactId Contact id linked to a file
     * @param {String} opts.companyId Company id linked to a file
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FileData} and HTTP response
     */
    this.crmFilesPostWithHttpInfo = function(file, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'file' is set
      if (file === undefined || file === null) {
        throw new Error("Missing the required parameter 'file' when calling crmFilesPost");
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
        'file': file,
        'dealId': opts['dealId'],
        'contactId': opts['contactId'],
        'companyId': opts['companyId']
      };

      var authNames = ['api-key', 'partner-key'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = FileData;

      return this.apiClient.callApi(
        '/crm/files', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Upload a file
     * @param {File} file File data to create a file.
     * @param {Object} opts Optional parameters
     * @param {String} opts.dealId Deal id linked to a file
     * @param {Number} opts.contactId Contact id linked to a file
     * @param {String} opts.companyId Company id linked to a file
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FileData}
     */
    this.crmFilesPost = function(file, opts) {
      return this.crmFilesPostWithHttpInfo(file, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));