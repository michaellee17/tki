<template>
  <div class="d-flex flex-column">
    <span>
      Lost your password? Please enter your username or email address. You will
      receive a link to create a new password via email.
    </span>
    <basic-input-text class="my-3" />
    <ButtonFilled
      :text="'Reset password'"
      :hasRoundedCorners="true"
      class="reset_btn text-uppercase fw-bold p-2"
    />
  </div>
</template>

<script>
import BasicInputText from "../../atoms/FormInput/BasicInputText.vue";
import ButtonFilled from "../../atoms/Button/ButtonFilled.vue";
export default {
  components: {
    BasicInputText,
    ButtonFilled,
  },
};
</script>
<style scoped="scoped">
.reset_btn {
  width: 220px !important;
  height: 40px !important;
}
</style>
