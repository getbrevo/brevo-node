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
    describe('GetReportsReports', function () {
      beforeEach(function () {
        instance = new BrevoNode.GetReportsReports();
      });

      it('should create an instance of GetReportsReports', function () {
        // TODO: update the code to test GetReportsReports
        expect(instance).to.be.a(BrevoNode.GetReportsReports);
      });

      it('should have the property _date (base name: "date")', function () {
        // TODO: update the code to test the property _date
        expect(instance).to.have.property('_date');
        // expect(instance._date).to.be(expectedValueLiteral);
      });

      it('should have the property requests (base name: "requests")', function () {
        // TODO: update the code to test the property requests
        expect(instance).to.have.property('requests');
        // expect(instance.requests).to.be(expectedValueLiteral);
      });

      it('should have the property delivered (base name: "delivered")', function () {
        // TODO: update the code to test the property delivered
        expect(instance).to.have.property('delivered');
        // expect(instance.delivered).to.be(expectedValueLiteral);
      });

      it('should have the property hardBounces (base name: "hardBounces")', function () {
        // TODO: update the code to test the property hardBounces
        expect(instance).to.have.property('hardBounces');
        // expect(instance.hardBounces).to.be(expectedValueLiteral);
      });

      it('should have the property softBounces (base name: "softBounces")', function () {
        // TODO: update the code to test the property softBounces
        expect(instance).to.have.property('softBounces');
        // expect(instance.softBounces).to.be(expectedValueLiteral);
      });

      it('should have the property clicks (base name: "clicks")', function () {
        // TODO: update the code to test the property clicks
        expect(instance).to.have.property('clicks');
        // expect(instance.clicks).to.be(expectedValueLiteral);
      });

      it('should have the property uniqueClicks (base name: "uniqueClicks")', function () {
        // TODO: update the code to test the property uniqueClicks
        expect(instance).to.have.property('uniqueClicks');
        // expect(instance.uniqueClicks).to.be(expectedValueLiteral);
      });

      it('should have the property opens (base name: "opens")', function () {
        // TODO: update the code to test the property opens
        expect(instance).to.have.property('opens');
        // expect(instance.opens).to.be(expectedValueLiteral);
      });

      it('should have the property uniqueOpens (base name: "uniqueOpens")', function () {
        // TODO: update the code to test the property uniqueOpens
        expect(instance).to.have.property('uniqueOpens');
        // expect(instance.uniqueOpens).to.be(expectedValueLiteral);
      });

      it('should have the property spamReports (base name: "spamReports")', function () {
        // TODO: update the code to test the property spamReports
        expect(instance).to.have.property('spamReports');
        // expect(instance.spamReports).to.be(expectedValueLiteral);
      });

      it('should have the property blocked (base name: "blocked")', function () {
        // TODO: update the code to test the property blocked
        expect(instance).to.have.property('blocked');
        // expect(instance.blocked).to.be(expectedValueLiteral);
      });

      it('should have the property invalid (base name: "invalid")', function () {
        // TODO: update the code to test the property invalid
        expect(instance).to.have.property('invalid');
        // expect(instance.invalid).to.be(expectedValueLiteral);
      });

      it('should have the property unsubscribed (base name: "unsubscribed")', function () {
        // TODO: update the code to test the property unsubscribed
        expect(instance).to.have.property('unsubscribed');
        // expect(instance.unsubscribed).to.be(expectedValueLiteral);
      });

    });
  });

}));
