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
      refreshUserData({commit}: { commit: Commit}){
        return new Promise((resolve,reject)=>{
          axiosInstance.post('/refreshUserData').then((response: any)=>{
            const user = response.data.user;
            commit('setUser',user);
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
      verifySession({commit}: {commit: Commit}){
        return new Promise((resolve,reject)=>{
          const token = localStorage.getItem('token');
          const user = localStorage.getItem('user');
          const isAuthenticated = localStorage.getItem('isAuthenticated');

          // token -> hay token?
          // !token -> no hay token?
          if(!token || !user || !isAuthenticated){
            commit('clearAuth'); // <- le borra la sesión!
            reject();
          }

          axiosInstance.post('/verifyToken').then(()=>{
            resolve();
          }).catch((e) => {
            commit('clearAuth');
            reject(new Error('Token inválido, hackea a tu vieja pvto.'));
          })
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
        return new Promise((resolve,reject) => {
          axiosInstance.post('/uploadPublication',data).then((response:any)=>{
            const publication = response.data.publication;
            resolve(publication);
          }).catch((e)=>reject(e));
        });
      },
      createTeam({commit}: { commit: Commit }, data: FormData){
        return new Promise((resolve,reject) => {
          axiosInstance.post('/createTeam',data).then(()=>{
            resolve();
          }).catch((e)=>reject(e));
        });
      }
}

export default actions;