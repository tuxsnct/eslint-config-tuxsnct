module.exports = {
  extends: [
    './index.js',
    'jsx-a11y',
    'react',
    'react-hooks',
    '@emotion'
  ],
  rules: {
    '@emotion/syntax-preference': [
      'error',
      'string'
    ]
  }
}
