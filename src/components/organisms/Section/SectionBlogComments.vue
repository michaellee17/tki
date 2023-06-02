<template>
  <div class="add-comment">
    <span class="fs-4 fw-bold comments-counter"
      >Comments: {{ commentNo }}
    </span>

    <slot><div class="text-secondary text-center mt-4">No comments yet.</div></slot>

    <blog-add-comment></blog-add-comment>
  </div>
</template>

<script>
import BlogAddComment from "../../molecules/Blog/BlogAddComment.vue";

export default {
  components: { BlogAddComment },
  props: {
    commentNo: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped="scoped">
.add-comment {
  width: 100%;
  padding: 0 0 50px;
}
.add-comment textarea {
  box-shadow: 0px 0px 25px rgb(0 0 0 / 10%);
  height: 200px;
}
</style>
