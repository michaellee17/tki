<template>
  <div class="section">
    <Heading :title="'LATEST NEWS'" />
    <div class="row">
      <BlogPostMini
        v-for="news in blogs.slice(0,3)"
        :key="news"
        :id="news.id"
        :thumbNail="news.thumbNail"
        :location="$buildBlogURL(news.title, news.id)"
        :title="news.title"
        :desc="news.shortDesc.replace(/^(.{60}[^\s]*).*/, '$1')"
      />
    </div>
  </div>
</template>

<script>
import BlogPostMini from "../../atoms/Blog/BlogPostMini.vue";
import Heading from "../../atoms/SectionHeading/Heading.vue";
import { blogs } from "../../../data/blogs.json";

export default {
  components: { BlogPostMini, Heading },
  data() {
    return {
      blogs,
    };
  },
};
</script>
<style scoped="scoped">
@media (max-width: 767.98px) { 
  .row{
    display:block!important;
  
  }
  
}
</style>
