import types from './mutation-types';

export default {
  listIssues({ getters, state, commit }) {
    if (state.isAuthed && getters.isSetup) {
      const issues = state.gitHub.getIssues(state.repo.user, state.repo.name);
      state.lanes.forEach(lane => issues
        .listIssues({ labels: lane })
        .then(response => commit(types.ADD_ISSUES, response.data)));
    }
  },
};
