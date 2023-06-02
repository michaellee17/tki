<template>
  <div
    class=" dropdown-section d-flex flex-column border border-2 rounded p-4 pb-5"
  >
    <div class="text-secondary fw-light fs-6">
      {{ infoText }}
    </div>
    <div class=" row d-flex flex-row mt-3">
        <div
          class="use-coupon  border-top border-3 p-4"
        >
          <font-awesome-icon class="icon" :icon="['fas', 'window-maximize']" />
          <span class="ms-2 text-secondary">{{ title }}</span>
          <slot name="action"></slot>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    infoText: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped="scoped">
.dropdown-section {
  border-color: #d3ced2;
}

.use-coupon {
  box-shadow: 0px 0px 25px rgb(0 0 0 / 10%);
  border-color: var(--primary-color) !important;
}
.dropdown-coupon a,
.icon {
  color: var(--primary-color);
}
</style>
