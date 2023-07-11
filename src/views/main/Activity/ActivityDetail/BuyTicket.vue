<template>
  <div v-if="!$store.state.appView.view" class="mb-4">
    <h5 class="fs-18 text-secondary">主辦 / 協辦單位</h5>
    <h5 class="text-primary">Live Nation Taiwan 理想國 / 高雄市政府</h5>
    <p>史上首組登頂美國告示牌排行榜Billboard 200專輯榜冠軍的韓國女團新專輯&lt; Born Pink >首周狂賣200萬張，刷新韓國女團最高銷售紀錄新專輯主打歌&lt; Shut Down >發行當日全面制霸iTunes榜43國冠軍人氣席捲全球的現象級韓國女團BLACKPINK，全新世界巡迴演出降臨高雄國家體育場超越想像的最高規格製作 不計成本打造台灣史上最大規模女團演唱會3月18日 全台唯一場 生而為粉</p>
  </div>
  <router-view />
  <div v-if="!$store.state.appView.view">
    <div class="d-flex flex-column flex-lg-row gap-3 align-items-center my-4">
      <p class="mb-0">若您已經有親友替您購票，請向您的親友領取取票認證碼後，點擊“輸入認證碼取票”按鈕進行取票。</p>
      <button type="button" class="btn btn-outline-primaryB border-primary">輸入認證碼取票</button>
    </div>
    <h5 class="fs-18 text-primary mb-3">為您推薦</h5>
    <div>
      <swiper
        :slides-per-view="'auto'"
        :free-mode="true"
        :space-between="20"
        class="mySwiper">
        <swiper-slide>
          <div class="collection bg-cover rounded text-white position-relative">
            <div class="position-absolute bottom-0">
              <h3 class="fw-bold">楊丞琳</h3>
              <p class="fs-5">世界巡回演唱會</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="collection bg-cover rounded text-white position-relative">
            <div class="position-absolute bottom-0">
              <h3 class="fw-bold">楊丞琳</h3>
              <p class="fs-5">世界巡回演唱會</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="collection bg-cover rounded text-white position-relative">
            <div class="position-absolute bottom-0">
              <h3 class="fw-bold">楊丞琳</h3>
              <p class="fs-5">世界巡回演唱會</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="collection bg-cover rounded text-white position-relative">
            <div class="position-absolute bottom-0">
              <h3 class="fw-bold">楊丞琳</h3>
              <p class="fs-5">世界巡回演唱會</p>
            </div>
          </div>
        </swiper-slide>
      </swiper>
      <section class="d-flex flex-wrap gap-3 mb-3" />
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
    data () {
        return {
        }
    }
}
</script>

<style scoped lang="scss">

.collection {
  width: 380px;
  @media(max-width: 576px) {
    width: 310px;
  }
  height: 210px;
  background-image: url('../../../../assets/images/products/concert4.jpg');
  & .position-absolute {
    left: 1rem;
  }
}
/* 套用輪播 auto 效果 */
.swiper-slide {
    width: auto;
}

</style>