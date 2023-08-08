<template>
  <h3 class="text-primary mb-4">訂單記錄</h3>
  <div class="order-status border-bottom row text-center mb-4">
    <p class="col-4 nav-tab-primary py-2" :class="{ 'active': order_status === 1 }" @click="order_status = 1">待付款</p>
    <p class="col-4 nav-tab-primary py-2" :class="{ 'active': order_status === 2 }" @click="order_status = 2">付款成功</p>
    <p class="col-4 nav-tab-primary py-2" :class="{ 'active': order_status === 3 }" @click="order_status = 3">付款失敗</p>
  </div>
  <!-- 訂單篩選時間先隱藏 -->
  <!-- <SearchOrderDate /> -->
  <div
    v-if="(order_status === 1 && orders.waiting_payment && orders.waiting_payment.length === 0) || 
      (order_status === 2 && orders.success_payment && orders.success_payment.length === 0) || 
      (order_status === 3 && orders.fail_payment && orders.fail_payment.length === 0)" class="text-center mt-2">
    <p>目前尚無資料。</p>
  </div>
  <section>
    <div v-if="order_status === 1" class="d-flex flex-wrap gap-4">
      <OrderAngleCard v-for="item in orders.waiting_payment" :key="item.order_id" :top-image="item.main_imageH_url">
        <ul>
          <li>
            <h4 class="fw-bold">{{ item.performer }}</h4>
          </li>
          <li>
            <p class="ellipsis-1 event_name">{{ item.event_name }}</p>
          </li>
          <li class="d-flex justify-content-between">
            <p>{{ item.session_area }}</p>
          </li>
          <li class="d-flex justify-content-between align-items-center">
            <p class="price">${{ item.ticket_price.toLocaleString() }} x {{ item.ticket_number }}</p>
            <router-link v-if="item.order_status === 0" :to="'/activity/detail/' + $convertToSlug(item.event_name, item.event_id) + '/buy-ticket/checkout'" class="btn px-3 link_button">付款</router-link>
            <router-link v-if="item.order_status === 1" :to="'/activity/detail/' + $convertToSlug(item.event_name, item.event_id) + '/buy-ticket/checkout'" class="btn px-3 link_button">重新付款</router-link>
            <router-link v-if="item.order_status === 2" :to="'/activity/detail/' + $convertToSlug(item.event_name, item.event_id) + '/buy-ticket/checkout'" class="btn px-3 link_button">ATM付款詳情</router-link>
          </li>
          <li class="d-flex justify-content-between">
            <p>{{ item.created_at }}</p>
            <p v-if="item.order_status === 0">選擇付款方式並且進行付款</p>
            <p v-if="item.order_status === 1">信用卡付款失敗</p>
            <p v-if="item.order_status === 2">票券等待ATM匯款中</p>
          </li>
        </ul>
      </OrderAngleCard>
    </div>
    <div v-if="order_status === 2" class="d-flex flex-wrap gap-4">
      <OrderAngleCard v-for="item in orders.success_payment" :key="item.order_id" :top-image="item.main_imageH_url">
        <ul>
          <li>
            <h4 class="fw-bold">{{ item.performer }}</h4>
          </li>
          <li>
            <p class="ellipsis-1 event_name">{{ item.event_name }}</p>
          </li>
          <li class="d-flex justify-content-between">
            <p>訂單編號:{{ item.order_number }}</p>
          </li>
          <li class="d-flex justify-content-between">
            <p>張數</p>
            <p>{{ item.ticket_number }}張</p>
          </li>
          <li class="d-flex justify-content-between">
            <p>訂單金額</p>
            <p>NTD {{ item.order_amount.toLocaleString() }}</p>
          </li>
          <li class="d-flex justify-content-between">
            <p>{{ item.created_at }}</p>
            <p>{{ item.payment_description }}</p>
          </li>
        </ul>
      </OrderAngleCard>
    </div>
    <div v-if="order_status === 3" class="d-flex flex-wrap gap-4">
      <OrderAngleCard v-for="item in orders.fail_payment" :key="item.order_id" :top-image="item.main_imageH_url">
        <ul>
          <li>
            <h4 class="fw-bold">{{ item.performer }}</h4>
          </li>
          <li>
            <p class="ellipsis-1 event_name">{{ item.event_name }}</p>
          </li>
          <li class="d-flex justify-content-between">
            <p>訂單編號:{{ item.order_number }}</p>
          </li>
          <li class="d-flex justify-content-between">
            <p>張數</p>
            <p>{{ item.ticket_number }}張</p>
          </li>
          <li class="d-flex justify-content-between">
            <p>訂單金額</p>
            <p>NTD {{ item.order_amount.toLocaleString() }}</p>
          </li>
          <li class="d-flex justify-content-between">
            <p>{{ item.created_at }}</p>
            <p>{{ item.payment_description }}</p>
          </li>
        </ul>
      </OrderAngleCard>
    </div>
  </section>
  <div class="d-flex justify-content-end">
    <PaginationA :total-pages="totalPages" :current-page="currentPage" @page-changed="changePage" />
  </div>
  <MessageModal ref="failModal" :error="true">
    <p class="text-center mb-0">支付沒有完成，請重新操作！</p>
  </MessageModal>
</template>
<script>
import SearchOrderDate from "../../../components/SearchOrderDate.vue";
import PaginationA from "../../../components/PaginationA.vue";
import OrderAngleCard from "../../../components/OrderAngleCard.vue";
import MessageModal from "../../../components/gc/MessageModal.vue";

import { mapGetters, mapActions } from 'vuex';
export default {
  components: { SearchOrderDate, OrderAngleCard, PaginationA, MessageModal },
  data() {
    return {
      // 1 = 待付款訂單
      // 2 = 付款完成
      // 3 = 付款失敗
      orders: [],
      order_status: 1,
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
    order_status(nVal,oVal){
      if(nVal){
        this.getOrders()
      }
    },
    currentPage(nVal,oVal){
      if(nVal){
        this.getOrders()
      }
    }
  },
  mounted() {
    this.getOrders()
    if(this.$route.query.status && this.$route.query.status === '0') {
      this.$refs.failModal.showModal();
    }
  },
  methods: {
    changePage(page) {
      // 分頁變更事件處理器
      this.currentPage = page;
    },
    getOrders() {
      const apiUrl = `${process.env.VUE_APP_PATH}/order/get-list`;
      const accessToken = this.getLoginData.access_token
      const params = {
        payment_type:this.order_status,
        limit:this.itemsPerPage, 
        page:this.currentPage, 
      };
      this.axios.post(apiUrl, params, {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        },
      })
        .then(res => {
          if (res.data.status_code === 'SYSTEM_1000') {
            this.orders = res.data.data
            this.total = res.data.total
          }
        });
    },
  },
}
</script>
<style scoped lang="scss">
h4 {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
// .event_name{
//   max-width: 350px;
// }
.price{
  font-size:24px;
}
.link_button{
  background: #FFFFFF1F;
  border: 1px solid #FFFFFF;
  border-radius: 28px;
  opacity: 1;
  // width: 70px;
  // height: 30px;
  color:white;
  text-align: center;
  &:hover {
    opacity: 0.8;
  }
}
.nav-tab-primary:hover {
  cursor: pointer;
}
@media(max-width: 576px) {
  .order-status p {
    font-size: 1rem;
  }
}
</style>