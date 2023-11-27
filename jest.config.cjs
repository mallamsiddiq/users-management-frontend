// jest.config.js
module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  // testMatch: ['./src/**/*.test.{js,jsx}', './src/**/__tests__/**/*.test.{js,jsx}'],
  testPathIgnorePatterns: ['node_modules'],
  moduleNameMapper: {
    '\\.css$': '<rootDir>/__mocks__/styleMock.js',
  },
  setupFilesAfterEnv: ['./src/setupTests.js'], // Uncomment this line
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  preset: 'vite-jest',
};