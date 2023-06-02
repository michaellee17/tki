<template>
  <input
    type="text"
    :value="modelValue"
    @input="onInput"
    :placeholder="placeholder"
    :class="{ radius: hasRoundedCorners, focus: hasFocus }"
    class="form-control fw-light pt-4 pb-4"
  />
</template>

<script>
export default {
  emits: ["update:modelValue"],
  props: {
    modelValue: null,
    placeholder: {
      type: String,
    },
    hasRoundedCorners: {
      type: Boolean,
      default: false,
    },
    hasFocus: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    onInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped="scoped">
.form-control {
  padding: 10px 20px !important;
}
input,
input::-webkit-input-placeholder {
  font-size: 14px;
}
input.focus:focus {
  border: solid #000 1px !important;
}
</style>
