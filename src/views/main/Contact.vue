<template>
  <layout>
    <TopHeader :title="'聯絡我們'" />
    <div class="container">
      <p class="description text-center fs-5 mb-5">請將您的寶貴意見以填寫表單方式送出，我們將於工作日由專人回覆您的問題</p>
      <div class="row">
        <Form ref="form" @submit="submitForm" class="contact-form p-4 rounded col-11 col-lg-6 mx-auto">
          <p class="text-primary text-center mb-2 fs-18 ">請留下您的意見與想法，我們會有專人與您聯繫</p>
          <div class="row justify-content-between">
            <div class="col-12 col-lg-5">
              <label for="姓名" class="d-block mt-3">姓名*</label>
              <Field
                id="name" v-model="form.name" label="姓名" name="name"
                rules="required" type="text" />
              <ErrorMessage name="name" class="text-danger" />
            </div>
            <div class="col-12 col-lg-5">
              <label for="address" class="mt-3">居住縣市區域*</label>
              <Field
                id="address" v-model="form.address" label="居住縣市區域" name="address"
                rules="required" type="text" />
              <ErrorMessage name="address" class="text-danger" />
            </div>
          </div>
          <div class="row justify-content-between">
            <div class="col-12 col-lg-5">
              <label for="email" class="d-block mt-3">E-mail*</label>
              <Field
                id="email" v-model="form.email" name="email" rules="required|email"
                type="text" />
              <ErrorMessage name="email" class="text-danger" />
            </div>
            <div class="col-12 col-lg-5">
              <label for="tel" class="mt-3">電話*</label>
              <Field
                id="tel" v-model="form.tel" label="電話" name="tel"
                rules="required|numeric|min:8" type="text" />
              <ErrorMessage name="tel" class="text-danger" />
            </div>
          </div>
          <div class="row justify-content-center mt-3">
            <div class="col-12 col-lg-12">
              <label for="message" class="d-block">請留下您的需求內容以及寶貴意見*</label>
              <Field
                id="message" v-model="form.message" label="內容" as="textarea"
                name="message" rules="required" rows="3" />
              <ErrorMessage name="message" class="text-danger" />
            </div>
          </div>
          <div class="text-center">
            <button
              type="submit" 
              class="btn btn-primary link-light rounded-pill px-4 fs-18 mt-4">
              確認並送出
            </button>
          </div>
        </Form>
      </div>
    </div>
    <MessageModal ref="successModal" :success="true">
      <p class="text-center mb-0">已成功送出表單！</p>
    </MessageModal>
  </layout>
</template>

<script>
import Layout from "../../components/Layout.vue";
import TopHeader from "../../components/TopHeader.vue";
import { Form, Field, ErrorMessage } from 'vee-validate';
import { defineRule, configure } from 'vee-validate';
import { required, email, min, numeric } from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zh_TW from '@vee-validate/i18n/dist/locale/zh_TW.json';
import MessageModal from "../../components/gc/MessageModal.vue"


export default {
  components: {
    Layout, TopHeader, Form, Field, ErrorMessage, MessageModal
  },
  data() {
    return {
      form: {
        name: '',
        address: '',
        email: '',
        tel: '',
        message: ''
      }
    }
  },
  beforeCreate() {
    document.title = "聯絡我們 - T-KI";
  },
  created() {
    this.initValidate();
  },
  methods: {
    initValidate() {
      defineRule('required', required);
      defineRule('email', email);
      defineRule('min', min);
      defineRule('numeric', numeric);

      configure({
        generateMessage: localize({ zh_TW, }),
        validateOInput: true
      });

      setLocale('zh_TW');
    },
    submitForm() {
      this.$refs.form.resetForm();
      this.$refs.successModal.showModal();

      let formData = new FormData()
      Object.entries(this.form).forEach((item) => {
        formData.append(item[0], item[1]);
      })
        // const apiUrl = `${process.env.VUE_APP_PATH}/user/add-collect?event_id=${this.name}`;
        
        // this.axios.post( apiUrl, formData )
        // .then(res => console.log(res.data))
				// .catch(error => console.log(error))
    }
  }
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
    width: 100%;
    margin-top: 10px;
  }
  & textarea:focus-visible {
   outline: none;
  } 
}
</style>