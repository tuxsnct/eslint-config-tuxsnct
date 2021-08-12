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
  ]
}
