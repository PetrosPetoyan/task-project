import Vue from 'vue';
import VueRouter from 'vue-router';
import App from "./App.vue";

import AppRoutes from './modules/layout/routes';

Vue.use(VueRouter)
let router = new VueRouter({
  mode: 'history',
  routes: AppRoutes,
})


Vue.config.productionTip = false
document.title = 'Test Project'

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
