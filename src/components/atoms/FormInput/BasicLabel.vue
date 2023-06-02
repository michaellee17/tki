<template>
  <div>
    <slot name="before" />
    <label class="text-secondary" :for="forInput">
      {{ title }} <b v-if="required" class="required">*</b>
    </label>
    <slot name="after" />
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "New label",
    },
    required: {
      type: Boolean,
      default: false,
    },
    forInput: {
      type: String,
    },
  },
};
</script>

<style scoped="scoped">
.required {
  color: var(--primary-color);
}
.fs-6 {
  font-weight: 500 !important;
}
</style>
