/**
 * @fileoverview Comprehensive Email Campaigns Resource Examples
 *
 * This file demonstrates all available methods in the EmailCampaignsResource,
 * including campaign management, sending, statistics, and pagination.
 */

import { Brevo, isBrevoError } from '../src';

const brevo = new Brevo({
  apiKey: process.env.BREVO_API_KEY || 'xkeysib-your-api-key-here',
});

/**
 * 1. Campaign CRUD Operations
 */
async function campaignCrudExamples() {
  console.log('📧 === EMAIL CAMPAIGN CRUD OPERATIONS ===');

  try {
    // CREATE CAMPAIGN
    console.log('\n📝 Creating a new email campaign...');
    const newCampaign = await brevo.emailCampaigns.create({
      name: `SDK Demo Campaign ${Date.now()}`,
      subject: 'Welcome to our Amazing Product! 🚀',
      sender: {
        email: 'marketing@example.com',
        name: 'Marketing Team',
      },
      htmlContent: `
        <html>
          <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px; text-align: center;">
              <h1 style="color: white; margin: 0;">Welcome {{params.FIRSTNAME}}! 🎉</h1>
            </div>
            <div style="padding: 30px;">
              <p>Hi {{params.FIRSTNAME}},</p>
              <p>Thank you for joining us at <strong>{{params.COMPANY}}</strong>!</p>
              <p>We're excited to have you on board. Here's what you can expect:</p>
              <ul>
                <li>✨ Amazing features</li>
                <li>🚀 Lightning-fast performance</li>
                <li>🛡️ Enterprise-grade security</li>
                <li>💬 24/7 customer support</li>
              </ul>
              <div style="text-align: center; margin: 30px 0;">
                <a href="https://example.com/get-started" 
                   style="background: #007bff; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; font-weight: bold;">
                  Get Started Now
                </a>
              </div>
              <p>Best regards,<br>The Marketing Team</p>
            </div>
            <div style="background: #f8f9fa; padding: 20px; text-align: center; font-size: 12px; color: #666;">
              <p>You received this email because you signed up for our service.</p>
              <p><a href="{{params.UNSUBSCRIBE}}">Unsubscribe</a> | <a href="{{params.UPDATE_PROFILE}}">Update Preferences</a></p>
            </div>
          </body>
        </html>
      `,
      textContent: `
Welcome {{params.FIRSTNAME}}!

Hi {{params.FIRSTNAME}},

Thank you for joining us at {{params.COMPANY}}!

We're excited to have you on board. Here's what you can expect:
• Amazing features
• Lightning-fast performance  
• Enterprise-grade security
• 24/7 customer support

Get started: https://example.com/get-started

Best regards,
The Marketing Team

You received this email because you signed up for our service.
Unsubscribe: {{params.UNSUBSCRIBE}}
      `,
      recipients: {
        listIds: [1, 2], // Replace with your list IDs
        exclusionListIds: [3], // Exclude certain lists
      },
      tag: 'sdk-demo',
      type: 'classic',
    });
    console.log(`✅ Campaign created with ID: ${newCampaign.id}`);

    // GET CAMPAIGN (basic info)
    console.log('\n📖 Getting campaign details...');
    const campaign = await brevo.emailCampaigns.get(newCampaign.id);
    console.log(`✅ Campaign: "${campaign.name}"`);
    console.log(`   Status: ${campaign.status}`);
    console.log(`   Subject: ${campaign.subject}`);
    console.log(`   Type: ${campaign.type}`);
    console.log(`   Tag: ${campaign.tag}`);

    // GET CAMPAIGN WITH STATISTICS
    console.log('\n📊 Getting campaign with statistics...');
    const campaignWithStats = await brevo.emailCampaigns.get(newCampaign.id, 'globalStats');
    console.log(`✅ Campaign statistics:`);
    if (campaignWithStats.statistics) {
      console.log(`   Sent: ${campaignWithStats.statistics.sent || 0}`);
      console.log(`   Delivered: ${campaignWithStats.statistics.delivered || 0}`);
      console.log(`   Opens: ${campaignWithStats.statistics.opens || 0}`);
      console.log(`   Clicks: ${campaignWithStats.statistics.clicks || 0}`);
    }

    // UPDATE CAMPAIGN
    console.log('\n✏️ Updating campaign...');
    await brevo.emailCampaigns.update(newCampaign.id, {
      name: `${campaign.name} (Updated)`,
      subject: 'Updated: Welcome to our Amazing Product! 🚀✨',
      tag: 'sdk-demo-updated',
    });
    console.log('✅ Campaign updated successfully');

    // VERIFY UPDATE
    console.log('\n📖 Verifying update...');
    const updatedCampaign = await brevo.emailCampaigns.get(newCampaign.id);
    console.log(`✅ Updated name: "${updatedCampaign.name}"`);
    console.log(`✅ Updated subject: "${updatedCampaign.subject}"`);

    return newCampaign.id; // Return for use in other examples
  } catch (error) {
    console.error('❌ Campaign CRUD failed:', error);

    if (isBrevoError(error)) {
      console.error(`Error type: ${error.type}`);
      console.error(`Error message: ${error.message}`);
    }
    return null;
  }
}

/**
 * 2. Campaign Listing and Filtering
 */
async function campaignListingExamples() {
  console.log('\n📋 === CAMPAIGN LISTING AND FILTERING ===');

  try {
    // LIST ALL CAMPAIGNS
    console.log('\n📖 Listing all campaigns...');
    const allCampaigns = await brevo.emailCampaigns.list({
      limit: 10,
      offset: 0,
      sort: 'desc',
    });

    console.log(`✅ Found ${allCampaigns.count} total campaigns`);
    console.log(`📄 Showing ${allCampaigns.campaigns.length} campaigns:`);

    allCampaigns.campaigns.forEach((campaign, index) => {
      console.log(`  ${index + 1}. "${campaign.name}" (${campaign.status}) - ${campaign.subject}`);
    });

    // LIST BY STATUS
    console.log('\n🔍 Listing sent campaigns...');
    const sentCampaigns = await brevo.emailCampaigns.list({
      status: 'sent',
      limit: 5,
    });
    console.log(`✅ Found ${sentCampaigns.count} sent campaigns`);

    // LIST BY TYPE
    console.log('\n📱 Listing classic campaigns...');
    const classicCampaigns = await brevo.emailCampaigns.list({
      type: 'classic',
      limit: 5,
    });
    console.log(`✅ Found ${classicCampaigns.count} classic campaigns`);

    // LIST BY DATE RANGE
    console.log('\n📅 Listing recent campaigns (last 30 days)...');
    const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString();
    const recentCampaigns = await brevo.emailCampaigns.list({
      startDate: thirtyDaysAgo,
      endDate: new Date().toISOString(),
      limit: 5,
    });
    console.log(`✅ Found ${recentCampaigns.count} campaigns in last 30 days`);

    // LIST WITH EXCLUSION
    console.log('\n🚫 Listing campaigns excluding HTML content...');
    const campaignsNoHtml = await brevo.emailCampaigns.list({
      excludeHtmlContent: true,
      limit: 3,
    });
    console.log(`✅ Listed ${campaignsNoHtml.campaigns.length} campaigns without HTML content`);
  } catch (error) {
    console.error('❌ Campaign listing failed:', error);
  }
}

/**
 * 3. Campaign Sending Operations
 */
async function campaignSendingExamples() {
  console.log('\n📤 === CAMPAIGN SENDING OPERATIONS ===');

  try {
    // First, create a test campaign for sending operations
    console.log('\n📝 Creating test campaign for sending...');
    const testCampaign = await brevo.emailCampaigns.create({
      name: `Test Campaign ${Date.now()}`,
      subject: 'Test Email Campaign',
      sender: {
        email: 'test@example.com',
        name: 'Test Sender',
      },
      htmlContent: '<h1>This is a test campaign</h1><p>Hello {{params.FIRSTNAME}}!</p>',
      textContent: 'This is a test campaign\n\nHello {{params.FIRSTNAME}}!',
      recipients: {
        listIds: [1], // Replace with your test list ID
      },
      tag: 'test-sending',
    });
    console.log(`✅ Test campaign created with ID: ${testCampaign.id}`);

    // SEND TEST EMAIL
    console.log('\n📧 Sending test email...');
    await brevo.emailCampaigns.sendTest(testCampaign.id, {
      emailTo: ['test@example.com'], // Replace with your test email
    });
    console.log('✅ Test email sent successfully');

    // GET CAMPAIGN STATUS
    console.log('\n📊 Checking campaign status...');
    const campaign = await brevo.emailCampaigns.get(testCampaign.id);
    console.log(`✅ Campaign status: ${campaign.status}`);

    if (campaign.status === 'draft') {
      // UPDATE CAMPAIGN STATUS
      console.log('\n⏸️ Updating campaign status to suspended...');
      await brevo.emailCampaigns.updateStatus(testCampaign.id, 'suspended');
      console.log('✅ Campaign status updated to suspended');

      // VERIFY STATUS UPDATE
      const suspendedCampaign = await brevo.emailCampaigns.get(testCampaign.id);
      console.log(`✅ Verified status: ${suspendedCampaign.status}`);
    }

    // Note: Uncomment the following to actually send the campaign
    // WARNING: This will send to real recipients!
    /*
    console.log('\n🚀 Sending campaign now...');
    await brevo.emailCampaigns.sendNow(testCampaign.id);
    console.log('✅ Campaign sent successfully');
    */

    return testCampaign.id;
  } catch (error) {
    console.error('❌ Campaign sending failed:', error);
    return null;
  }
}

/**
 * 4. Campaign Statistics and Analytics
 */
async function campaignStatisticsExamples() {
  console.log('\n📊 === CAMPAIGN STATISTICS AND ANALYTICS ===');

  try {
    // Get a campaign with statistics
    const campaigns = await brevo.emailCampaigns.list({ limit: 5, status: 'sent' });

    if (campaigns.campaigns.length === 0) {
      console.log('⚠️ No sent campaigns found for statistics demo');
      return;
    }

    const campaignId = campaigns.campaigns[0].id;
    console.log(`\n📈 Analyzing statistics for campaign: "${campaigns.campaigns[0].name}"`);

    // GET GLOBAL STATISTICS
    console.log('\n📊 Getting global statistics...');
    const globalStats = await brevo.emailCampaigns.getStatistics(campaignId);

    console.log('✅ Global Statistics:');
    console.log(`   📧 Sent: ${globalStats.sent || 0}`);
    console.log(`   ✅ Delivered: ${globalStats.delivered || 0}`);
    console.log(`   📖 Opens: ${globalStats.opens || 0}`);
    console.log(`   👆 Clicks: ${globalStats.clicks || 0}`);
    console.log(`   ↩️ Bounces: ${globalStats.bounces || 0}`);
    console.log(`   🚫 Unsubscribes: ${globalStats.unsubscribes || 0}`);
    console.log(`   ⚠️ Spam Reports: ${globalStats.spamReports || 0}`);

    // Calculate rates
    const deliveryRate =
      globalStats.delivered && globalStats.sent
        ? ((globalStats.delivered / globalStats.sent) * 100).toFixed(2)
        : '0';
    const openRate =
      globalStats.opens && globalStats.delivered
        ? ((globalStats.opens / globalStats.delivered) * 100).toFixed(2)
        : '0';
    const clickRate =
      globalStats.clicks && globalStats.delivered
        ? ((globalStats.clicks / globalStats.delivered) * 100).toFixed(2)
        : '0';

    console.log('\n📊 Calculated Rates:');
    console.log(`   📦 Delivery Rate: ${deliveryRate}%`);
    console.log(`   📖 Open Rate: ${openRate}%`);
    console.log(`   👆 Click Rate: ${clickRate}%`);

    // GET LINKS STATISTICS
    console.log('\n🔗 Getting links statistics...');
    try {
      const linksStats = await brevo.emailCampaigns.get(campaignId, 'linksStats');
      if (linksStats.statistics?.linksStats) {
        console.log('✅ Links Statistics:');
        // Links stats would be displayed here if available
        console.log('   Links statistics available in campaign data');
      }
    } catch (error) {
      console.log('⚠️ Links statistics not available for this campaign');
    }

    // GET DOMAIN STATISTICS
    console.log('\n🌐 Getting domain statistics...');
    try {
      const domainStats = await brevo.emailCampaigns.get(campaignId, 'statsByDomain');
      if (domainStats.statistics) {
        console.log('✅ Domain statistics available');
      }
    } catch (error) {
      console.log('⚠️ Domain statistics not available for this campaign');
    }
  } catch (error) {
    console.error('❌ Statistics retrieval failed:', error);
  }
}

/**
 * 5. Campaign Sharing and URLs
 */
async function campaignSharingExamples() {
  console.log('\n🔗 === CAMPAIGN SHARING AND URLS ===');

  try {
    // Get a campaign to work with
    const campaigns = await brevo.emailCampaigns.list({ limit: 1 });

    if (campaigns.campaigns.length === 0) {
      console.log('⚠️ No campaigns found for sharing demo');
      return;
    }

    const campaignId = campaigns.campaigns[0].id;
    console.log(`\n🔗 Getting shared URL for campaign: "${campaigns.campaigns[0].name}"`);

    // GET SHARED URL
    const sharedUrlResult = await brevo.emailCampaigns.getSharedUrl(campaignId);
    console.log(`✅ Shared URL: ${sharedUrlResult.sharedUrl}`);
    console.log('   This URL can be used to view the campaign in a browser');
  } catch (error) {
    console.error('❌ Sharing operation failed:', error);

    if (isBrevoError(error)) {
      if (error.type === 'not_found_error') {
        console.log('⚠️ Campaign not found or sharing not available');
      }
    }
  }
}

/**
 * 6. Pagination Examples
 */
async function paginationExamples() {
  console.log('\n🔄 === PAGINATION EXAMPLES ===');

  try {
    // MANUAL PAGINATION
    console.log('\n📄 Manual pagination example...');
    let page = 1;
    let hasMore = true;
    const pageSize = 3;
    let totalProcessed = 0;

    while (hasMore && page <= 3) {
      // Limit to 3 pages for demo
      const campaigns = await brevo.emailCampaigns.list({
        limit: pageSize,
        offset: (page - 1) * pageSize,
        sort: 'desc',
      });

      console.log(`📄 Page ${page}: ${campaigns.campaigns.length} campaigns`);

      campaigns.campaigns.forEach((campaign, index) => {
        const globalIndex = totalProcessed + index + 1;
        console.log(`  ${globalIndex}. "${campaign.name}" (${campaign.status})`);
      });

      totalProcessed += campaigns.campaigns.length;
      hasMore = campaigns.campaigns.length === pageSize;
      page++;
    }

    // AUTO-PAGINATION ITERATOR
    console.log('\n🔄 Auto-pagination iterator example...');
    const iterator = brevo.emailCampaigns.iterate(
      {
        sort: 'desc',
      },
      2
    ); // Small page size for demo

    let iteratorPageCount = 0;
    for await (const campaignPage of iterator) {
      iteratorPageCount++;
      console.log(`🔄 Iterator page ${iteratorPageCount}: ${campaignPage.length} campaigns`);

      campaignPage.forEach((campaign, index) => {
        console.log(`  ${index + 1}. "${campaign.name}" (${campaign.status})`);
      });

      // Limit for demo
      if (iteratorPageCount >= 3) break;
    }

    // ITERATOR WITH FILTERING
    console.log('\n🔍 Filtered auto-pagination example...');
    const filteredIterator = brevo.emailCampaigns.iterate(
      {
        status: 'sent',
      },
      2
    );

    let filteredPageCount = 0;
    for await (const campaignPage of filteredIterator) {
      filteredPageCount++;
      console.log(`🔍 Filtered page ${filteredPageCount}: ${campaignPage.length} sent campaigns`);

      if (filteredPageCount >= 2) break; // Limit for demo
    }
  } catch (error) {
    console.error('❌ Pagination failed:', error);
  }
}

/**
 * 7. Advanced Campaign Operations
 */
async function advancedCampaignExamples() {
  console.log('\n🔧 === ADVANCED CAMPAIGN OPERATIONS ===');

  try {
    // CAMPAIGN TEMPLATES AND REUSE
    console.log('\n📋 Creating reusable campaign template...');
    const templateCampaign = await brevo.emailCampaigns.create({
      name: `Template Campaign ${Date.now()}`,
      subject: '{{params.SUBJECT_PREFIX}} - Special Offer Inside!',
      sender: {
        email: 'offers@example.com',
        name: 'Special Offers Team',
      },
      htmlContent: `
        <html>
          <body>
            <h1>{{params.OFFER_TITLE}}</h1>
            <p>Hello {{params.FIRSTNAME}},</p>
            <p>{{params.OFFER_DESCRIPTION}}</p>
            <div style="text-align: center;">
              <a href="{{params.CTA_URL}}" style="background: {{params.CTA_COLOR}}; color: white; padding: 15px 30px; text-decoration: none;">
                {{params.CTA_TEXT}}
              </a>
            </div>
            <p>Valid until: {{params.OFFER_EXPIRES}}</p>
          </body>
        </html>
      `,
      recipients: {
        listIds: [1], // Template list
      },
      tag: 'template',
    });
    console.log(`✅ Template campaign created: ${templateCampaign.id}`);

    // BULK CAMPAIGN OPERATIONS
    console.log('\n📦 Bulk campaign management...');
    const campaignOperations = ['Summer Sale 2024', 'Back to School Special', 'Holiday Preview'];

    const createdCampaigns = [];
    for (const campaignName of campaignOperations) {
      try {
        const campaign = await brevo.emailCampaigns.create({
          name: `${campaignName} - ${Date.now()}`,
          subject: `Don't Miss: ${campaignName}`,
          sender: {
            email: 'campaigns@example.com',
            name: 'Campaign Team',
          },
          htmlContent: `<h1>${campaignName}</h1><p>Limited time offer!</p>`,
          recipients: { listIds: [1] },
          tag: 'bulk-created',
        });
        createdCampaigns.push(campaign);
        console.log(`  ✅ Created: "${campaignName}" (ID: ${campaign.id})`);
      } catch (error) {
        console.log(
          `  ⚠️ Failed: "${campaignName}" - ${error instanceof Error ? error.message : 'Unknown error'}`
        );
      }
    }

    console.log(
      `✅ Successfully created ${createdCampaigns.length}/${campaignOperations.length} campaigns`
    );

    // CAMPAIGN SEARCH AND FILTERING
    console.log('\n🔍 Advanced campaign search...');

    // Find campaigns by tag
    const taggedCampaigns = await brevo.emailCampaigns.list({
      limit: 10,
      // Note: Tag filtering would need to be implemented in the API
    });
    console.log(`🔍 Found campaigns for analysis: ${taggedCampaigns.count}`);

    // CAMPAIGN PERFORMANCE ANALYSIS
    console.log('\n📊 Campaign performance analysis...');
    const performanceCampaigns = await brevo.emailCampaigns.list({
      status: 'sent',
      limit: 5,
    });

    if (performanceCampaigns.campaigns.length > 0) {
      console.log('📈 Top performing campaigns:');

      for (const campaign of performanceCampaigns.campaigns.slice(0, 3)) {
        try {
          const stats = await brevo.emailCampaigns.getStatistics(campaign.id);
          const openRate =
            stats.opens && stats.delivered
              ? ((stats.opens / stats.delivered) * 100).toFixed(1)
              : '0';

          console.log(`  📧 "${campaign.name}": ${openRate}% open rate`);
        } catch (error) {
          console.log(`  📧 "${campaign.name}": Stats unavailable`);
        }
      }
    }
  } catch (error) {
    console.error('❌ Advanced operations failed:', error);
  }
}

/**
 * 8. Error Handling Examples
 */
async function errorHandlingExamples() {
  console.log('\n⚠️ === ERROR HANDLING EXAMPLES ===');

  // HANDLING NON-EXISTENT CAMPAIGN
  console.log('\n🔍 Testing non-existent campaign...');
  try {
    await brevo.emailCampaigns.get(999999);
  } catch (error) {
    if (isBrevoError(error)) {
      console.log(`✅ Properly caught error: ${error.type} - ${error.message}`);
    } else {
      console.log('❌ Unexpected error type');
    }
  }

  // HANDLING VALIDATION ERRORS
  console.log('\n📝 Testing validation errors...');
  try {
    await brevo.emailCampaigns.create({
      name: '', // Invalid: empty name
      subject: 'Test',
      sender: {
        email: 'invalid-email', // Invalid email format
        name: 'Test',
      },
      recipients: { listIds: [] }, // Invalid: no recipients
    });
  } catch (error) {
    if (isBrevoError(error)) {
      console.log(`✅ Validation error caught: ${error.message}`);
      if (error.type === 'validation_error') {
        console.log('📋 Validation details available');
      }
    }
  }

  // HANDLING SEND OPERATION ERRORS
  console.log('\n📤 Testing send operation errors...');
  try {
    // Try to send a non-existent campaign
    await brevo.emailCampaigns.sendNow(999999);
  } catch (error) {
    if (isBrevoError(error)) {
      console.log(`✅ Send error caught: ${error.type} - ${error.message}`);
    }
  }

  // HANDLING PERMISSION ERRORS
  console.log('\n🔒 Testing permission scenarios...');
  try {
    // Try to get statistics for a draft campaign (might not be allowed)
    const draftCampaigns = await brevo.emailCampaigns.list({ limit: 1 });
    if (draftCampaigns.campaigns.length > 0) {
      const draftCampaign = draftCampaigns.campaigns.find(c => c.status === 'draft');
      if (draftCampaign) {
        await brevo.emailCampaigns.getStatistics(draftCampaign.id);
      }
    }
  } catch (error) {
    if (isBrevoError(error)) {
      console.log(`✅ Permission/status error handled: ${error.type}`);
    }
  }
}

/**
 * Main execution function
 */
async function main() {
  console.log('🚀 BREVO EMAIL CAMPAIGNS RESOURCE - COMPREHENSIVE EXAMPLES');
  console.log('='.repeat(70));

  if (!process.env.BREVO_API_KEY || process.env.BREVO_API_KEY.includes('your-api-key')) {
    console.log('⚠️  Please set BREVO_API_KEY environment variable');
    console.log('   Example: export BREVO_API_KEY=xkeysib-...');
    return;
  }

  try {
    // Test connection first
    console.log('\n🔗 Testing connection...');
    const connectionTest = await brevo.testConnection();
    if (connectionTest.connected) {
      console.log('✅ Connected to Brevo API successfully');
    } else {
      console.log('❌ Failed to connect to Brevo API');
      return;
    }

    // Run all examples
    const campaignId = await campaignCrudExamples();
    await campaignListingExamples();
    await campaignSendingExamples();
    await campaignStatisticsExamples();
    await campaignSharingExamples();
    await paginationExamples();
    await advancedCampaignExamples();
    await errorHandlingExamples();

    // Cleanup (optional)
    if (campaignId) {
      console.log('\n🧹 Cleanup: Deleting test campaign...');
      try {
        await brevo.emailCampaigns.delete(campaignId);
        console.log('✅ Test campaign deleted');
      } catch (error) {
        console.log('⚠️ Could not delete test campaign (may already be sent)');
      }
    }

    console.log('\n🎉 ALL EMAIL CAMPAIGNS EXAMPLES COMPLETED SUCCESSFULLY!');
    console.log('\n💡 Summary of demonstrated features:');
    console.log('   ✅ Campaign CRUD operations (create, read, update, delete)');
    console.log('   ✅ Campaign listing and filtering (status, type, date range)');
    console.log('   ✅ Campaign sending (test emails, status management)');
    console.log('   ✅ Statistics and analytics (global stats, rates calculation)');
    console.log('   ✅ Campaign sharing (shared URLs for web viewing)');
    console.log('   ✅ Pagination (manual and auto-iteration)');
    console.log('   ✅ Advanced operations (bulk creation, templates, search)');
    console.log('   ✅ Comprehensive error handling');
    console.log('   ✅ Type safety and validation');
  } catch (error) {
    console.error('\n💥 Examples failed with unexpected error:', error);
  }
}

// Export individual functions for testing
export {
  campaignCrudExamples,
  campaignListingExamples,
  campaignSendingExamples,
  campaignStatisticsExamples,
  campaignSharingExamples,
  paginationExamples,
  advancedCampaignExamples,
  errorHandlingExamples,
};

if (require.main === module) {
  main().catch(console.error);
}
