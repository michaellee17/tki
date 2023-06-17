<template>
  <div class="blog-card">
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
          :text="'查看更多'"
           
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
  props: {
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
  },
  computed: {
    getBlogLocation() {
      return this.$buildBlogURL(this.title,this.id);
    },
    shortDesc() {
      return this.content.replace(/(<[^>]*>|&nbsp;|&gt;)/g, '');
    }
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
.blog-btn {
 
  margin-top: 25px;
}
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
