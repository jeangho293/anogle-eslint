const config = {
  parser: "@typescript-eslint/parser",
  plugins: ["import", "@typescript-eslint", "prettier"],
  extends: [
    "airbnb-base",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
  },
  env: {
    browser: true,
    node: true,
  },
  ignorePatterns: ["node_modules/"],
  rules: {
    "@typescript-eslint/no-empty-function": "off", // Allow empty functions
    "@typescript-eslint/no-empty-interface": "off", // Allow empty interfaces
    "@typescript-eslint/no-explicit-any": "off", // Allow 'any' type
    "@typescript-eslint/no-unused-vars": "off",
    "no-console": "off",
    "max-classes-per-file": "off",
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "prettier/prettier": "error",
    "no-use-before-define": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};

export default config;
