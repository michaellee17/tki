<template>
  <nav class="navbar navbar-expand-lg bg-primary">
    <div class="container">
      <div class="d-flex align-items-center">
        <!-- menu-bar -->
        <a
          class="d-lg-none d-block text-white fs-3 pe-4" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <font-awesome-icon :icon="['fas', 'bars']" />
        </a>
        <!-- logo -->
        <router-link to="/" class="navbar-brand pt-0">
          <img src="../assets/images/logos/logo-main-white.png" class="logo-image" alt="logo">
        </router-link>
      </div>
      <!-- item -->
      <div id="navbarSupportedContent" class="collapse navbar-collapse order-3 order-lg-1">
        <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <a
              id="navbarDropdown" class="nav-link" href="#" role="button"
              data-bs-toggle="dropdown" aria-expanded="false">
              活動分類
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li v-for="item in eventSubMenu" :key="item.class_id" class="border-bottom">
                <router-link :to="'/activity/' + item.class_id" class="dropdown-item">{{ item.class_name }}</router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link to="/announcement/" class="nav-link">最新公告</router-link> 
          </li>
          <li class="nav-item">
            <router-link to="/faq" class="nav-link">常見問題</router-link> 
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">關於我們</router-link> 
          </li>
        </ul>
      </div>
      <!-- search -->
      <div class="search-wrap order-2 order-sm-1 ms-auto">
        <input
          ref="searchInput" v-model="searchData" type="text" placeholder="搜尋活動..." 
          class="search-input web">
        <a type="button" class="search-icon" @click="sendSearch">
          <font-awesome-icon :icon="['fas', 'search']" />
        </a>
        <!-- search 歷史訊息 -->
        <div v-show="searchHistory.length > 0" ref="searchDropdownMenu" class="search-dropdown-menu d-none position-absolute">
          <div class="d-flex justify-content-between mb-1">
            <p class="recentSearch">最近搜尋</p>
            <button class="closeBtn" @click="closeDropdown">X</button>
          </div>
          <a v-for="item in searchHistory" :key="item" class="ellipsis-1 link-primary d-block mb-2" @click="triggerSearch(item)">{{ item }}</a>
        </div>
      </div>
      <!-- login -->
      <div class="nav-item dropdown login-dropdown order-1 order-sm-2 d-flex align-items-center">
        <!-- 尚未登入 -->
        <a
          v-if="loginStatus === false"
          class="nav-link pe-0 ps-4 d-flex align-items-center gap-2 text-nowrap" href="#" role="button"
          @click.prevent="openLoginModal">
          <font-awesome-icon :icon="['fas', 'user-circle']" class="text-light fs-4 user-icon" />
          <span class="login-title">未登入</span>
        </a>
        <!-- 已登入 -->
        <a
          v-if="loginStatus === true" ref="navbarLogin"
          class=" nav-link pe-0 d-flex align-items-center gap-2" href="#" role="button"
          data-bs-toggle="dropdown" aria-expanded="false">
          <font-awesome-icon :icon="['fas', 'user-circle']" class="text-light fs-4 user-icon" />
          <span class="login-title">{{ memberName }}</span>
        </a>
        <ul ref="dropdownMenuLogin" class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li class="border-bottom">
            <router-link :to="{ name: 'Info', params: { memberID: memberDataId } }" class="dropdown-item">會員中心</router-link>
          </li>
          <li class="border-bottom">
            <router-link :to="{ name: 'OrderHistory', params: { memberID: memberDataId } }" class="dropdown-item">訂單記錄</router-link>
          </li>
          <!-- 獲獎紀錄先隱藏 -->
          <!-- <li class="border-bottom">
            <router-link :to="{ name: 'Reward', params: { memberID: memberDataId } }" class="dropdown-item">獲獎紀錄</router-link>
          </li> -->
          <li class="border-bottom">
            <router-link :to="{ name: 'MyCollection', params: { memberID: memberDataId } }" class="dropdown-item">我的收藏</router-link>
          </li>
          <li class="border-bottom">
            <router-link :to="{ name: 'MyTicket', params: { memberID: memberDataId } }" class="dropdown-item">我的票券</router-link>
          </li>
          <li class="border-bottom">
            <router-link :to="{ name: 'TicketList', params: { memberID: memberDataId } }" class="dropdown-item">購票清單</router-link>
          </li>
          <li>
            <a href="#" class="dropdown-item" @click.prevent="handleLogOut">登出</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <loginModal ref="loginModal" />
</template>

<script>
import loginModal from "./LoginModal";
import Swal from "sweetalert2";
import { mapActions,mapGetters } from 'vuex';
export default {
  components: {
    loginModal
  },
  data() {
    return {
       memberID: 0,
       searchData:'',
       eventSubMenu:{},
       searchHistory:[],
    };
  },
  computed: {
    ...mapGetters('user',['getLoginStatus','getMemberData', 'getLoginData']), // 將 getLoginStatus 映射到計算屬性中
    loginStatus() {
      return this.getLoginStatus; // 使用計算屬性取得 loginStatus
    },
    memberData(){
      return this.getMemberData;
    },
    memberName() {
      return this.getMemberData && this.getMemberData.data && this.getMemberData.data.full_name ? this.getMemberData.data.full_name : '';
    },
    memberDataId() {
      if (this.getMemberData && this.getMemberData.data && this.getMemberData.data.id) {
        return this.getMemberData.data.id;
      }
      return null; // 或者返回适当的默认值
    },
  },
  beforeUnmount() {
    this.enterKeyupDestroyed();
  },
  mounted(){
    this.handleSearch();
    this.enterKeyup();
    this.getEventSubMenu();
    const historyString = localStorage.getItem('searchHistory');
    if (historyString) {
      this.searchHistory = JSON.parse(historyString);
    }
  },
  methods: {
    ...mapActions('user', ['updateLoginStatus','updateLoginData','cleanMemberData']),
    triggerSearch(item) {
      this.searchData = item;
      this.sendSearch();
    },
    getEventSubMenu(){
        const apiUrl = `${process.env.VUE_APP_PATH}/event/get-district-class-list`;
        this.axios.get(apiUrl)
        .then(res => { 
          if(res.data.status_code === 'SYSTEM_1000'){
            this.eventSubMenu = res.data.data
          }
        });
    },
    enterKeyupDestroyed() {
      document.removeEventListener("keyup", this.enterKey);
    },
     //表單enter事件綁定
    enterKeyup() {
      document.addEventListener("keyup", this.enterKey);
    },
    //表單enter送出事件
    enterKey(event) {
      if (event.key === 'Enter' && this.searchData) {
        this.sendSearch()
      }
    },
    openLoginModal() {
      this.$refs.loginModal.showModal();
    },
    sendSearch() {
      if (this.searchData.trim() === '') {
        Swal.fire({
          icon: 'error',
          title: '搜尋值不得為空',
          showConfirmButton: false,
          timer: 1500,
        })
        return;
      }
      if (localStorage.getItem('searchHistory')) {
        let historyArray = JSON.parse(localStorage.getItem('searchHistory')); 
        historyArray.push(this.searchData); 
        localStorage.setItem('searchHistory', JSON.stringify(historyArray)); 
      } else {
        localStorage.setItem('searchHistory', JSON.stringify([this.searchData])); 
      }
      const historyString = localStorage.getItem('searchHistory');
      if (historyString) {
        this.searchHistory = JSON.parse(historyString);
      }
      this.$router.push(`/search/${this.searchData}`);
    },
    handleLogOut() {
        const apiUrl = `${process.env.VUE_APP_PATH}/user/logout`;
        const accessToken = this.getLoginData.access_token
        this.axios.get(apiUrl,{
          headers: {
          'Authorization': `Bearer ${accessToken}`
        }
        })
        .then(res => { 
          if(res.data.status_code === 'SYSTEM_1000'){
            this.updateLoginStatus(false);
            this.updateLoginData([]);
            this.cleanMemberData();
            Swal.fire({
              icon: 'success',
              title: '登出成功',
              showConfirmButton: false,
              timer: 1500,
            })
            this.$router.push('/')
          }
          if(res.data.status_code === 'SYSTEM_1001'){
            Swal.fire({
              icon: 'error',
              title: '資訊不完整',
              showConfirmButton: false,
              timer: 1500,
            })
          }
        });
    },
    handleSearch() {
      this.$refs.searchInput.addEventListener('focus', () => {
        this.$refs.searchDropdownMenu.classList.remove('d-none');
      })
      // this.$refs.searchInput.addEventListener('blur', () => {
      //   if(this.$refs.searchDropdownMenu ){
      //     this.$refs.searchDropdownMenu.classList.add('d-none');
      //   } 
      // })
    },
    closeDropdown(){
      this.$refs.searchDropdownMenu.classList.add('d-none');
    }
   },
};
</script>

<style scoped lang="scss">
@import "../assets/mixin.scss";
nav {
  padding-top: 0px;
  padding-bottom: 0px;
  @include screen-sm {
      padding-bottom: 20px;
    }
    & .navbar-nav {
      @include screen-sm {
        padding-top: 20px;
      }
    }
  & .logo-image {
    width: 90px;
    @include screen-sm {
      width: 70px;
    }
  }
  & .nav-link {
    color: #fff;
    letter-spacing: 3px;
    &:hover{
        color: #000;
    }  
  }
  & .nav-item {
    padding-top: 20px;
    padding-bottom: 20px;
    @include screen-l {
      padding-top: 5px;
      padding-bottom: 5px;
    }
  }
  & .login-title {
    width: 84px;
  }
  & .login-dropdown{
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .search-wrap{
    padding-top: 18px;
    padding-bottom: 18px;
  }
  & .dropdown-menu, .search-dropdown-menu {
    transition: all 0.5s ease;
    border: none;
    margin-top: 0;
    min-width: auto;
    padding: 1.5rem 1rem;
    opacity: 0.9;
    top: 100%;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 0px 0px 10px 10px;
    & a {
      letter-spacing: 3px;
    }
    & .dropdown-item:hover, .dropdown-item:focus {
      color: var(--primary-color);
      background-color: transparent;
    }
  }
}
.search-dropdown-menu {
  width: 200px;
  background-color: #fff;
  z-index: 10;
  top: 100%;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 0px 0px 10px 10px;
}
.search-wrap {
  position: relative;
  @include screen-sm {
    flex-basis: 100%;
  }
}
.search-input {
  outline: 0;
  border: 0;
  border-radius: 24px;
  padding: 5px 35px 5px 15px;
  width: 200px;
  line-height: 35px;
  color: var(--primary-color);
  @include screen-sm {
    width: 100%;
  }
}
.search-icon {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--primary-color);
}
.closeBtn{
  border: none;
  background-color: white;
}
.recentSearch{
  margin-bottom: 0;
}
</style>
