<template>
  <div v-show="isActive">
    <slot></slot>
  </div>
</template>

<script>
import { ref, inject, onBeforeMount, watch } from "vue";

export default {
  props: {
    title: {
      type: String,
    },
  },
  setup(props) {
    const isActive = ref(false);

    const tabManager = inject("tabManager");
    const id = tabManager.tabs.length;

    watch(
      () => tabManager.currentActive,
      () => {
        isActive.value = id === tabManager.currentActive;
      }
    );
    onBeforeMount(() => {
      tabManager.tabs.push({
        id,
        title: props.title,
      });
    });

    return { isActive, tabManager };
  },
};
</script>
