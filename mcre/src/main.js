import Vue from 'vue';
import getRouter from "@/router";
import store from "@/store";
import vuetify from '@/plugins/vuetify';

Vue.config.productionTip = false;

import App from './App.vue';

new Vue({
  router: getRouter(),
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
