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
              <Google @show-platform="handlePlatform(true)" @after-login="afterLogin" />
              <LineLogin @show-platform="handlePlatform(true)" @after-login="afterLogin" @modal-close="clickClose" />
              <Apple @show-platform="handlePlatform(true)" @after-login="afterLogin" @modal-close="clickClose" />
              <button
                type="button" class="btn text-second fw-bold rounded-pill shadow position-relative"
                @click="handleLogin(true)">
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
            <div class="text-center mb-5">
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
            <div class="text-center mb-5">
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
import Platform from "./gc/loginModal/Platform.vue";
import Login from "./gc/loginModal/Login.vue";
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
    LineLogin: Line,
    Apple,
    Register,
    Login,
    Platform,
  },
  data() {
    return {
      isLoginOpen: false,
      isForgetOpen: false,
      isRegisterOpen: false,
      isPlatformOpen: false,
      data: '',
      loginModal: {},
      remainingTime: 300,
    }
  },
  computed: {
    ...mapGetters('user', ['getLoginData']),
  },
  mounted() {
    this.loginModal = new Modal(this.$refs.loginModal);
    this.initLoginBoard();
    this.$refs.loginModal.addEventListener('hidden.bs.modal', () => this.initLoginBoard())
    this.enterKeyup();
  },
  methods: {
    //取出登入狀態
    ...mapActions('user', ['fetchMemberData', 'updateLoginStatus', 'updateLoginData', 'cleanMemberData']),
    handlePlatform(show){
      if(show === true){
        this.isPlatformOpen = true
        this.$refs.loginBoard.classList.add('d-none')
      }else if(show === false){
        this.isPlatformOpen = false
        this.$refs.loginBoard.classList.remove('d-none')
      }else if(show === 'close'){
        this.isPlatformOpen = false
        this.afterLogin()
      }
     
    },
    //控制一般豋入收合
    handleLogin(show) {
      if (show === true) {
        this.isLoginOpen = true
        this.$refs.loginBoard.classList.add('d-none')
      } else if(show === false){
        this.isLoginOpen = false
        this.$refs.loginBoard.classList.remove('d-none')
      } else if (show === 'close') {
        this.isLoginOpen = false
        this.afterLogin()
      }
    },
    //控制一般註冊收合
    handleRegister(show) {
      if (show === true) {
        this.isRegisterOpen = true
        this.$refs.loginBoard.classList.add('d-none')
      } else if (show === false) {
        this.isRegisterOpen = false
        this.$refs.loginBoard.classList.remove('d-none')
      } else if (show === 'close') {
        this.isRegisterOpen = false
        this.afterLogin()
      }
    },
    //關閉登入modal
    clickClose() {
      const modalClose = this.$refs.modalClose;
      modalClose.click();
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
    initLoginBoard() {
      this.$refs.loginBoard.classList.remove('d-none');
      this.$refs.termsPage.classList.add('d-none');
      this.$refs.termsPage.classList.remove('active');
    },
    showModal() {
      this.loginModal.show()
      this.isForgetOpen = false
      this.isRegisterOpen = false
      this.isPlatformOpen = false
      this.isLoginOpen = false
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
      if (closedPage === 'platformRegister') {
        this.resetPlatform()
      }
    },
  }
}
</script>
<style scoped lang="scss">
.modal.login-modal {
  top: 55%;
  transform: translateY(-50%);
 & .modal-header .btn-close {
    padding: 1rem;
  }
  & .modal-header {
    border-bottom: none;
  }
  & .modal-body {
    padding: 1rem 2rem 2rem 2rem;
  }
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
@media (max-width: 768px) {
  #memberInfoPage form {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }

//   #accountLoginPage form {
//     padding-right: 4rem;
//     padding-left: 4rem;
//   }
// }
</style>