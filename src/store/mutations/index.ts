import { RootState, User } from '../types/state';

const mutations = {
    setUser(state: RootState,user: User){
      state.user = user;
      localStorage.setItem('user', JSON.stringify(user));
    },
    setIsAuthenticated(state: RootState,isAuthenticated: boolean){
      state.isAuthenticated = isAuthenticated;
      localStorage.setItem('isAuthenticated', JSON.stringify(isAuthenticated));
    },
    setToken(state: RootState,token: string){
      state.token = token;
      localStorage.setItem('token', token);
    },
    clearAuth(state: RootState) {
      state.token = null;
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      localStorage.removeItem('isAuthenticated');
    }
}

export default mutations;