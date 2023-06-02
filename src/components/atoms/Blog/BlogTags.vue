<template>
  <div>
    Tags:
    <span class="tags">
      <link-wrapper
        v-for="(tag, i) in items"
        :key="tag"
        :location="tag.location"
        class="fw-bold text-decoration-none"
      >
        {{ tag.name }}<template v-if="i !== items.length - 1">, </template>
      </link-wrapper>
    </span>
  </div>
</template>

<script>
import LinkWrapper from "../LinkWrapper/LinkWrapper.vue";
export default {
  components: {
    LinkWrapper,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style scoped="scoped">
.tags {
  color: var(--primary-color);
}
</style>
