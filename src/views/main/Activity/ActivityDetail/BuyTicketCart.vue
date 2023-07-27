<template>
  <h5 class="fs-18 text-secondary mb-3">票券內容</h5>
  <div class="row flex-column flex-md-row justify-content-center gap-3 gap-lg-0 mb-4">
    <div class="col-12 col-lg-6">
      <div>
        <img :src="ticket_info.ticket_image_url" class="img-fluid roundedM" alt="">
      </div>
    </div>
    <div class="col-12 col-lg-6">
      <div class="roundedM bg-primary text-white p-4 mb-3">
        <p class="fs-5 mb-1">{{ basic_info.performer }}</p>
        <p class="fs-18 border-bottom pb-3">{{ basic_info.event_name }}</p>
        <h4 class="mb-3">{{ area_name }}</h4>
        <h4 class="border-bottom pb-3 mb-3">{{ selectedTicketName }}</h4>
        <!-- <h4 class="border-bottom pb-3 mb-3">早鳥票 · A排 · 347</h4> -->
        <div class="d-flex justify-content-between">
          <h4 class="mb-0">$ {{ ticketPrice }} x {{ ticket_number }}</h4>
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
        <h3 class="text-danger fw-bold">NTD {{ totalAmount }}</h3>
      </div>
      <div class="d-flex justify-content-end gap-3">
        <button
          type="button" class="btn btn-outline-primaryA"
          @click.prevent="() => $router.go(-1)">
          重新選位
        </button>
        <button
          type="button" class="btn btn-outline-primaryA"
          @click.prevent="addToTicketList">
          加入購票清單
        </button>
        <button
          v-if="basic_info.event_status === 2"
          type="button" class="btn btn-outline-primaryA d-flex gap-2"
          @click.prevent="goCheckout">
          <p class="mb-0">直接結帳</p>
          <img src="../../../../assets/images/icons/right-arrow.svg" alt="right-arrow" class="icon">
        </button>
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
  <messageModal ref="messageModal">
    <p>已成功加入購票清單！</p>
      <button 
      @click.prevent="goTicketList"
      type="button" class="ms-auto mt-2 btn btn-outline-primaryB px-2">確認</button>
   
  </messageModal>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';
import loginModal from "../../../../components/LoginModal";
import messageModal from "../../../../components/gc/messageModal.vue";

export default {
  components: {
    loginModal, messageModal
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapState('activity', ['basic_info', 'ticket_info', 'ticket_number', 'area_name' , 
    'selectedTicketName', 'area_status', 'orderData']),
    ...mapGetters('user', ['getLoginData', 'getLoginStatus', 'getMemberData']),
    ...mapGetters('activity', ['ticketPrice', 'ticket_id']),
    totalAmount() {
      return this.ticketPrice * this.ticket_number;
    }
  },
  mounted() {
    // this.buyTicktet()
  },
  methods: {
    ...mapMutations('activity', ['setTicketData', 'minusQty','plusQty']),
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
              console.log(res.data);
              this.$refs.messageModal.showModal();
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
          if (res.data.status_code === 'SYSTEM_1000') {
            this.setTicketData({ stateData: 'orderData', data: res.data.data });
            this.$router.push('checkout');
          }
        }).catch(error => {
            console.error('error occurred:', error);
        })
    },
    goTicketList() {
      this.$refs.messageModal.hideModal();
      this.$router.push({ name: 'TicketList', params: { memberID: this.getMemberData.data.id } });
    }
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
</style>