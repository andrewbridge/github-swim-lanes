<template>
  <div class="login">
    <a href="https://github.com/login/oauth/authorize?client_id=721945c08e408de2b4f6&scope=repo">Login to GitHub</a>
  </div>
</template>

<script>
export default {
  name: 'Login',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
