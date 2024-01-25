module.exports = {
  collectCoverageFrom: ['src/**/*.{ts,js,tsx,jsx}'],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['/node_modules/', 'index.tsx'],
  moduleFileExtensions: ['js', 'json', 'ts', 'tsx', 'jsx'],
  modulePathIgnorePatterns: ['<rootDir>/.*/__mocks__'],
  reporters: ['default', 'jest-junit'],
  rootDir: '.',
  testEnvironment: 'jsdom',
  testRegex: '.test.(ts)x?$',
  transform: {
    '^.+\\.(ts)x?$': 'ts-jest',
  },
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['<rootDir>/test/setup.tsx'],
  maxWorkers: '50%',
}
