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
    redirect: '/home/options',
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
        path: 'bank',
        component: () => import(/* webpackChunkName: "bank" */ '@/components/Bank.vue'),
      },
      {
        path: 'upi',
        component: () => import(/* webpackChunkName: "upi" */ '@/components/Upi.vue'),
      },
    ],
  },
  {
    path: '/kyc1',
    name: 'Kyc1',
    component: () => import(/* webpackChunkName: "kyc1" */ '@/views/Kyc1.vue'),
  },
  {
    path: '/kyc2',
    name: 'Kyc2',
    component: () => import(/* webpackChunkName: "kyc2" */ '@/views/Kyc2.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
