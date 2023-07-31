<template>
  <h3 class="text-primary mb-4">購票清單</h3>
  <section class="d-flex flex-wrap gap-4 mb-3">
    <a
      v-for="(item, i) in tickets"
      :key="item.event_id"
      href="#" class="d-flex cardMain" 
      @click.prevent="goCart(item.session_name, item.area_name, item.ticket_name, item.ticket_number, item.ticket_start_date, item.event_name, item.event_id)">
      <div class="cardLeft bg-cover flex-shrink-0" :style="{ backgroundImage: `url('${ item.reserve_image_url }')` }" />
      <div class="flex-column cardRight d-flex flex-shrink-1">
        <div class="d-flex flex-column rightTop px-3">
          <p class="subject ellipsis-1">{{ item.performer }}</p>
          <p class="subject ellipsis-1 event_name">{{ item.event_name }}</p>
          <p class="small">{{ item.session_name }} {{ item.area_name }}</p>
          <h3 class="price">$ {{ item.ticket_price }} x {{ item.ticket_number }}</h3>
          <p class="countDown d-flex gap-2">
            <img src="../../../assets/images/icons/icon_schedule.svg">
            <span v-show="isTicketing(item.ticket_start_date)" :id="'ticketing'+i" class="grabbing">搶票中</span>
            <span v-show="!isTicketing(item.ticket_start_date)" :id="'countdown'+i" class="grabbing">{{ getRemainingTime(item.ticket_start_date, i) }}</span>
          </p>
        </div>
      </div>
    </a>
  </section>
  <div class="d-flex justify-content-end">
    <PaginationA :total-pages="totalPages" :current-page="currentPage" @page-changed="changePage" />
  </div>
</template>

<script>
import SearchOrderDate from '../../../components/SearchOrderDate.vue';
import PaginationA from "../../../components/PaginationA.vue";
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
export default {
  components: { SearchOrderDate, PaginationA },
  data() {
    return {
      tickets: [],
      currentPage: 8, // 當前分頁
      itemsPerPage: 4, // 每頁顯示的項目數量
      total:'',
      timer: null
    }
  },
  unmounted() {
    clearInterval(this.timer);
    console.log('clearlist')
  },
  computed: {
    ...mapGetters('user', ['getLoginStatus', 'getMemberData', 'getLoginData']), // 將 getLoginStatus 映射到計算屬性中
    ...mapState('activity', ['ticket_info',]),
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
    console.log(this.tickets)
  },
  methods: {
    ...mapMutations('activity', ['setTicketData']),
     isTicketing(ticketStartDate) {
      const startDate = new Date(ticketStartDate).getTime(); 
      const now = Date.now()
      return now >= startDate;
    },
    getRemainingTime(ticketStartDate, i) {
      if(!this.isTicketing(ticketStartDate)) {
        this.$nextTick(()=> {
        this.timer = setInterval(() => {
        // let ticketStartDate = '2023-07-31 19:21:50'
        let countDownTime =''
        const countDownEl = document.getElementById(`countdown${i}`)
        const ticketingEl = document.getElementById(`ticketing${i}`)
        const startDate = new Date(ticketStartDate).getTime(); 
        const now = Date.now(); // 获取当前时间的时间戳（毫秒）
        const diffInMillis = startDate - now;
        const diffInMinutes = Math.floor(diffInMillis / (1000 * 60));
        const diffInSeconds = Math.floor(diffInMillis / 1000);
        const days = Math.floor(diffInMinutes / (60 * 24));
        const hours = Math.floor((diffInMinutes % (60 * 24)) / 60);
        const minutes = diffInMinutes % 60;
        const seconds = diffInSeconds % 60;
        countDownTime = `${days} 日 ${hours} 時 ${minutes} 分`;
        console.log(countDownEl)
        if(countDownEl) {
          countDownEl.textContent = countDownTime
          if( days === 0 && hours === 0 && minutes === 0 && seconds === 1 ) {
            clearInterval(this.timer);
            countDownEl.style.display = 'none';
            ticketingEl.style.display = 'block';
          }

        }
      }, 1000)
      })
      }
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
          }
        });
    },
    goCart(session_name, area_name, ticket_name, ticket_number, ticket_start_date, event_name, event_id) {
      this.setTicketData({ stateData: 'l_session_name', data: session_name });
      this.setTicketData({ stateData: 'l_area_name', data: area_name });
      this.setTicketData({ stateData: 'l_ticket_name', data: ticket_name });
      this.setTicketData({ stateData: 'l_ticket_number', data: ticket_number });
      this.setTicketData({ stateData: 'l_ticket_start_date', data: ticket_start_date });
      // this.setTicketData({ stateData: 'isUpdated', data: true });

      this.$router.push({
        path: '/activity/detail/' + this.$convertToSlug(event_name, event_id) + '/buy-ticket/cart',
        query: { pre: true }
      });
    }
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
  @media(max-width: 576px) {
    width: 305px;
    height: 172px;
  }
  &:hover {
    & .subject {
      color: var(--primary-color);
    }
  }

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
    border-radius: 10px 0px 0px 10px;
  }
  & .cardRight{
    width: 245px;
  }
  & .countDown{
    font-size:16px;
  }
  & .rightTop{
    padding-top:26px;
  }
  & .event_name{
    margin-bottom: 5px;
  }
}
</style>