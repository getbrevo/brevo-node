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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Brevo) {
      root.Brevo = {};
    }
    root.Brevo.Task = factory(root.Brevo.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Task model module.
   * @module model/Task
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Task</code>.
   * Task Details
   * @alias module:model/Task
   * @class
   * @param taskTypeId {String} Id for type of task e.g Call / Email / Meeting etc.
   * @param name {String} Name of task
   */
  var exports = function(taskTypeId, name) {
    this.taskTypeId = taskTypeId;
    this.name = name;
  };

  /**
   * Constructs a <code>Task</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Task} obj Optional instance to populate.
   * @return {module:model/Task} The populated <code>Task</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('taskTypeId'))
        obj.taskTypeId = ApiClient.convertToType(data['taskTypeId'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('contactsIds'))
        obj.contactsIds = ApiClient.convertToType(data['contactsIds'], ['Number']);
      if (data.hasOwnProperty('dealsIds'))
        obj.dealsIds = ApiClient.convertToType(data['dealsIds'], ['String']);
      if (data.hasOwnProperty('companiesIds'))
        obj.companiesIds = ApiClient.convertToType(data['companiesIds'], ['String']);
    }
    return obj;
  }

  /**
   * Unique task id
   * @member {String} id
   */
  exports.prototype.id = undefined;

  /**
   * Id for type of task e.g Call / Email / Meeting etc.
   * @member {String} taskTypeId
   */
  exports.prototype.taskTypeId = undefined;

  /**
   * Name of task
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * Contact ids for contacts linked to this task
   * @member {Array.<Number>} contactsIds
   */
  exports.prototype.contactsIds = undefined;

  /**
   * Deal ids for deals a task is linked to
   * @member {Array.<String>} dealsIds
   */
  exports.prototype.dealsIds = undefined;

  /**
   * Companies ids for companies a task is linked to
   * @member {Array.<String>} companiesIds
   */
  exports.prototype.companiesIds = undefined;


  return exports;

}));