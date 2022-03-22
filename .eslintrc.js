module.exports = {
  env: {
    jest: true,
    browser: true,
    es2021: true,
  },
  extends: ['airbnb', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['prettier'],
  rules: {
    // === BASE === //
    'func-names': 0,
    'no-console': 'warn',
    'no-nested-ternary': 0,
    'no-underscore-dangle': 0,
    'no-use-before-define': 0,
    'no-unused-vars': [
      'warn',
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: 'res|next|^err',
      },
    ],
    'consistent-return': 0,
    'import/prefer-default-export': 0,
    'import/extensions': 0,

    // === PRETTIER === //
    'prettier/prettier': [
      'error',
      {
        printWidth: 90,
        singleQuote: true,
      },
    ],
  },
};
