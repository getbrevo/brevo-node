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

  beforeEach(function () {
    instance = new BrevoNode.WhatsAppCampaignsApi();
  });

  describe('(package)', function () {
    describe('WhatsAppCampaignsApi', function () {
      describe('createWhatsAppCampaign', function () {
        it('should call createWhatsAppCampaign successfully', function (done) {
          // TODO: uncomment, update parameter values for createWhatsAppCampaign call and complete the assertions
          /*
          var whatsAppCampaigns = new BrevoNode.CreateWhatsAppCampaign();
          whatsAppCampaigns.name = "Test Campaign";
          whatsAppCampaigns.templateId = 19;
          whatsAppCampaigns.scheduledAt = "2017-06-01T12:30:00+02:00";
          whatsAppCampaigns.recipients = new BrevoNode.CreateWhatsAppCampaignRecipients();
          whatsAppCampaigns.recipients.excludedIds = [8];
          whatsAppCampaigns.recipients.listIds = [32];
          whatsAppCampaigns.recipients.segments = [23];

          instance.createWhatsAppCampaign(whatsAppCampaigns).then(function(data) {
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
      describe('createWhatsAppTemplate', function () {
        it('should call createWhatsAppTemplate successfully', function (done) {
          // TODO: uncomment, update parameter values for createWhatsAppTemplate call and complete the assertions
          /*
          var whatsAppTemplates = new BrevoNode.CreateWhatsAppTemplate();
          whatsAppTemplates.name = "Test template";
          whatsAppTemplates.language = "en";
          whatsAppTemplates.category = "MARKETING";
          whatsAppTemplates.mediaUrl = "https://attachment.domain.com";
          whatsAppTemplates.body = "making it look like readable English";
          whatsAppTemplates.headerHtml = <p>gfhgfhv ghgjh<span class=\"placeholder\" data-placeholder=\"{&quot;name&quot;:&quot;LASTNAME&quot;,&quot;defaultValue&quot;:&quot;hello&quot;,&quot;dataType&quot;:&quot;text&quot;}\">LASTNAME</span></p>";
          whatsAppTemplates.headerType = true;

          instance.createWhatsAppTemplate(whatsAppTemplates).then(function(data) {
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
      describe('deleteWhatsAppCampaign', function () {
        it('should call deleteWhatsAppCampaign successfully', function (done) {
          // TODO: uncomment, update parameter values for deleteWhatsAppCampaign call
          /*
          var campaignId = 789;

          instance.deleteWhatsAppCampaign(campaignId).then(function(data) {

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getWhatsAppCampaign', function () {
        it('should call getWhatsAppCampaign successfully', function (done) {
          // TODO: uncomment, update parameter values for getWhatsAppCampaign call and complete the assertions
          /*
          var campaignId = 789;

          instance.getWhatsAppCampaign(campaignId).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(BrevoNode.GetWhatsappCampaignOverview);
            expect(data.id).to.be.a('number');
            expect(data.id).to.be(1672035851100690);
            expect(data.campaignName).to.be.a('string');
            expect(data.campaignName).to.be("Test Campaign");
            expect(data.campaignStatus).to.be.a('string');
            expect(data.campaignStatus).to.be("draft");
            expect(data.scheduledAt).to.be.a('string');
            expect(data.scheduledAt).to.be("2017-06-01T12:30:00Z");
            expect(data.senderNumber).to.be.a('string');
            expect(data.senderNumber).to.be("9368207029");
            expect(data.stats).to.be.a(BrevoNode.WhatsappCampStats);
                  expect(data.stats.sent).to.be.a('number');
              expect(data.stats.sent).to.be(3);
              expect(data.stats.delivered).to.be.a('number');
              expect(data.stats.delivered).to.be(3);
              expect(data.stats.read).to.be.a('number');
              expect(data.stats.read).to.be(2);
              expect(data.stats.unsubscribe).to.be.a('number');
              expect(data.stats.unsubscribe).to.be(0);
              expect(data.stats.notSent).to.be.a('number');
              expect(data.stats.notSent).to.be(4);
            expect(data.template).to.be.a(BrevoNode.WhatsappCampTemplate);
                  expect(data.template.name).to.be.a('string');
              expect(data.template.name).to.be("wta107");
              expect(data.template.category).to.be.a('string');
              expect(data.template.category).to.be("Marketing");
              expect(data.template.language).to.be.a('string');
              expect(data.template.language).to.be("en_GB");
              expect(data.template.containsButton).to.be.a('boolean');
              expect(data.template.containsButton).to.be(false);
              expect(data.template.displayHeader).to.be.a('boolean');
              expect(data.template.displayHeader).to.be(true);
              expect(data.template.headerType).to.be.a('string');
              expect(data.template.headerType).to.be("text");
              {
                let dataCtr = data.template.components;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(BrevoNode.ComponentItems);
                  expect(data.type).to.be.a('string');
                  expect(data.type).to.be("BODY");
                  expect(data.text).to.be.a('string');
                  expect(data.text).to.be("Life is a long lesson in humility");
  
                        }
              }
              {
                let dataCtr = data.template.headerVariables;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(BrevoNode.VariablesItems);
                  expect(data.name).to.be.a('string');
                  expect(data.name).to.be("FIRSTNAME");
                  expect(data._default).to.be.a('string');
                  expect(data._default).to.be("INVALID_HEADER");
                  expect(data.datatype).to.be.a('string');
                  expect(data.datatype).to.be("text");
  
                        }
              }
              {
                let dataCtr = data.template.bodyVariables;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(BrevoNode.VariablesItems);
                  expect(data.name).to.be.a('string');
                  expect(data.name).to.be("FIRSTNAME");
                  expect(data._default).to.be.a('string');
                  expect(data._default).to.be("INVALID_HEADER");
                  expect(data.datatype).to.be.a('string');
                  expect(data.datatype).to.be("text");
  
                        }
              }
              expect(data.template.buttonType).to.be.a('string');
              expect(data.template.buttonType).to.be("QUICK_REPLIES");
              expect(data.template.hideFooter).to.be.a('boolean');
              expect(data.template.hideFooter).to.be(true);
            expect(data.createdAt).to.be.a('string');
            expect(data.createdAt).to.be("2017-06-01T12:30:00Z");
            expect(data.modifiedAt).to.be.a('string');
            expect(data.modifiedAt).to.be("2017-05-01T12:30:00Z");

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getWhatsAppCampaigns', function () {
        it('should call getWhatsAppCampaigns successfully', function (done) {
          // TODO: uncomment, update parameter values for getWhatsAppCampaigns call and complete the assertions
          /*
          var opts = {};
          opts.startDate = "startDate_example";
          opts.endDate = "endDate_example";
          opts.limit = 50;
          opts.offset = 0;
          opts.sort = "desc";

          instance.getWhatsAppCampaigns(opts).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(BrevoNode.GetWhatsappCampaigns);
            {
              let dataCtr = data.campaigns;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(BrevoNode.GetWhatsappCampaignsCampaigns);
                expect(data.id).to.be.a('number');
                expect(data.id).to.be(1672035851100690);
                expect(data.campaignName).to.be.a('string');
                expect(data.campaignName).to.be("Test Campaign");
                expect(data.templateId).to.be.a('string');
                expect(data.templateId).to.be("637660278078655");
                expect(data.campaignStatus).to.be.a('string');
                expect(data.campaignStatus).to.be("draft");
                expect(data.scheduledAt).to.be.a('string');
                expect(data.scheduledAt).to.be("2017-06-01T12:30:00Z");
                expect(data.errorReason).to.be.a('string');
                expect(data.errorReason).to.be("NONE");
                expect(data.invalidatedContacts).to.be.a('number');
                expect(data.invalidatedContacts).to.be(0);
                expect(data.readPercentage).to.be.a('number');
                expect(data.readPercentage).to.be(28.57);
                expect(data.stats).to.be.a(BrevoNode.WhatsappCampStats);
                      expect(data.stats.sent).to.be.a('number');
                  expect(data.stats.sent).to.be(3);
                  expect(data.stats.delivered).to.be.a('number');
                  expect(data.stats.delivered).to.be(3);
                  expect(data.stats.read).to.be.a('number');
                  expect(data.stats.read).to.be(2);
                  expect(data.stats.unsubscribe).to.be.a('number');
                  expect(data.stats.unsubscribe).to.be(0);
                  expect(data.stats.notSent).to.be.a('number');
                  expect(data.stats.notSent).to.be(4);
                expect(data.createdAt).to.be.a('string');
                expect(data.createdAt).to.be("2017-06-01T12:30:00Z");
                expect(data.modifiedAt).to.be.a('string');
                expect(data.modifiedAt).to.be("2017-05-01T12:30:00Z");

                      }
            }
            expect(data.count).to.be.a('number');
            expect(data.count).to.be(24);

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getWhatsAppConfig', function () {
        it('should call getWhatsAppConfig successfully', function (done) {
          // TODO: uncomment getWhatsAppConfig call and complete the assertions
          /*

          instance.getWhatsAppConfig().then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(BrevoNode.GetWhatsAppConfig);
            expect(data.whatsappBusinessAccountId).to.be.a('string');
            expect(data.whatsappBusinessAccountId).to.be("105569359072383");
            expect(data.sendingLimit).to.be.a('string');
            expect(data.sendingLimit).to.be("TIER_1K");
            expect(data.phoneNumberQuality).to.be.a('string');
            expect(data.phoneNumberQuality).to.be("GREEN");
            expect(data.whatsappBusinessAccountStatus).to.be.a('string');
            expect(data.whatsappBusinessAccountStatus).to.be("APPROVED");
            expect(data.businessStatus).to.be.a('string');
            expect(data.businessStatus).to.be("verified");
            expect(data.phoneNumberNameStatus).to.be.a('string');
            expect(data.phoneNumberNameStatus).to.be("APPROVED");

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getWhatsAppTemplates', function () {
        it('should call getWhatsAppTemplates successfully', function (done) {
          // TODO: uncomment, update parameter values for getWhatsAppTemplates call and complete the assertions
          /*
          var opts = {};
          opts.startDate = "startDate_example";
          opts.endDate = "endDate_example";
          opts.limit = 50;
          opts.offset = 0;
          opts.sort = "desc";

          instance.getWhatsAppTemplates(opts).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(BrevoNode.GetWATemplates);
            {
              let dataCtr = data.templates;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(BrevoNode.GetWATemplatesTemplates);
                expect(data.id).to.be.a('string');
                expect(data.id).to.be("235");
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("Test template");
                expect(data.status).to.be.a('string');
                expect(data.status).to.be("approved");
                expect(data.language).to.be.a('string');
                expect(data.language).to.be("en");
                expect(data.category).to.be.a('string');
                expect(data.category).to.be("MARKETING");
                expect(data.errorReason).to.be.a('string');
                expect(data.errorReason).to.be("NONE");
                expect(data.createdAt).to.be.a('string');
                expect(data.createdAt).to.be("2017-06-01T12:30:00Z");
                expect(data.modifiedAt).to.be.a('string');
                expect(data.modifiedAt).to.be("2017-05-01T12:30:00Z");

                      }
            }
            expect(data.count).to.be.a('number');
            expect(data.count).to.be(24);

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
