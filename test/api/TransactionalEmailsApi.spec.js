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
    instance = new BrevoNode.TransactionalEmailsApi();
  });

  describe('(package)', function () {
    describe('TransactionalEmailsApi', function () {
      describe('blockNewDomain', function () {
        it('should call blockNewDomain successfully', function (done) {
          // TODO: uncomment, update parameter values for blockNewDomain call
          /*
          var blockDomain = new BrevoNode.BlockDomain();
          blockDomain.domain = "example.com";

          instance.blockNewDomain(blockDomain).then(function(data) {

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('createSmtpTemplate', function () {
        it('should call createSmtpTemplate successfully', function (done) {
          // TODO: uncomment, update parameter values for createSmtpTemplate call and complete the assertions
          /*
          var smtpTemplate = new BrevoNode.CreateSmtpTemplate();
          smtpTemplate.tag = "OrderConfirmation";
          smtpTemplate.sender = new BrevoNode.CreateSmtpTemplateSender();
          smtpTemplate.sender.name = "Mary from MyShop";
          smtpTemplate.sender.email = "contact@myshop.com";
          smtpTemplate.sender.id = 3;
          smtpTemplate.templateName = "Order Confirmation - EN";
          smtpTemplate.htmlContent = "The order n°xxxxx has been confirmed. Thanks for your purchase";
          smtpTemplate.htmlUrl = "https://html.domain.com";
          smtpTemplate.subject = "Thanks for your purchase !";
          smtpTemplate.replyTo = "support@myshop.com";
          smtpTemplate.toField = "{FNAME} {LNAME}";
          smtpTemplate.attachmentUrl = "https://attachment.domain.com";
          smtpTemplate.isActive = true;

          instance.createSmtpTemplate(smtpTemplate).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(BrevoNode.CreateModel);
            expect(data.id).to.be.a('number');
            expect(data.id).to.be(122);

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('deleteBlockedDomain', function () {
        it('should call deleteBlockedDomain successfully', function (done) {
          // TODO: uncomment, update parameter values for deleteBlockedDomain call
          /*
          var domain = "domain_example";

          instance.deleteBlockedDomain(domain).then(function(data) {

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('deleteHardbounces', function () {
        it('should call deleteHardbounces successfully', function (done) {
          // TODO: uncomment, update parameter values for deleteHardbounces call
          /*
          var opts = {};
          opts.deleteHardbounces = new BrevoNode.DeleteHardbounces();
          opts.deleteHardbounces.startDate = "2016-12-31";
          opts.deleteHardbounces.endDate = "2017-01-31";
          opts.deleteHardbounces.contactEmail = "alex76@example.com";

          instance.deleteHardbounces(opts).then(function(data) {

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('deleteScheduledEmailById', function () {
        it('should call deleteScheduledEmailById successfully', function (done) {
          // TODO: uncomment, update parameter values for deleteScheduledEmailById call
          /*
          var identifier = "identifier_example";

          instance.deleteScheduledEmailById(identifier).then(function(data) {

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('deleteSmtpTemplate', function () {
        it('should call deleteSmtpTemplate successfully', function (done) {
          // TODO: uncomment, update parameter values for deleteSmtpTemplate call
          /*
          var templateId = 789;

          instance.deleteSmtpTemplate(templateId).then(function(data) {

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getAggregatedSmtpReport', function () {
        it('should call getAggregatedSmtpReport successfully', function (done) {
          // TODO: uncomment, update parameter values for getAggregatedSmtpReport call and complete the assertions
          /*
          var opts = {};
          opts.startDate = "startDate_example";
          opts.endDate = "endDate_example";
          opts.days = 789;
          opts.tag = "tag_example";

          instance.getAggregatedSmtpReport(opts).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(BrevoNode.GetAggregatedReport);
            expect(data.range).to.be.a('string');
            expect(data.range).to.be("2016-09-08|2017-04-06");
            expect(data.requests).to.be.a('number');
            expect(data.requests).to.be(263);
            expect(data.delivered).to.be.a('number');
            expect(data.delivered).to.be(249);
            expect(data.hardBounces).to.be.a('number');
            expect(data.hardBounces).to.be(1);
            expect(data.softBounces).to.be.a('number');
            expect(data.softBounces).to.be(4);
            expect(data.clicks).to.be.a('number');
            expect(data.clicks).to.be(12);
            expect(data.uniqueClicks).to.be.a('number');
            expect(data.uniqueClicks).to.be(8);
            expect(data.opens).to.be.a('number');
            expect(data.opens).to.be(47);
            expect(data.uniqueOpens).to.be.a('number');
            expect(data.uniqueOpens).to.be(37);
            expect(data.spamReports).to.be.a('number');
            expect(data.spamReports).to.be(0);
            expect(data.blocked).to.be.a('number');
            expect(data.blocked).to.be(2);
            expect(data.invalid).to.be.a('number');
            expect(data.invalid).to.be(0);
            expect(data.unsubscribed).to.be.a('number');
            expect(data.unsubscribed).to.be(0);

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getBlockedDomains', function () {
        it('should call getBlockedDomains successfully', function (done) {
          // TODO: uncomment getBlockedDomains call and complete the assertions
          /*

          instance.getBlockedDomains().then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(BrevoNode.GetBlockedDomains);
            {
              let dataCtr = data.domains;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                expect(data).to.be("contact.com");
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
      describe('getEmailEventReport', function () {
        it('should call getEmailEventReport successfully', function (done) {
          // TODO: uncomment, update parameter values for getEmailEventReport call and complete the assertions
          /*
          var opts = {};
          opts.limit = 2500;
          opts.offset = 0;
          opts.startDate = "startDate_example";
          opts.endDate = "endDate_example";
          opts.days = 789;
          opts.email = "email_example";
          opts.event = "event_example";
          opts.tags = "tags_example";
          opts.messageId = "messageId_example";
          opts.templateId = 789;
          opts.sort = "desc";

          instance.getEmailEventReport(opts).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(BrevoNode.GetEmailEventReport);
            {
              let dataCtr = data.events;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(BrevoNode.GetEmailEventReportEvents);
                expect(data.email).to.be.a('string');
                expect(data.email).to.be("john.smith@example.com");
                expect(data._date).to.be.a('string');
                expect(data._date).to.be("2017-03-12T12:30:00Z");
                expect(data.subject).to.be.a('string');
                expect(data.subject).to.be("Brevo client test");
                expect(data.messageId).to.be.a('string');
                expect(data.messageId).to.be("<201798300811.5787683@relay.domain.com>");
                expect(data.event).to.be.a('string');
                expect(data.event).to.be("delivered");
                expect(data.reason).to.be.a('string');
                expect(data.reason).to.be("Error connection timeout");
                expect(data.tag).to.be.a('string');
                expect(data.tag).to.be("OrderConfirmation");
                expect(data.ip).to.be.a('string');
                expect(data.ip).to.be("165.87.3.15");
                expect(data.link).to.be.a('string');
                expect(data.link).to.be("https://www.someexamplelink.com");
                expect(data.from).to.be.a('string');
                expect(data.from).to.be("john@example.com");
                expect(data.templateId).to.be.a('number');
                expect(data.templateId).to.be(4);

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
      describe('getScheduledEmailByBatchId', function () {
        it('should call getScheduledEmailByBatchId successfully', function (done) {
          // TODO: uncomment, update parameter values for getScheduledEmailByBatchId call and complete the assertions
          /*
          var batchId = "batchId_example";
          var opts = {};
          opts.startDate = new Date("2013-10-20");
          opts.endDate = new Date("2013-10-20");
          opts.sort = "desc";
          opts.status = "status_example";
          opts.limit = 100;
          opts.offset = 0;

          instance.getScheduledEmailByBatchId(batchId, opts).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(BrevoNode.GetScheduledEmailByBatchId);
            expect(data.count).to.be.a('number');
            expect(data.count).to.be(0);
            {
              let dataCtr = data.batches;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(BrevoNode.GetScheduledEmailByBatchIdBatches);
                expect(data.scheduledAt).to.be.a(Date);
                expect(data.scheduledAt).to.be(new Date());
                expect(data.createdAt).to.be.a(Date);
                expect(data.createdAt).to.be(new Date());
                expect(data.status).to.be.a('string');
                expect(data.status).to.be("inProgress");

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
      describe('getScheduledEmailByMessageId', function () {
        it('should call getScheduledEmailByMessageId successfully', function (done) {
          // TODO: uncomment, update parameter values for getScheduledEmailByMessageId call and complete the assertions
          /*
          var messageId = "messageId_example";
          var opts = {};
          opts.startDate = new Date("2013-10-20");
          opts.endDate = new Date("2013-10-20");

          instance.getScheduledEmailByMessageId(messageId, opts).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(BrevoNode.GetScheduledEmailByMessageId);
            expect(data.scheduledAt).to.be.a(Date);
            expect(data.scheduledAt).to.be(new Date());
            expect(data.createdAt).to.be.a(Date);
            expect(data.createdAt).to.be(new Date());
            expect(data.status).to.be.a('string');
            expect(data.status).to.be("inProgress");

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getSmtpReport', function () {
        it('should call getSmtpReport successfully', function (done) {
          // TODO: uncomment, update parameter values for getSmtpReport call and complete the assertions
          /*
          var opts = {};
          opts.limit = 10;
          opts.offset = 0;
          opts.startDate = "startDate_example";
          opts.endDate = "endDate_example";
          opts.days = 789;
          opts.tag = "tag_example";
          opts.sort = "desc";

          instance.getSmtpReport(opts).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(BrevoNode.GetReports);
            {
              let dataCtr = data.reports;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(BrevoNode.GetReportsReports);
                expect(data._date).to.be.a(Date);
                expect(data._date).to.be(2017-04-06);
                expect(data.requests).to.be.a('number');
                expect(data.requests).to.be(65);
                expect(data.delivered).to.be.a('number');
                expect(data.delivered).to.be(63);
                expect(data.hardBounces).to.be.a('number');
                expect(data.hardBounces).to.be(1);
                expect(data.softBounces).to.be.a('number');
                expect(data.softBounces).to.be(1);
                expect(data.clicks).to.be.a('number');
                expect(data.clicks).to.be(6);
                expect(data.uniqueClicks).to.be.a('number');
                expect(data.uniqueClicks).to.be(5);
                expect(data.opens).to.be.a('number');
                expect(data.opens).to.be(58);
                expect(data.uniqueOpens).to.be.a('number');
                expect(data.uniqueOpens).to.be(52);
                expect(data.spamReports).to.be.a('number');
                expect(data.spamReports).to.be(0);
                expect(data.blocked).to.be.a('number');
                expect(data.blocked).to.be(0);
                expect(data.invalid).to.be.a('number');
                expect(data.invalid).to.be(0);
                expect(data.unsubscribed).to.be.a('number');
                expect(data.unsubscribed).to.be(0);

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
      describe('getSmtpTemplate', function () {
        it('should call getSmtpTemplate successfully', function (done) {
          // TODO: uncomment, update parameter values for getSmtpTemplate call and complete the assertions
          /*
          var templateId = 789;

          instance.getSmtpTemplate(templateId).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(BrevoNode.GetSmtpTemplateOverview);
            expect(data.id).to.be.a('number');
            expect(data.id).to.be(4);
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("Order Confirmation - EN");
            expect(data.subject).to.be.a('string');
            expect(data.subject).to.be("Thanks for your order !");
            expect(data.isActive).to.be.a('boolean');
            expect(data.isActive).to.be(true);
            expect(data.testSent).to.be.a('boolean');
            expect(data.testSent).to.be(true);
            expect(data.sender).to.be.a(BrevoNode.GetSmtpTemplateOverviewSender);
                  expect(data.sender.name).to.be.a('string');
              expect(data.sender.name).to.be("Mary form MyShop");
              expect(data.sender.email).to.be.a('string');
              expect(data.sender.email).to.be("contact@myshop.fr");
              expect(data.sender.id).to.be.a('string');
              expect(data.sender.id).to.be("43");
            expect(data.replyTo).to.be.a('string');
            expect(data.replyTo).to.be("replyto@domain.com");
            expect(data.toField).to.be.a('string');
            expect(data.toField).to.be("{FIRSTNAME} {LASTNAME}");
            expect(data.tag).to.be.a('string');
            expect(data.tag).to.be("sports");
            expect(data.htmlContent).to.be.a('string');
            expect(data.htmlContent).to.be("Your order n°xxxxx has been confirmed. Thanks for your purchase.");
            expect(data.createdAt).to.be.a('string');
            expect(data.createdAt).to.be("2017-05-01T12:30:00Z");
            expect(data.modifiedAt).to.be.a('string');
            expect(data.modifiedAt).to.be("2017-05-12T12:30:00Z");
            expect(data.doiTemplate).to.be.a('boolean');
            expect(data.doiTemplate).to.be(false);

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getSmtpTemplates', function () {
        it('should call getSmtpTemplates successfully', function (done) {
          // TODO: uncomment, update parameter values for getSmtpTemplates call and complete the assertions
          /*
          var opts = {};
          opts.templateStatus = true;
          opts.limit = 50;
          opts.offset = 0;
          opts.sort = "desc";

          instance.getSmtpTemplates(opts).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(BrevoNode.GetSmtpTemplates);
            expect(data.count).to.be.a('number');
            expect(data.count).to.be(1);
            {
              let dataCtr = data.templates;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(BrevoNode.GetSmtpTemplateOverview);
                expect(data.id).to.be.a('number');
                expect(data.id).to.be(4);
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("Order Confirmation - EN");
                expect(data.subject).to.be.a('string');
                expect(data.subject).to.be("Thanks for your order !");
                expect(data.isActive).to.be.a('boolean');
                expect(data.isActive).to.be(true);
                expect(data.testSent).to.be.a('boolean');
                expect(data.testSent).to.be(true);
                expect(data.sender).to.be.a(BrevoNode.GetSmtpTemplateOverviewSender);
                      expect(data.sender.name).to.be.a('string');
                  expect(data.sender.name).to.be("Mary form MyShop");
                  expect(data.sender.email).to.be.a('string');
                  expect(data.sender.email).to.be("contact@myshop.fr");
                  expect(data.sender.id).to.be.a('string');
                  expect(data.sender.id).to.be("43");
                expect(data.replyTo).to.be.a('string');
                expect(data.replyTo).to.be("replyto@domain.com");
                expect(data.toField).to.be.a('string');
                expect(data.toField).to.be("{FIRSTNAME} {LASTNAME}");
                expect(data.tag).to.be.a('string');
                expect(data.tag).to.be("sports");
                expect(data.htmlContent).to.be.a('string');
                expect(data.htmlContent).to.be("Your order n°xxxxx has been confirmed. Thanks for your purchase.");
                expect(data.createdAt).to.be.a('string');
                expect(data.createdAt).to.be("2017-05-01T12:30:00Z");
                expect(data.modifiedAt).to.be.a('string');
                expect(data.modifiedAt).to.be("2017-05-12T12:30:00Z");
                expect(data.doiTemplate).to.be.a('boolean');
                expect(data.doiTemplate).to.be(false);

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
      describe('getTransacBlockedContacts', function () {
        it('should call getTransacBlockedContacts successfully', function (done) {
          // TODO: uncomment, update parameter values for getTransacBlockedContacts call and complete the assertions
          /*
          var opts = {};
          opts.startDate = "startDate_example";
          opts.endDate = "endDate_example";
          opts.limit = 50;
          opts.offset = 0;
          opts.senders = ["senders_example"];
          opts.sort = "desc";

          instance.getTransacBlockedContacts(opts).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(BrevoNode.GetTransacBlockedContacts);
            expect(data.count).to.be.a('number');
            expect(data.count).to.be(1);
            {
              let dataCtr = data.contacts;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(BrevoNode.GetTransacBlockedContactsContacts);
                expect(data.email).to.be.a('string');
                expect(data.email).to.be("john.smith@example.com");
                expect(data.senderEmail).to.be.a('string');
                expect(data.senderEmail).to.be("john.smith@example.com");
                expect(data.reason).to.be.a(BrevoNode.GetTransacBlockedContactsReason);
                      expect(data.reason.code).to.be.a('string');
                  expect(data.reason.code).to.be("AdminBlocked");
                  expect(data.reason.message).to.be.a('string');
                  expect(data.reason.message).to.be("Admin blocked");
                expect(data.blockedAt).to.be.a('string');
                expect(data.blockedAt).to.be("2017-05-01T12:30:00Z");

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
      describe('getTransacEmailContent', function () {
        it('should call getTransacEmailContent successfully', function (done) {
          // TODO: uncomment, update parameter values for getTransacEmailContent call and complete the assertions
          /*
          var uuid = "uuid_example";

          instance.getTransacEmailContent(uuid).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(BrevoNode.GetTransacEmailContent);
            expect(data.email).to.be.a('string');
            expect(data.email).to.be("abc@example.com");
            expect(data.subject).to.be.a('string');
            expect(data.subject).to.be("Summer Camp");
            expect(data.templateId).to.be.a('number');
            expect(data.templateId).to.be(2);
            expect(data._date).to.be.a('string');
            expect(data._date).to.be("2017-03-12T12:30:00Z");
            {
              let dataCtr = data.events;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(BrevoNode.GetTransacEmailContentEvents);
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("delivered");
                expect(data.time).to.be.a('string');
                expect(data.time).to.be("2017-03-12T12:30:00Z");

                      }
            }
            expect(data.body).to.be.a('string');
            expect(data.body).to.be("<!DOCTYPE html> <html> <body> <h1>Greetings from the team</h1> <p>This is the actual html content sent</p> </body> </html>");
            expect(data.attachmentCount).to.be.a('number');
            expect(data.attachmentCount).to.be(2);

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getTransacEmailsList', function () {
        it('should call getTransacEmailsList successfully', function (done) {
          // TODO: uncomment, update parameter values for getTransacEmailsList call and complete the assertions
          /*
          var opts = {};
          opts.email = "email_example";
          opts.templateId = 789;
          opts.messageId = "messageId_example";
          opts.startDate = "startDate_example";
          opts.endDate = "endDate_example";
          opts.sort = "desc";
          opts.limit = 500;
          opts.offset = 0;

          instance.getTransacEmailsList(opts).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(BrevoNode.GetTransacEmailsList);
            expect(data.count).to.be.a('number');
            expect(data.count).to.be(5);
            {
              let dataCtr = data.transactionalEmails;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(BrevoNode.GetTransacEmailsListTransactionalEmails);
                expect(data.email).to.be.a('string');
                expect(data.email).to.be("john.smith@example.com");
                expect(data.subject).to.be.a('string');
                expect(data.subject).to.be("Summer Camp");
                expect(data.templateId).to.be.a('number');
                expect(data.templateId).to.be(2);
                expect(data.messageId).to.be.a('string');
                expect(data.messageId).to.be("<201798300811.5700093@relay.domain.com>");
                expect(data.uuid).to.be.a('string');
                expect(data.uuid).to.be("5a78c-209ok98262910-s99a341");
                expect(data._date).to.be.a('string');
                expect(data._date).to.be("2017-03-12T12:30:00Z");
                expect(data.from).to.be.a('string');
                expect(data.from).to.be("diana.doe@example.com");
                {
                  let dataCtr = data.tags;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a('string');
                    expect(data).to.be("tag1");
                  }
                }

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
      describe('sendTestTemplate', function () {
        it('should call sendTestTemplate successfully', function (done) {
          // TODO: uncomment, update parameter values for sendTestTemplate call
          /*
          var templateId = 789;
          var sendTestEmail = new BrevoNode.SendTestEmail();
          sendTestEmail.emailTo = ["helen.jurger@example.com"];

          instance.sendTestTemplate(templateId, sendTestEmail).then(function(data) {

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('sendTransacEmail', function () {
        it('should call sendTransacEmail successfully', function (done) {
          // TODO: uncomment, update parameter values for sendTransacEmail call and complete the assertions
          /*
          var sendSmtpEmail = new BrevoNode.SendSmtpEmail();
          sendSmtpEmail.sender = new BrevoNode.SendSmtpEmailSender();
          sendSmtpEmail.sender.name = "Mary from MyShop";
          sendSmtpEmail.sender.email = "no-reply@myshop.com";
          sendSmtpEmail.sender.id = 2;
          sendSmtpEmail.to = [new BrevoNode.SendSmtpEmailTo()];
          sendSmtpEmail.to[0].email = "jimmy98@example.com";
          sendSmtpEmail.to[0].name = "Jimmy";
          sendSmtpEmail.bcc = [new BrevoNode.SendSmtpEmailBcc()];
          sendSmtpEmail.bcc[0].email = "helen9766@example.com";
          sendSmtpEmail.bcc[0].name = "Helen";
          sendSmtpEmail.cc = [new BrevoNode.SendSmtpEmailCc()];
          sendSmtpEmail.cc[0].email = "ann6533@example.com";
          sendSmtpEmail.cc[0].name = "Ann";
          sendSmtpEmail.htmlContent = "<!DOCTYPE html> <html> <body> <h1>Confirm you email</h1> <p>Please confirm your email address by clicking on the link below</p> </body> </html>";
          sendSmtpEmail.textContent = "Please confirm your email address by clicking on the link https://text.domain.com";
          sendSmtpEmail.subject = "Login Email confirmation";
          sendSmtpEmail.replyTo = new BrevoNode.SendSmtpEmailReplyTo();
          sendSmtpEmail.replyTo.email = "ann6533@example.com";
          sendSmtpEmail.replyTo.name = "Ann";
          sendSmtpEmail.attachment = [new BrevoNode.SendSmtpEmailAttachment()];
          sendSmtpEmail.attachment[0].url = "https://attachment.domain.com/myAttachmentFromUrl.jpg";
          sendSmtpEmail.attachment[0].content = "b3JkZXIucGRm";
          sendSmtpEmail.attachment[0].name = "myAttachment.png";
          sendSmtpEmail.headers = {"sender.ip":"1.2.3.4","X-Mailin-custom":"some_custom_header","idempotencyKey":"abc-123"};
          sendSmtpEmail.templateId = 2;
          sendSmtpEmail.params = {"FNAME":"Joe","LNAME":"Doe"};
          sendSmtpEmail.messageVersions = [new BrevoNode.SendSmtpEmailMessageVersions()];
          sendSmtpEmail.messageVersions[0].to = [new BrevoNode.SendSmtpEmailTo1()];
          sendSmtpEmail.messageVersions[0].to[0].email = "jimmy98@example.com";
          sendSmtpEmail.messageVersions[0].to[0].name = "Jimmy";
          sendSmtpEmail.messageVersions[0].params = {"FNAME":"Joe","LNAME":"Doe"};
          sendSmtpEmail.messageVersions[0].bcc = [new BrevoNode.SendSmtpEmailBcc()];
          sendSmtpEmail.messageVersions[0].bcc[0].email = "helen9766@example.com";
          sendSmtpEmail.messageVersions[0].bcc[0].name = "Helen";
          sendSmtpEmail.messageVersions[0].cc = [new BrevoNode.SendSmtpEmailCc()];
          sendSmtpEmail.messageVersions[0].cc[0].email = "ann6533@example.com";
          sendSmtpEmail.messageVersions[0].cc[0].name = "Ann";
          sendSmtpEmail.messageVersions[0].replyTo = new BrevoNode.SendSmtpEmailReplyTo1();
          sendSmtpEmail.messageVersions[0].replyTo.email = "ann6533@example.com";
          sendSmtpEmail.messageVersions[0].replyTo.name = "Ann";
          sendSmtpEmail.messageVersions[0].subject = "Login Email confirmation";
          sendSmtpEmail.tags = ["tag1"];
          sendSmtpEmail.scheduledAt = 2022-04-05T12:30:00+02:00;
          sendSmtpEmail.batchId = "5c6cfa04-eed9-42c2-8b5c-6d470d978e9d";

          instance.sendTransacEmail(sendSmtpEmail).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(BrevoNode.CreateSmtpEmail);
            expect(data.messageId).to.be.a('string');
            expect(data.messageId).to.be("<201798300811.5787683@relay.domain.com>");
            {
              let dataCtr = data.messageIds;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                expect(data).to.be("");
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
      describe('smtpBlockedContactsEmailDelete', function () {
        it('should call smtpBlockedContactsEmailDelete successfully', function (done) {
          // TODO: uncomment, update parameter values for smtpBlockedContactsEmailDelete call
          /*
          var email = "email_example";

          instance.smtpBlockedContactsEmailDelete(email).then(function(data) {

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('smtpLogMessageIdDelete', function () {
        it('should call smtpLogMessageIdDelete successfully', function (done) {
          // TODO: uncomment, update parameter values for smtpLogMessageIdDelete call
          /*
          var messageId = "messageId_example";

          instance.smtpLogMessageIdDelete(messageId).then(function(data) {

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('updateSmtpTemplate', function () {
        it('should call updateSmtpTemplate successfully', function (done) {
          // TODO: uncomment, update parameter values for updateSmtpTemplate call
          /*
          var templateId = 789;
          var smtpTemplate = new BrevoNode.UpdateSmtpTemplate();
          smtpTemplate.tag = "OrderConfirmation";
          smtpTemplate.sender = new BrevoNode.UpdateSmtpTemplateSender();
          smtpTemplate.sender.name = "Mary from MyShop";
          smtpTemplate.sender.email = "contact@myshop.com";
          smtpTemplate.sender.id = 3;
          smtpTemplate.templateName = "Order Confirmation - EN";
          smtpTemplate.htmlContent = "The order n°xxxxx has been confirmed. Thanks for your purchase";
          smtpTemplate.htmlUrl = "https://html.domain.com";
          smtpTemplate.subject = "Thanks for your purchase !";
          smtpTemplate.replyTo = "support@myshop.com";
          smtpTemplate.toField = "{FNAME} {LNAME}";
          smtpTemplate.attachmentUrl = "https://attachment.domain.com";
          smtpTemplate.isActive = true;

          instance.updateSmtpTemplate(templateId, smtpTemplate).then(function(data) {

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
