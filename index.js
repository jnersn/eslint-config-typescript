module.exports = {
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2020,
    "sourceType": "module",
    "project": "./tsconfig.json"
  },
  "plugins": [
    "@typescript-eslint"
  ],
  "rules": {
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/explicit-member-accessibility": ["error", { "accessibility": "no-public" }],
    "@typescript-eslint/member-ordering": "error",
    "@typescript-eslint/naming-convention": "error",
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
    "@typescript-eslint/no-unnecessary-condition": "error",
    "@typescript-eslint/prefer-optional-chain": "error",
    "@typescript-eslint/prefer-readonly": "error",
    "@typescript-eslint/promise-function-async": "error",
    "@typescript-eslint/quotes": ["error", "single"],
    "max-len": ["error", 120],
    "max-lines": ["error", 200]
  },
  "settings": {
    "import/resolver": {
      "typescript": {}
    }
  }
};
