<template>
  <div class="mycart position-relative">
    <link-wrapper
      :external="false"
      class="cart-contents text-end d-flex justify-content-end text-decoration-none align-items-center"
      :location="'/cart'"
      title="View your shopping cart"
    >
      <div>
        <span class="mycart-title fw-bolder">My Cart</span>
        <br />
        <span class="price"
          >{{ itemCount }} item{{
            itemCount > 1 || itemCount === 0 ? "s" : ""
          }}
          - {{ $formatPrice($store.getters.getSubtotal) }}</span
        >
      </div>
      <div class="ms-2 mycart-icon mt-3 mb-3">
        <font-awesome-icon :icon="['fas', 'shopping-basket']" />
      </div>
    </link-wrapper>
    <CartContent
      class="mycart-content"
      :items="items"
      :subtotal="$formatPrice($store.getters.getSubtotal)"
    />
  </div>
</template>

<script>
import CartContent from "./CartContent.vue";
import LinkWrapper from "../../atoms/LinkWrapper/LinkWrapper.vue";


export default {
  components: { CartContent, LinkWrapper },
  data() {
    return {
      items: this.$store.state.cart.items,
    };
  },
  computed: {
    itemCount() {
      return this.$store.getters.getTotalItems;
    },
  },
};
</script>

<style scoped="scoped">
.price {
  color: #666;
}
a.cart-contents {
  color: #9999 !important;
  font-size: 14px;
}
.mycart:hover .mycart-content {
  visibility: visible;
  opacity: 1;
}
.mycart-icon > svg,
.mycart:hover .mycart-title {
  color: var(--primary-color);
}
.mycart-title {
  color: #484848;
}
.mycart-content {
  visibility: hidden;
  opacity: 0;
  transition: all 0.25s ease-in-out;
  position: absolute;
  bottom: 0;
  top: 120%;
}
.mycart-icon svg {
  width: 25px !important;
  height: 24px;
}
</style>
