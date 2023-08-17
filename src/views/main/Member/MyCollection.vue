<template>
  <h3 class="text-primary mb-4">我的收藏</h3>
  <div
    v-if="lists.length === 0" class="text-center mt-2">
    <p>目前尚無資料。</p>
  </div>
  <section class="d-flex flex-wrap gap-4 mb-3">
    <router-link
      v-for="item in lists"
      :key="item.event_id" :to="'/activity/detail/' + $convertToSlug(item.event_name, item.event_id, item.custom_url) + '/buy-ticket/session'" class="collection bg-cover text-white position-relative"
      :style="{ backgroundImage: 'linear-gradient(180deg, #00000000 0%, #00000033 73%, #000000 100%),url(' + item.main_imageH_url + ')' }">
      <div class="position-absolute bottom-0">
        <h4 class="fw-bold">{{ item.performer }}</h4>
        <p>{{ item.event_name }}</p>
      </div>
    </router-link>
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
      total:'',
      lists:[], //列表
      currentPage: 1, // 當前分頁
      itemsPerPage: 4, // 每頁顯示的項目數量
      timer: null
    }
  },
  computed: {
    ...mapGetters('user', ['getMemberData', 'getLoginData', 'getMemberBinding']),
    // 計算總頁數
    totalPages() {
        return Math.ceil(this.total / this.itemsPerPage);
    },
  },
  watch:{
    currentPage(nVal,oVal){
      if(nVal){
        this.getColletions()
      }
    }
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
      this.axios.get(apiUrl,{
        headers: {
          'Authorization': `Bearer ${accessToken}`
        },
        params:{
          limit:this.itemsPerPage, 
          page:this.currentPage, 
        },
      })
      .then(res => {
        if (res.data.status_code === 'SYSTEM_1000') {
          this.lists = res.data.data
          this.total = res.data.total
          console.log(this.lists);
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