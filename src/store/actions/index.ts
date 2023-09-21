import { Commit } from 'vuex';
import { Login } from '../types/state';
import axiosInstance from '@/axiosConfig';

const actions = {
    login({ commit }: { commit: Commit },data:Login){
        return new Promise((resolve,reject)=>{
          axiosInstance.post('/login',data).then((response: any)=>{
            const user = response.data.user;
            commit('setToken',user.token);
            commit('setUser',user);
            commit('setIsAuthenticated',true);
            resolve(user);
          }).catch((e) => reject(e));
        });
      },
      logout({commit}: { commit: Commit }){
        return new Promise((resolve,reject)=>{
          commit('clearAuth');
          resolve();
        });
      },
      register({commit}: { commit: Commit }, data:Object){
        return new Promise((resolve,reject) => {
          axiosInstance.post('/register',data).then(() => {
            resolve();
          }).catch((e) => reject(e));
        });
      },
      uploadPublication({commit}: { commit: Commit }, data: FormData){
        return new Promise((resolve,reject)=>{
          axiosInstance.post('/uploadPublication',data).then((response:any)=>{
            const publication = response.data.publication;
            resolve(publication);
          }).catch((e)=>reject(e));
        });
      }
}

export default actions;