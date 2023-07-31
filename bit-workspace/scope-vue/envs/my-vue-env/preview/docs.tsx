import { App } from 'vue';
import { createDocsTemplate } from '@teambit/vue.dev-services.preview.vue-docs-template';

/**
 * Customize a wrapper component for your component compositions (preview) in docs.
 */
import Wrapper from '@teambit/vue.examples.my-dummy-wrapper';

/**
 * Initialize your component compositions (preview) in docs via Vue Application APIs
 * before it's mounted. For example, using a router, providing values, etc.
 * @see https://vuejs.org/api/application.html
 */
const initApp = (app: App<Element>) => {
  app.provide('message', 'hello')
};

/**
 * Customize the bit documentation template or
 * replace this with one of your own.
 * @see https://bit.dev/docs/vue-env/component-docs#docs-template
 */
export default createDocsTemplate({
  initApp,
  Wrapper
});
