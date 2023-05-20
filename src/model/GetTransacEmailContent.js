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
    define(['ApiClient', 'model/GetTransacEmailContentEvents'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetTransacEmailContentEvents'));
  } else {
    // Browser globals (root is window)
    if (!root.BrevoNode) {
      root.BrevoNode = {};
    }
    root.BrevoNode.GetTransacEmailContent = factory(root.BrevoNode.ApiClient, root.BrevoNode.GetTransacEmailContentEvents);
  }
}(this, function(ApiClient, GetTransacEmailContentEvents) {
  'use strict';

  /**
   * The GetTransacEmailContent model module.
   * @module model/GetTransacEmailContent
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>GetTransacEmailContent</code>.
   * @alias module:model/GetTransacEmailContent
   * @class
   * @param email {String} Email address to which transactional email has been sent
   * @param subject {String} Subject of the sent email
   * @param _date {String} Date on which transactional email was sent
   * @param events {Array.<module:model/GetTransacEmailContentEvents>} Series of events which occurred on the transactional email
   * @param body {String} Actual content of the transactional email that has been sent
   * @param attachmentCount {Number} Count of the attachments that were sent in the email
   */
  var exports = function(email, subject, _date, events, body, attachmentCount) {
    this.email = email;
    this.subject = subject;
    this._date = _date;
    this.events = events;
    this.body = body;
    this.attachmentCount = attachmentCount;
  };

  /**
   * Constructs a <code>GetTransacEmailContent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetTransacEmailContent} obj Optional instance to populate.
   * @return {module:model/GetTransacEmailContent} The populated <code>GetTransacEmailContent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('subject'))
        obj.subject = ApiClient.convertToType(data['subject'], 'String');
      if (data.hasOwnProperty('templateId'))
        obj.templateId = ApiClient.convertToType(data['templateId'], 'Number');
      if (data.hasOwnProperty('date'))
        obj._date = ApiClient.convertToType(data['date'], 'String');
      if (data.hasOwnProperty('events'))
        obj.events = ApiClient.convertToType(data['events'], [GetTransacEmailContentEvents]);
      if (data.hasOwnProperty('body'))
        obj.body = ApiClient.convertToType(data['body'], 'String');
      if (data.hasOwnProperty('attachmentCount'))
        obj.attachmentCount = ApiClient.convertToType(data['attachmentCount'], 'Number');
    }
    return obj;
  }

  /**
   * Email address to which transactional email has been sent
   * @member {String} email
   */
  exports.prototype.email = undefined;

  /**
   * Subject of the sent email
   * @member {String} subject
   */
  exports.prototype.subject = undefined;

  /**
   * Id of the template
   * @member {Number} templateId
   */
  exports.prototype.templateId = undefined;

  /**
   * Date on which transactional email was sent
   * @member {String} _date
   */
  exports.prototype._date = undefined;

  /**
   * Series of events which occurred on the transactional email
   * @member {Array.<module:model/GetTransacEmailContentEvents>} events
   */
  exports.prototype.events = undefined;

  /**
   * Actual content of the transactional email that has been sent
   * @member {String} body
   */
  exports.prototype.body = undefined;

  /**
   * Count of the attachments that were sent in the email
   * @member {Number} attachmentCount
   */
  exports.prototype.attachmentCount = undefined;


  return exports;

}));
