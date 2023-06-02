<template>
  <input
    :class="{ 'has-select': categoriesOptions }"
    type="text"
    class="search-field radius border"
    :placeholder="placeholder"
    v-model="message"
  />
</template>
<script>
export default {
  props: {
    categoriesOptions: {
      type: Array,
    },
    placeholder: {
      type: String,
    },
    suggestions: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      message: "",
    };
  },
  watch: {
    message() {
      this.$emit("onInput", this.message);
    },
  },
};
</script>
<style scoped="scoped">
.search-field {
  padding: 8px;
  width: 250px;
}

input:focus {
  border: solid #000 1px !important;
}
.orderby,
.sorting {
  background-color: #ffff !important;
}

@media (min-width: 768px) and (max-width: 1024px) {
  .search-field {
    width: 100%;
  }
}
</style>
