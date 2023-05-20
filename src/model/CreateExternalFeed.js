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
    root.BrevoNode.CreateExternalFeed = factory(root.BrevoNode.ApiClient, root.BrevoNode.GetExternalFeedByUUIDHeaders);
  }
}(this, function(ApiClient, GetExternalFeedByUUIDHeaders) {
  'use strict';

  /**
   * The CreateExternalFeed model module.
   * @module model/CreateExternalFeed
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CreateExternalFeed</code>.
   * @alias module:model/CreateExternalFeed
   * @class
   * @param name {String} Name of the feed
   * @param url {String} URL of the feed
   */
  var exports = function(name, url) {
    this.name = name;
    this.url = url;
  };

  /**
   * Constructs a <code>CreateExternalFeed</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateExternalFeed} obj Optional instance to populate.
   * @return {module:model/CreateExternalFeed} The populated <code>CreateExternalFeed</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
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
    }
    return obj;
  }

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
   * Auth type of the feed:   * `basic`   * `token`   * `noAuth` 
   * @member {module:model/CreateExternalFeed.AuthTypeEnum} authType
   * @default 'noAuth'
   */
  exports.prototype.authType = 'noAuth';

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
   * @default false
   */
  exports.prototype.cache = false;



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
