<template>
  <h3 class="text-primary mb-4">會員資訊</h3>
  <ul class="row flex-column">
    <li class="col-md-10 col-lg-6 py-3 px-4 mb-3 bg-primary-light rounded">
      <p class="fs-18">姓名</p>
      <p class="mb-0 text-gray-800">{{ memberData.full_name }}</p>
    </li>
    <li class="col-md-10 col-lg-6 py-3 px-4 mb-3 bg-primary-light rounded">
      <p class="fs-18">手機驗證</p>
      <div class="d-flex justify-content-between text-secondary">
        <p>{{ memberData.account }}</p>
        <p>已驗證</p>
      </div>
    </li>
    <li class="col-md-10 col-lg-6 py-3 px-4 mb-3 bg-primary-light rounded">
      <div class="d-flex justify-content-between">
        <p class="fs-18">電子信箱</p>
        <a class="text-primary edit">編輯</a>
      </div>
      <input class="mb-0 text-gray-800" :value="memberData.email">
    </li>
    <li class="col-md-10 col-lg-6 py-3 px-4 mb-3 bg-primary-light rounded">
      <p class="fs-18">社群綁定</p>
      <ul class="text-center d-flex justify-content-between px-0">
        <li>
          <img src="../../../assets/images/icons/google.png" width="25" alt="google">
          <p class="mb-0 text-gray-800">尚未綁定</p>
        </li>
        <li>
          <img src="../../../assets/images/icons/line.png" width="26" alt="google">
          <p class="mb-0 text-gray-800">尚未綁定</p>
        </li>
        <li>
          <img src="../../../assets/images/icons/apple.png" width="25" alt="google">
          <p class="mb-0 text-gray-800">尚未綁定</p>
        </li>
      </ul>
    </li>
  </ul>
</template>
<script>
import { mapGetters  } from 'vuex';
export default {
  data () {
    return {
      // showMobileMenu: false,
    }
  },
  computed:{
    ...mapGetters('user',['getMemberData']), 
    memberData(){
      return this.getMemberData.data;
    },
  },
}
</script>
<style scoped>
input {
  border: 1px solid var(--primary-color);
  background-color: transparent;
}
.edit {
  font-size: 14px;
}
</style>