<script setup>
  import {reactive, inject} from "vue";
  import {useRouter} from "vue-router";

  const router = useRouter();
  const pages = inject('$pages');

  const goToPage = (index) => {
    router.push(`/pages/${index}/edit`);
  }
</script>

<template>
  <h4>Pages</h4>
  <div class="text-end">
    <router-link
        to="/pages/create"
        class="btn btn-success btn-sm"
    >New Page</router-link>
  </div>

  <table class="table table-hover">
    <thead>
      <tr>
        <th scope="col">Title</th>
        <th scope="col">Link Text</th>
        <th scope="col">Is Published</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(page, index) in pages.getPages()"
        :key="index"
        @click="goToPage(index)"
      >
        <td>{{page.title}}</td>
        <td>{{page.link.text}}</td>
        <td>{{page.published ? 'yes' : 'no'}}</td>
      </tr>

    </tbody>

  </table>
</template>

<style scoped>
  .table.table-hover tr:hover {
    cursor: pointer;
  }
</style>