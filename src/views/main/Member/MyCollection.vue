<template>
  <h3 class="text-primary mb-4">我的收藏</h3>
  <section class="d-flex flex-wrap gap-4 mb-3">
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
  <div class="d-flex justify-content-end">
    <PaginationA />
  </div>
</template>

<script>
import PaginationA from "../../../components/PaginationA.vue";

export default {
  components: { PaginationA }
}
</script>

<style scoped lang="scss">
.collection {
  width: 465px;
  height: 262px;
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