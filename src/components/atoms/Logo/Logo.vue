<template>
  <span class="sr-only"></span>
  <span class="icon-bar"></span>
  <span class="icon-bar"></span>
  <span class="icon-bar"></span>
  <div class="logo-section align-items-center justify-content-between ">
    <div class="logo logo-image">
      <link-wrapper :location="'/'">
        <img
          :src="$getFileSource(path)"
          :alt="$store.state.app.settings.websiteName"
        />
      </link-wrapper>
    </div>
    <div class="icons d-md-none d-flex align-items-center">
      <div class="mobile_only_icon_group account me-4">
        <link-wrapper location="/my-account" data-modal="modal-log-in" class="modeltheme-trigger">
          <font-awesome-icon class="text-dark" :icon="['fas', 'user']" />
        </link-wrapper>
      </div>
      <div class="mobile_only_icon_group wishlist">
        <link-wrapper class="top-payment">
          <font-awesome-icon class="text-dark me-4" :icon="['fas', 'heart']" />
        </link-wrapper>
      </div>
      <div class="mobile_only_icon_group cart">
        <link-wrapper :location="'/cart/'">
          <font-awesome-icon
            class="text-dark me-3"
            :icon="['fas', 'shopping-basket']"
          />
        </link-wrapper>
      </div>
      <div class="mobile_only_icon_group search">
        <a href="#" class="mt-search-icon me-4">
          <font-awesome-icon class="text-dark " :icon="['fas', 'search']" />
        </a>
      </div>
      <div class="mobile_only_icon_group search">
        <a href="#"  @click.prevent="$emit('toggleMenuMobile')" class="mt-search-icon bars-color fs-2">
          <font-awesome-icon class="text-dark " :icon="['fas', 'bars']" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import LinkWrapper from "../../atoms/LinkWrapper/LinkWrapper.vue";
export default {
  components: { LinkWrapper },
  data() {
    return {
      showMobileMenu: false,
      path: 'images/logos/logo-'+process.env.VUE_APP_CURRENT_THEME+'.png'
    }
  }
};
</script>
<style scoped="scoped">
@media (max-width: 767.98px) {
  .logo-section {
    display: flex;
  }
}
.bars-color  {
  color:var(--primary-color);
}
</style>
