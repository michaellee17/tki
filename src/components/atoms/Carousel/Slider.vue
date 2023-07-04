<template>
  <swiper
    ref="mySwiper"
    :loop="true"
    :options="swiperOptions"
    :space-between="30"
    :navigation="true"
    :pagination="{
      type: 'progressbar',
      clickable: true,
    }"
    class="mySwiper">
    <swiper-slide v-for="(item, i) in advertises" :key="item.image_path + i">
      <a :href="item.link_url" target="_blank">
        <div
          class="slider slider-top banner-l" 
          :style="{ backgroundImage: `url(${ item.image_path })` }" />
        <div
          class="slider slider-top banner-sm" 
          :style="{ backgroundImage: `url(${ item.image_path_app })` }" />
      </a>
    </swiper-slide>
  </swiper>
</template>

<script>
import ButtonFilled from "../Button/ButtonFilled.vue";
// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { EffectFade, Navigation, Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([EffectFade, Navigation, Pagination]);

import "swiper/swiper-bundle.css";
import {addToCart} from "../../../composables/manageCart"

export default {
  components: {
    ButtonFilled,
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      EffectFade,addToCart,
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
@import "../../../assets/mixin.scss";

@keyframes slideTop {
  from {
    transform: translateY(60px);
  }
  to {
    transform: translateY(0px);
  }
}
@keyframes slideFade {
  from {
    transform: translateY(60px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
}
.swiper-pagination {
  bottom: 0 !important;
  top: unset !important;
}
.swiper-button-prev::after,
.swiper-button-next::after {
  background: #000;
  background: rgba(0, 0, 0, 0.5);
  width: 40px;
  height:40px;
  position: absolute;
  display: block;
  font-size: 18px;
  z-index: 1000;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
.swiper-button-prev::after {
  margin-left: 50px;
}
.swiper-button-next::after {
  margin-right: 50px;
}
.slider {
  padding: 30px;
  padding-bottom: 0 !important;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
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
<style scoped="scoped" lang="scss">
@import "../../../assets/mixin.scss";
.slider-top {
  // web 16:5
  height: 600px;
  @include screen-xl {
    height: 450px;
  }
  @include screen-l {
    height: 320px;
  }
  @include screen-m {
    height: 240px;
  }
  // app 16:9
  @include screen-sm {
    height: 324px;
  }
}
.slider-icon {
  color: #8500bd;
  font-weight: 400;
}
.slider-product-button {
  padding: 20px 55px !important;
  border-radius: 30px !important;
}
.fa-check {
  font-weight: 400;
  width: 15px !important;
  height: auto;
}
.slider-content {
  padding: 20px 0 0 0 !important;
  left: 0;
  right: 0;
  transform: translateY(60px);
  animation-fill-mode: forwards;
  animation-name: slideTop;
  animation-duration: 1s;
}

.caracteristic {
  color: #fff; /* color: #9198aa; */
  font-size: 18px !important;
  transform: translateY(60px);
  animation-fill-mode: forwards;
  text-align: center;
  animation-name: slideTop;
  animation-duration: 1s;
}
.slider-btn {
  top: -40px;
  position: relative;
  margin-top: 20px;
}
.slider-title {
  font-family: "Bowlby One";
  text-shadow: rgb(0 0 0 / 15%) 0px 15px 30px;
  height: auto;
  width: auto;
  color: rgb(255, 255, 255);
  text-decoration: none;
  line-height: 146px;
  letter-spacing: 0px;
  font-weight: 400;
  font-size: 10vw;
  animation-name: slideTop;
  animation-duration: 1s;
  animation-delay: 0.1s;
}


.specification {
  top: -40px;
  position: relative;
  animation-name: slideFade;
  animation-duration: 1s;
  animation-delay: 0.3s;
}
.add_to_cart {
  padding: 40px;
  height: 60px;
  font-size: 16px;
}

@media screen and (min-width: 1400px) {
  .slider-title {
     font-size: 140px;
  }
}

.slider-img {
  max-width: 100%;
  /* width: 1920px;
  height: 600px; */
  padding: 0px;
  margin: 0px;
  transform: translateY(60px);
  animation-fill-mode: forwards;
  opacity: 0;
  animation-name: slideFade;
  animation-duration: 1s;
  animation-delay: 0.3s;
  /* object-position: center;
  object-fit: cover; */
}
.banner-wrap{
  /* max-height: 600px; */
  display: flex;
  justify-content: center;
  align-items: center;
}
@media (max-width: 768px) {
  .slider-title {
    font-size: 50px;
    top: -40px;
    position: relative;
  }
  .slider-content {
    padding: 0 !important;
  }
}
</style>
