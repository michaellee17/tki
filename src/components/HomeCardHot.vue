<template v-if="data.length > 0">
  <h2 class="text-primary mb-4">{{ title }}</h2>
  <section class="mb-5">
    <swiper
      :slides-per-view="'auto'" 
      :free-mode="true"
      :space-between="20"
      class="mySwiper"
      @swiper="onSwiper">
      <div class="position-absolute top-0 left-0 w-100 d-flex flex-column flex-md-row gap-2 gap-md-0 justify-content-between">
        <div class="d-flex gap-3 align-items-center">
          
          <button
            v-for="event in data" :key="event.class_name"
            type="button" :class="{ active : event.class_name === currentClass }"
            class="btn btn-outline-primaryA fs-18" 
            @click="currentClass = event.class_name">
            {{ event.class_name }}
          </button>
        </div>
        <div class="ms-auto ms-md-0">
          <button type="button" class="btn" @click.stop="slider.slidePrev()">
            <img src="../assets/images/icons/arrow_circle_left.svg" alt="" class="arrow-icon">
          </button>
          <button type="button" class="btn" @click.stop="slider.slideNext()">
            <img src="../assets/images/icons/arrow_circle_right.svg" alt="" class="arrow-icon">
          </button>
        </div>
      </div>
      <!-- <div class="position-absolute top-0 left-100 d-flex gap-3">
        <button type="button" class="btn" @click.stop="slider.slidePrev()">
          <img src="../assets/images/icons/arrow_circle_left.svg" alt="">
        </button>
        <button type="button" class="btn" @click.stop="slider.slideNext()">
          <img src="../assets/images/icons/arrow_circle_right.svg" alt="">
        </button>
      </div> -->
      <swiper-slide v-for="eventData in findHotList.event_data" :key="eventData.event_id">
        <div
          class="event-card bg-cover text-white position-relative"
          :style="{ backgroundImage: 'linear-gradient(180deg, #00000000 0%, #00000033 73%, #000000 100%),url(' + eventData.image_url + ')' }">
          <div class="position-absolute bottom-0">
            <h3 class="fw-bold">{{ eventData.performer }}</h3>
            <p class="fs-5">{{ eventData.event_name }}</p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div
          class="event-card bg-cover text-white position-relative"
          :style="{'backgroundImage': `url(${require('../assets/images/products/concert4.jpg')})`}">
          <div class="position-absolute bottom-0">
            <h3 class="fw-bold">楊丞琳</h3>
            <p class="fs-5">世界巡回演唱會</p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div
          class="event-card bg-cover text-white position-relative"
          :style="{'backgroundImage': `url(${require('../assets/images/products/concert4.jpg')})`}">
          <div class="position-absolute bottom-0">
            <h3 class="fw-bold">楊丞琳</h3>
            <p class="fs-5">世界巡回演唱會</p>
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
          currentClass: '演唱會',
          slider: null,
        }
    },
    computed: {
        findHotList () {
          if (this.data.length > 0) {
            return this.data.find( (item) => item.class_name === this.currentClass )
          } else {
            return {}
          }
        }
    },
    created () {
      this.init();
        // console.log(this.title, this.findHotList,)
    },
    methods: {
      init() {
        if (this.data.length > 0) {
          this.currentClass = this.data[0].class_name;
        }
      },
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
    @media(max-width: 768px) {
      padding-top: 7rem;
    }
    /* 套用輪播 auto 效果 */
    & .swiper-slide {
        width: auto;
    }
}
.arrow-icon {
  filter: var(--grey-filter);
  &:hover, &:focus {
    filter: var(--primary-filter);
  }
}




</style>