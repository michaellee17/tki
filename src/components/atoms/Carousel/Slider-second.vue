<template>
  <swiper
    ref="mySwiper"
    :loop="true"
    :options="swiperOptions"
    :spaceBetween="30"
    :navigation="true"
    :pagination="{
      type: 'progressbar',
      clickable: true,
    }"
    class="mySwiper"
  >
  <swiper-slide v-for="item in advertises" :key="item.adv_index">
      <a :href="item.link_url" target="_blank">
        <div class="slider slider-middle banner-l" 
        :style="{ backgroundImage: `url(${ item.image_path })` }">
        </div>
        <div class="slider slider-middle banner-sm" 
        :style="{ backgroundImage: `url(${ item.image_path_app })` }">
        </div>
      </a>
    </swiper-slide>
  </swiper>
</template>

<script>
import ButtonFilled from "../Button/ButtonFilled.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { EffectFade, Navigation, Pagination } from "swiper";

SwiperCore.use([EffectFade, Navigation, Pagination]);

import "swiper/swiper-bundle.css";
import {addToCart} from "../../../composables/manageCart"

export default {
  mounted() {
    this.getAdvertises();
  },
  components: {
    ButtonFilled,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      advertises: []
    };
  },
  methods : {
    getAdvertises() {
      this.axios.get(`${process.env.VUE_APP_PATH}/advertise/get_banner?layoutID=2`)
      .then(res => { 
        this.advertises = res.data.data;
      });
    }
  },
  setup() {
    return {
      EffectFade,addToCart,
    };
  }
};
</script>
<style scoped="scoped" lang="scss">
@import "../../../assets/mixin.scss";

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
  max-height: 300px;
  padding: 0px;
  margin: 0px;
  transform: translateY(60px);
  animation-fill-mode: forwards;
  opacity: 0;
  animation-name: slideFade;
  animation-duration: 1s;
  animation-delay: 0.3s;
  object-position: center;
  object-fit: cover;
}
.banner-wrap{
  /* max-height: 600px; */
  display: flex;
  justify-content: center;
  align-items: center;
}
@media (max-width: 767.99px) {
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
