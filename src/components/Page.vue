<script setup>
  import {useRoute} from "vue-router";
  import {inject} from "vue";

  const pages = inject('$pages')
  const route = useRoute();
  const props = defineProps({
    page: Object
  });

  console.log(route.params);

  props.page = pages.getPage(route.params.index);
</script>

<template>
  <div v-if="page" class="container">
    <h1>{{ page.title }}</h1>
    <p>{{ page.content }}</p>
  </div>
</template>

<style scoped>

</style>