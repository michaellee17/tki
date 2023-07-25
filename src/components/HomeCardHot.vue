<template v-if="data.length > 0">
  <div class="d-flex align-items-center mb-4 gap-3">
    <img src="../assets/images/icons/icon_star.svg" alt="hot-event">
    <h2 class="mb-0">{{ title }}</h2>
  </div>
  <div class="d-flex gap-3 align-items-center mb-4">
    <swiper
      :slides-per-view="'auto'"
      :free-mode="true"
      :space-between="20"
      class="mySwiper tab-class">
      <swiper-slide v-for="event in data" :key="event.class_name">
        <button
          type="button" :class="{ active : event.class_name === currentClass }"
          class="btn btn-outline-primaryA fs-18" 
          @click="currentClass = event.class_name">
          {{ event.class_name }}
        </button>
      </swiper-slide>
    </swiper>
  </div>
  <section class="mb-5">
    <swiper
      :slides-per-view="'auto'"
      :space-between="20"
      class="mySwiper card-hot"
      @swiper="onSwiper">
      <div class="btn-prev position-absolute">
        <a class="me-3" @click.stop="slider.slidePrev()">
          <img src="../assets/images/icons/arrow_circle_left.svg" alt="" class="arrow-icon">
        </a>
      </div>
      <div class="btn-next position-absolute">
        <a @click.stop="slider.slideNext()">
          <img src="../assets/images/icons/arrow_circle_right.svg" alt="" class="arrow-icon">
        </a>
      </div>
      <swiper-slide v-for="eventData in findHotList.event_data" :key="eventData.event_id">
        <router-link
          :to="'/activity/detail/' + $convertToSlug(eventData.event_name, eventData.event_id) + '/buy-ticket/session'"
          class="event-card d-block bg-cover text-white position-relative"
          :style="{ backgroundImage: 'linear-gradient(180deg, #00000000 0%, #00000033 73%, #000000 100%),url(' + eventData.main_imageH_url + ')' }">
          <div class="slider-content position-absolute bottom-0">
            <h3 class="fw-bold mb-1">{{ eventData.performer }}</h3>
            <p class="ellipsis-1">{{ eventData.event_name }}</p>
          </div>
        </router-link>
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
        },
    },
    created () {
      this.init();
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
* {
  --card-width: 417px;
  @media(max-width: 576px) {
    --card-width: 288px;
  }
}
.event-card {
  width: var(--card-width);
  height: calc(var(--card-width) * 0.5625);
  border-radius: 20px;
  @media(max-width: 576px) {
    width: var(--card-width);
    height: calc(var(--card-width) * 0.5625);
  }
  & .slider-content {
    left: 1rem;
    width: calc(var(--card-width) - 2rem);
    & p {
        font-size: 20px;
      }
    @media(max-width: 576px) {
      & h3 {
        font-size: 16px;
      }
      & p {
        font-size: 14px;
        margin-bottom: 0.5rem;
      }
    }
  }
}
</style>

<style lang="scss">
/* 熱門活動分類 */
 .tab-class.mySwiper {
  margin-left: 0;
  & .swiper-slide {
      width: auto;
  }
 }
/* 熱門活動 card */
.card-hot.mySwiper {
      /* 套用輪播 auto 效果 */
      & .swiper-slide {
          width: auto;
      }
  & .arrow-icon {
    filter: var(--white-filter);
    &:hover, &:focus {
      filter: var(--primary-filter);
    }
  }
  & .btn-prev, .btn-next {
    z-index: 10;
    top: 50%;
    transform: translateY(-50%);
  }
  & .btn-prev {
    left: 20px;
  }
  & .btn-prev, .btn-next {
    right: 20px; 
  }
}

</style>