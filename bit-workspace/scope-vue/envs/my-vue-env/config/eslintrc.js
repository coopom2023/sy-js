// force bit to recgonize this as dependency
require('@teambit/vue.dev-services.linter.vue-eslint-config')

module.exports = {
  extends: [
    require.resolve('@teambit/vue.dev-services.linter.vue-eslint-config'),
  ],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
    'vue/multi-word-component-names': 0
  },
}
