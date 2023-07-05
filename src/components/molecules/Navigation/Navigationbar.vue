<template>
  <nav class="navbar navbar-expand-sm p-0">
    <div class="container justify-content-start">
      <div class="navbar w-100 p-0" :class="{'show' :isActiveTablet}">
        <ul class="navbar-nav me-auto mb-2 ms-0 mb-lg-0 h-100 w-100 px-0">
          <!-- logo -->
          <li class="d-flex align-items-center pe-3">
            <div class="logo-section align-items-center justify-content-between ">
              <div class="logo logo-image">
                <link-wrapper :location="'/'">
                  <img
                    :src="$getFileSource(path)"
                    :alt="$store.state.app.settings.websiteName">
                </link-wrapper>
              </div>
              <div class="icons d-md-none d-flex align-items-center">
                <div class="mobile_only_icon_group search">
                  <a href="#" class="mt-search-icon me-4">
                    <font-awesome-icon class="text-dark " :icon="['fas', 'search']" />
                  </a>
                </div>
                <div class="mobile_only_icon_group search">
                  <a href="#" class="mt-search-icon bars-color fs-2" @click.prevent="$emit('toggleMenuMobile')">
                    <font-awesome-icon class="text-dark " :icon="['fas', 'bars']" />
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li
            v-for="(link, i) in links"
            :key="link"
            class="nav-item position-relative h-100 d-flex align-items-center"
            @mouseover="hoveredItem = i"
            @mouseleave="hoveredItem = -1">
            <LinkWrapper
              class="nav-link text-white fs-6"
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
          <!-- search -->
          <li class="d-flex align-items-center ms-auto pe-4">
            <div class="search-wrap">
              <input type="text" placeholder="搜尋活動..." class="search-input">
              <font-awesome-icon :icon="['fas', 'search']" class="search-icon" />
            </div>
          </li>
          <!-- login -->
          <li
            class="login-items nav-item position-relative h-100 d-flex align-items-center"
            @mouseover="hoveredItem = 'login'"
            @mouseleave="hoveredItem = -1">
            <!-- 尚未登入 -->
            <LinkWrapper
              class="nav-link text-white fs-6 px-0" 
              :name="'登入'"
              @click="openLoginModal" />
            <!-- 已登入 -->
            <font-awesome-icon :icon="['fas', 'user-circle']" class="text-light fs-4 me-1" />
            <LinkWrapper
              class="nav-link text-white fs-6 px-0" 
              :name="this.$store.state.user.loginStatus" />
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
  <loginModal ref="loginModal" />
</template>

<script>
import loginModal from "../../LoginModal.vue"
import SubmenuVerticalA from "../../atoms/Menu/SubmenuVerticalA.vue";
import { links } from "../../../data/links.json";
import LinkWrapper from "../../atoms/LinkWrapper/LinkWrapper.vue";

export default {
  components: {
    loginModal,
    SubmenuVerticalA,
    LinkWrapper,
  },
  data() {
    return {
      showMobileMenu: false,
      path: 'images/logos/logo-main-white.png',
      isActive: false,
      links,
      hoveredItem: -1,
      // hoveredItem: 'login',
      loggedInItems : [
          {
            "links": [
              { "location": "/member/index", "name": "會員中心" },
              { "location": "/member/order-history", "name": "訂單記錄" },
              { "location": "/member/reward", "name": "獲獎紀錄" },
              { "location": "/member/my-collection", "name": "我的收藏" },
              { "location": "/member/my-ticket", "name": "我的票券" },
              { "location": "/buy-ticket-list", "name": "購票清單" },
              { "location": "/", "name": "登出" },
            ]
          }
        ]
    };
  },
  methods: {
    openLoginModal() {
      this.$refs.loginModal.showModal();
    },
   }
};
</script>
<style lang="scss">
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
<style lang="scss">
.navbar {
  background-color: var(--primary-color);
  height: 70px;
}
.text-uppercase {
  cursor: pointer;
}
.nav-item a {
  letter-spacing: 3px;
}
// .nav-item a {
//   color: #ffff;
//   font-size: 14px !important;
//   font-weight: 500 !important;
// }
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
  top: 12px;
  margin: auto;
  left: 0;
  right: 0;
  width: 60%;
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
  transition: cubic-bezier(0.77, 0, 0.18, 1) 0.1s;
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
  left: -50px;
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
// .navbar a {
//   text-align: left;
//   box-sizing: border-box;
//   text-decoration: none;
//   background-color: transparent;
//   color: #606060;
//   font-weight: 400;
//   font-size: 14px;
// }
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
.navbar .logo img {
    max-width: 85px;
}
.search-wrap {
  position: relative;
}
.search-input {
  outline: 0;
  border: 0;
  border-radius: 24px;
  padding: 5px 35px 5px 15px;
  width: 145px;
  line-height: 35px;
  color: var(--primary-color);
}
.search-icon {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--primary-color);
}
.login-items .submenu-vertical {
    background-color: rgba(245, 116, 46, 0.4);
    & a {
      color: #fff;
    }
}
.navbar-expand-sm .navbar-nav .nav-link {
    padding: 0 6px !important;
  }

@media (max-width: 768px) {
  .navbar {
    display: none !important;
  }
}

</style>
