import Vue from 'vue';
import { Picker, DatetimePicker } from 'vant';
import App from './App.vue';
import router from './router';
import './global.less';

Vue.config.productionTip = false;

Vue.prototype.$bus = new Vue();
Vue.prototype.$toast = (config) => {
  Vue.prototype.$bus.$emit('show:toast', config);
};

Vue.use(Picker);
Vue.use(DatetimePicker);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
