/**
 * Brevo API
 * Brevo provide a RESTFul API that can be used with any languages. With this API, you will be able to :   - Manage your campaigns and get the statistics   - Manage your contacts   - Send transactional Emails and SMS   - and much more...  You can download our wrappers at https://github.com/orgs/brevo  **Possible responses**   | Code | Message |   | :-------------: | ------------- |   | 200  | OK. Successful Request  |   | 201  | OK. Successful Creation |   | 202  | OK. Request accepted |   | 204  | OK. Successful Update/Deletion  |   | 400  | Error. Bad Request  |   | 401  | Error. Authentication Needed  |   | 402  | Error. Not enough credit, plan upgrade needed  |   | 403  | Error. Permission denied  |   | 404  | Error. Object does not exist |   | 405  | Error. Method not allowed  |   | 406  | Error. Not Acceptable  |   | 422  | Error. Unprocessable Entity | 
 *
 * The version of the OpenAPI document: 3.0.0
 * Contact: contact@brevo.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { ConversationsMessageFile } from './conversationsMessageFile';

/**
* a Conversations message
*/
export class ConversationsMessage {
    /**
    * Message ID. It can be used for further manipulations with the message.
    */
    'id'?: string;
    /**
    * `\"agent\"` for agents’ messages, `\"visitor\"` for visitors’ messages.
    */
    'type'?: ConversationsMessage.TypeEnum;
    /**
    * Message text or name of the attached file
    */
    'text'?: string;
    /**
    * visitor’s ID
    */
    'visitorId'?: string;
    /**
    * ID of the agent on whose behalf the message was sent (only in messages sent by an agent).
    */
    'agentId'?: string;
    /**
    * Agent’s name as displayed to the visitor. Only in the messages sent by an agent.
    */
    'agentName'?: string;
    /**
    * Timestamp in milliseconds.
    */
    'createdAt'?: number;
    /**
    * `true` for pushed messages
    */
    'isPushed'?: boolean;
    /**
    * In two-way integrations, messages sent via REST API can be marked with receivedFrom property and then filtered out when received in a webhook to avoid infinite loop.
    */
    'receivedFrom'?: string;
    'file'?: ConversationsMessageFile;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "ConversationsMessage.TypeEnum"
        },
        {
            "name": "text",
            "baseName": "text",
            "type": "string"
        },
        {
            "name": "visitorId",
            "baseName": "visitorId",
            "type": "string"
        },
        {
            "name": "agentId",
            "baseName": "agentId",
            "type": "string"
        },
        {
            "name": "agentName",
            "baseName": "agentName",
            "type": "string"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "number"
        },
        {
            "name": "isPushed",
            "baseName": "isPushed",
            "type": "boolean"
        },
        {
            "name": "receivedFrom",
            "baseName": "receivedFrom",
            "type": "string"
        },
        {
            "name": "file",
            "baseName": "file",
            "type": "ConversationsMessageFile"
        }    ];

    static getAttributeTypeMap() {
        return ConversationsMessage.attributeTypeMap;
    }
}

export namespace ConversationsMessage {
    export enum TypeEnum {
        Agent = <any> 'agent',
        Visitor = <any> 'visitor'
    }
}
