'use strict'

module.exports = {
  env: {
    node: true,
  },
  extends: [
    '@strv/javascript/environments/react/v16',
    '@strv/javascript/environments/react/optional',
    '@strv/javascript/coding-styles/recommended',
  ],
  parser: 'babel-eslint',
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
  rules: {
    'import/group-exports': 0,
    'import/order': 0,
    'max-len': 0,
    'no-warning-comments': 0,
  },
}
