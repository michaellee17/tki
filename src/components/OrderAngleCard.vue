<template>
  <div class="angle-card">
    <div class="angle-card-top" :style="{ backgroundImage: 'linear-gradient(180deg, #00000000 0%, #00000033 73%, #000000 100%),url(' + topImage + ')' }" />
    <div class="angle-card-body bg-primary text-white pt-3 px-3">
      <slot>沒有資料</slot>
    </div>
  </div>
</template>

<script>
export default{
  props: {
    topImage: {
      type: String,
      required: true,
    },
    
  },
}
</script>

<style scoped lang="scss">
.angle-card {
  width: 465px;

  @media(max-width: 576px) {
    width: 305px;
  }
}

.angle-card-top {
  height: 262px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  clip-path: polygon(10% 0, 100% 0, 100% 100%, 0 100%, 0 30%);

  @media(max-width: 576px) {
    height: 172px;
  }
}

.angle-card-body {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 0px 2px 5px #00000066;
}</style>