<template>
  <div v-if="!this.$store.state.appView.view" class="top-bg position-relative">
    <div class="blur">
      <div class="img-wrap-top position-absolute">
        <img src="../../../../assets/images/activity/blackpink.jpg" class="img-cover" alt="">
      </div>
      <div class="title-top text-white position-absolute mb-1">
        <h1 class="fw-bold mb-3">BLACKPINK</h1>
        <p class="fs-4">2023/05/01 (週六) 19:00</p>
      </div>
      <div class="title-bottom position-absolute">
        <h2 class="mb-3">BLACKPINK高雄站演唱會 2023｜BORN PINK</h2>
        <div class="text-primary mb-4">
          <span class="me-3">#流行音樂</span><span class="me-3">#韓團</span><span class="me-3">#BLACKPINK</span>
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
  <div class="container">
    <div v-if="!this.$store.state.appView.view" class="border-bottom row justify-content-between text-center mb-4">
      <router-link :to="'/activity/detail/' + $route.params.activityId + '/news'" :class="{ active: $route.name ==='News' }" class="col-3 nav-tab-primary py-2">活動消息</router-link>
      <router-link
        :to="'/activity/detail/' + $route.params.activityId + '/buy-ticket/session'" 
        :class="{ active: $route.name ==='BuyTicketSession' || $route.name ==='BuyTicketType' || $route.name ==='BuyTicketSeat'}" 
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
export default {
  mounted () {
    console.log(this.$route.params.activityId)
    console.log('123')
  }
}
</script>

<style scoped lang="scss">
@import "../../../../assets/mixin.scss";

* {
    --img-top-width: 300px;
    --img-top-height: calc( var(--img-top-width) * 1.5 );
    --img-top-left: 11%;
    @include screen-m {
      --img-top-width: 150px;
      --img-top-left: 5%;
    }
}

.top-bg{
    background-image: url('../../../../assets/images/activity/blackpink.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 300px;
    & .img-wrap-top {
        width: var(--img-top-width);
        height: var(--img-top-height);
        bottom: 0%;
        transform: translateY(50%);
        left: var(--img-top-left);
    }
    & .title-top {
        bottom: 0;
        left: calc( var(--img-top-width) + var(--img-top-left) + 3% )
    }
    & .title-bottom {
        top: 105%;
        left: calc( var(--img-top-width) + var(--img-top-left) + 3% )
      }
    }
.blur {
    height: 100%;
    width: 100%;
    backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(30px);
}
.container {
    margin-top: calc( var(--img-top-height) / 2 + 48px );
}
@include screen-m { 
  .top-bg .title-bottom {
    top: calc(100% + 150px);
    left: var(--img-top-left)
}
  .container {
    margin-top: calc( var(--img-top-height) + 150px );
  }
  .nav-tab-primary {
    font-size: 1rem;
  }
}



</style>