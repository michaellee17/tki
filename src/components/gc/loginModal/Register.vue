<template>
  <!-- 會員註冊 -->
  <div ref="memberInfoPage">
    <div class="modal-body text-second pb-5">
      <div class="text-center mb-4">
        <h1 class="modal-title fs-2 text-primary">註冊會員</h1>
      </div>
      <form>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
        <div class="mb-35 row justify-content-center align-items-center position-relative">
          <input
            id="name" ref="registerName" v-model="registerName" type="text"
            class="form-control pe-5"
            placeholder="請輸入姓名"
            aria-describedby="name" required>
          <div class="position-absolute icon">
            <font-awesome-icon :icon="['fas', 'user']" />
          </div>
        </div>
        <div v-show="!isRegisterOTPVertify" class="mb-3 row justify-content-center align-items-center position-relative">
          <input
            id="tel" ref="registerPhone" v-model="registerPhone" type="tel"
            class="form-control pe-5"
            placeholder="請輸入手機號碼，例如：0912345678"
            aria-describedby="tel" minlength="10" required>
          <div class="position-absolute icon">
            <font-awesome-icon :icon="['fas', 'phone-alt']" />
          </div>
        </div>
        <div v-if="!isRegisterOTPVertify" class="mb-3 row justify-content-center align-items-center">
          <button
            v-if="!isRegisterOTPSend" class="btn btn-primary link-light w-100 py-2" type="button"
            @click="sendOTP">
            發送驗證碼
          </button>
          <button v-if="isRegisterOTPSend" class="btn btn-primary link-light w-100" disabled>
            有效時間:{{ remainingTime
            }}(秒)
          </button>
        </div>
        <div v-if="isRegisterOTPSend && !isRegisterOTPVertify" class="mb-4 justify-content-between row  align-items-center">
          <div class="col-7 px-0">
            <input
              id="code" ref="registerOTP" v-model="registerOTP" type="text"
              class="form-control"
              placeholder="請輸入驗證碼"
              aria-describedby="code" required>
          </div>
          <button type="button" class="col-4 btn btn-primary link-light py-2" @click="vertifyOTP">驗證</button>
        </div>
        <div v-if="isRegisterOTPVertify" class="mb-35 row justify-content-center align-items-center position-relative">
          <input
            id="password" ref="registerPsw1" v-model="registerPsw1" type="password"
            class="form-control pe-5"
            placeholder="請輸入密碼，包含英數，至少8碼"
            aria-describedby="password" minlength="8" required>
          <div class="position-absolute icon">
            <font-awesome-icon :icon="['fas', 'lock']" />
          </div>
        </div>
       
        <div v-if="isRegisterOTPVertify" class="mb-4 row justify-content-center align-items-center position-relative">
          <input
            id="passwordCmf" v-model="registerPsw2" type="password" class="form-control pe-5"
            placeholder="請再次輸入密碼"
            aria-describedby="passwordCmf" minlength="8" required>
          <div class="position-absolute icon">
            <font-awesome-icon :icon="['fas', 'lock']" />
          </div>
        </div>
        <button v-if="isRegisterOTPVertify" type="button" class="btn btn-primary link-light w-100 py-2 mb-3" @click="sendRegister">送出</button>
        <div class="text-center">
          <a class="text-decoration-none link-info" @click.prevent="changePage">回上一步</a>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import Swal from "sweetalert2";
import { mapActions, mapGetters } from 'vuex';
export default{
  props: {
    open: {
      type: Boolean,
      required: true,
    },
  },
  data(){
    return{
      errorMessage:'',
      remainingTime:300,
      isRegisterOTPSend:false,
      isRegisterOTPVertify:false,
      registerName: '',
      registerPhone: '',
      registerOTP: '',
      registerPsw1: '',
      registerPsw2: '',
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
    this.$refs.registerName.focus()
  },
  methods:{
     //取出登入狀態
     ...mapActions('user', ['fetchMemberData', 'updateLoginStatus', 'updateLoginData', 'cleanMemberData']),
      //表單enter事件綁定
    enterKeyup() {
      document.addEventListener("keyup", this.enterKey);
    },
    //表單enter送出事件
    enterKey(event) {
      if (this.open && event.key === 'Enter') {
          if(this.isRegisterOTPSend === false){
            this.sendOTP()
          } else if(this.isRegisterOTPSend === true && this.isRegisterOTPVertify === false){
            this.vertifyOTP()
          } else if(this.isRegisterOTPVertify === true){
            this.sendRegister()
          }
        } 
    },
    enterKeyupDestroyed() {
      document.removeEventListener("keyup", this.enterKey);
    },
     changePage(){
      this.$emit('register-hide');
     },
    startCountdown(){
      this.remainingTime = 300;
      const intervalId = setInterval(() => {
      this.remainingTime--;
        if (this.remainingTime <= 0) {
          clearInterval(intervalId);
          this.isRegisterOTPSend = false;
        }
      }, 1000); // 更新剩餘時間間隔設為每秒
    },
    //註冊
    sendRegister() {
      const nameRegex = /^[a-zA-Z\s\u4E00-\u9FFF]+$/; // 只能包含中文、英文和空格
      if (!nameRegex.test(this.registerName)) {
        this.errorMessage = '姓名格式不符合要求'
        this.$refs.registerName.focus();
        return;
      }
      // 驗證手機號碼格式
      const phoneRegex = /^[0-9]{10}$/; // 假設要求手機號碼為10位數字
      if (!phoneRegex.test(this.registerPhone)) {
        this.errorMessage = '手機號碼格式不正確'
        this.$refs.registerPhone.focus()
        return; // 停止繼續執行
      }
      const passwordRegex = /^[A-Za-z0-9@#_-]{8,255}$/;
      if (!passwordRegex.test(this.registerPsw1)) {
        this.errorMessage = '密碼格式不符合要求'
        this.$refs.registerPsw1.focus()
        return;
      }
      if (this.isRegisterOTPVertify === false) {
        this.errorMessage = '請先完成手機驗證'
        this.$refs.registerOTP.focus()
        return;
      }
      if (this.registerPsw1 !== this.registerPsw2) {
        this.errorMessage = '兩次輸入的密碼不同'
        this.$refs.registerPsw1.focus()
        return;
      }
      const apiUrl = `${process.env.VUE_APP_PATH}/user/register`;
      const requestData = {
        full_name: this.registerName,
        account: this.registerPhone,
        password: this.registerPsw1,
      };
      this.axios.post(apiUrl, requestData)
        .then(res => {
          if (res.data.status_code === 'SYSTEM_1000') {
            this.isRegisterOTPSend = true
            // Swal.fire({
            //   icon: 'success',
            //   title: '註冊成功',
            //   showConfirmButton: false,
            //   timer: 1500,
            // })
            this.errorMessage = ''
            const loginData = res.data;
            this.updateLoginData(loginData);
            this.$emit('after-login');
          }
          if (res.data.status_code === 'SYSTEM_1001') {
            this.errorMessage = '資料格式錯誤'
            this.$refs.registerPsw1.focus()
          }
          if (res.data.status_code === 'USER_2021') {
            this.errorMessage = '帳號格式錯誤'
            this.$refs.registerPhone.focus();
          }
          if (res.data.status_code === 'USER_2022') {
            this.errorMessage = '密碼格式錯誤'
            this.$refs.registerPsw1.focus()
          }
          if (res.data.status_code === 'USER_2023') {
            this.errorMessage = '姓名格式錯誤'
            this.$refs.registerName.focus();
          }
          if (res.data.status_code === 'USER_2041') {
            this.errorMessage = '帳號已存在'
            this.$refs.registerPhone.focus();
          }
          if (res.data.status_code === 'USER_2082' || res.data.status_code === 'USER_2081') {
            this.errorMessage = 'OPT驗證失敗'
            this.$refs.registerPhone.focus();
          }
        });
    },
     //註冊驗證otp
     vertifyOTP() {
      const apiUrl = `${process.env.VUE_APP_PATH}/user/verifyotp`;
      const requestData = {
        phone: this.registerPhone,
        otp: this.registerOTP,
      };
      this.axios.post(apiUrl, requestData)
        .then(res => {
          if (res.data.status_code === 'SYSTEM_1000') {
            this.errorMessage = ''
            this.isRegisterOTPVertify = true
          }
          if (res.data.status_code === 'SYSTEM_1001' || res.data.status_code === 'SYSTEM_2092') {
            this.errorMessage = '驗證碼錯誤'
            this.$refs.registerOTP.focus()
          }
          if (res.data.status_code === 'SYSTEM_2093') {
            this.errorMessage = '驗證碼錯誤超過五次，驗證失敗'
            this.$refs.registerOTP.focus()
          }
        });
    },
     //註冊送出otp
     sendOTP() {
      // 驗證手機號碼格式
      const phoneRegex = /^[0-9]{10}$/; 
      if (!phoneRegex.test(this.registerPhone)) {
        this.errorMessage = '手機號碼格式不正確'
        this.$refs.registerPhone.focus()
        return; // 停止繼續執行
      }
      const apiUrl = `${process.env.VUE_APP_PATH}/user/sendotp`;
      const requestData = {
        phone: this.registerPhone,
        method: "register"
      };
      this.axios.post(apiUrl, requestData)
        .then(res => {
          if (res.data.status_code === 'SYSTEM_1000') {
            this.errorMessage = ''
            this.isRegisterOTPSend = true;
            this.startCountdown();
          }
          if (res.data.status_code === 'SYSTEM_1001' || res.data.status_code === 'USER_2094') {
            this.errorMessage = '手機號碼格式不正確'
            this.$refs.registerPhone.focus()
          }
          if (res.data.status_code === 'SYSTEM_1002' || res.data.status_code === 'USER_2091') {
            this.errorMessage = '請求過於頻繁'
            this.$refs.registerPhone.focus()
          }
          if (res.data.status_code === 'USER_2041') {
            this.errorMessage = '手機已註冊過'
            this.$refs.registerPhone.focus()
          }
          if (res.data.status_code === 'USER_2099') {
            this.errorMessage = 'OTP服務異常'
            this.$refs.registerPhone.focus()
          }
        });
    },
  },
}
</script>
<style>
.icon {
  width: 15px;
  right: 20px;
  color: #000;
}
</style>