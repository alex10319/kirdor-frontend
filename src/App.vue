<template>
  <router-view v-slot="{ Component }">
    <!-- <transition namescale" mode="out-in"> -->
      <component :is="Component" />
    <!-- </transition> -->
  </router-view>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import router from './router';

const store = useStore();
onMounted(async () => {
  const myToken = localStorage.getItem('token');
  const user = localStorage.getItem('user');
  const authenticated = (localStorage.getItem('isAuthenticated') == 'true');

  if(myToken || user || authenticated){
    try{
      await store.dispatch('verifySession');
    }catch(e:any){
      router.push('/login');
    }
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
