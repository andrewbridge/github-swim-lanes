<template>
  <div class="hello">
    <h1>Setup Swim Lanes</h1>
    <input v-model="url" type="url">
    <input-tag placeholder="Add Lane" :tags="lanes"></input-tag>
    <button type="button" @click="complete" :disabled="!canComplete">Complete Setup</button>
  </div>
</template>

<script>
  import { mapMutations, mapGetters } from 'vuex';
  import InputTag from 'vue-input-tag';
  import types from '../store/mutation-types';

  export default {
    components: { InputTag },
    name: 'Setup',
    computed: {
      repo() {
        const matches = this.url.match(/github.com\/([^/]+)\/([^/]+)/);
        if (matches && matches.length === 3) {
          return { user: matches[1], name: matches[2] };
        }
        return null;
      },
      canComplete() {
        return this.repo !== null && this.lanes.length > 0;
      },
      ...mapGetters(['isSetup']),
    },
    data() {
      return {
        url: '',
        lanes: this.$store.state.lanes,
      };
    },
    methods: {
      complete() {
        if (this.canComplete) {
          this.setRepo(this.repo);
          this.setLanes(this.lanes);
          this.$router.push('lanes');
        }
      },
      ...mapMutations({ setRepo: types.SET_REPO, setLanes: types.SET_LANES }),
    },
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
