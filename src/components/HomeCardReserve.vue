<template v-if="data.length > 0">
  <h2 class="text-primary mb-4">{{ title }}</h2>
  <section class="mb-5">
    <swiper
      ref="mySwiperRef" 
      :slides-per-view="'auto'"
      :free-mode="true"
      :space-between="20"
      :navigation="true"
      class="mySwiper">
      <div class="position-absolute top-0 left-0 d-flex gap-3">
        <img src="../assets/images/icons/arrow_circle_right.svg" alt="">
        <!-- <button type="button" @click="swiper.slideNext()">next</button> -->
      </div>
      <swiper-slide v-for="event in data" :key="event.event_id">
        <div
          class="event-card bg-cover text-white position-relative"
          :style="{ backgroundImage: 'linear-gradient(180deg, #00000000 0%, #00000033 73%, #000000 100%),url(' + event.image_url + ')' }">
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
}
</script>

<style scoped lang="scss">
.event-card {
  width: 320px;
  height: 320px;
  border-radius: 20px;
//   background-image: url('../assets/images/products/concert4.jpg');
  @media(max-width: 576px) {
    width: 160px;
    height: 160px;
  }
  & .position-absolute {
    left: 1rem;
  }
}
.mySwiper {
    padding-top: 4rem;
    /* 套用輪播 auto 效果 */
    & .swiper-slide {
        width: auto;
    }
    & .swiper-button-next {
        top: 0;
    }
}
.swiper-button-next{}




</style>