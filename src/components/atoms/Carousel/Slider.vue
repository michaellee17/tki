<template>
  <swiper
    ref="mySwiper"
    :options="swiperOptions"
    :spaceBetween="30"
    :navigation="true"
    :pagination="{
      type: 'progressbar',
      clickable: true,
    }"
    class="mySwiper"
  >
    <swiper-slide v-for="item in items" :key="item">
      <div class="fluid-container slider d-block position-relative">
        <div
          class="slider-content d-flex flex-column position-absolute align-items-center text-center"
        >
          <span class="  text-uppercase fs-6 fw-bold">{{ item.category }}</span>
          <h1 class="slider-title text-uppercase">{{ item.productName }}</h1>
        </div>
        <div
          class="caracteristics-slider position-relative d-flex flex-column align-items-center"
        >
          <img
            class="slider-img"
            :src="item.productImage"
            :alt="item.productName"
          />
          <ul class="list-unstyled specification">
            <li
              class="align-items-center text-center"
              v-for="characteristic in item.characteristics"
              :key="characteristic"
            >
              <font-awesome-icon class="slider-icon" :icon="['fas', 'check']" />
              <span class="caracteristic ms-2 ">{{ characteristic }}</span>
            </li>
          </ul>
          <div class="slider-btn d-flex justify-content-center">
            <button-filled
              class="mb-3 slider-product-button fw-bold"
              :text="'Add to cart'"
              :size="'big'"
              @click.prevent="addToCart(item.id)"
            >
              <template v-slot:default>
                <font-awesome-icon
                  class="me-2"
                  :icon="['fas', 'shopping-cart']"
                />
                Add to cart
              </template>
            </button-filled>
          </div>
        </div>
      </div>
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
import { products } from "../../../data/auctions.json";
import {addToCart} from "../../../composables/manageCart"

export default {
  components: {
    ButtonFilled,
    Swiper,
    SwiperSlide,
  },
  props: {
    items: {
      type: Array,
    },
  },
  data() {
    return {
      products,
    };
  },
  setup() {
    return {
      EffectFade,addToCart,
    };
  }
};
</script>
<style>
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
.slider {
  background-image:url('../../../assets/images/slider/slider-bg.png');
  background-repeat: no-repeat;
  background-size: cover;
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

</style>
<style scoped="scoped">
.slider {
  padding: 30px;
  padding-bottom: 0 !important;
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
  color: #9198aa;
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

.slider-img {
  max-width: 500px;
  padding: 0px;
  margin: 0px;
  transform: translateY(60px);
  animation-fill-mode: forwards;
  opacity: 0;
  animation-name: slideFade;
  animation-duration: 1s;
  animation-delay: 0.3s;
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
