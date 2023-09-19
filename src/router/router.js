import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from '../Pages/MainPage.vue';
import ClientPage from '../Pages/ClientPage.vue';
import EditClientPage from '../Pages/EditClientPage.vue';
import CreateClientPage from '../Pages/CreateClientPage.vue';

Vue.use(VueRouter);

const routes = [
  { name: 'main', component: MainPage, path: '/' },
  { name: 'client', component: ClientPage, path: '/client/:id' },
  {
    name: 'editClient',
    component: EditClientPage,
    path: '/client/:id/edit',
    props: true,
  },
  {
    name: 'createClient',
    component: CreateClientPage,
    path: '/client/create',
    props: true,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
