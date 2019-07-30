// .eslintrc.js
'use strict'

// TODO: Fix import resolve error in eslint
module.exports = {
  parser: '@typescript-eslint/parser',
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
  plugins: ['prettier'],
  extends: [
    'prettier',
    '@strv/eslint-config-typescript',
    '@strv/eslint-config-react',
    '@strv/eslint-config-react/style',
  ],
  rules: {
    'prettier/prettier': 'error',
  },
}
