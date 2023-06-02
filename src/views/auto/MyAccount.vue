<template>
  <layout-default>
    <div class="container account-page">
      <div class="container my-account-page d-flex flex-column">
        <div class="my-account-page-location">
          <div class="my-account-breadcrumb border-bottom">
            <Breadcrumb />
            <h1 class="my-account-title text-dark">My account</h1>
          </div>
        </div>
        <div class="my-account d-flex justify-content-center  flex-wrap">
          <div class="col-md-6 my-account-login">
            <div class="text-center text-dark fw-bold fs-2 mb-4">Login</div>
            <FormLogin />
          </div>
          <div class="col-md-6 my-account-register">
            <div class="text-center text-dark fw-bold fs-2 mb-4">Register</div>
            <FormRegister />
          </div>
        </div>
      </div>
    </div>
  </layout-default>
</template>

<script>
import Breadcrumb from "../../components/atoms/Breadcrumb/Breadcrumb.vue";
import LayoutDefault from "../../components/organisms/LayoutDefault/LayoutDefault.vue";
import FormLogin from "../../components/molecules/Form/FormLogin.vue";
import FormRegister from "../../components/molecules/Form/FormRegister.vue";

export default {
  beforeCreate() {
    document.title = "My Account - iBid";
  },
  components: { LayoutDefault, FormLogin, FormRegister, Breadcrumb },
  mounted() {
    this.$store.commit("setLocation", [
      { title: "My Account", location: "/my-account" },
    ]);
  },
};
</script>
<style scoped="scoped">
.account-page {
  padding-top: 50px;
  padding-bottom: 50px;
}
.my-account-login,
.my-account-register {
  padding: 50px 0;
}
.my-account-login {
  padding-right: 50px;
}
.my-account-register {
  padding-left: 50px; 
}
.my-account-breadcrumb {
  padding-top: 40px;
  padding-bottom: 40px;
}
.my-account-title{
  font-weight:600;
}
@media screen and (max-width: 768px) {
  .my-account{
    display:block!important;
  }
  .my-account-breadcrumb {
    padding-top: 15px;
    padding-bottom: 15px;
  }
  .account-page {
    padding: 0px !important;
    display: flex !important;
    flex-direction: column !important;
  }
  .login-input {
    width: 270px !important;
  }
  .my-account-breadcrumb {
    width: 350px;
  }
  .col-md-6 {
    padding: 35px 0px 0px 0px;
  }
  .my-account-register {
  padding-bottom: 70px;
  }
}
@media (min-width: 768px) and (max-width: 1024px) {
  .account-page {
    padding: 50px 10px !important;
  }
  :deep(.my-account > .my-account-register .my-account-login) {
    padding: 0 !important;
  }
  .my-account {
    justify-content: space-between !important;
  }

  .my-account-page,
  .my-account {
    padding: 0px !important;
  }
}
</style>
