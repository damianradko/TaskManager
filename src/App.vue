<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Tasks from './views/TasksView.vue'
</script>

<template>
  <header>

    <div class="wrapper">
      <nav>
        <!-- <RouterLink to="/">Home</RouterLink> -->
        <Tasks></Tasks>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>

</style>
