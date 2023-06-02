<template>
  <div
    class="btn btn-md text-light rounded-pill ps-3 pe-3 fw-bold text-uppercase"
  >
    <slot>
      {{ text }}
    </slot>
  </div>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
  },
};
</script>
