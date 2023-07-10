<template>
  <h3 class="text-primary mb-4">我的收藏</h3>
  <SearchOrderDate />
  <section class="d-flex flex-wrap gap-3 mb-3">
    <div class="collection bg-cover rounded text-white position-relative">
      <div class="position-absolute bottom-0">
        <h3 class="fw-bold">楊丞琳</h3>
        <p class="fs-5">世界巡回演唱會</p>
      </div>
    </div>
    <div class="collection bg-cover rounded text-white position-relative">
      <div class="position-absolute bottom-0">
        <h3 class="fw-bold">楊丞琳</h3>
        <p class="fs-5">世界巡回演唱會</p>
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
  width: 380px;
  height: 210px;
  background-image: url('../../../assets/images/products/concert4.jpg');
  & .position-absolute {
    left: 1rem;
  }
}
</style>