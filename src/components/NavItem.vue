<script setup>
  import {computed, reactive} from "vue";
  import {useRoute} from "vue-router";

  const route = useRoute();
  const props = defineProps({
    page: Object,
    index: Number,
    active: Boolean,
  });

  const activeClasses = reactive({
    active: computed(() => props.active),
    emphasize: computed(() => props.active),
  });
</script>

<template>
  <li>
    <router-link
        class="nav-link"
        :class="activeClasses"
        aria-current="page"
        :to="`/${props.index}`"
        :title="`This link goes to the ${page.link.text} page!`"
    >
      {{ page.link.text }}
    </router-link>
  </li>
</template>

<style scoped>
  .emphasize {
    text-decoration: underline !important;
  }
</style>