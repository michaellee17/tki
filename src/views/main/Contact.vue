<template>
  <layout-default>
    <TopHeader :title="'聯絡我們'"></TopHeader>
    <div class="container">
      <p class="description text-center fs-5 mb-5">請將您的寶貴意見以填寫表單方式送出，我們將於工作日由專人回覆您的問題</p>
      <div class="row">
        <form class="contact-form p-4 rounded col-11 col-lg-6 mx-auto">
          <p class="text-primary text-center mb-4">請留下您的意見與想法，我們會有專人與您聯繫</p>
          <div class="row justify-content-between">
            <div class="col-12 col-lg-5">
              <label for="name" class="d-block">姓名*</label>
              <input type="text" id="name">
            </div>
            <div class="col-12 col-lg-5">
              <label for="address">居住縣市區域*</label>
              <input type="text" id="address">
            </div>
          </div>
          <div class="row justify-content-between">
            <div class="col-12 col-lg-5">
              <label for="email" class="d-block">E-mail*</label>
              <input type="email" id="email">
            </div>
            <div class="col-12 col-lg-5">
              <label for="tel">電話*</label>
              <input type="tel" id="tel">
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-12 col-lg-12">
              <label for="message" class="d-block">請留下您的需求內容以及寶貴意見*</label>
              <textarea name="" id="message" rows="3"></textarea>
            </div>
          </div>
        </form>
      </div>
    </div>
  </layout-default>
</template>

<script>
import LayoutDefault from "../../components/organisms/LayoutDefault/LayoutDefault.vue";
import TopHeader from "../../components/TopHeader.vue";

export default {
  components: {
    LayoutDefault, TopHeader
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
    padding: 3px 5px;
    margin-bottom: 20px;
  }
  & textarea:focus-visible {
   outline: none;
  } 
}
</style>