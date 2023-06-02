<template>
  <layout-default>
    <div class="container">
      <div class="blog-breadcrumb border-bottom">
        <Breadcrumb />
        <h1 class="blog-title mt-2">{{ getBlog.title }}</h1>
      </div>
      <div class="row row-blog">
        <div class="col-sm-12 col-lg-8  blog-post-list">
          <blog-content v-bind="getBlog"></blog-content>
          <div class="blog-tags" v-if="getBlog.tags">
            <BlogTags :items="getBlog.tags" />
          </div>
          <div class="blog-comment">
            <blog-comment-section>
              <blog-comment
                :isApproved="true"
                :date="'7/8/2021'"
                :canReply="true"
                :authorAvatar="
                  'images/blogpost/blogpost6.jpg'
                "
                :authorName="'Jack Daniels'"
                :content="
                  'In publishing, art, and communication, content is the information and experiences that are directed toward an end-user or audience.[1] Content is \'something that is to be expressed through some medium, as speech, writing or any of various arts\'.'
                "
              ></blog-comment>
              <blog-comment
                class="mt-3"
                :isApproved="false"
                :date="'7/8/2021'"
                :authorAvatar="
                  'images/blogpost/blogpost1.jpg'
                "
                :authorName="'George Indianul'"
                :content="
                  'In publishing, art, and communication, content is the information and experiences that are directed toward an end-user or audience.[1] Content is \'something that is to be expressed through some medium, as speech, writing or any of various arts\'.'
                "
              ></blog-comment>
              <blog-comment
                class="my-3"
                :isApproved="false"
                :date="'7/8/2021'"
                :canReply="false"
                :authorAvatar="
                  'images/blogpost/blogpost3.jpg'
                "
                :authorName="'Madalin Racheta'"
                :content="
                  'In publishing, art, and communication, content is the information and experiences that are directed toward an end-user or audience.[1] Content is \'something that is to be expressed through some medium, as speech, writing or any of various arts\'.'
                "
              ></blog-comment>
            </blog-comment-section>
          </div>
        </div>
        <div class="col-sm-12 col-lg-4 blog-list ps-md-5 ">
          <BlogWidgets />
        </div>
      </div>
    </div>
  </layout-default>
</template>

<script>
import BlogCommentSection from "../../components/organisms/Section/SectionBlogComments.vue";
import BlogContent from "../../components/molecules/Blog/BlogContent.vue";
import BlogComment from "../../components/molecules/Blog/BlogComment.vue";
import LayoutDefault from "../../components/organisms/LayoutDefault/LayoutDefault.vue";
import Breadcrumb from "../../components/atoms/Breadcrumb/Breadcrumb.vue";
import BlogTags from "../../components/atoms/Blog/BlogTags.vue";
import BlogWidgets from "../../components/molecules/Blog/BlogWidgets.vue";

import { blogs } from "../../data/blogs.json";

export default {
  created() {
    document.title = this.getBlog.title + " - iBid";
  },
  mounted() {
    this.$store.commit("setLocation", [
      { title: "Blog List", location: "/blog-list" },
      {
        title: this.getBlog.title,
        location: this.$buildBlogURL(this.getBlog.title, this.getBlog.id),
      },
    ]);
  },
  components: {
    LayoutDefault,
    BlogCommentSection,
    BlogContent,
    BlogComment,
    Breadcrumb,
    BlogTags,
    BlogWidgets,
  },
  data() {
    return {
      blogs,
    };
  },
  computed: {
    getBlog() {
      return this.blogs.find(
        (blog) =>
          this.$convertToSlug(blog.title, blog.id) == this.$route.params.blogID
      );
    },
  },
};
</script>
<style scoped="scoped">
.blog-title {
  font-size: 28px !important;
  line-height: 32px !important;
  color: #242424;
  font-weight: bold;
  margin: 5px 0;
}
::v-global(.blog-content p) {
  line-height: 170%;
}
.blog-comment {
  margin-top:80px;
}
.blog-post-title {
  font-size: 30px;
}
.blog-breadcrumb {
  padding: 40px 0 40px 0;
  border-color: #dddddd;
}
.row-blog {
  padding: 50px 0 0 0;
}
.search-blogs input {
  width: 400px !important;
}
.blog-tags {
  margin-top: 20px;
  margin-bottom: 20px;
}
li {
  margin-bottom: 5px !important;
  font-size: 15px;
  color: #606060;
  padding: 0 8px 5px 0;
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
  .blog-breadcrumb {
    padding: 20px 0 20px 0;
  }
  .row-blog {
    display: flex !important;
    flex-direction: column !important;
  }
  .blog-list {
    padding: 20px !important;
  }
}
</style>
