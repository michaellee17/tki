<template>
  <h3 class="text-primary mb-4">獲獎紀錄</h3>
  <SearchOrderDate />
  <section class="d-flex flex-wrap gap-3 justify-content-center">
    <OrderAngleCard>
        <h4 class="ellipsis-1">BLACKPINK高雄站演唱會</h4>
        <p>5/23 VIP A區．18:00 入場</p>
        <div class="d-flex justify-content-between align-items-center pb-3">
          <p class="fs-18 mb-0">恭喜獲獎！</p>
          <button type="button" class="text-white btn border rounded-pill px-3">查看領獎資訊</button>
        </div>
    </OrderAngleCard>
    <OrderAngleCard>
        <h4 class="ellipsis-1">BLACKPINK高雄站演唱會</h4>
        <p>5/23 VIP A區．18:00 入場</p>
        <div class="d-flex justify-content-between align-items-center pb-3">
          <p class="fs-18 mb-0">恭喜獲獎！</p>
          <button type="button" class="text-white btn border rounded-pill px-3">查看領獎資訊</button>
        </div>
    </OrderAngleCard>
    <OrderAngleCard>
        <h4 class="ellipsis-1">BLACKPINK高雄站演唱會</h4>
        <p>5/23 VIP A區．18:00 入場</p>
        <div class="d-flex justify-content-between align-items-center pb-3">
          <p class="fs-18 mb-0">恭喜獲獎！</p>
          <button type="button" class="text-white btn border rounded-pill px-3">查看領獎資訊</button>
        </div>
    </OrderAngleCard>
    <OrderAngleCard>
      <h4 class="ellipsis-1">BLACKPINK高雄站演唱會高雄站演唱會高雄站演唱會</h4>
        <p>5/23 VIP A區．18:00 入場</p>
        <div class="d-flex justify-content-between align-items-center pb-3">
          <p class="fs-18 mb-0">恭喜獲獎！</p>
          <button type="button" class="text-white btn border rounded-pill px-3">查看領獎資訊</button>
        </div>
    </OrderAngleCard>
  </section>
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

</style>