<template>
  <layout-default>
    <div class="container text-center">
      <!-- <div class="m-5">
        <img class="image" :src="require('../../assets/images/misc/404.png')" alt="404 Page not found">
      </div> -->
      <h1 class="text-primary display-1 my-5">404</h1>
      <div>
        <p>找不到這個頁面，請確認網址是否正確。</p>
        <router-link to="/">
          <button class="btn btn-primary link-light">回首頁</button>
        </router-link>
      </div>
    </div>
  </layout-default>
</template>

<script>
import LayoutDefault from "../../components/organisms/LayoutDefault/LayoutDefault.vue";


export default {
    components: {LayoutDefault},
  created() {
    document.title = "Page not found - iBid";
  }
};
</script>

<style scoped>
.image {
    width:stretch;
}
/* .image-wrapper {
    margin:30px 20%;
    padding:60px 0;
} */
</style>