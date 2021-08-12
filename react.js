module.exports = {
  extends: [
    './index.js',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended'
  ],
  plugins: ['@emotion'],
  rules: {
    '@emotion/syntax-preference': [
      'error',
      'string'
    ]
  }
}
