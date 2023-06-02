<template>
  <layout-default>
    <div class="container">
        <div class="image-wrapper">
            <img class="image" :src="require('../../assets/images/misc/404.png')" alt="404 Page not found">
        </div>
    </div>
  </layout-default>
</template>

<script>
import LayoutDefault from "../../components/organisms/LayoutDefault/LayoutDefault.vue";


export default {
  created() {
    document.title = "Page not found - iBid";
  },
    components: {LayoutDefault}
};
</script>

<style scoped>
.image {
    width:stretch;
}
.image-wrapper {
    margin:30px 20%;
    padding:60px 0;
}
</style>