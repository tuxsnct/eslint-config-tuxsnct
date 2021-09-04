module.exports = {
  env: {
    es2021: true,
    node: true
  },
  extends: [
    'eslint:all',
    'standard',
    'plugin:import/recommended',
    'plugin:regexp/recommended',
    'plugin:yml/standard'
  ],
  overrides: [
    {
      files: [
        '*.yaml',
        '*.yml'
      ],
      parser: 'yaml-eslint-parser'
    }
  ],
  plugins: [
    'json-format',
    'regexp',
    'sort-keys-fix'
  ],
  rules: {
    'function-call-argument-newline': [
      'error',
      'consistent'
    ],
    'function-paren-newline': [
      'error',
      'multiline'
    ],
    'import/order': [
      'error',
      { alphabetize: { order: 'asc' } }
    ],
    indent: [
      'error',
      2
    ],
    'max-len': [
      'error',
      { code: 120 }
    ],
    'no-magic-numbers': 'off',
    'no-ternary': 'off',
    'no-warning-comments': [
      'off',
      {
        location: 'start',
        terms: [
          'todo',
          'fixme'
        ]
      }
    ],
    'sort-imports': 'off',
    'sort-keys-fix/sort-keys-fix': 'error'
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts']
      }
    }
  }
}
