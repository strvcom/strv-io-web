module.exports = {
  parser: 'babel-eslint',
  extends: [
    '@strv/javascript/environments/react/v16',
    '@strv/javascript/coding-styles/recommended',
    'prettier',
  ],
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['app'],
      },
    },
  },
  rules: {
    'import/group-exports': 0,
  },
}
