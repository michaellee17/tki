<template>
  <div class="container footer footer-top ">
    <div class="row row-footer">
      <div class="col">
        <img
          class="mb-2"
          :src="$getFileSource(path)"
          :alt="$store.state.app.settings.websiteName"
        />
        <br />
        <a :href="'mailto:'+ $store.state.app.contactInfo.email" class="text-secondary text-decoration-none d-block mb-1">{{
          $store.state.app.contactInfo.email
        }}</a
        >
        <a :href="'tel:' + $store.state.app.contactInfo.phoneNo.replace(/ /g,'')" class="text-secondary text-decoration-none">{{
          $store.state.app.contactInfo.phoneNo
        }}</a>
        <div class="social-icons mt-2">
          <!-- Social Icons -->
          <link-wrapper
            v-for="social in $store.state.app.contactInfo.socials"
            :key="social"
            :external="true"
            :location="social.location"
          >
            <font-awesome-icon
              class="social-icon me-4"
              :icon="['fab', social.icon]"
            />
          </link-wrapper>

          <!--  -->
        </div>
      </div>

      <FooterSectionLinks v-bind="footerLinks1" />
      <FooterSectionLinks v-bind="footerLinks2" />

      <div class="col">
        <h6 class=" subscribe fs-4 fw-bold ">Subscribe to our Newsletter</h6>
        <ul class="list-unstyled">
          <li class="mb-1 w-100"></li>
          <search class="top-footer-search" :placeholder="'Enter your email...'">
            <span class="text-uppercase fw-bold px-2" style="font-size:12px;"
              >Submit</span
            >
          </search>
        </ul>
      </div>
    </div>
  </div>

  <div class="copyright">
    <div class="container">
      <div class=" d-flex justify-content-between ">
        <div class="copyright-text">Copyright by ModelTheme.All Rights Reserved</div>
        <div class="copyright-text">Elite Author on ThemeForest.</div>
      </div>
    </div>
  </div>
</template>
<script>

import FooterSectionLinks from "../../atoms/TitleWithHorizontalLinksList/TitleWithHorizontalLinksList.vue";
import { footerLinks1 } from "../../../data/footerLinks.json";
import { footerLinks2 } from "../../../data/footerLinks.json";
import Search from "../Search/Search.vue";
import LinkWrapper from "../../atoms/LinkWrapper/LinkWrapper.vue";

export default {
  components: { FooterSectionLinks, Search, LinkWrapper },
  data() {
    return {
      footerLinks1,
      footerLinks2,
      path: 'images/logos/logo-'+process.env.VUE_APP_CURRENT_THEME+'.png'
    };
  },
};
</script>

<style scoped="scoped">
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
@media (max-width: 767.98px) {
  .copyright {
    margin-bottom: 40px !important;
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
@media (max-width: 767.98px) {
  .row {
    display: block !important;
  }
  .col {
    margin-top: 20px;
  }
}

</style>
