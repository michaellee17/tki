<template>
  <slot></slot>
  <span class="text-danger"
    ><slot name="errorName">{{ error }}</slot></span
  >
</template>

<script>
export default {
  props: {
    error: {
      type: String,
      required: true,
    },
  },
};
</script>
