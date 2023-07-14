<template>
  <h3 class="text-primary mb-4">購票清單</h3>
  <SearchOrderDate />
  
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
</style>