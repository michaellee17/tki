<template>
  <h5 class="fs-18 text-secondary mb-3">票券內容</h5>
  <div class="row flex-column flex-md-row justify-content-center gap-3 gap-lg-0 mb-4">
    <div class="col-12 col-lg-6">
      <div class="">
        <img src="../../../../assets/images/activity/blackpink-m.jpg" class="img-fluid roundedM" alt="">
      </div>
    </div>
    <div class="col-12 col-lg-6">
      <div class="roundedM bg-primary text-white p-4 mb-3">
        <p class="fs-5 mb-1">BLACKPINK</p>
        <p class="fs-18 border-bottom pb-3">BLACKPINK高雄站演唱會 2023｜BORN PINK</p>
        <h4 class="mb-3">BORN PINK座位特區 (票價含Sound Check 粉絲福利)</h4>
        <h4 class="border-bottom pb-3 mb-3">早鳥票 · A排 · 347</h4>
        <div class="d-flex justify-content-between">
          <h4 class="mb-0">$ 4800 x 1</h4>
          <div class="num-wrap d-flex justify-content-center align-items-center gap-3 position-relative">
            <img src="../../../../assets/images/icons/remove.svg" alt="minus" 
            class="icon position-absolute start-0"
            @click="minusQty">
            <h4 class="mb-0">{{ ticketNum }}</h4>
            <img src="../../../../assets/images/icons/add.svg" alt="plus" 
            class="icon position-absolute end-0"
            @click="plusQty">
          </div>
        </div>
      </div>
      <div class="text-end mb-4">
        <h6 class="fw-bold">總計支付金額</h6>
        <h3 class="text-danger fw-bold">NTD 4800</h3>
      </div>
      <div class="d-flex justify-content-end gap-3">
        <button type="button" class="btn btn-outline-primaryA">加入購票清單</button>
        <router-link to="checkout">
          <button type="button" class="btn btn-outline-primaryA d-flex gap-2 active">
            <p class="mb-0">直接結帳</p>
            <img src="../../../../assets/images/icons/right-arrow.svg" alt="right-arrow" class="icon">
          </button>
        </router-link>
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
</template>

<script>
export default {
  data() {
    return {
      ticketNum : 1
    }
  },
  methods: {
    minusQty () {
      if (this.ticketNum > 0) {
        this.ticketNum--;
      }
    },
    plusQty () {
      this.ticketNum++;
    }
  }
}
</script>

<style scoped lang="scss">
.num-wrap {
  width: 100px;
}
.icon {
  filter: var(--white-filter);
  &:hover{
    filter: none;
    cursor: pointer;
  }
}
</style>