<template>
  <nav class="navbar navbar-expand-sm p-0">
    <div class="container justify-content-start">
      <!-- <div class="nav-item dropdown list-unstyled d-none d-lg-block">
        <a
          class="position-relative nav-link d-flex 
          align-items-center bot_nav_cat dropdown text-dark fw-bold text-secondary fs-6 bg-light "
        >
          <div
            class="text-uppercase fw-bold d-flex"
            @click.prevent="isActive = !isActive"
          >
            <font-awesome-icon class="me-1 cat-icon" :icon="['fas', 'bars']" />
            Categories
          </div>
          <transition name="grow">
            <NavigationSubMenu v-if="isActive" class="submenu" />
          </transition>
        </a>
      </div> -->

      <div class="navbar w-100 p-0" :class="{'show' :isActiveTablet}">
        <ul class="navbar-nav me-auto mb-2 ms-0 ms-lg-4 mb-lg-0 h-100 w-100">
          <li
            v-for="(link, i) in links"
            :key="link"
            class="nav-item position-relative h-100 d-flex align-items-center"
            @mouseover="hoveredItem = i"
            @mouseleave="hoveredItem = -1">
            <LinkWrapper
              class="nav-link text-white fs-6 mx-2"
              :location="link.location"
              :name="link.name"
              :external="link.external"
              :target="link.target" />
            <template
              v-if="link.component && link.componentProps !== undefined">
              <transition name="showMenu">
                <component
                  :is="link.component"
                  v-show="hoveredItem === i"
                  v-bind="link.componentProps"
                  class="menu-hover-main" />
              </transition>
            </template>
          </li>

          <li
            class="nav-item position-relative h-100 d-flex align-items-center ms-auto"
            @mouseover="hoveredItem = 'login'"
            @mouseleave="hoveredItem = -1">
            <!-- 尚未登入 -->
            <!-- <LinkWrapper
              class="nav-link text-white fs-6 px-0" 
              :name="'登入'"
              @click="showLoginModal" /> -->
            <LinkWrapper
              class="nav-link text-white fs-6 px-0" 
              :name="'登入'" />
            <transition name="showMenu">
              <SubmenuVerticalA
                v-show="hoveredItem === 'login'"
                :items="loggedInItems"
                class="menu-hover-login" />
            </transition>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- loginModal -->
  <div
    id="loginModal" ref="loginModal" class="modal fade" tabindex="-1"
    aria-labelledby="loginModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div id="loginBoard" ref="loginBoard">
          <div class="modal-body text-center text-second pb-5">
            <div class="d-flex justify-content-center gap-2 mb-4">
              <h1 id="loginModalLabel" class="modal-title fs-2">登入</h1>
              <p class="fs-2 fw-bold text-primary">T-KI</p>
            </div>
            <p class="pb-2">您可以使用下列方法作為會員帳號登入</p>
            <div class="d-flex flex-column justify-content-center align-items-center gap-4 mb-5">
              <button type="button" class="btn text-second fw-bold rounded-pill shadow position-relative">
                <img src="../../../assets/images/icons/google.png" alt="google" width="28" class="position-absolute">
                <p class="my-2">使用 GOOGLE 帳號</p>
              </button>
              <button type="button" class="btn text-second fw-bold rounded-pill shadow position-relative">
                <img src="../../../assets/images/icons/line.png" alt="line" width="28" class="position-absolute">
                <p class="my-2">使用 LINE 帳號</p>
              </button>
              <button type="button" class="btn text-second fw-bold rounded-pill shadow position-relative">
                <img src="../../../assets/images/icons/apple.png" alt="apple" width="28" class="position-absolute">
                <p class="my-2">使用 APPLE 帳號</p>
              </button>
              <button type="button" class="btn text-second fw-bold rounded-pill shadow position-relative">
                <img src="../../../assets/images/icons/member.png" alt="member" width="28" class="position-absolute">
                <p class="my-2">使用 會員 帳號</p>
              </button>
            </div>
            <div class="">
              <span class="pe-2">還沒有帳號？</span>
              <a class="text-info text-decoration-none">註冊成為會員</a><span>吧！</span>
            </div>
          </div>
        </div>

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
// import NavigationSubMenu from "./NavigationSubMenu.vue";
import SubmenuVerticalA from "../../atoms/Menu/SubmenuVerticalA.vue";
// import SubmenuVerticalB from "../../atoms/Menu/SubmenuVerticalB.vue";
import { links } from "../../../data/links.json";
import LinkWrapper from "../../atoms/LinkWrapper/LinkWrapper.vue";

export default {
  components: {
    // NavigationSubMenu,
    SubmenuVerticalA,
    // SubmenuVerticalB,
    LinkWrapper,
  },
  data() {
    return {
      loginModal: {},
      isActive: false,
      links,
      hoveredItem: -1,
      loggedInItems : [
          {
            "links": [
              { "location": "/member", "name": "會員中心" },
              { "location": "/my-ticket", "name": "我的票券" },
              { "location": "/buy-ticket-list", "name": "購票清單" }
            ]
          }
        ]
    };
  },
  mounted(){
    this.loginModal = new Modal(this.$refs.loginModal);
    this.initLoginBoard();
    this.$refs.loginModal.addEventListener('hidden.bs.modal', () => this.initLoginBoard())
  },
  methods: {
    initLoginBoard() {
      this.$refs.loginBoard.classList.remove('d-none');
      this.$refs.termsPage.classList.add('d-none');
      this.$refs.memberInfoPage.classList.add('d-none');
      this.$refs.accountLoginPage.classList.add('d-none');
      this.$refs.forgetPwdPage.classList.add('d-none');
    },
    showLoginModal() {
        this.loginModal.show()
    },
    submitTerms() {
      if (!this.$refs.agreenTermsBox.checked) {
        this.$refs.agreenTermsAlert.classList.remove('d-none');
        console.log('no checked!');
      } else {
        console.log('checked!');
      }
    },
    showPage(closedPage, showedPage) {
      this.$refs[closedPage].classList.add('d-none');
      this.$refs[showedPage].classList.remove('d-none');
    }
   }
};
</script>
<style>
.grow-enter-active,
.grow-leave-active {
  transition: max-height 0.5s ease;
  max-height: 400px;
  overflow: hidden;
}

.grow-enter-from,
.grow-leave-to {
  max-height: 0px;
}

.showMenu-enter-active,
.showMenu-leave-active {
  transition: transform 0.25s ease-in-out, opacity 0.25s ease-in-out;
}

.showMenu-enter-from,
.showMenu-leave-to {
  transform: translateY(50px);
  opacity: 0;
}
</style>
<style scoped="scoped" lang="scss">
.navbar {
  background-color: var(--primary-color);
  height: 70px;
}
.text-uppercase {
  cursor: pointer;
}
.nav-item a {
  color: #ffff;
  font-size: 14px !important;
  font-weight: 500 !important;
}
li > a:hover {
  -moz-transition: all 0.1s ease-in-out;
  -webkit-transition: all 0.1s ease-in-out;
  -ms-transition: all 0.05s ease-in-out;
  -o-transition: all 0.1s ease-in-out;
  transition: all 0.1s ease-in-out;
}
/*Edit starts here*/
li > a::after {
  content: "";
  top: 15px;
  margin: auto;
  left: 0;
  right: 0;
  width: 30%;
  position: absolute;
  height: 2px;
  background: #ffff;
  transition: cubic-bezier(0.77, 0, 0.18, 1) 0.3s;
  transform: scale(0);
}
li > a:hover::after,
li > a.router-link-active::after {
  transform: scale(1);
}
.bot_nav_cat {
  box-shadow: 0 3px 25px rgb(0 0 0 / 10%);
}
li {
  transition: cubic-bezier(0.77, 0, 0.18, 1) 1s;
}
.collapse.navbar-collapse {
  height: 70px;
}

.nav-item > .menu-hover-main {
  top: 100%;
  left: 0;
}
.nav-item > .menu-hover-login {
  top: 100%;
  left: -70px;
}
.cat-icon {
  margin-top:3px;
}
.sign-in span {
  color: #ffff;
  font-size: 14px !important;
  font-weight: 700 !important;
}
.dropdown {
  height: 70px;
}
.dropdown-toggle::after {
  content: none;
}
.navbar a {
  text-align: left;
  box-sizing: border-box;
  text-decoration: none;
  background-color: transparent;
  color: #606060;
  font-weight: 400;
  font-size: 14px;
}
.nav-link.bot_nav_cat {
  background: #fff !important;
  opacity: 1;
  color: #484848;
  display: inline-block;
  outline: none;
  padding: 10px 36px;
  font-size: 13px;
}
.menu {
  display: block;
  margin: 0 auto;
  position: relative;
  width: 200px;
}
.menu > li > a {
  background: #000;
  color: #fff;
  display: block;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
}

.menu ul {
  background: #ddd;
  height: 0;
  left: 0;
  opacity: 0;
  position: absolute;
  transition: all 0.5s ease;
  top: 35px;
  width: 100%;
}
.menu ul a {
  color: #000;
  display: block;
  padding: 5px 20px;
}
/* Animation */
.navbar li ul {
  position: absolute;
  left: 0;
  top: 36px;
  z-index: 1;
}
.navbar li ul li {
  overflow: hidden;
  height: 0;
  -webkit-transition: height 200ms ease-in;
  -moz-transition: height 200ms ease-in;
  -o-transition: height 200ms ease-in;
  transition: height 200ms ease-in;
}
.navbar ul > li:hover ul li {
  height: 36px;
}

.modal {
  top: 15%;
}
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
