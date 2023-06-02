<template>
  <layout-default>
    <div class="container">
      <div class="blog-breadcrumb d-flex justify-content-between align-items-center">
        <Breadcrumb />
        <button
          class="float-end d-block bg-transparent d-md-none btn-link btn text-decoration-none"
          @click="
            showFilterMenu = !showFilterMenu;
            $store.commit('toggleModal', 'filter');
          "
        >
          <font-awesome-icon class="fa icon" :icon="['fas', 'align-left']" />
        </button>
      </div>
      <div class="row row-blog">
        <div class="col-sm-12 col-lg-8  blog-post-list">
          <BlogCard v-for="blog in blogs" :key="blog" v-bind="blog" />
          <div class="blog-pagination d-flex align-items-start">
            <pagination-buttons
              class="my-2"
              v-if="numberOfItems / itemsPerPage > 1"
              :pageNumbers="numberOfItems / itemsPerPage"
              :currentPage="
                $route.params.pageNo === undefined
                  ? currentPage
                  : parseInt($route.params.pageNo)
              "
            ></pagination-buttons>
          </div>
        </div>
        <div
          class="col-sm-12 col-lg-4 blog-list ps-md-5 filter-mobile d-none d-md-block"
          :class="{ active: filterMenuState }"
        >
          <BlogWidgets />
        </div>
      </div>
    </div>
  </layout-default>
</template>

<script>
import BlogCard from "../../components/molecules/Blog/BlogCard.vue";
import LayoutDefault from "../../components/organisms/LayoutDefault/LayoutDefault.vue";
import Breadcrumb from "../../components/atoms/Breadcrumb/Breadcrumb.vue";
import PaginationButtons from "../../components/atoms/PaginationButtons/PaginationButtons.vue";
import BlogWidgets from "../../components/molecules/Blog/BlogWidgets.vue";

import { blogs } from "../../data/blogs.json";
export default {
  created() {
    document.title = "Blogs - iBid";
  },
  mounted() {
    this.$store.commit("setLocation", [
      { title: "Blog List", location: "/blog-list" },
    ]);
  },
  components: {
    BlogCard,
    LayoutDefault,
    Breadcrumb,
    PaginationButtons,
    BlogWidgets,
  },
  data() {
    return {
      blogs,
      numberOfItems: 15,
      itemsPerPage: 5,
      currentPage: 1,
      test: "",
      selectedValue: "",
      layout: "Grid",
      showFilterMenu: false,
    };
  },
  computed: {
    filterMenuState() {
      return this.$store.state.app.currentActiveModal === "filter"
        ? this.$store.state.app.currentActiveModal
        : false;
    },
  },
};
</script>
<style scoped="scoped">
.blog-pagination {
  margin-top: 40px;
  margin-bottom: 80px;
}
.list-search {
  margin-bottom: 50px;
}
.filter-title {
  margin-bottom: 15px;
}
.row-blog,
.blog-breadcrumb {
  margin-top: 30px;
}
.search-blogs input {
  width: 400px !important;
}
.categories,
.recent,
.tags {
  margin: 0 0 50px !important;
}
@media (max-width: 767.98px) {
  .row-blog {
    display: flex !important;
    flex-direction: column !important;
  }
  .blog-list {
    padding: 10px !important;
  }
  .filter-mobile {
    display: block !important;
    position: fixed;
    height: 100%;
    left: 0;
    top: 0;
    width: fit-content;
    z-index: 9999;
    background: white;
    padding-top: 50px !important;
    overflow: auto;
    transform: translateX(-100%);
    transition: transform 0.25s ease-in-out;
  }
  .filter-mobile.active {
    transform: translateX(0);
  }
}
@media (min-width: 768px) and (max-width: 1024px) {
  .search-blogs input {
    width: 100% !important;
  }
}
</style>
