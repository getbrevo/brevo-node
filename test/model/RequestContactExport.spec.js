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
    describe('RequestContactExport', function () {
      beforeEach(function () {
        instance = new BrevoNode.RequestContactExport();
      });

      it('should create an instance of RequestContactExport', function () {
        // TODO: update the code to test RequestContactExport
        expect(instance).to.be.a(BrevoNode.RequestContactExport);
      });

      it('should have the property exportAttributes (base name: "exportAttributes")', function () {
        // TODO: update the code to test the property exportAttributes
        expect(instance).to.have.property('exportAttributes');
        // expect(instance.exportAttributes).to.be(expectedValueLiteral);
      });

      it('should have the property customContactFilter (base name: "customContactFilter")', function () {
        // TODO: update the code to test the property customContactFilter
        expect(instance).to.have.property('customContactFilter');
        // expect(instance.customContactFilter).to.be(expectedValueLiteral);
      });

      it('should have the property notifyUrl (base name: "notifyUrl")', function () {
        // TODO: update the code to test the property notifyUrl
        expect(instance).to.have.property('notifyUrl');
        // expect(instance.notifyUrl).to.be(expectedValueLiteral);
      });

    });
  });

}));
