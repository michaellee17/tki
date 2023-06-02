<template>
  <div class="about-jumbotron p-5">
    <div class="container d-flex justify-content-end">
      <div class="about-container bg-light p-4 d-flex flex-column w-50 justify-content-end">
      <div class="about-inner-container">
        <h1 class="about-us-title text-uppercase fw-bold">{{ title }}</h1>
        <div
          class="fw-light text-secondary fs-6 text-container"
          v-html="text"
        ></div>
      </div>

        <div>
          <ButtonFilled
          class=" Minicart_button mt-3 "
          :text="'Read More'"
          :hasRoundedCorners="true"
          :location="buttonLocation"
        />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ButtonFilled from "../../atoms/Button/ButtonFilled.vue";
export default {
  components: {
    ButtonFilled,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    buttonLocation: {
      type: String,
      required: true,
    },
  },
};
</script>
<style scoped="scoped">
.about-jumbotron {
  padding: 130px 0px !important;
  width: 100%;
  background-image: url("../../../assets/images/misc/about-business-pic.jpg");
  background-size: cover;
  background-position: center;
}
.fs-2 {
  color: #484848;
}
.about-container {
  padding: 40px 48px 48px 50px !important;
}

.text-container {
  margin: 17px 0;
}
.Minicart_button {
  width: fit-content;
}

@media (max-width: 767.98px) {
  .about-container {
    width: 100% !important;
  }
  .Minicart_button {
    width:100%;
  }
}
</style>
