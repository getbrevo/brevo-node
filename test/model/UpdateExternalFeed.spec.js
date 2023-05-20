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
    describe('UpdateExternalFeed', function () {
      beforeEach(function () {
        instance = new BrevoNode.UpdateExternalFeed();
      });

      it('should create an instance of UpdateExternalFeed', function () {
        // TODO: update the code to test UpdateExternalFeed
        expect(instance).to.be.a(BrevoNode.UpdateExternalFeed);
      });

      it('should have the property name (base name: "name")', function () {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property url (base name: "url")', function () {
        // TODO: update the code to test the property url
        expect(instance).to.have.property('url');
        // expect(instance.url).to.be(expectedValueLiteral);
      });

      it('should have the property authType (base name: "authType")', function () {
        // TODO: update the code to test the property authType
        expect(instance).to.have.property('authType');
        // expect(instance.authType).to.be(expectedValueLiteral);
      });

      it('should have the property username (base name: "username")', function () {
        // TODO: update the code to test the property username
        expect(instance).to.have.property('username');
        // expect(instance.username).to.be(expectedValueLiteral);
      });

      it('should have the property password (base name: "password")', function () {
        // TODO: update the code to test the property password
        expect(instance).to.have.property('password');
        // expect(instance.password).to.be(expectedValueLiteral);
      });

      it('should have the property token (base name: "token")', function () {
        // TODO: update the code to test the property token
        expect(instance).to.have.property('token');
        // expect(instance.token).to.be(expectedValueLiteral);
      });

      it('should have the property headers (base name: "headers")', function () {
        // TODO: update the code to test the property headers
        expect(instance).to.have.property('headers');
        // expect(instance.headers).to.be(expectedValueLiteral);
      });

      it('should have the property maxRetries (base name: "maxRetries")', function () {
        // TODO: update the code to test the property maxRetries
        expect(instance).to.have.property('maxRetries');
        // expect(instance.maxRetries).to.be(expectedValueLiteral);
      });

      it('should have the property cache (base name: "cache")', function () {
        // TODO: update the code to test the property cache
        expect(instance).to.have.property('cache');
        // expect(instance.cache).to.be(expectedValueLiteral);
      });

    });
  });

}));
