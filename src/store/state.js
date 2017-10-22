const userRepo = localStorage.GHSwimLanesRepo ? JSON.parse(localStorage.GHSwimLanesRepo) : null;
const userLanes = localStorage.GHSwimLanesLanes ? JSON.parse(localStorage.GHSwimLanesLanes) : null;

export default {
  gitHubToken: null,
  isAuthed: false,
  gitHub: null,
  issues: [],
  repo: userRepo || { user: '', name: '' },
  lanes: userLanes || ['To Do', 'In Progress', 'Code Review', 'QA', 'Done'],
};
