<template>
  <span class="filter-title mx-auto"
    ><slot
      ><h3 class="fw-bold">{{ title }}</h3></slot
    ></span
  >
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
<style scoped="scoped">
.filter-title {
  display: inline-flex;
  flex-direction: column;
  margin-bottom: 12px !important;
}

span:after,
span:before {
  content: "";
  border-bottom: 2px solid var(--primary-color);
  order: 2;
  width: 60px;
}

.filter-title h3 {
  margin-bottom: 6px;
  font-size: 22px;
  margin-bottom: 12px;
}
span:after {
  margin-left: auto;
  margin-top: -2px;
  border-color: #d3d3d3;
  width: calc(100% - 60px);
}
</style>
