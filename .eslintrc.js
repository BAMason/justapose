module.exports = {
  extends: [
    'ryansobol/browser',
    'ryansobol/es6',
    'ryansobol/jquery',
    'ryansobol/materialize',
    'ryansobol/mocha',
    'ryansobol/node'
  ],
  rules: {
    "quotes": ["warn", "backtick"],
    "no-plusplus": 0,
    "no-undefined": 0,
    "max-statements": ["error",15,{"ignoreTopLevelFunctions": true}],
    "max-len": ["error", { "ignoreComments": true, "ignoreTrailingComments": true, "ignoreUrls": true }],
    "no-console": ["error", { "allow": ["warn", "error"] }],
    "newline-after-var": "off",
    "no-multiple-empty-lines": "off", // using because eslint broke after 7.3.0
    "one-var-declaration-per-line": ["error", "initializations"],
    "one-var": ["error", { "initialized": "never" }],
    "no-unused-expressions": ["error", { "allowTernary": true }],
    "max-params": ["error", 4],
    "comma-dangle": ["error", "always-multiline"],
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
};
