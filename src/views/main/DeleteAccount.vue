<template>
  <layout>
    <TopHeader :title="'刪除帳號'" />
    <div class="container">
      <p class="description text-center fs-5 mb-5">填寫完以下表單，我們將於 5 個工作日內（不包含假日），移除會員帳號所有資訊</p>
      <div class="row justify-content-center text-secondary mb-4">
          <div class="text-center mb-2 fs-18">
            <span class="text-primary me-2"><font-awesome-icon :icon="['fas', 'exclamation-triangle']" /> </span>
            <span>提醒您：</span>
          </div>
        <ul class="col-11 col-lg-7">
          <li>帳號刪除為永久且不可逆的，成功刪除帳號後，您將無法恢復此帳號、登入或查看先前的帳號歷史紀錄</li>
          <li>成功刪除帳號後，T-KI 將繼續持有交易數據，用於財務稽核目的</li>
          <li>特定情況下，T-KI 保有拒絕申請帳號的權利</li>
        </ul>
      </div>

      <div class="row">
        <Form @submit.prevent="submitForm" class="contact-form p-4 rounded col-11 col-lg-6 mx-auto">
          <div class="row justify-content-between">
            <div class="col-12 col-lg-5">
              <label for="姓名" class="d-block mt-3">姓名*</label>
              <Field v-model="form.name" label="姓名" name="name" id="name" rules="required" type="text"/>
              <ErrorMessage name="name" class="text-danger" />
            </div>
            <div class="col-12 col-lg-5">
              <label for="address" class="mt-3">居住縣市區域*</label>
              <Field v-model="form.address" label="居住縣市區域" name="address" id="address" rules="required" type="text"/>
              <ErrorMessage name="address" class="text-danger" />
            </div>
          </div>
          <div class="row justify-content-between">
            <div class="col-12 col-lg-5">
              <label for="email" class="d-block mt-3">E-mail*</label>
              <Field v-model="form.email" name="email" id="email" rules="required|email" type="text"/>
              <ErrorMessage name="email" class="text-danger" />
            </div>
            <div class="col-12 col-lg-5">
              <label for="tel" class="mt-3">電話*</label>
              <Field v-model="form.tel" label="電話" name="tel" id="tel" rules="required|numeric|min:8" type="text"/>
              <ErrorMessage name="tel" class="text-danger" />
            </div>
          </div>
          <div class="text-center">
            <button class="btn btn-primary link-light rounded-pill px-4 fs-18 mt-4">刪除帳號</button>
          </div>
        </Form>
      </div>
    </div>
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


export default {
  components: {
    Layout, TopHeader, Form, Field, ErrorMessage
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
  mounted(){
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
      console.log('submit');
      let formData = new FormData()
      Object.entries(this.form).forEach((item) => {
        console.log(item)
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
ul > li {
  list-style-type: disc;
}

</style>