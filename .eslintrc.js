module.exports = {
  "env": {
    "browser": true,
    "es6": true,
  },
  "plugins": [
    "react",
    "jsx-a11y"
  ],
  "globals": {
    "graphql": false,
  },
  "extends": [
    "plugin:jsx-a11y/recommended"
  ],
  "parserOptions": {
    "sourceType": "module",
    "ecmaFeatures": {
      "ecmaVersion": 2018,
      "jsx": true,
    },
  }
}
