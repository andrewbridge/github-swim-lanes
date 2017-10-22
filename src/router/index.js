import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login';
import Setup from '@/components/Setup';
import SwimLanes from '@/components/SwimLanes';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path: '/setup',
      name: 'setup',
      component: Setup,
    },
    {
      path: '/lanes',
      name: 'lanes',
      component: SwimLanes,
    },
  ],
});
