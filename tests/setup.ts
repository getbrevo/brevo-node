/**
 * Test setup file for Jest
 */

// Set test environment variables
process.env.NODE_ENV = 'test';

// Mock console.warn and console.error to reduce noise in tests
const originalWarn = console.warn;
const originalError = console.error;

beforeAll(() => {
  console.warn = jest.fn();
  console.error = jest.fn();
});

afterAll(() => {
  console.warn = originalWarn;
  console.error = originalError;
});

// Global test timeout
jest.setTimeout(30000);
