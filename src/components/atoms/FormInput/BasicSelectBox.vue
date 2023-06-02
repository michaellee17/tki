<template>
  <select :value="modelValue" @input="onInput" v-if="options.length > 0">
    <option disabled value="-1">{{ defaultValueText }}</option>
    <template v-for="option in options" :key="option">
      <option :value="option.value">{{ option.name }}</option>
    </template>
  </select>
</template>

<script>
import { has } from "lodash";

export default {
  props: {
    modelValue: {
      type: [String, Number],
      default: -1,
    },
    options: {
      type: Array,
      validator(values) {
        let valid = true;
        for (let value of values) {
          if (has(value, "name", "value") === false) {
            valid = false;
            break;
          }
        }
        return valid;
      },
      required: true,
    },
    defaultValueText: {
      type: String,
      default: "Select an item of the list",
      required: false,
    },
  },
  emits: ["update:modelValue"],
  methods: {
    onInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  }
};
</script>
