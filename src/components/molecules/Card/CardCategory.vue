<template>
  <div
    class="Card-category p-0  d-flex align-items-center justify-content-center" :style="getBackground"
  >
    <div
      class="Card-content d-flex flex-column align-items-center justify-content-center"
    >
      <h3
        class="text-white d-flex card-title text-uppercase fw-bold align-middle fs-2"
        >{{ title }}</h3
      >
      <span class="text-white d-flex  align-middle fs-6"
        ><b class="me-1">{{ productsNo }}</b> Product{{
          productsNo > 1 ? "s" : ""
        }}</span
      >

      <ButtonOutline
        v-if="buttonLocation"
        :location="buttonLocation"
        :linkWrapperArgs="linkWrapperArgs"
        class="mt-3"
        :text="'View All Items'"
        :hasRoundedCorners="true"
        :size="'small'"
        :wide="true"
      />
    </div>
  </div>
</template>
<script>
import ButtonOutline from "../../atoms/Button/ButtonOutline.vue";
export default {
  components: {
    ButtonOutline,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    productsNo: {
      type: Number,
    },
    buttonLocation: {
      type: String,
    },
    linkWrapperArgs: {
      type: Object,
    },
    background: {
      type: String,
      default: "radial-gradient(#5b75f7, #3b54d5)"
    }
  },
  computed: {
    getBackground() {
      return "background:"+this.background
    }
  }
};
</script>
<style scoped="scoped">
.Card-category {
  background: radial-gradient(#5b75f7, #3b54d5);
}
.card-title {
  font-size: 27px !important;
}
@media (max-width: 767.98px) {
  .Card-category {
    flex-wrap: wrap;
    padding: 40px !important;
    width: calc(100% - 40px);
    margin: 0 20px;
  }
}
</style>
