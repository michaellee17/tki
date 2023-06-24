<template>
  <!-- old -->
  <!-- <div class="blog-card">
    <div
      v-if="thumbNail !== ''"
      class="blog-image"
    >
      <link-wrapper :location="getBlogLocation">
        <img
          :src="$getFileSource(thumbNail)"
          :alt="title"
        >
      </link-wrapper>
    </div>
    <div class="blog-content">
      <link-wrapper
        :location="getBlogLocation"
        :remove-decorations="true"
      >
        <div class="title">
          <font-awesome-icon
            v-if="pinned"
            class="fa fa-2x icon"
            :icon="['fas', 'star']"
          />
          <span class="blog-card-title fs-3 fw-bold text-dark ">{{ title }}</span>
        </div>
      </link-wrapper>
      <AuthorDetails
        class="author-details"
        v-bind="authorDetails"
      />
      <div class="preview-text fs-6 text-secondary">{{ shortDesc }}</div>
      <div class="read-more  d-flex justify-content-start ">
        <ButtonFilled
          class="blog-btn fw-bold"
          :has-rounded-corners="true"
          :text="'詳細資料'"
           
          :location="getBlogLocation"
        />
      </div>
    </div>
  </div> -->

  <div class="blog-card">
    <div
      v-if="image_path !== ''"
      class="blog-image"
    >
      <link-wrapper :location="getBlogLocation">
        <!-- <img
          :src="$getFileSource(image_path)"
          :alt="title"
        > -->
        <img :src="image_path"  />
      </link-wrapper>
    </div>
    <div class="blog-content">
      <link-wrapper
        :location="getBlogLocation"
        :remove-decorations="true"
      >
        <div class="title">
          <font-awesome-icon
            v-if="pinned"
            class="fa fa-2x icon"
            :icon="['fas', 'star']"
          />
          <span class="blog-card-title fs-3 fw-bold text-dark ">{{ title }}</span>
        </div>
      </link-wrapper>
      <!-- <AuthorDetails
        class="author-details"
        v-bind="authorDetails"
      /> -->
      <!-- AuthorDetails -->
      <div class="author-details d-flex flex-row mb-3 mt-2 flex-wrap align-items-center">
          <font-awesome-icon
            class="icon text-secondary"
            :icon="['far', 'calendar']"
          />
          <span class="text-secondary fw-light ms-2 me-4">{{ release_at }}</span>
      </div>
      <!-- 副標題 -->
      <div v-if="subtitle !== null" class="preview-text fs-6 text-secondary mb-3">{{ subtitle }}</div>
      <div class="read-more  d-flex justify-content-start ">
        <ButtonFilled
          class="blog-btn fw-bold"
          :has-rounded-corners="true"
          :text="'詳細資料'"
           
          :location="getBlogLocation"
        />
      </div>
    </div>
  </div>
</template>
<script>
import AuthorDetails from "../../atoms/Blog/AuthorDetails.vue";
import LinkWrapper from "../../atoms/LinkWrapper/LinkWrapper.vue";
import ButtonFilled from "../../atoms/Button/ButtonFilled.vue";

export default {
  components: {
    AuthorDetails,
    ButtonFilled,
    LinkWrapper,
  },
  /* props: {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    thumbNail: {
      type: String,
    },
    content: {
      type: String,
      required: true,
    },
    authorDetails: {
      type: Array,
      required: true,
    },
    pinned: {
      type: Boolean,
    },
  }, */

  props: [ 'id', 'title', 'image_path', 'subtitle', 'release_at' ],
  computed: {
    getBlogLocation() {
      return this.$buildBlogURL(this.title,this.id);
    },
    // shortDesc() {
    //   return this.content.replace(/(<[^>]*>|&nbsp;|&gt;)/g, '');
    // }
  },
};
</script>

<style scoped="scoped">
.blog-card {
  box-shadow: 0px 0px 25px rgb(0 0 0 / 10%);
  margin-bottom: 50px;
}
.blog-content {
  padding: 50px 40px !important;
}
@media (max-width: 767.98px) {
  .blog-content {
    padding:30px 20px !important;
  }
}
.blog-card img {
  max-width: 100%;
  height: auto;
  vertical-align: middle;
}
/* .blog-btn {
  margin-top: 25px;
} */
.icon {
  color: var(--primary-color);
}

.blog-card-title {
  color: #484848 !important;
}

.blog-card-title:hover {
  color: var(--primary-color) !important;
  cursor: pointer;
}

div.preview-text {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
