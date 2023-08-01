<template>
  <ul v-if="totalPages > 1" class="pagination d-flex">
    <li>
      <a href="#" :class="{ 'page_link': true, 'disabled-link': currentPage === 1 }" @click.prevent="changePage(currentPage - 1)">&lt;</a>
    </li>
    <li v-for="page in displayPages" :key="page" :class="{ active: currentPage === page || page === '...' }">
      <p v-if="page === '...'" href="#" @click.prevent>...</p>
      <a v-else href="#" @click.prevent="changePage(page)">{{ page }}</a>
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
      fiveArray:[1,2,3,4,5]
    }
  },
  computed:{
    displayPages() {
      // 計算顯示的頁碼陣列，包含省略號
      const result = [];
      if (this.totalPages <= 6) {
        // 總頁數小於等於5，直接顯示所有頁碼
        for (let i = 1; i <= this.totalPages; i++) {
          result.push(i);
        }
      } else {
        // 總頁數大於5，根據當前頁顯示頁碼和省略號
        if (this.currentPage <= 3) {
          // 當前頁為前三頁時，顯示前5頁和省略號
          result.push(...this.fiveArray, '...', this.totalPages);
        } else if (this.currentPage > this.totalPages -2) {
           // 當前頁為後二頁時，顯示後五頁加最後一頁和省略號
          result.push(1, '...',this.totalPages - 5,this.totalPages - 4, this.totalPages - 3,this.totalPages - 2,this.totalPages - 1 ,this.totalPages);
        } else if(this.currentPage === this.totalPages -2){
           // 當前頁為倒數第三頁時頁時，顯示後五頁加最後一頁和省略號(解除重複問題)
          result.push(1,'...',this.currentPage - 3,this.currentPage - 2,this.currentPage - 1, this.currentPage, this.currentPage + 1,this.currentPage + 2)
        } else {
          // 當前頁在中間位置時，顯示當前頁的前兩頁、當前頁和當前頁的後兩頁和省略號
          result.push(1, '...',this.currentPage - 2,this.currentPage - 1, this.currentPage, this.currentPage + 1,this.currentPage + 2 ,'...', this.totalPages);
        }
      }
      return result;
    },
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
