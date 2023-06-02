<template>
  <div class="use-coupon d-flex align-items-center border-top border-3 p-4">
    <font-awesome-icon class="icon" :icon="['fas', 'exclamation-circle']" />
    <span class="dropdown-coupon ms-2"><slot>{{ text }}</slot></span>

  </div>
</template>

<script>

export default {
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped="scoped">
.use-coupon {
  box-shadow: 0px 0px 25px rgb(0 0 0 / 10%);
  border-color: #b81c23 !important;
}
.dropdown-coupon,
.icon {
  color: #b81c23;
}
</style>
