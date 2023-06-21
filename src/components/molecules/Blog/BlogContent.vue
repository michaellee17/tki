<template>
  <div class="blog-post w-100">
    <!-- <img :src="$getFileSource(image_path)"  /> -->
    <img :src="image_path"  />
    <div class="author-details mt-4 mb-4">
      <div class="author-details d-flex flex-row mb-3 mt-2 flex-wrap align-items-center">
          <font-awesome-icon
            class="icon text-secondary"
            :icon="['far', 'calendar']"
          />
          <span class="text-secondary fw-light ms-2 me-4">{{ release_at }}</span>
      </div>
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
  props: ['image_path', 'content', 'release_at'],
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
