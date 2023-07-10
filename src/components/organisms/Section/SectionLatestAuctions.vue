<template>
    <Heading :title="'預約搶票'" />
    <div class="row justify-content-center gap-2 gap-lg-0">
      <div class="col-5 col-lg-3 mb-4">
        <div class="product-card d-inline-block border-0 position-relative h-100">
          <router-link to="/activity/detail/blackpink/buy-ticket/session">
              <div class="card position-relative border-0">
                  <img src="../../../assets/images/activity/blackpink.jpg" alt="">
              </div>
          </router-link>
          <div class=" product-card-title pt-2 pb-2 position-relative h-50">
            <div class="position-relative elbordaro">
              <h3 class="fw-bold product-title m-0">
              <router-link to="/activity/detail/blackpink/news">BLACKPINK高雄站演唱會 2023｜BORN PINK
            </router-link>
          </h3>
            <div class="details">
              <span class="fw-bold">150張</span>
            </div>
          </div>
          </div>
      </div>
      </div>

      <div
        v-for="auction in getLimitedAuctions"
        :key="auction"
        class="col-5 col-lg-3 mb-4"
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
  components: { Heading, ProductCard},
  data() {
    return {
      auctions: products,
    };
  },
  props: {
    maxAuctions: {
      type: Number,
      default: 3
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

.product-card {
  background: white;
  width: 100%;
}
.bb {
  border-bottom: 1px solid #dfe5e9 !important;
}
.card {
  width: 100%;
  overflow: hidden;
  margin: auto;
  display: flex;
  height:300px !important;
  justify-content: center;
  align-items: center;
  border-radius: 0 !important;
}
.product-title {
  padding: 20px 20px 0px;
  text-align: center;
  background: #fff;
  line-height: 24px;
  color: #242424;
}
.prod-card-counter {
  transition: opacity 0.25s ease-in-out;
  top:-60px;
}
.product-card:hover .prod-card-counter {
  opacity: 0;
}
.product-title a:hover {
  color: var(--primary-color);
  transition: all 0.3s ease-out;
}
.product-title a {
  transition: all 250ms ease;
  -webkit-transition: all 250ms ease;
}
.product-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.product-card a {
  align-self: center;
  color: #484848;
  display: block;
  font-size: 18px;
  line-height: 22px;
  font-weight: bold;
  transition: color 0.25s ease-in-out;
}
.product-card a:hover {
  color: var(--primary-color);
}
.icon-card {
  left: 20px;
  z-index: 1;
}
.details {
  overflow: hidden;
  padding: 5px 5px 10px;
  background: #fff;
  text-align: center;
  color: #606060;
}
.show,
.hide {
  transition: all 0.25s ease-in-out;
}
.show,
.product-card:hover .hide {
  visibility: hidden;
  opacity: 0;
}
.product-card:hover .show {
  visibility: visible;
  opacity: 1;
  transform: scale(1.1);
  
}

.product-card {
  overflow: hidden;
  box-shadow: 0 0 25px rgb(0 0 0 / 10%);
}
@media (max-width: 767.98px) {
  .prod-card-counter {
    top:-55px;
  }
  .Counter {
    margin-top: 25px;
    width: 100%;
    display: flex;
  }
  .product-title a {
    font-size: 15px !important;
  }
  .product-title {
    padding-top: 0 !important;
    padding: 20px 5px 0;
  }
  .details {
    font-size: 12px !important;
  }
  .elbordaro {
    margin-top: 10px;
  }
}
</style>