module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  ignorePatterns: [
    '_blank',
    '*.interface.ts'
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'react/jsx-filename-extension': [
      'warn', 
      { 'extensions': ['.tsx', '.ts'] }
    ],
    'linebreak-style': [
      'error',
      'windows'
    ]
  },
};
