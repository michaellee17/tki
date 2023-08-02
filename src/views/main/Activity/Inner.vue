<template>
  <TopHeader :title="'活動專區'" />
  <div class="container mt-5">
    <div class="d-flex gap-3 mb-4 flex-column flex-md-row">
      <router-link :to="'/activity/0'" class="button btn-outline-primaryA" :class="{'active': innerIndex === 0}" @click="currentPage = 1">全部</router-link>
      <router-link
        v-for="item in tags"
        :key="item.class_id"
        :to="'/activity/' + item.class_id"
        class="button btn-outline-primaryA" :class="{'active': innerIndex === item.class_id}" @click="currentPage = 1">
        {{ item.class_name }}
      </router-link>
    </div>
    <div class="d-flex justify-content-center justify-content-md-start gap-4 flex-wrap mb-4">
      <router-link
        v-for="item in lists" :key="item.event_id" class="cardA bg-cover text-white position-relative"
        :to="'/activity/detail/' + $convertToSlug(item.event_name, item.event_id) + '/buy-ticket/session'"
        :style="{ backgroundImage: 'linear-gradient(180deg, #00000000 0%, #00000033 73%, #000000 100%),url(' + item.main_imageH_url + ')' }">
        <div class="position-absolute bottom-0">
          <h4 class="fw-bold">{{ item.performer }}</h4>
          <p>{{ item.event_name }}</p>
        </div>
      </router-link>
    </div> 
    <div class="d-flex justify-content-center">
      <PaginationA :total-pages="totalPages" :current-page="currentPage" @page-changed="changePage" />
    </div>
  </div>
</template>
<script>
import TopHeader from "../../../components/TopHeader.vue";
import PaginationA from "../../../components/PaginationA.vue";
export default{
  components: {
   TopHeader, PaginationA
  },
  data(){
    return{
      total:'',
      tags:{},
      lists:[],
      currentPage: 1, // 當前分頁
      itemsPerPage: 9, // 每頁顯示的項目數量
    }
  },
  computed:{
    totalPages() {
      return Math.ceil(this.total / this.itemsPerPage);
    },
    innerIndex () {
      return this.$route.params.activityId
    },
  },
  watch:{
    innerIndex(nVal,oVal){
      if(nVal){
        this.getInfo()
      }
    },
    currentPage(nVal,oVal){
      if(nVal){
        this.getInfo()
      }
    }
  },
  mounted(){
    this.getTags()
    this.getInfo()
  },
  methods:{
    changePage(page) {
      // 分頁變更事件處理器
      this.currentPage = page;
    },
    getTags(){
      const apiUrl = `${process.env.VUE_APP_PATH}/event/get-district-class-list`;
        this.axios.get(apiUrl)
        .then(res => { 
          if(res.data.status_code === 'SYSTEM_1000'){
            this.tags = res.data.data
          }
        });
    },
    getInfo(){
      const apiUrl = `${process.env.VUE_APP_PATH}/event/get-district-main-list`;
      const params = {
        limit:this.itemsPerPage, 
        page:this.currentPage,
      };
      if(this.innerIndex != 0){
        params.class_id = this.innerIndex
      }
        this.axios.get(apiUrl,{
           params:params,
        })
        .then(res => { 
          if(res.data.status_code === 'SYSTEM_1000'){
            this.lists = res.data.data;
            this.total = res.data.total;
          }
        });
    },
  },

}
</script>
<style scoped lang="scss">
.router-link-active{
  background-color: var(--primary-color);
  color:white;
}
.cardA {
  width: 410px;
  height: 230px;
  border-radius: 20px;
  background-image: linear-gradient(180deg, #00000000 0%, #00000033 73%, #000000 100%);
  @media(max-width: 576px) {
    width: 305px;
    height: 172px;
  }

  & .position-absolute {
    left: 1rem;
  }
}
</style>