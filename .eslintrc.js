module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:prettier/recommended',
    'plugin:import/recommended'
  ],
  overrides: [
    // override "simple-import-sort" config
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      rules: {
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              // Packages `react` related packages come first.
              ['^react', '^@?\\w'],
              // Internal packages.
              ['^(@|components)(/.*|$)'],
              // Side effect imports.
              ['^\\u0000'],
              // Parent imports. Put `..` last.
              ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
              // Other relative imports. Put same-folder imports and `.` last.
              ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
              // Style imports.
              ['^.+\\.?(css)$']
            ]
          }
        ]
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', 'simple-import-sort'],
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
    'jsx-a11y/no-static-element-interactions': 'off',
    quotes: ['error', 'single'],
    'react/react-in-jsx-scope': 'off',
    semi: ['error', 'never'],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        importOrder: ['^@core/(.*)$', '^@server/(.*)$', '^@ui/(.*)$', '^[./]'],
        importOrderSeparation: true,
        importOrderSortSpecifiers: true,
        printWidth: 100,
        semi: false,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'none'
      }
    ],
    'react-hooks/exhaustive-deps': 'off',
    // Allow circumstances for style modules
    'import/no-extraneous-dependencies': 0,
    // Enforce the use of the shorthand syntax.
    'object-shorthand': 'error',
    'no-console': 'warn'
  }
}
