<template>
  <router-view v-slot="{ Component }">
    <!-- <transition namescale" mode="out-in"> -->
      <component :is="Component" />
    <!-- </transition> -->
  </router-view>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {
  }
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
