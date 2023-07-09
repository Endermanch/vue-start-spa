<script setup>
  import {computed, reactive} from "vue";
  import {useRoute} from "vue-router";

  const route = useRoute();
  const props = defineProps({
    page: Object,
    index: Number
  });
</script>

<template>
  <li>
    <router-link
        :to="`/${props.index}`"
        class="nav-link"
        active-class="active"
        aria-current="page"
        :title="`This link goes to the ${page.link.text} page!`"
    >
      {{ page.link.text }}
    </router-link>
  </li>
</template>

<style scoped>

</style>