module.exports = {
  proseWrap: 'always',
  singleQuote: true,
  trailingComma: 'all',
  semi: false,
  overrides: [
    {
      files: 'packages/@petProj/angular/**',
      options: {
        semi: true,
      },
    },
  ],
}
