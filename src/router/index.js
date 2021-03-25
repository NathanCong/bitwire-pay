import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/Login.vue'),
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
    children: [
      {
        path: 'options',
        component: () => import(/* webpackChunkName: "options" */ '@/components/Options.vue'),
      },
      {
        path: 'cards',
        component: () => import(/* webpackChunkName: "cards" */ '@/components/Cards.vue'),
      },
      {
        path: 'wallet',
        component: () => import(/* webpackChunkName: "wallet" */ '@/components/Wallet.vue'),
      },
      {
        path: 'wallet',
        component: () => import(/* webpackChunkName: "wallet" */ '@/components/Wallet.vue'),
      },
      {
        path: 'bank',
        component: () => import(/* webpackChunkName: "bank" */ '@/components/Bank.vue'),
      },
      {
        path: 'upi',
        component: () => import(/* webpackChunkName: "upi" */ '@/components/Upi.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
