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

const store = useStore();
onMounted(async ()=>{
  await store.dispatch('verifySession');
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
