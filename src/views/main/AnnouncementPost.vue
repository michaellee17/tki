<template>
  <layout-announcement>
    <div class="col-sm-12 col-lg-8  blog-post-list">
      <h1 class="blog-title mb-4">
        {{ announcement.title }}
      </h1>
      <blog-content v-bind="announcement" />
    </div>
  </layout-announcement>
</template>

<script>
import BlogCommentSection from "../../components/organisms/Section/SectionBlogComments.vue";
import BlogContent from "../../components/molecules/Blog/BlogContent.vue";
import BlogComment from "../../components/molecules/Blog/BlogComment.vue";
import LayoutAnnouncement from "../../components/organisms/LayoutDefault/LayoutAnnouncement.vue";
import Breadcrumb from "../../components/atoms/Breadcrumb/Breadcrumb.vue";
import BlogTags from "../../components/atoms/Blog/BlogTags.vue";
import BlogWidgets from "../../components/molecules/Blog/BlogWidgets.vue";

export default {
  components: {
    LayoutAnnouncement,
    BlogCommentSection,
    BlogContent,
    BlogComment,
    Breadcrumb,
    BlogTags,
    BlogWidgets,
  },
  data() {
    return {
      announcement: { }
    };
  },
  computed: {
    announcementPost() {
      return this.$route.params.annoucementID;
    },
    announcementId() {
      const postRoute = this.announcementPost.split('-')
       return parseInt(postRoute[postRoute.length - 1])
    },
  },
  watch : {
    announcementPost: function() {
      this.getAnnouncement();
    }
  },
  created() {
    document.title = this.announcementPost + " - T-KI";
  },
  mounted() {
    this.getAnnouncement();
  },
  methods: {
    getAnnouncement() {
      this.axios.get(`${process.env.VUE_APP_PATH}/announcement/get_info?id=${this.announcementId}`)
      .then(res => { 
        // console.log( res.data )
        if (res.data.status_code === 'SYSTEM_1000') {
          this.announcement = res.data.data 
          this.setLocation()
        } else {
          this.$router.push('/404')
        }
      });
    },
    setLocation() {
      this.$store.commit("setLocation", [
      { title: "最新公告", location: "/announcement" },
      {
        title: this.announcement.title,
        location: this.$buildBlogURL(this.announcement.title, this.announcementId),
      },
    ]);
    }
  }
}
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
