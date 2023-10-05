import { createStore } from 'vuex';
import actions from './actions';
import mutations from './mutations';
import { RootState } from './types/state';

const initialUser = localStorage.getItem('user');
const initialIsAuthenticated = (localStorage.getItem('isAuthenticated') == 'true');
const initialToken = localStorage.getItem('token');

export default createStore({
  state: {
    user: initialUser ? JSON.parse(initialUser) : null,
    isAuthenticated: initialIsAuthenticated,
    token: initialToken ? initialToken : null
  },
  getters: {
    user: (state: RootState) => state.user,
    token: (state: RootState) => state.token,
    isAuthenticated: (state: RootState) => state.isAuthenticated
  },
  mutations,
  actions
})
