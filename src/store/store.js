import Vue from 'vue';
import Vuex from 'vuex';
import http from '@/http';

Vue.use(Vuex);

const httpClient = (store) => {
  Vue.set(store, '$http', http);
};

export default new Vuex.Store({
  plugins: [httpClient],
  state: {
    clients: [],
  },
  mutations: {
    SET_CLIENTS_TO_STATE: (state, clients) => {
      state.clients = clients;
    },
  },
  actions: {
    async GET_CLIENTS_FROM_API({ commit }) {
      const { data } = await this.$http.get('client');
      commit('SET_CLIENTS_TO_STATE', data);
    },
  },
});
