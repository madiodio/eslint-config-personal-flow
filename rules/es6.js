/**
 * @file Common rules (both ES5 and ES6)
 * @author Madiodio <papigaye1@gmail.com>
 */

module.exports = {
  parser: "babel-eslint",
  plugins: ["react", "jsx-a11y", "flowtype"],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    allowImportExportEverywhere: true,
    codeFrame: false
  },
  extends: [
    "eslint:recommended",
    "airbnb",
    "plugin:react/recommended",
    "plugin:flowtype/recommended",
    "prettier",
    "prettier/flowtype",
    "prettier/react"
  ],
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true
    }
  },
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true
  },
  rules: {
    "global-require": 0,
    "linebreak-style": "off",
    "import/first": 0,
    "import/no-extraneous-dependencies": 0,
    "import/prefer-default-export": 0,
    "jsx-a11y/alt-text": 0,
    "jsx-a11y/accessible-emoji": 0,
    "jsx-a11y/label-has-for": [2, { allowChildren: true }],
    "jsx-a11y/anchor-is-valid": 0,
    "no-underscore-dangle": "off",
    "no-unused-vars": 1,
    "no-console": "off",
    "no-unused-expressions": [
      2,
      {
        allowTaggedTemplates: true
      }
    ],
    "prefer-const": "off",
    "react/jsx-filename-extension": "off",
    "react/default-props-match-prop-types": 0,
    "react/display-name": "off",
    "react/no-danger": 0,
    "react/prop-types": 0,
    "react/no-did-mount-set-state": 1,
    "react/no-did-update-set-state": 0,
    "react/no-unescaped-entities": 0,
    "react/no-unused-state": 1,
    "react/prefer-stateless-function": 0,
    strict: "off"
  }
};
