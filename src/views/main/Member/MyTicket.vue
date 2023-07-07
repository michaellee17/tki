<template>
  <h3 class="text-primary mb-4">我的票券</h3>
  <!-- <TicketAngleCard /> -->
  <section class="d-flex flex-wrap gap-3 justify-content-center">

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
  </section>
  <PaginationA />
</template>
<script>
import PaginationA from "../../../components/PaginationA.vue";
import TicketAngleCard from "../../../components/TicketAngleCard.vue";
import OrderAngleCard from "../../../components/OrderAngleCard.vue";
export default {
  components: { TicketAngleCard, PaginationA, OrderAngleCard  }
}
</script>
<style scoped lang="scss">
h4 {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
// .payment {
//   font-size: 22px;
//   color: var(--primary-color);
//   opacity: 0.5;
//   padding: 5px 15px;
//   margin-bottom: 0;
//   &.payment.active {
//     opacity: 1;
//     border-bottom: 6px solid #F5742E;
//   }
// }
</style>