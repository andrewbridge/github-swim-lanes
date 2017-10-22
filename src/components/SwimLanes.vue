<template>
  <div class="hello">
    <h1>Issues</h1>
    <ul>
      <li v-for="issue in issues">{{issue}}</li>
    </ul>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex';

  export default {
    name: 'SwimLanes',
    computed: mapState(['issues']),
    created() {
      this.listIssues();
    },
    methods: mapActions(['listIssues']),
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
