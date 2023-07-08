<template>
  <Navbar
    :pages="pages"
    :current="activePage"
  ></Navbar>

  <router-view></router-view>

<!--  <page-->
<!--    :page="pages[activePage]"-->
<!--  ></page>-->

<!--  <CreatePage-->
<!--    @page-created="pageCreated"-->
<!--  ></CreatePage>-->
</template>

<script>
  import Page from './components/Page.vue';
  import Navbar from './components/Navbar.vue';
  import CreatePage from "@/components/CreatePage.vue";

  export default {
    components: {
      CreatePage,
      Page,
      Navbar
    },
    methods: {
      async getPages() {
        let response = await fetch('pages.json');
        this.pages = await response.json();
      },
      pageCreated(page) {
        this.pages.push(page);
        console.log(page);
      }
    },
    created() {
      this.getPages();

      this.$bus.$on('navbarLinkActivated', (index) => {
        this.activePage = index;
      })
    },
    data() {
      return {
        activePage: 0,
        pages: []
      }
    }
  }
</script>