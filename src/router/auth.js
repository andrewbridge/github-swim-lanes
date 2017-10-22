import store from '../store';

// Authorisation for the app
export default (to, from, next) => {
  if (store.state.isAuthed === false
    && to.name !== 'login') {
    return next({ name: 'login' });
  }
  if (store.state.isAuthed === true
    && store.getters.isSetup === false
    && to.name !== 'setup') {
    return next({ name: 'setup' });
  }
  return next();
};
