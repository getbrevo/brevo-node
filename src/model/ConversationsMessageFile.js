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
    define(['ApiClient', 'model/ConversationsMessageFileImageInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ConversationsMessageFileImageInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.BrevoNode) {
      root.BrevoNode = {};
    }
    root.BrevoNode.ConversationsMessageFile = factory(root.BrevoNode.ApiClient, root.BrevoNode.ConversationsMessageFileImageInfo);
  }
}(this, function(ApiClient, ConversationsMessageFileImageInfo) {
  'use strict';

  /**
   * The ConversationsMessageFile model module.
   * @module model/ConversationsMessageFile
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ConversationsMessageFile</code>.
   * @alias module:model/ConversationsMessageFile
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ConversationsMessageFile</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConversationsMessageFile} obj Optional instance to populate.
   * @return {module:model/ConversationsMessageFile} The populated <code>ConversationsMessageFile</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('filename'))
        obj.filename = ApiClient.convertToType(data['filename'], 'String');
      if (data.hasOwnProperty('size'))
        obj.size = ApiClient.convertToType(data['size'], 'Number');
      if (data.hasOwnProperty('isImage'))
        obj.isImage = ApiClient.convertToType(data['isImage'], 'Boolean');
      if (data.hasOwnProperty('url'))
        obj.url = ApiClient.convertToType(data['url'], 'String');
      if (data.hasOwnProperty('imageInfo'))
        obj.imageInfo = ConversationsMessageFileImageInfo.constructFromObject(data['imageInfo']);
    }
    return obj;
  }

  /**
   * Name of the file
   * @member {String} filename
   */
  exports.prototype.filename = undefined;

  /**
   * Size in bytes
   * @member {Number} size
   */
  exports.prototype.size = undefined;

  /**
   * Whether the file is an image
   * @member {Boolean} isImage
   */
  exports.prototype.isImage = undefined;

  /**
   * URL of the file
   * @member {String} url
   */
  exports.prototype.url = undefined;

  /**
   * @member {module:model/ConversationsMessageFileImageInfo} imageInfo
   */
  exports.prototype.imageInfo = undefined;


  return exports;

}));
