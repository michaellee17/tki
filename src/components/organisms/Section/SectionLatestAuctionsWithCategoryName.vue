<template>
  <div class="row d-flex justify-content-between">
    <CardCategory
      class="product-card-category col-md-3"
      :title="title"
      :products-no="productsNo"
      :button-location="location"
      :background="background" />
    <div class="col-md-9 p-0 mt-4 mt-md-0">
      <div class="row productb-row row-cols-2 m-0">
        <!-- <ActivityCard></ActivityCard> -->
        <div
          v-for="product in getLimitedAuctions"
          :key="product"
          class="col-6 p-2 p-md-0">
          <ProductCardb
            v-bind="product"
            :end-date="new Date(product.endDate)"
            class="prodcard-padding" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CardCategory from "../../molecules/Card/CardCategory.vue";
import ProductCardb from "../../molecules/Product/ProductCardb.vue";
import { products } from "../../../data/auctions.json";
import ActivityCard from "../../ActivityCard.vue";

export default {
  components: { CardCategory, ProductCardb, ActivityCard },
  props: {
    location: {
      type: String
    }, 
    maxAuctions: {
      type: Number,
      default: 4,
    },
    title: {
      type: String
    }, 
    productsNo: {
      type: Number
    },
    skipAuctions: {
      type: Number,
      default: 0
    },
    background: {
      type: String
    }
  },
  data() {
    return {
      auctions: products,
    };
  },
  computed: {
    getLimitedAuctions() {
      return this.auctions.slice(this.skipAuctions,this.maxAuctions + this.skipAuctions);
    },
  },
};
</script>

<style>
.productb-row .col-6:nth-child(3),
.productb-row .col-6:nth-child(4) {
  margin-top: 15px;
}

.productb-row .col-6:nth-child(2),
.productb-row .col-6:nth-child(4) {
  padding-left: 15px !important;
}

:deep(.icon-cards > .tooltip-custom ){
  border-width: 10px !important;
}

.productb-row .col-6:nth-child(1),
.productb-row .col-6:nth-child(3) {
  padding-right: 15px;
}
.row.row-cols-2 {
  padding-left: 25px;
}
.prodcard-padding {
  padding: 10px;
}

@media (max-width: 767.98px) {
  .col-6 {
    margin-top: 0px !important;
  }
  .productb-row .col-6 {
    padding: 0;
    padding-bottom: 10px;
  }
  .row.row-cols-2 {
    padding: 0 20px;
  }
  .row {
    --bs-gutter-x: 0;
    --bs-gutter-y: 0;
  }
}
</style>
