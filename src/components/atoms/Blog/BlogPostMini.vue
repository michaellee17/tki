<template>
  <div class="col-md-4  post mb-5 mb-md-0">
    <div class="row news-row">
      <div class="new-blog col">
        <div class="mini-blog-image w-100 h-100 overflow-hidden">
          <link-wrapper
            :location="location"
            class="relative text-decoration-none"
          >
            <img :src="$getFileSource(thumbNail)" :alt="title" />
          </link-wrapper>
        </div>
      </div>
      <div class="col-md-8 blog-content">
        <div class="head-content">
          <h3 class="post-name">
            <link-wrapper :location="blogURL" class="text-decoration-none">
              {{ title }}
            </link-wrapper>
          </h3>
        </div>
        <div class="post-excerpt">
          {{ desc }}...
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LinkWrapper from "../LinkWrapper/LinkWrapper.vue";

export default {
  components: {
    LinkWrapper,
  },
  props: {
    id: {
      type: Number,
      required: false,
    },
    location: {
      type: String,
      required: true,
    },
    thumbNail: {
      type: String,
    },
    title: {
      type: String,
    },
    desc: {
      type: String,
    },
  },
  computed: {
    blogURL() {
      return this.$buildBlogURL(this.title,this.id)
    }
  }
};
</script>
<style scoped="scoped">
img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  transition: filter 0.25s ease-in-out;
}

img:hover {
  filter:brightness(50%)
}
.news-row{
  height:100%;
}
h3,
.post-name {
  font-family: Montserrat;
  line-height: 23px;
  color: #242424;
  font-size: 20px;
  color: #242424;
  font-weight: bold;
  margin: 10px 0px;
}
.post-name a {
  color: #151515;
}
.blog-thumbnail {
  padding-right: 25px;
}
.post-name a:hover {
  color: var(--primary-color) !important;
}
.sticky-posts a {
  display: block;
}
.post-excerpt {
  margin: 0;
  color: #606060;
  font-size: 14px;
  line-height: 20px;
  font-weight: 300;
}
@media (min-width: 768px) and (max-width: 1024px) {
  .mini-blog-image{
    height:50%!important;
  }
}

</style>
