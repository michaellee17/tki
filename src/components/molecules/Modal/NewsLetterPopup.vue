<template>
  <div class="modall d-flex align-items-center justify-content-center">
    <div class="container p-0 modal-newsletter bg-white position-relative">
      <div class="row d-flex flex-row">
        <div class="col-md-5 modal-img d-flex justify-content-end ">
          <img
            class="img-modal"
            src="../../../assets/images/misc/poza-popup.jpeg"
          />
        </div>
        <div
          class="col-md-7 d-flex align-items-center justify-content-center content-col"
        >
          <div class="close position-absolute" @click="$store.commit('forceCloseModal')">X</div>
          <div
            class="content d-flex flex-column justify-content-center align-items-center"
          >
            <img
              class="logo-modal"
              src="../../../assets/images/logos/logo-main.png"
            />
            <p class="modal-paragraph">
              Best Selling Multi & Single Vendor Auctions Theme
            </p>
            <h1 class="modal-title">Subscribe to our Newsletter</h1>
            <form>
              <div class="modal-email">
                  <search
                  class="top-footer-search"
                  :placeholder="'Enter your email...'"
                  required
                >
                  <span class="text-uppercase fw-bold px-2" style="font-size:12px;"
                    >Submit</span
                  >
                </search>
              </div>
              <div class="form-check mb-5">
                <basic-label
                  class="checkbox-label"
                  :title="
                    'I therefore agree to the privacy policy, terms and conditions and GDPR policy.'
                  "
                  forInput="flexCheckDefault"
                >
                  <input
                    class="form-check-input"
                    type="checkbox"
                    required
                    value=""
                    name="flexCheckDefault"
                    v-model="secBillingAddress"
                    id="flexCheckDefault"
                  />
                </basic-label>
              </div>
            </form>
            <div class="text-center">
              <span>Already a member ?</span>
              <link-wrapper :location="'/my-account'" class="log-in fw-bold ms-2">Log in</link-wrapper>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Search from "../Search/Search.vue";
import BasicLabel from "../../atoms/FormInput/BasicLabel.vue";
import LinkWrapper from '../../atoms/LinkWrapper/LinkWrapper.vue';
export default {
  components: {
    Search,
    BasicLabel,
    LinkWrapper
  },
  mounted() {
    document.cookie = "modal=true";
  },
};
</script>

<style scoped="scoped">
:deep(.top-footer-search > .btn) {
  background-color: #f2f2f2 !important;
}
.content-col {
  padding: 0px !important;
}
.logo-modal {
  width: 100px;
}
.modal-newsletter {
  max-width: 800px !important;
}
.modal-img {
  max-height: 400px;
  max-width: 300px;
}
.img-modal {
  width: 100%;
  height: auto;
}
.img-modal {
  width: 100% !important;
  height: auto !important;
}
.close {
    cursor:pointer;
    right:10px;
    top:10px;
    width: fit-content;
}
.modal-paragraph {
  color: #606060;
  font-size: 14px;
  margin: 20px 0px 15px;
}
.modal-title {
  font-size: 24px;
  color: #242424;
  margin: 15px 0px 20px;
  font-weight: 600;
}
.modal-email {
  width: 100%;
}
:deep(.menu-search) {
  box-shadow: 0 0 5px rgb(0 0 0 / 10%);
}
.content {
  padding: 0 30px;
}
.form-check {
  margin: 15px 0 0 14px;
}
.log-in {
  color: var(--primary-color) !important;
  text-decoration: none;
}
:deep(.top-footer-search > button) {
  background-color: var(--primary-color) !important;
}

@media (max-width: 767.98px) {
  .modal-img {
    display: none !important;
  }
  .modal-paragraph,
  .modal-title,
  .checkbox-label {
    text-align: center !important;
  }
}
</style>
