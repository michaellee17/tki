<template>
  <div
    class="filter-search d-flex align-items-center justify-content-between position-relative p-4"
  >
    <div
      class="left-side d-md-block d-flex align-items-center flex-row-reverse justify-content-between"
    >
      <slot name="left"></slot>

      <span class="fs-6 text-secondary">
        <template v-if="itemsShowing">Showing {{ itemsShowing }} of </template>
        {{ totalResults }} results</span
      >
    </div>

    <slot name="right"></slot>
  </div>
  <!-- End -->
</template>
<script>
export default {
  props: {
    itemsShowing: {
      type: Number,
    },
    totalResults: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>
<style scoped="scoped">
.filter-search {
  box-shadow: 0px 0px 25px rgb(0 0 0 / 10%);
  background-color: #fff;
  margin-bottom: 30px;
  border-radius: 6px;
  padding: 20px;
}

:deep(.orderby) {
  padding: 10px 0;
  border: none;
}
.option {
  font-weight: normal;
  display: block;
  white-space: nowrap;
  min-height: 1.2em;
  padding: 0px 2px 1px;
}

.sorting:active {
  outline: none;
  box-shadow: none;
}

@media (max-width: 767.98px) {
  .filter-search {
    display: flex;
    flex-direction: column;
    align-items: flex-start !important;
    margin-bottom: 15px;
  }
  .left-side {
    margin-bottom: 15px;
  }
  .left-side span {
    margin: 0px !important;
  }
}
</style>
