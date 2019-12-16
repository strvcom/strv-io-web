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
  parserOptions: {
    project: './tsconfig.json',
  },
  env: {
    browser: true,
    node: true,
  },
  plugins: ['prettier'],
  extends: [
    '@strv/eslint-config-typescript',
    '@strv/eslint-config-react',
    '@strv/eslint-config-react/style',
    'prettier',
  ],
  rules: {
    'prettier/prettier': 'error',
    'import/group-exports': 0,
    'react/prop-types': 0,
  },
}
