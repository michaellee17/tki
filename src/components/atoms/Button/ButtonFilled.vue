<template>
  <component
    :is="isLink ? 'LinkWrapper' : 'button'"
    class="button-custom border-0  text-decoration-none"
    :class="getClass"
    @click="$emit('onClick', text.toLowerCase().trim())"
    v-bind="linkWrapperArgs"
    :location="location"
  >
    <slot>{{ text }}</slot>
  </component>
</template>

<script>
import LinkWrapper from "../LinkWrapper/LinkWrapper.vue";

export default {
  components: { LinkWrapper },
  props: {
    text: {
      type: String,
      default: "Button",
    },
    linkWrapperArgs: {
      type: Object
    },
    location: {
      type: String,
      default: "",
    },
    hasRoundedCorners: {
      type: Boolean,
      default: false,
    },
    wide: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "normal",
      validator(value) {
        return ["small", "normal", "big"].includes(value);
      },
    },
  },
  computed: {
    getClass() {
      return {
        hasRoundedCorners: this.hasRoundedCorners,
        normal: this.size === "normal",
        small: this.size === "small",
        big: this.size === "big",
        wide: this.wide,
        "d-flex align-items-center justify-content-center": this.isLink,
        "d-inline-block": !this.isLink,
      };
    },
    isLink() {
      return this.location !== "";
    },
  },
};
</script>
<style>
.button-custom svg {
  transition: all 0.25s ease-in-out;
}
.button-custom:hover svg {
  color: var(--primary-color) !important;
}
</style>
<style scoped="scoped">
.button-custom {
  background-color: var(--primary-color);
  color: white !important;
  text-transform: uppercase;
  text-align: center !important;
  font-weight: 600;
  transition: all 0.25s ease-in-out;
}
.button-custom:hover {
  color: var(--primary-color) !important;
  background-color: #ffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.normal {
  font-size: 14px;
  padding: 10px 25px !important;
}
.wide.normal {
  padding: 10px 45px !important;
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
