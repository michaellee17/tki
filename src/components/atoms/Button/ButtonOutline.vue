<template>
  <component 
    :is="isLink ? 'LinkWrapper' : 'button'"
    class="btn bg-transparent btn-outline-light text-uppercase"
    :class="getClass"
    @click="$emit('onClick', text.toLowerCase().trim())"
    :location="location"
  >
    <slot>
      {{ text }}
    </slot>
  </component>
</template>

<script>
import ButtonFilled from "./ButtonFilled.vue";

export default {
  mixins: [ButtonFilled],
};
</script>

<style scoped="scoped">
.btn:hover {
  color: var(--primary-color);
  background-color: #fff !important;
}
.btn {
  font-weight: 600;
}
.normal {
  font-size: 14px;
  padding: 12px 25px !important;
}
.wide.normal {
  padding: 12px 45px !important;
}
.hasRoundedCorners.normal {
  border-radius: 30px !important;
}
.small {
  font-size: 14px;
  padding: 8px 15px !important;
}
.wide.small {
  padding: 8px 25px !important;
}
.hasRoundedCorners.small {
  border-radius: 30px !important;
}
.big {
  padding: 20px 40px !important;
  font-size: 15px;
}
.big.small {
  padding: 20px 60px !important;
}
.hasRoundedCorners.big {
  border-radius: 50px !important;
}
</style>
