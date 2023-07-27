<template>
  <h3 class="text-primary mb-4">訂單記錄</h3>
  <div class="border-bottom row text-center mb-3">
    <p class="col-4 nav-tab-primary py-2" :class="{ 'active': order_status === 1 }" @click="order_status = 1">待付款</p>
    <p class="col-4 nav-tab-primary py-2" :class="{ 'active': order_status === 2 }" @click="order_status = 2">付款成功</p>
    <p class="col-4 nav-tab-primary py-2" :class="{ 'active': order_status === 3 }" @click="order_status = 3">付款失敗</p>
  </div>
  <!-- 訂單篩選時間先隱藏 -->
  <!-- <SearchOrderDate /> -->
  <section class="d-flex flex-wrap gap-4">
    <OrderAngleCard>
      <ul>
        <li>
          <h4 class="fw-bold">5/23 BLACKPINK</h4>
        </li>
        <li>
          <p>BLACKPINK高雄站演唱會 2023｜BORN PINK</p>
        </li>
        <li class="d-flex justify-content-between">
          <p>訂單編號 : E01-P000-000-001</p>
          <p>2/16</p>
        </li>
        <li class="d-flex justify-content-between">
          <p>張數</p>
          <p>2張</p>
        </li>
        <li class="d-flex justify-content-between">
          <p>線上刷卡</p>
          <p>NTD 8,800</p>
        </li>
        <li class="d-flex justify-content-between">
          <p>19:32:48</p>
          <p>信用卡付款成功</p>
        </li>
      </ul>
    </OrderAngleCard>
    <OrderAngleCard v-for="item in orders" :key="item.order_id">
      <ul>
        <li>
          <h4 class="fw-bold">{{ item.session_area }}</h4>
        </li>
        <li>
          <p>{{ item.event_name }}</p>
        </li>
        <li class="d-flex justify-content-between">
          <p>訂單編號:{{ item.order_number }}</p>
          <p>{{ item.created_at }}</p>
        </li>
        <li class="d-flex justify-content-between">
          <p>張數</p>
          <p>{{ item.ticket_number }}張</p>
        </li>
        <li class="d-flex justify-content-between">
          <p>線上刷卡</p>
          <p>{{ item.order_amount }}</p>
        </li>
        <li class="d-flex justify-content-between">
          <p>19:32:48</p>
          <p>信用卡付款成功</p>
        </li>
      </ul>
    </OrderAngleCard>
  </section>
  <div class="d-flex justify-content-end">
    <PaginationA :total-pages="totalPages" :current-page="currentPage" @page-changed="changePage" />
  </div>
</template>
<script>
import SearchOrderDate from "../../../components/SearchOrderDate.vue";
import PaginationA from "../../../components/PaginationA.vue";
import OrderAngleCard from "../../../components/OrderAngleCard.vue";
import { mapGetters, mapActions } from 'vuex';
export default {
  components: { SearchOrderDate, OrderAngleCard, PaginationA },
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
  },
  methods: {
    getOrders() {
      const apiUrl = `${process.env.VUE_APP_PATH}/order/get-list`;
      const accessToken = this.getLoginData.access_token
      const params = {
        payment_type:this.order_status,
        limit:this.currentPage, //總回傳筆數，預設為4
        page:1, //總回傳頁數，預設為1
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
</style>