<template>
  <textarea
    class="form-control"
    rows="3"
    :placeholder="placeholder"
    @input="onInput"
  ></textarea>
</template>

<script>
export default {
  emits: ["update:modelValue"],
  props: {
    modelValue: null,
    placeholder: {
      type: String,
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
  border: 0;
}
.form-control,
.form-control::-webkit-input-placeholder {
    font-size: 13px;
    
}

</style>
