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
      ">
      <font-awesome-icon class="fa icon" :icon="['fas', 'align-left']" />
    </button>
  </div>
  <div class="row row-blog">
    <slot></slot>
    <div
      class="col-sm-12 col-lg-4 blog-list ps-md-5 filter-mobile d-none d-md-block"
      :class="{ active: filterMenuState }"
    >
    <!-- </BlogWidgets> -->
    <div class="space">
      <FilterTitle class="mb-2 fs-4 w-100" title="最新公告" />
      <FilterListTags class="list p-0 flex-column" :items="latestAnnouncements" />
    </div>
  </div>
  </div>
</div>
</layout-default>

</template>

<script>
import LayoutDefault from "../LayoutDefault/LayoutDefault.vue";
import FilterTitle from "../../atoms/Filter/FilterTitle.vue";
import FilterListTags from "../../atoms/Filter/FilterListTags.vue";
import BlogCard from "../../molecules/Blog/BlogCard.vue";
import Breadcrumb from "../../atoms/Breadcrumb/Breadcrumb.vue";
import PaginationButtons from "../../atoms/PaginationButtons/PaginationButtons.vue";
export default {
  created() {
    document.title = "最新公告 - T-KI";
  },
  mounted() {
    this.$store.commit("setLocation", [
      { title: "最新公告", location: "/blog-list" },
    ]);
    this.getAnnouncements();
  },
  components: {
    FilterTitle,
    FilterListTags,
    BlogCard,
    LayoutDefault,
    Breadcrumb,
    PaginationButtons,
    // BlogWidgets,
  },
  data() {
    return {
      announcements: [],
      numberOfItems: null,
      itemsPerPage: 10,
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
    latestAnnouncements() {
      let announcements = [];
      this.announcements.slice(0, 10).map((object) => {
        announcements.push({
          name: object.title,
          location: this.$buildBlogURL(object.title, object.id),
        });
      });
      return announcements;
    },
  },
  methods: {
    getAnnouncements() {
      this.axios.get(`${process.env.VUE_APP_PATH}/announcement/get_list?page=1&limit=10`)
      .then(res => { 
        this.announcements = res.data.data 
        this.numberOfItems = res.data.total
      });
    }
  }
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

