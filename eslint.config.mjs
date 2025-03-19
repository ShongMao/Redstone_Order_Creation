import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]
  },
  {
    languageOptions: { globals: globals.browser }
  },
  {
    rules: {
      "no-unused-vars": "error",  // Prevents unused variables
      "eqeqeq": "error",  // Enforces strict equality (=== instead of ==)
      "no-implicit-coercion": "error",  // Prevents implicit type conversions like `!!x`
      "prefer-const": "error",  // Forces use of `const` when variables don’t change
    }

  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
];