<template>
  <nav class="navbar navbar-expand-sm p-0">
    <div class="container justify-content-start">
      <div class="nav-item dropdown list-unstyled d-none d-lg-block">
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
      </div>

      <div class="navbar w-100 p-0" :class="{'show' :isActiveTablet}">
        <ul class="navbar-nav me-auto mb-2 ms-0 ms-lg-4 mb-lg-0 h-100 w-100">
          <li
            class="nav-item position-relative h-100 d-flex align-items-center"
            v-for="(link, i) in links"
            :key="link"
            @mouseover="hoveredItem = i"
            @mouseleave="hoveredItem = -1"
          >
            <LinkWrapper
              class="nav-link text-white fs-6 mx-2"
              :location="link.location"
              :name="link.name"
              :external="link.external"
              :target="link.target"
            />
            <template
              v-if="link.component && link.componentProps !== undefined"
            >
              <transition name="showMenu">
                <component
                  v-show="hoveredItem === i"
                  :is="link.component"
                  v-bind="link.componentProps"
                  class="menu-hover"
                ></component>
              </transition>
            </template>
          </li>

          <li
            class="nav-item position-relative h-100 d-flex align-items-center ms-auto"
          >
            <LinkWrapper
              class="nav-link text-white fs-6 px-0"
              location="/my-account"
              :name="'Sign in'"
            />
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import NavigationSubMenu from "./NavigationSubMenu.vue";
import SubmenuVerticalA from "../../atoms/Menu/SubmenuVerticalA.vue";
import SubmenuVerticalB from "../../atoms/Menu/SubmenuVerticalB.vue";
import { links } from "../../../data/links.json";
import LinkWrapper from "../../atoms/LinkWrapper/LinkWrapper.vue";

export default {
  components: {
    NavigationSubMenu,
    SubmenuVerticalA,
    SubmenuVerticalB,
    LinkWrapper,
  },
  data() {
    return {
      isActive: false,
      links,
      hoveredItem: -1,
    };
  },
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
<style scoped="scoped">
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
/* .nav-item a:active{
  text-decoration: overline;
}
.nav-item a:hover{
  text-decoration:overline;
  animation: ease-in;
  transition: 2s;
} */
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

.nav-item > .menu-hover {
  top: 100%;
  left: 0;
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
/*  */
@media (max-width: 767.98px) {
  .navbar {
    display: none !important;
  }
}

</style>
