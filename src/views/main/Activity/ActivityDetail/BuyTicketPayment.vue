<template>
  <h5 class="fs-18 text-secondary mb-3">票券內容</h5>
  <div class="row flex-column flex-md-row justify-content-center gap-3 gap-lg-0 mb-4">
    <div class="col-12 col-lg-6">
      <div>
        <img :src="ticket_info.ticket_image_url" class="img-fluid roundedM" alt="">
      </div>
    </div>
    <div class="col-12 col-lg-6">
      <div class="roundedM bg-primary text-white p-4 mb-4">
        <p class="fs-5 mb-1">{{ orderData.event_session }} {{ orderData.performer }}</p>
        <p class="fs-18">{{ orderData.event_name }}</p>
        <div class="d-flex justify-content-between">
          <p class="mb-2">訂單編號 : {{ orderData.order_number }}</p>
          <p class="mb-2">{{ orderDate }}</p>
        </div>
        <div class="d-flex justify-content-between">
          <p class="mb-2">張數</p>
          <p class="mb-2">{{ orderData.ticket_number }} 張</p>
        </div>
        <div class="d-flex justify-content-between border-bottom mb-3 pb-2">
          <p class="mb-2">總計</p>
          <p class="mb-2">NTD {{ orderData.order_amount }}</p>
        </div>
        <h4 class="mb-3">{{ orderData.event_area }}</h4>
        <h4 class="">{{ orderData.ticket_type_name }}</h4>
        <!-- <h4 class="">早鳥票 · A排 · 347</h4> -->
      </div>
      <div v-if="bankData !== {}">
        <h5 class="fs-18 text-secondary mb-3">付款資訊</h5>
        <div class="d-flex gap-4 align-items-center rounded bg-primary text-white p-4 mb-3">
          <img src="../../../../assets/images/icons/atm.svg" alt="atm" width="53" class="icon">
          <p class="mb-0 fs-5">帳號 {{ bankData.code_number }}</p>
          <!-- <p class="mb-0 fs-5">帳號 204561234879</p> -->
          <p class="mb-0 fs-5">{{ bankData.bank_code }}</p>
          <!-- <p class="mb-0 fs-5">中國信託 822</p> -->
        </div>
      </div>
      <h5 class="fs-18 text-secondary mb-3">
        付款有效時間：
        <span class="text-danger">{{ bankData.payment_time_limit }}</span>
      </h5>
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
  <MessageModal ref="beforePaymentModal" :success="true">
    <p class="text-center mb-0">請於時限內至 ATM 付款。</p>
  </MessageModal> 
  <MessageModal ref="afterPaymentModal" :warning="true">
    <h4 class="text-center text-primary mb-3">已超過可購票時間</h4>
    <p class="text-center mb-0">您已經超過可購票時間，請重新選擇票券並重新付款。</p>
  </MessageModal> 
  <MessageModal ref="errorModal" :error="true">
    <p class="text-center mb-0">發生錯誤，請稍後再試。</p>
  </MessageModal>
</template>

<script>
import MessageModal from "../../../../components/gc/MessageModal.vue";
import { mapState, mapGetters, mapMutations } from 'vuex';

export default {
  components: {
    MessageModal
  },
  data() {
    return {
      bankData: {},
      timer : null,
      currentTime: ''
    }
  },
  computed: {
    ...mapState('activity', ['ticket_info', 'orderData', 'routeActivityId']),
    ...mapGetters('user', ['getLoginData']),
    orderDate() {
      let currentDate = new Date();
      const month = String(currentDate.getMonth() + 1).padStart(2, '0');
      const day = String(currentDate.getDate()).padStart(2, '0');
      return `${month}/${day}`;
    },
  },
  mounted() {
    this.scrollToPosition();
    this.getBankData();
    this.checkTime();
  },
  unmounted() {
    this.cleanTimer();
  },
  updated(){
    this.cleanTimer();
  },
  methods: {
    ...mapMutations('activity', ['setTicketData']),
    scrollToPosition(){
      window.scrollTo({
        top: 895,
        behavior: 'smooth' })
      },
    getBankData() {
      const apiUrl = `${process.env.VUE_APP_PATH}/order/get-bank-code?order_id=${this.orderData.order_id}`;
      this.axios.get(apiUrl,
        {
          headers: {
            'Authorization': `Bearer ${this.getLoginData.access_token}`,
          }
        }).then(res => {
          this.setTicketData({ stateData: 'isLoading', data: true });
          switch(res.data.status_code){
            case 'SYSTEM_1000':
              this.bankData = res.data;
              this.$refs.beforePaymentModal.showModal();
              this.setTicketData({ stateData: 'isLoading', data: false });
              break;
            /* 取號失敗: 未選擇ATM付款/訂單失敗/訂單超時 */
            case 'ORDER_4011':
              this.setTicketData({ stateData: 'isLoading', data: false });
              this.$router.push('/');
              break;
            /* 錯誤處理 */
            default:
              this.$refs.errorModal.showModal();
              setTimeout(() => {
                this.$refs.errorModal.hideModal();
                this.$router.push('/');
              }, 3000);
              this.setTicketData({ stateData: 'isLoading', data: false });
              break;
          }}).catch(error => {
              console.error('error occurred:', error);
          })
    },
    checkTime() {
      this.timer = setInterval( () => {
        this.currentTime = new Date();
        let expiredTime = new Date(this.bankData.payment_time_limit.replace(' ', 'T'));
        // let test = new Date('2023-07-28 19:32:21'.replace(' ', 'T'));
          if(this.currentTime.getTime() > expiredTime.getTime()) {
            this.$refs.afterPaymentModal.showModal();
            setTimeout(() => {
              this.$refs.afterPaymentModal.hideModal();
              this.$router.replace({ name: 'BuyTicketSession', params: { activityId: this.routeActivityId } });
            }, 3000);
            clearInterval(this.timer);
          }
      }, 1000 )
    },
    cleanTimer() {
      clearInterval(this.timer);
      this.timer = null;
      // console.log('clearpayment')
    },
  },
}
</script>

<style scoped lang="scss">
.icon {
    filter: var(--white-filter);
}
</style>