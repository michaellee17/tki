<template>
  <h5 class="fs-18 text-secondary mb-3">購票資訊</h5>
  <div class="row flex-column flex-md-row justify-content-center gap-3 gap-lg-0">
    <div class="col-12 col-lg-6">
      <div class="">
        <img src="../../../../assets/images/activity/news2.jpg" class="img-fluid" alt="">
      </div>
    </div>
    <div class="col-12 col-lg-6">
      <p class="fs-5">場次日期：{{ session_name }}</p>
      <p class="fs-5">場次分區：{{ area_name }}</p>
      <div class="d-flex align-items-center mb-2">
        <p class="fs-5">場次票價：</p>
        <!-- <p class="text-secondary text-decoration-line-through me-2">NTD 6,800</p> -->
        <p class="text-danger fs-5">NTD {{ ticketPrice }}</p>
      </div>
      <p>選擇您要購買的票種</p>
      <select
        id="ticketType" v-model="selectedTicketName" name="ticketType"
        class="form-select mb-3">
        <option>請選擇</option>
        <option v-for="ticket in ticket_type_info" :key="ticket.ticket_name" :value="ticket.ticket_name">{{ ticket.ticket_name }}</option>
      </select>
      <p>請選擇選位方式</p>
      <div class="position-relative choose-seat mb-3">
        <input
          id="computer" type="radio" class="d-none" name="option"
          checked>
        <label for="computer" class="fs-5 border-dark border px-4 py-3 border-end-0">電腦配位</label>
        <input id="myself" type="radio" class="d-none" name="option">
        <label for="myself" class="fs-5 border-dark border px-4 py-3">自行選位</label>
      </div>
      <small class="text-danger">若剩餘空位的數量不滿足張數條件，或是剩餘的空位已經沒有連續座位，則電腦配位將會顯示【已無足夠數量】或【已無足夠連續座位】等相關訊息，可選擇其他區域或重新調整張數需求後，再送出訂購需求。</small>
      <div class="d-flex justify-content-between mt-3">
        <router-link to="session">
          <button type="button" class="btn btn-outline-primaryA">上一步</button>
        </router-link>
        <router-link to="seat">
          <button type="button" class="btn btn-outline-primaryA">下一步</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

  export default {
    data() {
      return {
        selectedTicketName: ''
      }
    },
    mounted() {
      this.selectedTicketName = this.ticket_type_info.length > 0 ? this.ticket_type_info[0].ticket_name : ''
    },
    computed: {
      ...mapState('activity', ['session_name', 'area_name', 'area_status', 'ticket_type_info']),
      ...mapState('activity', ['recommendList']),
      ticketPrice() {
        const selectedTicket = this.ticket_type_info.find(ticket => ticket.ticket_name === this.selectedTicketName);
        return selectedTicket ? selectedTicket.ticket_price : '';
      },
    }
  }
</script>

<style scoped lang="scss">
.choose-seat input:checked+label {
  color: #fff;
  background-color: var(--primary-color);
}
</style>