<template>
  <h3 class="text-primary mb-4">訂單記錄</h3>
  <div class="border-bottom row text-center mb-3">
    <p class="col-4 nav-tab-primary py-2 active">待付款</p>
    <p class="col-4 nav-tab-primary py-2">付款成功</p>
    <p class="col-4 nav-tab-primary py-2">付款失敗</p>
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
    <OrderAngleCard>
      <ul >
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
  </section>
  <div class="d-flex justify-content-end">
    <PaginationA />
  </div>
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
h4 {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
// .nav-tab-primary {
//   padding: 5px 20px;
// }
</style>