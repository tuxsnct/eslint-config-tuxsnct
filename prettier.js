module.exports = {
  extends: [
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
