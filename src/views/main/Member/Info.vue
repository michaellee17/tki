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
        <li v-if="googleBinding === false">
          <GoogleLogin :callback="callback" popup-type="TOKEN">
            <img src="../../../assets/images/icons/google.png" width="25" alt="google">
            <p class="mb-0 text-gray-800">尚未綁定</p>
          </GoogleLogin>
        </li>
        <li v-if="googleBinding === true">
          <GoogleLogin :callback="callback" popup-type="TOKEN">
            <img src="../../../assets/images/icons/google.png" width="25" alt="google">
            <p class="mb-0 text-gray-800">解除綁定</p>
          </GoogleLogin>
        </li>
        <li v-if="lineBinding === false"  @click="lineVertify">
          <img src="../../../assets/images/icons/line.png" width="26" alt="google">
          <p class="mb-0 text-gray-800">尚未綁定</p>
        </li>
        <li v-if="lineBinding === true" @click="lineVertify">
          <img src="../../../assets/images/icons/line.png" width="26" alt="google">
          <p class="mb-0 text-gray-800">解除綁定</p>
        </li>
        <li v-if="appleBinding === false">
          <img src="../../../assets/images/icons/apple.png" width="25" alt="google">
          <p class="mb-0 text-gray-800">尚未綁定</p>
        </li>
        <li v-if="appleBinding === true">
          <img src="../../../assets/images/icons/apple.png" width="25" alt="google">
          <p class="mb-0 text-gray-800">解除綁定</p>
        </li>
      </ul>
    </li>
  </ul>
</template>
<script>
import { mapGetters  } from 'vuex';
import Swal from "sweetalert2";
export default {
  data () {
    return {
      // showMobileMenu: false,
    }
  },
  computed:{
    ...mapGetters('user',['getMemberData','getLoginData','getMemberBinding']), 
    memberData(){
      return this.getMemberData.data;
    },
    googleBinding(){
      return this.getMemberBinding[0]
    },
    lineBinding(){
      return this.getMemberBinding[1]
    },
    appleBinding(){
      return this.getMemberBinding[2]
    },
  },
  mounted(){
  },
  methods:{
    lineVertify(){
      const router = this.$router;
      const routePath = '/line-login'; // 替換為您的路徑
      const fullPath = router.resolve(routePath).href;
      const windowFeatures = 'width=500,height=600';
      const newWindow = window.open(fullPath,'line登入',windowFeatures);
      this.startListeningForLineId(newWindow);
    },
    //監聽回傳的lineid若有值的時候幫他登入
    startListeningForLineId(newWindow) {
    const lineIdPolling = setInterval(() => {
      if (newWindow.closed) {
        clearInterval(lineIdPolling);
        const lineUserId = localStorage.getItem('lineUserId');
        if (lineUserId) {
          const apiUrl = `${process.env.VUE_APP_PATH}/user/binding_platform`;
          const requestData = {
            platform_id: lineUserId,
            method: "Line"
          };
        const accessToken = this.getLoginData.access_token
        this.axios.post(apiUrl, requestData,{
          headers: {
          'Authorization': `Bearer ${accessToken}`
          }
        })
          .then(res => { 
            if (res.data.status_code === 'SYSTEM_1000') {
              Swal.fire({
                icon: 'success',
                title: '綁定成功！',
              });
            }
            if (res.data.status_code === 'SYSTEM_1001') {
              Swal.fire({
                icon: 'error',
                title: '資料不完整',
              });
              localStorage.removeItem('lineUserId');
            }
          });
          }
        }
      }, 1000);
    },
    //google取得token
    callback(response){
      //使用取得的accesstoken再打一次google api取得google id
      const accessToken = response.access_token;
      this.axios.get('https://www.googleapis.com/oauth2/v1/userinfo', {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      })
      .then(response => {
        const googleId = response.data.id;
        this.googleBinding(googleId);
      })
      .catch(error => {
        console.error(error);
      });
    },
    //google綁定
    googleBinding(googleId){
      const apiUrl = `${process.env.VUE_APP_PATH}/user/binding_platform`;
      const requestData = {
        platform_id: googleId,
        method: "Google"
      };
      const accessToken = this.getLoginData.access_token
      this.axios.post(apiUrl, requestData,{
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      })
        .then(res => { 
          if (res.data.status_code === 'SYSTEM_1000') {
            Swal.fire({
              icon: 'success',
              title: '綁定成功！',
            });
          }
          if (res.data.status_code === 'SYSTEM_1001') {
            Swal.fire({
              icon: 'error',
              title: '資料不完整',
            });
          }
        });
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