/**
 * @fileoverview Basic usage examples for the Brevo SDK
 *
 * This file demonstrates common usage patterns and features of the Brevo SDK.
 * Run with: `npx tsx examples/basic-usage.ts`
 */

import { Brevo, isBrevoError, BrevoValidationError } from '../src';

// Initialize the client
const brevo = new Brevo({
  apiKey: process.env.BREVO_API_KEY || 'xkeysib-your-api-key-here',
  timeout: 30000,
  maxRetries: 3,
});

/**
 * Example 1: Test API connection
 */
async function testConnection() {
  console.log('🔗 Testing API connection...');

  try {
    const result = await brevo.testConnection();
    if (result.connected) {
      console.log('✅ Connection successful!');
    } else {
      console.log('❌ Connection failed:', result.message);
    }
  } catch (error) {
    console.error('❌ Connection error:', error);
  }
}

/**
 * Example 2: Email Campaigns - List, Create, and Manage
 */
async function emailCampaignExamples() {
  console.log('\n📧 Email Campaign Examples');

  try {
    // List existing campaigns
    console.log('📋 Listing campaigns...');
    const campaigns = await brevo.emailCampaigns.list({
      limit: 5,
      status: 'sent',
    });

    console.log(`Found ${campaigns.count} campaigns:`);
    campaigns.campaigns.forEach(campaign => {
      console.log(`  - ${campaign.name} (${campaign.status})`);
    });

    // Create a new campaign
    console.log('\n📝 Creating new campaign...');
    const newCampaign = await brevo.emailCampaigns.create({
      name: `SDK Test Campaign ${Date.now()}`,
      subject: 'Test Campaign from TypeScript SDK',
      sender: {
        email: 'test@example.com',
        name: 'SDK Test',
      },
      htmlContent: `
        <html>
          <body>
            <h1>Hello from Brevo SDK!</h1>
            <p>This email was sent using the TypeScript SDK.</p>
            <p>Campaign created at: ${new Date().toISOString()}</p>
          </body>
        </html>
      `,
      textContent: 'Hello from Brevo SDK! This is the text version.',
      recipients: {
        lists: [1], // Replace with your actual list ID
      },
      tag: 'sdk-test',
    });

    console.log(`✅ Campaign created with ID: ${newCampaign.id}`);

    // Get campaign details
    console.log('\n📖 Getting campaign details...');
    const campaignDetails = await brevo.emailCampaigns.get(newCampaign.id);
    console.log(`Campaign "${campaignDetails.name}" status: ${campaignDetails.status}`);

    // Send test email
    console.log('\n📤 Sending test email...');
    await brevo.emailCampaigns.sendTest(newCampaign.id, {
      emailTo: ['test@example.com'], // Replace with your test email
    });
    console.log('✅ Test email sent!');
  } catch (error) {
    if (isBrevoError(error)) {
      console.error(`❌ Brevo API Error (${error.type}):`, error.message);

      if (error instanceof BrevoValidationError) {
        console.error('Validation details:', error.details);
      }
    } else {
      console.error('❌ Unexpected error:', error);
    }
  }
}

/**
 * Example 3: Pagination - Different approaches
 */
async function paginationExamples() {
  console.log('\n📄 Pagination Examples');

  try {
    // Method 1: Manual pagination
    console.log('🔢 Manual pagination:');
    let offset = 0;
    const limit = 10;
    let hasMore = true;

    while (hasMore) {
      const page = await brevo.emailCampaigns.list({ offset, limit });
      console.log(`Page starting at ${offset}: ${page.campaigns.length} campaigns`);

      // Process campaigns
      page.campaigns.forEach(campaign => {
        console.log(`  - ${campaign.name}`);
      });

      offset += limit;
      hasMore = page.campaigns.length === limit;

      if (offset >= 30) break; // Limit for demo
    }

    // Method 2: Auto-pagination iterator
    console.log('\n🔄 Auto-pagination with iterator:');
    const iterator = brevo.emailCampaigns.iterate({ status: 'sent' }, 5);

    let pageCount = 0;
    for await (const campaignPage of iterator) {
      pageCount++;
      console.log(`Iterator page ${pageCount}: ${campaignPage.length} campaigns`);

      campaignPage.forEach(campaign => {
        console.log(`  - ${campaign.name} (${campaign.status})`);
      });

      if (pageCount >= 3) break; // Limit for demo
    }

    // Method 3: Get all items at once
    console.log('\n📦 Getting all campaigns at once:');
    const allCampaigns = await brevo.emailCampaigns.iterate({ limit: 5 }).all();
    console.log(`Retrieved ${allCampaigns.length} total campaigns`);
  } catch (error) {
    console.error('❌ Pagination error:', error);
  }
}

/**
 * Example 4: Error handling patterns
 */
async function errorHandlingExamples() {
  console.log('\n🚨 Error Handling Examples');

  // Example 1: Handle specific error types
  try {
    await brevo.emailCampaigns.get(999999); // Non-existent campaign
  } catch (error) {
    if (isBrevoError(error)) {
      switch (error.type) {
        case 'not_found_error':
          console.log('📭 Campaign not found - this is expected');
          break;
        case 'authentication_error':
          console.log('🔒 Authentication failed - check your API key');
          break;
        case 'validation_error':
          console.log('📝 Validation failed:', error.message);
          if (error instanceof BrevoValidationError) {
            error.details.forEach(detail => {
              console.log(`  - ${detail.field}: ${detail.message}`);
            });
          }
          break;
        default:
          console.log(`❌ API Error (${error.type}):`, error.message);
      }
    } else {
      console.error('❌ Unexpected error:', error);
    }
  }

  // Example 2: Validation error
  try {
    await brevo.emailCampaigns.create({
      name: '', // Invalid: empty name
      subject: '', // Invalid: empty subject
      sender: {
        email: 'invalid-email', // Invalid: bad email format
        name: '',
      },
    } as any);
  } catch (error) {
    if (error instanceof BrevoValidationError) {
      console.log('📝 Validation errors caught:');
      error.details.forEach(detail => {
        console.log(`  - ${detail.field || 'general'}: ${detail.message}`);
      });
    }
  }
}

/**
 * Example 5: Advanced usage patterns
 */
async function advancedExamples() {
  console.log('\n🔧 Advanced Usage Examples');

  try {
    // Custom HTTP client
    console.log('🌐 Using custom HTTP client:');
    const brevoWithFetch = Brevo.withFetch({
      apiKey: process.env.BREVO_API_KEY || 'xkeysib-your-api-key-here',
      timeout: 15000,
    });

    const fetchCampaigns = await brevoWithFetch.emailCampaigns.list({
      limit: 3,
    });
    console.log(`✅ Fetched ${fetchCampaigns.campaigns.length} campaigns using Fetch client`);

    // Raw API requests
    console.log('\n🔧 Making raw API request:');
    const rawResponse = await brevo.request('GET', '/emailCampaigns', undefined, { limit: 1 });
    console.log(`✅ Raw request returned status: ${rawResponse.status}`);

    // Get campaign statistics
    console.log('\n📊 Getting campaign statistics:');
    const campaigns = await brevo.emailCampaigns.list({
      limit: 1,
      status: 'sent',
    });
    if (campaigns.campaigns.length > 0) {
      const stats = await brevo.emailCampaigns.getStatistics(campaigns.campaigns[0].id);
      if (stats.globalStats) {
        console.log(`📈 Campaign stats:`, {
          sent: stats.globalStats.sent,
          delivered: stats.globalStats.delivered,
          opened: stats.globalStats.viewed,
          clicked: stats.globalStats.uniqueClicks,
        });
      }
    }
  } catch (error) {
    console.error('❌ Advanced examples error:', error);
  }
}

/**
 * Main execution function
 */
async function main() {
  console.log('🚀 Brevo SDK Examples');
  console.log('====================');

  // Check if API key is provided
  if (!process.env.BREVO_API_KEY || process.env.BREVO_API_KEY.includes('your-api-key')) {
    console.log('⚠️  Please set BREVO_API_KEY environment variable with your actual API key');
    console.log('   Example: export BREVO_API_KEY=xkeysib-...');
    return;
  }

  try {
    await testConnection();
    await emailCampaignExamples();
    await paginationExamples();
    await errorHandlingExamples();
    await advancedExamples();

    console.log('\n✅ All examples completed successfully!');
  } catch (error) {
    console.error('\n❌ Example execution failed:', error);
    process.exit(1);
  }
}

// Run the examples
if (require.main === module) {
  main().catch(console.error);
}
