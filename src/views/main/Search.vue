<template>
  <layout>
    <TopHeader :title="`「${searchInput}」搜尋結果`" />
    <div v-if="lists.length > 0" class="container mt-5">
      <div class="d-flex flex-wrap gap-3 mb-4">
        <div class="icon-circle bg-primary d-flex justify-content-center align-items-center">
          <img src="../../assets/images/icons/icon_tuneshow.png" width="24" alt="">
        </div>
        <div>
          <div class="select">
            <select v-model="areas">
              <option value="" disabled>縣市</option>
              <template v-for="country in countries" :key="country.id">
                <option :value="country.name">{{ country.name }}</option>
              </template>
            </select>
          </div>
        </div>
        <button
          v-for="item in hots" :key="item" type="button" class="btn btn-outline-primaryA text-nowrap ellipsis-1s active" 
          @click="changeSearch(item)">
          {{ item }}
        </button>
      </div>
      <!-- 預設一頁放 9 個活動 -->
      <div class="d-flex justify-content-center justify-content-md-start gap-4 flex-wrap mb-4">
        <router-link
          v-for="item in paginatedLists" :key="item.event_id" class="cardA bg-cover text-white position-relative"
          :to="'/activity/detail/' + $convertToSlug(item.event_name, item.event_id) + '/buy-ticket/session'"
          :style="{ backgroundImage: 'linear-gradient(180deg, #00000000 0%, #00000033 73%, #000000 100%),url(' + item.main_imageH_url + ')' }">
          <div class="slider-content position-absolute bottom-0">
            <h4 class="ellipsis-1 fw-bold">{{ item.performer }}</h4>
            <p class="ellipsis-1">{{ item.event_name }}</p>
          </div>
        </router-link>
      </div>
      <div class="d-flex justify-content-center">
        <PaginationA :total-pages="totalPages" :current-page="currentPage" @page-changed="changePage" />
      </div>
    </div>
    <div v-if="lists.length === 0" class="noData">
      <h5>查無搜尋結果，請重新搜尋。</h5>
    </div>
  </layout>
</template>

<script>
import Layout from "../../components/Layout.vue";
import TopHeader from "../../components/TopHeader.vue";
import PaginationA from "../../components/PaginationA.vue";
import { countries } from "../../data/gc/countries.json";
import { mapGetters } from "vuex";
export default {
  components: {
    Layout, TopHeader, PaginationA
  },
  data() {
    return {
      areas:'',
      countries: countries,
      searchData: '',
      lists:[],
      currentPage: 1, // 當前分頁
      itemsPerPage: 9, // 每頁顯示的項目數量
      hots:[],
    }
  },
  computed: {
    ...mapGetters('user', ['getLoginStatus', 'getMemberData', 'getLoginData']), // 將 getLoginStatus 映射到計算屬性中
    totalPages() {
      return Math.ceil(this.lists.length / this.itemsPerPage);
    },
    paginatedLists() {
      const startIdx = (this.currentPage - 1) * this.itemsPerPage;
      const endIdx = startIdx + this.itemsPerPage;
      return this.lists.slice(startIdx, endIdx);
    },
    searchInput () {
      return this.$route.params.searchText
    },
  },
  watch: {
    searchInput (nVal, oVal) {
      if (nVal){
        this.getSearchData(nVal)
      }
    },
    areas (nVal, oVal){
      if(nVal){
        this.getSearchData(this.searchInput)
      }
    }
  },
  mounted() {
    this.getSearchData(this.searchInput)
  },
  beforeCreate() {
    document.title = "搜尋結果 - T-KI";
  },
  methods: {
    changeSearch(item){
      this.$router.push({name:'Search',params:{searchText:item}})
    },
    changePage(page) {
      // 分頁變更事件處理器
      this.currentPage = page;
    },
    getSearchData(searchText) {
      const apiUrl = `${process.env.VUE_APP_PATH}/search`;
      const requestData = {
        keyword: searchText,
        page:1, 
        limit:9,
      };
      if (this.areas) {
        requestData.county = this.areas;
      }
      this.axios.post(apiUrl, requestData)
      .then(res => {
        if (res.data.status_code === 'SYSTEM_1000') {
          this.lists = res.data.data;
          this.hots = res.data.hot_keywords;
        }
      });
    },
  },
};
</script>
<style scoped lang="scss">
* {
  --card-width: 410px;
  @media(max-width: 576px) {
    --card-width: 305px;
  }
}
.noData{
  display: flex;
  justify-content: center;
  & h4{
    font-size: 36px;
    letter-spacing: 3.6px;
  }
}
.cardA {
  width: var(--card-width);
  height: calc(var(--card-width) * 0.5625);
  border-radius: 20px;
  & .slider-content {
    left: 1rem;
    width: calc(var(--card-width) - 2rem);
    & p {
        font-size: 20px;
      }
    @media(max-width: 576px) {
      & h3 {
        font-size: 16px;
      }
      & p {
        font-size: 14px;
        margin-bottom: 0.5rem;
      }
    }
  }
}

.icon-circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

/* select custom style  */
select {
  color: #fff;
  appearance: none;
  background-color: transparent;
  border: none;
  font-size: 1rem;
  padding: 0 10px 0 30px;
  width: 100%;
  cursor: inherit;
}

select::-ms-expand {
  display: none;
}

.select {
  background-color: var(--primary-color);
  border-radius: 28px;
  width: 100%;
  min-width: 165px;
  padding: 0.4rem 2rem;
  font-size: 1.25rem;
  cursor: pointer;
  display: grid;
  grid-template-areas: "select";
  align-items: center;
  & option{
    background-color: var(--primary-color);;
  }
}

.select::after {
  content: "";
  width: 14px;
  height: 7px;
  background-color: #fff;
  clip-path: polygon(100% 0%, 0 0%, 50% 100%);
  justify-self: end;
}

.select::before {
  content: "";
  width: 24px;
  height: 100%;
  background-image: url(../../assets/images/icons/icon_locationshow.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  justify-self: start;
}

select,
.select:after,
.select:before {
  grid-area: select;
}
</style>