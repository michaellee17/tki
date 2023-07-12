<template>
  <h5 class="fs-18 text-secondary mb-3">購票資訊</h5>
  <div class="row flex-column flex-md-row  justify-content-center">
    <div class="col-12 col-lg-6">
      <div class="">
        <img src="../../../../assets/images/activity/news2.jpg" class="img-fluid" alt="">
      </div>
    </div>
    <div class="col-12 col-lg-6">
      <p class="fs-5">售票時間：2023/06/03 12:00 ~ 2023/07/01 19:30</p>

      <swiper
      :slides-per-view="'auto'"
      :free-mode="true"
      :space-between="20"
      class="mySwiper mb-4">
      <swiper-slide>
        <button type="button" class="btn btn-outline-primaryA active">6/11</button>
      </swiper-slide>
      <swiper-slide>
        <button type="button" class="btn btn-outline-primaryA">6/12</button>
      </swiper-slide>
      <swiper-slide>
        <button type="button" class="btn btn-outline-primaryA">6/13</button>
      </swiper-slide>
      <swiper-slide>
        <button type="button" class="btn btn-outline-primaryA">6/13</button>
      </swiper-slide>
      <swiper-slide>
        <button type="button" class="btn btn-outline-primaryA">6/13</button>
      </swiper-slide>
    </swiper>

      <div class="choose-date mb-4">
        <div class="soldout d-flex justify-content-between align-items-center mb-3">
          <div>
            <h6 class="mb-1">BORN PINK座位特區 (票價含Sound …</h6>
            <p class="text-primary mb-0">NTD 8,800</p>
          </div>
          <p class="fs-5 text-secondary mb-0">已完售 ></p>
        </div>
        <router-link to="type">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <div>
              <h6 class="mb-1 link-dark">平面座位特區</h6>
              <p class="text-primary mb-0">NTD 5,800 / 4,800</p>
            </div>
            <p class="fs-5 text-secondary mb-0">熱賣中 ></p>
          </div>
        </router-link>
        <div class="d-flex justify-content-between align-items-center mb-3">
          <div>
            <h6 class="mb-1">看台座位區</h6>
            <p class="text-primary mb-0">NTD 5,800 / 4,800 / 3,800 / 3,300 / 2,…</p>
          </div>
          <p class="fs-5 text-secondary mb-0">熱賣中 ></p>
        </div>
        <div class="d-flex justify-content-between align-items-center mb-3">
          <div>
            <h6 class="mb-1">VIP座位特區</h6>
            <p class="text-primary mb-0">NTD 6,800</p>
          </div>
          <p class="fs-5 text-secondary mb-0">熱賣中 ></p>
        </div>
        <div class="d-flex justify-content-between align-items-center mb-3">
          <div>
            <h6 class="mb-1">VIP座位特區</h6>
            <p class="text-primary mb-0">NTD 6,800</p>
          </div>
          <p class="fs-5 text-secondary mb-0">熱賣中 ></p>
        </div>
        <div class="d-flex justify-content-between align-items-center mb-3">
          <div>
            <h6 class="mb-1">VIP座位特區</h6>
            <p class="text-primary mb-0">NTD 6,800</p>
          </div>
          <p class="fs-5 text-secondary mb-0">熱賣中 ></p>
        </div>
        <div class="d-flex justify-content-between align-items-center mb-3">
          <div>
            <h6 class="mb-1">VIP座位特區</h6>
            <p class="text-primary mb-0">NTD 6,800</p>
          </div>
          <p class="fs-5 text-secondary mb-0">熱賣中 ></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { EffectFade, Navigation } from "swiper";
SwiperCore.use([EffectFade, Navigation]);

import "swiper/swiper-bundle.css";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
}
</script>

<style scoped lang="scss">
// .img-wrap-buy-ticket {
//     width: 100%;
//     height: 100%;
//     max-width: 560px;
//     max-height: 560px;
// }
.choose-date {
    max-height: 400px;
    overflow: auto;
    padding-right: 15px;
        //軌道
        // &::-webkit-scrollbar-track {
        //     -webkit-box-shadow: 0
        // }
        //整體
        &::-webkit-scrollbar {
            width: 8px;
        background-color: var(--bs-gray-200);
        }
        //bar 本體
        &::-webkit-scrollbar-thumb {
            background-color: var(--primary-color);
        }
}
.soldout {
    opacity: 0.5;
}
.swiper-slide {
    width: auto;
}
.link-dark:hover {
  color: var(--primary-color);
}
</style>