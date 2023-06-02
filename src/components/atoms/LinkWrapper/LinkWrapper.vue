<template>
  <a
    :target="target"
    v-if="external"
    :class="{ removeDecorations }"
    :href="location"
  >
    <slot>
      {{ name }}
    </slot>
  </a>

  <router-link v-else :to="location" :class="{ removeDecorations }">
    <slot>
      {{ name }}
    </slot>
  </router-link>
</template>

<script>
export default {
  props: {
    target: {
      type: String,
    },
    external: {
      type: Boolean,
      default: false,
    },
    location: {
      type: String,
      required: true,
      default: "/",
    },
    name: {
      type: String,
    },
    removeDecorations: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
.removeDecorations {
  color: #484848;
  text-decoration: none;
}
</style>
