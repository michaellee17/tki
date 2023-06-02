<template>
  <table class="table border">
    <tr class="border bottom" v-for="field in items" :key="field">
      <th scope="row" class="border-end p-4">
        <span class="row-title">{{ field.title }}</span>
      </th>
      <td>
        <span class="row-content fst-italic fw-light ms-3 text-secondary">{{ field.desc }}</span>
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped="scoped">
.row-title {
  font-size: 14px;
}
.row-content {
  font-size: 16px;
}
</style>
