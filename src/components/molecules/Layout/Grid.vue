<template>
  <div
    class="row align-items-stretch"
  >
    <div
      class="grid-item col-md-4 col-6"
      v-for="item in items"
      :key="item"
    >
      <product-card
        v-bind="item"
        :endDate="new Date(item.endDate)"
      ></product-card>
    </div>
  </div>
</template>

<script>
import ProductCard from "../Product/ProductCard.vue";
export default {
  components: { ProductCard },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped="scoped">
.grid-item{
  padding-bottom:24px;
}
:deep(.prod-card-counter){
  margin-top:-15px!important;
}
@media (max-width: 767.98px) {
  :deep(.prod-card-counter){
  margin-top:0px!important;
}
}
@media (min-width: 768px) and (max-width: 1024px) {
  :deep(.prod-card-counter) {
    margin-top:0px!important;
  }
}
@media (max-width: 767.98px) {
.row{
  padding:10px;
}
}

</style>
