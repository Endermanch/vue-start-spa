<script setup>
  import NavItem from './NavItem.vue';
  import {computed, reactive} from "vue";

  const props = defineProps({
    pages: Array,
    current: Number
  })

  const state = reactive({
    theme: 'light'
  })

  const published = computed(() => {
    return props.pages.filter(p => p.published);
  })

  function changeTheme() {
    let theme = 'light';

    if (state.theme === 'light')
      theme = 'dark';

    state.theme = theme;
    storeTheme();
  }

  function storeTheme() {
    localStorage.setItem('theme', state.theme);
  }

  function getTheme() {
    let theme = localStorage.getItem('theme');

    if (theme)
      state.theme = theme;
  }

  function main() {
    getTheme();
  }

  // Runs before created().
  main();
</script>

<template>
  <nav
    :class="[`navbar-${state.theme}`, `bg-${state.theme}`, 'navbar', 'navbar-expand-lg']"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Vue Project</a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <NavItem
            v-for="(page, index) in published" class="nav-item" :key="index"
            :page="page"
            :index="index"
            :active="current === index"
          >
          </NavItem>
      </ul>

      <form class="d-flex">
        <button
          class="btn btn-primary"
          @click.prevent="changeTheme()"
        >
          Toggle
        </button>
      </form>
    </div>
  </nav>
</template>

<style scoped>

</style>