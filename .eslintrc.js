module.exports = {
  env: {
    node: true,
    commonjs: true,
    es2020: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:node/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    "no-var": "error",
    "no-unreachable": "warn",
    "no-console": "error",
    "prefer-const": "error",
    "prefer-template": "error",
    "arrow-body-style": ["error", "as-needed"],
    "no-duplicate-imports": ["error"],
    "object-shorthand": ["error"],
  },
};
