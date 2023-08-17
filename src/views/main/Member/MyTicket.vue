<template>
  <h3 class="text-primary mb-4">我的票券</h3>
  <!-- <TicketAngleCard /> -->
  <div
    v-if="tickets.length === 0" class="text-center mt-2">
    <p>目前尚無資料。</p>
  </div>
  <section class="d-flex flex-wrap gap-4">
    <OrderAngleCard  v-for="item in tickets" :key="item.event_id" :top-image="item.main_imageH_url">
      <ul>
        <li>
          <h4 class="fw-bold ellipsis-1 fs-22">{{ item.event_name }}</h4>
        </li>
        <li>
          <p>{{ item.session_area }}</p>
        </li>
        <li class="d-flex justify-content-between align-items-center pb-3">
          <router-link :to="'/activity/detail/' + $convertToSlug(item.event_name, item.event_id, item.custom_url) + '/buy-ticket/session'" class="mb-0 link">活動詳情</router-link>
          <button type="button" class="btn btn-outline-light rounded-pill px-3">下載 APP</button>
        </li>
      </ul>
    </OrderAngleCard>
  </section>
  <div class="d-flex justify-content-end">
    <PaginationA :total-pages="totalPages" :current-page="currentPage" @page-changed="changePage" />
  </div>
  <MessageModal ref="successModal" :success="true">
    <p class="text-center mb-0">費用已支付完成！</p>
  </MessageModal>
</template>
<script>
import PaginationA from "../../../components/PaginationA.vue";
import TicketAngleCard from "../../../components/TicketAngleCard.vue";
import OrderAngleCard from "../../../components/OrderAngleCard.vue";
import MessageModal from "../../../components/gc/MessageModal.vue";
import { mapGetters, mapActions } from 'vuex';
export default {
  components: { TicketAngleCard, PaginationA, OrderAngleCard, MessageModal },
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
    if(this.$route.query.status && this.$route.query.status === '1') {
      this.$refs.successModal.showModal();
    }
  },
  methods: {
    changePage(page) {
      // 分頁變更事件處理器
      this.currentPage = page;
    },
    getTickets() {
      const apiUrl = `${process.env.VUE_APP_PATH}/user/my-tickets`;
      const accessToken = this.getLoginData.access_token
      const params = {
        limit:this.itemsPerPage, //總回傳筆數，預設為4
        page:this.currentPage, //總回傳頁數，預設為1
      };
      this.axios.get(apiUrl, {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        },
        params:params,
      })
        .then(res => {
          if (res.data.status_code === 'SYSTEM_1000') {
            this.tickets = res.data.data
            this.total = res.data.total
          }
        });
    },
  },
}
</script>
<style scoped lang="scss">
.link{
  color:white;
}
.link:hover{
  opacity: 0.6;
}
</style>