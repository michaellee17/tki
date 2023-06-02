<template>
  <ul class="d-flex flex-column">
    <li v-for="item in items" :key="item" @click="$emit('onSizeClicked', getValues(item))" class="item list-unstyled">
      <span>{{item.name}} ({{item.count}})</span>
    </li>
  </ul>
</template>
<script>
import FilterListTags from './FilterListTags.vue'
export default {
  mixins: [FilterListTags],
  emits: ['onSizeClicked']
};
</script>
<style scoped="scoped">
.item:hover {
  color: var(--primary-color);
  cursor: pointer;
}
.item{
  margin-bottom:6px;
}
ul{
   padding:0px!important;
}
</style>
