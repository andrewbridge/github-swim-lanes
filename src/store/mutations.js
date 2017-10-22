/* eslint-disable no-param-reassign */
import GitHub from 'github-api';
import types from './mutation-types';

export default {
  [types.SET_TOKEN](state, token) {
    state.gitHubToken = token;
  },
  [types.SET_AUTH](state, authState) {
    state.isAuthed = authState;
  },
  [types.INIT_GITHUB](state) {
    if (state.gitHubToken) {
      state.gitHub = new GitHub({ token: state.gitHubToken });
    }
  },
  [types.SET_REPO](state, repoObj) {
    state.repo.user = repoObj.user;
    state.repo.name = repoObj.name;
  },
  [types.SET_ISSUES](state, issueArray) {
    if (Array.isArray(issueArray)) {
      state.issues = issueArray;
    }
  },
};
