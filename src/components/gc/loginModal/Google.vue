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
            const loginData = res.data;
            this.updateLoginData(loginData);
            this.$emit('after-login');
          }
          if (res.data.status_code === 'USER_2013') {
            this.$emit('show-platform')
            localStorage.setItem('googleID', googleId)
            localStorage.setItem('platform', 'Google')
          }
          if (res.data.status_code === 'SYSTEM_1001') {
            localStorage.removeItem('googleID');
            this.$emit('modal-close')
          }
        });
    },
  },
}
</script>
