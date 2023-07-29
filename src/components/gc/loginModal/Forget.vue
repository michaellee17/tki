<template>
<div id="forgetPwdPage" ref="forgetPwdPage">
    <div class="modal-body text-second pb-5">
      <div class="text-center mb-5">
        <h1 class="modal-title fs-2 text-primary">忘記密碼</h1>
      </div>
      <form>
        <div v-show="!isForgetOTPVertify">
          <h5 class="mb-3">請先驗證您的手機號碼</h5>
          <div class="mb-2 row justify-content-center align-items-center">
            <label for="forgetTel" class="col-3 form-label  text-nowrap">手機號碼</label>
            <div class="col-9">
              <input
                id="forgetTel" v-model="forgetPhone" type="tel" class="form-control"
                placeholder="0912345678"
                aria-describedby="tel" minlength="10" required>
            </div>
          </div>
          <div class="mb-2 row justify-content-center align-items-center">
            <p class="col-3" />
            <div class="col-9">
              <button v-if="!isForgetOTPSend && !isForgetOTPVertify" type="button" class="btn btn-info link-light w-100" @click="forgetOTP">發送驗證碼</button>
              <button v-if="isForgetOTPSend && !isForgetOTPVertify" class="btn btn-info link-light w-100" disabled>有效時間:{{ remainingTime }}(秒)</button>
            </div>
          </div>
          <div v-if="isForgetOTPSend && !isForgetOTPVertify" class="mb-5 row justify-content-center align-items-center">
            <label for="forgetCode" class="col-3 form-label" />
            <div class="col-9 d-flex align-items-center gap-2">
              <input
                id="forgetCode" v-model="forgetCode" type="text" class="form-control"
                placeholder="輸入驗證碼"
                aria-describedby="code" required>
              <button type="button" class="btn btn-info link-light w-50" @click="forgetVertifyOTP">驗證</button>
            </div>
          </div>
        </div>
        <div v-show="isForgetOTPVertify">
          <h5 class="mb-3">重新設定密碼</h5>
          <div class="mb-3 row justify-content-center align-items-center">
            <label for="forgetPassword" class="col-3 form-label text-nowrap">密碼</label>
            <div class="col-9">
              <input
                id="forgetPassword" v-model="forgetPsw1" type="password" class="form-control"
                placeholder="需包含英數，至少8碼" aria-describedby="password" minlength="8" required>
            </div>
          </div>
          <div class="mb-4 row justify-content-center align-items-center">
            <label for="forgetPasswordCmf" class="col-3 form-label text-nowrap">確認密碼</label>
            <div class="col-9">
              <input
                id="orgetPasswordCmf" v-model="forgetPsw2" type="password" class="form-control"
                placeholder="再次輸入密碼" aria-describedby="passwordCmf" minlength="8" required>
            </div>
          </div>
         
          <button type="button" class="btn btn-primary link-light w-100 py-2" @click="resetPsw">送出</button>
        </div>
        <div class="text-end mb-2 d-flex">
            <a
              class="text-decoration-none link-secondary" @click="changePage"
              >回上一步</a>
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
      remainingTime:300,
      forgetPhone: '',
      forgetCode: '',
      forgetPsw1: '',
      forgetPsw2: '',
      isForgetOTPSend: false,
      isForgetOTPVertify: false,
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
  enterKeyup() {
      document.addEventListener("keyup", this.enterKey);
    },
  //表單enter送出事件
  enterKey(event) {
    if (this.open && event.key === 'Enter') {
        if(this.isForgetOTPSend === false){
          this.forgetOTP()
        }
        if(this.isForgetOTPSend === true && this.isForgetOTPVertify === false){
          this.forgetVertifyOTP()
        }
        if(this.isForgetOTPVertify === true){
          this.resetPsw()
        }
      } 
  },
  enterKeyupDestroyed() {
    document.removeEventListener("keyup", this.enterKey);
  },
  changePage(){
      this.$emit('forget-hide');
  },
   //重設密碼
   resetPsw() {
      if (this.forgetPsw1 !== this.forgetPsw2) {
        Swal.fire({
          icon: 'error',
          title: '兩次輸入的密碼不同',
          showConfirmButton: false,
          timer: 1500,
        });
        return;
      }
      const passwordRegex = /^[A-Za-z0-9@#_-]{8,255}$/;
      if (!passwordRegex.test(this.forgetPsw1)) {
        Swal.fire({
          icon: 'error',
          title: '密碼格式不符合要求',
          showConfirmButton: false,
          timer: 1500,
        });
        return;
      }
      const apiUrl = `${process.env.VUE_APP_PATH}/user/forget_password`;
      const requestData = {
        account: this.forgetPhone,
        password: this.forgetPsw1,
      };
      this.axios.post(apiUrl, requestData)
        .then(res => {
          if (res.data.status_code === 'SYSTEM_1000') {
            Swal.fire({
              icon: 'success',
              title: '設定新密碼成功',
              showConfirmButton: false,
              timer: 1500,
            })
            this.forgetCode = '';
            this.forgetPhone = '';
            this.forgetPsw1 = '';
            this.forgetPsw2 = '';
            this.$emit('after-forget')
          }
          if (res.data.status_code === 'SYSTEM_100') {
            Swal.fire({
              icon: 'error',
              title: '資料不齊全',
              showConfirmButton: false,
              timer: 1500,
            })
          }
          if (res.data.status_code === 'USER_2043') {
            Swal.fire({
              icon: 'error',
              title: '用戶不存在',
              showConfirmButton: false,
              timer: 1500,
            })
          }
        });
    },
    //忘記密碼驗證otp
    forgetVertifyOTP() {
      const apiUrl = `${process.env.VUE_APP_PATH}/user/verifyotp`;
      const requestData = {
        phone: this.forgetPhone,
        otp: this.forgetCode
      };
      this.axios.post(apiUrl, requestData)
        .then(res => {
          if (res.data.status_code === 'SYSTEM_1000') {
            this.isForgetOTPVertify = true;
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
          if (res.data.status_code === 'USER_2091') {
            Swal.fire({
              icon: 'error',
              title: '發送簡訊次數過於頻繁',
              showConfirmButton: false,
              timer: 1500,
            });
          }
          if (res.data.status_code === 'USER_2099') {
            Swal.fire({
              icon: 'error',
              title: 'OPT服務異常',
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });

    },
    //忘記密碼發送otp
    forgetOTP() {
      const phoneRegex = /^[0-9]{10}$/; // 假設要求手機號碼為10位數字
      if (!phoneRegex.test(this.forgetPhone)) {
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
        phone: this.forgetPhone,
        method: "forget"
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
            this.isForgetOTPSend = true;
            this.startCountdown();
          }
          if (res.data.status_code === 'SYSTEM_1001' || res.data.status_code === 'SYSTEM_2094') {
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
          if (res.data.status_code === 'USER_2043') {
            Swal.fire({
              icon: 'error',
              title: '用戶不存在',
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
    startCountdown(){
      this.remainingTime = 300;
      const intervalId = setInterval(() => {
      this.remainingTime--;
        if (this.remainingTime <= 0) {
          clearInterval(intervalId);
        }
      }, 1000); // 更新剩餘時間間隔設為每秒
    },
 },

}
</script>