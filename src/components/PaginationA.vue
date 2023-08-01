<template>
  <ul v-if="totalPages > 1 && totalPages <=5" class="pagination d-flex">
    <li>
      <a href="#" :class="{ 'page_link': true, 'disabled-link': currentPage === 1 }" @click.prevent="changePage(currentPage - 1)">&lt;</a>
    </li>
    <li v-for="page in totalPages" :key="page" :class="{ active: currentPage === page }">
      <a href="#" @click.prevent="changePage(page)">{{ page }}</a>
    </li>
    <li>
      <a href="#" :class="{ 'page_link': true, 'disabled-link': currentPage === totalPages }" @click.prevent="changePage(currentPage + 1)">&gt;</a>
    </li>
  </ul>
  <ul v-if="totalPages > 5" class="pagination d-flex">
    <li>
      <a href="#" :class="{ 'page_link': true, 'disabled-link': currentPage === 1 }" @click.prevent="changePage(currentPage - 1)">&lt;</a>
    </li>
    <li v-for="page in fiveArray" :key="page" :class="{ active: currentPage === page }">
      <a href="#" @click.prevent="changePage(page)">{{ page }}</a>
    </li>
    <li>
      <p>...</p>
    </li>
    <li :class="{ active: currentPage === totalPages }">
      <a href="#" @click.prevent="changePage(totalPages)">{{ totalPages }}</a>
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
  data(){
    return{
      fiveArray:[1,2,3,4,5],
    }
  },
  methods: {
    changePage(page) {
      if (page >= 1 && page <= this.totalPages) {
        window.scrollTo(0, 0);
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
