<template>
  <div class="author-details d-flex flex-row mb-4 mt-2 flex-wrap">
    <link-wrapper v-bind="authorLinkArgs" class="author text-decoration-none">
      <font-awesome-icon class="icon text-secondary" :icon="['far', 'user']" />
      <span class=" text-secondary fw-light ms-2 me-4">{{ authorName }}</span>
    </link-wrapper>

    <link-wrapper v-bind="categoryLinkArgs" class="tag text-decoration-none">
      <font-awesome-icon
        class="icon text-secondary "
        :icon="['far', 'bookmark']"
      />
      <span class="text-secondary fw-light ms-2 me-4">{{ category }}</span>
    </link-wrapper>

    <link-wrapper v-bind="dateLinkArgs" class="date text-decoration-none">
      <font-awesome-icon
        class="icon text-secondary"
        :icon="['far', 'calendar']"
      />
      <span class="text-secondary fw-light ms-2 me-4">{{
        $formatDate(date)
      }}</span>
    </link-wrapper>
  </div>
</template>

<script>
import LinkWrapper from "../LinkWrapper/LinkWrapper.vue";

export default {
  components: {
    LinkWrapper,
  },
  props: {
    authorName: {
      type: String,
    },
    category: {
      type: String,
    },
    date: {
      type: String,
    },
    authorLinkArgs: {
      type: Object,
    },
    categoryLinkArgs: {
      type: Object,
    },
    dateLinkArgs: {
      type: Object,
    },
  },
};
</script>

<style scoped="scoped">
.author:hover > span {
  color: var(--primary-color) !important;
}
.tag:hover > span {
  color: var(--primary-color) !important;
}
</style>
