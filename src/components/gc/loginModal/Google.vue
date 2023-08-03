<template>
  <GoogleLogin :callback="callback" popup-type="TOKEN" class="w-100">
    <button type="button" class="btn text-second fw-bold rounded-pill shadow position-relative">
      <img src="../../../assets/images/icons/google.png" alt="google" width="28" class="position-absolute">
      <p class="my-2">使用 GOOGLE 帳號</p>
    </button>
  </GoogleLogin>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import Swal from "sweetalert2";
export default {
  computed: {
    ...mapGetters('user', ['getLoginData']),
  },
  methods: {
    //取出登入狀態
    ...mapActions('user', ['fetchMemberData', 'updateLoginStatus', 'updateLoginData', 'cleanMemberData']),
    //google取得token
    callback(response) {
      //使用取得的accesstoken再打一次google api取得google id
      const accessToken = response.access_token;
      this.axios.get('https://www.googleapis.com/oauth2/v1/userinfo', {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      })
        .then(response => {
          const googleId = response.data.id;
          this.googleLogin(googleId);
        })
        .catch(error => {
          console.error(error);
        });
    },
    googleLogin(googleId) {
      const apiUrl = `${process.env.VUE_APP_PATH}/user/login`;
      const requestData = {
        platform_id: googleId,
        method: "Google"
      };
      this.axios.post(apiUrl, requestData)
        .then(res => {
          if (res.data.status_code === 'SYSTEM_1000') {
            Swal.fire({
              icon: 'success',
              title: '登入成功！',
              showConfirmButton: false,
              timer: 1500,
            });
            const loginData = res.data;
            this.updateLoginData(loginData);
            this.$emit('after-login');
          }
          if (res.data.status_code === 'USER_2013') {
            Swal.fire({
              icon: 'error',
              title: '該用戶未綁定',
              showConfirmButton: true,
              confirmButtonText: '立即註冊',
              showCancelButton: true,
              cancelButtonText: '先不註冊',
            }).then((result) => {
              if (result.isConfirmed) {
                this.$emit('switch-pages','loginBoard','platformRegister');
                localStorage.setItem('googleID', googleId)
                localStorage.setItem('platform', 'Google')
              }
            })
          }
          if (res.data.status_code === 'SYSTEM_1001') {
            Swal.fire({
              icon: 'error',
              title: '資料不完整',
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    },
  },
}
</script>
