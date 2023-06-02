<template>
  <div class="container">
    <div class="row ">
      <div v-for="auction in products" :key="auction" class="col-6 col-md-3 mb-4">
        <ProductCard v-bind="auction" :endDate="new Date(auction.endDate)" />
      </div>
    </div>
  </div>
</template>

<script>

import ProductCard from "../molecules/Product/ProductCard.vue";
import { products } from "../../data/auctions.json";

export default {
  components: { ProductCard },
  data() {
    return {
      products,
    };
  },
};
</script>