/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    jest: true,
    node: true,
  },
  parser: "@babel/eslint-parser",
  parserOptions: {
    allowImportExportEverywhere: true,
  },
  extends: ["airbnb", "prettier", "prettier/react"],
  plugins: ["react-hooks", "header"],
  rules: {
    // Ignore certain webpack alias because it can't be resolved
    "import/no-unresolved": [ERROR, { ignore: ["^@theme", "^@docusaurus", "^@generated"] }],
    "import/extensions": OFF,
    "react/jsx-closing-bracket-location": OFF, // Conflicts with Prettier.
    "react/jsx-filename-extension": OFF,
    "react-hooks/rules-of-hooks": ERROR,
    "react/prop-types": OFF, // PropTypes aren't used much these days.
    "header/header": OFF,
    camelcase: OFF,
  },
};
