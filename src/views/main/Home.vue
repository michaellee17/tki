<template>
  <layout-default>
    <!-- 主要 slider -->
    <Slider class="mb-5" />

    <!-- 熱門活動 -->
    <div class="container masonry">
      <SectionMasonry />
    </div>

    <!-- 次要 slider -->
    <SliderSecond class="mb-5" />

    <!-- 預約搶票 -->
    <div class="container latest-auctions">
      <SectionLatestAuctions />
    </div>

    <!-- 演唱會 -->
    <div class="container latest-auctions-category ">
      <SectionLatestAuctionsWithCategoryName
        :title="'演唱會'" :location="'/activity/concert'" :background="'radial-gradient(#fce406,#f9be00)'" :products-no="23"
        :skip-auctions="18" />
    </div>

    <!-- 運動賽事 -->
    <div class="container latest-auctions-category mb-5">
      <SectionLatestAuctionsWithCategoryName :title="'運動賽事'" :location="'/activity/sport'" :products-no="150" :skip-auctions="0" />
    </div>

    <!-- 藝文展演 -->
    <div class="container latest-auctions-category mb-5">
      <SectionLatestAuctionsWithCategoryName
        :title="'藝文展演'" :location="'/activity/show'" :background="'radial-gradient(#ff5f4a,#dd3e29)'" :products-no="117"
        :skip-auctions="11" />
    </div>

    <!-- 其他 -->
    <div class="container latest-auctions-category mb-5">
      <SectionLatestAuctionsWithCategoryName
        :title="'其他'" :location="'/activity/other'" :background="'radial-gradient(#2ecb5c,#2e9600)'" :products-no="117"
        :skip-auctions="11" />
    </div>
  </layout-default>
</template>

<script>
import SectionLatestAuctions from "../../components/organisms/Section/SectionLatestAuctions.vue";
import SectionLatestAuctionsWithCategoryName from "../../components/organisms/Section/SectionLatestAuctionsWithCategoryName.vue";
import SectionMasonry from "../../components/organisms/Section/SectionMasonry.vue";
import Slider from "../../components/atoms/Carousel/Slider.vue";
import SliderSecond from "../../components/atoms/Carousel/Slider-second.vue";
import LayoutDefault from "../../components/organisms/LayoutDefault/LayoutDefault.vue";

export default {
  components: {
    SectionLatestAuctions,
    SectionLatestAuctionsWithCategoryName,
    SectionMasonry,
    Slider,
    LayoutDefault,
    SliderSecond
  },
  data() {
    return {
    };
  },
  beforeCreate() {
    document.title = "T-KI";
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
