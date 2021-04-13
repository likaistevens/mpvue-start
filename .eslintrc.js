// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module',
    parser: "babel-eslint",
  },
  env: {
    browser: false,
    node: true,
    es6: true
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: [
    'plugin:vue/recommended',
    '@vue/standard'
  ],
  // required to lint *.vue files
  plugins: [
    'html',
    'vue'
  ],
  // add your custom rules here
  // 'rules': {
  //   // allow paren-less arrow functions
  //   'arrow-parens': 0,
  //   // allow async-await
  //   'generator-star-spacing': 0,
  //   // allow debugger during development
  //   'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  // },
  globals: {
    App: true,
    Page: true,
    wx: true,
    swan: true,
    tt: true,
    my: true,
    getApp: true,
    getPage: true,
    requirePlugin: true,
    mpvue: true,
    mpvuePlatform: true
  },
  rules: {
    // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'comma-dangle': ['error', 'never'],
    semi: ['error', 'never'],
    'class-methods-use-this': 'off',
    'no-plusplus': 'off',
    'max-len': ['error', { code: 200 }],
    'object-curly-newline': 'off',
    'lines-between-class-members': 'off',
    'no-param-reassign': 'off',
    'import/prefer-default-export': 'off',
    'no-empty-function': 'off',
    'import/no-dynamic-require': 'off',
    'global-require': 'off',
    'import/no-cycle': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'no-unused-vars': 'off'
  }
}
