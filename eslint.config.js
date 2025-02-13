import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import prettierConfig from 'eslint-config-prettier';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import eslintPluginImport from 'eslint-plugin-import';

export default [
  { ignores: ['dist', '*.config.js'] },

  // Базовые настройки
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        node: {
          extensions: ['.jsx', '.js', '.json'],
          moduleDirectory: ['node_modules', 'src/'],
        },
        alias: {
          map: [
            ['@', './src'],
            ['@/components', './src/components'],
          ],
          extensions: ['.jsx', '.js', '.json'],
        },
      },
    },
  },

  // Плагины и правила
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
      import: eslintPluginImport,
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      // Сортировка импортов
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^react', '^@?\\w', '^\\u0000'],
            ['^@/'],
            ['^\\.\\.(?!/?$)', '^\\.\\./?$', '^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
            ['\\.(css|scss|sass|less|module\\.scss)$'],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',

      // Правила для импортов
      'import/first': 'error',
      'import/no-duplicates': 'error',
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          js: 'never',
          jsx: 'never',
        },
      ],
      'import/no-unresolved': [
        'error',
        {
          ignore: ['^@/'],
          caseSensitive: false,
        },
      ],

      // React правила
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      // Дополнительные правила
      'no-unused-vars': 'warn',
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
      'jsx-quotes': ['error', 'prefer-double'],
      'arrow-body-style': 'off',
      'prefer-const': 'error',
      'no-duplicate-imports': 'error',
    },
  },

  js.configs.recommended,
  prettierConfig,
];
