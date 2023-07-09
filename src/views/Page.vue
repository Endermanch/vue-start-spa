<script setup>
  import {inject, ref, watch} from "vue";

  const pages = inject('$pages')
  const props = defineProps({
    index: String
  });

  // Using ref here, since it's a reactive primitive.
  let page = ref(pages.getPage(props.index));

  // Watch implementation without props (the useRoute() way):
  // watch(() => route.params.index, (index) => {
  //   page.value = pages.getPage(index);
  // });

  watch(() => props.index, (newParams) => {
    page = pages.getPage(newParams);
  });
</script>

<template>
  <div v-if="page" class="container">
    <h1 class="emphasize">{{ page.title }}</h1>
    <p>{{ page.content }}</p>
  </div>
</template>

<style scoped>
  .emphasize {
    color: blue;
  }
</style>