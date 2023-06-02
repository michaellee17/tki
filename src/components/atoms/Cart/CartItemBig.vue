<template>
  <div class="cart-item row align-items-center align-middle p-3">
    <div class="col col-7 d-flex align-items-center flex-row">
      <div class="title-image overflow-hidden justify-content-center d-flex align-items-center">
        <font-awesome-icon
          v-if="id !== undefined"
          @click="removeFromCart(id)"
          class="align-middle"
          :icon="['fa', 'times']"
        />
        <link-wrapper :location="getLocation" :removeDecorations="true">
          <img v-if="photos[0] !== ''" class="item-img ms-4" :src="$getFileSource(photos[0])" :alt="name" />
        </link-wrapper>
      </div>
      <div class="col item-title col-5 ms-5 d-block align-items-center">
        <!-- ProdctTitle -->
        <div class="mobile-title d-flex justify-content-between ">
          <span class="subtitle-responsive fs-5 text-dark fw-bold"
            >Product:</span
          >
          <span class="fs-5 text-dark fw-md-light title">
            <link-wrapper :location="getLocation" :removeDecorations="true">
              {{ name }}</link-wrapper
            ></span
          >
        </div>
        <!-- Product Vendor -->
        <div v-if="vendor" class="vendor-title d-flex justify-content-between">
          <span class="subtitle-responsive text-secondary">Vendor:</span>
          <span class=" vendor text-secondary"> {{ vendor }}</span>
        </div>
      </div>
    </div>

    <div class="col col-5 item-price  d-flex justify-content-around">
      <!-- Product price/piece -->
      <div
        class="mobile-title d-flex align-items-center justify-content-between"
      >
        <span class="subtitle fs-6 text-dark fw-bold">Price:</span>
        <span
          ><b>{{ $formatPrice(price) }}</b> / piece</span
        >
      </div>
      <!-- Product Quantity -->
      <div
        class="mobile-title d-flex align-items-center justify-content-between"
      >
        <span class="subtitle fs-6 text-dark fw-bold">Quantiy:</span>
        <span>{{ qty }}</span>
      </div>

      <!-- Total -->
      <div
        class="mobile-title d-flex align-items-center justify-content-between"
      >
        <span class="subtitle fs-6 text-dark fw-bold">Total:</span>
        <span
          ><b>{{ $formatPrice(qty * price) }}</b> in total</span
        >
      </div>
    </div>
  </div>
</template>
<script>
import LinkWrapper from "../LinkWrapper/LinkWrapper.vue";
import {removeFromCart} from "../../../composables/manageCart"

export default {
  setup() {
    return {removeFromCart}
  },
  components: { LinkWrapper },
  props: {
    id: {
      type: Number,
      required: true,
    },
    photos: {
      type: Array,
    },
    price: {
      type: Number,
      default: 0,
    },
    qty: {
      type: Number,
      default: 1,
    },
    maxQty: {
      type: Number,
      default: 1,
    },
    vendor: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      required: true,
    },
  },
  computed: {
    getLocation() {
      return this.$buildProductURL(this.name,this.id);
    }
  }
};
</script>
<style scoped="scoped">
.cart-item {
  width: 100%;
  box-shadow: 0px 0px 25px rgb(0 0 0 / 10%);
  margin: 0px;
}
.item-img {
  width: 80px;
  height: auto;
}
.fa-times {
  color: var(--primary-color);
  font-size: 30px;
}
.title-image {
  height:80px;
}
.fa-times:hover {
  color: #d3d3d3;
  cursor: pointer;
}
@media (max-width: 767.98px) {
  .mobile-title {
    margin-top: 15px;
  }
  .vendor-title,
  .mobile-title {
    width: 100%;
  }
  .item-img {
    display: none !important;
  }
  .cart-item {
    display: block !important;
  }
  .item-title,
  .item-price {
    display: flex !important;
    flex-direction: column;
  }
  .vendor {
    display: flex !important;
    flex-direction: row !important;
  }
  .col-7,
  .col-5 {
    width: 100%;
  }
  .product-title {
    padding: 0px !important;
  }
  .col-7 {
    display: flex !important;
    flex-direction: column !important;
    justify-content: flex-start;
  }
  .item-title {
    padding: 0px !important;
    margin: 0px !important;
  }
  .vendor {
    justify-content: space-between;
  }
  .subtitle {
    font-size: 14px !important;
  }
  .item-cart {
    padding: 20px 6px 20px !important;
  }
}


@media (min-width: 768px) and (max-width: 1024px) {
  .item-img {
    display: none;
  }
}
@media screen and (min-width: 768px) {
  .subtitle-responsive,
  .subtitle {
    display: none;
  }
  .title {
    font-weight: 600;
  }
}
</style>
