<template>
  <layout>
    <TopHeader :title="'FAQ'"></TopHeader>
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-12 col-md-3">
          <!-- <ul class="faq-category">
            <li class="active">基本操作</li>
            <li>用戶</li>
            <li>主辦方</li>
            <li>平台服務</li>
          </ul> -->
          <ul class="faq-category" >
            <li v-for="faqCategory in faqCategories" :key="faqCategory.class_id" 
            :class="{ 'active' : faqCategory.class_id === classId }" @click="changeFaq(faqCategory.class_id)">
              {{ faqCategory.class_name }}
            </li>
          </ul>
        </div>
        <div class="col-12 col-md-8">
          <div class="accordion">
            <div class="accordion-item" v-for="faq in faqs" :key="faq.faq_id">
              <h2 :id="'heading' + faq.faq_id" class="accordion-header">
                <button
                  class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="'#collapse' +  faq.faq_id" 
                  aria-expanded="true" :aria-controls="'collapse' +  faq.faq_id">
                  {{ faq.faq_name }}
                </button>
              </h2>
              <div :id="'collapse' +  faq.faq_id" class="accordion-collapse collapse" :aria-labelledby="'heading' + faq.faq_id" data-bs-parent="#accordionExample">
                <div class="accordion-body" v-html="faq.content">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </layout>
</template>
  
  <script>
  import Layout from "../../components/Layout.vue";
  import TopHeader from "../../components/TopHeader.vue";
  import "bootstrap/dist/js/bootstrap.bundle";
  export default {
    data() {
      return {
        faqCategories: [],
        classId: 1,
        faqs: []
      }
    },
    components: {
      Layout, TopHeader
    },
    created() {
      document.title = "常見問題 - T-KI";
    },
    mounted() {
      this.getFaqCategories();
      this.getFaqs();
    },
    methods: {
      getFaqCategories() {
        this.axios.get(`${process.env.VUE_APP_PATH}/FAQ/get-class`)
        .then(res => { 
          if (res.data.status_code === 'SYSTEM_1000') {
            this.faqCategories = res.data.data;
          }
        });
      },
      getFaqs() {
        this.axios.get(`${process.env.VUE_APP_PATH}/FAQ/get-list?class_id=${this.classId}`)
        .then(res => { 
          if (res.data.status_code === 'SYSTEM_1000') {
            this.faqs = res.data.data;
          }
        });
      },
      changeFaq(id) {
        this.classId = id;
        this.getFaqs();
      }
    }
  };
  </script>
  <style scoped lang="scss">
  .faq-category {
    padding-left: 0;
  }
 .faq-category li {
  list-style-type: none;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  font-size: 1.25rem;
  font-weight: 500;
  &:hover, &.active {
    cursor: pointer;
    color: #fff;
    background-color: var(--primary-color);
    border: 1px solid var(--primary-color); 
  }
 }
 .accordion-button {
  font-size: 1.25rem;
  font-weight: bold;
  padding: 1.5rem 1.25rem;
}
@media (max-width: 768px) {
  .faq-category {
    margin-bottom: 3rem;
  }
}
  </style>
  