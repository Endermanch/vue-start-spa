<script setup>
import {computed, inject, reactive, watch} from "vue";
import {cloneDeep} from "lodash";
import {useRouter} from "vue-router";

  const router = useRouter();
  const emit = defineEmits([
      'page-created'
  ]);

  const pages = inject('$pages');
  const input = reactive({
    title: '',
    content: '',
    link: {
      text: '',
      url: ''
    },
    published: false
  });

  const formValid = computed(() => isFormValid());

  function isFormValid() {
    return !!input.title && !!input.content && !!input.link.text && !!input.link.url;
  }

  function submitForm() {
    if (!isFormValid())
      return alert('Please fill in the form!');

    pages.addPage(input);

    emit('page-created', cloneDeep(input));
    router.push('/pages');
  }

  watch(() => cloneDeep(input), (value, oldValue) => {
    if (input.link.text === oldValue.title)
      input.link.text = value.title;
  });
</script>

<template>
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
            v-model="input.title"
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
            v-model="input.content"
          />
        </div>
        <div class="mb-3">
          <button
            class="btn btn-success"
            :disabled="!formValid"
            @click.prevent="submitForm"
          >Create Page</button>
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
            v-model="input.link.text"
          />
        </div>
        <div class="mb-3">
          <label for="" class="form-label">
            Link URL
          </label>
          <input
            type="text"
            class="form-control"
            v-model="input.link.url"
          />
        </div>
        <div class="mb-3">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" v-model="input.published">
            <label class="form-check-label" for="gridCheck1">
              Published (show on the navigation bar)
            </label>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<style scoped>

</style>