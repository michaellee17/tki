<template>
  <swiper
    ref="mySwiper"
    :loop="true"
    :initial-slide="1"
    :autoplay="{
      delay: 250000,
      disableOnInteraction: false,
    }"
    :options="swiperOptions"
    :space-between="30"
    :navigation="true"
    :pagination="{
      type: 'progressbar',
      clickable: true,
    }"
    class="mySwiper">
    <swiper-slide v-for="item in advertises" :key="item.adv_index">
      <a :href="item.link_url" target="_blank">
        <div
          class="slider slider-middle banner-l" 
          :style="{ backgroundImage: `url(${ item.image_path_web })` }" />
        <div
          class="slider slider-middle banner-sm" 
          :style="{ backgroundImage: `url(${ item.image_path })` }" />
      </a>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { EffectFade, Navigation, Pagination, Autoplay } from "swiper";

SwiperCore.use([EffectFade, Navigation, Pagination, Autoplay]);

import "swiper/swiper-bundle.css";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      EffectFade
    };
  },
  data() {
    return {
      advertises: []
    };
  },
  created() {
    this.getAdvertises();
  },
  methods : {
    getAdvertises() {
      this.axios.get(`${process.env.VUE_APP_PATH}/advertise/get_banner?layoutID=2`)
      .then(res => { 
        this.advertises = res.data.data;
      });
    }
  }
};
</script>
<style scoped lang="scss">
@import "../assets/mixin.scss";

.slider-middle {
  // web 16:3
  height: 360px;
  @include screen-xl {
    height: 270px;
  }
  @include screen-l {
    height: 192px;
  }
  @include screen-m {
    height: 144px;
  }
  // app 16:9
  @include screen-sm {
    height: 324px;
  }
}
</style>
