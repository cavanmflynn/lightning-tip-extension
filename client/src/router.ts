import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*/panel.html',
      name: 'panel',
      component: () => import('./components/pages/panel'),
    },
    {
      path: '*/config.html',
      name: 'config',
      component: () => import('./components/pages/config'),
    },
  ],
});
