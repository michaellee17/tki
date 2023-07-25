<template>
  <div class="wrap">
    <Navbar v-if="!$store.state.appView.view" />
    <div :class="{ 'mb-100': $route.name !== 'Home'}">
      <slot><div class="text-center">No content yet.</div> </slot>
    </div>
    <footer v-if="!$store.state.appView.view" class="mt-auto bg-primary text-white py-3">
      <div class="container">
        <div class="d-flex flex-column-reverse flex-lg-row gap-3 gap-lg-0 align-items-start align-items-lg-center justify-content-between">
          <div>
            <div class="mb-3">
              <router-link to="/about" class="mb-2">關於我們</router-link>
              <span class="mx-2">|</span>
              <router-link to="/contact" class="mb-2">聯絡我們</router-link> 
              <span class="mx-2">|</span>
              <router-link to="/faq" class="mb-2">常見問題</router-link> 
              <span class="mx-2">|</span>
              <router-link to="/privacy-terms" class="mb-2">隱私權條款</router-link> 
              <span class="mx-2">|</span>
              <router-link to="/service-terms" class="mb-2">服務條款</router-link>
              <span class="mx-2">|</span>
              <router-link to="/" class="mb-2">客服時間</router-link>
            </div>
            <p class="mb-0">© Copyright 2023 . T-KI All rights reserved.</p>
          </div>
          <div class="social-media">
            <div class="d-flex align-items-center gap-3 mb-3">
              <p class="mb-0">追蹤我們</p>
              <a href="#"><img src="../assets/images/icons/facebook.png" width="25" alt=""></a>
              <a href="#"><img src="../assets/images/icons/instagram.png" width="25" alt=""></a>
            </div>
            <div class="d-flex align-items-center gap-3">
              <p class=" mb-0">下載APP</p>
              <a href="#"><img src="../assets/images/icons/apple-store.svg" height="25" alt=""></a>
              <a href="#"><img src="../assets/images/icons/google-play.png" height="25" alt=""></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import "bootstrap/dist/js/bootstrap.bundle";
import Navbar from "../components/Navbar.vue"

export default {
  components: {
    Navbar,
  },
  data () {
    return {
    }
  },
  mounted () {
    /* 給 app 的 web view */
    if (this.$store.state.appView.view) {
      this.$store.commit('changeAppView', false)
    }
    if (this.$route.query.isapp === 'true'){
      switch(this.$route.name) {
        case 'About':
        case 'FAQ': 
        case 'ServiceTerms':
        case 'PrivacyTerms':
        case 'Contact':
        case 'BuyTicketSeat':
          this.$store.commit('changeAppView', true)
          break;
      }
    }
  },
};
</script>
<style scoped lang="scss">
@import "../assets/mixin.scss";
.wrap {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
footer {
  & a {
    color: #fff;
    &:hover {
      color: #000;
    }
  }
  /* 與 navbar search 對齊 */
  & .social-media {
    width: 340px;
  }
}
</style>
