<template>
  <h3 class="text-primary mb-4">我的收藏</h3>
  <SearchOrderDate />
  <section class="d-flex flex-wrap gap-3 mb-3">
    <div class="collection bg-cover text-white position-relative">
      <div class="position-absolute bottom-0">
        <h4 class="fw-bold">楊丞琳</h4>
        <p>世界巡回演唱會</p>
      </div>
    </div>
    <div class="collection bg-cover text-white position-relative">
      <div class="position-absolute bottom-0">
        <h4 class="fw-bold">楊丞琳</h4>
        <p>世界巡回演唱會</p>
      </div>
    </div>
  </section>
  
  <PaginationA />
</template>

<script>
import SearchOrderDate from '../../../components/SearchOrderDate.vue';
import PaginationA from "../../../components/PaginationA.vue";

export default {
  components: { SearchOrderDate, PaginationA }
}
</script>

<style scoped lang="scss">
.collection {
  /* 最寬只能放 390 */
  width: 390px;
  height: 220px;
  border-radius: 20px;
  background-image: url('../../../assets/images/products/concert4.jpg');
  @media(max-width: 576px) {
    width: 305px;
    height: 172px;
  }
  & .position-absolute {
    left: 1rem;
  }
}
</style>