<template>
  <div
    id="loginModal" ref="loginModal" class="modal fade" tabindex="-1"
    aria-labelledby="loginModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button
            ref="modalClose" type="button" class="btn-close" data-bs-dismiss="modal" 
            aria-label="Close" />
        </div>
        <!-- 登入 / 註冊首頁 -->
        <div id="loginBoard" ref="loginBoard">
          <div class="modal-body text-center text-second pb-5">
            <div class="d-flex justify-content-center gap-2 mb-4">
              <h1 id="loginModalLabel" class="modal-title fs-2">登入</h1>
              <p class="fs-2 fw-bold text-primary">T-KI</p>
            </div>
            <p class="pb-2">您可以使用下列方法作為會員帳號登入</p>
            <div class="d-flex flex-column justify-content-center align-items-center gap-4 mb-5">
              <GoogleLogin :callback="callback" popup-type="TOKEN">
                <button type="button" class="btn text-second fw-bold rounded-pill shadow position-relative">
                  <img src="../assets/images/icons/google.png" alt="google" width="28" class="position-absolute">
                  <p class="my-2">使用 GOOGLE 帳號</p>
                </button>
              </GoogleLogin>
              <button
                type="button" class="btn text-second fw-bold rounded-pill shadow position-relative"
                @click="showPage('loginBoard','termsPage')">
                <img src="../assets/images/icons/line.png" alt="line" width="28" class="position-absolute">
                <p class="my-2">使用 LINE 帳號</p>
              </button>
              <button type="button" class="btn text-second fw-bold rounded-pill shadow position-relative">
                <img src="../assets/images/icons/apple.png" alt="apple" width="28" class="position-absolute">
                <p class="my-2">使用 APPLE 帳號</p>
              </button>
              <button
                type="button" class="btn text-second fw-bold rounded-pill shadow position-relative"
                @click="showPage('loginBoard', 'accountLoginPage')">
                <img src="../assets/images/icons/member.png" alt="member" width="28" class="position-absolute">
                <p class="my-2">使用 會員 帳號</p>
              </button>
            </div>
            <div class="">
              <span class="pe-2">還沒有帳號？</span>
              <a href="#" class="text-info text-decoration-none" @click.prevent="showPage('loginBoard', 'memberInfoPage')">註冊成為會員</a><span>吧！</span>
            </div>
          </div>
        </div>

        <!-- 導向第三方登入 -->

        <!-- 同意平台服務協議 --> 
        <div id="termsPage" ref="termsPage">
          <div class="modal-body text-second pb-5">
            <div class="text-center mb-5">
              <h1 class="modal-title fs-2 text-primary">平台服務協議</h1>
            </div>
            <div>
              <div class="border border-secondary rounded-2 termsBox p-3 mb-3">
                <p>本使用條款（以下簡稱「本條款」）是就LINECorporation（以下簡稱「本公司」）所提供所有LINE相關產品與服務（以下簡稱「本服務」）的使用條件，由使用本服務的用戶（以下簡稱「用戶」）與本公司間訂定的條款。1. 定義本使用條款（以下簡稱「本條款」）是就LINECorporation（以下簡稱「本公司」）所提供所有LINE相關產品與服務（以下簡稱「本服務」）的使用條件，由使用本服務的用戶（以下簡稱「用戶」）與本公司間訂定的條款。1. 定義本使用條款（以下簡稱「本條款」）是就LINECorporation（以下簡稱「本公司」）所提供所有LINE相關產品與服務（以下簡稱「本服務」）的使用條件，由使用本服務的用戶（以下簡稱「用戶」）與本公司間訂定的條款。1. 定義本使用條款（以下簡稱「本條款」）是就LINECorporation（以下簡稱「本公司」）所提供所有LINE相關產品與服務（以下簡稱「本服務」）的使用條件，由使用本服務的用戶（以下簡稱「用戶」）與本公司間訂定的條款。1. 定義</p>
              </div>
              <div class="d-flex justify-content-start align-items-center gap-2 mb-4">
                <input id="agreenTermsBox" ref="agreenTermsBox" type="checkbox">
                <label for="agreenTermsBox">我已同意服務條款</label>
                <span ref="agreenTermsAlert" class="text-danger d-none">請先同意服務條款</span>
              </div>
              <button type="button" class="btn btn-primary link-light w-100 py-2" @click="submitTerms">下一步</button>
            </div>
          </div>
        </div>

        <!-- 輸入會員資料 -->
        <div id="memberInfoPage" ref="memberInfoPage">
          <div class="modal-body text-second pb-5">
            <div class="text-center mb-5">
              <h1 class="modal-title fs-2 text-primary">會員資料</h1>
            </div>
            <form>
              <div class="mb-3 row justify-content-center align-items-center">
                <label for="name" class="col-3 form-label  text-nowrap">會員姓名</label>
                <div class="col-9">
                  <input
                    id="name" ref="registerName" type="text" class="form-control" 
                    placeholder="輸入姓名"
                    aria-describedby="name" required>
                </div>
              </div>
              <div class="mb-2 row justify-content-center align-items-center">
                <label for="tel" class="col-3 form-label  text-nowrap">手機號碼</label>
                <div class="col-9">
                  <input
                    id="tel" ref="registerPhone" type="tel" class="form-control" 
                    placeholder="0912345678"
                    aria-describedby="tel" minlength="10" required>
                </div>
              </div>
              <div class="mb-2 row justify-content-center align-items-center">
                <p class="col-3" />
                <div class="col-9">
                  <button class="btn btn-info link-light w-100" type="button" @click="sendOTP">發送驗證碼</button>
                </div>
              </div>
              <div class="mb-3 row justify-content-center align-items-center">
                <label for="code" class="col-3 form-label" />
                <div class="col-9 d-flex align-items-center gap-2">
                  <input
                    id="code" ref="registerOTP" type="text" class="form-control" 
                    placeholder="輸入驗證碼"
                    aria-describedby="code" required>
                  <button type="button" class="btn btn-info link-light w-50" @click="vertifyOTP">驗證</button>
                </div>
              </div>
              <div class="mb-3 row justify-content-center align-items-center">
                <label for="password" class="col-3 form-label text-nowrap">密碼</label>
                <div class="col-9">
                  <input
                    id="password" ref="registerPsw" type="password" class="form-control"
                    placeholder="需包含英數，至少8碼"
                    aria-describedby="password" minlength="8" required>
                </div>
              </div>
              <div class="mb-4 row justify-content-center align-items-center">
                <label for="passwordCmf" class="col-3 form-label text-nowrap">確認密碼</label>
                <div class="col-9">
                  <input
                    id="passwordCmf" type="password" class="form-control" placeholder="再次輸入密碼"
                    aria-describedby="passwordCmf" minlength="8" required>
                </div>
              </div>
              <button type="button" class="btn btn-primary link-light w-100 py-2" @click="sendRegister">送出</button>
            </form>
          </div>
        </div>

        <!-- 使用會員帳號登入 -->
        <div id="accountLoginPage" ref="accountLoginPage">
          <div class="modal-body text-second pb-5">
            <div class="text-center mb-5">
              <h1 class="modal-title fs-2 text-primary">使用會員帳號登入</h1>
            </div>
            <form>
              <div class="mb-2 row justify-content-center align-items-center">
                <label for="loginTel" class="col-3 form-label">帳號</label>
                <div class="col-9">
                  <input
                    id="loginTel" ref="loginPhone" type="tel" class="form-control" 
                    placeholder="請輸入手機號碼"
                    aria-describedby="tel" minlength="10" required>
                </div>
              </div>
              <div class="mb-4 row justify-content-center align-items-center">
                <label for="loginPassword" class="col-3 form-label">密碼</label>
                <div class="col-9">
                  <input
                    id="loginPassword" ref="loginPsw" type="password" class="form-control"
                    placeholder="請輸入密碼"
                    aria-describedby="password" minlength="8" required>
                </div>
              </div>
              <div class="text-end mb-2">
                <a class="text-decoration-none link-secondary" @click="showPage('accountLoginPage', 'forgetPwdPage')">忘記密碼</a>
              </div>
              <button type="button" class="btn btn-primary link-light w-100 py-2" @click="sendLogin">登入</button>
            </form>
          </div>
        </div>

        <!--  忘記密碼 -->
        <div id="forgetPwdPage" ref="forgetPwdPage">
          <div class="modal-body text-second pb-5">
            <div class="text-center mb-5">
              <h1 class="modal-title fs-2 text-primary">忘記密碼</h1>
            </div>
            <form>
              <h5 class="mb-3">請先驗證您的手機號碼</h5>
              <div class="mb-2 row justify-content-center align-items-center">
                <label for="forgetTel" class="col-3 form-label  text-nowrap">手機號碼</label>
                <div class="col-9">
                  <input
                    id="forgetTel" ref="forgetPhone" type="tel" class="form-control" 
                    placeholder="0912345678"
                    aria-describedby="tel" minlength="10" required>
                </div>
              </div>
              <div class="mb-2 row justify-content-center align-items-center">
                <p class="col-3" />
                <div class="col-9">
                  <button type="button" class="btn btn-info link-light w-100" @click="forgetOTP">發送驗證碼</button>
                </div>
              </div>
              <div class="mb-5 row justify-content-center align-items-center">
                <label for="forgetCode" class="col-3 form-label" />
                <div class="col-9 d-flex align-items-center gap-2">
                  <input
                    id="forgetCode" ref="forgetCode" type="text" class="form-control"
                    placeholder="輸入驗證碼"
                    aria-describedby="code" required>
                  <button type="button" class="btn btn-info link-light w-50" @click="forgetVertifyOTP">驗證</button>
                </div>
              </div>
              <div v-show="isForgetOTPVertify">
                <h5 class="mb-3">重新設定密碼</h5>
                <div class="mb-3 row justify-content-center align-items-center">
                  <label for="forgetPassword" class="col-3 form-label text-nowrap">密碼</label>
                  <div class="col-9">
                    <input
                      id="forgetPassword" ref="forgetPsw1" type="password" class="form-control" 
                      placeholder="需包含英數，至少8碼"
                      aria-describedby="password" minlength="8" required>
                  </div>
                </div>
                <div class="mb-4 row justify-content-center align-items-center">
                  <label for="forgetPasswordCmf" class="col-3 form-label text-nowrap">確認密碼</label>
                  <div class="col-9">
                    <input
                      id="orgetPasswordCmf" ref="forgetPsw2" type="password" class="form-control" 
                      placeholder="再次輸入密碼"
                      aria-describedby="passwordCmf" minlength="8" required>
                  </div>
                </div>
                <button type="button" class="btn btn-primary link-light w-100 py-2" @click="resetPsw">送出</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "bootstrap/js/dist/modal";
import Swal from "sweetalert2";
import { mapActions,mapGetters} from 'vuex';
export default {
  data() {
    return {
      isForgetOTPVertify:false,
      isOTPVertify:false,
      data:'',
      loginModal: {},
    }
  },
  computed:{
    ...mapGetters('user',['getLoginData']),
  },
  mounted(){
    this.loginModal = new Modal(this.$refs.loginModal);
    this.initLoginBoard();
    this.$refs.loginModal.addEventListener('hidden.bs.modal', () => this.initLoginBoard())
  },
  methods: {
    //取出登入狀態
    ...mapActions('user', ['fetchMemberData', 'updateLoginStatus','updateLoginData']),
    
    //登入後回到原頁面並更換NAVBAR的使用者資訊
    afterLogin(loginToken){
       //關閉modal回到原本瀏覽處
       const modalClose = this.$refs.modalClose;
       loginModal.click();
       //將登入狀態存到vuex
       const access_token = this.getLoginData.access_token
       this.fetchMemberData(access_token)
        .then(() => {
          this.updateLoginStatus(true);
        })
        .catch(error => {
          console.error('會員資訊出錯', error);
        });
    },
    //重設密碼
    resetPsw(){
      const phone= this.$refs.forgetPhone.value
      const psw1 = this.$refs.forgetPsw1.value;
      const psw2 = this.$refs.forgetPsw2.value;
      if(psw1 !== psw2){
        Swal.fire({
              icon: 'error',
              title: '兩次輸入的密碼不同',
        });
      }
      const passwordRegex = /^[A-Za-z0-9@#_-]{8,255}$/; 
      if (!passwordRegex.test(psw1)) {
        Swal.fire({
          icon: 'error',
          title: '密碼格式不符合要求',
        });
        return;
      }
      const apiUrl = `${process.env.VUE_APP_PATH}/forget_password`;
      const requestData = {
       account:phone,
       password:psw1,
      };
      this.axios.post(apiUrl, requestData)
        .then(res => { 
          if(res.data.status_code === 'SYSTEM_1000'){
            Swal.fire({
              icon: 'success',
              title: '設定新密碼成功',
            })
            this.afterLogin();
          }
          if(res.data.status_code === 'SYSTEM_100'){
            Swal.fire({
              icon: 'error',
              title: '資料不齊全',
            })
          }
          if(res.data.status_code === 'USER_2043'){
            Swal.fire({
              icon: 'error',
              title: '用戶不存在',
            })
          }
        });
    },
    //忘記密碼驗證otp
    forgetVertifyOTP(){
      const phone= this.$refs.forgetPhone.value
      const code = this.$refs.forgetCode.value
      const apiUrl = `${process.env.VUE_APP_PATH}/user/verifyotp`;
      const requestData = {
        phone: phone,
        otp: code
      };
      this.axios.post(apiUrl, requestData)
        .then(res => { 
          if(res.data.status_code === 'SYSTEM_1000'){
            this.isForgetOTPVertify = true;
            Swal.fire({
              icon: 'success',
              title: '驗證成功',
            })

          }
          if (res.data.status_code === 'SYSTEM_1001' || res.data.status_code === 'SYSTEM_2092') {
            Swal.fire({
              icon: 'error',
              title: '驗證碼錯誤',
            });
          }
          if (res.data.status_code === 'SYSTEM_2093') {
            Swal.fire({
              icon: 'error',
              title: '驗證碼錯誤超過五次，驗證失敗',
            });
          }
        });

    },
    //忘記密碼發送otp
    forgetOTP(){
      const phone = this.$refs.forgetPhone.value
      const phoneRegex = /^[0-9]{10}$/; // 假設要求手機號碼為10位數字
      if (!phoneRegex.test(phone)) {
        Swal.fire({
          icon: 'error',
          title: '手機號碼格式不正確',
          text: '請輸入有效的手機號碼',
        });
        return; // 停止繼續執行
      }
      const apiUrl = `${process.env.VUE_APP_PATH}/user/sendotp`;
      const requestData = {
        phone: phone,
        method: "forget"
      };
      this.axios.post(apiUrl, requestData)
        .then(res => { 
          if (res.data.status_code === 'SYSTEM_1000') {
            Swal.fire({
              icon: 'success',
              title: '發送簡訊驗證碼成功！',
            });
          }
          if (res.data.status_code === 'SYSTEM_1001' || res.data.status_code === 'SYSTEM_2094') {
            Swal.fire({
              icon: 'error',
              title: '手機號碼格式不正確',
              text: '請輸入有效的手機號碼',
            });
          }
          if (res.data.status_code === 'SYSTEM_1002' || res.data.status_code === 'SYSTEM_2091') {
            Swal.fire({
              icon: 'error',
              title: '請求過於頻繁',
              text: '請稍後再嘗試',
            });
          }
          if (res.data.status_code === 'SYSTEM_2043') {
            Swal.fire({
              icon: 'error',
              title: '用戶不存在',
            });
          }
          if (res.data.status_code === 'SYSTEM_2099') {
            Swal.fire({
              icon: 'error',
              title: 'OTP服務異常',
            });
          }
        });
    },
    //登入
    sendLogin(){
      const phone = this.$refs.loginPhone.value
      const password = this.$refs.loginPsw.value
      const phoneRegex = /^[0-9]{10}$/; // 假設要求手機號碼為10位數字
      if (!phoneRegex.test(phone)) {
        Swal.fire({
          icon: 'error',
          title: '手機號碼格式不正確',
          text: '請輸入有效的手機號碼',
        });
        return; // 停止繼續執行
      }
      const passwordRegex = /^[A-Za-z0-9@#_-]{8,255}$/; 
      if (!passwordRegex.test(password)) {
        Swal.fire({
          icon: 'error',
          title: '密碼格式不符合要求',
        });
        return;
      }
      const apiUrl = `${process.env.VUE_APP_PATH}/user/login`;
      const requestData = {
       account:phone,
       password:password,
      };
      this.axios.post(apiUrl, requestData)
        .then(res => { 
          if(res.data.status_code === 'SYSTEM_1000'){
            Swal.fire({
              icon: 'success',
              title: '登入成功',
            });
            const loginData = res.data;
            this.updateLoginData(loginData);
            this.afterLogin();
          }
          if (res.data.status_code === 'SYSTEM_1001') {
            Swal.fire({
              icon: 'error',
              title: '資料格式錯誤',
            });
          }
          if (res.data.status_code === 'USER_2011') {
            Swal.fire({
              icon: 'error',
              title: '登入失敗，驗證資訊錯誤',
            });
          }
          if (res.data.status_code === 'USER_2012') {
            Swal.fire({
              icon: 'error',
              title: '登入失敗，帳號已被停權',
            });
          }
        });

    },
    //註冊
    sendRegister(){
      const registerName = this.$refs.registerName.value
      const nameRegex = /^[a-zA-Z\s\u4E00-\u9FFF]+$/; // 只能包含中文、英文和空格
      if (!nameRegex.test(registerName)) {
        Swal.fire({
          icon: 'error',
          title: '姓名格式不符合要求',
          text: '請輸入有效的姓名，只能包含中文、英文和空格',
        });
        return;
      }
      const phone = this.$refs.registerPhone.value;
      // 驗證手機號碼格式
      const phoneRegex = /^[0-9]{10}$/; // 假設要求手機號碼為10位數字
      if (!phoneRegex.test(phone)) {
        Swal.fire({
          icon: 'error',
          title: '手機號碼格式不正確',
          text: '請輸入有效的手機號碼',
        });
        return; // 停止繼續執行
      }
      const password = this.$refs.registerPsw.value;
      const passwordRegex = /^[A-Za-z0-9@#_-]{8,255}$/; 
      if (!passwordRegex.test(password)) {
        Swal.fire({
          icon: 'error',
          title: '密碼格式不符合要求',
        });
        return;
      }
      if(this.isOTPVertify === false){
        Swal.fire({
              icon: 'error',
              title: '請先完成手機驗證',
        });
        return;
      }
      const apiUrl = `${process.env.VUE_APP_PATH}/user/register`;
      const requestData = {
       full_name:registerName,
       account:phone,
       password:password,
      };
      this.axios.post(apiUrl, requestData)
        .then(res => { 
          if(res.data.status_code === 'SYSTEM_1000'){
            this.isOTPVertify = true
            Swal.fire({
              icon: 'success',
              title: '註冊成功',
            })
            this.afterLogin();
          }
          if (res.data.status_code === 'SYSTEM_1001') {
            Swal.fire({
              icon: 'error',
              title: '資料格式錯誤',
            });
          }
          if (res.data.status_code === 'USER_2021') {
            Swal.fire({
              icon: 'error',
              title: '帳號格式錯誤',
            });
          }
          if (res.data.status_code === 'USER_2022') {
            Swal.fire({
              icon: 'error',
              title: '密碼格式錯誤',
            });
          }
          if (res.data.status_code === 'USER_2023') {
            Swal.fire({
              icon: 'error',
              title: '姓名格式錯誤',
            });
          }
          if (res.data.status_code === 'USER_2041') {
            Swal.fire({
              icon: 'error',
              title: '帳號已存在',
            });
          }
          if (res.data.status_code === 'USER_2082' || res.data.status_code === 'USER_2081') {
            Swal.fire({
              icon: 'error',
              title: 'OPT驗證失敗',
            });
          }
        });
    },
    //註冊驗證otp
    vertifyOTP(){
      const phone = this.$refs.registerPhone.value;
      const otpCode = this.$refs.registerOTP.value
      const apiUrl = `${process.env.VUE_APP_PATH}/user/verifyotp`;
      const requestData = {
        phone: phone,
        otp: otpCode
      };
      this.axios.post(apiUrl, requestData)
        .then(res => { 
          if(res.data.status_code === 'SYSTEM_1000'){
            this.isOTPVertify = true
            Swal.fire({
              icon: 'success',
              title: '驗證成功',
            })
          }
          if (res.data.status_code === 'SYSTEM_1001' || res.data.status_code === 'SYSTEM_2092') {
            Swal.fire({
              icon: 'error',
              title: '驗證碼錯誤',
            });
          }
          if (res.data.status_code === 'SYSTEM_2093') {
            Swal.fire({
              icon: 'error',
              title: '驗證碼錯誤超過五次，驗證失敗',
            });
          }
        });
    },
    //註冊送出otp
    sendOTP() {
      const phone = this.$refs.registerPhone.value;
      // 驗證手機號碼格式
      const phoneRegex = /^[0-9]{10}$/; // 假設要求手機號碼為10位數字
      if (!phoneRegex.test(phone)) {
        Swal.fire({
          icon: 'error',
          title: '手機號碼格式不正確',
          text: '請輸入有效的手機號碼',
        });
        return; // 停止繼續執行
      }
      const apiUrl = `${process.env.VUE_APP_PATH}/user/sendotp`;
      const requestData = {
        phone: phone,
        method: "register"
      };
      this.axios.post(apiUrl, requestData)
        .then(res => { 
          if (res.data.status_code === 'SYSTEM_1000') {
            Swal.fire({
              icon: 'success',
              title: '發送簡訊驗證碼成功！',
            });
          }
          if (res.data.status_code === 'SYSTEM_1001' || res.data.status_code === 'SYSTEM_2094') {
            Swal.fire({
              icon: 'error',
              title: '手機號碼格式不正確',
              text: '請輸入有效的手機號碼',
            });
          }
          if (res.data.status_code === 'SYSTEM_1002' || res.data.status_code === 'SYSTEM_2091') {
            Swal.fire({
              icon: 'error',
              title: '請求過於頻繁',
              text: '請稍後再嘗試',
            });
          }
          if (res.data.status_code === 'SYSTEM_2041') {
            Swal.fire({
              icon: 'error',
              title: '手機已註冊過',
            });
          }
          if (res.data.status_code === 'SYSTEM_2099') {
            Swal.fire({
              icon: 'error',
              title: 'OTP服務異常',
            });
          }
        });
    },
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
        this.googleLogin(googleId);
      })
      .catch(error => {
        console.error(error);
      });
    },
    googleLogin(googleId){
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
            });
            this.afterLogin();
          }
          if (res.data.status_code === 'USER_2013') {
            Swal.fire({
              icon: 'error',
              title: '該用戶未綁定',
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
    initLoginBoard() {
      // this.$refs.loginBoard.classList.remove('d-none');
      // this.$refs.termsPage.classList.add('d-none');
      // this.$refs.memberInfoPage.classList.add('d-none');
      // this.$refs.accountLoginPage.classList.add('d-none');
      // this.$refs.forgetPwdPage.classList.add('d-none');
    },
    showModal() {
        this.loginModal.show()
    },
    submitTerms() {
      if (!this.$refs.agreenTermsBox.checked) {
        this.$refs.agreenTermsAlert.classList.remove('d-none');
      } else {
        this.showPage('termsPage', 'memberInfoPage');
      }
    },
    showPage(closedPage, showedPage) {
      this.$refs[closedPage].classList.add('d-none');
      this.$refs[showedPage].classList.remove('d-none');
    }
   }
}
</script>

<style scoped="scoped" lang="scss">
.modal-header {
  border-bottom: none;
}
.btn.text-second {
  width: 22rem;
}
img:is([alt="google"], [alt="line"], [alt="apple"], [alt="member"]) {
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
}
.termsBox {
  height: 250px;
  overflow: auto;
}
a {
  cursor: pointer;
}
.form-label {
  margin-bottom: 0;
}

#memberInfoPage form {
    padding-right: 6.5rem;
    padding-left: 6.5rem;
}
#accountLoginPage form {
    padding-right: 8.5rem;
    padding-left: 8.5rem;
}
#forgetPwdPage form {
  padding-right: 0.5rem;
  padding-left: 0.5rem;
}

@media (max-width: 768px) {
  .navbar {
    display: none !important;
  }
  #memberInfoPage form {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
  #accountLoginPage form {
    padding-right: 4rem;
    padding-left: 4rem;
  }
}
</style>