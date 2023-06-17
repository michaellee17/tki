const { off } = require("bootstrap/js/dist/dom/event-handler");

module.exports = {
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:vue/vue3-essential', // This option doesn't impose formatting rules
    // 'plugin:vue/vue3-strongly-recommended', // This option imposes formatting rules on your code to improve readability 
  ],
  rules: {
      "vue/singleline-html-element-content-newline": 'off',
      "vue/max-attributes-per-line": ["error", {
        "singleline": {
          "max": 4
        },      
        "multiline": {
          "max": 4
        }
      }],
      "vue/html-closing-bracket-newline": ["error", {
        "singleline": "never",
        "multiline": "never"
      }]
  }
}