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
    root.BrevoNode.CreateSubAccount = factory(root.BrevoNode.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CreateSubAccount model module.
   * @module model/CreateSubAccount
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CreateSubAccount</code>.
   * @alias module:model/CreateSubAccount
   * @class
   * @param companyName {String} Set the name of the sub-account company
   * @param email {String} Email address for the organization
   */
  var exports = function(companyName, email) {
    this.companyName = companyName;
    this.email = email;
  };

  /**
   * Constructs a <code>CreateSubAccount</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateSubAccount} obj Optional instance to populate.
   * @return {module:model/CreateSubAccount} The populated <code>CreateSubAccount</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('companyName'))
        obj.companyName = ApiClient.convertToType(data['companyName'], 'String');
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('language'))
        obj.language = ApiClient.convertToType(data['language'], 'String');
      if (data.hasOwnProperty('timezone'))
        obj.timezone = ApiClient.convertToType(data['timezone'], 'String');
    }
    return obj;
  }

  /**
   * Set the name of the sub-account company
   * @member {String} companyName
   */
  exports.prototype.companyName = undefined;

  /**
   * Email address for the organization
   * @member {String} email
   */
  exports.prototype.email = undefined;

  /**
   * Set the language of the sub-account
   * @member {module:model/CreateSubAccount.LanguageEnum} language
   */
  exports.prototype.language = undefined;

  /**
   * Set the timezone of the sub-account
   * @member {String} timezone
   */
  exports.prototype.timezone = undefined;



  /**
   * Allowed values for the <code>language</code> property.
   * @enum {String}
   * @readonly
   */
  exports.LanguageEnum = {
    /**
     * value: "en"
     * @const
     */
    en: "en",

    /**
     * value: "fr"
     * @const
     */
    fr: "fr",

    /**
     * value: "it"
     * @const
     */
    it: "it",

    /**
     * value: "es"
     * @const
     */
    es: "es",

    /**
     * value: "pt"
     * @const
     */
    pt: "pt",

    /**
     * value: "de"
     * @const
     */
    de: "de"
  };

  return exports;

}));
