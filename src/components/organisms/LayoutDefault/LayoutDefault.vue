<template>
  <div>
    <TopHeader/>
    <PageHeader />
    <slot> <div class="text-center p-5 m-5">No content yet.</div> </slot>

    <TopFooter />
    <Footer class="footer-top" />
    <floating-menu-mobile></floating-menu-mobile>
  </div>
</template>

<script>
import Footer from "../../molecules/Footer/Footer.vue";
import TopFooter from "../TopFooter.vue";
import TopHeader from "../TopHeader.vue";
import PageHeader from "../PageHeader.vue";
import FloatingMenuMobile from "../../molecules/Mobile/FloatingMenuMobile.vue";

export default {
  name: "Home",
  components: {
    Footer,
    TopFooter,
    PageHeader,
    TopHeader,
    FloatingMenuMobile,
  },
};
</script>
<style scoped="scoped">
.navbar .mobile_only_icon_group {
  display: none;
  float: right;
}

.navbar-header .logo img {
  max-width: 85px;
}

.footer-top {
  padding-bottom: 60px;
  padding-top: 70px;
}
</style>
