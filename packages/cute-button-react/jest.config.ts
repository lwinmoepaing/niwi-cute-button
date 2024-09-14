import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest", // Use ts-jest preset
  testEnvironment: "jsdom", // Simulate browser environment
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"], // Setup file
  moduleNameMapper: {
    "^.+\\.(css|scss)$": "identity-obj-proxy", // Mock CSS modules
  },
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest", // Transform TypeScript files
  },
  testMatch: ["<rootDir>/src/**/*.test.(ts|tsx)"], // Test file patterns
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.jest.json",
    },
  },
};

export default config;
