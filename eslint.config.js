import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      eslintPluginUnicorn.configs['flat/recommended'],
    ],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      // Enforce strict kebab-case for ALL filenames
      'unicorn/filename-case': [
        'error',
        {
          case: 'kebabCase',
        },
      ],
      // Note: No built-in rule for no-default-export in current ESLint/Unicorn version
      // But we'll manually enforce named exports in the codebase
      'unicorn/prevent-abbreviations': 'off', // Often too strict for React
    },
  },
]);
