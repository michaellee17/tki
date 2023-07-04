<template>
  <h3 class="text-primary mb-4">我的票券</h3>
  <TicketAngleCard />
  <PaginationA />
</template>
<script>
import PaginationA from "../../../components/PaginationA.vue";
import TicketAngleCard from "../../../components/TicketAngleCard.vue";
export default {
  components: { TicketAngleCard, PaginationA }
}
</script>
<style scoped lang="scss">
.payment {
  font-size: 22px;
  color: var(--primary-color);
  opacity: 0.5;
  padding: 5px 15px;
  margin-bottom: 0;
  &.payment.active {
    opacity: 1;
    border-bottom: 6px solid #F5742E;
  }
}
</style>