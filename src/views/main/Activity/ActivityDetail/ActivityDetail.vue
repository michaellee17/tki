<template>
  <div v-if="!$store.state.appView.view" class="top-bg ">
    <div class="blur">
      <div class="container bg position-relative">
        <div class="img-wrap-top position-absolute">
          <img :src="basic_info.image_url" class="img-fluid" alt="">
        </div>
        <div class="title-top position-absolute text-white mb-1">
          <h1 class="fw-bold mb-3">{{ basic_info.performer }}</h1>
          <p class="fs-4">{{ basic_info.release_date }}</p>
          <!-- <p class="fs-4">2023/05/01 (週六) 19:00</p> -->
        </div>
        <div class="title-bottom position-absolute">
          <h2 class="mb-3">{{ basic_info.event_name }}</h2>
          <div class="mb-4">
            <a class="link-primary me-3">{{ basic_info.event_tags }}</a>
            <!-- <a class="link-primary me-3">#流行音樂</a><a class="link-primary me-3">#韓團</a><a class="link-primary me-3">#BLACKPINK</a> -->
          </div>
          <div class="d-flex gap-4">
            <button type="button" class="btn btn-outline-primaryA">
              <img src="../../../../assets/images/icons/share.svg" width="19" class="icon me-1" alt="">
              <span>分享</span>
            </button>
            <button type="button" class="btn btn-outline-primaryA">
              <img src="../../../../assets/images/icons/my-collection.svg" width="19" class="icon me-1" alt="">
              <span>收藏</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container content">
    <div v-if="!$store.state.appView.view" class="border-bottom row justify-content-between text-center mb-4">
      <router-link :to="'/activity/detail/' + $route.params.activityId + '/news'" :class="{ active: $route.name ==='News' }" class="col-3 nav-tab-primary py-2">活動消息</router-link>
      <router-link
        :to="'/activity/detail/' + $route.params.activityId + '/buy-ticket/session'" 
        :class="{ active: $route.name ==='BuyTicketSession' || $route.name ==='BuyTicketType' || $route.name ==='BuyTicketSeat' || $route.name ==='BuyTicketCart' || $route.name ==='BuyTicketCheckout'}" 
        class="col-3 nav-tab-primary py-2">
        活動購票
      </router-link>
      <router-link :to="'/activity/detail/' + $route.params.activityId + '/location'" :class="{ active: $route.name ==='Location' }" class="col-3 nav-tab-primary py-2">位置資訊</router-link>
      <router-link :to="'/activity/detail/' + $route.params.activityId + '/notes'" :class="{ active: $route.name ==='Notes' }" class="col-3 nav-tab-primary py-2">注意事項</router-link>
    </div>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
  created() {
    this.getData();
  },
  computed: mapState('activity', ['basic_info', 'announcement_info', 'ticket_info', 'venue_info', 'matter_content']),
  methods : {
    ...mapActions('activity', ['getData']),
  }
}
</script>

<style scoped lang="scss">
@import "../../../../assets/mixin.scss";

* {
    --img-top-width: 300px;
    --img-top-height: calc( var(--img-top-width) * 1.5 );
    // --img-top-left: 11%;
    @include screen-m {
      --img-top-width: 150px;
      // --img-top-left: 5%;
    }
}

.top-bg{
    background-image: url('../../../../assets/images/activity/blackpink.jpg');
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
        // left: var(--img-top-left);
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
    // margin-top: calc( 40vh );
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
      // bottom: 13%
      // top: calc(100% + 150px);
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