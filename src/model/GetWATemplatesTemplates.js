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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.BrevoNode) {
      root.BrevoNode = {};
    }
    root.BrevoNode.GetWATemplatesTemplates = factory(root.BrevoNode.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetWATemplatesTemplates model module.
   * @module model/GetWATemplatesTemplates
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>GetWATemplatesTemplates</code>.
   * @alias module:model/GetWATemplatesTemplates
   * @class
   * @param id {String} id of the template
   * @param name {String} Name of the WhatsApp template
   * @param status {String} Status of the WhatsApp template
   * @param language {String} Language in which template exists
   * @param category {String} category of the template
   * @param createdAt {String} Creation UTC date-time of the whatsApp template (YYYY-MM-DDTHH:mm:ss.SSSZ)
   * @param modifiedAt {String} UTC date-time of last modification of the whatsApp template (YYYY-MM-DDTHH:mm:ss.SSSZ)
   */
  var exports = function(id, name, status, language, category, createdAt, modifiedAt) {
    this.id = id;
    this.name = name;
    this.status = status;
    this.language = language;
    this.category = category;
    this.createdAt = createdAt;
    this.modifiedAt = modifiedAt;
  };

  /**
   * Constructs a <code>GetWATemplatesTemplates</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetWATemplatesTemplates} obj Optional instance to populate.
   * @return {module:model/GetWATemplatesTemplates} The populated <code>GetWATemplatesTemplates</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('language'))
        obj.language = ApiClient.convertToType(data['language'], 'String');
      if (data.hasOwnProperty('category'))
        obj.category = ApiClient.convertToType(data['category'], 'String');
      if (data.hasOwnProperty('errorReason'))
        obj.errorReason = ApiClient.convertToType(data['errorReason'], 'String');
      if (data.hasOwnProperty('createdAt'))
        obj.createdAt = ApiClient.convertToType(data['createdAt'], 'String');
      if (data.hasOwnProperty('modifiedAt'))
        obj.modifiedAt = ApiClient.convertToType(data['modifiedAt'], 'String');
    }
    return obj;
  }

  /**
   * id of the template
   * @member {String} id
   */
  exports.prototype.id = undefined;

  /**
   * Name of the WhatsApp template
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * Status of the WhatsApp template
   * @member {String} status
   */
  exports.prototype.status = undefined;

  /**
   * Language in which template exists
   * @member {String} language
   */
  exports.prototype.language = undefined;

  /**
   * category of the template
   * @member {String} category
   */
  exports.prototype.category = undefined;

  /**
   * Error reason in the template creation
   * @member {String} errorReason
   */
  exports.prototype.errorReason = undefined;

  /**
   * Creation UTC date-time of the whatsApp template (YYYY-MM-DDTHH:mm:ss.SSSZ)
   * @member {String} createdAt
   */
  exports.prototype.createdAt = undefined;

  /**
   * UTC date-time of last modification of the whatsApp template (YYYY-MM-DDTHH:mm:ss.SSSZ)
   * @member {String} modifiedAt
   */
  exports.prototype.modifiedAt = undefined;


  return exports;

}));
