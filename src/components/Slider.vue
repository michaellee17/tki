<template>
  <swiper
    ref="mySwiper"
    :loop="true"
    :initial-slide="1"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }" 
    :space-between="30"
    :navigation="true"
    :pagination="{
      type: 'progressbar',
      clickable: true,
    }"
    class="mySwiper">
    <swiper-slide v-for="(item) in advertises" :id="item.title" :key="item.title">
      <a :href="item.link_url" target="_blank">
        <img
          :src="item.image_path_web"
          class="banner-l img-fluid">
        <img
          :src="item.image_path"
          class="banner-sm img-fluid">
      </a>
    </swiper-slide>
    <!-- 原本的響應式設計 -->
    <!-- <swiper-slide v-for="(item) in advertises" :id="item.title" :key="item.title">
      <a :href="item.link_url" target="_blank">
        <div
          class="slider slider-top banner-l" 
          :style="{ backgroundImage: `url(${ item.image_path_web })` }" />
        <div
          class="slider slider-top banner-sm" 
          :style="{ backgroundImage: `url(${ item.image_path })` }" />
      </a>
    </swiper-slide> -->
  </swiper>
</template>

<script>
// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { EffectFade, Navigation, Pagination, Autoplay } from "swiper";

// install Swiper modules
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
      advertises: [],
    };
  },
  mounted() {
    this.getAdvertises();
  },
  methods : {
    getAdvertises() {
      this.axios.get(`${process.env.VUE_APP_PATH}/advertise/get_banner?layoutID=1`)
      .then(res => { 
        this.advertises = res.data.data;
      });
    }
  }
};
</script>
<style lang="scss">
@import "../assets/mixin.scss";
// 原本的響應式設計
// .slider-top {
//   // web 16:5
//   height: 600px;
//   @include screen-xl {
//     height: 450px;
//   }
//   @include screen-l {
//     height: 320px;
//   }
//   @include screen-m {
//     height: 240px;
//   }
//   // app 16:9
//   @include screen-sm {
//     height: 324px;
//   }
// }
// .slider {
//   background-repeat: no-repeat;
//   background-size: cover;
//   background-position: center;
// }

/* Pagination progress 置於下方 */
.swiper-pagination {
  bottom: 0 !important;
  top: unset !important;
}

.swiper-button-prev::after,
.swiper-button-next::after {
  font-size: 30px;
}
// .swiper-button-prev::after,
// .swiper-button-next::after {
//   background: #000;
//   background: rgba(0, 0, 0, 0.5);
//   width: 40px;
//   height:40px;
//   position: absolute;
//   display: block;
//   font-size: 18px;
//   z-index: 1000;
//   color: white;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// }
// .swiper-button-prev::after {
//   margin-left: 50px;
// }
// .swiper-button-next::after {
//   margin-right: 50px;
// }

.banner-sm {
    display: none;
}
@include screen-sm {
  .banner-l {
    display: none;
  }
  .banner-sm {
    display: block;
  }
}
</style>
