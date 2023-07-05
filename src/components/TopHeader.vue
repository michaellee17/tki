<template>
  <div class="top-bg d-flex justify-content-center align-items-center mb-5">
    <h1 class="text-light fw-bold">{{ title }}</h1>
  </div>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style scoped>
.top-bg {
  background-image: url('../assets/images/top-bg.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 400px;
}
h1 {
  font-size: 36px;
  letter-spacing: 3.6px;
}
</style>