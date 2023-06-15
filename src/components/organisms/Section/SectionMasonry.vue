<template>
  <div class="container masonry">
    <Heading :title="'熱門活動'" />
    <div class="row masonry-grid">
      <div class="col-md-6  masonry-column p-0 pb-2">
        <MasonryProduct
          :title="'演唱會'"
          :productsNo="574"
          :height="280"
          :imageSrc="'images/masonrybanner/pa_cover01.jpg'"
          :viewMoreLocation="'shop'"
        />

        <MasonryProduct
          :title="'音樂祭'"
          :productsNo="45"
          :height="420"
          :imageSrc="'images/masonrybanner/pa_cover03.jpg'"
          :viewMoreLocation="'shop'"
        />
      </div>

      <div class="col-md-6  masonry-column p-0 ">
        <MasonryProduct
          :title="'展演'"
          :productsNo="11"
          :height="400"
          :imageSrc="'images/masonrybanner/pa_cover02.jpg'"
          :viewMoreLocation="'shop'"
        />
        <MasonryProduct
          :title="'歌劇'"
          :productsNo="253"
          :height="300"
          :imageSrc="'images/masonrybanner/pa_cover04.jpg'"
          :viewMoreLocation="'shop'"
        />
      </div>
    </div>
  </div>
</template>
<script>
import Heading from "../../atoms/SectionHeading/Heading.vue";
import MasonryProduct from "../../molecules/Banner/BannerMasonry.vue";
export default {
  components: { MasonryProduct, Heading },
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
