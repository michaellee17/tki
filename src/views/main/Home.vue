<template>
  <layout>
    <!-- 主要 slider -->
    <Slider class="mb-5" />

    <!-- 次要 slider -->
    <SliderSecond class="mb-5" />
  </layout>
</template>

<script>
import Layout from "../../components/Layout.vue";
import Slider from "../../components/Slider.vue";
import SliderSecond from "../../components/Slider-second.vue";

export default {
  components: {
    Layout,
    Slider,
    SliderSecond
  },
  beforeCreate() {
    document.title = "T-KI";
  },
}
</script>