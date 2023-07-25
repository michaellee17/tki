<template>
  <layout>
    <div v-if="this.getMemberData.data" class="container row gap-3 mx-auto my-5">
      <div class="sidebar">
        <div class="profile d-flex justify-content-center align-items-center gap-3 py-3 mb-3">
          <img src="../../../assets/images/icons/avatar.png" width="50" alt="">
          <div>
            <h5 class="text-primary">{{ memberName }}</h5>
            <p class="text-secondary mb-0">{{ memberAccount }}</p>
          </div>
        </div>
        <ul v-if="this.$route.params.memberID" class="slidebar-list fs-18 px-4 py-3">
          <li :class="{ active: $route.name ==='Info' }">
            <router-link :to="{ name: 'Info', params: { memberID: memberData } }" class="d-flex justify-content-center align-items-center gap-3">
              <img src="../../../assets/images/icons/member-Information.svg" width="30" class="icon" alt="member-Information">
              <span>會員資訊</span>
            </router-link>
          </li>
          <li :class="{ active: $route.name ==='OrderHistory' }">
            <router-link :to="{ name: 'OrderHistory', params: { memberID: memberData } }" class="d-flex justify-content-center align-items-center gap-3">
              <img src="../../../assets/images/icons/order-history.svg" width="30" class="icon" alt="order-history">
              <span>訂單記錄</span>
            </router-link>
          </li>
          <!-- 獲獎紀錄先隱藏 -->
          <!-- <li :class="{ active: $route.name ==='Reward' }">
            <router-link :to="{ name: 'Reward', params: { memberID: memberData } }" class="d-flex justify-content-center align-items-center gap-3">
              <img src="../../../assets/images/icons/awards.svg" width="30" class="icon" alt="awards">
              <span>獲獎紀錄</span>
            </router-link>
          </li> -->
          <li :class="{ active: $route.name ==='MyCollection' }">
            <router-link :to="{ name: 'MyCollection', params: { memberID: memberData } }" class="d-flex justify-content-center align-items-center gap-3">
              <img src="../../../assets/images/icons/my-collection.svg" width="30" class="icon" alt="my-collection">
              <span>我的收藏</span>
            </router-link>
          </li>
          <li :class="{ active: $route.name ==='MyTicket' }">
            <router-link :to="{ name: 'MyTicket', params: { memberID: memberData } }" class="d-flex justify-content-center align-items-center gap-3">
              <img src="../../../assets/images/icons/my-ticket.svg" width="30" class="icon" alt="my-ticket">
              <span>我的票券</span>
            </router-link>
          </li>
          <li :class="{ active: $route.name ==='TicketList' }">
            <router-link :to="{ name: 'TicketList', params: { memberID: memberData } }" class="d-flex justify-content-center align-items-center gap-3">
              <!-- 先上一個icon頂著-->
              <img src="../../../assets/images/icons/my-ticket.svg" width="30" class="icon" alt="my-ticket">
              <span>購票清單</span>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="col-12 content">
        <router-view />
      </div>
    </div>
  </layout> 
</template>

<script>
import Layout from "../../../components/Layout.vue";
import { mapGetters  } from 'vuex';
export default {
  components: {
    Layout
    
  },
  data () {
    return {
    }
  },
  computed:{
    ...mapGetters('user',['getMemberData']), 
    memberData(){
      if (this.getMemberData.data && this.getMemberData.data.id) {
        return this.getMemberData.data.id;
      } else {
        return '';
      }
    },
    memberName(){
      if (this.getMemberData.data && this.getMemberData.data.full_name) {
        return this.getMemberData.data.full_name;
      } else {
        return '';
      }
    },
    memberAccount(){
      if (this.getMemberData.data && this.getMemberData.data.account) {
        return this.getMemberData.data.account;
      } else {
        return '';
      }
    },
  },
  created () {
    document.title = "會員中心 - T-KI"
  },
}
</script>

<style>

.bg-primary-light {
  background-color: var(--primary-light-color);
}
</style>
<style scoped lang="scss">
.sidebar {
  flex: 0 0 auto;
  width: 250px;
}
@media(max-width: 768px) {
  .sidebar {
    width: 100%;
  }
}
.content {
  flex: 1 0 0;
}
.profile .img-wrap {
  width: 56px;
  height: 56px;
}
.slidebar-list, .profile {
  box-shadow: 0px 3px 6px #00000029;
}
.slidebar-list a {
  color: #000;
}
.slidebar-list li {
  padding: 10px;
  &.active, &.active a, & :hover {
    color: var(--primary-color);
  }
  &.active .icon, & :hover .icon {
    filter: var(--primary-filter);
  } 
}
.slidebar-list li:not(:last-child) {
  border-bottom: 1px solid var(--pale-color);
}
</style>