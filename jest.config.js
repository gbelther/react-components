module.exports = {
  roots: ['<rootDir>/src', '<rootDir>/tests'],
  collectCoverageFrom: ['<rootDir>/src/**/*.{tsx,tsx}'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/main/config/jest/jest-setup.ts'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  transform: {
    '.+\\.(ts|tsx)$': 'ts-jest',
  },
};
