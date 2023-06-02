<template>
  <form>
      <div class="contact-form">
      <div class="form-title d-flex flex-column">
        <span class="fw-bold fs-1">Get in Touch</span>
        <span class="subtitle fw-light fs-6 text-secondary"
          >Feel free to drop us a line below!</span
        >
        <div class="user-details justify-content-between d-flex me-5">
          <div class="col-md-6 col-input pe-3">
            <basic-input-error :error="firstNameError">
              <BasicInputText v-model="firstName" :placeholder="'Your Name'" required :hasFocus="false" />
            </basic-input-error>
          </div>
          <div class="col-md-6 col-input ps-3">
            <basic-input-error :error="emailError">
              <BasicInputText v-model="email" :placeholder="'Email Adress'" required :hasFocus="false" />
            </basic-input-error>
          </div>
        </div>

        <div class="user-message">
          <basic-input-error :error="textAreaError">
            <BasicTextArea class="fw-light user-textarea" :placeholder="'Your Message'" v-model="textArea"  />
          </basic-input-error>
        </div>
        <div class="mt-4">
          <button-filled class="send-btn text-white" :size="'small'" :text="'Send Message'"  :hasRoundedCorners="true">
            <template v-slot:default>
              <span class="me-3">Send message</span><font-awesome-icon class="fa" :icon="['fas', 'long-arrow-alt-right']" />
            </template>
          </button-filled>
        </div>
      </div>
    </div>
  </form>
</template>
<script>
import BasicInputText from "../../atoms/FormInput/BasicInputText.vue";
import BasicInputError from "../../atoms/FormInput/BasicInputError.vue";
import BasicTextArea from "../../atoms/FormInput/BasicTextArea.vue";
import ButtonFilled from "../../atoms/Button/ButtonFilled.vue";
import validateContact from "./validations/validatorContact.js";

export default {
  setup() {
    return validateContact();
  },
  components: {
    BasicInputText,
    BasicTextArea,
    ButtonFilled,
    BasicInputError,
  },
};
</script>

<style scoped="scoped">
.subtitle{
  margin-bottom:30px;
}
.contact-form {
  padding-top: 60px !important;
  padding-right: 30px;
  padding-bottom: 85px;
  padding-left: 160px;
  box-shadow: 0px 0px 25px rgb(0 0 0 / 10%);
  height: 500px;
}
.form-control {
  background-color: #efefef !important;
  box-shadow: none;
  border-radius: 10px 10px 10px 10px;
}
.send-btn {
  height:40px;
  padding:0 20px!important;
}
.user-details,
.user-textarea {
  width: 100%;
}
.user-details {
  margin-bottom: 40px;
}
.user-details {
  border: none !important;
}

@media (max-width: 767.98px) {
  .contact-form,
  .user-details {
    display: flex !important;
    flex-direction: column;
  }
  .col-input {
    padding: 0 !important;
    margin-top: 20px;
  }
  .contact-form {
    width: 100%;
    display: flex;
    padding: 30px;
  }
  .user-details > input {
    width: 290px !important;
    height: 50px;
    border-radius: 10px !important;
    border: none;
  }
  .user-textarea {
    width: 290px;
    border: none;
  }
  .user-details {
    margin-bottom: 20px;
  }
}
</style>
