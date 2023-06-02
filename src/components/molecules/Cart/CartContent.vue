<template>
  <div class="container Mini-cart mx-auto pt-4 pb-4 ">
    <div
      v-if="items !== undefined || items.length !== 0"
      class=" mini-cart-items"
    >
      <div v-for="item in items" :key="item" class=" mini-cart-item-wrapper">
        <CartItem class="mini-cart-item" v-bind="item" />
      </div>
    </div>

    <div class="fw-bold text-center" v-if="items.length === 0">
      No products in cart
    </div>
    <template v-else>
      <hr class="separator mx-auto" />
      <div class="Mini-cart_subtotal text-center">
        <span class="text-uppercase" style="font-size:12px;">Subtotal: </span>
        <span class="fw-bolder fs-6">{{ subtotalValue }}</span>
      </div>
      <hr class="separator mx-auto" />
      <div class="fluid-container Mini-cart_buttons d-block">
        <ButtonFilled
          :size="'small'"
          :text="'View Cart'"
          class="cart-btn text-white radius"
          :location="'/cart'"
        />

        <ButtonFilled
          :size="'small'"
          :text="'Checkout'"
          class="cart-btn text-white radius"
          :location="'/checkout'"
        />
      </div>
    </template>
  </div>
</template>

<script>
import ButtonFilled from "../../atoms/Button/ButtonFilled.vue";
import CartItem from "../../atoms/Cart/CartItem.vue";

export default {
  components: { ButtonFilled, CartItem },
  props: {
    items: {
      type: Array,
    },
    subtotal: {
      type: String,
    },
  },
  computed: {
    subtotalValue() {
      return this.subtotal ?? 0;
    },
  },
};
</script>

<style scoped="scoped">
.separator {
  color: #606060;
  margin-bottom: 15px !important;
}
.Mini-cart_submenu {
  width: 400px;
}
.Mini-cart {
  width: 320px;
  background: white;
  box-shadow: 0 5px 15px 4px rgb(0 0 0 / 6%);
  height: fit-content;
  right: 0;
  z-index: 101;
  padding: 20px !important;
}
.top_header_mini_cart img {
  width: 70px !important;
  height: 70px !important;
}
.cart-btn {
  width: 100% !important;
  padding: 8px 0 !important;
  font-weight: 600 !important;
  cursor: pointer;
  margin-top: 10px;
}
.mini-cart-item {
  margin-bottom: 20px;
}
.mini-cart-items > .mini-cart-item-wrapper:not(:last-child) {
  border-bottom: solid 1px;
  border-color: #bababa !important;
  margin-bottom: 20px;
}
</style>
