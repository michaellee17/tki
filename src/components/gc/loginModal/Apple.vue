<template>
  <button type="button" class="btn text-second fw-bold rounded-pill shadow position-relative" @click="triggerApple">
    <img src="../../../assets/images/icons/apple.png" alt="apple" width="28" class="position-absolute">
    <p class="my-2">使用 APPLE 帳號</p>
  </button>
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
    //apple登入觸發跳窗
    triggerApple() {
      const router = this.$router;
      const routePath = '/apple-login';
      const fullPath = router.resolve(routePath).href;
      const windowWidth = 500;
      const windowHeight = 550;
      const windowLeft = window.screen.width - windowWidth;
      const windowTop = window.screen.height / 2 - windowHeight / 2;
      const windowFeatures = `width=${windowWidth},height=${windowHeight},left=${windowLeft},top=${windowTop}`;
      const appleWindow = window.open(fullPath, 'line登入', windowFeatures);
      this.startListeningForAppleID(appleWindow);
    },
    //當apple回傳id時觸發登入
    startListeningForAppleID(appleWindow) {
      const appleIDpulling = setInterval(() => {
        if (appleWindow.closed) {
          clearInterval(appleIDpulling);
          const appleID = localStorage.getItem('appleID');
          if (appleID) {
            const apiUrl = `${process.env.VUE_APP_PATH}/user/login`;
            const requestData = {
              platform_id: appleID,
              method: "Apple"
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
                  localStorage.removeItem('appleID');
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
                      localStorage.setItem('platform', 'Apple')
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
                  localStorage.removeItem('appleID');
                  this.$emit('modal-close')
                }
              });
          }
        }
      }, 1000);
    },
  },
}
</script>