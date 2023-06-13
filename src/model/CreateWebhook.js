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
    root.Brevo.CreateWebhook = factory(root.Brevo.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CreateWebhook model module.
   * @module model/CreateWebhook
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CreateWebhook</code>.
   * @alias module:model/CreateWebhook
   * @class
   * @param url {String} URL of the webhook
   * @param events {Array.<module:model/CreateWebhook.EventsEnum>} - Events triggering the webhook. Possible values for **Transactional** type webhook: #### `sent` OR `request`, `delivered`, `hardBounce`, `softBounce`, `blocked`, `spam`, `invalid`, `deferred`, `click`, `opened`, `uniqueOpened` and `unsubscribed` - Possible values for **Marketing** type webhook: #### `spam`, `opened`, `click`, `hardBounce`, `softBounce`, `unsubscribed`, `listAddition` & `delivered` - Possible values for **Inbound** type webhook: #### `inboundEmailProcessed` 
   */
  var exports = function(url, events) {
    this.url = url;
    this.events = events;
  };

  /**
   * Constructs a <code>CreateWebhook</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateWebhook} obj Optional instance to populate.
   * @return {module:model/CreateWebhook} The populated <code>CreateWebhook</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('url'))
        obj.url = ApiClient.convertToType(data['url'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('events'))
        obj.events = ApiClient.convertToType(data['events'], ['String']);
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('domain'))
        obj.domain = ApiClient.convertToType(data['domain'], 'String');
    }
    return obj;
  }

  /**
   * URL of the webhook
   * @member {String} url
   */
  exports.prototype.url = undefined;

  /**
   * Description of the webhook
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * - Events triggering the webhook. Possible values for **Transactional** type webhook: #### `sent` OR `request`, `delivered`, `hardBounce`, `softBounce`, `blocked`, `spam`, `invalid`, `deferred`, `click`, `opened`, `uniqueOpened` and `unsubscribed` - Possible values for **Marketing** type webhook: #### `spam`, `opened`, `click`, `hardBounce`, `softBounce`, `unsubscribed`, `listAddition` & `delivered` - Possible values for **Inbound** type webhook: #### `inboundEmailProcessed` 
   * @member {Array.<module:model/CreateWebhook.EventsEnum>} events
   */
  exports.prototype.events = undefined;

  /**
   * Type of the webhook
   * @member {module:model/CreateWebhook.TypeEnum} type
   * @default 'transactional'
   */
  exports.prototype.type = 'transactional';

  /**
   * Inbound domain of webhook, required in case of event type `inbound`
   * @member {String} domain
   */
  exports.prototype.domain = undefined;



  /**
   * Allowed values for the <code>events</code> property.
   * @enum {String}
   * @readonly
   */
  exports.EventsEnum = {
    /**
     * value: "sent"
     * @const
     */
    sent: "sent",

    /**
     * value: "hardBounce"
     * @const
     */
    hardBounce: "hardBounce",

    /**
     * value: "softBounce"
     * @const
     */
    softBounce: "softBounce",

    /**
     * value: "blocked"
     * @const
     */
    blocked: "blocked",

    /**
     * value: "spam"
     * @const
     */
    spam: "spam",

    /**
     * value: "delivered"
     * @const
     */
    delivered: "delivered",

    /**
     * value: "request"
     * @const
     */
    request: "request",

    /**
     * value: "click"
     * @const
     */
    click: "click",

    /**
     * value: "invalid"
     * @const
     */
    invalid: "invalid",

    /**
     * value: "deferred"
     * @const
     */
    deferred: "deferred",

    /**
     * value: "opened"
     * @const
     */
    opened: "opened",

    /**
     * value: "uniqueOpened"
     * @const
     */
    uniqueOpened: "uniqueOpened",

    /**
     * value: "unsubscribed"
     * @const
     */
    unsubscribed: "unsubscribed",

    /**
     * value: "listAddition"
     * @const
     */
    listAddition: "listAddition",

    /**
     * value: "contactUpdated"
     * @const
     */
    contactUpdated: "contactUpdated",

    /**
     * value: "contactDeleted"
     * @const
     */
    contactDeleted: "contactDeleted",

    /**
     * value: "inboundEmailProcessed"
     * @const
     */
    inboundEmailProcessed: "inboundEmailProcessed"
  };


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "transactional"
     * @const
     */
    transactional: "transactional",

    /**
     * value: "marketing"
     * @const
     */
    marketing: "marketing",

    /**
     * value: "inbound"
     * @const
     */
    inbound: "inbound"
  };

  return exports;

}));