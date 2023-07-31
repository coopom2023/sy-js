/**
 * Modify this file to change webpack config or add a deployment
 * for your vue application.
 *
 * @see https://bit.dev/docs/apps/vue-app-build#modify-webpack-configuration
 * @see https://bit.dev/docs/apps/vue-app-deployment#use-a-deployer
 */

/** @type {import("@teambit/vue.apps.vue-app-types").VueAppOptions} */
module.exports.default = {
  name: "vue-app-app",
  entry: require.resolve("./vue-app.root"),
};
