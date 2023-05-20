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
    define(['ApiClient', 'model/GetExternalFeedByUUIDHeaders'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetExternalFeedByUUIDHeaders'));
  } else {
    // Browser globals (root is window)
    if (!root.BrevoNode) {
      root.BrevoNode = {};
    }
    root.BrevoNode.GetExternalFeedByUUID = factory(root.BrevoNode.ApiClient, root.BrevoNode.GetExternalFeedByUUIDHeaders);
  }
}(this, function(ApiClient, GetExternalFeedByUUIDHeaders) {
  'use strict';

  /**
   * The GetExternalFeedByUUID model module.
   * @module model/GetExternalFeedByUUID
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>GetExternalFeedByUUID</code>.
   * @alias module:model/GetExternalFeedByUUID
   * @class
   * @param id {String} ID of the feed
   * @param name {String} Name of the feed
   * @param url {String} URL of the feed
   * @param authType {module:model/GetExternalFeedByUUID.AuthTypeEnum} Auth type of the feed: * `basic` * `token` * `noAuth` 
   * @param headers {Array.<module:model/GetExternalFeedByUUIDHeaders>} Custom headers for the feed
   * @param maxRetries {Number} Maximum number of retries on the feed url
   * @param cache {Boolean} Toggle caching of feed url response
   * @param createdAt {Date} Datetime on which the feed was created
   * @param modifiedAt {Date} Datetime on which the feed was modified
   */
  var exports = function(id, name, url, authType, headers, maxRetries, cache, createdAt, modifiedAt) {
    this.id = id;
    this.name = name;
    this.url = url;
    this.authType = authType;
    this.headers = headers;
    this.maxRetries = maxRetries;
    this.cache = cache;
    this.createdAt = createdAt;
    this.modifiedAt = modifiedAt;
  };

  /**
   * Constructs a <code>GetExternalFeedByUUID</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetExternalFeedByUUID} obj Optional instance to populate.
   * @return {module:model/GetExternalFeedByUUID} The populated <code>GetExternalFeedByUUID</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('url'))
        obj.url = ApiClient.convertToType(data['url'], 'String');
      if (data.hasOwnProperty('authType'))
        obj.authType = ApiClient.convertToType(data['authType'], 'String');
      if (data.hasOwnProperty('username'))
        obj.username = ApiClient.convertToType(data['username'], 'String');
      if (data.hasOwnProperty('password'))
        obj.password = ApiClient.convertToType(data['password'], 'String');
      if (data.hasOwnProperty('token'))
        obj.token = ApiClient.convertToType(data['token'], 'String');
      if (data.hasOwnProperty('headers'))
        obj.headers = ApiClient.convertToType(data['headers'], [GetExternalFeedByUUIDHeaders]);
      if (data.hasOwnProperty('maxRetries'))
        obj.maxRetries = ApiClient.convertToType(data['maxRetries'], 'Number');
      if (data.hasOwnProperty('cache'))
        obj.cache = ApiClient.convertToType(data['cache'], 'Boolean');
      if (data.hasOwnProperty('createdAt'))
        obj.createdAt = ApiClient.convertToType(data['createdAt'], 'Date');
      if (data.hasOwnProperty('modifiedAt'))
        obj.modifiedAt = ApiClient.convertToType(data['modifiedAt'], 'Date');
    }
    return obj;
  }

  /**
   * ID of the feed
   * @member {String} id
   */
  exports.prototype.id = undefined;

  /**
   * Name of the feed
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * URL of the feed
   * @member {String} url
   */
  exports.prototype.url = undefined;

  /**
   * Auth type of the feed: * `basic` * `token` * `noAuth` 
   * @member {module:model/GetExternalFeedByUUID.AuthTypeEnum} authType
   */
  exports.prototype.authType = undefined;

  /**
   * Username for authType `basic`
   * @member {String} username
   */
  exports.prototype.username = undefined;

  /**
   * Password for authType `basic`
   * @member {String} password
   */
  exports.prototype.password = undefined;

  /**
   * Token for authType `token`
   * @member {String} token
   */
  exports.prototype.token = undefined;

  /**
   * Custom headers for the feed
   * @member {Array.<module:model/GetExternalFeedByUUIDHeaders>} headers
   */
  exports.prototype.headers = undefined;

  /**
   * Maximum number of retries on the feed url
   * @member {Number} maxRetries
   */
  exports.prototype.maxRetries = undefined;

  /**
   * Toggle caching of feed url response
   * @member {Boolean} cache
   */
  exports.prototype.cache = undefined;

  /**
   * Datetime on which the feed was created
   * @member {Date} createdAt
   */
  exports.prototype.createdAt = undefined;

  /**
   * Datetime on which the feed was modified
   * @member {Date} modifiedAt
   */
  exports.prototype.modifiedAt = undefined;



  /**
   * Allowed values for the <code>authType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AuthTypeEnum = {
    /**
     * value: "basic"
     * @const
     */
    basic: "basic",

    /**
     * value: "token"
     * @const
     */
    token: "token",

    /**
     * value: "noAuth"
     * @const
     */
    noAuth: "noAuth"
  };

  return exports;

}));
