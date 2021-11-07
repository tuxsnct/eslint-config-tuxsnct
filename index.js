module.exports = {
  env: {
    es2020: true,
    node: true
  },
  extends: [
    'eslint:all',
    'standard',
    'plugin:sonarjs/recommended',
    'plugin:unicorn/recommended',
    'plugin:import/recommended',
    'plugin:security/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:regexp/recommended',
    'plugin:toml/standard',
    'plugin:yml/standard'
  ],
  overrides: [
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
    'sonarjs',
    'sort-keys-fix',
    'no-secrets'
  ],
  rules: {
    'array-element-newline': ['error', 'consistent'],
    'function-call-argument-newline': ['error', 'consistent'],
    'function-paren-newline': ['error', 'multiline'],
    'import/order': ['error', { alphabetize: { order: 'asc' } }],
    indent: ['error', 2],
    'max-len': ['error', { code: 120 }],
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
        extensions: ['.ts']
      }
    }
  }
}
