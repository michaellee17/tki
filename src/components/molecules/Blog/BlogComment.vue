<template>
  <div class="blog-comment d-flex justify-content-between ">
    <div class="comment-image d-flex">
      <div>
        <div
          class="rounded-circle overflow-hidden d-none d-md-block avatar-thumbnail d-flex align-items-center justify-content-center"
        >
          <img :src="$getFileSource(authorAvatar)"  :alt="authorName" />
        </div>
      </div>
      <div
        class="comment-content d-flex justify-content-start ms-md-3 flex-column"
      >
        <span class="fst-italic ms-md-3" v-if="!isApproved"
          >Your comment is awaiting moderation.</span
        >
        <div class="d-flex justify-content-between">
          <span class="fw-bold blue-color fs-6 text-dark ms-md-3 mb-3 mb-md-0">{{
          authorName
        }}</span>
          <span class="fw-light text-secondary">{{
            $formatDate(date)
          }}</span>
        </div>
        <span class="user-comment  ms-md-3 fw-light text-secondary mt-2 w-100">{{
          content
        }}</span>
        <div
          @click="showReplyBox = !showReplyBox"
          v-if="canReply"
          class="text-decoration-none ms-md-3 tn-link blue-color mt-2"
        >
          Reply
        </div>
      </div>
    </div>

  </div>
  <BlogAddComment class="pt-0" v-if="showReplyBox && isApproved" />
</template>
<script>
import BlogAddComment from "./BlogAddComment.vue";
export default {
  components: {
    BlogAddComment,
  },
  props: {
    authorAvatar: {
      type: String,
    },
    authorName: {
      type: String,
    },
    content: {
      type: String,
    },
    isApproved: {
      type: Boolean,
      default: false,
    },
    canReply: {
      type: Boolean,
    },
    date: {
      type: String,
    },
  },
  data() {
    return {
      showReplyBox: false,
    };
  },
};
</script>
<style scoped="scoped">
.avatar-thumbnail {
  width: 60px;
  height: 60px;
}

.comment-image img {
  height: stretch;
}
.tn-link {
  cursor:pointer;
}
.author-avatar {
  border-radius: 50%;
  width: 100%;
  justify-content: center;
  align-items: center;
}

.blog-comment {
  margin-bottom: 40px;
  margin-top: 30px;
}

@media screen and (min-width: 1400px) {
  .mobile-date {
    display: none;
  }
}

@media (max-width: 767.98px) {
  .comment-image {
    display: flex;
    flex-direction: column;
    align-items: flex-start !important;
  }
  .blog-comment {
    display: block !important;
  }
  .desktop-date {
    display: none;
  }
  .user-comment {
    padding: 0 !important;
    margin: 0 !important;
  }
}
</style>
