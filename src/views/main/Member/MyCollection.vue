<template>
  <h3 class="text-primary mb-4">我的收藏</h3>
  <section class="d-flex flex-wrap gap-4 mb-3">
    <div v-for="item in paginatedLists" :key="item.event_id" class="collection bg-cover text-white position-relative">
      <img :src="item.main_imageH_url" alt="Event Image">
      <div class="position-absolute bottom-0">
        <h4 class="fw-bold">{{ item.performer}}</h4>
        <p>{{ item.event_name }}</p>
      </div>
    </div>
  </section>
  <div class="d-flex justify-content-end">
    <PaginationA :total-pages="totalPages" :current-page="currentPage" @page-changed="changePage" />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import PaginationA from "../../../components/PaginationA.vue";

export default {
  components: { PaginationA },
  data(){
    return{
      lists:[], //列表
      currentPage: 1, // 當前分頁
      itemsPerPage: 2, // 每頁顯示的項目數量
    }
  },
  computed: {
    ...mapGetters('user', ['getMemberData', 'getLoginData', 'getMemberBinding']),
    // 計算總頁數
    totalPages() {
        return Math.ceil(this.lists.length / this.itemsPerPage);
    },
    paginatedLists() {
      const startIdx = (this.currentPage - 1) * this.itemsPerPage;
      const endIdx = startIdx + this.itemsPerPage;
      return this.lists.slice(startIdx, endIdx);
    },
  },
  mounted(){
    this.getColletions()
  },
  methods: {
    changePage(page) {
      // 分頁變更事件處理器
      this.currentPage = page;
    },
    getColletions(){
      const apiUrl = `${process.env.VUE_APP_PATH}/user/get-collect-list`;
      const accessToken = this.getLoginData.access_token
      const requestData = {
        limit:4, //總回傳筆數，預設為4
        page:1, //總回傳頁數，預設為1
      };
      this.axios.get(apiUrl,{
        headers: {
          'Authorization': `Bearer ${accessToken}`
        },
        params:{
          requestData,
        },
      })
      .then(res => {
        console.log(res);
        if (res.data.status_code === 'SYSTEM_1000') {
          this.lists = res.data.data
        }
      });
    },
  },
}
</script>

<style scoped lang="scss">
.collection {
  width: 465px;
  height: 262px;
  border-radius: 20px;
  & img{
    width: 100%;
  }
  @media(max-width: 576px) {
    width: 305px;
    height: 172px;
  }
  & .position-absolute {
    left: 1rem;
  }
}
</style>