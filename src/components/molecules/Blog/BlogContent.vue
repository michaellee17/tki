<template>
  <div class="blog-post w-100">
    <img :src="$getFileSource(thumbNail)"  />
    <div class="author-details mt-4 mb-4">
      <AuthorDetails v-bind="authorDetails" />
    </div>
    <div class="blog-content d-flex flex-column" v-html="content"></div>
  </div>
</template>

<script>
import AuthorDetails from "../../atoms/Blog/AuthorDetails.vue";

export default {
  components: {
    AuthorDetails,
  },
  props: {
    thumbNail: {
      type: String,
      required: true,
    },
    authorDetails: {
      type: Array,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped="scoped">
.blog-post {
  width: 66.66%;
}
.blog-post img {
  max-width: 100%;
  height: auto;
}
.blog-content{
  line-height: 24px;
  color:#606060;
  font-size:16px;
  font-weight: 300;
}

</style>
