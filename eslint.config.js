import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginSvelte from 'eslint-plugin-svelte';
import eslintConfigPrettier from 'eslint-config-prettier';
import svelteParser from 'svelte-eslint-parser';
import globals from 'globals'; // globals 패키지 사용

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginSvelte.configs['flat/recommended'],
  eslintConfigPrettier,
  {
    languageOptions: {
      globals: {
        ...globals.browser, // fetch, console 등 브라우저 API 허용
        ...globals.node
      },
      parserOptions: {
        extraFileExtensions: ['.svelte']
      }
    }
  },
  {
    files: ['**/*.svelte'],
    languageOptions: {
      parser: svelteParser,
      parserOptions: {
        parser: tseslint.parser
      }
    },
    rules: {
      // 프로젝트 상황에 맞게 너무 엄격한 규칙은 조정 가능합니다.
      'svelte/no-navigation-without-resolve': 'off', // 이 규칙이 불편하다면 off
      'svelte/require-each-key': 'warn' // 에러가 아닌 경고로 변경 가능
    }
  },
  {
    ignores: ['build/', '.svelte-kit/', 'dist/', 'node_modules/', '*.config.js', '*.config.cjs']
  }
);
