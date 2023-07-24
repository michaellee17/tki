<template>
  <ul class="pagination d-flex">
    <li>
      <a href="#" :disabled="currentPage === 1" class="page_link" @click.prevent="changePage(currentPage - 1)" >&lt;</a>
    </li>
    <li v-for="page in totalPages" :key="page" :class="{ active: currentPage === page }">
      <a href="#" @click.prevent="changePage(page)">{{ page }}</a>
    </li>
    <li>
      <a href="#" :disabled="currentPage === totalPages" class="page_link" @click.prevent="changePage(currentPage + 1)">&gt;</a>
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
  },
  methods: {
    changePage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.$emit('page-changed', page);
      }
    },
  },
};
</script>
<style scoped>
.pagination li {
  padding: 5px;
}
.pagination li.active a {
  color: var(--primary-color);
}
</style>
