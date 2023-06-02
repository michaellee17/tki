<template>
  <form class="login-form d-flex flex-column border p-4 p-md-5">
    <div class="">
      <BasicLabel title="Username" :required="true" class="fw-bold" />
      <BasicInputText
        :hasRoundedCorners="true"
        class="login-input"
        :placeholder="'Username'"
        required
      />
    </div>
    <div class="login-field">
      <BasicLabel title="Email adress" :required="true" class="fw-bold" />
      <BasicInputText
        :hasRoundedCorners="true"
        class="login-input"
        :placeholder="'Email'"
        required
      />
    </div>
    <div class="login-field-last">
      <BasicLabel title="Password" :required="true" class="fw-bold" />
      <BasicInputText
        :hasRoundedCorners="true"
        class="login-input"
        type="password"
        required
        :placeholder="'Password'"
      />
    </div>

    <div class="form-check my-3 mt-4">
      <basic-label
        :title="'I am a vendor'"
        class="fw-bold"
        :forInput="'flexCheckVendor'"
      >
        <template v-slot:before>
          <input
            class="form-check-input"
            type="checkbox"
            id="flexCheckVendor"
            name="flexCheckVendor"
          />
        </template>
      </basic-label>

    </div>

    <ButtonFilled
      class="Minicart_button fw-bold text-white"
      :text="'Register'"
      :hasRoundedCorners="true"
    />
  </form>
</template>

<script>
import ButtonFilled from "../../atoms/Button/ButtonFilled.vue";
import BasicInputText from "../../atoms/FormInput/BasicInputText.vue";
import BasicLabel from "../../atoms/FormInput/BasicLabel.vue";

export default {
  components: {
    ButtonFilled,
    BasicInputText,
    BasicLabel,
  },
};
</script>
<style scoped="scoped">
.customer-checkbox {
  margin-top: 10px;
}
.login-input {
  height: 40px !important;
  padding: 10px 20px !important;
  box-shadow: none !important;
  margin-top: 10px;
}
.form-check {
  padding-left: 27px !important;
}
.login-field,
.login-field-last {
  margin-top: 30px !important;
}

.Minicart_button {
  width: 150px !important;
  height: 40px !important;
}
@media screen and (max-width: 768px) {
  .login-input {
    width: 100% !important;
  }
}
@media (min-width: 768px) and (max-width: 1024px) {
  .login-input {
    width: 250px !important;
  }
  .form-check-input input {
    width: 15px !important;
  }
}
</style>
