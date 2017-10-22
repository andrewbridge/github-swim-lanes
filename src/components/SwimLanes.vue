<template>
  <div class="hello">
    <h1>Issues</h1>
    <input type="search" v-model="search">
    <div class="swim-lanes">
      <div class="lane" v-for="lane in lanes">
        <h2>{{lane}}</h2>
        <ul>
          <li v-for="issue in lanedIssues[lane]">
            <p><a :href="issue.html_url" target="_blank">{{issue.title}}</a></p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import quickspot from 'quick-spot';
  import { mapState, mapActions } from 'vuex';

  export default {
    name: 'SwimLanes',
    data() {
      return {
        qsStore: quickspot.datastore({
          data: [],
          key_value: 'number',
          search_on: ['url',
            'number',
            'title',
            'body',
            'user.login',
            'assignee.login',
            'milestone.title'],
        }),
        search: '',
        lastSearch: '',
      };
    },
    computed: {
      lanedIssues() {
        const lanedIssues = {};
        this.lanes
          .forEach((lane) => {
            lanedIssues[lane] = this.filteredIssues
              .filter(issue => issue.labels
                .some(label => label.name === lane));
          });
        return lanedIssues;
      },
      filteredIssues() {
        return this.qsStore.store.results || [];
      },
      ...mapState(['issues', 'lanes']),
    },
    watch: {
      issues(list) {
        if (this.qsStore) {
          this.qsStore.store.fill(list);
          this.qsStore.store.search(this.search);
        }
      },
      search(query) {
        if (this.qsStore) {
          this.qsStore.store.search(query);
        }
      },
    },
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

  .swim-lanes {
    display: flex;
  }

  .swim-lanes .lane {
    width: 100%;
  }
</style>
