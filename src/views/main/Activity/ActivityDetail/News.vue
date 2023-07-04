<template>
  <div>
    <swiper
      :slides-per-view="2"
      :space-between="30"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
      class="mySwiper">
      <swiper-slide>
        <router-link to="/activity/news-detail">
        <div class="card-news rounded mb-5">
          <div ref="cardNews" class="img-wrap-news bg-cover bg1" />
          <div class="card-body p-3">
            <p class="text-primary fs-5">Live Nation Taiwan 理想國</p>
            <p class="text-secondary">2023/04/23 19:35</p>
            <p class="fs-5">BLACKPINK WORLD TOUR [BORN PINK] KAOHSIUNG首場秒殺完售，加場公開 本週開賣</p>
          </div>
        </div>
      </router-link>
      </swiper-slide>
      <swiper-slide>
        <div class="card-news rounded mb-5">
          <div ref="cardNews" class="img-wrap-news bg-cover bg1" />
          <div class="card-body p-3">
            <p class="text-primary fs-5">Live Nation Taiwan 理想國</p>
            <p class="text-secondary">2023/04/23 19:35</p>
            <p class="fs-5">BLACKPINK WORLD TOUR [BORN PINK] KAOHSIUNG首場秒殺完售，加場公開 本週開賣</p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="card-news rounded mb-5">
          <div ref="cardNews" class="img-wrap-news bg-cover bg2" />
          <div class="p-3">
            <p class="text-primary fs-5">Live Nation Taiwan 理想國</p>
            <p class="text-secondary">2023/04/23 19:35</p>
            <p class="fs-5">BLACKPINK高雄站演唱會 2023票務詳情</p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="card-news rounded mb-5">
          <div ref="cardNews" class="img-wrap-news bg-cover bg2" />
          <div class="p-3">
            <p class="text-primary fs-5">Live Nation Taiwan 理想國</p>
            <p class="text-secondary">2023/04/23 19:35</p>
            <p class="fs-5">BLACKPINK高雄站演唱會 2023票務詳情</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import SwiperCore, { EffectFade, Navigation, Pagination } from "swiper";
  SwiperCore.use([EffectFade, Navigation, Pagination]);
  
  import "swiper/swiper-bundle.css";

  export default { 
    components: {
      Swiper,
      SwiperSlide,
    }
}
</script>

<style scoped lang="scss">
.card-news {
    box-shadow: 0px 3px 6px #00000029;
}
// .card-body {
//     height: 100%;
// }
.img-wrap-news {
    height: 300px;
    border-radius: 10px 10px 0px 0px;
}
.bg1 {
    background-image: url('../../../../assets/images/activity/news1.jpg');
}
.bg2 {
    background-image: url('../../../../assets/images/activity/news3.jpg');
}
.swiper-slide {
  height: auto;
  align-self: stretch;
}

</style>
