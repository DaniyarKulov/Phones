module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    // project: ['./tsconfig.json'],
  },
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-explicit-any': ['error'],
    '@typescript-eslint/no-inferrable-types': 0,
    'no-debugger': 'off',
    'no-console': 0,
    'class-methods-use-this': 'off',
    'no-constant-condition': 0,
  },
  settings: {
    include: [],
  },
  ignorePatterns: ['node_modules/**/*'],
};
