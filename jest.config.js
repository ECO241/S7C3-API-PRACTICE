// jest.config.js
/** @type {import('jest').Config} */

const config = {
  verbose: true,
  testEnvironment: "node",
  moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "node"],
  moduleNameMapper: { "^@/(.*)$": "<rootDir>/$1" },
};

module.exports = config;
