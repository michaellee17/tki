<template>
  <div
    class="dropdown-list position-relative"
    @mouseenter="searching = true"
    @mouseleave="searching = false"
  >
    <div class="wrapper">
      <input
        type="search"
        class="form-control position-relative  rounded"
        :value="modelValue"
        aria-label="Search"
        :placeholder="placeholderText"
        :class="{ radius: hasRoundedCorners }"
        @focus="searching = true"
        @input="onInput"
      />
    </div>
    <div
      v-if="searching"
      class="overflow-auto position-absolute w-100 bg-white dropdown-live"
    >
      <div
        class="item-search"
        v-for="item in foundItems"
        :key="item"
        @click="onClick(item[matchKey])"
      >
        {{ item[matchKey] }}
      </div>
    </div>
  </div>
</template>

<script>
import { filter } from "lodash";

export default {
  props: {
    modelValue: null,
    items: {
      type: Array,
      required: true,
    },
    matchKey: {
      type: String,
      required: true,
    },
    hasRoundedCorners: {
      type: Boolean,
      default: false,
    },
    classes: {
      type: String,
    },
    placeholderText: {
      type: String,
      default: "Click here to select",
    },
  },
  emits: ["update:modelValue"],

  methods: {
    onInput(event) {
      this.searchContent(event.target.value);
      this.$emit("update:modelValue", event.target.value);
    },
    onClick(item) {
      this.$emit("update:modelValue", item);
      this.searchContent(item);
    },
    searchContent(data) {
      this.foundItems = filter(this.items, (item) =>
        item[this.matchKey].match(data)
      );
    },
  },
  data() {
    return {
      foundItems: this.items,
      searching: false,
    };
  },
};
</script>

<style scoped="scoped">
.dropdown-live {
  margin-top: -23px;
  padding: 25px 20px 10px;
  z-index: 1;
  box-shadow: 0 0 25px rgb(0 0 0 / 10%);
}
.form-control {
  z-index: 20;
}
.wrapper {
  background: white;
}
.dropdown-list > div.overflow-auto {
  max-height: 200px;
}
.rounded {
  border-radius: 30px !important;
}
.item-search {
  cursor: pointer;
  margin-top: 5px;
}
.item-search span:hover {
  background-color: #0000;
}
input:focus {
  border: solid #000 1px !important;
}
</style>
