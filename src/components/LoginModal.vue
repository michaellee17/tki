<template>
  <div
    id="loginModal" ref="loginModal" class="modal login-modal fade" tabindex="-1"
    aria-labelledby="loginModalLabel"
    aria-hidden="true">
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
            <div class="d-flex justify-content-center gap-2 mb-4 align-items-center">
              <h1 id="loginModalLabel" class="modal-title fs-2">登入</h1>
              <div>
                <img src="../assets/images/logos/logo-main.png" width="80" alt="logo">
              </div>
            </div>
            <p class="pb-2">您可以使用下列方法作為會員帳號登入</p>
            <div class="d-flex flex-column justify-content-center align-items-center gap-4 mb-4">
              <Google @show-platform="handlePlatform(true)" @after-login="afterLogin" />
              <LineLogin @show-platform="handlePlatform(true)" @after-login="afterLogin" @modal-close="handlePlatformFail" />
              <Apple @show-platform="handlePlatform(true)" @after-login="afterLogin" @modal-close="handlePlatformFail" />
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
            <div class="text-center mb-5">
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
              <button type="button" class="btn btn-primary link-light w-100 py-2" @click="submitTerms">下一步</button>
            </div>
          </div>
        </div>
        <!-- 會員註冊 -->
        <Register
          v-if="isRegisterOpen" :open="isRegisterOpen" @register-hide="handleRegister(false)"
          @after-login="handleRegister('close')" />
        <!-- 第三方註冊 -->
        <Platform
          v-if="isPlatformOpen" :open="isPlatformOpen" @platform-hide="handlePlatform(false)"
          @after-platform="handlePlatform('close')" />
        <!-- 一般登入 -->
        <Login
          v-if="isLoginOpen" :open="isLoginOpen" @hide-login="handleLogin(false)" @after-login="handleLogin('close')"
          @after-forget="handleForget" />
      </div>
    </div>
  </div>
  <MessageModal ref="registerSuceess" :success="true">
    <p class="mb-0">註冊成功</p>
  </MessageModal>
  <MessageModal ref="PlatformSuceess" :success="true">
    <p class="mb-0">第三方註冊成功</p>
  </MessageModal>
  <MessageModal ref="changePswSuceess" :success="true">
    <p class="mb-0">重設密碼成功</p>
  </MessageModal>
  <MessageModal ref="platformFail" :error="true">
    <p class="mb-0">資訊不完整</p>
  </MessageModal>
</template>
<script>
import MessageModal from "./gc/MessageModal.vue";
import Platform from "./gc/loginModal/Platform.vue";
import Login from "./gc/loginModal/Login.vue";
import Google from "./gc/loginModal/Google.vue";
import Line from "./gc/loginModal/Line.vue";
import Apple from "./gc/loginModal/Apple.vue";
import Register from "./gc/loginModal/Register.vue"
import Modal from "bootstrap/js/dist/modal";
import { mapActions, mapGetters } from 'vuex';
export default {
  components: {
    MessageModal,
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
  watch:{
    isPlatformOpen(nVal,oVal){
      if(nVal === false){
        localStorage.removeItem('platform')
        localStorage.removeItem('googleID')
        localStorage.removeItem('appleID')
        localStorage.removeItem('lineUserId')
      }
    },
  },
  mounted() {
    this.loginModal = new Modal(this.$refs.loginModal);
    this.initLoginBoard();
    this.$refs.loginModal.addEventListener('hidden.bs.modal', () => this.initLoginBoard())
    
    // this.showModal();
  },
  methods: {
    //取出登入狀態
    ...mapActions('user', ['fetchMemberData', 'updateLoginStatus', 'updateLoginData', 'cleanMemberData']),
    //第三方登入資訊不完整
    handlePlatformFail(){
      this.clickClose()
      this.$refs.platformFail.showModal()
    },
    //忘記密碼
    handleForget(){
      this.clickClose()
      this.$refs.changePswSuceess.showModal()
    },
    //控制第三方收合
    handlePlatform(show){
      if(show === true){
        this.isPlatformOpen = true
        this.$refs.loginBoard.classList.add('d-none')
      }else if(show === false){
        this.isPlatformOpen = false
        this.$refs.loginBoard.classList.remove('d-none')
      }else if(show === 'close'){
        this.$refs.PlatformSuceess.showModal()
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
        this.$refs.registerSuceess.showModal()
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

</style>