import Vue from 'vue';
import Vuex from 'vuex';
import http from '@/http';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    clients: [],
  },
  mutations: {
    SET_CLIENTS_TO_STATE: (state, clients) => {
      state.clients = clients;
    },
  },
  actions: {
    GET_CLIENTS_FROM_API({ commit }) {
      return http.get('client')
        .then((clients) => {
          commit('SET_CLIENTS_TO_STATE', clients.data);
          return clients;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
  },
});
