module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production63' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production63' ? 'error' : 'off',
    'space-before-function-paren': 0,
    'yoda': 0,
    'no-unneeded-ternary': 0,
    'no-undef': 0
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
