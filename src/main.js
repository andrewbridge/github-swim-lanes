// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Cookie from 'js-cookie';
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import types from './store/mutation-types';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});

// Are we auth'd?
const tokenKey = 'GHSwimLanesToken';
const tokenCookie = Cookie.get(tokenKey);
if (localStorage.GHSwimLanesToken || tokenCookie) {
  // Check for a token cookie, transfer and delete it
  if (tokenCookie) {
    localStorage[tokenKey] = tokenCookie;
    Cookie.remove(tokenKey);
  }
  store.commit(types.SET_TOKEN, localStorage[tokenKey]);
  store.commit(types.SET_AUTH, true);
  store.commit(types.INIT_GITHUB);
  router.push('lanes');
}

