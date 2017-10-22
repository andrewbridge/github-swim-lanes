import types from './mutation-types';

export default {
  listIssues({ getters, state, commit }, filtering) {
    if (state.isAuthed && getters.isSetup) {
      console.log(state.gitHub);
      state.gitHub
        .getIssues(state.repo.user, state.repo.name)
        .listIssues(filtering).then((response) => {
          commit(types.SET_ISSUES, response.data);
        });
    }
  },
};
