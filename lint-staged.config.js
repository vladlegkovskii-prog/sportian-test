export default {
  // TypeScript and TSX files: lint, format, and run related tests
  '*.{ts,tsx}': [
    'eslint --fix --no-warn-ignored --max-warnings=0',
    'prettier --write',
    // 'vitest related --run',
  ],

  // JavaScript and JSX files: lint and format
  // Note: Uses function to filter out ignored files to prevent SIGKILL issues
  '*.{js,jsx,mjs,cjs}': (filenames) => [
    `eslint --fix --no-warn-ignored --max-warnings=0 ${filenames.join(' ')}`,
    `prettier --write ${filenames.join(' ')}`,
  ],

  // JSON, YAML, Markdown, and other config files: format only
  '*.{json,yaml,yml,md,css,html}': ['prettier --write'],
};
