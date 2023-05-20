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
    describe('GetAccountPlan', function () {
      beforeEach(function () {
        instance = new BrevoNode.GetAccountPlan();
      });

      it('should create an instance of GetAccountPlan', function () {
        // TODO: update the code to test GetAccountPlan
        expect(instance).to.be.a(BrevoNode.GetAccountPlan);
      });

      it('should have the property type (base name: "type")', function () {
        // TODO: update the code to test the property type
        expect(instance).to.have.property('type');
        // expect(instance.type).to.be(expectedValueLiteral);
      });

      it('should have the property creditsType (base name: "creditsType")', function () {
        // TODO: update the code to test the property creditsType
        expect(instance).to.have.property('creditsType');
        // expect(instance.creditsType).to.be(expectedValueLiteral);
      });

      it('should have the property credits (base name: "credits")', function () {
        // TODO: update the code to test the property credits
        expect(instance).to.have.property('credits');
        // expect(instance.credits).to.be(expectedValueLiteral);
      });

      it('should have the property startDate (base name: "startDate")', function () {
        // TODO: update the code to test the property startDate
        expect(instance).to.have.property('startDate');
        // expect(instance.startDate).to.be(expectedValueLiteral);
      });

      it('should have the property endDate (base name: "endDate")', function () {
        // TODO: update the code to test the property endDate
        expect(instance).to.have.property('endDate');
        // expect(instance.endDate).to.be(expectedValueLiteral);
      });

      it('should have the property userLimit (base name: "userLimit")', function () {
        // TODO: update the code to test the property userLimit
        expect(instance).to.have.property('userLimit');
        // expect(instance.userLimit).to.be(expectedValueLiteral);
      });

    });
  });

}));
