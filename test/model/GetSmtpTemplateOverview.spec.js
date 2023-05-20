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
 * Swagger Codegen version: 2.4.26
 *
 * Do not edit the class manually.
 *
 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.BrevoNode);
  }
}(this, function (expect, BrevoNode) {
  'use strict';

  var instance;

  describe('(package)', function () {
    describe('GetSmtpTemplateOverview', function () {
      beforeEach(function () {
        instance = new BrevoNode.GetSmtpTemplateOverview();
      });

      it('should create an instance of GetSmtpTemplateOverview', function () {
        // TODO: update the code to test GetSmtpTemplateOverview
        expect(instance).to.be.a(BrevoNode.GetSmtpTemplateOverview);
      });

      it('should have the property id (base name: "id")', function () {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function () {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property subject (base name: "subject")', function () {
        // TODO: update the code to test the property subject
        expect(instance).to.have.property('subject');
        // expect(instance.subject).to.be(expectedValueLiteral);
      });

      it('should have the property isActive (base name: "isActive")', function () {
        // TODO: update the code to test the property isActive
        expect(instance).to.have.property('isActive');
        // expect(instance.isActive).to.be(expectedValueLiteral);
      });

      it('should have the property testSent (base name: "testSent")', function () {
        // TODO: update the code to test the property testSent
        expect(instance).to.have.property('testSent');
        // expect(instance.testSent).to.be(expectedValueLiteral);
      });

      it('should have the property sender (base name: "sender")', function () {
        // TODO: update the code to test the property sender
        expect(instance).to.have.property('sender');
        // expect(instance.sender).to.be(expectedValueLiteral);
      });

      it('should have the property replyTo (base name: "replyTo")', function () {
        // TODO: update the code to test the property replyTo
        expect(instance).to.have.property('replyTo');
        // expect(instance.replyTo).to.be(expectedValueLiteral);
      });

      it('should have the property toField (base name: "toField")', function () {
        // TODO: update the code to test the property toField
        expect(instance).to.have.property('toField');
        // expect(instance.toField).to.be(expectedValueLiteral);
      });

      it('should have the property tag (base name: "tag")', function () {
        // TODO: update the code to test the property tag
        expect(instance).to.have.property('tag');
        // expect(instance.tag).to.be(expectedValueLiteral);
      });

      it('should have the property htmlContent (base name: "htmlContent")', function () {
        // TODO: update the code to test the property htmlContent
        expect(instance).to.have.property('htmlContent');
        // expect(instance.htmlContent).to.be(expectedValueLiteral);
      });

      it('should have the property createdAt (base name: "createdAt")', function () {
        // TODO: update the code to test the property createdAt
        expect(instance).to.have.property('createdAt');
        // expect(instance.createdAt).to.be(expectedValueLiteral);
      });

      it('should have the property modifiedAt (base name: "modifiedAt")', function () {
        // TODO: update the code to test the property modifiedAt
        expect(instance).to.have.property('modifiedAt');
        // expect(instance.modifiedAt).to.be(expectedValueLiteral);
      });

      it('should have the property doiTemplate (base name: "doiTemplate")', function () {
        // TODO: update the code to test the property doiTemplate
        expect(instance).to.have.property('doiTemplate');
        // expect(instance.doiTemplate).to.be(expectedValueLiteral);
      });

    });
  });

}));
