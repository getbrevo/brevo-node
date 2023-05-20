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
    define(['ApiClient', 'model/SubAccountDetailsResponsePlanInfoCredits', 'model/SubAccountDetailsResponsePlanInfoFeatures'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SubAccountDetailsResponsePlanInfoCredits'), require('./SubAccountDetailsResponsePlanInfoFeatures'));
  } else {
    // Browser globals (root is window)
    if (!root.BrevoNode) {
      root.BrevoNode = {};
    }
    root.BrevoNode.SubAccountDetailsResponsePlanInfo = factory(root.BrevoNode.ApiClient, root.BrevoNode.SubAccountDetailsResponsePlanInfoCredits, root.BrevoNode.SubAccountDetailsResponsePlanInfoFeatures);
  }
}(this, function(ApiClient, SubAccountDetailsResponsePlanInfoCredits, SubAccountDetailsResponsePlanInfoFeatures) {
  'use strict';

  /**
   * The SubAccountDetailsResponsePlanInfo model module.
   * @module model/SubAccountDetailsResponsePlanInfo
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>SubAccountDetailsResponsePlanInfo</code>.
   * Sub-account plan details
   * @alias module:model/SubAccountDetailsResponsePlanInfo
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>SubAccountDetailsResponsePlanInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SubAccountDetailsResponsePlanInfo} obj Optional instance to populate.
   * @return {module:model/SubAccountDetailsResponsePlanInfo} The populated <code>SubAccountDetailsResponsePlanInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('credits'))
        obj.credits = SubAccountDetailsResponsePlanInfoCredits.constructFromObject(data['credits']);
      if (data.hasOwnProperty('features'))
        obj.features = SubAccountDetailsResponsePlanInfoFeatures.constructFromObject(data['features']);
      if (data.hasOwnProperty('planType'))
        obj.planType = ApiClient.convertToType(data['planType'], 'String');
    }
    return obj;
  }

  /**
   * @member {module:model/SubAccountDetailsResponsePlanInfoCredits} credits
   */
  exports.prototype.credits = undefined;

  /**
   * @member {module:model/SubAccountDetailsResponsePlanInfoFeatures} features
   */
  exports.prototype.features = undefined;

  /**
   * type of the plan
   * @member {String} planType
   */
  exports.prototype.planType = undefined;


  return exports;

}));
