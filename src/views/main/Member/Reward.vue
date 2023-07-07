<template>
  <h3 class="text-primary mb-4">獲獎紀錄</h3>
  <SearchOrderDate />
  <OrderAngleCard></OrderAngleCard>
  <PaginationA />
</template>

<script>
import SearchOrderDate from "../../../components/SearchOrderDate.vue";
import PaginationA from "../../../components/PaginationA.vue";
import OrderAngleCard from "../../../components/OrderAngleCard.vue";
export default {
  components: { SearchOrderDate, OrderAngleCard, PaginationA }
}
</script>