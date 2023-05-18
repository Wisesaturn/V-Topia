module.exports = {
  moduleFileExtensions: ['js', 'json'],
  transform: {
    '^.+\\.(js)?$': 'babel-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '/\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/mock/fileMock.js',
    '\\.(css|scss|svg)$': 'identity-obj-proxy',
  },
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['<rootDir>/**/*.test.js'],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  globals: {
    useESM: true,
    babelConfig: true,
  },
};
