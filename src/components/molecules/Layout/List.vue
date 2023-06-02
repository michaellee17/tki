<template>
    <div
    class="row align-items-stretch mt-4"
    v-for="item in items"
    :key="item"
    >
        <product-card-wide
        v-bind="item"
        :endDate="new Date(item.endDate)"
        ></product-card-wide>
    </div>
</template>

<script>
import ProductCardWide from "../Product/ProductCardWide.vue";
export default {
  components: { ProductCardWide },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>