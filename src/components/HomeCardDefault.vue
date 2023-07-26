<template v-if="data.length > 0">
  <div class="d-flex align-items-center justify-content-between mb-4">
    <h2 class="text-primary title">{{ title }}</h2>
    <a href="#" class="more fs-22 me-4">MORE<span class="ms-3 arrow-right" /></a> 
  </div>
  <section>
    <swiper
      ref="mySwiperRef" 
      :slides-per-view="'auto'"
      :space-between="20"
      :pagination="{
        type: 'progressbar',
        clickable: true,
      }"
      class="mySwiper card-default"
      @swiper="onSwiper">
      <swiper-slide v-for="event in data" :key="event.event_id">
        <router-link
          class="d-block"
          :to="'/activity/detail/' + $convertToSlug(event.event_name, event.event_id) + '/buy-ticket/session'">
          <div
            class="event-card bg-cover text-white mb-3"
            :style="{ backgroundImage: `url(${event.main_imageH_url})` }" />
          <div class="slide-content px-2">
            <h5 class="ellipsis-1 fw-bold">{{ event.performer }}</h5>
            <p class="ellipsis-1">{{ event.event_name }}</p>
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
}
.slide-content {
  width: var(--card-width);
}
h2.title {
  border-left: 8px solid var(--primary-color);
  padding-left: 1rem;
}
.more {
  letter-spacing: 2px;
  &:hover span {
    border: solid var(--primary-color);
    border-width: 0px 2px 2px 0;
  }
}
.arrow-right {
  padding: 5px;
  margin-bottom: 1px;
}
</style>
<style lang="scss">
.card-default {
  &.mySwiper {
    padding-bottom: 50px;
    /* 套用輪播 auto 效果 */
    & .swiper-slide {
        width: auto;
    }
    & .swiper-pagination-progressbar {
      top: 90%;
      width: calc(var(--card-width) + var(--card-width) / 2);
      background-color: var(--primary-color);
      height: 2px;
      display: flex;
      align-items: center;
    }
    & .swiper-pagination-progressbar-fill {
      height: 8px;
      top: -150%;
    }
  } 
}
</style>