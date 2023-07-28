<template>
  <ul class="pagination d-flex" v-if="totalPages > 0">
    <li>
      <a href="#" :class="{ 'page_link': true, 'disabled-link': currentPage === 1 }" @click.prevent="changePage(currentPage - 1)" >&lt;</a>
    </li>
    <li v-for="page in totalPages" :key="page" :class="{ active: currentPage === page }">
      <a href="#" @click.prevent="changePage(page)">{{ page }}</a>
    </li>
    <li>
      <a href="#" :class="{ 'page_link': true, 'disabled-link': currentPage === totalPages }" @click.prevent="changePage(currentPage + 1)">&gt;</a>
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
a.disabled-link {
  color: gray; 
  cursor: not-allowed; 
}
a.disabled-link:hover {
  color: gray; 
  cursor: not-allowed; 
}
</style>
