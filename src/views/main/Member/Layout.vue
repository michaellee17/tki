<template>
  <layout-default>
    <div class="container row gap-3 mx-auto my-5">
      <div class="sidebar">
        <div class="profile d-flex justify-content-center gap-3 py-3 mb-3">
          <div class="bg-secondary rounded-circle img-wrap" />
          <div>
            <h5 class="text-primary">林GG</h5>
            <p class="text-secondary">0912345678</p>
          </div>
        </div>
        <ul class="slidebar-list fs-18 text-center px-4 py-3">
          <li :class="{ active: $route.name ==='Info' }">
            <span class="me-3">icon</span>
            <router-link to="info">會員資訊</router-link>
          </li>
          <li :class="{ active: $route.name ==='OrderHistory' }">
            <span class="me-3">icon</span>
            <router-link to="order-history">訂單記錄</router-link>
          </li>
          <li :class="{ active: $route.name ==='Reward' }">
            <span class="me-3">icon</span>
            <router-link to="reward">獲獎紀錄</router-link>
          </li>
          <li :class="{ active: $route.name ==='MyCollection' }">
            <span class="me-3">icon</span>
            <router-link to="my-collection">我的收藏</router-link>
          </li>
          <li :class="{ active: $route.name ==='MyTicket' }">
            <span class="me-3">icon</span>
            <router-link to="my-ticket">我的票券</router-link>
          </li>
        </ul>
      </div>
      <div class="col-12 content">
        <router-view />
      </div>
    </div>
  </layout-default> 
</template>

<script>
import LayoutDefault from "../../../components/organisms/LayoutDefault/LayoutDefault.vue";

export default {
  components: {
    LayoutDefault
    
  },
  data () {
    return {
      // showMobileMenu: false,
    }
  },
  created () {
    document.title = "會員中心 - T-KI"
  },
  mounted () {
    this.$store.commit('changeLoginStatus', '林GG')
  },
  unmounted () {
    this.$store.commit('changeLoginStatus', '登入')
  }
}
</script>

<style>

.bg-primary-light {
  background-color: var(--primary-light-color);
}
</style>
<style scoped lang="scss">
.sidebar {
  flex: 0 0 auto;
  width: 250px;
}
@media(max-width: 768px) {
  .sidebar {
    width: 100%;
  }
}
.content {
  flex: 1 0 0;
}
.profile .img-wrap {
  width: 56px;
  height: 56px;
}
.slidebar-list, .profile {
  box-shadow: 0px 3px 6px #00000029;
}
.slidebar-list a {
  color: #000;
}
.slidebar-list li {
  padding: 10px;
  &.active, &.active a{
    color: var(--primary-color)
  }
}
.slidebar-list li:not(:last-child) {
  border-bottom: 1px solid var(--pale-color);
}
</style>