<template>
  <h5 class="fs-18 text-secondary mb-3">購票資訊</h5>
  <div
    v-if="this.ticket_info && this.ticket_info.session_info.length > 0" 
    class="row flex-column flex-md-row justify-content-center gap-3 gap-lg-0">
    <div class="col-12 col-lg-6">
      <div class="">
        <img :src="ticket_info.ticket_image_url" class="img-fluid" alt="">
      </div>
    </div>
    <div class="col-12 col-lg-6">
      <p class="fs-5">售票時間：{{ ticket_info.ticket_date }}</p>
      <swiper
        :slides-per-view="'auto'"
        :free-mode="true"
        :space-between="20"
        class="mySwiper mb-4">
        <swiper-slide v-for="session in ticket_info.session_info" :key="session.session_name">
          <button
            type="button" class="btn btn-outline-primaryA"
            :class="{ active: currentSessionName === session.session_name }"
            @click.prevent="updateSession(session.session_name)">
            {{ session.session_name }}
          </button>
        </swiper-slide>
      </swiper>
      <div class="choose-date mb-4">
        <div class="soldout d-flex justify-content-between align-items-center mb-3">
          <div>
            <h6 class="mb-1">BORN PINK座位特區 (票價含 …</h6>
            <p class="text-primary mb-0">NTD 8,800</p>
          </div>
          <p class="fs-5 text-secondary mb-0">已完售 ></p>
        </div>
        <router-link
          v-for="area in area_info" :key="area.area_name" to="type"
          @click.prevent="setData(area.area_name, area.area_status, area.ticket_type_info )">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <div>
              <h6 class="mb-1 link-dark">{{ area.area_name }}</h6>
              <p class="text-primary mb-0">
                <span v-for="(ticket, i) in area.ticket_type_info" :key="ticket.ticket_name">NTD {{ ticket.ticket_price }}<span v-if="i !== area.ticket_type_info.length - 1"> / </span></span>
              </p>
            </div>
            <p class="fs-5 text-secondary mb-0">熱賣中 ></p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { EffectFade, Navigation } from "swiper";
SwiperCore.use([EffectFade, Navigation]);
import "swiper/swiper-bundle.css";
import { mapState, mapMutations } from 'vuex';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      currentSessionName: '',
      area_info: [],
    }
  },
  created() {
    if (this.ticket_info && this.ticket_info.session_info.length > 0) {
      this.currentSessionName = this.ticket_info.session_info[0].session_name;
      this.init();
    }
  },
  computed: {
    ...mapState('activity', ['ticket_info', 'session_name']),
    // ...mapState('activity', ['basic_info', 'announcement_info', 'ticket_info', 'venue_info', 'matter_content']),
  },
  methods: {
    ...mapMutations('activity', ['setTicketData']),
    init() {
      this.area_info = this.ticket_info.session_info.filter( item => item.session_name === this.currentSessionName)[0].area_info;
    },
    updateSession(name) {
      this.currentSessionName = name;
      this.init();
    },
    setData(name, status, ticket) {
      this.setTicketData({ stateData: 'area_name', data: name });
      this.setTicketData({ stateData: 'area_status', data: status });
      this.setTicketData({ stateData: 'ticket_type_info', data: ticket });
      this.setTicketData({ stateData: 'session_name', data: this.currentSessionName });
    }
  }
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