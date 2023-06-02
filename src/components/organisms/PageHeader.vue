<template>
  <div class="container my-md-4 py-4 py-md-0 border-md-bottom">
    <div class="row row-header">
      <div class="navbar-header col-md-3 d-flex align-items-center col-sm-12">
        <Logo @toggleMenuMobile="showMobileMenu = !showMobileMenu" />
      </div>
      <div class="first-part col-md-9 col-sm-12 align-items-center">
        <div class="row align-items-center justify-content-between">
          <div class="col-md-8 search-form-product align-items-center">
            <form action="shop" method="GET">
              <Search
                :placeholder="'Search products...'"
                :categoriesOptions="categories"
                :buttonType="'submit'"
                :selectDefault="'Categories'"
              />
            </form>
          </div>
          <div class="col-md-3 menu-products">
            <Cart />
          </div>
        </div>
      </div>
    </div>
  </div>
  <navbar></navbar>
  <transition name="grow">
    <mobile-menu-bars v-if="showMobileMenu"></mobile-menu-bars>
  </transition>
</template>
<script>
import Logo from "../atoms/Logo/Logo.vue";
import Cart from "../molecules/Cart/Cart.vue";
import Search from "../molecules/Search/Search.vue";
import Navbar from "../molecules/Navigation/Navigationbar.vue";
import MobileMenuBars from "../molecules/Mobile/MobileMenuBars.vue";

export default {
  components: { Logo, Cart, Search, Navbar, MobileMenuBars },
  data() {
    return {
      categories: [
        { value: "electronics", name: "Electronics" },
        { value: "laptops", name: "Laptops IT Products" },
        { value: "home-appliances", name: "Home Appliances" },
        { value: "phones", name: "Phones" },
        { value: "mobile-phones", name: "Mobile Phones" },
        { value: "protection-phones", name: "Cases & Protection" },
        { value: "power-bank", name: "Power Banks" },
        { value: "mobile-phone-chargers", name: "Mobile Chargers" },
        { value: "data-cables-phones", name: "Data Cables" },
        { value: "selfie-stickers", name: "Selfie Sticks" },
        { value: "tablets", name: "Tablets" },
        { value: "protection-tablets", name: "Tablets Protection" },
        { value: "console-gaming", name: "Console Gaming" },
        { value: "televisions", name: "Televisions" },
        { value: "refrigerators", name: "Refrigerators" },
        { value: "accessories", name: "Accessories" },
        { value: "sales", name: "Sales" },
      ],
      showMobileMenu: false,
    };
  },
};
</script>
<style scoped="scoped">
@media (max-width: 767.98px) {
  .menu-products,
  .search-form-product {
    display: none;
  }
  .row-header {
    display: flex;
  }
  .navbar-header {
    display: unset !important;
  }
  .border-md-bottom {
    border-bottom: 1px solid rgba(221, 221, 221, 0.49);
  }
}
</style>
