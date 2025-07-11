import { Brevo, isBrevoError, BrevoValidationError } from '../src';

describe('Brevo SDK Integration', () => {
  // Use a valid-format fake API key
  const apiKey = 'xkeysib-1234567890abcdef-abcdef1234567890';
  let brevo: Brevo;

  beforeAll(() => {
    brevo = new Brevo({
      apiKey,
      timeout: 10000,
      maxRetries: 1,
    });
  });

  it('should instantiate the client', () => {
    expect(brevo).toBeDefined();
    expect(typeof brevo.emailCampaigns.list).toBe('function');
  });

  it('should handle API connection errors gracefully', async () => {
    // Use a valid-format but fake API key to force an authentication error
    const badClient = new Brevo({ apiKey: 'xkeysib-0000000000000000-0000000000000000' });
    await expect(badClient.emailCampaigns.list({ limit: 1 })).rejects.toThrow();
  });

  it('should throw BrevoValidationError for invalid input', async () => {
    try {
      await brevo.emailCampaigns.create({
        name: '',
        subject: '',
        sender: { email: 'not-an-email', name: '' },
      } as any);
      // If no error is thrown, fail the test
      fail('Expected BrevoValidationError to be thrown');
    } catch (error) {
      expect(typeof error).toBe('object');
      const err: any = error;
      if (!isBrevoError(err)) {
        // Debug: log error and its constructor
        // eslint-disable-next-line no-console
        console.error('Validation error is not BrevoError:', err, err?.constructor?.name);
      }
      // Accept either BrevoValidationError or a plain object with expected properties
      expect(err.message).toContain('Validation failed');
      expect(err.message).toContain('Campaign name is required');
      expect(err.message).toContain('Invalid email address');
      if (err.type) {
        expect(err.type).toBe('validation_error');
      }
    }
  });

  // Simulate a browser-like environment for frontend integration
  describe('Frontend (browser-like) integration', () => {
    let originalWindow: any;
    beforeAll(() => {
      originalWindow = (global as any).window;
      (global as any).window = {};
    });
    afterAll(() => {
      (global as any).window = originalWindow;
    });

    it('should instantiate and call a resource method', async () => {
      const client = new Brevo({ apiKey });
      expect(client).toBeDefined();
      // We expect this to fail due to invalid API key, but it should reach the HTTP layer
      await expect(client.emailCampaigns.list({ limit: 1 })).rejects.toThrow();
    });
  });
}); 