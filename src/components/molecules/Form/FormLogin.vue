<template>
  <div class="login-form d-flex flex-column border p-4 p-md-5">
    <form>
      <div class="register-field">
        <BasicLabel
          title="Username or email adress"
          :required="true"
          class="fw-bold"
        />
        <BasicInputText
          :hasRoundedCorners="true"
          class="login-input"
          required
          :placeholder="'Username'"
        />
      </div> 
      <div class="register-field-last mb-0">
        <BasicLabel title="Password" class="fw-bold" :required="true" />
        <BasicInputText
          :hasRoundedCorners="true"
          class="login-input"
          type="password"
          required
          :placeholder="'Password'"
        />
      </div>

      <div class="d-flex flex-row align-items-start my-3">
        <basic-label :title="'Remember Me'" class="fw-bold" :forInput="'rememberMe'">
          <template v-slot:before>
            <input
              class="form-check-input me-2"
              type="checkbox"
              value=""
              id="rememberMe"
              name="rememberMe"
            />
          </template>
        </basic-label>
      </div>

      <ButtonFilled
        class=" Minicart_button fw-bold text-white"
        :text="'Log In'"
        :hasRoundedCorners="true"
      />
    </form>
    <!-- <link-wrapper
      :location="'/blog'"
      class="text-decoration-none text-dark fs-6 mt-3 fw-bold"
    >
      <span>Lost Your Password ?</span>
    </link-wrapper> -->
  </div>
</template>

<script>
import ButtonFilled from "../../atoms/Button/ButtonFilled.vue";
// import LinkWrapper from "../../atoms/LinkWrapper/LinkWrapper.vue";
import BasicLabel from "../../atoms/FormInput/BasicLabel.vue";
import BasicInputText from "../../atoms/FormInput/BasicInputText.vue";

export default {
  components: {
    ButtonFilled,
    // LinkWrapper,
    BasicLabel,
    BasicInputText,
  },
};
</script>
<style scoped="scoped">
.login-input {
  height: 40px !important;
  padding: 10px 20px !important;
  box-shadow: none !important;
  margin-top: 10px;
}
.Minicart_button {
  height: 40px !important;
  width: 150px !important;
}
.register-field-last {
  margin-top: 30px !important;
}
.register-field-last {
  margin-bottom: 35px;
}

@media screen and (max-width: 768px) {
  .login-input {
    width: 100% !important;
  }
  .my-account-register {
    padding: 0px !important;
  }
}
@media (min-width: 768px) and (max-width: 1024px) {
  .login-input {
    width: 250px !important;
  }
  .form-check-input {
    width: 15px !important;
  }
}
</style>
