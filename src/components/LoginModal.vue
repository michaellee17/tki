<template>
  <div
    id="loginModal" ref="loginModal" class="modal login-modal fade" tabindex="-1"
    aria-labelledby="loginModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <button
            ref="modalClose" type="button" class="btn-close" data-bs-dismiss="modal"
            aria-label="Close" />
        </div>
        <!-- 登入 / 註冊首頁 -->
        <div id="loginBoard" ref="loginBoard">
          <div class="modal-body text-center text-second">
            <div class="d-flex justify-content-center gap-2 mb-4 align-items-center">
              <h1 id="loginModalLabel" class="modal-title fs-2">登入</h1>
              <div>
                <img src="../assets/images/logos/logo-main.png" width="80" alt="logo">
              </div>
            </div>
            <p class="mb-3">您可以使用下列方法作為會員帳號登入</p>
            <div class="login-way d-flex flex-column justify-content-center align-items-center mb-4">
              <Google @switch-pages="showPage" @after-login="afterLogin" />
              <LineLogin @switch-pages="showPage" @after-login="afterLogin" @modal-close="clickClose" />
              <Apple @switch-pages="showPage" @after-login="afterLogin" @modal-close="clickClose" />
              <button
                type="button" class="btn text-second fw-bold rounded-pill shadow position-relative"
                @click="showPage('loginBoard', 'accountLoginPage')">
                <img src="../assets/images/icons/member.png" alt="member" width="28" class="position-absolute">
                <p class="my-2">使用手機號碼登入</p>
              </button>
            </div>
            <div class="">
              <span class="pe-2">還沒有帳號？</span>
              <a
                href="#" class="text-info text-decoration-none"
                @click.prevent="handleRegister(true)">註冊成為會員</a><span>吧！</span>
            </div>
          </div>
        </div>
        <!-- 同意平台服務協議 -->
        <div id="termsPage" ref="termsPage">
          <div class="modal-body text-second pb-5">
            <div class="text-center mb-4">
              <h1 class="modal-title fs-2 text-primary">平台服務協議</h1>
            </div>
            <div>
              <div class="border border-secondary rounded-2 termsBox p-3 mb-3">
                <p>
                  本使用條款（以下簡稱「本條款」）是就LINECorporation（以下簡稱「本公司」）所提供所有LINE相關產品與服務（以下簡稱「本服務」）的使用條件，由使用本服務的用戶（以下簡稱「用戶」）與本公司間訂定的條款。1.
                  定義本使用條款（以下簡稱「本條款」）是就LINECorporation（以下簡稱「本公司」）所提供所有LINE相關產品與服務（以下簡稱「本服務」）的使用條件，由使用本服務的用戶（以下簡稱「用戶」）與本公司間訂定的條款。1.
                  定義本使用條款（以下簡稱「本條款」）是就LINECorporation（以下簡稱「本公司」）所提供所有LINE相關產品與服務（以下簡稱「本服務」）的使用條件，由使用本服務的用戶（以下簡稱「用戶」）與本公司間訂定的條款。1.
                  定義本使用條款（以下簡稱「本條款」）是就LINECorporation（以下簡稱「本公司」）所提供所有LINE相關產品與服務（以下簡稱「本服務」）的使用條件，由使用本服務的用戶（以下簡稱「用戶」）與本公司間訂定的條款。1.
                  定義
                </p>
              </div>
              <div class="d-flex justify-content-start align-items-center gap-2 mb-4">
                <input id="agreenTermsBox" ref="agreenTermsBox" type="checkbox">
                <label for="agreenTermsBox">我已同意服務條款</label>
                <span ref="agreenTermsAlert" class="text-danger d-none">請先同意服務條款</span>
              </div>
              <button type="button" class="btn btn-outline-primaryB w-100 py-2" @click="submitTerms">下一步</button>
            </div>
          </div>
        </div>
        <!-- 會員註冊 -->
        <Register
          v-if="isRegisterOpen" :open="isRegisterOpen" @register-hide="handleRegister(false)" 
          @after-login="handleRegister('close')" />
        <!-- 第三方註冊 -->
        <div ref="platformRegister">
          <div class="modal-body text-second pb-5">
            <div class="text-center mb-4">
              <h1 class="modal-title fs-2 text-primary">第三方註冊</h1>
            </div>
            <form>
              <div class="mb-3 row justify-content-center align-items-center">
                <label for="name" class="col-3 form-label  text-nowrap mr-2">會員姓名</label>
                <div class="col-9">
                  <input
                    id="name" ref="platformName" v-model="platformName" type="text" class="form-control" 
                    placeholder="輸入姓名"
                    aria-describedby="name" required>
                </div>
              </div>
              <div v-show="!isplatformOTPVertify" class="mb-2 row justify-content-center align-items-center">
                <label for="tel" class="col-3 form-label  text-nowrap">手機號碼</label>
                <div class="col-9">
                  <input
                    id="tel" ref="platformPhone" v-model="platformPhone" type="tel" class="form-control"
                    placeholder="0912345678"
                    aria-describedby="tel" minlength="10" required>
                </div>
              </div>
              <div v-if="!isplatformOTPVertify" class="mb-2 row justify-content-center align-items-center">
                <p class="col-3" />
                <div class="col-9">
                  <button v-if="!isplatformOTPSend" class="btn btn-info link-light w-100" type="button" @click="platformSendOTP">發送驗證碼</button>
                  <button v-if="isplatformOTPSend" class="btn btn-info link-light w-100" disabled>有效時間:{{ remainingTime }}(秒)</button>
                </div>
              </div>
              <div v-if="isplatformOTPSend && !isplatformOTPVertify" class="mb-3 row justify-content-center align-items-center">
                <label for="code" class="col-3 form-label" />
                <div class="col-9 d-flex align-items-center gap-2">
                  <input
                    id="code" ref="platformOTP" v-model="platformOTP" type="text" class="form-control"
                    placeholder="輸入驗證碼"
                    aria-describedby="code" required>
                  <button type="button" class="btn btn-info link-light w-50" @click="platformVertifyOTP">驗證</button>
                </div>
              </div>
              <div class="mb-3 row justify-content-center align-items-center">
                <label for="password" class="col-3 form-label text-nowrap">密碼</label>
                <div class="col-9">
                  <input
                    id="password" ref="platformPsw1" v-model="platformPsw1" type="password" class="form-control"
                    placeholder="需包含英數，至少8碼" aria-describedby="password" minlength="8" required>
                </div>
              </div>
              <div class="mb-4 row justify-content-center align-items-center">
                <label for="passwordCmf" class="col-3 form-label text-nowrap">確認密碼</label>
                <div class="col-9">
                  <input
                    id="passwordCmf" v-model="platformPsw2" type="password" class="form-control"
                    placeholder="再次輸入密碼"
                    aria-describedby="passwordCmf" minlength="8" required>
                </div>
              </div>
              <div class="text-end mb-2 d-flex">
                <a class="text-decoration-none link-secondary" @click="showPage('platformRegister', 'loginBoard')">回上一步</a>
              </div>
              <button type="button" class="btn btn-primary link-light w-100 py-2" @click="sendPlatform">送出</button>
            </form>
          </div>
        </div>
        <!-- 使用會員帳號登入 -->
        <div id="accountLoginPage" ref="accountLoginPage">
          <div class="modal-body text-second pb-5">
            <div class="text-center mb-4">
              <h1 class="modal-title fs-2 text-primary">使用手機號碼登入</h1>
            </div>
            <form>
              <div class="mb-2 row justify-content-center align-items-center">
                <label for="loginTel" class="col-3 form-label">手機號碼</label>
                <div class="col-9">
                  <input
                    id="loginTel" ref="loginTel" v-model="loginPhone" type="tel"
                    class="form-control"
                    placeholder="請輸入手機號碼"
                    aria-describedby="tel" minlength="10" required>
                </div>
              </div>
              <div class="mb-4 row justify-content-center align-items-center">
                <label for="loginPassword" class="col-3 form-label">密碼</label>
                <div class="col-9">
                  <input
                    id="loginPassword" ref="loginPsw" v-model="loginPsw" type="password" class="form-control"
                    placeholder="請輸入密碼"
                    aria-describedby="password" minlength="8" required>
                </div>
              </div>
              <div class="text-end mb-2 d-flex justify-content-between">
                <a
                  class="text-decoration-none link-secondary"
                  @click="showPage('accountLoginPage', 'loginBoard')">回上一步</a>
                <a
                  class="text-decoration-none link-secondary"
                  @click="handleForget(true)">忘記密碼</a>
              </div>
              <button type="button" class="btn btn-primary link-light w-100 py-2" @click="sendLogin">登入</button>
            </form>
          </div>
        </div>
        <Forget v-if="isForgetOpen" :open="isForgetOpen" @forget-hide="handleForget(false)" @after-forget="handleForget('close')" />
      </div>
    </div>
  </div>
</template>
<script>
import Forget from "./gc/loginModal/Forget.vue";
import Google from "./gc/loginModal/Google.vue";
import Line from "./gc/loginModal/Line.vue";
import Apple from "./gc/loginModal/Apple.vue";
import Register from "./gc/loginModal/Register.vue"
import Modal from "bootstrap/js/dist/modal";
import Swal from "sweetalert2";
import { mapActions, mapGetters } from 'vuex';
export default {
  components: {
    Google,
    LineLogin:Line,
    Apple,
    Register,
    Forget,
  },
  data() {
    return {
      isForgetOpen:false,
      isRegisterOpen:false,
      isOTPVertify: false,
      data: '',
      loginModal: {},
      remainingTime:300,
      //登入
      loginPhone: '',
      loginPsw: '',
      //第三方註冊
      isplatformOTPSend:false,
      isplatformOTPVertify:false,
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
  mounted() {
    this.loginModal = new Modal(this.$refs.loginModal);
    this.initLoginBoard();
    this.$refs.loginModal.addEventListener('hidden.bs.modal', () => this.initLoginBoard())
    this.enterKeyup();

    // this.loginModal.show();
  },
  methods: {
    //取出登入狀態
    ...mapActions('user', ['fetchMemberData', 'updateLoginStatus', 'updateLoginData', 'cleanMemberData']),
    //控制忘記密碼收合
    handleForget(show){
      if(show === true){
        this.isForgetOpen = true
        this.$refs.accountLoginPage.classList.add('d-none')
      }else if(show === false){
        this.isForgetOpen = false
        this.$refs.accountLoginPage.classList.remove('d-none')
      }else if(show === 'close'){
        this.isForgetOpen =false
        this.clickClose()
      }
    },
    //控制一般註冊收合
    handleRegister(show){
      if(show === true){
        this.isRegisterOpen = true
        this.$refs.loginBoard.classList.add('d-none')
      }else if(show === false){
        this.isRegisterOpen = false
        this.$refs.loginBoard.classList.remove('d-none')
      }else if(show === 'close'){
        this.isRegisterOpen =false
        this.afterLogin()
      }
    },
    //關閉登入modal
    clickClose(){
      const modalClose = this.$refs.modalClose;
      modalClose.click();
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
      if (event.key === 'Enter' && this.$refs.loginModal.classList.contains('show')) {
        if (this.$refs.accountLoginPage.classList.contains('active')) {
          //登入流程
          this.sendLogin();
      } //第三方流程流程
        else if (this.$refs.platformRegister.classList.contains('active')) {
        if(this.isplatformOTPSend === false){
          this.platformSendOTP()
        }
        if(this.isplatformOTPSend === true && this.isplatformOTPVertify === false){
          this.platformVertifyOTP()
        }
        if(this.isplatformOTPVertify === true){
          this.sendPlatform()
        }
      } 
      }
    },
    //登入後回到原頁面並更換NAVBAR的使用者資訊
    afterLogin() {
      //關閉modal回到原本瀏覽處
      const modalClose = this.$refs.modalClose;
      modalClose.click();
      //將登入狀態存到vuex
      const access_token = this.getLoginData.access_token
      this.fetchMemberData(access_token)
        .then(() => {
          this.updateLoginStatus(true);
        })
        .catch(error => {
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
    //登入
    sendLogin() {
      const phoneRegex = /^[0-9]{10}$/; 
      if (!phoneRegex.test(this.loginPhone)) {
        Swal.fire({
          icon: 'error',
          title: '手機號碼格式不正確',
          text: '請輸入有效的手機號碼',
          showConfirmButton: false,
          keydownListenerCapture:true,
          timer: 1500,
        });
        this.$refs.loginTel.focus()
        return; // 停止繼續執行
      }
      const passwordRegex = /^[A-Za-z0-9@#_-]{8,255}$/;
      if (!passwordRegex.test(this.loginPsw)) {
        Swal.fire({
          icon: 'error',
          title: '密碼格式不符合要求',
          showConfirmButton: false,
          timer: 1500,
        });
        this.$refs.loginPsw.focus()
        return;
      }
      const apiUrl = `${process.env.VUE_APP_PATH}/user/login`;
      const requestData = {
        account: this.loginPhone,
        password: this.loginPsw,
      };
      this.axios.post(apiUrl, requestData)
        .then(res => {
          if (res.data.status_code === 'SYSTEM_1000') {
            Swal.fire({
              icon: 'success',
              title: '登入成功',
              showConfirmButton: false,
              timer: 1500,
            });
            this.loginPhone = '';
            this.loginPsw = '';
            const loginData = res.data;
            this.updateLoginData(loginData);
            this.afterLogin();
          }
          if (res.data.status_code === 'SYSTEM_1001') {
            Swal.fire({
              icon: 'error',
              title: '資料格式錯誤',
              showConfirmButton: false,
              timer: 1500,
            });
            this.$refs.loginTel.focus()
          }
          if (res.data.status_code === 'USER_2011') {
            Swal.fire({
              icon: 'error',
              title: '登入失敗，驗證資訊錯誤',
              showConfirmButton: false,
              timer: 1500,
            });
            this.$refs.loginTel.focus()
          }
          if (res.data.status_code === 'USER_2012') {
            Swal.fire({
              icon: 'error',
              title: '登入失敗，帳號已被停權',
              showConfirmButton: false,
              timer: 1500,
            });
            this.$refs.loginTel.focus()
          }
        });

    },
    //第三方註冊
    sendPlatform() {
      const nameRegex = /^[a-zA-Z\s\u4E00-\u9FFF]+$/; 
      if (!nameRegex.test(this.platformName)) {
        Swal.fire({
          icon: 'error',
          title: '姓名格式不符合要求',
          text: '請輸入有效的姓名，只能包含中文、英文和空格',
          showConfirmButton: false,
          timer: 1500,
        });
        this.$refs.platformName.focus();
        return;
      }
      // 驗證手機號碼格式
      const phoneRegex = /^[0-9]{10}$/; 
      if (!phoneRegex.test(this.platformPhone)) {
        Swal.fire({
          icon: 'error',
          title: '手機號碼格式不正確',
          text: '請輸入有效的手機號碼',
          showConfirmButton: false,
          timer: 1500,
        });
        this.$refs.platformPhone.focus()
        return; // 停止繼續執行
      }
      const passwordRegex = /^[A-Za-z0-9@#_-]{8,255}$/;
      if (!passwordRegex.test(this.platformPsw1)) {
        Swal.fire({
          icon: 'error',
          title: '密碼格式不符合要求',
          showConfirmButton: false,
          timer: 1500,
        });
        this.$refs.platformPsw1.focus()
        return;
      }
      if (this.isplatformOTPVertify === false) {
        Swal.fire({
          icon: 'error',
          title: '請先完成手機驗證',
          showConfirmButton: false,
          timer: 1500,
        });
        this.$refs.platformOTP.focus()
        return;
      }
      if (this.platformPsw1 !== this.platformPsw2) {
        Swal.fire({
          icon: 'error',
          title: '兩次輸入的密碼不同',
          showConfirmButton: false,
          timer: 1500,
        });
        this.$refs.platformPsw1.focus()
        return;
      }
      const apiUrl = `${process.env.VUE_APP_PATH}/user/register`;
      // 從localStorage中獲取platform_id
      const platform = localStorage.getItem('platform');
      let platform_id,method
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
          platform_id= localStorage.getItem('appleID');
          break;
        default:
          break;
      }
      const requestData = {
        full_name: this.platformName,
        account: this.platformPhone,
        password: this.platformPsw1,
        method:method,
        platform_id:platform_id,
      };
      this.axios.post(apiUrl, requestData)
        .then(res => {
          if (res.data.status_code === 'SYSTEM_1000') {
            this.isOTPVertify = true
            Swal.fire({
              icon: 'success',
              title: '註冊成功',
              showConfirmButton: false,
              timer: 1500,
            })
            const loginData = res.data;
            this.updateLoginData(loginData);
            this.afterLogin();
            this.platformName = '';
            this.registerPhone = '';
            this.platformPsw1 = '';
            this.platformPsw2 = '';
            this.registerOTP = '';
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
            Swal.fire({
              icon: 'error',
              title: '資料格式錯誤',
              showConfirmButton: false,
              timer: 1500,
            });
            this.$refs.platformName.focus()
          }
          if (res.data.status_code === 'USER_2021') {
            Swal.fire({
              icon: 'error',
              title: '帳號格式錯誤',
              showConfirmButton: false,
              timer: 1500,
            });
            this.$refs.platformPhone.focus()
          }
          if (res.data.status_code === 'USER_2022') {
            Swal.fire({
              icon: 'error',
              title: '密碼格式錯誤',
              showConfirmButton: false,
              timer: 1500,
            });
            this.$refs.platformPsw1.focus()
          }
          if (res.data.status_code === 'USER_2023') {
            Swal.fire({
              icon: 'error',
              title: '姓名格式錯誤',
              showConfirmButton: false,
              timer: 1500,
            });
            this.$refs.platformName.focus()
          }
          if (res.data.status_code === 'USER_2041') {
            Swal.fire({
              icon: 'error',
              title: '帳號已存在',
              showConfirmButton: false,
              timer: 1500,
            });
            this.$refs.platformPsw1.focus()
          }
          if (res.data.status_code === 'USER_2082' || res.data.status_code === 'USER_2081') {
            Swal.fire({
              icon: 'error',
              title: 'OPT驗證失敗',
              showConfirmButton: false,
              timer: 1500,
            });
            this.$refs.platformPsw1.focus()
          }
        });
    },
   
      //第三方註冊驗證otp
      platformVertifyOTP() {
      const apiUrl = `${process.env.VUE_APP_PATH}/user/verifyotp`;
      const requestData = {
        phone: this.platformPhone,
        otp: this.platformOTP,
      };
      this.axios.post(apiUrl, requestData)
        .then(res => {
          if (res.data.status_code === 'SYSTEM_1000') {
            this.isplatformOTPVertify = true
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
            this.$refs.platformOTP.focus()
          }
          if (res.data.status_code === 'SYSTEM_2093') {
            Swal.fire({
              icon: 'error',
              title: '驗證碼錯誤超過五次，驗證失敗',
              showConfirmButton: false,
              timer: 1500,
            });
            this.$refs.platformOTP.focus()
          }
        });
    },
    //第三方註冊送出otp
    platformSendOTP() {
      // 驗證手機號碼格式
      const phoneRegex = /^[0-9]{10}$/; // 假設要求手機號碼為10位數字
      if (!phoneRegex.test(this.platformPhone)) {
        Swal.fire({
          icon: 'error',
          title: '手機號碼格式不正確',
          text: '請輸入有效的手機號碼',
          showConfirmButton: false,
          timer: 1500,
        });
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
            Swal.fire({
              icon: 'success',
              title: '發送簡訊驗證碼成功！',
              showConfirmButton: false,
              timer: 1500,
            });
            this.isplatformOTPSend = true;
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
            this.$refs.platformPhone.focus()
          }
          if (res.data.status_code === 'SYSTEM_1002' || res.data.status_code === 'USER_2091') {
            Swal.fire({
              icon: 'error',
              title: '請求過於頻繁',
              text: '請稍後再嘗試',
              showConfirmButton: false,
              timer: 1500,
            });
            this.$refs.platformPhone.focus()
          }
          if (res.data.status_code === 'USER_2041') {
            Swal.fire({
              icon: 'error',
              title: '手機已註冊過',
              showConfirmButton: false,
              timer: 1500,
            });
            this.$refs.platformPhone.focus()
          }
          if (res.data.status_code === 'USER_2099') {
            Swal.fire({
              icon: 'error',
              title: 'OTP服務異常',
              showConfirmButton: false,
              timer: 1500,
            });
            this.$refs.platformPhone.focus()
          }
        });
    },
    initLoginBoard() {
      this.$refs.loginBoard.classList.remove('d-none');
      this.$refs.termsPage.classList.add('d-none');
      this.$refs.termsPage.classList.remove('active');
      this.$refs.accountLoginPage.classList.add('d-none')
      this.$refs.accountLoginPage.classList.remove('active');
      this.$refs.platformRegister.classList.add('d-none');
      this.$refs.platformRegister.classList.remove('active');
    },
    showModal() {
      this.loginModal.show()
      this.isForgetOpen = false
      this.isRegisterOpen = false
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
      this.$refs[showedPage].classList.add('active');
      this.$refs[closedPage].classList.remove('active');
    },
  }
}
</script>
<style scoped lang="scss">
.modal.login-modal {
  & .login-way {
    gap: 1.3rem;
  }
  & .termsBox {
    height: 250px;
    overflow: auto;
  }
}


// 
// a {
//   cursor: pointer;
// }
// .form-label {
//   margin-bottom: 0;
// }
// @media (max-width: 768px) {
//   #memberInfoPage form {
//     padding-right: 0.5rem;
//     padding-left: 0.5rem;
//   }

//   #accountLoginPage form {
//     padding-right: 4rem;
//     padding-left: 4rem;
//   }
// }
</style>