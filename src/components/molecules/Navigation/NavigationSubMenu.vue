<template>
  <div class="Menu fluid-container d-flex justify-content-center">
    <ul
      data-bs-placement="top"
      class="item-searched d-flex flex-column rounded ps-0 w-100 mb-0 "
    >
      <li
        class="item-found position-relative d-inline-flex align-items-center"
        v-for="(category, i) in categories"
        :key="category"
      >
        <font-awesome-icon :icon="['fas', category.icon]" />
        <linked-wrapper
          :location="category.location"
          :removeDecorations="true"
          class="ms-2"
          @mouseenter="activeIndex = i"
          @mouseleave="activeIndex = -1"
          >{{ category.name }}</linked-wrapper
        >
        <template
          v-if="category.component && category.componentProps !== undefined"
        >
          <transition name="showMenu">
            <component
              v-if="activeIndex == i"
              :is="category.component"
              v-bind="category.componentProps"
              class="menu-hover"
            ></component>
          </transition>
        </template>
      </li>
    </ul>
  </div>
</template>
<script>

import { categories } from "../../../data/categories.json";
import LinkedWrapper from "../../atoms/LinkWrapper/LinkWrapper.vue";
import SubmenuVerticalA from "../../atoms/Menu/SubmenuVerticalA.vue";
import SubmenuVerticalB from "../../atoms/Menu/SubmenuVerticalB.vue";


export default {
  components: { SubmenuVerticalA, SubmenuVerticalB, LinkedWrapper },
  data() {
    return {
      categories,
      activeIndex: -1,
    };
  },
};
</script>
<style scoped="scoped">
.item-found svg {
  width: 15px;
  color: #484848;
}
.Menu {
  box-shadow: 0 0 25px rgb(0 0 0 / 10%);
  width: 267px;
  position: absolute;
  left: 0;
  top: 100%;
  z-index: 100;
  background: white;
}
.item-found:hover > .submenuvertical {
  opacity: 1;
  visibility: visible;
}
.item-searched > li {
  padding: 15px 20px !important;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.item-searched > hr {
  margin: 0;
}
</style>
