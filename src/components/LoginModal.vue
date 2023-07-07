<template>
  <div
    id="loginModal" ref="loginModal" class="modal fade" tabindex="-1"
    aria-labelledby="loginModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
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
              <button type="button" class="btn text-second fw-bold rounded-pill shadow position-relative">
                <img src="../assets/images/icons/google.png" alt="google" width="28" class="position-absolute">
                <p class="my-2">使用 GOOGLE 帳號</p>
              </button>
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
                    id="name" type="text" class="form-control" placeholder="輸入姓名"
                    aria-describedby="name" required>
                </div>
              </div>
              <div class="mb-2 row justify-content-center align-items-center">
                <label for="tel" class="col-3 form-label  text-nowrap">手機號碼</label>
                <div class="col-9">
                  <input
                    id="tel" type="tel" class="form-control" placeholder="0912345678"
                    aria-describedby="tel" minlength="10" required>
                </div>
              </div>
              <div class="mb-2 row justify-content-center align-items-center">
                <p class="col-3" />
                <div class="col-9">
                  <button type="button" class="btn btn-info link-light w-100">發送驗證碼</button>
                </div>
              </div>
              <div class="mb-3 row justify-content-center align-items-center">
                <label for="code" class="col-3 form-label" />
                <div class="col-9 d-flex align-items-center gap-2">
                  <input
                    id="code" type="text" class="form-control" placeholder="輸入驗證碼"
                    aria-describedby="code" required>
                  <button type="button" class="btn btn-info link-light w-50">驗證</button>
                </div>
              </div>
              <div class="mb-3 row justify-content-center align-items-center">
                <label for="password" class="col-3 form-label text-nowrap">密碼</label>
                <div class="col-9">
                  <input
                    id="password" type="password" class="form-control" placeholder="需包含英數，至少8碼"
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
              <button type="submit" class="btn btn-primary link-light w-100 py-2">送出</button>
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
                    id="loginTel" type="tel" class="form-control" placeholder="請輸入手機號碼"
                    aria-describedby="tel" minlength="10" required>
                </div>
              </div>
              <div class="mb-4 row justify-content-center align-items-center">
                <label for="loginPassword" class="col-3 form-label">密碼</label>
                <div class="col-9">
                  <input
                    id="loginPassword" type="password" class="form-control" placeholder="請輸入密碼"
                    aria-describedby="password" minlength="8" required>
                </div>
              </div>
              <div class="text-end mb-2">
                <a class="text-decoration-none link-secondary" @click="showPage('accountLoginPage', 'forgetPwdPage')">忘記密碼</a>
              </div>
              <button type="submit" class="btn btn-primary link-light w-100 py-2">登入</button>
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
                    id="forgetTel" type="tel" class="form-control" placeholder="0912345678"
                    aria-describedby="tel" minlength="10" required>
                </div>
              </div>
              <div class="mb-2 row justify-content-center align-items-center">
                <p class="col-3" />
                <div class="col-9">
                  <button type="button" class="btn btn-info link-light w-100">發送驗證碼</button>
                </div>
              </div>
              <div class="mb-5 row justify-content-center align-items-center">
                <label for="forgetCode" class="col-3 form-label" />
                <div class="col-9 d-flex align-items-center gap-2">
                  <input
                    id="forgetCode" type="text" class="form-control" placeholder="輸入驗證碼"
                    aria-describedby="code" required>
                  <button type="button" class="btn btn-info link-light w-50">驗證</button>
                </div>
              </div>
              <h5 class="mb-3">重新設定密碼</h5>
              <div class="mb-3 row justify-content-center align-items-center">
                <label for="forgetPassword" class="col-3 form-label text-nowrap">密碼</label>
                <div class="col-9">
                  <input
                    id="forgetPassword" type="password" class="form-control" placeholder="需包含英數，至少8碼"
                    aria-describedby="password" minlength="8" required>
                </div>
              </div>
              <div class="mb-4 row justify-content-center align-items-center">
                <label for="forgetPasswordCmf" class="col-3 form-label text-nowrap">確認密碼</label>
                <div class="col-9">
                  <input
                    id="orgetPasswordCmf" type="password" class="form-control" placeholder="再次輸入密碼"
                    aria-describedby="passwordCmf" minlength="8" required>
                </div>
              </div>
              <button type="submit" class="btn btn-primary link-light w-100 py-2">送出</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "bootstrap/js/dist/modal";

export default {
  data() {
    return {
      loginModal: {},
    }
  },
  mounted(){
    this.loginModal = new Modal(this.$refs.loginModal);
    this.initLoginBoard();
    this.$refs.loginModal.addEventListener('hidden.bs.modal', () => this.initLoginBoard())
  },
  methods: {
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
        console.log('no checked!');
      } else {
        console.log('checked!');
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