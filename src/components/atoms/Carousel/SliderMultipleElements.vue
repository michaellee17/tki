<template>
  <split-carousel
    :display-amount="6"
    :item-width="10"
    :height="120"
    :loop="true"
  >
    <split-carousel-item v-for="item in items" :key="item">
      <div class="carousel-item-wrapper">
        <img
          :src="$getFileSource(item.imageSrc)"
          :alt="item.name"
          height="50"
        />
      </div>
    </split-carousel-item>
  </split-carousel>
</template>
<script>
export default {
  props: {
    items: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style>
.split-carousel__left,
.split-carousel__right {
  padding: 0;
  margin-top: 15px;
}
.arrow.right {
  margin-left: 2px;
}
.arrow.left {
  margin-right: 2px;
}
</style>
<style scoped="scoped">
.carousel-item-wrapper {
  padding: 40px;
  width: 229px;
}
</style>
