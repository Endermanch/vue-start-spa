<script setup>
  import {inject} from "vue";
  import {useRouter} from "vue-router";

  const props = defineProps({
    index: String
  });

  const router = useRouter();

  const pages = inject('$pages');
  const glbus = inject('$bus');

  let page = pages.getPage(props.index);

  function goToPageList() {
    router.push('/pages');
  }

  function submitForm() {
    pages.editPage(props.index, page);

    glbus.$emit('page-updated', {
      index: props.index,
      page: page
    });

    goToPageList();
  }

  function deletePage() {
    pages.deletePage(props.index);

    glbus.$emit('page-deleted', {
      index: props.index
    });

    goToPageList();
  }
</script>

<template>
  <h4>Edit Page</h4>

  <form action="" class="container mb-3">
    <div class="row">
      <div class="col-md-8">
        <div class="mb-3">
          <label for="" class="form-label">
            Page Title
          </label>
          <input
              type="text"
              class="form-control"
              v-model="page.title"
          />
        </div>
        <div class="mb-3">
          <label for="" class="form-label">
            Content
          </label>
          <textarea
              type="text"
              class="form-control"
              rows="5"
              v-model="page.content"
          />
        </div>
        <div class="mb-3">
          <button
              class="btn btn-success me-2"
              @click.prevent="submitForm"
          >Edit</button>
          <button
              class="btn btn-secondary me-2"
              @click.prevent="goToPageList"
          >Cancel</button>
          <button
              class="btn btn-danger"
              @click.prevent="deletePage"
          >Delete</button>
        </div>
      </div>
      <div class="col">
        <div class="mb-3">
          <label for="" class="form-label">
            Link Text
          </label>
          <input
              type="text"
              class="form-control"
              v-model="page.link.text"
          />
        </div>
        <div class="row mb-3">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" v-model="page.published">
            <label class="form-check-label" for="gridCheck1">
              Published
            </label>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<style scoped>

</style>