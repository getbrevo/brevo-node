/**
 * @fileoverview Comprehensive Transactional Email Resource Examples
 *
 * This file demonstrates all available methods in the TransactionalEmailResource,
 * including sending emails, managing templates, and getting statistics.
 */

import { Brevo, isBrevoError } from '../src';

const brevo = new Brevo({
  apiKey: process.env.BREVO_API_KEY || 'xkeysib-your-api-key-here',
});

/**
 * 1. Email Sending Operations
 */
async function emailSendingExamples() {
  console.log('📧 === TRANSACTIONAL EMAIL SENDING ===');

  try {
    // SEND SIMPLE EMAIL
    console.log('\n📤 Sending simple transactional email...');
    const simpleEmail = await brevo.transactionalEmail.send({
      to: [
        {
          email: 'user@example.com',
          name: 'John Doe',
        },
      ],
      subject: 'Welcome to Our Service! 🎉',
      htmlContent: `
        <html>
          <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: #007bff; color: white; padding: 30px; text-align: center;">
              <h1>Welcome!</h1>
            </div>
            <div style="padding: 30px;">
              <p>Thank you for joining our service. We're excited to have you on board!</p>
              <div style="text-align: center; margin: 30px 0;">
                <a href="https://example.com/get-started" 
                   style="background: #28a745; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px;">
                  Get Started
                </a>
              </div>
            </div>
          </body>
        </html>
      `,
      textContent:
        'Welcome to our service! Thank you for joining us. Get started: https://example.com/get-started',
      sender: {
        email: 'welcome@example.com',
        name: 'Welcome Team',
      },
    });
    console.log(`✅ Email sent with message ID: ${simpleEmail.messageId}`);

    // SEND EMAIL WITH PARAMETERS
    console.log('\n📤 Sending email with parameters...');
    const parametrizedEmail = await brevo.transactionalEmail.send({
      to: [
        {
          email: 'customer@example.com',
          name: 'Jane Smith',
        },
      ],
      subject: 'Order Confirmation - {{params.orderNumber}}',
      htmlContent: `
        <html>
          <body style="font-family: Arial, sans-serif;">
            <h1>Thank you {{params.firstName}}!</h1>
            <p>Your order <strong>{{params.orderNumber}}</strong> has been confirmed.</p>
            <div style="background: #f8f9fa; padding: 20px; margin: 20px 0;">
              <h3>Order Details:</h3>
              <p><strong>Order Number:</strong> {{params.orderNumber}}</p>
              <p><strong>Total:</strong> {{params.total}}</p>
              <p><strong>Estimated Delivery:</strong> {{params.deliveryDate}}</p>
            </div>
            <p>You'll receive a tracking email once your order ships.</p>
          </body>
        </html>
      `,
      sender: {
        email: 'orders@example.com',
        name: 'Order Team',
      },
      params: {
        firstName: 'Jane',
        orderNumber: 'ORD-12345',
        total: '$99.99',
        deliveryDate: '3-5 business days',
      },
      tags: ['order-confirmation', 'transactional'],
    });
    console.log(`✅ Parametrized email sent: ${parametrizedEmail.messageId}`);
  } catch (error) {
    console.error('❌ Email sending failed:', error);

    if (isBrevoError(error)) {
      console.error(`Error type: ${error.type}`);
      console.error(`Error message: ${error.message}`);
    }
  }
}

/**
 * 2. Email Template Operations
 */
async function templateOperationsExamples() {
  console.log('\n📝 === EMAIL TEMPLATE OPERATIONS ===');

  try {
    // CREATE EMAIL TEMPLATE
    console.log('\n📝 Creating email template...');
    const newTemplate = await brevo.transactionalEmail.createTemplate({
      name: `SDK Demo Template ${Date.now()}`,
      subject: 'Password Reset for {{params.firstName}}',
      htmlContent: `
        <html>
          <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: #dc3545; color: white; padding: 30px; text-align: center;">
              <h1>🔐 Password Reset</h1>
            </div>
            <div style="padding: 30px;">
              <p>Hi {{params.firstName}},</p>
              <p>We received a request to reset your password for your account.</p>
              <div style="text-align: center; margin: 30px 0;">
                <a href="{{params.resetUrl}}" 
                   style="background: #dc3545; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px;">
                  Reset Password
                </a>
              </div>
              <p>This link will expire in {{params.expiryHours}} hours.</p>
              <p>If you didn't request this reset, please ignore this email.</p>
            </div>
          </body>
        </html>
      `,
      textContent: `
Password Reset

Hi {{params.firstName}},

We received a request to reset your password for your account.

Reset your password: {{params.resetUrl}}

This link will expire in {{params.expiryHours}} hours.

If you didn't request this reset, please ignore this email.
      `,
      sender: {
        email: 'security@example.com',
        name: 'Security Team',
      },
      tag: 'password-reset',
      isActive: true,
    });
    console.log(`✅ Template created with ID: ${newTemplate.id}`);

    // GET TEMPLATE
    console.log('\n📖 Getting template details...');
    const template = await brevo.transactionalEmail.getTemplate(newTemplate.id);
    console.log(`✅ Template: "${template.name}"`);
    console.log(`   Subject: ${template.subject}`);
    console.log(`   Active: ${template.isActive}`);
    console.log(`   Tag: ${template.tag}`);

    // LIST TEMPLATES
    console.log('\n📋 Listing email templates...');
    const templates = await brevo.transactionalEmail.listTemplates({
      limit: 10,
      isActive: true,
    });

    console.log(`✅ Found ${templates.count} total templates`);
    console.log(`📄 Showing ${templates.templates.length} templates:`);

    templates.templates.forEach((tmpl, index) => {
      console.log(
        `  ${index + 1}. "${tmpl.name}" (ID: ${tmpl.id}) - ${tmpl.isActive ? 'Active' : 'Inactive'}`
      );
    });

    // SEND EMAIL USING TEMPLATE
    console.log('\n📤 Sending email using template...');
    const templateEmail = await brevo.transactionalEmail.send({
      to: [{ email: 'user@example.com', name: 'Test User' }],
      templateId: newTemplate.id,
      params: {
        firstName: 'Test',
        resetUrl: 'https://example.com/reset/abc123',
        expiryHours: '24',
      },
    });
    console.log(`✅ Template email sent: ${templateEmail.messageId}`);

    return newTemplate.id;
  } catch (error) {
    console.error('❌ Template operations failed:', error);
    return null;
  }
}

/**
 * Main execution function
 */
async function main() {
  console.log('🚀 BREVO TRANSACTIONAL EMAIL RESOURCE - COMPREHENSIVE EXAMPLES');
  console.log('='.repeat(75));

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

    // Run examples
    await emailSendingExamples();
    await templateOperationsExamples();

    console.log('\n🎉 TRANSACTIONAL EMAIL EXAMPLES COMPLETED!');
  } catch (error) {
    console.error('\n💥 Examples failed:', error);
  }
}

if (require.main === module) {
  main().catch(console.error);
}
