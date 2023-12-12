module.exports = {
    env: { browser: true, es2020: true },
    extends: [
      'eslint:recommended', 
      'plugin:@typescript-eslint/recommended',
      'plugin:react-hooks/recommended'
      // 'plugin:react/recommended'
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint','react', 'prettier','react-refresh'],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },
      'import/resolver': {
        typescript: {},
      },
    },
    rules: {
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    }
}
