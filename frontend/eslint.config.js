import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "arrow-body-style": "off",
      "import/prefer-default-export": "off",
      "jsx-a11y/no-noninteractive-element-interactions": "off",
      "jsx-a11y/click-events-have-key-events": "off",
      "linebreak-style": "off",
      "lines-between-class-members": "off",
      "max-len": ["warn", { code: 150 }],
      "no-console": "off",
      "no-unused-expressions": "off",
      "no-unused-vars": "warn",
      "object-curly-newline": "off",
      "react/function-component-definition": "off",
      "react/jsx-filename-extension": "off",
      "react/jsx-props-no-spreading": "off",
      "react/require-default-props": "off",
      "react/jsx-no-constructed-context-values": "off",
      "react/no-array-index-key": "off",
      "react/jsx-no-useless-fragment": "off",
      "react/button-has-type": "off",
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          js: "never",
          jsx: "never",
          ts: "never",
          tsx: "never",
          mjs: "never",
        },
      ],
    },
  }
);