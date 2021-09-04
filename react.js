module.exports = {
  extends: [
    './index.js',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended'
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
    '@emotion/syntax-preference': [
      'error',
      'string'
    ]
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
