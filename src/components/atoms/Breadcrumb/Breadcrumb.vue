<template>
  <div class="page-location">
    <!-- 15 min -->
    <link-wrapper :location="home" class="breadcrumb-text text-decoration-none">
      <span class="breadcrumb-home">Home</span> <span class="breadcrumb-text mx-2"> / </span>
    </link-wrapper>
    <template v-for="(link, i) in $store.state.app.breadcrumb" :key="link">
      <link-wrapper :location="link.location" class="breadcrumb-text text-decoration-none">
        <span class="breadcrumb-text">{{ link.title }}</span>
      </link-wrapper>

      <span class="mx-2" v-if="i + 1 !== $store.state.app.breadcrumb.length">
        /
      </span>

    </template>
  </div>
</template>

<script>
import LinkWrapper from "../LinkWrapper/LinkWrapper.vue";
export default {
  components: { LinkWrapper },
};
</script>

<style scoped="scoped">
.breadcrumb-text{
    color:#999999!important;
  }
@media  (max-width:769px) {
  .page-location {
    padding:0;
  }
  

}
</style>