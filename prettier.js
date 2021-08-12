module.exports = {
  extends: [
    './index.js',
    'prettier'
  ],
  overrides: [
    {
      extends: ['prettier/@typescript-eslint'],
      files: [
        '*.ts',
        '*.tsx'
      ]
    }
  ]
}
