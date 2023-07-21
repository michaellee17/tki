<template>
  <layout>
    <div class="container text-center">
      <h1 class="text-primary display-1 my-5">404</h1>
      <div>
        <p>找不到這個頁面，請確認網址是否正確。</p>
        <router-link to="/">
          <button class="btn btn-primary link-light">回首頁</button>
        </router-link>
      </div>
    </div>
  </layout>
</template>

<script>
import Layout from "../../components/Layout.vue";


export default {
    components: {Layout},
  created() {
    document.title = "404 - T-KI";
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