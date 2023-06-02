<template>
  <div class="header_mini_cart">
    <div class="container top_header_mini_cart d-inline-flex p-0">
      <linked-wrapper :location="getLocation">
        <img class="img-thumbnail" :src="$getFileSource(photos[0])" :alt="name" />
      </linked-wrapper>
      <div class="top_header_mini_cart_info text-start ms-3">
        <linked-wrapper :location="getLocation" :removeDecorations="true"
          ><span class="fw-bold">{{ name }}</span></linked-wrapper
        >
        <br />
        <span>{{ qty }}</span
        >x
        <span>{{ $formatPrice(price) }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import LinkedWrapper from "../../atoms/LinkWrapper/LinkWrapper.vue";

export default {
  props: {
    id: {
      type: Number,
    },
    photos: {
      type: Array,
    },
    name: {
      type: String,
    },
    qty: {
      type: Number,
    },
    price: {
      type: Number,
    },
  },
  components: { LinkedWrapper },
  computed: {
    getLocation() {
      return this.$buildProductURL(this.name,this.id);
    }
  }
};
</script>
<style scoped="scoped">
.top_header_mini_cart img {
  width: 70px;
  height: 70px;
}
@media screen and (min-width: 1400px) {
  .subtitle-responsive {
    display: none !important;
  }
}
</style>
