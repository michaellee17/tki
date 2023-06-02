<template>
  <layout-default>
    <div class="container">
      <form>
        <div class="checkout-breadcrumb border-2 border-bottom">
          <Breadcrumb />
          <h1 class="checkout-title mt-2">Checkout</h1>
        </div>
        <div class="enter-coupon"></div>
        <div class="row">
          <!-- Product Table -->
          <FormCheckout class="col-md-6" />

          <div class="change-address-col col-md-6 mt-4">
            <div class="col-md-12 ">
              <div class="form-check">
                <basic-label
                  class="checkbox-label"
                  :title="'Ship to a different address ?'"
                  forInput="flexCheckDefault"
                >
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    name="flexCheckDefault"
                    v-model="secBillingAddress"
                    id="flexCheckDefault"
                  />
                </basic-label>
              </div>
              <div class="col-md-12 mt-3">
                <BasicLabel
                  class="checkout-textarea-label mb-2"
                  :title="'Order notes (optional)'"
                />
                <BasicTextArea
                  class="checkout-textarea"
                  :placeholder="
                    'Notes about your order, .e.g. special notes for delivery'
                  "
                />
              </div>
            </div>
            <FormCheckout v-if="secBillingAddress" />
          </div>
        </div>
        <div class="order-table">
          <span class="table-title">Your Order</span>
          <div class="row table-row">
            <template v-for="item in $store.state.cart.items" :key="item">
              <div class="col-md-7 product-details d-flex border flex-column">
                <span class="product-info"
                  >{{ item.title }} x {{ item.qty }}</span
                >
                <span class="product-vendor"
                  >Vendor: {{ item.vendorInfo.storeName }}</span
                >
              </div>
              <div
                class="col-md-5 product-price border-top border-bottom border-end"
              >
                <span class="">{{ $formatPrice(item.price * item.qty) }}</span>
              </div>
            </template>
            <div
              class="col-md-7  product-cost border-bottom border-start border-end"
            >
              <span class="">Subtotal</span>
            </div>
            <div class="col-md-5 product-price border-bottom border-end">
              <span class="">{{
                $formatPrice($store.getters.getSubtotal)
              }}</span>
            </div>
            <div
              class="col-md-7  product-cost border-bottom border-start border-end"
            >
              <span class="">Shipping</span>
            </div>
            <div class="col-md-5 product-price border-bottom border-end">
              <span class=""
                >Flat rate:
                {{
                  $formatPrice($store.getters.getFeeByType("transport"))
                }}</span
              >
            </div>
            <div
              class="col-md-7  product-cost border-bottom border-start border-end"
            >
              <span class="">Total</span>
            </div>
            <div class="col-md-5 product-price border-bottom border-end">
              <span class="">{{ $formatPrice($store.getters.getTotal) }}</span>
            </div>
          </div>
        </div>
        <div class="pay-method border-bottom">
          <span class="method">Cash on delivery</span>
          <div class="pay-method-text">
            <span>Pay with cash upon delivery</span>
          </div>
        </div>
        <div class="pay-button d-flex justify-content-end">
          <ButtonFilled :hasRoundedCorners="true" text="place order" />
        </div>
      </form>
    </div>
  </layout-default>
</template>
<script>
import { countries } from "../../data/countries.json";
import LayoutDefault from "../../components/organisms/LayoutDefault/LayoutDefault.vue";
import Breadcrumb from "../../components/atoms/Breadcrumb/Breadcrumb.vue";
import ButtonFilled from "../../components/atoms/Button/ButtonFilled.vue";
import FormCheckout from "../../components/molecules/Form/FormCheckout.vue";
import BasicTextArea from "../../components/atoms/FormInput/BasicTextArea.vue";
import BasicLabel from "../../components/atoms/FormInput/BasicLabel.vue";

export default {
  beforeCreate() {
    document.title = "Checkout - iBid";
  },
  components: {
    LayoutDefault,
    Breadcrumb,
    ButtonFilled,
    FormCheckout,
    BasicLabel,
    BasicTextArea,
  },
  data() {
    return {
      countries,
      secBillingAddress: false,
    };
  },
};
</script>
<style scoped="scoped">
.product-cost {
  font-weight: 700;
  font-size: 16px;
}
.product-info {
  font-size: 16px;
}
.product-price {
  font-size: 16px;
  color: #999;
}
.product-info,
.product-vendor {
  font-weight: 400;
}
.product-vendor {
  font-size: 14px !important;
}
.table-title {
  font-size: 18px;
  color: #242424;
  margin: 20px 0 10px;
}
.table-row {
  padding: 15px;
}
.checkout-breadcrumb {
  padding: 40px 0;
  border-color: #ddd;
}
.checkout-title {
  line-height: 32px !important;
  color: #242424;
  font-weight: 600 !important;
  margin: 5px 0;
}
.form-check-input {
  margin-top: 6px;
}
.checkout-label {
  font-size: 16px;
  color: #606060;
  margin: 0 0 10px;
}

.checkout-textarea {
  border: 1px solid#ddd;
  border-radius: 30px;
}
.form-col {
  padding: 0 50px 0 0;
}
.change-address-col {
  padding: 0 0 0 50px;
}
.checkout-textarea-label {
  font-size: 16px !important;
  color: #242424;
  font-weight:500;
}
.checkout-textarea {
  padding: 20px;
}
.checkout-textarea::placeholder {
  font-size: 15px;
}

.enter-coupon {
  margin: 80px 0;
}
.product-details {
  padding: 20px;
}
.product-details,
.product-price {
  padding: 20px 20px !important;
}
.product-cost {
  padding: 20px;
}
.order-table {
  margin-top: 70px;
  margin-bottom: 50px;
}
.method {
  font-size: 14px;
  color: #8b8b8a;
  margin: 0 0 5px;
  font-weight: bold;
}
.pay-method-text {
  background-color: #e1e1e1;
  padding: 13px;
  font-size: 16px;
  color: #606060;
  margin: 13px 0px 20px;
}
.pay-button {
  margin: 20px 0 80px;
}
input:focus {
  outline: none;
  box-shadow: none;
}
textarea:focus {
  outline: none;
  box-shadow: none;
}
:deep(.pay-button button) {
  padding: 10px 25px !important;
  font-size: 16px;
  font-weight: 600;
}
:deep(.checkbox-label label) {
  font-size: 18px !important;
  font-weight: 700 !important;
  color: #242424 !important;
}
@media screen and (max-width: 768px) {
  .checkout-forms {
    display: flex;
    flex-direction: column;
  }
  .change-address-col {
    padding: 0 10px !important;
  }
}
</style>
