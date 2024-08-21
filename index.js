module.exports = {
  extends: [
    'eslint:recommended',
    'standard',
    'plugin:unicorn/recommended',
    'plugin:import/recommended',
    'plugin:security/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:regexp/recommended',
    'plugin:jsonc/recommended-with-json',
    'plugin:toml/standard',
    'plugin:yml/standard'
  ],
  overrides: [
    {
      files: ['*.json', '*.json5', '*.jsonc'],
      parser: 'jsonc-eslint-parser'
    },
    {
      files: ['*.toml'],
      parser: 'toml-eslint-parser'
    },
    {
      files: ['*.yaml', '*.yml'],
      parser: 'yaml-eslint-parser'
    }
  ],
  plugins: [
    'json-format',
    'regexp',
    'security',
    'sort-keys-fix',
    'no-secrets'
  ],
  rules: {
    'array-element-newline': ['error', 'consistent'],
    'capitalized-comments': 0,
    'function-call-argument-newline': ['error', 'consistent'],
    'function-paren-newline': ['error', 'consistent'],
    'import/order': ['error', { alphabetize: { order: 'asc' } }],
    indent: ['error', 2],
    'max-len': ['error', { code: 120 }],
    'multiline-comment-style': 0,
    'no-magic-numbers': 'off',
    'no-secrets/no-secrets': 'error',
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
        extensions: ['.ts', '.tsx']
      }
    }
  }
}
