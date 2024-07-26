/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|webp|svg)$': 'identity-obj-proxy',
    '\\.(css|scss)$': 'identity-obj-proxy'
  }
};