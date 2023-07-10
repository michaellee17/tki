<template>
    <div class="angle-card">
      <div class="angle-card-top" />
      <div class="angle-card-body bg-primary text-white pt-3 px-3">
        <slot>沒有資料</slot>
      </div>
    </div>
</template>

<script>
</script>

<style>
.angle-card {
  width: 380px;
}
.angle-card-top{
    height: 150px;
    background-image: url('../assets/images/products/concert3.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    clip-path: polygon(10% 0, 100% 0, 100% 100%, 0 100%, 0 30%)
}
.angle-card-body {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 0px 2px 5px #00000066;
}
</style>