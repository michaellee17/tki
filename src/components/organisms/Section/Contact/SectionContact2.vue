<template>

  <div class="contact-section2  p-0">
    <div class="col-sm-12 p-0 col-info">
      <div class="contact-info position-absolute">
        <ContactInfo />
      </div>
    </div>
    <div class="col-sm-12 col-form ">
      <div class="contact-form">
        <ContactForm class="contact-page-form2" />
      </div>
    </div>
  </div>
  
</template>
<script>
import ContactForm from "../../../molecules/Form/FormContact.vue";
import ContactInfo from "../../../molecules/ContactInfo/ContactInfo.vue";

export default {
  components: {
    ContactForm,
    ContactInfo,
  },
};
</script>
<style scoped="scoped">
.contact-info {
  z-index: 1;
  margin-top: 20px;
}
.Minicart_button {
  width: 50% !important;
}
.contact-page-form input {
  width: 250px !important;
  margin-bottom: 30px;
}

.contact-section2 {
  padding-top: 60px !important;
  padding-right: 15px;
  padding-bottom: 85px;
}
.contact-section2 button {
  width: 100px !important;
}
.col-info {
  order: 1;
}
.col-form {
  order: 2;
padding-left:220px;
}:deep(.form-control){
  padding:20px!important;
  border:none;
}

@media (max-width: 767.98px) {
  .contact-info {
    margin: 0;
    display: flex !important;
    position: relative !important;
  }
  .contact-form{
    margin-bottom: 30px!important;
    
  }
  .contact-section2 {
    display: flex !important;
    flex-direction: column !important;
    align-items:center;
  }
  .contact-form2 {
    position: relative !important;
  }
  .contact-page-form2 {
    display: flex !important;
    flex-direction: column !important;
  }
  .col-info {
    order: 2;
    width:100%!important;
  }
  .col-form {
    order: 1;
    width: 100% !important;
    padding:0!important;
  }
}
@media (min-width: 768px) and (max-width: 1024px) {
.contact-info {
  width: 300px !important;
}

:deep(.contact-info .info-details){
  padding:0px!important;
}
:deep(.contact-info-title ){
  font-size:34px!important;
}
}
</style>
