<script setup> 
import { RouterLink, RouterView } from "vue-router";
import NavigationBar from './components/NavigationBarComponent.vue';
</script>

<template>
  <div>
    <NavigationBar />
    <RouterView />
  </div>
</template>