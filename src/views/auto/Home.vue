<template>
  <layout-default>
    <div class="container-fluid  slider p-0">
      <JumbotronFluid
        title="Find your dream car"
        subtitle="& give it a try"
        content="Vivamus id ligula non turpis aliquam dignissim. Fusce tempor vulputate
        urna, quis malesuada."
        :imagePath="'images/slider/ibid_automotive_slider.jpg'"
      />
    </div>

    <div class="container latest-auctions" style="margin-top:100px;">
      <SectionLatestAuctions />
    </div>

    <div class="container masonry">
      <div class="row d-flex">
      <div class="col-md-6">
       <MasonryProduct
          :title="'Supercars'"
          :productsNo="150"
          :height="400"
          :imageSrc="'images/automotivedemo/Auction/Masonry1.jpeg'"
          viewMoreLocation="/shop"
        />
      </div>
       <div class="col-md-6">
        <MasonryProduct
          :title="'Muscle Cars'"
          :productsNo="42"
          :height="400"
          :imageSrc="'images/automotivedemo/Auction/Masonry2.jpeg'"
          viewMoreLocation="/shop"
        />
       </div>
       </div>
    </div>

    <div class="container latest-auctions-category ">
      <SectionLatestAuctionsWithCategoryName :title="'Audi'" :productsNo="150" :background="'url('+$getFileSource('images/automotivedemo/Auction/Masonry2.jpeg')+') no-repeat center center;'" />
    </div>

    <div class="container latest-auctions-category">
      <SectionLatestAuctionsWithCategoryName :title="'BMW'" :productsNo="27" :skipAuctions="5" :background="'url('+$getFileSource('images/automotivedemo/Auction/Masonry1.jpeg')+') no-repeat center center;'" />
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
import SectionContact from "../../components/organisms/Section/Contact/SectionContact1.vue";
import SectionNews from "../../components/organisms/Section/SectionNews.vue";
import SectionBrands from "../../components/organisms/Section/SectionBrands.vue";
import JumbotronFluid from "../../components/molecules/Jumbotron/JumbotronFluid.vue";
import LayoutDefault from "../../components/organisms/LayoutDefault/LayoutDefault.vue";
import MasonryProduct from "../../components/molecules/Banner/BannerMasonry.vue";
export default {
  name: "Home",
  beforeCreate() {
    document.title = "iBid – Multi Vendor Auctions WooCommerce Theme";
  },
  components: {
    SectionLatestAuctions,
    SectionLatestAuctionsWithCategoryName,
    SectionContact,
    SectionNews,
    SectionBrands,
    JumbotronFluid,
    LayoutDefault,
    MasonryProduct
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
  :deep(.mas){
    height:100%!important;
  }

  .brands {
    padding: 70px 0px;
  }
  :deep(.Counter .col-3) {
    padding: 7px 0px !important;
  }
}
</style>
