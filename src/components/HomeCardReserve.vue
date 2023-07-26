<template v-if="data.length > 0">
  <div class="d-flex align-items-center justify-content-center justify-content-md-start mb-4 gap-3 ">
    <img src="../assets/images/icons/icon_time.svg" alt="hot-event">
    <h2 class="mb-0 text-white">{{ title }}</h2>
  </div>
  <section class="mb-5">
    <swiper
      ref="mySwiperRef" 
      :slides-per-view="'auto'"
      :space-between="20"
      class="mySwiper card-reserve"
      @swiper="onSwiper">
      <swiper-slide v-for="event in data" :key="event.event_id">
        <router-link
          class="d-block"
          :to="'/activity/detail/' + $convertToSlug(event.event_name, event.event_id) + '/buy-ticket/session'">
          <div
            class="event-card bg-cover text-white position-relative mb-3"
            :style="{ backgroundImage: `url(${event.main_imageH_url})` }" />
          <div class="slide-content px-1">
            <h5 class="fs-22 ellipsis-1">{{ event.event_name }}</h5>
            <p class="ellipsis-1">{{ event.ticket_number }} 張</p>
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
        }
    },
    methods: {
    },
}
</script>

<style scoped lang="scss">
* {
  --card-width: 308px;
  @media(max-width: 576px) {
    --card-width: 170px
  }
}
.event-card {
  width: var(--card-width);
  height: var(--card-width);
  border-radius: 20px;
  box-shadow: 0px 3px 6px #00000029;
}
.slide-content {
  width: var(--card-width);
}
</style>

<style lang="scss">
.card-reserve {
  & .swiper-slide {
      width: auto;
  }
}
</style>