<template>
<layout-default>
  <div class="container row mx-auto border justify-content-between my-5">
    <div class="col-4">
      <ul class="member border">
        <li class="">
          <img src="" alt="">
          <h4>林GG</h4>
        </li>
        <li><router-link to="info">會員資訊</router-link></li>
        <li><router-link to="order-history">訂單記錄</router-link></li>
        <li><router-link to="reward">獲獎紀錄</router-link></li>
        <li><router-link to="my-collection">我的收藏</router-link></li>
      </ul>
    </div>
    <div class="col-7 border">
      <router-view></router-view>
    </div>
  </div>
</layout-default> 
</template>

<script>
import LayoutDefault from "../../../components/organisms/LayoutDefault/LayoutDefault.vue";

export default {
  data () {
    return {
      // showMobileMenu: false,
    }
  },
  components: {
    LayoutDefault
    
  }
}
</script>

<style scoped="scoped">


@media (max-width: 767.98px) {
  .menu-products,
  .search-form-product {
    display: none;
  }
  .row-header {
    display: flex;
  }
  .navbar-header {
    display: unset !important;
  }
  .border-md-bottom {
    border-bottom: 1px solid rgba(221, 221, 221, 0.49);
  }
}
</style>