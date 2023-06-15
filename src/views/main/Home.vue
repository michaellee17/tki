<template>
  <layout-default>
    <!-- 主要 slider -->
    <div class="fluid-container  slider">
      <Slider :items="sliderItems" />
    </div>

    <!-- <div class="container features  mt-5 ">
      <SectionFeatures />
    </div> -->

    <!-- 熱門活動 -->
    <div class="container masonry">
      <SectionMasonry />
    </div>

    <!-- 次要 slider -->
    <div class="fluid-container  slider">
      <SliderSecond :items="sliderItems2" />
    </div>

    <!-- 預約搶票 -->
    <div class="container latest-auctions ">
      <SectionLatestAuctions />
    </div>

    <!-- 演唱會 -->
    <div class="container latest-auctions-category ">
      <SectionLatestAuctionsWithCategoryName :title="'演唱會'" :background="'radial-gradient(#fce406,#f9be00)'" :productsNo="23" :skipAuctions="18"  />
    </div>

    <!-- 音樂祭 -->
    <div class="container latest-auctions-category mb-5">
      <SectionLatestAuctionsWithCategoryName :title="'音樂祭'" :productsNo="150" :skipAuctions="0" />
    </div>

    <!-- 展演 -->
    <div class="container latest-auctions-category mb-5">
      <SectionLatestAuctionsWithCategoryName :title="'展演'" :background="'radial-gradient(#ff5f4a,#dd3e29)'" :productsNo="117" :skipAuctions="11" />
    </div>

    <!-- <div class="container contact">
      <SectionContact />
    </div>

    <div class="container news justify-content-center">
      <SectionNews />
    </div>
    <SectionBrands class="d-none fluid-container mb-0 brands d-md-block" /> -->
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
import SliderSecond from "../../components/atoms/Carousel/Slider-second.vue";
import LayoutDefault from "../../components/organisms/LayoutDefault/LayoutDefault.vue";

export default {
  name: "Home",
  beforeCreate() {
    document.title = "T-KI";
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
    SliderSecond
  },
  data() {
    return {
      sliderItems: [
        {
          productImage: require("../../assets/images/slider/home_bn01.jpg"),
          characteristics: [
            "BLACKPINK WORLD TOUR"
          ],
          category: "tech equipment",
          productName: "Macbook",
          id: 1,
        },
        {
          productImage: require("../../assets/images/slider/home_bn02.jpg"),
          characteristics: [
            "BLACKPINK WORLD TOUR"
          ],
          category: "tech equipment",
          productName: "HEADPHONES",
          id: 2,
        },
        {
          productImage: require("../../assets/images/slider/home_bn03.jpg"),
          characteristics: [
            "BLACKPINK WORLD TOUR"
          ],
          category: "tech equipment",
          productName: "WATCH",
          id: 3,
        },
        {
          productImage: require("../../assets/images/slider/home_bn01.jpg"),
          characteristics: [
            "BLACKPINK WORLD TOUR"
          ],
          category: "tech equipment",
          productName: "Macbook",
          id: 1,
        },
      ],
      sliderItems2: [
        {
          productImage: require("../../assets/images/slider/home_bn02.jpg"),
          characteristics: [
            "BLACKPINK WORLD TOUR"
          ],
          category: "tech equipment",
          productName: "Macbook",
          id: 1,
        },
        {
          productImage: require("../../assets/images/slider/home_bn01.jpg"),
          characteristics: [
            "BLACKPINK WORLD TOUR"
          ],
          category: "tech equipment",
          productName: "HEADPHONES",
          id: 2,
        },
        {
          productImage: require("../../assets/images/slider/home_bn03.jpg"),
          characteristics: [
            "BLACKPINK WORLD TOUR"
          ],
          category: "tech equipment",
          productName: "WATCH",
          id: 3,
        },
        {
          productImage: require("../../assets/images/slider/home_bn01.jpg"),
          characteristics: [
            "BLACKPINK WORLD TOUR"
          ],
          category: "tech equipment",
          productName: "Macbook",
          id: 1,
        },
      ],
    };
  },
};
</script>
<style scoped="scoped">
.slider,
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
