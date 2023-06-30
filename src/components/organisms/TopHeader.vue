<template>
  <!-- <div class="top-header">
    <div class="container p-0">
      <div class="row row-top-header m-0 p-0">
        <div class="col-md-7 col-sm-12 contact-header">
          <ul
            class="currency-language m-0 list-inline-block list-unstyled menu-list"
          >
            <dropdown :items="internationalization.langs"></dropdown>
          </ul>
        </div>
      </div>
    </div>
  </div> -->
  <div class="container">
    <dropdown :items="internationalization.langs" class="ps-5"></dropdown>
  </div>
</template>
<script>
import Dropdown from "../atoms/Menu/Dropdown.vue";
import internationalization from "../../data/internationalization.json";
import LinkWrapper from "../atoms/LinkWrapper/LinkWrapper.vue";

export default {
  components: { Dropdown, LinkWrapper },
  data() {
    return {
      internationalization,
    };
  },
};
</script>
<style scoped="scoped">
.contact-text {
  font-weight: 400;
}
.top-header {
  display: flex !important;
}
.top-header a {
  color: #334141 !important;
}
.account-urls > a {
  padding: 13px 0;
  margin-left: 20px;
}
.account-urls > a > svg {
  width: 14px;
  margin-right: 5px;
}
.list-inline-block > li {
  display: inline-block;
  vertical-align: middle;
}
.menu-list li:last-child {
  border-left: 1px solid #e5e5e5;
  padding-left: 10px;
}
.menu-list li:first-child a {
  border-right: 0;
  margin-right: 10px;
}
.col-md-7.col-sm-12.contact-header {
  display: flex;
  z-index: 999;
  padding-top: 13px;
  padding-bottom: 13px;
}
.header-top-contact-method {
  margin-right: 20px;
}
.account-urls {
  padding-top: 13px;
  padding-bottom: 13px;
  text-align: right;
}
.dropdown-icon {
  width: 7px !important;
  margin-left: 4px;
  opacity: 0.5 !important;
}
.account-urls,
.contact-headers {
  font-size: 14px;
  font-weight: 300;
}
.top-header span {
  color: #334141;
}
.top-header {
  border-bottom: 1px solid rgba(221, 221, 221, 0.49);
  padding: 0;
  font-size: 14px;
  line-height: 20px;
  font-weight: 300;
}
.top-header a:hover {
  opacity: 0.8;
}
.contact-icon {
  color: #334141;
}

@media (max-width: 767.98px) {
  .top-header {
    display: flex !important;
  }
  .header-top-contact-method .hide-mobile {
    display: none;
  }
  .header-top-contact-method {
    justify-content: end;
    margin: 0 !important;
  }
  .header-top-contact-method a {
    font-size: 13px !important;
  }
  .header-top-contact-methods {
    display: flex !important;
    flex-direction: row;
    text-align: end;
    align-items: center;
    justify-content: space-between;
    padding-right: 5px;
  }
  .contact-icon {
    margin-left: 25px !important;
  }
  .contact-header {
    justify-content: space-between;
    padding: 10px 5px !important;
  }

  .account-urls span,
  .account-urls {
    display: none;
  }
}
</style>
