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

  beforeEach(function () {
    instance = new BrevoNode.InboundParsingApi();
  });

  describe('(package)', function () {
    describe('InboundParsingApi', function () {
      describe('getInboundEmailAttachment', function () {
        it('should call getInboundEmailAttachment successfully', function (done) {
          // TODO: uncomment, update parameter values for getInboundEmailAttachment call and complete the assertions
          /*
          var downloadToken = "downloadToken_example";

          instance.getInboundEmailAttachment(downloadToken).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(File);
            // expect(data).to.be(null);

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getInboundEmailEvents', function () {
        it('should call getInboundEmailEvents successfully', function (done) {
          // TODO: uncomment, update parameter values for getInboundEmailEvents call and complete the assertions
          /*
          var opts = {};
          opts.sender = "sender_example";
          opts.startDate = new Date("2013-10-20");
          opts.endDate = new Date("2013-10-20");
          opts.limit = 100;
          opts.offset = 0;
          opts.sort = "desc";

          instance.getInboundEmailEvents(opts).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(BrevoNode.GetInboundEmailEvents);
            {
              let dataCtr = data.events;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(BrevoNode.GetInboundEmailEventsEvents);
                expect(data.uuid).to.be.a('string');
                expect(data.uuid).to.be("""00000000-0000-0000-0000-000000000000");
                expect(data._date).to.be.a(Date);
                expect(data._date).to.be(new Date());
                expect(data.sender).to.be.a('string');
                expect(data.sender).to.be("");
                expect(data.recipient).to.be.a('string');
                expect(data.recipient).to.be("");

                      }
            }

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getInboundEmailEventsByUuid', function () {
        it('should call getInboundEmailEventsByUuid successfully', function (done) {
          // TODO: uncomment, update parameter values for getInboundEmailEventsByUuid call and complete the assertions
          /*
          var uuid = "uuid_example";

          instance.getInboundEmailEventsByUuid(uuid).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(BrevoNode.GetInboundEmailEventsByUuid);
            expect(data.receivedAt).to.be.a(Date);
            expect(data.receivedAt).to.be(2019-05-25T11:53:26Z);
            expect(data.deliveredAt).to.be.a(Date);
            expect(data.deliveredAt).to.be(new Date());
            expect(data.recipient).to.be.a('string');
            expect(data.recipient).to.be("");
            expect(data.sender).to.be.a('string');
            expect(data.sender).to.be("");
            expect(data.messageId).to.be.a('string');
            expect(data.messageId).to.be("");
            expect(data.subject).to.be.a('string');
            expect(data.subject).to.be("");
            {
              let dataCtr = data.attachments;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(BrevoNode.GetInboundEmailEventsByUuidAttachments);
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("");
                expect(data.contentType).to.be.a('string');
                expect(data.contentType).to.be("");
                expect(data.contentId).to.be.a('string');
                expect(data.contentId).to.be("");
                expect(data.contentLength).to.be.a('number');
                expect(data.contentLength).to.be(0);

                      }
            }
            {
              let dataCtr = data.logs;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(BrevoNode.GetInboundEmailEventsByUuidLogs);
                expect(data._date).to.be.a(Date);
                expect(data._date).to.be(new Date());
                expect(data.type).to.be.a('string');
                expect(data.type).to.be("received");

                      }
            }

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
