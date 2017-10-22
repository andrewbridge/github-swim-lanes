export default {
  isSetup(state) {
    const repo = state.repo;
    return state.isAuthed && repo &&
      repo.user.length > 0 && repo.name.length > 0;
  },
};
