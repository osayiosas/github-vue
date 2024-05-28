<!-- src/App.vue -->
<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/repo-list">Repo List</router-link>
      <router-link to="/error-boundary-test">Error Boundary Test</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { useHead } from '@vueuse/head';

export default defineComponent({
  name: 'App',
  setup() {
    useHead({
      titleTemplate: (title) => (title ? `${title} - My Vue App` : 'My Vue App')
    });
  }
});
</script>

<style>
nav {
  display: flex;
  gap: 1rem;
}
</style>
