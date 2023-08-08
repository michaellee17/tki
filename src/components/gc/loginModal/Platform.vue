<template>
  <div ref="platformRegister">
    <div class="modal-body text-second pb-5">
      <div class="text-center mb-5">
        <h1 class="modal-title fs-2 text-primary">{{ title }} 註冊</h1>
      </div>
      <form>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
        <div class="mb-35 row justify-content-center align-items-center position-relative">
          <input
            id="name" ref="platformName" v-model="platformName" type="text"
            class="form-control pe-5"
            placeholder="請輸入姓名"
            aria-describedby="name" required>
          <div class="position-absolute icon">
            <font-awesome-icon :icon="['fas', 'user']" />
          </div>
        </div>
        <div v-show="!isplatformOTPVertify" class="mb-3 row justify-content-center align-items-center position-relative">
          <input
            id="tel" ref="platformPhone" v-model="platformPhone" type="tel"
            class="form-control pe-5"
            placeholder="請輸入手機號碼，例如：0912345678"
            aria-describedby="tel" minlength="10" required>
          <div class="position-absolute icon">
            <font-awesome-icon :icon="['fas', 'phone-alt']" />
          </div>
        </div>
        <div v-if="!isplatformOTPVertify" class="mb-3 row justify-content-center align-items-center">
          <button
            v-if="!isplatformOTPSend" class="btn btn-primary link-light w-100 py-2" type="button"
            @click="platformSendOTP">
            發送驗證碼
          </button>
          <button v-if="isplatformOTPSend" class="btn btn-primary link-light w-100" disabled>
            有效時間:{{ remainingTime
            }}(秒)
          </button>
        </div>
        <div v-if="isplatformOTPSend && !isplatformOTPVertify" class="mb-35 justify-content-between row  align-items-center">
          <div class="col-7 px-0">
            <input
              id="code" ref="platformOTP" v-model="platformOTP" type="text"
              class="form-control"
              placeholder="請輸入驗證碼"
              aria-describedby="code" required>
          </div>
          <button type="button" class="col-4 btn btn-primary link-light py-2" @click="platformVertifyOTP">驗證</button>
        </div>
        <div v-show="isplatformOTPVertify" class="mb-3 row justify-content-center align-items-center position-relative">
          <input
            id="password" ref="platformPsw1" v-model="platformPsw1" type="password"
            class="form-control pe-5"
            placeholder="請輸入密碼，包含英數，至少8碼"
            aria-describedby="password" minlength="8" required>
          <div class="position-absolute icon">
            <font-awesome-icon :icon="['fas', 'lock']" />
          </div>
        </div>
        <div v-show="isplatformOTPVertify" class="mb-4 row justify-content-center align-items-center position-relative">
          <input
            id="passwordCmf" v-model="platformPsw2" type="password" class="form-control pe-5"
            placeholder="請再次輸入密碼"
            aria-describedby="passwordCmf" minlength="8" required>
          <div class="position-absolute icon">
            <font-awesome-icon :icon="['fas', 'lock']" />
          </div>
        </div>
        <button v-if="isplatformOTPVertify" type="button" class="btn btn-primary link-light w-100 py-2 mb-3" @click="sendPlatform">送出</button>
        <div class="text-center">
          <a class="text-decoration-none link-info" @click.prevent="changePage">回上一步</a>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
export default{
  props: {
    open: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      errorMessage:'',
      title:localStorage.getItem('platform'),
      remainingTime:300,
      isplatformOTPSend: false,
      isplatformOTPVertify: false,
      platformName: '',
      platformPhone: '',
      platformOTP: '',
      platformPsw1: '',
      platformPsw2: '',
    }
  },
  computed: {
    ...mapGetters('user', ['getLoginData']),
  },
  beforeUnmount() {
    this.enterKeyupDestroyed();
  },
  mounted(){
    this.enterKeyup();
    this.$refs.platformName.focus()
  },
  methods: {
    //取出登入狀態
    ...mapActions('user', ['fetchMemberData', 'updateLoginStatus', 'updateLoginData', 'cleanMemberData']),
    changePage(){
      localStorage.removeItem('platform')
      localStorage.removeItem('googleID')
      localStorage.removeItem('appleID')
      localStorage.removeItem('lineUserId')
      this.$emit('platform-hide');
    },
     //解綁
    enterKeyupDestroyed() {
      document.removeEventListener("keyup", this.enterKey);
    },
     //表單enter事件綁定
    enterKeyup() {
      document.addEventListener("keyup", this.enterKey);
    },
    //表單enter送出事件
    enterKey(event) {
      if (event.key === 'Enter' && this.open) {
        if (this.isplatformOTPSend === false) {
          this.platformSendOTP()
        }
        if (this.isplatformOTPSend === true && this.isplatformOTPVertify === false) {
          this.platformVertifyOTP()
        }
        if (this.isplatformOTPVertify === true) {
          this.sendPlatform()
        }
      }
    },
    startCountdown() {
      this.remainingTime = 300;
      const intervalId = setInterval(() => {
        this.remainingTime--;
        if (this.remainingTime <= 0) {
          clearInterval(intervalId);
          this.isplatformOTPSend = false
        }
      }, 1000); // 更新剩餘時間間隔設為每秒
    },
    
    //第三方註冊
    sendPlatform() {
      if (!this.platformName) {
        this.errorMessage = '姓名不得為空'
        this.$refs.platformName.focus();
        return;
      }
      if (!this.platformPhone) {
        this.errorMessage = '手機號碼不得為空'
        this.$refs.platformPhone.focus()
        return; 
      }
      const nameRegex = /^[a-zA-Z\s\u4E00-\u9FFF]+$/;
      if (!nameRegex.test(this.platformName)) {
        this.errorMessage = '姓名格式不符合要求'
        this.$refs.platformName.focus();
        return;
      }
      // 驗證手機號碼格式
      const phoneRegex = /^[0-9]{10}$/;
      if (!phoneRegex.test(this.platformPhone)) {
        this.errorMessage = '手機號碼格式不正確'
        this.$refs.platformPhone.focus()
        return; 
      }
      const passwordRegex = /^[A-Za-z0-9@#_-]{8,255}$/;
      if (!passwordRegex.test(this.platformPsw1)) {
        this.errorMessage = '密碼格式不符合要求'
        this.$refs.platformPsw1.focus()
        return;
      }
      if (this.isplatformOTPVertify === false) {
        this.errorMessage = '請先完成手機驗證'
        this.$refs.platformOTP.focus()
        return;
      }
      if (this.platformPsw1 !== this.platformPsw2) {
        this.errorMessage = '兩次輸入的密碼不同'
        this.$refs.platformPsw1.focus()
        return;
      }
      const apiUrl = `${process.env.VUE_APP_PATH}/user/register`;
      // 從localStorage中獲取platform_id
      const platform = localStorage.getItem('platform');
      let platform_id, method
      method = platform;
      // 使用switch語句根據platform_id的不同值進行處理
      switch (platform) {
        case 'Google':
          // Google平台的處理代碼
          platform_id = localStorage.getItem('googleID');
          break;
        case 'Line':
          // Line平台的處理代碼
          platform_id = localStorage.getItem('lineUserId');
          break;
        case 'Apple':
          // Apple平台的處理代碼
          platform_id = localStorage.getItem('appleID');
          break;
        default:
          break;
      }
      const requestData = {
        full_name: this.platformName,
        account: this.platformPhone,
        password: this.platformPsw1,
        method: method,
        platform_id: platform_id,
      };
      this.axios.post(apiUrl, requestData)
        .then(res => {
          if (res.data.status_code === 'SYSTEM_1000') {
            this.errorMessage = ''
            const loginData = res.data;
            this.updateLoginData(loginData);
            this.$emit('after-platform')
            localStorage.removeItem('platform')
            switch (platform) {
              case 'Google':
                localStorage.removeItem('googleID')
                break;
              case 'Line':
                localStorage.removeItem('lineUserId')
                break;
              case 'Apple':
                localStorage.removeItem('appleID')
                break;
              default:
                break;
            }
          }
          if (res.data.status_code === 'SYSTEM_1001') {
            this.errorMessage = '資料格式錯誤'
            this.$refs.platformName.focus()
          }
          if (res.data.status_code === 'USER_2021') {
            this.errorMessage = '帳號格式錯誤'
            this.$refs.platformPhone.focus()
          }
          if (res.data.status_code === 'USER_2022') {
            this.errorMessage = '密碼格式錯誤'
            this.$refs.platformPsw1.focus()
          }
          if (res.data.status_code === 'USER_2023') {
            this.errorMessage = '姓名格式錯誤'
            this.$refs.platformName.focus()
          }
          if (res.data.status_code === 'USER_2041') {
            this.errorMessage = '帳號已存在'
            this.$refs.platformPsw1.focus()
          }
          if (res.data.status_code === 'USER_2082' || res.data.status_code === 'USER_2081') {
            this.errorMessage = 'OPT驗證失敗'
            this.$refs.platformPsw1.focus()
          }
        });
    },

    //第三方註冊驗證otp
    platformVertifyOTP() {
      if (!this.platformOTP) {
        this.errorMessage = '驗證碼不得為空'
        this.$refs.platformOTP.focus()
        return;
      }
      const apiUrl = `${process.env.VUE_APP_PATH}/user/verifyotp`;
      const requestData = {
        phone: this.platformPhone,
        otp: this.platformOTP,
      };
      this.axios.post(apiUrl, requestData)
        .then(res => {
          if (res.data.status_code === 'SYSTEM_1000') {
            this.errorMessage = ''
            this.isplatformOTPVertify = true
            this.$refs.platformPsw1.focus()
          }
          if (res.data.status_code === 'SYSTEM_1001' || res.data.status_code === 'SYSTEM_2092') {
            this.errorMessage = '驗證碼錯誤'
            this.$refs.platformOTP.focus()
          }
          if (res.data.status_code === 'SYSTEM_2093') {
            this.errorMessage = '驗證碼錯誤超過五次，驗證失敗'
            this.$refs.platformOTP.focus()
          }
        });
    },
    //第三方註冊送出otp
    platformSendOTP() {
      if (!this.platformPhone) {
        this.errorMessage = '手機號碼不得為空'
        this.$refs.platformPhone.focus()
        return;
      }
      // 驗證手機號碼格式
      const phoneRegex = /^[0-9]{10}$/; // 假設要求手機號碼為10位數字
      if (!phoneRegex.test(this.platformPhone)) {
        this.errorMessage = '手機號碼格式不正確'
        this.$refs.platformPhone.focus()
        return;
      }
      const apiUrl = `${process.env.VUE_APP_PATH}/user/sendotp`;
      const requestData = {
        phone: this.platformPhone,
        method: "register"
      };
      this.axios.post(apiUrl, requestData)
        .then(res => {
          if (res.data.status_code === 'SYSTEM_1000') {
            this.isplatformOTPSend = true;
            this.errorMessage = ''
            this.startCountdown();
          }
          if (res.data.status_code === 'SYSTEM_1001' || res.data.status_code === 'USER_2094') {
            this.errorMessage = '手機號碼格式不正確'
            this.$refs.platformPhone.focus()
          }
          if (res.data.status_code === 'SYSTEM_1002' || res.data.status_code === 'USER_2091') {
            this.errorMessage = '請求過於頻繁，請5分鐘後再試'
            this.$refs.platformPhone.focus()
          }
          if (res.data.status_code === 'USER_2041') {
            this.errorMessage = '手機已註冊過'
            this.$refs.platformPhone.focus()
          }
          if (res.data.status_code === 'USER_2099') {
            this.errorMessage = 'OTP服務異常'
            this.$refs.platformPhone.focus()
          }
        });
    },
  },
}
</script>