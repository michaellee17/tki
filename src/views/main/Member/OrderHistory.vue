<template>
  <h3 class="text-primary mb-4">訂單記錄</h3>
  <div class="border-bottom row text-center mb-3">
    <p class="col-4 nav-tab-primary py-2 active">付款成功</p>
    <p class="col-4 nav-tab-primary py-2">付款失敗</p>
  </div>
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
<style scoped lang="scss">
// .nav-tab-primary {
//   padding: 5px 20px;
// }
</style>