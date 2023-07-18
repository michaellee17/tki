<template v-if="data.length > 0">
 <section class="mb-5">
    <swiper
      ref="mySwiperRef" 
      :slides-per-view="'auto'"
      :free-mode="true"
      :space-between="20"
      class="mySwiper"
      @swiper="onSwiper">
      <div class="position-absolute top-0 left-0 d-flex w-100 justify-content-between align-items-center">
        <h2 class="text-primary">{{ title }}</h2>
        <div>
          <a href="#" class="fs-5 link-primary pe-3">查看更多</a>
          <a @click.stop="slider.slidePrev()" class="me-3">
            <img src="../assets/images/icons/arrow_circle_left.svg" alt="" class="arrow-icon">
          </a>
          <a @click.stop="slider.slideNext()">
            <img src="../assets/images/icons/arrow_circle_right.svg" alt="" class="arrow-icon">
          </a>
        </div>
      </div>
      <swiper-slide v-for="event in data" :key="event.event_id">
        <div
          class="event-card bg-cover text-white position-relative"
          :style="{ backgroundImage: 'linear-gradient(180deg, #00000000 0%, #00000033 73%, #000000 100%),url(' + event.main_imageH_url + ')' }">
          <div class="position-absolute bottom-0">
            <h3 class="fw-bold">{{ event.performer }}</h3>
            <p class="fs-5">{{ event.event_name }}</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </section>
</template>

<script>
  import { Swiper, SwiperSlide, useSwiper } from 'swiper/vue';
  import SwiperCore, { EffectFade, Navigation } from "swiper";
  SwiperCore.use([EffectFade, Navigation]);
  
  import "swiper/swiper-bundle.css";

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    props: ['title', 'data'],
    data () {
        return {
          slider: null,
        }
    },
    methods: {
      onSwiper(swiper) {
        this.slider = swiper;
      },
    },
}
</script>

<style scoped lang="scss">
.event-card {
  width: 576px;
  height: 324px;
  border-radius: 20px;
//   background-image: url('../assets/images/products/concert4.jpg');
  @media(max-width: 576px) {
    width: 288px;
    height: 162px;
  }
  & .position-absolute {
    left: 1rem;
  }
}
.mySwiper {
    padding-top: 5rem;
    /* 套用輪播 auto 效果 */
    & .swiper-slide {
        width: auto;
    }
    & .swiper-button-next {
        top: 0;
    }
}
.arrow-icon {
  filter: var(--grey-filter);
  &:hover, &:focus {
    filter: var(--primary-filter);
  }
}




</style>