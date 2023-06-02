<template>
  <div class="row menu-mobile d-flex justify-content-around w-100 m-0 ">
    <link-wrapper :location="'/search'" class="col-3 link-color border-end">
      <div class=" d-flex flex-column mobile-menu-item align-items-center  ">
        <font-awesome-icon class="fa-2x p-2 " :icon="['fas', 'search']" />
        <span>Search</span>
      </div>
    </link-wrapper>
    <link-wrapper :location="'/cart'" class="col-3 link-color border-end">
      <div class=" d-flex flex-column mobile-menu-item align-items-center ">
        <font-awesome-icon
          class="fa-2x p-2 "
          :icon="['fas', 'shopping-cart']"
        />
        <span>Cart</span>
      </div>
    </link-wrapper>

    <link-wrapper :location="'/shop'" class="col-3 link-color border-end">
      <div class="d-flex flex-column mobile-menu-item align-items-center">
        <font-awesome-icon class="fa-2x p-2 " :icon="['fas', 'heart']" />
        <span>Wishlist</span>
      </div>
    </link-wrapper>

    <link-wrapper :location="'/my-account'" class="col-3 link-color ">
      <div class="d-flex flex-column mobile-menu-item align-items-center">
        <font-awesome-icon class="fa-2x p-2 " :icon="['fas', 'user']" />
        <span>Account</span>
      </div>
    </link-wrapper>
  </div>
</template>
<script>

import LinkWrapper from "../../atoms/LinkWrapper/LinkWrapper.vue";
export default {
  components: { LinkWrapper },
};
</script>
<style scoped="scoped">
.menu-mobile {
  background-color: #ffffff;
  overflow: hidden;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;
}
.link-color {
  color:initial;
  text-decoration: none;
}
.p-2 {
  padding: 0.3rem !important;
}
.col-3 span {
  font-size: 12px !important;
  font-weight: 300 !important;
}
@media (max-width: 767.98px) {
.mobile-menu-item{
  padding:5px 0!important;
}
.mobile-menu-item span{
  font-weight:300;
}
}
@media screen and (min-width: 1024px) {
  .menu-mobile {
    display: none !important;
  }
}
@media screen and (min-width: 1600px) {
  .menu-mobile {
    display: none !important;
  }
}
@media screen and (min-width: 1900px) {
  .menu-mobile {
    display: none !important;
  }
}
</style>
