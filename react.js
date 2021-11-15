module.exports = {
  env: {
    browser: true
  },
  extends: [
    './index.js',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended'
  ],
  overrides: [
    {
      files: ['**/*.tsx'],
      rules: {
        'react/prop-types': 'off'
      }
    }
  ],
  plugins: ['@emotion'],
  rules: {
    '@emotion/syntax-preference': ['error', 'string']
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
