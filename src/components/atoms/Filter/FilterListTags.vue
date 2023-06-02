<template>
  <ul class="d-flex flex-wrap">
    <li
      v-for="(item,index) in items"
      :key="item"
      @click="$emit('onTagClicked', getValues(item))"
      class="item list-unstyled me-2"
    >
      <link-wrapper
        v-if="item.location"
        :location="item.location"
        v-bind="item.linkArgs"
        :removeDecorations="true"
      >
        {{ item.name }}<span v-if="index+1 < items.length && comma">,</span>
      </link-wrapper>
      <template v-else>
        {{ item.name }}<span v-if="index+1 < items.length && comma">,</span>
      </template>
    </li>
  </ul>
</template>
<script>
import LinkWrapper from "../LinkWrapper/LinkWrapper.vue";

export default {
  components: { LinkWrapper },
  props: {
    items: {
      type: Array,
      required: true,
    },
    comma:{
      type:Boolean,
      default:false,
    }

  },
  methods: {
    getValues(item) {
      return item.value === "" ? item.name : item.value;
    },
  },
};
</script>
<style scoped="scoped">
.item {
  margin-bottom: 6px;
  margin-bottom: 6px;
  color: #606060 !important;
}
ul {
  padding: 0px !important;
}
</style>
