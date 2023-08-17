<template>
  <TopHeader :title="'預約搶票'" />
  <div class="container mt-5">
    <div class="d-flex justify-content-center justify-content-md-start gap-4 flex-wrap mb-4">
      <router-link
        v-for="item in reserveList" :key="item.event_id" class="cardA bg-cover text-white position-relative"
        :to="'/activity/detail/' + $convertToSlug(item.event_name, item.event_id, item.custom_url) + '/buy-ticket/session'"
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
      reserveList: [],
      currentPage: 1,
      itemsPerPage: 9, 
    }
  },
  computed:{
    totalPages() {
      return Math.ceil(this.total / this.itemsPerPage);
    },
  },
  watch:{
    currentPage(nVal,oVal){
      if(nVal){
        this.getReserveList();
      }
    }
  },
  mounted(){
    this.getReserveList();
  },
  methods:{
    changePage(page) {
      this.currentPage = page;
    },
    getReserveList() {
      this.axios.get(`${process.env.VUE_APP_PATH}/event/get-reserve-main-list`)
      .then(res => { 
        if (res.data.status_code === 'SYSTEM_1000') {
          this.reserveList = res.data.data;
          this.total = res.data.total;
          return false
        }
      })
      .catch(error => {
          console.error('error occurred:', error);
      })
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