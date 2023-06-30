<template>
  <layout-default>
    <div class="container cart ">
      <div class="cart-header border-bottom">
        <Breadcrumb />
        <h1 class="title fw-bold">Cart</h1>
      </div>
      <template v-if="$store.state.cart.items.length > 0">
        <div class="item-cart">
          <item-cart
            class="product-cart"
            v-bind="item"
            v-for="item in $store.state.cart.items"
            :key="item"
          ></item-cart>
          <!--  -->
          <!-- Buttons -->
          <div class="row button-cart d-flex justify-content-between">
            <form
              class="col-md-8 left-side d-flex justify-content-between justify-content-md-start"
            >
              <BasicInputText
                class="coupon-input radius text-center"
                placeholder="Coupon Code"
                :required="true"
                :hasRoundedCorners="true"
              />
              <ButtonFilled
                class="button-cart-coupon text-white"
                name="Apply coupon"
                text="apply coupon"
                :hasRoundedCorners="true"
              />
            </form>
            <div class="col-md-4 right-side d-flex justify-content-end">
              <ButtonFilled
                class="button-coupon-cart fw-bold text-white"
                name="Update Cart"
                text="update cart"
                :hasRoundedCorners="true"
              />
            </div>
          </div>
          <!-- Buttons -->
        </div>
        <div class="cart-total">
          <div class="cart-total-header border-bottom">
            <h2 class="cart-title">Cart totals</h2>
          </div>
          <cart-total> </cart-total>
          <div cass="cart-total-button d-flex flex-row">
            <div class="col-md-12 d-flex justify-content-end">
              <ButtonFilled
                class="total-button fw-bold"
                :text="'Proceed to checkout'"
                :hasRoundedCorners="true"
                :location="'/checkout'"
              />
            </div>
          </div>
        </div>
      </template>

      <template v-else>
        <message-error>Your cart is currently empty.</message-error>
        <button-filled
          :location="'/shop'"
          :hasRoundedCorners="true"
          class="mt-5 btn-shop"
          >Return to shop</button-filled
        >
      </template>
    </div>
  </layout-default>
</template>

<script>
import CartTotal from "../../components/molecules/Cart/CartTotal.vue";
import ItemCart from "../../components/atoms/Cart/CartItemBig.vue";
import LayoutDefault from "../../components/organisms/LayoutDefault/LayoutDefault.vue";
import ButtonFilled from "../../components/atoms/Button/ButtonFilled.vue";
import BasicInputText from "../../components/atoms/FormInput/BasicInputText.vue";
import Breadcrumb from "../../components/atoms/Breadcrumb/Breadcrumb.vue";
import MessageError from "../../components/atoms/Message/MessageError.vue";

export default {
  beforeCreate() {
    document.title = "Cart - iBid";
  },
  mounted() {
    this.$store.commit("setLocation", [{ title: "Cart", location: "/cart" }]);
  },
  components: {
    LayoutDefault,
    CartTotal,
    ItemCart,
    ButtonFilled,
    BasicInputText,
    Breadcrumb,
    MessageError,
  },
};
</script>
<style scoped="scoped">
.btn-shop {
  width:200px;
}
.item-cart {
  margin-top: 60px;
  margin-bottom: 60px;
}
.item-cart:last-child .product-cart{
  margin-top:30px 0!important;
}
.cart-title{
  font-weight:600!important;
}
.right-side,
.left-side {
  height: 40px;
}

.left-side,
.right-side {
  width: 600px;
}
.item-cart {
  padding: 0px;
}
.product-cart {
  margin-bottom: 40px !important;
  margin-bottom: 40px !important;
}
.coupon-input {
  margin: 0px 30px 0px 0px !important;
  padding: 0px !important;
  width: 250px;
  font-size: 14px;
}
.cart-header {
  padding-top: 40px !important;
  padding-bottom: 40px !important;
}
.title {
  font-weight:600!important;
}
.cart-total-header {
  margin: 20px 0 0;
  padding: 0 0 15px;
}
.total-button {
  font-size: 14px !important;
}

.cart {
  margin-bottom: 45px;
}

@media (max-width: 767.98px) {
  .cart {
    padding: 10px !important;
  }
  .button-cart {
    display: block !important;
  }
  .col-md-4 {
    margin-top: 20px;
    width: 100%;
  }
  .button-cart {
    justify-content: center;
  }
  .cart {
    padding: 0 15px;
  }
  .button-cart-coupon {
    font-size: 12px;
  }
  .cart-total {
    padding-bottom: 40px !important;
  }
  .button-coupon-cart {
    width: 100% !important;
  }
}
@media (min-width: 768px) and (max-width: 1024px) {
  .right-side,
  .left-side {
    width: 480px !important;
  }
}
</style>
