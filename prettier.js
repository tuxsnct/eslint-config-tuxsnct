module.exports = {
  extends: [
    './index.js',
    'prettier',
    'plugin:yml/prettier'
  ],
  overrides: [
    {
      extends: ['prettier/@typescript-eslint'],
      files: ['*.ts', '*.tsx']
    }
  ]
}
