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
    localStorage.GHSwimLanesRepo = JSON.stringify(state.repo);
  },
  [types.SET_LANES](state, lanes) {
    state.lanes = lanes;
    localStorage.GHSwimLanesLanes = JSON.stringify(state.lanes);
  },
  [types.SET_ISSUES](state, issueArray) {
    if (Array.isArray(issueArray)) {
      state.issues = issueArray;
    }
  },
  [types.ADD_ISSUES](state, issueArray) {
    if (Array.isArray(issueArray)) {
      issueArray.forEach((newIssue) => {
        const issuePos = state.issues
          .reduce((indexOf, issue, key) => {
            if (issue.number === newIssue.number) {
              return key;
            }
            return indexOf;
          }, -1);
        if (issuePos > -1) {
          state.issues[issuePos] = newIssue;
        } else {
          state.issues.push(newIssue);
        }
      });
    }
  },
};
