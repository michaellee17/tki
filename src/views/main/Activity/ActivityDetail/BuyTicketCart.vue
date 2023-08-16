<template>
  <Loading
    :active="isLoading"
    :color="'#f5742e'"
    :opacity="0.7" />
  <h5 class="fs-18 text-secondary mb-3">票券內容</h5>
  <div class="row flex-column flex-md-row justify-content-center gap-3 gap-lg-0 mb-4">
    <div class="col-12 col-lg-6">
      <div>
        <TicketImage :image-url="ticket_info.ticket_image_url" />
      </div>
    </div>
    <div ref="cartContent" class="col-12 col-lg-6">
      <div class="roundedM bg-primary text-white p-4 mb-3">
        <p class="fs-5 mb-1">{{ basic_info.performer }}</p>
        <p class="fs-18 border-bottom pb-3">{{ basic_info.event_name }}</p>
        <h4 class="mb-3">{{ session_name }} {{ area_name }}</h4>
        <h4 class="border-bottom pb-3 mb-3">{{ selectedTicketName }}</h4>
        <!-- <h4 class="border-bottom pb-3 mb-3">早鳥票 · A排 · 347</h4> -->
        <div class="d-flex justify-content-between">
          <h4 class="mb-0">$ {{ $currency(ticketPrice) }} x {{ ticket_number }}</h4>
          <div class="num-wrap d-flex justify-content-center align-items-center gap-3 position-relative">
            <img
              src="../../../../assets/images/icons/remove.svg" alt="minus" 
              class="icon-qty position-absolute start-0"
              @click="minusQty">
            <div>
              <input v-model="ticket_number" type="text" class="fs-4 text-center text-white" readonly>
            </div>
            <img
              src="../../../../assets/images/icons/add.svg" alt="plus" 
              class="icon-qty position-absolute end-0"
              @click="plusQty">
          </div>
        </div>
      </div>
      <div class="text-end mb-4">
        <h6 class="fw-bold">總計支付金額</h6>
        <h3 class="text-danger fw-bold">NTD {{ $currency(totalAmount) }}</h3>
      </div>
      <div class="d-flex flex-column flex-sm-row  justify-content-end gap-3">
        <button
          type="button" class="btn btn-outline-primaryA"
          @click.prevent="() => $refs.resetTicketModal.showModal()">
          重新選擇
        </button>
        <button
          v-if="!pre"
          type="button" class="btn btn-outline-primaryA"
          @click.prevent="addToTicketList">
          加入購票清單
        </button>
        <div
          v-show="pre && !isTicketing(l_ticket_start_date)"
          id="countdownWrap"
          class="checkout-wrap">
          <button
            type="button" class="btn btn-outline-primaryA d-flex disable-btn" disabled>
            <img src="../../../../assets/images/icons/icon_schedule.svg" class="time-icon me-2">
            <span id="countdown">{{ getRemainingTime(l_ticket_start_date) }}</span>後可以購買
          </button>
        </div>
        <div
          v-show="basic_info.event_status === 2 || isTicketing(l_ticket_start_date)" 
          id="ticketing"
          class="checkout-wrap">
          <button
            type="button" class="btn btn-outline-primaryA d-flex gap-2"
            @click.prevent="goCheckout">
            <p class="mb-0">直接結帳</p>
            <img src="../../../../assets/images/icons/right-arrow.svg" alt="right-arrow" class="icon">
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="but-ticket-notice p-3">
    <h5 class="fs-18 mb-3 roundedM">注意事項</h5>
    <ul>
      <li class="mb-2">• 座位區皆為劃位座席，請依票面座位號入座</li>
      <li class="mb-2">• 搖滾站區票面有序號，請依票面序號整隊入場。人身安全起見，孕婦及身高未滿110公分或未滿7歲孩童，請勿購買搖滾站區票券，主辦方將有權謝絕入場</li>
      <li class="mb-2">• 每人限購4張 (含各預購階段之購買數量)，單筆訂單限購4張，各階段僅開放部分座位或序號，數量有限，售完為止。BLINK MEMBERSHIP官方會員預購、Live Nation Taiwan會員預購，皆僅提供特有或優先購買之服務，不保證座位排號及序號一定優於正式開賣，敬請理解。</li>
      <li class="mb-2">• 因應嚴重特殊傳染性肺炎之疫情，演出時敬請觀眾配合防疫入場須知: •請自行配戴口罩入場，並於演出時全程配戴口罩 •請配合入場時量測體溫，若有發燒症狀（體溫≥攝氏37.5度）則不得入場</li> 
      <li class="mb-2">•配合政府防疫政策，主辦單位及場館鼓勵民眾於參加活動前先下載及使用「台灣社交距離」APP </li>
      <li class="mb-2">•入場須配合安檢及防疫入場須知，禁止攜帶飲食(水除外)、除手機之外的任何形式之拍攝及錄音電子設備、自拍棒與危險物品（依主辦單位定義）等入場，場館無設置置物櫃，主辦單位有權立即請違反者離開現場自行另覓處所寄物。相關規定請關注Live Nation Taiwan (@livenationtw)臉書、Instagram、Twitter與官網 獲得最新資訊。</li>
      <li class="mb-2">•以上活動內容，主辦單位保留異動之權力</li>
    </ul>
  </div>
  <loginModal ref="loginModal" />
  <MessageModal ref="ticketPlusModal" :warning="true">
    <p class="mb-0">
      您已經超過購買數量限制：<span class="text-danger px-1">{{ ticket_limit }}</span>張
      ，請依照購買限制選擇您的票券。
    </p>
  </MessageModal>
  <MessageModal ref="ticketMinusModal" :warning="true">
    <p class="mb-0">購買數量不得小於 1 張。</p>
  </MessageModal>
  <MessageModal ref="ticketListModal" :success="true">
    <p class="mb-0">已加入購票清單！</p>
  </MessageModal>
  <MessageModal ref="resetTicketModal" :warning="true">
    <p class="mb-0">請確認是否要重新選擇票券？</p>
    <div class="mt-4 d-flex justify-content-around">
      <button
        type="button" class="btn btn-cancel px-4"
        @click.prevent="() => $refs.resetTicketModal.hideModal()">
        取消
      </button>
      <button
        type="button" class=" btn btn-outline-primaryB px-4"
        @click.prevent="resetTicket">
        確認
      </button>
    </div>
  </MessageModal>
  <MessageModal ref="soldOutModal" :error="true">
    <p class="mb-0">購票失敗，票券已完售！</p>
  </MessageModal>
  <MessageModal ref="busyModal" :warning="true">
    <p class="mb-0">系統忙碌中，請稍後再試。</p>
  </MessageModal>
  <MessageModal ref="errorModal" :error="true">
    <p class="mb-0">發生錯誤，請稍後再試。</p>
  </MessageModal>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';
import loginModal from "../../../../components/LoginModal";
import MessageModal from "../../../../components/gc/MessageModal.vue";
import TicketImage from '../../../../components/gc/loginModal/TicketImage.vue';


export default {
  components: {
    loginModal, MessageModal, TicketImage
  },
  data() {
    return {
      pre: false,
      timer: null
    }
  },
  computed: {
    ...mapState('activity', ['l_ticket_name', 'isLoading', 'isUpdated', 'basic_info', 'ticket_info', 'ticket_limit', 'session_name',
    'ticket_number', 'area_name' , 'selectedTicketName', 'area_status', 'orderData', 'routeActivityId', 'l_ticket_start_date']),
    ...mapGetters('user', ['getLoginData', 'getLoginStatus', 'getMemberData']),
    ...mapGetters('activity', ['ticketPrice', 'ticket_id']),
    totalAmount() {
      return this.ticketPrice * this.ticket_number;
    },
  },
  watch: {
    isUpdated: {
      immediate: true,
      handler() {
        if(this.$route.query.pre && this.isUpdated) {
          this.preInit();
        }
      }
    },
  },
  beforeUnmount() {
    this.cleanTimer();
  },
  updated() {
    this.cleanTimer();
  },
  // mounted() {
  //   this.scrollToPosition();
  // },
  methods: {
    ...mapMutations('activity', ['setTicketData', 'setListTicketData', 'minus','plus']),
    minusQty() {
      if(this.ticket_number === 1) {
        this.$refs.ticketMinusModal.showModal();
      }
      if(this.ticket_number > 1) {
        this.minus();
      }
    },
    plusQty() {
      if(this.ticket_number === this.ticket_limit) {
        this.$refs.ticketPlusModal.showModal();
      } else if(this.ticket_limit === -1 || this.ticket_number < this.ticket_limit){
        this.plus();
      } else {
        console.log('error')
        return
      }
    },
    resetTicket() {
      this.$refs.resetTicketModal.hideModal();
      this.$router.push({ name: 'BuyTicketType' });
    },
    addToTicketList() {
      if(this.getLoginStatus) {
        const apiUrl = `${process.env.VUE_APP_PATH}/user/add-ticket-list`;
        this.axios.post(apiUrl, 
          {
            type_id: this.ticket_id,
            ticket_number: this.ticket_number
          },
          {
            headers: {
              'Authorization': `Bearer ${this.getLoginData.access_token}`,
            }
          }).then(res => {
            if (res.data.status_code === 'SYSTEM_1000') {
              this.$refs.ticketListModal.showModal();
              setTimeout(() => {
                this.$refs.ticketListModal.hideModal();
                this.$router.push({ name: 'TicketList', params: { memberID: this.getMemberData.data.id } });
              }, 3000);
            }
          }).catch(error => {
              console.error('error occurred:', error);
          })
      } else {
        this.$refs.loginModal.showModal();
      }
    },
  /* event_status = 1 已發佈未開售
     event_status = 2 已發佈已開賣 */
    goCheckout() {
      if(this.getLoginStatus) {
        this.buyTicktet();
      } else {
        this.$refs.loginModal.showModal();
      }
    },
    buyTicktet() {
      this.setTicketData({ stateData: 'isLoading', data: true });
      const apiUrl = `${process.env.VUE_APP_PATH}/event/buy-ticket`;
      this.axios.post(apiUrl, 
        {
          type_id: this.ticket_id,
          ticket_number: this.ticket_number
        },
        {
          headers: {
            'Authorization': `Bearer ${this.getLoginData.access_token}`,
          }
        }).then(res => {
          switch(res.data.status_code){
            case 'SYSTEM_1000':
              this.setTicketData({ stateData: 'orderData', data: res.data.data });
              this.$router.push('checkout');
              this.setTicketData({ stateData: 'isLoading', data: false });
              break;
            /* 已完售 */
            case 'TICKET_3011':
              this.$refs.soldOutModal.showModal();
              setTimeout(() => {
                this.$refs.soldOutModal.hideModal();
                this.$router.push({ name: 'BuyTicketSession', params: { activityId: this.routeActivityId } });
              }, 3000);
              this.setTicketData({ stateData: 'isLoading', data: false });
              break;
            /* 系統忙碌中 */
            case 'TICKET_3099':
              this.$refs.busyModal.showModal();
              this.setTicketData({ stateData: 'isLoading', data: false });
              break;
            /* 錯誤處理 */
            default:
              this.$refs.errorModal.showModal();
              this.setTicketData({ stateData: 'isLoading', data: false });
              break;
          }
        }).catch(error => {
            console.error('error occurred:', error);
            this.setTicketData({ stateData: 'isLoading', data: false });
        })
    },
    isTicketing(ticketStartDate) {
      const startDate = new Date(ticketStartDate).getTime(); 
      const now = Date.now(); 
      return now >= startDate;
    },
    getRemainingTime(ticketStartDate) {
      if(this.pre && !this.isTicketing(ticketStartDate)) {
        this.$nextTick(()=> {
          setTimer();
          this.timer = setInterval(setTimer, 1000);
        
        function setTimer() {
          let countDownTime =''
          const countDownWrap = document.getElementById(`countdownWrap`)
          const countDownEl = document.getElementById(`countdown`)
          const ticketingEl = document.getElementById(`ticketing`)
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
          countDownEl.textContent = countDownTime;

          if( days === 0 && hours === 0 && minutes === 0 && seconds === 1 ) {
          clearInterval(this.timer);
          this.timer = null;
          countDownWrap.style.display = 'none';
          ticketingEl.style.display = 'block';
          }
        }
      })
      } else {
        return
      }
    },
    cleanTimer() {
      clearInterval(this.timer);
      this.timer = null;
    },
    preInit() {
      this.pre = true;
      this.setListTicketData();
      const area_info = this.ticket_info.session_info.find( item => item.session_name === this.session_name).area_info;
      const ticket_type_info = area_info.find( item => item.area_name === this.area_name).ticket_type_info;
      this.setTicketData({ stateData: 'ticket_type_info', data: ticket_type_info });
    },
    scrollToPosition(){
      const cardTop = this.$refs.cartContent.offsetTop;
      window.scrollTo({
        top: cardTop - 60,
        behavior: 'smooth' })
    },

  }
}
</script>

<style scoped lang="scss">
.num-wrap {
  width: 100px;
  & input {
    width: 50px;
    outline: 0;
    border: 0;
    background: transparent;
  }
}
.icon {
  filter: none;
  &:hover{
    filter: var(--white-filter);
    cursor: pointer;
  }
}
.icon-qty {
  filter: var(--white-filter);
  &:hover{
    filter: none;
    cursor: pointer;
  }
}
.but-ticket-notice {
  box-shadow: 0px 3px 6px #00000029;
  height: 300px;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 8px;
    background-color: var(--bs-gray-200);
  }
  //bar 本體
  &::-webkit-scrollbar-thumb {
    background-color: var(--primary-color);
  }
}
.disable-btn {
  width: 343px;
  color: #fff;
  background-color: var(--secondary-color);
  border: none;
}
.time-icon {
  filter: var(--white-filter);
}
@media(max-width:1200px){
  .btn-outline-primaryA {
    padding: 0.4rem 1.5rem;
  }
  .checkout-wrap .btn-outline-primaryA {
    width: 100%;
  }
}
</style>