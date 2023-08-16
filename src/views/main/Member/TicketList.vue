<template>
  <!-- <Loading
    :active="isLoading"
    :color="'#f5742e'"
    :opacity="0.7" /> -->
  <h3 class="text-primary mb-4">購票清單</h3>
  <div
    v-if="tickets.length === 0" class="text-center mt-2">
    <p>目前尚無資料。</p>
  </div>
  <section class="d-flex flex-wrap gap-4 mb-3">
    <div
      v-for="(item, i) in tickets"
      :key="item.buy_ticket_id"
      class="d-flex cardMain">
      <div
        class="cardLeft bg-cover flex-shrink-0" 
        :style="{ backgroundImage: `url('${ item.reserve_image_url }')` }" @click.prevent="goCart(item.session_name, item.area_name, item.ticket_name, item.ticket_number, item.ticket_start_date, item.event_name, item.event_id)" />
      <div class="flex-column cardRight d-flex flex-shrink-1">
        <div class="d-flex flex-column rightTop px-3">
          <button class="btn-close close" @click="showModal(item.buy_ticket_id)" />
          <div class="subject" @click.prevent="goCart(item.session_name, item.area_name, item.ticket_name, item.ticket_number, item.ticket_start_date, item.event_name, item.event_id)">
            <p class="mb-0 ellipsis-1">{{ item.performer }}</p>
            <p class="mb-0 ellipsis-1 event_name">{{ item.event_name }}</p>
          </div>
          <p class="small ellipsis-1">{{ item.session_name }} {{ item.area_name }}</p>
          <h3 class="price">$ {{ item.ticket_price }} x {{ item.ticket_number }}</h3>
          <p class="countDown d-flex gap-2">
            <img src="../../../assets/images/icons/icon_schedule.svg">
            <span v-show="isTicketing(item.ticket_start_date)" :id="'ticketing'+i" class="grabbing">搶票中</span>
            <span v-show="!isTicketing(item.ticket_start_date)" :id="'countdown'+i" class="grabbing">{{ getRemainingTime(item.ticket_start_date, i) }}</span>
          </p>
        </div>
      </div>
    </div>
  </section>
  <div class="d-flex justify-content-end">
    <PaginationA :total-pages="totalPages" :current-page="currentPage" @page-changed="changePage" />
  </div>
  <MessageModal :id="modalID" ref="deleteModal" :warning="true">
    <p class="mb-0">請確認是否要刪除？</p>
    <div class="mt-4 d-flex justify-content-around">
      <button class="btn btn-cancel px-4 unbind" @click="closeModal">取消</button>
      <button class="btn btn-outline-primaryB px-4 unbind" @click="deleteTicket">確認</button>
    </div>
  </MessageModal>
</template>

<script>
import MessageModal from '../../../components/gc/MessageModal.vue';
import SearchOrderDate from '../../../components/SearchOrderDate.vue';
import PaginationA from "../../../components/PaginationA.vue";
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
export default {
  components: { SearchOrderDate, PaginationA, MessageModal },
  data() {
    return {
      modalID :'',
      isLoading: false,
      tickets: [],
      currentPage: 1, // 當前分頁
      itemsPerPage: 4, // 每頁顯示的項目數量
      total: 0,
      timer: []
    }
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
    },
  },
  beforeUnmount() {
    console.log('beforeUnmount')
    this.cleanTimer();
  },
  updated() {
    console.log('updated')
    this.cleanTimer();
  },
  mounted() {
    this.getTickets();
  },
  methods: {
    ...mapMutations('activity', ['setTicketData']),
    closeModal(){
      this.$refs.deleteModal.hideModal()
      this.modalID = ''
    },
    showModal(id){
      this.$refs.deleteModal.showModal()
      this.modalID = id
    },
    deleteTicket(){
      const apiUrl = `${process.env.VUE_APP_PATH}/user/remove-ticket-list`;
      const accessToken = this.getLoginData.access_token
      const params = {
        id:this.modalID
      };
      this.axios.post(apiUrl, params,{
        headers: {
          'Authorization': `Bearer ${accessToken}`
        },
      })
        .then(res => {
          if (res.data.status_code === 'SYSTEM_1000') {
            if(this.total % this.itemsPerPage === 1 && this.currentPage !==1 ){
              this.currentPage--;
            }
            this.getTickets()
            this.closeModal()
          }
        });
    },
     isTicketing(ticketStartDate) {
      const startDate = new Date(ticketStartDate).getTime(); 
      const now = Date.now()
      return now >= startDate;
    },
    getRemainingTime(ticketStartDate, i) {
      if(!this.isTicketing(ticketStartDate)) {
        this.$nextTick(()=> {
          setTimer();
          this.timer[i] = setInterval(setTimer, 1000);
        
          function setTimer() {
            let countDownTime = '';
            const countDownEl = document.getElementById(`countdown${i}`)
            const ticketingEl = document.getElementById(`ticketing${i}`)
            const startDate = new Date(ticketStartDate).getTime(); 
            const now = Date.now(); 
            const diffInMillis = startDate - now;
            const diffInMinutes = Math.floor(diffInMillis / (1000 * 60));
            const diffInSeconds = Math.floor(diffInMillis / 1000);
            const days = Math.floor(diffInMinutes / (60 * 24));
            const hours = Math.floor((diffInMinutes % (60 * 24)) / 60);
            const minutes = diffInMinutes % 60;
            const seconds = diffInSeconds % 60;
            countDownTime = `${days} 日 ${hours} 時 ${minutes} 分 ${seconds} 秒`;
            // console.log(countDownTime, seconds);
            countDownEl.textContent = countDownTime;

            if( days === 0 && hours === 0 && minutes === 0 && seconds === 1 ) {
            clearInterval(this.timer[i]);
            this.timer[i] = '';
            countDownEl.style.display = 'none';
            ticketingEl.style.display = 'block';
            }
          }
        }
      )} else {
        // console.log('else')
        // this.isLoading = false;
        return
      }
    },
    cleanTimer() {
      this.timer.forEach((item, i)=> {
      clearInterval(item)
      // console.log('clear',i)
      });
      this.timer = [];
    },
    changePage(page) {
      // 分頁變更事件處理器
      this.cleanTimer();
      this.currentPage = page;
    },
    getTickets() {
      const apiUrl = `${process.env.VUE_APP_PATH}/user/get-ticket-list`;
      const accessToken = this.getLoginData.access_token
      const params = {
        limit:4, 
        page:this.currentPage,
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
          } else {
            this.isLoading = false;
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
  & .position-absolute {
    left: 1rem;
  }
  & .cardLeft {
    cursor: pointer;
    width: 220px;
    height: 220px;
    border-radius: 10px 0px 0px 10px;
    @media(max-width: 576px) {
      width: 172px;
      height: 172px;
    }
  }
  & .cardRight{
    width: 245px;
    @media(max-width: 576px) {
      width: 133px;
    }
  }
  @media(max-width: 576px) {
    // div.rightTop {
    //   padding-top: 10px;
    // }
    .cardRight p, h3.price {
      font-size: 12px;
      margin-bottom: 8px;
    }
    .cardRight img {
      width: 16px;
    }
    }
  & .title{
    color:white;
    margin-left: 10px;
  }
  & .subject{
    cursor: pointer;
    color:black;
    font-size:20px;
    font-weight:600;
    &:hover {
      color: var(--primary-color);
    }
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
  // & .cardLeft{
  //   cursor: pointer;
  //   width: 220px;
  //   height: 220px;
  //   border-radius: 10px 0px 0px 10px;
  // }
  & .cardRight{
    width: 245px;
    @media(max-width: 576px) {
      width: 135px;
      height: 172px;
    }
  }
  & .countDown{
    font-size:16px;
  }
  & .rightTop{
    position: relative;
    padding-top:26px;
    @media(max-width: 576px) {
     height: 100%;
    }
  }
  & .event_name{
    margin-bottom: 5px;
  }
}
.close{
  font-size: 14px;
  position: absolute;
  right: 8px;
  top: 8px;
  &:hover {
    cursor: pointer;
  }
}

</style>