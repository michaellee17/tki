<template>
  <layout>
    <TopHeader :title="'聯絡我們'" />
    <div class="container">
      <p class="description text-center fs-5 mb-5">請將您的寶貴意見以填寫表單方式送出，我們將於工作日由專人回覆您的問題</p>
      <div class="row">
        <form class="contact-form p-4 rounded col-11 col-lg-6 mx-auto">
          <p class="text-primary text-center mb-4 fs-18 ">請留下您的意見與想法，我們會有專人與您聯繫</p>
          <div class="row justify-content-between">
            <div class="col-12 col-lg-5">
              <label for="name" class="d-block">姓名*</label>
              <!-- <ValidationProvider v-slot="{ errors }">
                <input id="name" v-model="value" type="text">
                <span>{{ errors[0] }}</span>
              </ValidationProvider> -->
            </div>
            <div class="col-12 col-lg-5">
              <label for="address">居住縣市區域*</label>
              <input id="address" type="text">
            </div>
          </div>
          <div class="row justify-content-between">
            <div class="col-12 col-lg-5">
              <label for="email" class="d-block">E-mail*</label>
              <input id="email" type="email">
            </div>
            <div class="col-12 col-lg-5">
              <label for="tel">電話*</label>
              <input id="tel" type="tel">
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-12 col-lg-12">
              <label for="message" class="d-block">請留下您的需求內容以及寶貴意見*</label>
              <textarea id="message" name="" rows="3" />
            </div>
          </div>
          <div class="text-center">
            <button class="btn btn-primary link-light rounded-pill px-4 fs-18">確認並送出</button>
          </div>
        </form>
      </div>
    </div>
  </layout>
</template>

<script>
import Layout from "../../components/Layout.vue";
import TopHeader from "../../components/TopHeader.vue";
import { defineRule } from 'vee-validate';

export default {
  components: {
    Layout, TopHeader, 
  },
  beforeCreate() {
    document.title = "聯絡我們 - T-KI";
  },
};
</script>

<style scoped lang="scss">

.description {
  letter-spacing: 2px;
}
.contact-form {
  background-color: #F5742E0F;
  box-shadow: 0px 3px 6px #00000029;
  & input, textarea {
    border: 1px solid var(--primary-color);
    border-radius: 5px;
    margin-top: 10px;
    width: 100%;
    margin-bottom: 20px;
  }
  & textarea:focus-visible {
   outline: none;
  } 
}
</style>