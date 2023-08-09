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
          <!-- 檢查 -->
          <p class="mb-2" v-show="orderData.ticket_price">NTD {{ $currency(orderData.ticket_price * orderData.ticket_number) }}</p>
          <p class="mb-2" v-show="orderData.order_amount">NTD {{ $currency(orderData.order_amount) }}</p>
        </div>
        <h4 class="mb-3">{{ orderData.event_area }}</h4>
        <h4 class="">{{ orderData.ticket_type_name }}</h4>
        <!-- <h4 class="">早鳥票 · A排 · 347</h4> -->
      </div>
      <div class="">
        <h5 class="fs-18 text-secondary mb-3">選擇支付方式</h5>
        <div class="payment-method row justify-content-end flex-column flex-sm-row gap-3 gap-sm-0">
          <div class="col-12 col-sm-6">
            <button 
            @click.prevent="checkout('VACC')"
            type="button" class=" btn btn-outline-primaryB border-primary w-100 d-flex justify-content-between ">
              <img src="../../../../assets/images/icons/atm.svg" alt="atm" class="icon">
              <p class="mb-0">ATM付款</p>
              <img src="../../../../assets/images/icons/right-arrow.svg" alt="right-arrow" class="icon">
            </button>
          </div>
          <div class="col-12 col-sm-6">
            <button 
            @click.prevent="checkout('CREDIT')"
            type="button" class="btn btn-outline-primaryB border-primary w-100 d-flex justify-content-between">
              <img src="../../../../assets/images/icons/credit-card.svg" alt="credit-card" class="icon">
              <p class="mb-0">信用卡付款</p>
              <img src="../../../../assets/images/icons/right-arrow.svg" alt="right-arrow" class="icon">
            </button>
          </div>
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
  <MessageModal ref="errorModal" :error="true">
    <p class="text-center mb-0">發生錯誤，請稍後再試。</p>
  </MessageModal>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';
import MessageModal from "../../../../components/gc/MessageModal.vue";

export default {
  components: {
    MessageModal
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapState('activity', ['ticket_info', 'orderData']),
    ...mapGetters('user', ['getLoginData']),
    orderDate() {
      let currentDate = new Date();
      const month = String(currentDate.getMonth() + 1).padStart(2, '0');
      const day = String(currentDate.getDate()).padStart(2, '0');
      return `${month}/${day}`;
    }
  },
  methods: {
    checkout(method) {
      const apiUrl = `${process.env.VUE_APP_PATH}/event/create-payment`;
      this.axios.post(apiUrl, 
        {
          order_id: this.orderData.order_id,
          payment_method: method
        },
        {
          headers: {
            'Authorization': `Bearer ${this.getLoginData.access_token}`,
          }
        }).then(res => {
          console.log(res.data)
          if (res.data.status_code === 'SYSTEM_1000'){
            document.location.href = res.data.data
          } else {
            this.$refs.errorModal.showModal();
          }
        }).catch(error => {
            console.error('error occurred:', error);
        })
    },
  }
}
</script>

<style scoped lang="scss">
</style>