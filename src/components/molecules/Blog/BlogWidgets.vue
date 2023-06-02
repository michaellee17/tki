<template>
  <div class="space">
    <BasicInputSearch class="search-blogs" placeholder="Search" />
  </div>
  <div class="space">
    <FilterTitle class="mb-2 fs-4 w-100" title="Recent Posts" />
    <FilterListTags class="list p-0 flex-column" :items="latestBlogs" />
  </div>
  <div class="space">
    <FilterTitle class="mb-2 fs-4 w-100" title="Categories" />
    <FilterListTags
      class="list p-0 flex-column"
      :items="[
        { name: 'Gadgets', location: '/blog-list/' },
        { name: 'Smart', location: '/blog-list/' },
        { name: 'Technology', location: '/blog-list/' },
      ]"
    />
  </div>
  <div class="space">
    <FilterTitle class="mb-2 fs-4 w-100" title="Post Tags" />
    <FilterListTags
      class="list d-flex flex-row"
      :items="[
        { name: 'Android', location: '/blog-list/' },
        { name: 'Devices', location: '/blog-list/' },
        { name: 'Gaming', location: '/blog-list/' },
        { name: 'Laptop', location: '/blog-list/' },
      ]"
    />
  </div>
  <div class=" ">
    <FilterTitle class="mb-2 fs-4 w-100" title="Archives" />
    <FilterListTags
      class="list p-0 flex-column"
      :items="[
        { name: 'September 2021', location: '/blog-list/' },
        { name: 'August 2021', location: '/blog-list/' },
        { name: 'July 2021', location: '/blog-list/' },
        { name: 'June 2021', location: '/blog-list/' },
        { name: 'May 2021', location: '/blog-list/' },
        { name: 'Apri 2021', location: '/blog-list/' },
        { name: 'January 2021', location: '/blog-list/' },
      ]"
    />
  </div>
</template>

<script>
import FilterTitle from "../../atoms/Filter/FilterTitle.vue";
import FilterListTags from "../../atoms/Filter/FilterListTags.vue";
import BasicInputSearch from "../../atoms/FormInput/BasicInputSearch.vue";
import { blogs } from "../../../data/blogs.json";
export default {
  components: {
    FilterTitle,
    FilterListTags,
    BasicInputSearch,
  },
  data() {
    return {
      blogs,
    };
  },
  computed: {
    latestBlogs() {
      let blogs = [];
      this.blogs.slice(0, 5).map((object) => {
        blogs.push({
          name: object.title,
          location: this.$buildBlogURL(object.title, object.id),
        });
      });
      return blogs;
    },
  },
};
</script>

<style scoped="scoped">
.space {
  margin-bottom: 50px !important;
}
:deep(.search-field) {
  width: 100%;
  padding-left:15px;
}
</style>
