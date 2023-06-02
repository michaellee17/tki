<template>
  <div class="container tab-container p-0">
    <div class="tabs row m-0">
      <div
        class="tab col blue-background border-2 text-center"
        v-for="tab in state.tabs"
        :key="tab.id"
        :class="{ active: tab.id === state.currentActive }"
        @click="selectTab(tab.id)"
      >
        <span class="text-uppercase fs-7 fw-bold">{{ tab.title }}</span>
      </div>
    </div>
    <slot />
  </div>
</template>

<script>
import { reactive, provide } from "vue";

export default {
  name: "Tabs",
  setup() {
    const state = reactive({
      currentActive: "",
      tabs: [],
    });

    provide("tabManager", state);

    return { state };
  },
  mounted() {
    this.state.currentActive = 0;
  },

  methods: {
    selectTab(id) {
      this.state.currentActive = id;
    },
  },
};
</script>

<style scoped="scoped">
.tabs .tab:not(:last-child) {
  border-right: 2px solid #fff !important;
}
.tab {
  padding: 20px 30px;
  cursor: pointer;
  transition-duration: 0.5s;
}
.tab span {
  color: #ffff;
}

.tab:hover,
.active {
  background-color: #ffff;
  transition-duration: 0.5s;
  box-shadow: 0 0 25px rgb(0 0 0 / 10%);
}
.tab:hover,
.tab:hover span,
.active span {
  transition-duration: 0.5s;
  color: var(--primary-color);
}
.tab:focus span {
  color: var(--primary-color);
}
.tab:focus {
  background-color: #ffff;
  box-shadow: 0 0 25px rgb(0 0 0 / 10%);
}
@media (max-width: 767.98px) {
  .tabs {
    display: flex !important;
    flex-direction: column;
    align-items: center;
  }
  .tab {
    width: 100% !important;
  }
  .tab-container {
    padding: 0px !important;
  }
}
@media (min-width: 768px) and (max-width: 1024px) {
  .tab {
    width: 100%;
    text-align: center;
  }
  .tabs {
    display: flex !important;
    flex-direction: column;
    align-items: center;
  }
}
</style>
