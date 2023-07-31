import { App } from 'vue';
import { createMounter } from '@teambit/vue.dev-services.preview.vue-mounter';

/**
 * Customize a wrapper component for your component compositions (preview).
 */
import Wrapper from '@teambit/vue.examples.my-dummy-wrapper';

/**
 * Initialize your component compositions (preview) via Vue Application APIs
 * before it's mounted. For example, using a router, providing values, etc.
 * @see https://vuejs.org/api/application.html
 */
const initApp = (app: App<Element>) => {
  app.provide('message', 'hello')
};

/**
 * The entry for the app (preview runtime) that renders your component previews.
 * Use the default template or create your own.
 * @see https://bit.dev/docs/vue-env/component-previews#composition-mounter
 */
export default createMounter({
  initApp,
  Wrapper
});
