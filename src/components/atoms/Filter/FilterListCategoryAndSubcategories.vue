<template>
  <ul v-for="category in items" :key="category" :class="categoryClasses">
    <li
      class="item list-unstyled"
      @click="$emit('onCategorySelect', subcategory)"
    >
      {{ category.name }}
    </li>
    <li
      v-for="subcategory in category.subcategories"
      :key="subcategory"
      :class="subcategoryClasses"
      @click="$emit('onCategorySelect', subcategory)"
      class="item list-unstyled ms-2"
    >
      {{ subcategory }}
      <template v-if="subcategory.count"> ({{ subcategory.count }}) </template>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
    categoryClasses: {
      type: String,
    },
    subcategoryClasses: {
      type: String,
    },
  },
  emits: ["onCategorySelect"],
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
