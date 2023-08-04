<template>
  <div v-if="newDetail.release_date" class="container mt-5">
    <h3 class="mb-4">{{ newDetail.title }}</h3>
    <p class="text-secondary">{{ $timeFormatter(newDetail.release_date) }}</p>
    <img :src="newDetail.image_url" class="img-fluid mb-4" alt="">
    <div class="newsDetail" v-html="newDetail.content" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      newDetail: {}
    }
  },
  computed: {
      newsId() {
        const newsRoute = this.$route.params.newsId.split('-');
        return parseInt(newsRoute[newsRoute.length - 1]);
      },
    },
  created() {
    this.getNewDetail();
  },
  methods: {
    getNewDetail() {
      this.axios.get(`${process.env.VUE_APP_PATH}/event/get-announcement-info?id=${this.newsId}`)
      .then(res => { 
        if (res.data.status_code === 'SYSTEM_1000') {
          this.newDetail = res.data.data 
        } else {
          this.$router.push('/404')
        }
      });
    },
  }
}
</script>
<style lang="scss">
.newsDetail img {
  max-width: 100%;
  height: auto;
}
</style>