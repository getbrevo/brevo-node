/**
 * @fileoverview Example demonstrating multiple Brevo SDK resources
 *
 * This example shows how different resources work together in a typical workflow:
 * 1. Create contacts and lists
 * 2. Create and send email campaigns
 * 3. Track results
 */

import { Brevo } from '../src';

const brevo = new Brevo({
  apiKey: process.env.BREVO_API_KEY || 'xkeysib-your-api-key-here',
});

/**
 * Complete workflow example
 */
async function completeWorkflow() {
  console.log('🚀 Complete Brevo SDK Workflow Example');
  console.log('=====================================');

  try {
    // Step 1: Create a contact list
    console.log('\n📋 Step 1: Creating contact list...');
    const list = await brevo.contacts.createList({
      name: `SDK Demo List ${Date.now()}`,
      folderId: 1, // Replace with your folder ID
    });
    console.log(`✅ Created list with ID: ${list.id}`);

    // Step 2: Create contacts
    console.log('\n👥 Step 2: Creating contacts...');
    const contacts = [
      {
        email: 'john.doe@example.com',
        attributes: { FIRSTNAME: 'John', LASTNAME: 'Doe', COMPANY: 'Acme Corp' },
        listIds: [list.id],
      },
      {
        email: 'jane.smith@example.com',
        attributes: { FIRSTNAME: 'Jane', LASTNAME: 'Smith', COMPANY: 'Tech Inc' },
        listIds: [list.id],
      },
    ];

    for (const contactData of contacts) {
      const contact = await brevo.contacts.create(contactData);
      console.log(`✅ Created contact: ${contactData.email} (ID: ${contact.id})`);
    }

    // Step 3: Get list of contacts in our new list
    console.log('\n📖 Step 3: Retrieving contacts from list...');
    const listContacts = await brevo.contacts.getListContacts(list.id);
    console.log(`📊 List contains ${listContacts.count} contacts:`);
    listContacts.contacts.forEach(contact => {
      console.log(
        `  - ${contact.email} (${contact.attributes?.FIRSTNAME} ${contact.attributes?.LASTNAME})`
      );
    });

    // Step 4: Create email campaign targeting our list
    console.log('\n📧 Step 4: Creating email campaign...');
    const campaign = await brevo.emailCampaigns.create({
      name: `SDK Demo Campaign ${Date.now()}`,
      subject: 'Welcome to our SDK Demo!',
      sender: {
        email: 'demo@example.com',
        name: 'SDK Demo Team',
      },
      htmlContent: `
        <html>
          <body>
            <h1>Welcome {{params.FIRSTNAME}}!</h1>
            <p>Thank you for joining our demo from {{params.COMPANY}}.</p>
            <p>This email was sent using the Brevo TypeScript SDK.</p>
            <a href="https://developers.brevo.com" style="background: #007bff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Learn More</a>
          </body>
        </html>
      `,
      textContent:
        'Welcome {{params.FIRSTNAME}}! Thank you for joining our demo from {{params.COMPANY}}.',
      recipients: {
        lists: [list.id],
      },
      tag: 'sdk-demo',
    });
    console.log(`✅ Created campaign with ID: ${campaign.id}`);

    // Step 5: Send test email
    console.log('\n📤 Step 5: Sending test email...');
    await brevo.emailCampaigns.sendTest(campaign.id, {
      emailTo: ['test@example.com'], // Replace with your test email
    });
    console.log('✅ Test email sent successfully');

    // Step 6: Get campaign details
    console.log('\n📊 Step 6: Getting campaign details...');
    const campaignDetails = await brevo.emailCampaigns.get(campaign.id);
    console.log(`📋 Campaign "${campaignDetails.name}" status: ${campaignDetails.status}`);

    // Step 7: Demonstrate pagination with contacts
    console.log('\n🔄 Step 7: Demonstrating pagination...');
    const contactIterator = brevo.contacts.iterate({ limit: 1 }); // Small page size for demo

    let pageCount = 0;
    for await (const contactPage of contactIterator) {
      pageCount++;
      console.log(`📄 Page ${pageCount}: ${contactPage.length} contacts`);

      contactPage.forEach(contact => {
        console.log(`  - ${contact.email}`);
      });

      // Limit for demo
      if (pageCount >= 3) break;
    }

    // Step 8: Get contact attributes
    console.log('\n🏷️  Step 8: Getting available contact attributes...');
    const attributes = await brevo.contacts.getAttributes();
    console.log(`📊 Found ${attributes.attributes.length} available attributes:`);
    attributes.attributes.slice(0, 5).forEach(attr => {
      console.log(`  - ${attr.name} (${attr.type}, ${attr.category})`);
    });

    // Step 9: Advanced campaign operations
    console.log('\n🔧 Step 9: Advanced campaign operations...');

    // Get shared URL for the campaign
    const sharedUrl = await brevo.emailCampaigns.getSharedUrl(campaign.id);
    console.log(`🔗 Campaign shared URL: ${sharedUrl.sharedUrl}`);

    // List recent campaigns
    const recentCampaigns = await brevo.emailCampaigns.list({
      limit: 5,
      sort: 'desc',
    });
    console.log(`📈 Found ${recentCampaigns.count} total campaigns`);

    console.log('\n✅ Workflow completed successfully!');
    console.log('\n💡 This demonstrates:');
    console.log('   • Contact and list management');
    console.log('   • Email campaign creation');
    console.log('   • Pagination handling');
    console.log('   • Resource integration');
    console.log('   • Error handling (implicit)');
  } catch (error) {
    console.error('\n❌ Workflow failed:', error);

    if (error instanceof Error) {
      console.error('Error details:', error.message);
    }
  }
}

/**
 * Resource comparison example
 */
async function resourceComparison() {
  console.log('\n🔍 Resource Architecture Comparison');
  console.log('===================================');

  // Show how each resource follows the same patterns
  try {
    // All resources support listing with pagination
    console.log('\n📋 Listing resources (same pattern across all):');

    const campaigns = await brevo.emailCampaigns.list({ limit: 3 });
    console.log(`📧 Email campaigns: ${campaigns.count} total`);

    const contacts = await brevo.contacts.list({ limit: 3 });
    console.log(`👥 Contacts: ${contacts.count} total`);

    // All resources support pagination iterators
    console.log('\n🔄 All resources support auto-pagination:');

    const campaignIterator = brevo.emailCampaigns.iterate({ limit: 2 });
    const contactIterator = brevo.contacts.iterate({ limit: 2 });

    console.log('✅ Campaign iterator created');
    console.log('✅ Contact iterator created');

    // All resources follow CRUD patterns
    console.log('\n🏗️ CRUD Operations Available:');
    console.log('📧 Email Campaigns: list(), get(), create(), update(), delete()');
    console.log('👥 Contacts: list(), get(), create(), update(), delete()');
    console.log('📋 Contact Lists: getLists(), createList(), getListContacts()');

    // All resources have proper TypeScript typing
    console.log('\n🔒 Type Safety:');
    console.log('✅ All parameters are strictly typed');
    console.log('✅ All responses are strictly typed');
    console.log('✅ Auto-completion in IDEs');
    console.log('✅ Compile-time error checking');
  } catch (error) {
    console.error('❌ Resource comparison failed:', error);
  }
}

/**
 * Main execution
 */
async function main() {
  if (!process.env.BREVO_API_KEY || process.env.BREVO_API_KEY.includes('your-api-key')) {
    console.log('⚠️  Please set BREVO_API_KEY environment variable');
    console.log('   Example: export BREVO_API_KEY=xkeysib-...');
    return;
  }

  await completeWorkflow();
  await resourceComparison();

  console.log('\n🎉 All examples completed!');
}

if (require.main === module) {
  main().catch(console.error);
}
