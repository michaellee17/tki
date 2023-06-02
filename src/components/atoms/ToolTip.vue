<template>
  <popper :hover="true" :arrow="true" class="tooltip-custom">
    <slot></slot>
  </popper>
</template>

<script>
import Popper from "vue3-popper";

export default {
  components: { Popper },
};
</script>

<style scoped>
.tooltip-custom {
  cursor: pointer;
}
</style>
