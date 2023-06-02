<template>
  <div class="stepper ">
    <!-- Minus button -->
    <button class="btn btn-sm bg-transparent" v-if="curVal > 0" @click="curVal = Number(curVal) - 1; onForcedUpdate(curVal)">-</button>
    <button class="btn btn-sm text-secondary bg-transparent" v-if="curVal === 0" >-</button>

    <!-- Input container -->
    <div class="stepper__content">
      <input
        type="number"
        :value="modelValue"
        @input="onInput"
        class="stepper__input text-center"
      />
    </div>

    <!-- Plus button -->
    <button class="btn btn-sm bg-transparent" @click="curVal = Number(curVal) + 1; onForcedUpdate(curVal)">+</button>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: null
  },
  data() {
    return {
      curVal: this.modelValue,
    };
  },
  emits: ["update:modelValue"],
  methods: {
    onInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
    onForcedUpdate(forcedValue) {
      this.$emit("update:modelValue", forcedValue);
    },
  },
};
</script>

<style scoped="scoped">
.btn:focus{
  outline:none;
  box-shadow:none;
}
.stepper {
  display: flex;
  /* Border */
  border: 1px solid rgba(0, 0, 0, 0.3);
  /* Size */
  height: 32px;
  width: 128px;
  border-radius: 5%;
  border-color: #bababa;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
.stepper__button {
  /* Center the content */
  align-items: center;
  display: flex;
  justify-content: center;
  /* Size */
  width: 32px;
  background-color: transparent !important;
}

.stepper__content {
  flex: 1;
}
.stepper__input {
  /* Take full size of its container */
  height: 100%;
  width: 100%;
  border: 0px;
}
.stepper {
  width: 105px;
  height:40px;
}

</style>
