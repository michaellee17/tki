<template>
  <layout-default>
    <div class="fluid-container  slider">
      <Slider :items="sliderItems" />
    </div>

    <div class="container features  mt-5 ">
      <SectionFeatures />
    </div>

    <div class="container latest-auctions ">
      <SectionLatestAuctions />
    </div>

    <div class="container masonry">
      <SectionMasonry />
    </div>

    <div class="container latest-auctions-category mb-5">
      <SectionLatestAuctionsWithCategoryName :title="'Desktops'" :productsNo="150" :skipAuctions="0" />
    </div>

    <div class="container latest-auctions-category mb-5">
      <SectionLatestAuctionsWithCategoryName :title="'Phones'" :background="'radial-gradient(#ff5f4a,#dd3e29)'" :productsNo="117" :skipAuctions="11" />
    </div>

    <div class="container latest-auctions-category ">
      <SectionLatestAuctionsWithCategoryName :title="'Tablets'" :background="'radial-gradient(#fce406,#f9be00)'" :productsNo="23" :skipAuctions="18"  />
    </div>

    <div class="container contact">
      <SectionContact />
    </div>

    <div class="container news justify-content-center">
      <SectionNews />
    </div>
    <SectionBrands class="d-none fluid-container mb-0 brands d-md-block" />
  </layout-default>
</template>

<script>
// @ is an alias to /src

import SectionLatestAuctions from "../../components/organisms/Section/SectionLatestAuctions.vue";
import SectionLatestAuctionsWithCategoryName from "../../components/organisms/Section/SectionLatestAuctionsWithCategoryName.vue";
import SectionMasonry from "../../components/organisms/Section/SectionMasonry.vue";
import SectionFeatures from "../../components/organisms/Section/SectionFeatures.vue";
import SectionContact from "../../components/organisms/Section/Contact/SectionContact1.vue";
import SectionNews from "../../components/organisms/Section/SectionNews.vue";
import SectionBrands from "../../components/organisms/Section/SectionBrands.vue";
import Slider from "../../components/atoms/Carousel/Slider.vue";
import LayoutDefault from "../../components/organisms/LayoutDefault/LayoutDefault.vue";

export default {
  name: "Home",
  beforeCreate() {
    document.title = "iBid – Multi Vendor Auctions WooCommerce Theme";
  },
  components: {
    SectionLatestAuctions,
    SectionLatestAuctionsWithCategoryName,
    SectionMasonry,
    SectionFeatures,
    SectionContact,
    SectionNews,
    SectionBrands,
    Slider,
    LayoutDefault,
  },
  data() {
    return {
      sliderItems: [
        {
          productImage: require("../../assets/images/slider/macbook_gold-1.png"),
          characteristics: [
            "2.9 GHz Dual-Core Intel Core i5",
            "256 GB SSD auf PCle Basis(On-Board)",
            "8 GB 2133 MHz LPDDR3 Arbeitsspeicher",
          ],
          category: "tech equipment",
          productName: "Macbook",
          id: 1,
        },
        {
          productImage: require("../../assets/images/slider/object_headphones_1.png"),
          characteristics: [
            "Balanced High, Mid and Low tones",
            "Active Noise Cancellation",
            "Bluetooth Wireless",
          ],
          category: "tech equipment",
          productName: "HEADPHONES",
          id: 2,
        },
        {
          productImage: require("../../assets/images/slider/watch_tp3-1.png"),
          characteristics: [
            "Dual‑Core Processor, Integrated GPS",
            "WIFI (802.11b/g/n 2,4 GHz), Bluetooth 4.0",
            "OLED Retina Display",
            "312 x 390 Pixel (42 mm)",
          ],
          category: "tech equipment",
          productName: "WATCH",
          id: 3,
        },
      ],
    };
  },
};
</script>
<style scoped="scoped">
.features,
.latest-auctions,
.latest-auctions-category,
.masonry,
.contact,
.news,
.brands {
  margin-bottom: 90px;
}
.latest-auctions-category {
  padding: 0 21px;
}
.brands {
  background-color: #f9f9f9;
  padding: 70px 0px;
}
:deep(.Counter .col-3) {
  padding: 8px 13px !important;
}
@media (max-width: 767.98px) {
  :deep(.latest-auctions-category) {
    padding: 0px !important;
  }

  .brands {
    padding: 70px 0px;
  }
  :deep(.Counter .col-3) {
    padding: 7px 0px !important;
  }

}
</style>
