<template>
  <layout-default>
    <div class="container">
      <div class=" container breadcrumb d-flex flex-column border-bottom ">
        <Breadcrumb />
        <span class="single-product-title p-0 fw-bold">{{
          getProduct.name
        }}</span>
      </div>
      <div class="row single-product d-flex">
        <div class=" col-md-5 col-sm-12 p-0">
          <product-slider class="product-image " :photos="getProduct.photos"></product-slider>
        </div>


        <div
          class=" product-details-col col-md-7 col-sm-12 d-flex  flex-column mt-4 mt-md-0"
        >
          <div
            class="current-bid-title border-bottom"
            v-if="getProduct.type === 'auction'"
          >
            <span class="current-bid fw-bold ">
              {{ didAuctionEnd ? "Current bid" : "Product sold for" }}:
              {{ $formatPrice(getProduct.currentBid) }}</span
            >
          </div>
          <template v-else>
            <div class="text-secondary" v-html="shortdesc"></div>

            <div class="fs-3 fw-bold mt-3">
              {{ $formatPrice(getProduct.directBuyPrice) }}
            </div>
          </template>
          <span
            v-if="getProduct.type === 'auction'"
            class="product-condition text-secondary"
            >Item condition: {{ getProduct.condition }}</span
          >
          <div
            class="container counter-bid "
            v-if="didAuctionEnd && getProduct.type === 'auction'"
          >
            <span class="product-condition text-secondary">Time left:</span>
            <div class=" product-counter p-0 w-100">
              <Counter
                class="single-product-counter"
                :endDate="new Date(getProduct.endDate)"
                counterInnerClass="w-100"
              />
            </div>
          </div>
          <span
            v-if="getProduct.type === 'auction'"
            class="product-auction-end text-secondary"
            >Auction {{ didAuctionEnd ? "ends" : "ended" }}:
            {{ $formatDate(getProduct.endDate) }}</span
          >
          <div
            :class="{ 'mt-3': getProduct.type !== 'auction' }"
            class="product-bid d-flex justify-content-between align-items-start align-items-xl-center"
          >
            <div
              class="bid-value d-flex justify-content-between align-items-center w-100 "
            >
              <div class="d-flex justify-content-center align-items-center">
                <div class="bid-spinner">
                  <BasicInputNumberStep v-model="val" />
                </div>
                <div class="bid-icons">
                  <BidIcons
                    :id="getProduct.id"
                    :type="getProduct.type"
                    :horizontal="true"
                    class="product-bid-icons"
                    :didAuctionEnd="didAuctionEnd"
                  />
                </div>
              </div>
              <div
                class="bid-btn"
                v-if="
                  getProduct.directBuyPrice &&
                    didAuctionEnd &&
                    getProduct.type === 'auction'
                "
              >
                <ButtonOutline
                  class="product-bid-btn fw-bold"
                  :hasRoundedCorners="true"
                  @click="addToCart(getProduct.id)"
                  :text="
                    'Buy now for ' + $formatPrice(getProduct.directBuyPrice)
                  "
                />
              </div>
            </div>
          </div>
          <span class="product-series text-secondary"
            >SKU: {{ getProduct.sku }}</span
          >
          <div class="product-bid-categories d-flex">
            <span class="text-secondary">Categories: </span>
            <FilterListTags
              :comma="true"
              class="list-category d-flex ms-2 m-0 p-0"
              :items="getProduct.categories"
            />
          </div>
          <div class="product-bid-tags d-flex">
            <span class="text-secondary">Tags: </span>
            <FilterListTags
              :comma="true"
              class="ms-2  list-tags d-flex m-0 p-0"
              :items="getProduct.tags"
            />
          </div>
        </div>
      </div>
      <div class="container tab-product p-0">
        <div class=" ">
          <div class="tabs">
            <tab-wrapper>
              <tab :title="'Description'"
                ><Description class="mt-4" :description="getProduct.description"
              /></tab>
              <tab
                :title="'Additional Information'"
                v-if="getProduct.type === 'auction'"
                ><AdditionalInfo class="mt-4" :items="getProduct.specTable"
              /></tab>
              <tab
                :title="'Auction History'"
                v-if="getProduct.type === 'auction'"
                ><TableAuctionHistory
                  class="mt-4"
                  :latestAuctions="getProduct.history"
              /></tab>
              <tab :title="'Vendor Info'"
                ><VendorInfo class="mt-4" v-bind="getProduct.vendorInfo"
              /></tab>
              <tab :title="'More from Vendor'">
                <div class="row mt-5">
                  <div
                    v-for="auction in getLimitedAuctions"
                    :key="auction"
                    class="col-6 col-md-3 mb-4"
                  >
                    <ProductCard
                      v-bind="auction"
                      :endDate="new Date(auction.endDate)"
                    />
                  </div></div
              ></tab>
            </tab-wrapper>
          </div>
        </div>
      </div>
      <div class="related-products">
        <span class="single-product-title fw-bold">Related Products</span>
        <div class="row mt-5">
          <div
            v-for="auction in getLimitedAuctions"
            :key="auction"
            class="col-6 col-md-3 mb-4"
          >
            <ProductCard
              v-bind="auction"
              :endDate="new Date(auction.endDate)"
            />
          </div>
        </div>
      </div>
    </div>
  </layout-default>
</template>

<script>
import LayoutDefault from "../../components/organisms/LayoutDefault/LayoutDefault.vue";
import TabWrapper from "../../components/molecules/Tab/TabWrapper.vue";
import Tab from "../../components/molecules/Tab/TabContent.vue";
import Counter from "../../components/atoms/Counter/Counter.vue";
import ButtonOutline from "../../components/atoms/Button/ButtonOutline.vue";
import FilterListTags from "../../components/atoms/Filter/FilterListTags.vue";
import Breadcrumb from "../../components/atoms/Breadcrumb/Breadcrumb.vue";
import TableAuctionHistory from "../../components/atoms/Product/ProductTableAuctionHistory.vue";
import VendorInfo from "../../components/atoms/Product/ProductVendorInfo.vue";
import Description from "../../components/atoms/Product/ProductDescription.vue";
import AdditionalInfo from "../../components/atoms/Product/ProductSpecifications.vue";
import ProductCard from "../../components/molecules/Product/ProductCard.vue";
import { products } from "../../data/auctions.json";
import ProductSlider from "../../components/atoms/Carousel/ProductSlider.vue"
import BidIcons from "../../components/atoms/Button/ButtonIconBids.vue";
import BasicInputNumberStep from "../../components/atoms/FormInput/BasicInputNumberStep.vue";
import { addToCart } from "../../composables/manageCart";

export default {
  setup() {
    return { addToCart };
  },
  created() {
    document.title = this.getProduct.name + " - iBid";
    this.$store.commit("setLocation", [
      { title: "Products", location: "/shop" },
      {
        title: this.getProduct.title,
        location: "/product/" + this.getProduct.id,
      },
    ]);
  },
  components: {
    LayoutDefault,
    ProductSlider,
    Tab,
    TabWrapper,
    Counter,
    BidIcons,
    ButtonOutline,
    BasicInputNumberStep,
    FilterListTags,
    Breadcrumb,
    TableAuctionHistory,
    VendorInfo,
    AdditionalInfo,
    Description,
    ProductCard,
  },
  data() {
    return {
      val: 0,
      auctions: products,
    };
  },
  computed: {
    getLimitedAuctions() {
      return this.auctions.slice(Math.max(this.auctions.length - 4, 0));
    },
    getProduct() {
      return this.auctions.find(
        (product) =>
          this.$convertToSlug(product.name, product.id) ==
          this.$route.params.productID
      );
    },
    didAuctionEnd() {
      return new Date(this.getProduct.endDate) > new Date();
    },
    shortdesc() {
      return this.getProduct.description.substr(
        0,
        this.getProduct.description.indexOf("</p>") + 4
      );
    },
  },
};
</script>
<style scoped="scoped">
:deep(.list-tags .item) {
  color: #000 !important;
  font-weight: bold !important;
}

:deep(.list-category .item) {
  color: #000 !important;
  font-weight: bold !important;
}
:deep(.single-product-counter > .Counter) {
  margin: 0;
}
.counter-bid {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100% !important;
}
.product-details-col {
  padding: 0 40px;
}
.single-product {
  padding: 50px 0;
}
.product-image {
  max-width: 600px;
  height: auto;
}
:deep(.product-image .mySwiper2) {
  box-shadow: 0px 0px 25px rgb(0 0 0 / 10%);
  margin-bottom:15px;
}
:deep(.Counter) {
  border: 0 !important;
}
:deep(.single-product-counter .time) {
  font-size: 21px !important;
  color: #000 !important;
  font-weight: 500 !important;
}
:deep(.single-product-counter .time-type) {
  font-size: 10px !important;
  color: #000 !important;
  text-transform: uppercase;
  font-weight: 500 !important;
}
:deep(.product-counter .Counter) {
  padding: 20px 20px 15px;
}
:deep(.product-counter .col-3) {
  padding: 0 20px !important;
}

:deep(.product-counter .counter-col) {
  border: none !important;
}

.current-bid {
  font-size: 25px;
}
.counter-bid {
  padding: 0px !important;
}
.current-bid-title {
  padding: 0 0 20px !important;
}
.product-bid-icons {
  display: flex !important;
  align-items: center !important;
}
.product-bid-icons > .svg-inline--fa {
  margin: 0px !important;
  margin-left: 5px !important;
}
.product-bid-btn {
  background-color: #bababa;
  border: 2px solid var(--primary-color) !important;
  color: var(--primary-color);
  height: 40px;
  padding-top: 0 !important;
  padding-bottom: 0 !important;
  display: block !important;
  font-size: 13px;
  margin-left: 15px;
}
.product-bid-btn:hover {
  background-color: var(--primary-color) !important;
  color: white;
}
.product-condition {
  margin: 15px 0;
}
.product-series,
.product-bid,
.product-auction-end {
  margin: 10px 0 0;
}
.product-auction-end {
  margin: 20px 0 0;
}
.product-bid-categories,
.product-bid-timezone {
  margin: 0 0 10px !important;
}
.product-series {
  margin: 20px 0 10px;
}
.list-category li,
.list-tags li {
  color: #000;
  font-weight: bold !important;
}
.tabs {
  padding: 50px 0 50px 0;
}
.single-product-title {
  font-size: 30px !important;
}

.breadcrumb {
  padding-top: 40px;
  padding-bottom: 40px;
}

.related-products {
  margin-top: 80px;
  margin-bottom: 80px;
}
@media (max-width: 767.98px) {
  .breadcrumb {
    padding-top: 15px;
    padding-bottom: 15px;
  }
  .product-condition {
    margin: 15px 0 0;
  }
  .bid-value {
    align-items: flex-start !important;
  }
  :deep(.bid-value .btn) {
    margin: 0px !important;
  }
  .product-details-col {
    padding: 0;
  }
  .tab-product {
    padding: 0px !important;
  }
  .product-image {
    padding: 0px !important;
  }
  :deep(.product-counter .Counter .col-3) {
    padding: 7px !important;
  }
  .current-bid-title {
    padding: 20px 0 !important;
  }
  .tabs {
    display: flex !important;
    flex-direction: column;
    align-items: center;
  }
  .bid-value {
    display: flex;
    flex-direction: column;
  }
  .single-product {
    display: flex !important;
    flex-direction: column !important;
    padding: 0 !important;
    margin: 0 !important;
  }
  .col-md-5 {
    margin: 0 !important;
  }
  .product-img {
    width: 300px;
  }
  .product-bid {
    display: block !important;
  }
  .bid-value {
    justify-content: flex-start !important;
    display: flex !important;
    align-items: center;
    margin: 10px 0;
  }

  .bid-btn {
    margin-top: 20px;
    display: flex;
    justify-content: flex-start;
  }
  .product-bid-btn {
    width: 100%;
    text-align: center !important;
  }
  .single-product-title {
    font-size: 26px !important;
  }

  .bid-icons {
    margin-left: 30px;
  }
  .product-bid-icons > .svg-inline--fa {
    width: 35px;
    height: 35px;
  }
}
@media (min-width: 768px) and (max-width: 1024px) {
  .product-image,
  .product-img {
    width: 350px;
    height: 350px;
  }
  .product-bid {
    display: flex !important;
    flex-direction: column;
  }

  .bid-btn {
    width: 100%;
    justify-content: start;
  }
}
</style>
