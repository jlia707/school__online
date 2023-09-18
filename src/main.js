import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
import store from './store/store';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

const app = new Vue({
  render: (h) => h(App),
  router,
  store,
  vuetify,
});

app.$mount('#app');
