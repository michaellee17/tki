<template>
  <h3 class="text-primary mb-4">等待搶票</h3>
  <section class="d-flex flex-wrap gap-4 mb-3">
    <router-link :to="'/activity/detail/' + $convertToSlug(item.event_name, item.event_id) + '/buy-ticket/cart'" v-for="item in tickets" :key="item.event_id" class="d-flex cardMain">
      <div class="flex-1 d-flex align-items-end cardLeft" :style="{ backgroundImage: `url('https://demo2.gcreate.com.tw/gc_tki/storage/images/14f15a4e-a45f-4c2f-a959-fd8f92aaf71b-1689645303.jpg')`, backgroundSize: '110% 100%' }" />
      <div class="flex-1 flex-column cardRight d-flex">
        <div class="d-flex flex-column flex-1 rightTop px-3">
          <p class="subject">{{ item.performer }}</p>
          <p class="subject ellipsis-1 event_name">{{ item.event_name }}</p>
          <p class="small">{{ item.session_area }}</p>
          <h3 class="price">$ {{ item.ticket_price }} x{{ item.ticket_number }}</h3>
          <p class="countDown d-flex gap-2">
            <img src="../../../assets/images/icons/icon_schedule.svg">
            <span v-if="isTicketing(item.ticket_start_date)" class="grabbing">搶票中</span>
            <span v-else class="grabbing">{{ getRemainingTime(item.ticket_start_date) }}</span>
          </p>
        </div>
      </div>
    </router-link>
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
     isTicketing(ticketStartDate) {
      const startDate = new Date(ticketStartDate).getTime(); 
      const now = Date.now(); 
      return now >= startDate;
    },
    getRemainingTime(ticketStartDate) {
      const startDate = new Date(ticketStartDate).getTime(); 
      const now = Date.now(); // 获取当前时间的时间戳（毫秒）
      const diffInMillis = startDate - now;
      const diffInMinutes = Math.floor(diffInMillis / (1000 * 60));
      const days = Math.floor(diffInMinutes / (60 * 24));
      const hours = Math.floor((diffInMinutes % (60 * 24)) / 60);
      const minutes = diffInMinutes % 60;
      return `${days}日${hours}時${minutes}分`;
    },
    changePage(page) {
      // 分頁變更事件處理器
      this.currentPage = page;
    },
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
            console.log(res.data);
          }
        });
    },
  },
}
</script>

<style scoped lang="scss">
.cardMain {
  width: 465px;
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
  & .grabbing{
    color:var(--primary-color);
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
  & .event_name{
    max-width: 180px;
    margin-bottom: 5px;
  }
}
.flex-1 {
    flex: 1; /* 子元素均等占据可用空间 */
}
</style>