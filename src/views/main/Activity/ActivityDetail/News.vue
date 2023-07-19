<template>
  <div>
    <swiper
      :slides-per-view="2"
      :space-between="15"
      :breakpoints="breakpoints"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
      class="mySwiper">
      <swiper-slide v-for="item in announcement_info" :key="item.announcement_id">
        <router-link class="card-news-wrap d-flex" :to="'/activity/news-detail/' + $convertToSlug(item.title, item.announcement_id)">
          <div class="h-100 card-news rounded mb-5">
            <div
              ref="cardNews" class="img-wrap-news bg-cover" 
              :style="{ backgroundImage: `url(`+ item.image_url +`)` }" />
            <div class="card-body p-3">
              <p class="organizer text-primary fs-5">{{ item.created_by }}</p>
              <p class="text-secondary">{{ item.release_date }}</p>
              <p class="title fs-5">{{ item.title }}</p>
            </div>
          </div>
        </router-link>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import SwiperCore, { EffectFade, Navigation, Pagination } from "swiper";
  SwiperCore.use([EffectFade, Navigation, Pagination]);
  import "swiper/swiper-bundle.css";
  import { mapState } from 'vuex';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    }, 
    data() {
      return {
        breakpoints: {
          '768' : {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          '1024' : {
            slidesPerView: 3,
            spaceBetween: 30,
          }
        }
      }
    },
    computed: {
      ...mapState('activity', ['announcement_info']),
    },
}
</script>

<style scoped lang="scss">
/* 卡片等高 */
.card-news-wrap {
  height: 90%;
  & .card-news {
    box-shadow: 0px 3px 6px #00000029;
  }
  & .img-wrap-news {
    height: 30vh;
    border-radius: 10px 10px 0px 0px;
  }
  @media(max-width: 768px) {
  .title, .organizer {
    font-size: 16px!important;
  }
}
}
.swiper-slide {
  height: auto;
  align-self: stretch;
}


</style>
