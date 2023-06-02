<template>
  <div class="container masonry">
    <div class="row masonry-grid">
      <div class="col-md-6  masonry-column p-0 pb-2">
        <MasonryProduct
          :title="'Headphones'"
          :productsNo="574"
          :height="280"
          :imageSrc="'images/masonrybanner/masonry-banner-4.jpg'"
          :viewMoreLocation="'shop'"
        />

        <MasonryProduct
          :title="'Drones'"
          :productsNo="45"
          :height="420"
          :imageSrc="'images/masonrybanner/masonry-banner-1.jpg'"
          :viewMoreLocation="'shop'"
        />
      </div>

      <div class="col-md-6  masonry-column p-0 ">
        <MasonryProduct
          :title="'Gaming Headphones'"
          :productsNo="11"
          :height="400"
          :imageSrc="'images/masonrybanner/masonry-banner-3.jpg'"
          :viewMoreLocation="'shop'"
        />
        <MasonryProduct
          :title="'Wireless Charging'"
          :productsNo="253"
          :height="300"
          :imageSrc="'images/masonrybanner/masonry-banner-2.jpg'"
          :viewMoreLocation="'shop'"
        />
      </div>
    </div>
  </div>
</template>
<script>
import MasonryProduct from "../../molecules/Banner/BannerMasonry.vue";
export default {
  components: { MasonryProduct },
};
</script>
<style scoped="scoped">
@media (max-width: 767.98px) {
  .masonry-grid {
    display: flex;
    flex-wrap: wrap;
  }
  .masonry {
    padding: 10px !important;
    margin-bottom: 90px !important;
    justify-content: center;
  }
}
</style>
