<template>
  <!-- ActivityDetail -->
  <Loading
    :active="isLoading"
    :color="'#f5742e'"
    :opacity="0.7" />
  <Layout>
    <div
      v-if="!$store.state.appView.view && basic_info"  
      :style="{ backgroundImage: `url(${basic_info.main_imageV_url})` }" class="top-bg">
      <div class="blur">
        <div class="container bg position-relative">
          <div class="img-wrap-top position-absolute">
            <img :src="basic_info.main_imageV_url" class="img-fluid" alt="">
          </div>
          <div class="title-top position-absolute text-white mb-1">
            <h1 class="fw-bold mb-3">{{ basic_info.performer }}</h1>
            <p class="fs-4">{{ basic_info.release_date ? $timeFormatter(basic_info.release_date) : '' }}</p>
          </div>
          <div class="title-bottom position-absolute">
            <h2 class="mb-3">{{ basic_info.event_name }}</h2>
            <div class="mb-2 mb-md-4">
              <p class="text-primary me-3">{{ basic_info.event_tags }}</p>
            </div>
            <div class="d-flex gap-4">
              <button
                type="button" class="btn btn-outline-primaryA">
                <img src="../../../assets/images/icons/share.svg" width="19" class="icon me-1" alt="">
                <span>分享</span>
              </button>
              <button
                type="button" class="btn btn-outline-primaryA"
                :class="{ active: isCollected }">
                <img src="../../../assets/images/icons/my-collection.svg" width="19" class="icon me-1" alt="">
                <span>收藏</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container content">
      <div v-if="!$store.state.appView.view" class="border-bottom row justify-content-between text-center mb-4">
        <a class="col-3 nav-tab-primary py-2">活動消息</a>
        <a class="col-3 nav-tab-primary py-2 active"> 活動購票 </a>
        <a class="col-3 nav-tab-primary py-2">位置資訊</a>
        <a class="col-3 nav-tab-primary py-2">注意事項</a>
      </div>
      <!-- BuyTicket -->
      <div v-if="!$store.state.appView.view && ticket_info" class="mb-4">
        <h5 class="fs-18 text-secondary">主辦<span v-if="ticket_info.co_organizer"> / 協辦單位</span></h5>
        <h5 class="text-primary">{{ ticket_info.organizer }}<span v-if="ticket_info.co_organizer"> / {{ ticket_info.co_organizer }}</span></h5>
        <p>{{ ticket_info.description }}</p>
      </div>
      <!-- Session -->
      <div>
        <h5 class="fs-18 text-secondary mb-3">購票資訊</h5>
        <div
          v-if="ticket_info.session_info && ticket_info.session_info.length > 0" 
          class="row flex-column flex-md-row justify-content-center gap-3 gap-lg-0">
          <div class="col-12 col-lg-6">
            <div>
              <TicketImage :image-url="ticket_info.ticket_image_url" />
            </div>
          </div>
          <div class="col-12 col-lg-6">
            <p class="fs-5">售票時間：{{ $timeFormatter(ticket_info.ticket_date) }}</p>
            <swiper
              :slides-per-view="'auto'"
              :free-mode="true"
              :space-between="20"
              class="mySwiper mb-4">
              <swiper-slide v-for="session in ticket_info.session_info" :key="session.session_name">
                <button
                  type="button" class="btn btn-outline-primaryA"
                  :class="{ active: currentSessionName === session.session_name }"
                  @click.prevent="updateSession(session.session_name, session.ticket_limit)">
                  {{ session.session_name }}
                </button>
              </swiper-slide>
            </swiper>
            <div class="choose-date mb-4">
              <div
                v-for="area in area_info" :key="area.area_name" 
                :class="{'not-cursor' : area.remain_ticket === '已完售' }">
                <a
                  to="type"
                  :class="{ 'soldout': area.remain_ticket === '已完售' }"
                  @click.prevent="setData(area.area_name, area.area_status, area.ticket_type_info )">
                  <div class="d-flex justify-content-between align-items-center mb-3 gap-3">
                    <div>
                      <h6 class="mb-1 link-dark">{{ area.area_name }}</h6>
                      <p class="text-primary mb-0">
                        <span v-for="(ticket, i) in area.ticket_type_info" :key="ticket.ticket_name">NTD {{ $currency(ticket.ticket_price) }}<span v-if="i !== area.ticket_type_info.length - 1"> / </span></span>
                      </p>
                    </div>
                    <p class="fs-5 link-secondary mb-0 remain-ticket text-nowrap">{{ area.remain_ticket }}<span class="ms-3 arrow-right" /></p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- BuyTicket -->
      <div v-if="!$store.state.appView.view">
        <!-- 第一階段先隱藏：認證碼 -->
        <!-- <div class="d-flex flex-column flex-lg-row gap-3 align-items-center my-4">
      <p class="mb-0">若您已經有親友替您購票，請向您的親友領取取票認證碼後，點擊“輸入認證碼取票”按鈕進行取票。</p>
      <button type="button" class="btn btn-outline-primaryB border-primary">輸入認證碼取票</button>
    </div> -->
        <div class="mt-4" />
        <h5 class="fs-18 text-primary mb-3">為您推薦</h5>
        <div>
          <swiper
            :slides-per-view="'auto'"
            :free-mode="true"
            :space-between="20"
            class="mySwiper">
            <swiper-slide v-for="event in recommendList" :key="event.event_id">
              <a>
                <div
                  class="collection bg-cover text-white position-relative"
                  :style="{ backgroundImage: 'linear-gradient(180deg, #00000000 0%, #00000033 73%, #000000 100%),url(' + event.main_imageH_url + ')' }">
                  <div class="slider-content position-absolute bottom-0">
                    <h4 class="ellipsis-1 fw-bold">{{ event.performer }}</h4>
                    <p class="ellipsis-1">{{ event.event_name }}</p>
                  </div>
                </div>
              </a>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from "../../../components/Layout.vue"
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { EffectFade, Navigation } from "swiper";
SwiperCore.use([EffectFade, Navigation]);
import "swiper/swiper-bundle.css";
import TicketImage from '../../../components/gc/loginModal/TicketImage.vue';

export default {
  components: {
    Swiper,
    SwiperSlide,
    TicketImage,
    Layout
  },
  data () {
    return {
      isCollected: '',
      currentSessionName: '',
      area_info: [],
    }
  },
  computed: {
    ...mapState('activity', ['isLoading', 'basic_info', 'ticket_info', 'session_name', 'recommendList']),
  },
  watch: {
      ticket_info: {
      immediate: true,
      handler(newTicketInfo) {
        if (newTicketInfo.session_info && newTicketInfo.session_info.length > 0) {
          this.currentSessionName = newTicketInfo.session_info[0].session_name;
          this.setTicketData({ stateData: 'ticket_limit', data: newTicketInfo.session_info[0].ticket_limit });
          this.init();
        }
      },
    },
    },
  created() {
    const identifier = this.$route.query.identifier;
    console.log(identifier)
    this.getDraft(identifier);
    this.setTicketData({ stateData: 'isLoading', data: true });
    this.getRecommendList();
  },
  unmounted() {
    this.cleanData();
  },
  methods: {
    ...mapMutations('activity', ['setTicketData', 'cleanData']),
    ...mapActions('activity', ['getDraft', 'getRecommendList']),
    init() {
      this.area_info = this.ticket_info.session_info.filter( item => item.session_name === this.currentSessionName)[0].area_info;
    },
    updateSession(name, limit) {
      this.currentSessionName = name;
      this.setTicketData({ stateData: 'ticket_limit', data: limit });
      this.init();
    },
    setData(name, status, ticket) {
      this.setTicketData({ stateData: 'area_name', data: name });
      this.setTicketData({ stateData: 'area_status', data: status });
      this.setTicketData({ stateData: 'ticket_type_info', data: ticket });
      this.setTicketData({ stateData: 'session_name', data: this.currentSessionName });
    },
  }
}
</script>

<style scoped lang="scss">
@import "../../../assets/mixin.scss";

* {
    --img-top-width: 300px;
    --img-top-height: calc( var(--img-top-width) * 1.5 );
    @include screen-m {
      --img-top-width: 150px;
    }
}
.top-bg{
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 300px;
    .container.bg {
      height: 300px;
    }
    & .img-wrap-top {
        width: var(--img-top-width);
        height: var(--img-top-height);
        bottom: 0%;
        transform: translateY(50%);
    }
    & .title-top {
        bottom: 0%;
        left: calc( var(--img-top-width) + 3% )
    }
    & .title-bottom {
        top: 105%;
        left: calc( var(--img-top-width) + 3% )
      }
    }
.blur {
    height: 100%;
    width: 100%;
    backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(30px);
}
.container.content {
    margin-top: calc( var(--img-top-height) / 2 + 48px );
}
@include screen-m {
  .top-bg {
    & .img-wrap-top {
      top: 13%;
      transform: translateY(0%);
    }
    & .title-top {
      top: 13%;
      left: calc( var(--img-top-width) + 6% )
    }
    & .title-bottom {
      left: 3%
    }
  } 
    .container.content {
      margin-top: calc( var(--img-top-height) / 2 + 100px );
  }
    .nav-tab-primary {
      font-size: 1rem;
    }
}
</style>
<style scoped lang="scss">
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
    & a:hover .remain-ticket, a:hover .link-dark {
      color: var(--primary-color)!important;
    }
    & a:hover .arrow-right {
      border: 1px solid var(--primary-color);
      border-width: 0px 2px 2px 0;
    }
}
.soldout {
    opacity: 0.5;
    pointer-events: none;
}
.not-cursor {
  cursor: not-allowed;
}
.swiper-slide {
    width: auto;
}
.arrow-right {
  border: 1px solid var(--secondary-color);
  border-width: 0px 2px 2px 0;
  padding: 5px;
  margin-bottom: 1px;
}
</style>
<style scoped lang="scss">
* {
  --card-width: 425px;
  @media(max-width: 576px) {
    --card-width: 305px;
  }
}

.collection {
  width: var(--card-width);
  height: calc(var(--card-width) * 0.5625);
  border-radius: 20px;
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
/* 套用輪播 auto 效果 */
.swiper-slide {
    width: auto;
}
</style>