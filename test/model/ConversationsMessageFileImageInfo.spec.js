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
    describe('ConversationsMessageFileImageInfo', function () {
      beforeEach(function () {
        instance = new BrevoNode.ConversationsMessageFileImageInfo();
      });

      it('should create an instance of ConversationsMessageFileImageInfo', function () {
        // TODO: update the code to test ConversationsMessageFileImageInfo
        expect(instance).to.be.a(BrevoNode.ConversationsMessageFileImageInfo);
      });

      it('should have the property width (base name: "width")', function () {
        // TODO: update the code to test the property width
        expect(instance).to.have.property('width');
        // expect(instance.width).to.be(expectedValueLiteral);
      });

      it('should have the property height (base name: "height")', function () {
        // TODO: update the code to test the property height
        expect(instance).to.have.property('height');
        // expect(instance.height).to.be(expectedValueLiteral);
      });

      it('should have the property previewUrl (base name: "previewUrl")', function () {
        // TODO: update the code to test the property previewUrl
        expect(instance).to.have.property('previewUrl');
        // expect(instance.previewUrl).to.be(expectedValueLiteral);
      });

    });
  });

}));
