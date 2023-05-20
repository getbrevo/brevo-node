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
 * Swagger Codegen version: 2.4.31
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CreateExternalFeed', 'model/ErrorModel', 'model/GetAllExternalFeeds', 'model/GetExternalFeedByUUID', 'model/InlineResponse2013', 'model/UpdateExternalFeed'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CreateExternalFeed'), require('../model/ErrorModel'), require('../model/GetAllExternalFeeds'), require('../model/GetExternalFeedByUUID'), require('../model/InlineResponse2013'), require('../model/UpdateExternalFeed'));
  } else {
    // Browser globals (root is window)
    if (!root.BrevoNode) {
      root.BrevoNode = {};
    }
    root.BrevoNode.ExternalFeedsApi = factory(root.BrevoNode.ApiClient, root.BrevoNode.CreateExternalFeed, root.BrevoNode.ErrorModel, root.BrevoNode.GetAllExternalFeeds, root.BrevoNode.GetExternalFeedByUUID, root.BrevoNode.InlineResponse2013, root.BrevoNode.UpdateExternalFeed);
  }
}(this, function(ApiClient, CreateExternalFeed, ErrorModel, GetAllExternalFeeds, GetExternalFeedByUUID, InlineResponse2013, UpdateExternalFeed) {
  'use strict';

  /**
   * ExternalFeeds service.
   * @module api/ExternalFeedsApi
   * @version 1.0.0
   */

  /**
   * Constructs a new ExternalFeedsApi. 
   * @alias module:api/ExternalFeedsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create an external feed
     * This endpoint will create an external feed.
     * @param {module:model/CreateExternalFeed} createExternalFeed Values to create a feed
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2013} and HTTP response
     */
    this.createExternalFeedWithHttpInfo = function(createExternalFeed) {
      var postBody = createExternalFeed;

      // verify the required parameter 'createExternalFeed' is set
      if (createExternalFeed === undefined || createExternalFeed === null) {
        throw new Error("Missing the required parameter 'createExternalFeed' when calling createExternalFeed");
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
      var returnType = InlineResponse2013;

      return this.apiClient.callApi(
        '/feeds', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create an external feed
     * This endpoint will create an external feed.
     * @param {module:model/CreateExternalFeed} createExternalFeed Values to create a feed
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2013}
     */
    this.createExternalFeed = function(createExternalFeed) {
      return this.createExternalFeedWithHttpInfo(createExternalFeed)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete an external feed
     * This endpoint will delete an external feed.
     * @param {String} uuid UUID of the feed to delete
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteExternalFeedWithHttpInfo = function(uuid) {
      var postBody = null;

      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling deleteExternalFeed");
      }


      var pathParams = {
        'uuid': uuid
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
        '/feeds/{uuid}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete an external feed
     * This endpoint will delete an external feed.
     * @param {String} uuid UUID of the feed to delete
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteExternalFeed = function(uuid) {
      return this.deleteExternalFeedWithHttpInfo(uuid)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Fetch all external feeds
     * This endpoint can fetch all created external feeds.
     * @param {Object} opts Optional parameters
     * @param {String} opts.search Can be used to filter records by search keyword on feed name
     * @param {Date} opts.startDate Mandatory if `endDate` is used. Starting date (YYYY-MM-DD) from which you want to fetch the list. Can be maximum 30 days older than current date.
     * @param {Date} opts.endDate Mandatory if `startDate` is used. Ending date (YYYY-MM-DD) till which you want to fetch the list. Maximum time period that can be selected is one month.
     * @param {module:model/String} opts.sort Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed. (default to desc)
     * @param {module:model/String} opts.authType Filter the records by `authType` of the feed.
     * @param {Number} opts.limit Number of documents returned per page. (default to 50)
     * @param {Number} opts.offset Index of the first document on the page. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetAllExternalFeeds} and HTTP response
     */
    this.getAllExternalFeedsWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'search': opts['search'],
        'startDate': opts['startDate'],
        'endDate': opts['endDate'],
        'sort': opts['sort'],
        'authType': opts['authType'],
        'limit': opts['limit'],
        'offset': opts['offset'],
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
      var returnType = GetAllExternalFeeds;

      return this.apiClient.callApi(
        '/feeds', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Fetch all external feeds
     * This endpoint can fetch all created external feeds.
     * @param {Object} opts Optional parameters
     * @param {String} opts.search Can be used to filter records by search keyword on feed name
     * @param {Date} opts.startDate Mandatory if `endDate` is used. Starting date (YYYY-MM-DD) from which you want to fetch the list. Can be maximum 30 days older than current date.
     * @param {Date} opts.endDate Mandatory if `startDate` is used. Ending date (YYYY-MM-DD) till which you want to fetch the list. Maximum time period that can be selected is one month.
     * @param {module:model/String} opts.sort Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed. (default to desc)
     * @param {module:model/String} opts.authType Filter the records by `authType` of the feed.
     * @param {Number} opts.limit Number of documents returned per page. (default to 50)
     * @param {Number} opts.offset Index of the first document on the page. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetAllExternalFeeds}
     */
    this.getAllExternalFeeds = function(opts) {
      return this.getAllExternalFeedsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get an external feed by UUID
     * This endpoint will update an external feed.
     * @param {String} uuid UUID of the feed to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetExternalFeedByUUID} and HTTP response
     */
    this.getExternalFeedByUUIDWithHttpInfo = function(uuid) {
      var postBody = null;

      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling getExternalFeedByUUID");
      }


      var pathParams = {
        'uuid': uuid
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
      var returnType = GetExternalFeedByUUID;

      return this.apiClient.callApi(
        '/feeds/{uuid}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get an external feed by UUID
     * This endpoint will update an external feed.
     * @param {String} uuid UUID of the feed to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetExternalFeedByUUID}
     */
    this.getExternalFeedByUUID = function(uuid) {
      return this.getExternalFeedByUUIDWithHttpInfo(uuid)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update an external feed
     * This endpoint will update an external feed.
     * @param {String} uuid UUID of the feed to update
     * @param {module:model/UpdateExternalFeed} updateExternalFeed Values to update a feed
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.updateExternalFeedWithHttpInfo = function(uuid, updateExternalFeed) {
      var postBody = updateExternalFeed;

      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling updateExternalFeed");
      }

      // verify the required parameter 'updateExternalFeed' is set
      if (updateExternalFeed === undefined || updateExternalFeed === null) {
        throw new Error("Missing the required parameter 'updateExternalFeed' when calling updateExternalFeed");
      }


      var pathParams = {
        'uuid': uuid
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
        '/feeds/{uuid}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update an external feed
     * This endpoint will update an external feed.
     * @param {String} uuid UUID of the feed to update
     * @param {module:model/UpdateExternalFeed} updateExternalFeed Values to update a feed
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.updateExternalFeed = function(uuid, updateExternalFeed) {
      return this.updateExternalFeedWithHttpInfo(uuid, updateExternalFeed)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
