<template>
  <h3 class="text-primary mb-4">我的票券</h3>
  <!-- <TicketAngleCard /> -->
  <section class="d-flex flex-wrap gap-4">
    <OrderAngleCard>
      <ul>
        <li>
          <h4 class="fw-bold">BLACKPINK高雄站演唱會</h4>
        </li>
        <li>
          <p>5/23 VIP A區．18:00 入場</p>
        </li>
        <li class="d-flex justify-content-between align-items-center pb-3">
          <p class="mb-0">活動詳情</p>
          <button type="button" class="btn btn-outline-light rounded-pill px-3">下載 APP</button>
        </li>
      </ul>
    </OrderAngleCard>
    <OrderAngleCard v-for="item in tickets" :key="item.event_id">
      <ul>
        <li>
          <h4 class="fw-bold">{{ item.event_name }}</h4>
        </li>
        <li>
          <p>{{ item.session_area }}</p>
        </li>
        <li class="d-flex justify-content-between align-items-center pb-3">
          <p class="mb-0">活動詳情</p>
          <button type="button" class="btn btn-outline-light rounded-pill px-3">下載 APP</button>
        </li>
      </ul>
    </OrderAngleCard>
  </section>
  <div class="d-flex justify-content-end">
    <PaginationA :total-pages="1" :current-page="1" @page-changed="changePage" />
  </div>
</template>
<script>
import PaginationA from "../../../components/PaginationA.vue";
import TicketAngleCard from "../../../components/TicketAngleCard.vue";
import OrderAngleCard from "../../../components/OrderAngleCard.vue";
import { mapGetters, mapActions } from 'vuex';
export default {
  components: { TicketAngleCard, PaginationA, OrderAngleCard },
  data() {
    return {
      tickets: [],
    }
  },
  computed: {
    ...mapGetters('user', ['getLoginStatus', 'getMemberData', 'getLoginData']), // 將 getLoginStatus 映射到計算屬性中
  },
  mounted() {
    this.getTickets()
  },
  methods: {
    getTickets() {
      const apiUrl = `${process.env.VUE_APP_PATH}/user/my-tickets`;
      const accessToken = this.getLoginData.access_token
      const params = {
        limit:99, //總回傳筆數，預設為4
        page:1, //總回傳頁數，預設為1
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
            console.log(this.tickets);
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