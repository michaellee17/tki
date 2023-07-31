<template>
  <h5 class="fs-18 text-secondary mb-3">購票資訊</h5>
  <div class="row flex-column flex-md-row justify-content-center gap-3 gap-lg-0">
    <div class="col-12 col-lg-6">
      <div class="">
        <img :src="ticket_info.ticket_image_url" class="img-fluid" alt="">
      </div>
    </div>
    <div class="col-12 col-lg-6">
      <p class="fs-5">場次日期：{{ session_name }}</p>
      <p class="fs-5">場次分區：{{ area_name }}</p>
      <div class="d-flex align-items-center mb-2">
        <p class="fs-5">場次票價：</p>
        <!-- <p class="text-secondary text-decoration-line-through me-2">NTD 6,800</p> -->
        <p v-if="ticketPrice" class="text-danger fs-5 v-">NTD {{ ticketPrice }}</p>
      </div>
      <p>選擇您要購買的票種</p>
      <div class="d-flex gap-4 align-items-center mb-3">
        <div class="flex-grow-1">
          <select
            id="ticketType" v-model="TicketName" name="ticketType"
            class="form-select">
            <option>請選擇</option>
            <option v-for="ticket in ticket_type_info" :key="ticket.ticket_name" :value="ticket.ticket_name">{{ ticket.ticket_name }}</option>
          </select>
        </div>
        <div class="num-wrap d-flex justify-content-center align-items-center gap-3 position-relative">
          <img
            src="../../../../assets/images/icons/remove.svg" alt="minus" 
            class="icon-qty position-absolute start-0"
            @click="minusQty">
          <div>
            <input v-model="ticket_number" type="text" class="fs-4 text-center" readonly>
          </div>
          <!-- <h4 class="mb-0">{{ ticket_number }}</h4> -->
          <img
            src="../../../../assets/images/icons/add.svg" alt="plus" 
            class="icon-qty position-absolute end-0"
            @click="plusQty">
        </div>
      </div>
      <p>請選擇選位方式</p>
      <div class="position-relative choose-seat mb-3">
        <input
          id="computer" type="radio" class="d-none" name="option"
          checked>
        <label for="computer" class="fs-5 border-dark border px-4 py-3">電腦配位</label>
        <input id="myself" type="radio" class="d-none" name="option">
        <!-- 先隱藏自行選位 -->
        <!-- <label for="myself" class="fs-5 border-dark border border-start-0 px-4 py-3">自行選位</label> -->
      </div>
      <small class="text-danger">若剩餘空位的數量不滿足張數條件，或是剩餘的空位已經沒有連續座位，則電腦配位將會顯示【已無足夠數量】或【已無足夠連續座位】等相關訊息，可選擇其他區域或重新調整張數需求後，再送出訂購需求。</small>
      <div class="d-flex justify-content-between mt-3">
        <router-link to="session">
          <button type="button" class="btn btn-outline-primaryA">上一步</button>
        </router-link>
        <!-- 先隱藏to="seat" -->
        <router-link to="cart">
          <button type="button" class="btn btn-outline-primaryA">下一步</button>
        </router-link>
      </div>
    </div>
  </div>
  <MessageModal ref="ticketPlusModal">
    <p class="text-center mb-0">您已經超過購買數量限制：<span class="text-danger px-1">{{ ticket_limit }}</span>張
      ，請依照購買限制選擇您的票券。
    </p>
  </MessageModal>
  <MessageModal ref="ticketMinusModal">
    <p class="text-center mb-0">購買數量不得小於 1 張。</p>
  </MessageModal>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex';
import MessageModal from "../../../../components/gc/MessageModal.vue";

  export default {
    components: {
      MessageModal,
    },
    data() {
      return {
      }
    },
    computed: {
      ...mapState('activity', ['ticket_info', 'session_name', 'ticket_limit', 'area_name', 'area_status', 'ticket_type_info', 
      'recommendList', 'ticket_number', 'selectedTicketName']),
      ...mapGetters('activity', ['ticketPrice']),
      TicketName: {
        get(){
          return this.selectedTicketName
        },
        set(value) {
          this.setTicketData({ stateData: 'selectedTicketName', data: value });
        }
      }
    },
    mounted() {
      this.setTicketData({ stateData: 'selectedTicketName', data: this.ticket_type_info[0].ticket_name });
      // this.selectedTicketName = this.ticket_type_info.length > 0 ? this.ticket_type_info[0].ticket_name : ''
      this.setTicketData({ stateData: 'ticket_number', data: 1 });
    },
    methods: {
      ...mapMutations('activity', ['setTicketData', 'minus', 'plus' ]),
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
        }
        console.log(this.ticket_number === -1);
        if(this.ticket_limit === -1 || this.ticket_number < this.ticket_limit){
          this.plus();
        }
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
.icon-qty {
  &:hover{
    filter: var(--primary-filter);
    cursor: pointer;
  }
}
.choose-seat input:checked+label {
  color: #fff;
  background-color: var(--primary-color);
}
</style>