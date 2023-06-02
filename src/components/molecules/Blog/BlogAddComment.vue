<template>
  <div class="blog-add-comment">
    <div class="add-comment">
      <span class="add-comment-title fw-bold">Leave a comment</span>
    </div>
    <basic-input-error :error="textAreaError"
      ><BasicTextArea
        class="comment-textarea form-control fw-light"
        cols="45"
        rows="5"
        v-model="textArea"
        :placeholder="'Your message...'"
    /></basic-input-error>
    <div class="comment-inputs d-flex justify-content-between">
      <div class="details-input col-md-4 col-12">
        <basic-input-error :error="nameError"
          ><BasicInputText
            class="comment-input mt-4"
            v-model="name"
            :placeholder="'Your Name'"
        /></basic-input-error>
      </div>
      <div class="details-input col-md-4 col-12">
        <basic-input-error :error="emailError"
          ><BasicInputText
            class="comment-input mt-4"
            v-model="email"
            :placeholder="'Your Email'"
        /></basic-input-error>
      </div>
      <div class="details-input col-md-4 col-12">
        <basic-input-error :error="websiteError"
          ><BasicInputText
            class="comment-input mt-4"
            v-model="website"
            :placeholder="'Your Website'"
        /></basic-input-error>
      </div>
    </div>
    <div class="d-flex justify-content-end mt-4">
      <ButtonFilled
        class="add-comment-btn fw-bold text-uppercase text-white"
        :hasRoundedCorners="true"
        @click="validateComment"
        :name="'add comment'"
        text="add comment"
      />
    </div>
  </div>
</template>

<script>
import BasicTextArea from "../../atoms/FormInput/BasicTextArea.vue";
import BasicInputText from "../../atoms/FormInput/BasicInputText.vue";
import ButtonFilled from "../../atoms/Button/ButtonFilled.vue";
import BasicInputError from "../../atoms/FormInput/BasicInputError.vue";
import validateComment from "../../../composables/validatorAddComment.js";
// todo mutat in form
export default {
  components: {
    BasicTextArea,
    BasicInputText,
    ButtonFilled,
    BasicInputError,
  },
  setup() {
    return validateComment();
  },
  data() {},
};
</script>
<style scoped="scoped">
.blog-add-comment {
  padding: 40px 0 20px;
}
.add-comment {
  padding: 15px 0;
}

.add-comment-title {
  font-size: 25px;
}
.add-comment-btn {
  width: 180px !important;
  padding: 10px !important;
  margin-top: 10px;
}
.comment-textarea {
  border-radius: 30px;
  margin: 15px 0 !important;
  box-shadow: 0px 0px 25px rgb(0 0 0 / 10%);
  padding: 15px 25px !important;
}
.comment-input {
  background-color: #ffff !important;
  box-shadow: 0px 0px 25px rgb(0 0 0 / 10%);
  border: 0;
  padding: 15px 10px !important;
  border-radius: 45px;
}
.comment-textarea::placeholder {
  font-size: 14px;
  line-height: 1.5;
}
.details-input {
  width: 30%;
}
.details-input input {
  padding: 15px 25px !important;
}
.details-input input:focus {
  border: none !important;
  box-shadow: 0px 0px 25px rgb(0 0 0 / 10%) !important;
}

@media (max-width: 767.98px) {
  .comment-inputs {
    display: block !important;
  }
  .details-input {
    width: 100% !important;
  }
}
</style>
