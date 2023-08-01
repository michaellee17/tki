<template>
  <!-- 會員註冊 -->
  <div ref="memberInfoPage">
    <div class="modal-body text-second pb-5">
      <div class="text-center mb-5">
        <h1 class="modal-title fs-2 text-primary">註冊會員</h1>
      </div>
      <form>
        <div class="mb-3 row justify-content-center align-items-center">
          <label for="name" class="col-3 form-label  text-nowrap mr-2">會員姓名</label>
          <div class="col-9">
            <input
              id="name" v-model="registerName" type="text" class="form-control"
              placeholder="輸入姓名"
              aria-describedby="name" required>
          </div>
        </div>
        <div v-show="!isRegisterOTPVertify" class="mb-2 row justify-content-center align-items-center">
          <label for="tel" class="col-3 form-label  text-nowrap">手機號碼</label>
          <div class="col-9">
            <input
              id="tel" v-model="registerPhone" type="tel" class="form-control"
              placeholder="0912345678"
              aria-describedby="tel" minlength="10" required>
          </div>
        </div>
        <div v-if="!isRegisterOTPVertify" class="mb-2 row justify-content-center align-items-center">
          <p class="col-3" />
          <div class="col-9">
            <button
              v-if="!isRegisterOTPSend" class="btn btn-info link-light w-100" type="button"
              @click="sendOTP">
              發送驗證碼
            </button>
            <button v-if="isRegisterOTPSend" class="btn btn-info link-light w-100" disabled>
              有效時間:{{ remainingTime
              }}(秒)
            </button>
          </div>
        </div>
        <div v-if="isRegisterOTPSend && !isRegisterOTPVertify" class="mb-3 row justify-content-center align-items-center">
          <label for="code" class="col-3 form-label" />
          <div class="col-9 d-flex align-items-center gap-2">
            <input
              id="code" v-model="registerOTP" type="text" class="form-control"
              placeholder="輸入驗證碼"
              aria-describedby="code" required>
            <button type="button" class="btn btn-info link-light w-50" @click="vertifyOTP">驗證</button>
          </div>
        </div>
        <div v-if="isRegisterOTPVertify" class="mb-3 row justify-content-center align-items-center">
          <label for="password" class="col-3 form-label text-nowrap">密碼</label>
          <div class="col-9">
            <input
              id="password" v-model="registerPsw1" type="password" class="form-control"
              placeholder="需包含英數，至少8碼"
              aria-describedby="password" minlength="8" required>
          </div>
        </div>
        <div v-if="isRegisterOTPVertify" class="mb-4 row justify-content-center align-items-center">
          <label for="passwordCmf" class="col-3 form-label text-nowrap">確認密碼</label>
          <div class="col-9">
            <input
              id="passwordCmf" v-model="registerPsw2" type="password" class="form-control"
              placeholder="再次輸入密碼"
              aria-describedby="passwordCmf" minlength="8" required>
          </div>
        </div>
        <div class="text-end mb-2 d-flex">
          <a class="text-decoration-none link-secondary" @click="changePage">回上一步</a>
        </div>
        <button v-if="isRegisterOTPVertify" type="button" class="btn btn-primary link-light w-100 py-2" @click="sendRegister">送出</button>
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
          }
          if(this.isRegisterOTPSend === true && this.isRegisterOTPVertify === false){
            this.vertifyOTP()
          }
          if(this.isRegisterOTPVertify === true){
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
        }
      }, 1000); // 更新剩餘時間間隔設為每秒
    },
    //註冊
    sendRegister() {
      const nameRegex = /^[a-zA-Z\s\u4E00-\u9FFF]+$/; // 只能包含中文、英文和空格
      if (!nameRegex.test(this.registerName)) {
        Swal.fire({
          icon: 'error',
          title: '姓名格式不符合要求',
          text: '請輸入有效的姓名，只能包含中文、英文和空格',
          showConfirmButton: false,
          timer: 1500,
        });
        return;
      }
      // 驗證手機號碼格式
      const phoneRegex = /^[0-9]{10}$/; // 假設要求手機號碼為10位數字
      if (!phoneRegex.test(this.registerPhone)) {
        Swal.fire({
          icon: 'error',
          title: '手機號碼格式不正確',
          text: '請輸入有效的手機號碼',
          showConfirmButton: false,
          timer: 1500,
        });
        return; // 停止繼續執行
      }
      const passwordRegex = /^[A-Za-z0-9@#_-]{8,255}$/;
      if (!passwordRegex.test(this.registerPsw1)) {
        Swal.fire({
          icon: 'error',
          title: '密碼格式不符合要求',
          showConfirmButton: false,
          timer: 1500,
        });
        return;
      }
      if (this.isRegisterOTPVertify === false) {
        Swal.fire({
          icon: 'error',
          title: '請先完成手機驗證',
          showConfirmButton: false,
          timer: 1500,
        });
        return;
      }
      if (this.registerPsw1 !== this.registerPsw2) {
        Swal.fire({
          icon: 'error',
          title: '兩次輸入的密碼不同',
          showConfirmButton: false,
          timer: 1500,
        });
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
            Swal.fire({
              icon: 'success',
              title: '註冊成功',
              showConfirmButton: false,
              timer: 1500,
            })
            const loginData = res.data;
            this.updateLoginData(loginData);
            this.$emit('after-login');
            this.registerName = '';
            this.registerPhone = '';
            this.registerPsw1 = '';
            this.registerPsw2 = '';
            this.registerOTP = '';
            this.isRegisterOTPSend = false;
            this.isRegisterOTPVertify = false;
          }
          if (res.data.status_code === 'SYSTEM_1001') {
            Swal.fire({
              icon: 'error',
              title: '資料格式錯誤',
              showConfirmButton: false,
              timer: 1500,
            });
          }
          if (res.data.status_code === 'USER_2021') {
            Swal.fire({
              icon: 'error',
              title: '帳號格式錯誤',
              showConfirmButton: false,
              timer: 1500,
            });
          }
          if (res.data.status_code === 'USER_2022') {
            Swal.fire({
              icon: 'error',
              title: '密碼格式錯誤',
              showConfirmButton: false,
              timer: 1500,
            });
          }
          if (res.data.status_code === 'USER_2023') {
            Swal.fire({
              icon: 'error',
              title: '姓名格式錯誤',
              showConfirmButton: false,
              timer: 1500,
            });
          }
          if (res.data.status_code === 'USER_2041') {
            Swal.fire({
              icon: 'error',
              title: '帳號已存在',
              showConfirmButton: false,
              timer: 1500,
            });
          }
          if (res.data.status_code === 'USER_2082' || res.data.status_code === 'USER_2081') {
            Swal.fire({
              icon: 'error',
              title: 'OPT驗證失敗',
              showConfirmButton: false,
              timer: 1500,
            });
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
            this.isRegisterOTPVertify = true
            Swal.fire({
              icon: 'success',
              title: '驗證成功',
              showConfirmButton: false,
              timer: 1500,
            })
          }
          if (res.data.status_code === 'SYSTEM_1001' || res.data.status_code === 'SYSTEM_2092') {
            Swal.fire({
              icon: 'error',
              title: '驗證碼錯誤',
              showConfirmButton: false,
              timer: 1500,
            });
          }
          if (res.data.status_code === 'SYSTEM_2093') {
            Swal.fire({
              icon: 'error',
              title: '驗證碼錯誤超過五次，驗證失敗',
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    },
     //註冊送出otp
     sendOTP() {
      // 驗證手機號碼格式
      const phoneRegex = /^[0-9]{10}$/; 
      if (!phoneRegex.test(this.registerPhone)) {
        Swal.fire({
          icon: 'error',
          title: '手機號碼格式不正確',
          text: '請輸入有效的手機號碼',
          showConfirmButton: false,
          timer: 1500,
        });
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
            Swal.fire({
              icon: 'success',
              title: '發送簡訊驗證碼成功！',
              showConfirmButton: false,
              timer: 1500,
            });
            this.isRegisterOTPSend = true;
            this.startCountdown();
          }
          if (res.data.status_code === 'SYSTEM_1001' || res.data.status_code === 'USER_2094') {
            Swal.fire({
              icon: 'error',
              title: '手機號碼格式不正確',
              text: '請輸入有效的手機號碼',
              showConfirmButton: false,
              timer: 1500,
            });
          }
          if (res.data.status_code === 'SYSTEM_1002' || res.data.status_code === 'USER_2091') {
            Swal.fire({
              icon: 'error',
              title: '請求過於頻繁',
              text: '請稍後再嘗試',
              showConfirmButton: false,
              timer: 1500,
            });
          }
          if (res.data.status_code === 'USER_2041') {
            Swal.fire({
              icon: 'error',
              title: '手機已註冊過',
              showConfirmButton: false,
              timer: 1500,
            });
          }
          if (res.data.status_code === 'USER_2099') {
            Swal.fire({
              icon: 'error',
              title: 'OTP服務異常',
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    },
  },
}
</script>
<style scoped lang="scss">
</style>