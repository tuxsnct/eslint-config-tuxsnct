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
    'regexp',
    'json-format'
  ],
  rules: {
    'function-paren-newline': [
      'error',
      'multiline'
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
      0,
      {
        location: 'start',
        terms: [
          'todo',
          'fixme',
          'xxx'
        ]
      }
    ]
  }
}
