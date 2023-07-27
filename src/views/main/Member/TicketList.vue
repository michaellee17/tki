<template>
  <h3 class="text-primary mb-4">等待搶票</h3>
  <section class="d-flex flex-wrap gap-4">
    <div class="d-flex cardMain gap-3">
      <div class="flex-1 d-flex align-items-end cardLeft" :style="{ backgroundImage: `url('https://demo2.gcreate.com.tw/gc_tki/storage/images/14f15a4e-a45f-4c2f-a959-fd8f92aaf71b-1689645303.jpg')`, backgroundSize: '110% 100%' }">
        <div class="title">
          <h6>陳奕迅</h6>
          <p>世界巡迴演唱會</p>
        </div>
      </div>
      <div class="flex-1 flex-column cardRight d-flex">
        <div class="d-flex flex-column flex-1 rightTop">
          <p class="subject">第一輪搶票</p>
          <p class="middle">4/16 19:35</p>
          <p class="small">vip區</p>
          <h3 class="price">$ 8000 x1</h3>
          <p class="countDown">3天12小時14分</p>
        </div>
      </div>
    </div>
  </section>
  <div class="d-flex justify-content-end">
    <PaginationA :total-pages="totalPages" :current-page="currentPage" @page-changed="changePage" />
  </div>
</template>

<script>
import SearchOrderDate from '../../../components/SearchOrderDate.vue';
import PaginationA from "../../../components/PaginationA.vue";
import { mapGetters, mapActions } from 'vuex';
export default {
  components: { SearchOrderDate, PaginationA },
  data() {
    return {
      tickets: [],
      currentPage: 1, // 當前分頁
      itemsPerPage: 4, // 每頁顯示的項目數量
      total:'',
    }
  },
  computed: {
    ...mapGetters('user', ['getLoginStatus', 'getMemberData', 'getLoginData']), // 將 getLoginStatus 映射到計算屬性中
    totalPages() {
      return Math.ceil(this.total / this.itemsPerPage);
    },
  },
  watch:{
    currentPage(nVal,oVal){
      if(nVal){
        this.getTickets()
      }
    }
  },
  mounted() {
    this.getTickets()
  },
  methods: {
    getTickets() {
      const apiUrl = `${process.env.VUE_APP_PATH}/user/get-ticket-list`;
      const accessToken = this.getLoginData.access_token
      const params = {
        limit:4, 
        page:this.currentPage, //總回傳頁數，預設為1
      };
      this.axios.post(apiUrl, params,{
        headers: {
          'Authorization': `Bearer ${accessToken}`
        },
      })
        .then(res => {
          if (res.data.status_code === 'SYSTEM_1000') {
            this.tickets = res.data.data
            this.total = res.data.total
          }
        });
    },
  },
}
</script>

<style scoped lang="scss">
.cardMain {
  width: 438px;
  height: 220px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 2px 5px #00000066;
  border-radius: 10px;
  opacity: 1;
  // @media(max-width: 576px) {
  //   width: 305px;
  //   height: 172px;
  // }

  & .position-absolute {
    left: 1rem;
  }
  & .title{
    color:white;
    margin-left: 10px;
  }
  & .subject{
    color:black;
    font-size:20px;
    font-weight:600;
    margin-bottom: 0;
  }
  & .middle{
    color:grey;
    font-size:18px;
    margin-bottom:10px;
  }
  & .small{
    color:grey;
    font-size:14px;
    margin-bottom:10px;
  }
  & .price{
    font-size:24px;
    color:var(--primary-color);
    margin-bottom: 20px;
  }
  & .cardLeft{
    width: 220px;
    height: 220px;
  }
  & .countDown{
    font-size:16px;
  }
  & .rightTop{
    padding-top:26px;
  }
}
.cardRight{
}
.flex-1 {
    flex: 1; /* 子元素均等占据可用空间 */
}
</style>