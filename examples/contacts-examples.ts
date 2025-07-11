/**
 * @fileoverview Comprehensive Contacts Resource Examples
 *
 * This file demonstrates all available methods in the ContactsResource,
 * including contact management, list operations, attributes, and pagination.
 */

import { Brevo, isBrevoError } from '../src';

const brevo = new Brevo({
  apiKey: process.env.BREVO_API_KEY || 'xkeysib-your-api-key-here',
});

/**
 * 1. Contact CRUD Operations
 */
async function contactCrudExamples() {
  console.log('👥 === CONTACT CRUD OPERATIONS ===');

  try {
    // CREATE CONTACT
    console.log('\n📝 Creating a new contact...');
    const newContact = await brevo.contacts.create({
      email: 'john.doe@example.com',
      attributes: {
        FIRSTNAME: 'John',
        LASTNAME: 'Doe',
        COMPANY: 'Acme Corporation',
        PHONE: '+1-555-0123',
      },
      listIds: [1, 2], // Add to lists 1 and 2
      updateEnabled: true, // Update if exists
    });
    console.log(`✅ Contact created with ID: ${newContact.id}`);

    // GET CONTACT (by email)
    console.log('\n📖 Getting contact by email...');
    const contactByEmail = await brevo.contacts.get('john.doe@example.com');
    console.log(`✅ Found contact: ${contactByEmail.email}`);
    console.log(
      `   Name: ${contactByEmail.attributes?.FIRSTNAME} ${contactByEmail.attributes?.LASTNAME}`
    );
    console.log(`   Lists: ${contactByEmail.listIds?.join(', ')}`);

    // GET CONTACT (by ID)
    console.log('\n📖 Getting contact by ID...');
    const contactById = await brevo.contacts.get(newContact.id);
    console.log(`✅ Found contact: ${contactById.email}`);

    // UPDATE CONTACT
    console.log('\n✏️ Updating contact...');
    await brevo.contacts.update('john.doe@example.com', {
      attributes: {
        LASTNAME: 'Smith', // Changed last name
        COMPANY: 'New Company Inc',
        MOBILE: '+1-555-9876',
      },
      listIds: [3, 4], // Move to different lists
    });
    console.log('✅ Contact updated successfully');

    // GET UPDATED CONTACT
    console.log('\n📖 Verifying update...');
    const updatedContact = await brevo.contacts.get('john.doe@example.com');
    console.log(
      `✅ Updated name: ${updatedContact.attributes?.FIRSTNAME} ${updatedContact.attributes?.LASTNAME}`
    );
    console.log(`✅ Updated company: ${updatedContact.attributes?.COMPANY}`);

    // NOTE: Uncomment to test deletion (be careful!)
    // DELETE CONTACT
    // console.log('\n🗑️ Deleting contact...');
    // await brevo.contacts.delete('john.doe@example.com');
    // console.log('✅ Contact deleted successfully');
  } catch (error) {
    console.error('❌ Contact CRUD failed:', error);

    if (isBrevoError(error)) {
      console.error(`Error type: ${error.type}`);
      console.error(`Error message: ${error.message}`);
    }
  }
}

/**
 * 2. Contact List Operations
 */
async function contactListExamples() {
  console.log('\n📋 === CONTACT LIST OPERATIONS ===');

  try {
    // LIST ALL CONTACTS
    console.log('\n📖 Listing contacts...');
    const contacts = await brevo.contacts.list({
      limit: 10,
      offset: 0,
      sort: 'desc',
      modifiedSince: '2024-01-01T00:00:00Z',
    });

    console.log(`✅ Found ${contacts.count} total contacts`);
    console.log(`📄 Showing ${contacts.contacts.length} contacts:`);

    contacts.contacts.forEach((contact, index) => {
      console.log(
        `  ${index + 1}. ${contact.email} (${contact.attributes?.FIRSTNAME || 'No name'})`
      );
    });

    // LIST CONTACTS WITH FILTERING
    console.log('\n🔍 Listing recently created contacts...');
    const recentContacts = await brevo.contacts.list({
      limit: 5,
      createdSince: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(), // Last 7 days
    });

    console.log(`✅ Found ${recentContacts.count} contacts created in last 7 days`);
  } catch (error) {
    console.error('❌ Contact listing failed:', error);
  }
}

/**
 * 3. Contact List Management
 */
async function contactListManagementExamples() {
  console.log('\n📁 === CONTACT LIST MANAGEMENT ===');

  try {
    // GET ALL CONTACT LISTS
    console.log('\n📋 Getting all contact lists...');
    const lists = await brevo.contacts.getLists({ limit: 20 });

    console.log(`✅ Found ${lists.count} total lists:`);
    lists.lists.forEach((list, index) => {
      console.log(
        `  ${index + 1}. ${list.name} (ID: ${list.id}) - ${list.totalContacts || 0} contacts`
      );
    });

    // CREATE NEW LIST
    console.log('\n📝 Creating new contact list...');
    const newList = await brevo.contacts.createList({
      name: `SDK Demo List ${Date.now()}`,
      folderId: 1, // Replace with your folder ID
    });
    console.log(`✅ Created list "${newList.id}"`);

    // GET CONTACTS IN SPECIFIC LIST
    console.log(`\n📖 Getting contacts in list ${newList.id}...`);
    const listContacts = await brevo.contacts.getListContacts(newList.id, { limit: 10 });

    console.log(`✅ List contains ${listContacts.count} contacts`);
    if (listContacts.contacts.length > 0) {
      listContacts.contacts.forEach((contact, index) => {
        console.log(`  ${index + 1}. ${contact.email}`);
      });
    } else {
      console.log('  (No contacts in this list yet)');
    }

    // ADD CONTACTS TO LIST
    console.log(`\n➕ Adding contacts to list ${newList.id}...`);
    await brevo.contacts.addToList(newList.id, ['john.doe@example.com', 'jane.smith@example.com']);
    console.log('✅ Contacts added to list');

    // VERIFY CONTACTS WERE ADDED
    console.log(`\n📖 Verifying contacts in list ${newList.id}...`);
    const updatedListContacts = await brevo.contacts.getListContacts(newList.id);
    console.log(`✅ List now contains ${updatedListContacts.count} contacts`);

    // REMOVE CONTACTS FROM LIST
    console.log(`\n➖ Removing one contact from list ${newList.id}...`);
    await brevo.contacts.removeFromList(newList.id, ['jane.smith@example.com']);
    console.log('✅ Contact removed from list');
  } catch (error) {
    console.error('❌ List management failed:', error);
  }
}

/**
 * 4. Contact Attributes Management
 */
async function contactAttributesExamples() {
  console.log('\n🏷️ === CONTACT ATTRIBUTES ===');

  try {
    // GET ALL AVAILABLE ATTRIBUTES
    console.log('\n📖 Getting all contact attributes...');
    const attributes = await brevo.contacts.getAttributes();

    console.log(`✅ Found ${attributes.attributes.length} available attributes:`);

    // Group by category
    const attributesByCategory = attributes.attributes.reduce(
      (acc, attr) => {
        if (!acc[attr.category]) acc[attr.category] = [];
        acc[attr.category].push(attr);
        return acc;
      },
      {} as Record<string, typeof attributes.attributes>
    );

    Object.entries(attributesByCategory).forEach(([category, attrs]) => {
      console.log(`\n  📂 ${category.toUpperCase()} (${attrs.length} attributes):`);
      attrs.slice(0, 5).forEach(attr => {
        // Show first 5 per category
        console.log(`    - ${attr.name} (${attr.type})`);
      });
      if (attrs.length > 5) {
        console.log(`    ... and ${attrs.length - 5} more`);
      }
    });

    // CREATE CUSTOM ATTRIBUTE (uncomment to test)
    // console.log('\n📝 Creating custom attribute...');
    // await brevo.contacts.createAttribute('normal', 'CUSTOM_FIELD', {
    //   value: 'text'
    // });
    // console.log('✅ Custom attribute created');
  } catch (error) {
    console.error('❌ Attributes operation failed:', error);
  }
}

/**
 * 5. Pagination Examples
 */
async function paginationExamples() {
  console.log('\n🔄 === PAGINATION EXAMPLES ===');

  try {
    // MANUAL PAGINATION
    console.log('\n📄 Manual pagination example...');
    let page = 1;
    let hasMore = true;
    const pageSize = 5;
    let totalProcessed = 0;

    while (hasMore && page <= 3) {
      // Limit to 3 pages for demo
      const contacts = await brevo.contacts.list({
        limit: pageSize,
        offset: (page - 1) * pageSize,
      });

      console.log(`📄 Page ${page}: ${contacts.contacts.length} contacts`);

      contacts.contacts.forEach((contact, index) => {
        const globalIndex = totalProcessed + index + 1;
        console.log(`  ${globalIndex}. ${contact.email}`);
      });

      totalProcessed += contacts.contacts.length;
      hasMore = contacts.contacts.length === pageSize;
      page++;
    }

    // AUTO-PAGINATION ITERATOR
    console.log('\n🔄 Auto-pagination iterator example...');
    const iterator = brevo.contacts.iterate(
      {
        sort: 'desc',
      },
      3
    ); // Small page size for demo

    let iteratorPageCount = 0;
    for await (const contactPage of iterator) {
      iteratorPageCount++;
      console.log(`🔄 Iterator page ${iteratorPageCount}: ${contactPage.length} contacts`);

      contactPage.forEach((contact, index) => {
        console.log(
          `  ${index + 1}. ${contact.email} (${contact.attributes?.FIRSTNAME || 'No name'})`
        );
      });

      // Limit for demo
      if (iteratorPageCount >= 3) break;
    }

    // ITERATOR WITH FILTERING
    console.log('\n🔍 Filtered auto-pagination example...');
    const filteredIterator = brevo.contacts.iterate(
      {
        modifiedSince: '2024-01-01T00:00:00Z',
      },
      5
    );

    let filteredPageCount = 0;
    for await (const contactPage of filteredIterator) {
      filteredPageCount++;
      console.log(`🔍 Filtered page ${filteredPageCount}: ${contactPage.length} contacts`);

      if (filteredPageCount >= 2) break; // Limit for demo
    }
  } catch (error) {
    console.error('❌ Pagination failed:', error);
  }
}

/**
 * 6. Advanced Contact Operations
 */
async function advancedContactExamples() {
  console.log('\n🔧 === ADVANCED CONTACT OPERATIONS ===');

  try {
    // BULK CONTACT CREATION
    console.log('\n📦 Bulk contact creation example...');
    const bulkContacts = [
      {
        email: 'user1@example.com',
        attributes: { FIRSTNAME: 'Alice', LASTNAME: 'Johnson', COMPANY: 'Tech Corp' },
        listIds: [1],
      },
      {
        email: 'user2@example.com',
        attributes: { FIRSTNAME: 'Bob', LASTNAME: 'Wilson', COMPANY: 'Design Studio' },
        listIds: [1, 2],
      },
      {
        email: 'user3@example.com',
        attributes: { FIRSTNAME: 'Carol', LASTNAME: 'Brown', COMPANY: 'Marketing Inc' },
        listIds: [2],
      },
    ];

    console.log(`📦 Creating ${bulkContacts.length} contacts...`);
    const createdContacts = [];

    for (const contactData of bulkContacts) {
      try {
        const contact = await brevo.contacts.create({
          ...contactData,
          updateEnabled: true, // Update if exists
        });
        createdContacts.push(contact);
        console.log(`  ✅ Created: ${contactData.email} (ID: ${contact.id})`);
      } catch (error) {
        console.log(
          `  ⚠️ Failed: ${contactData.email} - ${error instanceof Error ? error.message : 'Unknown error'}`
        );
      }
    }

    console.log(
      `✅ Successfully created ${createdContacts.length}/${bulkContacts.length} contacts`
    );

    // CONTACT SEARCH AND FILTERING
    console.log('\n🔍 Contact search and filtering...');

    // Find contacts modified in last 24 hours
    const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
    const recentlyModified = await brevo.contacts.list({
      modifiedSince: yesterday,
      limit: 10,
    });

    console.log(`🔍 Found ${recentlyModified.count} contacts modified in last 24 hours`);

    // CONTACT STATISTICS
    console.log('\n📊 Contact statistics...');
    const allContacts = await brevo.contacts.list({ limit: 1 }); // Just get count
    console.log(`📊 Total contacts in account: ${allContacts.count}`);

    const allLists = await brevo.contacts.getLists({ limit: 1 }); // Just get count
    console.log(`📊 Total contact lists: ${allLists.count}`);
  } catch (error) {
    console.error('❌ Advanced operations failed:', error);
  }
}

/**
 * 7. Error Handling Examples
 */
async function errorHandlingExamples() {
  console.log('\n⚠️ === ERROR HANDLING EXAMPLES ===');

  // HANDLING NON-EXISTENT CONTACT
  console.log('\n🔍 Testing non-existent contact...');
  try {
    await brevo.contacts.get('nonexistent@example.com');
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
    await brevo.contacts.create({
      email: 'invalid-email', // Invalid email format
      attributes: { FIRSTNAME: 'Test' },
    });
  } catch (error) {
    if (isBrevoError(error)) {
      console.log(`✅ Validation error caught: ${error.message}`);
      if (error.type === 'validation_error') {
        console.log('📋 Validation details available');
      }
    }
  }

  // HANDLING DUPLICATE CONTACT
  console.log('\n👥 Testing duplicate contact handling...');
  try {
    // Try to create the same contact twice
    await brevo.contacts.create({
      email: 'duplicate.test@example.com',
      attributes: { FIRSTNAME: 'Test' },
      updateEnabled: false, // Don't update if exists
    });

    await brevo.contacts.create({
      email: 'duplicate.test@example.com',
      attributes: { FIRSTNAME: 'Test2' },
      updateEnabled: false, // This should fail
    });
  } catch (error) {
    if (isBrevoError(error)) {
      console.log(`✅ Duplicate handling: ${error.type} - ${error.message}`);
    }
  }
}

/**
 * Main execution function
 */
async function main() {
  console.log('🚀 BREVO CONTACTS RESOURCE - COMPREHENSIVE EXAMPLES');
  console.log('='.repeat(60));

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
    await contactCrudExamples();
    await contactListExamples();
    await contactListManagementExamples();
    await contactAttributesExamples();
    await paginationExamples();
    await advancedContactExamples();
    await errorHandlingExamples();

    console.log('\n🎉 ALL CONTACTS EXAMPLES COMPLETED SUCCESSFULLY!');
    console.log('\n💡 Summary of demonstrated features:');
    console.log('   ✅ Contact CRUD operations (create, read, update, delete)');
    console.log('   ✅ Contact list management (create lists, add/remove contacts)');
    console.log('   ✅ Contact attributes (get all attributes, create custom)');
    console.log('   ✅ Pagination (manual and auto-iteration)');
    console.log('   ✅ Advanced operations (bulk creation, filtering, search)');
    console.log('   ✅ Comprehensive error handling');
    console.log('   ✅ Type safety and validation');
  } catch (error) {
    console.error('\n💥 Examples failed with unexpected error:', error);
  }
}

// Export individual functions for testing
export {
  contactCrudExamples,
  contactListExamples,
  contactListManagementExamples,
  contactAttributesExamples,
  paginationExamples,
  advancedContactExamples,
  errorHandlingExamples,
};

if (require.main === module) {
  main().catch(console.error);
}
