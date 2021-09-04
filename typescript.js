module.exports = {
  overrides: [
    {
      extends: [
        './index.js',
        'plugin:import/typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking'
      ],
      files: [
        '*.ts',
        '*.tsx'
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        ecmaVersion: 2021,
        sourceType: 'module'
      },
      plugins: ['@typescript-eslint'],
      rules: {
        'no-undef': 'off',
        'no-use-before-define': 'off'
      }
    }
  ]
}
