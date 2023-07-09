<template>
  <Navbar />
  <div class="p-3">
    <router-view />
  </div>
</template>

<script setup>
  import Navbar from './components/Navbar.vue';
</script>