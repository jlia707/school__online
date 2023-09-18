import Vue from 'vue';
import http from '@/http';
import App from './App.vue';
import router from './router/router';
import store from './store/store';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;
Vue.prototype.$http = http;

const app = new Vue({
  render: (h) => h(App),
  router,
  store,
  vuetify,
});

app.$mount('#app');
