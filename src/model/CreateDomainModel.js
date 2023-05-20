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
    define(['ApiClient', 'model/CreateDomainModelDnsRecords'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CreateDomainModelDnsRecords'));
  } else {
    // Browser globals (root is window)
    if (!root.BrevoNode) {
      root.BrevoNode = {};
    }
    root.BrevoNode.CreateDomainModel = factory(root.BrevoNode.ApiClient, root.BrevoNode.CreateDomainModelDnsRecords);
  }
}(this, function(ApiClient, CreateDomainModelDnsRecords) {
  'use strict';

  /**
   * The CreateDomainModel model module.
   * @module model/CreateDomainModel
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CreateDomainModel</code>.
   * @alias module:model/CreateDomainModel
   * @class
   * @param id {Number} ID of the Domain created
   */
  var exports = function(id) {
    this.id = id;
  };

  /**
   * Constructs a <code>CreateDomainModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateDomainModel} obj Optional instance to populate.
   * @return {module:model/CreateDomainModel} The populated <code>CreateDomainModel</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('domain_name'))
        obj.domainName = ApiClient.convertToType(data['domain_name'], 'String');
      if (data.hasOwnProperty('message'))
        obj.message = ApiClient.convertToType(data['message'], 'String');
      if (data.hasOwnProperty('dns_records'))
        obj.dnsRecords = CreateDomainModelDnsRecords.constructFromObject(data['dns_records']);
    }
    return obj;
  }

  /**
   * ID of the Domain created
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * Domain
   * @member {String} domainName
   */
  exports.prototype.domainName = undefined;

  /**
   * Success message
   * @member {String} message
   */
  exports.prototype.message = undefined;

  /**
   * @member {module:model/CreateDomainModelDnsRecords} dnsRecords
   */
  exports.prototype.dnsRecords = undefined;


  return exports;

}));
