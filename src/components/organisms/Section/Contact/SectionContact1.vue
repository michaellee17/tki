<template>
  <Heading :title="'NEED HELP? CONTACT US'" />
  <div class="container d-md-flex align-items-center bg-white d-block w-100">
    <div class="row d-flex">
      <div class="col col-md-6 col-lg-6 d-md-flex mt-5 d-none">
        <div class="contact-image">
          <img :src="$getFileSource('images/contact/map.png')" alt="US map" />
        </div>
      </div>
      <form class="col contact-form col-md-6 col-lg-6">
        <div class="Contact row mx-auto mt-5 p-5">
          <div class="col-md-6 mb-4">
            <basic-label title="First Name:" :required="true">
              <BasicInputText
                class="form-control border-0 border-bottom rounded-0 border-anim"
                name="firstNameInput"
                v-model="firstName"
                :required="true"
                type="text"
                :hasFocus="false"
              />
            </basic-label>
            <span class="text-danger">{{ firstNameError }}</span>
          </div>
          <div class="col-md-6 mb-4">
            <basic-label title="Last Name:">
              <BasicInputText
                class="form-control border-0 border-bottom rounded-0 border-anim"
                name="lastNameInput"
                v-model="lastName"
                type="text"
                :hasFocus="false"
              />
            </basic-label>
            <span class="text-danger">{{ lastNameError }}</span>
          </div>
          <div class="col-md-6 mb-4">
            <basic-label title="Email:" :required="true">
              <BasicInputText
                class="form-control border-0 border-bottom rounded-0 border-anim"
                name="emailInput"
                v-model="email"
                type="email"
                :hasFocus="false"
                :required="true"
              />
            </basic-label>
            <span class="text-danger">{{ emailError }}</span>
          </div>
          <div class="col-md-6 mb-4">
            <basic-label title="Subject:" :required="true">
              <BasicInputText
                class="form-control border-0 border-bottom rounded-0 border-anim"
                name="subjectInput"
                v-model="subject"
                type="text"
                :hasFocus="false"
              />
            </basic-label>
            <span class="text-danger">{{ subjectError }}</span>
          </div>
          <div class="col-md-12 mb-4">
            <basic-label title="Your message:" :required="true">
              <textarea
                v-model="textArea"
                class="form-control border-0 border-bottom rounded-0 border-anim"
                id="exampleFormControlTextarea1"
                rows="3"
                :required="true"
              ></textarea>
            </basic-label>
            <span class="text-danger">{{ textAreaError }}</span>
          </div>
          <div class="col-md-12">
            <button-filled
              class="btn-submit text-white"
              :size="'small'"
              :hasRoundedCorners="true"
            >
              <span class="me-1 fs-6">SEND MESSAGE</span>
              <font-awesome-icon
                class="fa"
                :icon="['fas', 'long-arrow-alt-right']"
              />
            </button-filled>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Heading from "../../../atoms/SectionHeading/Heading.vue";

import ButtonFilled from "../../../atoms/Button/ButtonFilled.vue";
import BasicInputText from "../../../atoms/FormInput/BasicInputText.vue";
import BasicLabel from "../../../atoms/FormInput/BasicLabel.vue";
import validateContact from "../../../molecules/Form/validations/validatorContact.js";
//todo mutat in folderul form

export default {
  components: { Heading, ButtonFilled, BasicInputText, BasicLabel },
  setup() {
    return validateContact();
  },
};
</script>

<style scoped="scoped">
textarea {
  padding-left:20px;
}
.Contact {
  width: 100%;
  box-shadow: 0 0 25px rgb(0 0 0 / 10%);
  background: white;
}
.btn {
  background-color: var(--primary-color);
  color: #ffff;
}
.btn:hover {
  background-color: #ffff;
  box-shadow: 0 0 25px rgb(0 0 0 / 10%);
}
.btn:hover span,
.btn:hover svg {
  color: var(--primary-color);
}
.fa {
  height: 15px;
  color: #ffff;
}
input,
textarea {
  outline: none;
  box-shadow: none !important;
}
.contact-image img {
  width: stretch;
  max-width: 650px;
  height: auto;
}
.contact-image {
  margin-top: 5%;
  width: stretch;
}
.btn-submit {
  width: 100%;
}
@media (max-width: 767.98px) {
  .contact-image {
    display: none;
  }
  .contact-form {
    padding: 0 !important;
  }
}
@media (min-width: 768px) and (max-width: 1024px) {
  .contact-image img {
    width: 450px !important;
  }
  .Contact {
    width: 450px;
  }
}
</style>
