<template>
  <div class="container mt-5">
    <h3 class="mb-4">{{ newDetail.title }}</h3>
    <p class="text-secondary">{{ newDetail.release_date }}</p>
    <img :src="newDetail.image_url" class="img-fluid mb-4" alt="">
    <div v-html="newDetail.content" />
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
          console.log(this.newDetail)
        } else {
          this.$router.push('/404')
        }
      });
    },
  }
}
</script>
<style scoped lang="scss">
</style>