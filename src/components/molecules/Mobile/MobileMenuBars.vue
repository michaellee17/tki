<template>
  <div class="d-flex flex-column">
    <div class="categories d-flex align-items-center">
      <linked-wrapper
        class="mt-search-icon"
        @click.prevent="expanded = !expanded"
      >
        <font-awesome-icon class="text-dark" :icon="['fas', 'bars']" />
        <span class="text-uppercase fw-bold ms-2">categories</span>
      </linked-wrapper>
    </div>
    <transition name="showMenu">
      <ul class="categories-list list-unstyled ps-2" v-if="expanded">
        <li
          class="d-flex align-items-center border-bottom p-2"
          v-for="category in categories"
          :key="category"
        >
          <link-wrapper :location="category.location" :removeDecorations="true">
            <font-awesome-icon :icon="['fas', category.icon]" />
            <span class="ms-2">{{ category.name }}</span>
          </link-wrapper>
        </li>
      </ul>
    </transition>
    <ul class="categories-list list-unstyled">
      <li
        class="categories-list border-bottom p-2"
        v-for="(link, i) in links"
        :key="link"
      >
        <span class="d-flex justify-content-between">
          <link-wrapper :location="link.location" :removeDecorations="true">
            {{ link.name }}
          </link-wrapper>
          <font-awesome-icon
            @click.prevent="
              currentActiveDropdownMenu === i
                ? (currentActiveDropdownMenu = -1)
                : (currentActiveDropdownMenu = i)
            "
            v-if="link.component === 'SubmenuVerticalA'"
            :icon="['fas', 'angle-down']"
          />
        </span>

        <transition name="showMenu">
          <template v-if="i === currentActiveDropdownMenu">
            <ul
              class="categories-list list-unstyled"
              v-if="link.component === 'SubmenuVerticalA'"
            >
              <template v-for="item in link.componentProps.items" :key="item">
                <li
                  v-for="itemLink in item.links"
                  :key="itemLink"
                  class="categories-list d-flex justify-content-between align-items-center p-2"
                >
                  <link-wrapper
                    :location="itemLink.location"
                    :removeDecorations="true"
                  >
                    <span>{{ itemLink.name }}</span>
                  </link-wrapper>
                </li>
              </template>
            </ul>
          </template>
        </transition>
      </li>
    </ul>
  </div>
</template>
<script>

import LinkWrapper from "../../atoms/LinkWrapper/LinkWrapper.vue";
import { categories } from "../../../data/categories.json";
import { links } from "../../../data/links.json";

export default {
  components: { LinkWrapper },
  data() {
    return {
      currentActiveDropdownMenu: -1,
      expanded: false,
      categories,
      links,
    };
  },
};
</script>
<style scoped="scoped">
.categories-list li .svg-inline--fa:not(.fa-angle-down) {
  height: 10px;
  width: 10px;
}
.categories-list li:not(:last-child) {
  border-bottom: 1px solid #dee2e6;
}
.categories-list span {
  font-size: 13px;
  color: #8b8b8a;
  font-weight: 500 !important;
}
.categories {
  box-shadow: 0px 0px 25px rgb(0 0 0 / 10%);
  padding: 10px 15px;

  height: 50px;
}
.svg-inline--fa.fa-w-10 {
  width: 0.8em;
  height: 1.5em;
}
@media screen and (max-width: 767px) {
  .categories-list > li {
    padding: 12px 10px !important;
  }
}
</style>
