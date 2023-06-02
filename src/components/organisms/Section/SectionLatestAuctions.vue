<template>
    <Heading :title="'Latest Actions'" />
    <div class="row ">
      <div
        v-for="auction in getLimitedAuctions"
        :key="auction"
        class="col-6 col-md-3 mb-4"
      >
        <ProductCard v-bind="auction" :endDate="new Date(auction.endDate)" />
      </div>
    </div>
</template>

<script>
import Heading from "../../atoms/SectionHeading/Heading.vue";
import ProductCard from "../../molecules/Product/ProductCard.vue";
import { products } from "../../../data/auctions.json";

export default {
  components: { Heading, ProductCard },
  data() {
    return {
      auctions: products,
    };
  },
  props: {
    maxAuctions: {
      type: Number,
      default: 4
    },
  },
  computed: {
    getLimitedAuctions() {
      return this.auctions.slice(Math.max(this.auctions.length - this.maxAuctions, 0));
    },
  },
};
</script>
<style scoped="scoped">
:deep(.prod-card-counter){
  margin-top:-15px;
  border-radius:0px!important;
}

@media (max-width: 767.98px) {
  :deep(.prod-card-counter){
  margin-top:0px;
}
}
@media (min-width: 768px) and (max-width: 1024px) {
  :deep(.prod-card-counter) {
    margin-top:0px!important;
  }
}
</style>