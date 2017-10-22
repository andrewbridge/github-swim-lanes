<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex';
  import Cookie from 'js-cookie';
  import types from './store/mutation-types';

  export default {
    name: 'app',
    created() {
      // Are we auth'd?
      const tokenKey = 'GHSwimLanesToken';
      const tokenCookie = Cookie.get(tokenKey);
      if (localStorage.GHSwimLanesToken || tokenCookie) {
        // Check for a token cookie, transfer and delete it
        if (tokenCookie) {
          localStorage[tokenKey] = tokenCookie;
          Cookie.remove(tokenKey);
        }
        this.token(localStorage[tokenKey]);
        this.authed(true);
        this.initGitHub();
        this.$router.push('setup');
      }
    },
    methods: mapMutations({
      authed: types.SET_AUTH,
      token: types.SET_TOKEN,
      initGitHub: types.INIT_GITHUB,
    }),
  };
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
