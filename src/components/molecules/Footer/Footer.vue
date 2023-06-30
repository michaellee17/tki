<template>
  <div class="footer">
    <div class="container row justify-content-between mx-auto mb-4">
      <div class="col-12 col-md-3 mb-3">
        <img
          class="mb-2"
          :src="$getFileSource('images/logos/logo-main-white.png')"
          :alt="$store.state.app.settings.websiteName"
        />
        <br />
        <a :href="'mailto:'+ $store.state.app.contactInfo.email" class=" mb-1">{{
          $store.state.app.contactInfo.email}}
        </a>
        <a :href="'tel:' + $store.state.app.contactInfo.phoneNo.replace(/ /g,'')" class="">{{
          $store.state.app.contactInfo.phoneNo
        }}</a>
      </div>
      <div class="links col-4 col-md-2">
        <router-link to="/about" class="mb-2">關於我們</router-link> 
        <router-link to="/contact" class="mb-2">聯絡我們</router-link> 
        <router-link to="/faq" class="mb-2">常見問題</router-link> 
      </div>
      <div class="links col-4 col-md-2">
        <router-link to="/privacy-terms" class="mb-2">隱私權條款</router-link> 
        <router-link to="/service-terms" class="mb-2">服務條款</router-link>
        <router-link to="/" class="mb-2">客服時間</router-link>
      </div>
      <div class="links col-4 col-md-2">
        <p class="mb-2">追蹤我們</p>
        <!-- <router-link to="/" class="mb-2">追蹤我們</router-link> -->
        <div class="social-icons d-flex mb-2">
          <!-- Social Icons -->
          <link-wrapper
            v-for="social in $store.state.app.contactInfo.socials"
            :key="social"
            :external="true"
            :location="social.location"
          >
            <font-awesome-icon
              class="social-icon me-2"
              :icon="['fab', social.icon]"
            />
          </link-wrapper>
        </div> 
        <p class="mb-2">下載 APP</p>
      </div>
    </div>
    <p class="text-light text-center">© Copyright 2023 . T-KI All rights reserved.</p>
  </div>
</template>
<script>

// import FooterSectionLinks from "../../atoms/TitleWithHorizontalLinksList/TitleWithHorizontalLinksList.vue";
import { footerLinks1 } from "../../../data/footerLinks.json";
import { footerLinks2 } from "../../../data/footerLinks.json";
import Search from "../Search/Search.vue";
import LinkWrapper from "../../atoms/LinkWrapper/LinkWrapper.vue";

export default {
  components: { Search, LinkWrapper },
  data() {
    return {
      footerLinks1,
      footerLinks2,
      path: 'images/logos/logo-'+process.env.VUE_APP_CURRENT_THEME+'.png'
    };
  },
};
</script>

<style scoped="scoped" lang="scss">

.copyright{
  padding:20px;
}
.copyright-text{
  padding:7px 0;
}
span.text-secondary {
  line-height: 183%;
}
.copyright {
  background-color: #f8f8f8;
}
.copyright span {
  font-size: 14px;
}
.social-icons a {
  color: var(--primary-color) !important;
}
.subscribe {
  margin: 0 0 19px !important;
}
@media (max-width: 768px) {
  .copyright {
    /* margin-bottom: 40px !important; */
    margin-bottom: 65px;
  }
}
.menu-search span {
  font-size: 13px;
}

.footer img {
  width: 100px;
}
.searchfooter {
  background-color: var(--primary-color);
}
.search-form-product {
  background-color: #ffff;
  border-radius: 20px 20px 20px 20px;
  box-shadow: 0 0 25px rgb(0 0 0 / 10%);
}
.btn.btn-primary {
  background: #484848;
  float: right;
  line-height: 40px;
  padding: 0;
  border-radius: 30px;

  padding-right: 10px;
  padding-left: 10px;
  height: 42px;
  position: relative;
  box-shadow: none;
}

.btn {
  font-weight: 400;
  text-align: center;

  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  white-space: nowrap;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  border-radius: 4px;
  outline: 0;
}
.menu-search .search-field {
  background-color: #fff;
  border: 0;
  outline: 0;
  border-left: 0.5px solid #ddd;
  line-height: 40px;
  padding-left: 24px;
  height: 32px;
  color: #606060;
  width: 59%;
  font-size: 14px;
  font-weight: 300;
  max-width: 100%;
  border-radius: 20px 20px 20px 20px;
}
.footer {
  background-color: var(--primary-color);
  padding-bottom: 1rem;
  padding-top: 3rem;
  margin-top: auto;
}
.footer :is(a, p) {
  color: #fff !important;
  // text-decoration: none;
  display: block;
}
.footer a:hover {
  color: var(--bs-gray-700)!important;
}
 
.footer .links :is(a, p) {
  font-size: 16px;
  letter-spacing: 4px;
}

/* @media (max-width: 767.98px) {
  .row {
    display: block !important;
  }
  .col {
    margin-top: 20px;
  }
} */

</style>
