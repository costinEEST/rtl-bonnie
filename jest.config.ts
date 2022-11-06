export default {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./jest.setup.ts"],
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
  },
  testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"],
  testPathIgnorePatterns: ["node_modules"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.svg$": "./src/__tests__/jest/svgTransform.js",
  },
};
