<template>
  <layout-announcement>
    <div class="col-sm-12 col-lg-8  blog-post-list">
      <BlogCard v-for="announcement in announcements" :key="announcement.id" v-bind="announcement" />
      <div class="blog-pagination d-flex align-items-start">
        <pagination-buttons
          v-if="numberOfItems / itemsPerPage > 1"
          class="my-2"
          :page-numbers="numberOfItems / itemsPerPage"
          :current-page="currentPage"
          @onChangePageNoRequest="changePage" />
      </div>
    </div>
  </layout-announcement>
</template>

<script>
import FilterTitle from "../../components/atoms/Filter/FilterTitle.vue";
import FilterListTags from "../../components/atoms/Filter/FilterListTags.vue";
import BlogCard from "../../components/molecules/Blog/BlogCard.vue";
import LayoutAnnouncement from "../../components/LayoutAnnouncement.vue";
import Breadcrumb from "../../components/atoms/Breadcrumb/Breadcrumb.vue";
import PaginationButtons from "../../components/atoms/PaginationButtons/PaginationButtons.vue";
// import BlogWidgets from "../../components/molecules/Blog/BlogWidgets.vue";



export default {
  components: {
    FilterTitle,
    FilterListTags,
    BlogCard,
    LayoutAnnouncement,
    Breadcrumb,
    PaginationButtons,
    // BlogWidgets,
  },
  data() {
    return {
      announcements: [],
      numberOfItems: null,
      itemsPerPage: 2,
      currentPage: null,
      test: "",
      selectedValue: "",
      layout: "Grid",
      showFilterMenu: false,
    };
  },
  computed: {
    pageId() {
      return this.$route.params.pageId;
    },
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
  watch: {
    pageId: function() { 
      this.getAnnouncements();
     } 
  },
  created() {
    document.title = "最新公告 - T-KI";
  },
  mounted() {
    this.pageId === undefined ? this.currentPage = 1 : this.currentPage = this.pageId
    this.$store.commit("setLocation", [
      { title: "最新公告", location: "/announcement" },
    ]);
    this.getAnnouncements();
  },
  methods: {
    getAnnouncements() {
      this.axios.get(`${process.env.VUE_APP_PATH}/announcement/get_list?page=${this.currentPage}&limit=${this.itemsPerPage}`)
      .then(res => { 
        if (res.data.status_code === 'SYSTEM_1000') {
          this.announcements = res.data.data ;
          this.numberOfItems = res.data.total;
        } else {
          this.$router.push('/404')
        }
      });
    },
    changePage(pageNo) {
      this.currentPage = pageNo;
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
