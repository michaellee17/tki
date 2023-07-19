<template>
  <div v-if="!$store.state.appView.view && ticket_info" class="mb-4">
    <h5 class="fs-18 text-secondary">主辦<span v-if="ticket_info.co_organizer"> / 協辦單位</span></h5>
    <h5 class="text-primary">{{ ticket_info.organizer }}<span v-if="ticket_info.co_organizer"> / {{ ticket_info.co_organizer }}</span></h5>
    <p>{{ ticket_info.description }}</p>
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
        <swiper-slide v-for="event in recommendList" :key="event.event_id">
          <router-link
            :to="'/activity/detail/' + $convertToSlug(event.event_name, event.event_id) + '/buy-ticket/session'"
            >
            <div
              class="collection bg-cover text-white position-relative"
              :style="{ backgroundImage: 'linear-gradient(180deg, #00000000 0%, #00000033 73%, #000000 100%),url(' + event.main_imageH_url + ')' }">
              <div class="position-absolute bottom-0">
                <h4 class="fw-bold">{{ event.performer }}</h4>
                <p>{{ event.event_name }}</p>
              </div>
            </div>
          </router-link>
        </swiper-slide>
        <!-- <swiper-slide v-for="event in recommendList" :key="event.event_id">
          <div
            @click="$router.push('/activity/detail/' + $convertToSlug(event.event_name, event.event_id) + '/buy-ticket/session')">
            <div
              class="collection bg-cover text-white position-relative"
              :style="{ backgroundImage: 'linear-gradient(180deg, #00000000 0%, #00000033 73%, #000000 100%),url(' + event.main_imageH_url + ')' }">
              <div class="position-absolute bottom-0">
                <h4 class="fw-bold">{{ event.performer }}</h4>
                <p>{{ event.event_name }}</p>
              </div>
            </div>
          </div>
        </swiper-slide> -->
      </swiper>
    </div>
  </div>
</template>

<script>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import SwiperCore, { EffectFade, Navigation } from "swiper";
  SwiperCore.use([EffectFade, Navigation]);
  import "swiper/swiper-bundle.css";
  import { mapActions, mapState } from 'vuex';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    }, 
    computed: {
      ...mapState('activity', ['ticket_info']),
      ...mapState('activity', ['recommendList']),
      eventId() {
        const eventRoute = this.$route.params.activityId.split('-');
        return parseInt(eventRoute[eventRoute.length - 1]);
      },
    },
    beforeCreated() {
      this.getRecommendList();
    },
    methods: {
    ...mapActions('activity', ['getRecommendList']),
  }
}
</script>

<style scoped lang="scss">

.collection {
  width: 425px;
  height: 239px;
  border-radius: 20px;
  @media(max-width: 576px) {
    width: 305px;
    height: 172px;
  }
  & .position-absolute {
    left: 1rem;
  }
}
/* 套用輪播 auto 效果 */
.swiper-slide {
    width: auto;
}


</style>