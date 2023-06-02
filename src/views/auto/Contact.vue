<template>
  <layout-default>
    
    <div class="container contact-container">
      <SectionContact2 />
    </div>
    <div class="container d-flex about-team justify-content-center">
      <SectionOurTeam class="section-team" />
    </div>
    <div class="fluid-container about-testimonial">
      <div class="container p-0">
        <div class="row d-flex justify-content-between">
          <div class="col-md-6 testimonial-message p-0">
            <section-testimonials
              text="Yahoo Inc. is an American multinational Internet corporation headquartered in Sunnyvale, California.
          It is globally known for its Web portal, search engine Yahoo Search."
              imageLocation="images/testimonials/member-team1.jpg"
              name="Martin Culich"
              position="Digita Marketed"
            />
          </div>
        <div class="col-md-6 contact-features ms-2">
            <div class="row section-features d-flex flex-row float-end">
              <div class="col-6 col-md-6 col-sm-4 d-flex first-column flex-column ">
                <Characteristic
                  class="features"
                  :imageSrc="'images/features/deliveries.png'"
                  :title="'8523'"
                  :subtitle="'Auctions'"
                />
                <Characteristic
                  class="features"
                  :imageSrc="'images/features/deliveries.png'"
                  :title="'8523'"
                  :subtitle="'Seller Account'"
                />
                <Characteristic
                  class="features"
                  :imageSrc="'images/features/money.png'"
                  :title="'458'"
                  :subtitle="'Users Helped'"
                />
              </div>
              <div class="col-6 col-md-6 col-sm-4 d-flex second-column flex-column ">
                <Characteristic
                  class="features"
                  :imageSrc="'images/features/deliveries.png'"
                  :title="'116'"
                  :subtitle="'Employees'"
                />
                <Characteristic
                  class="features"
                  :imageSrc="'images/features/deliveries.png'"
                  :title="'4523'"
                  :subtitle="'Total Accounts'"
                />
                <Characteristic
                  class="features"
                  :imageSrc="'images/features/money.png'"
                  :title="'458'"
                  :subtitle="'Problems Solved'"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </layout-default>
</template>

<script>
import LayoutDefault from "../../components/organisms/LayoutDefault/LayoutDefault.vue";
import SectionContact2 from "../../components/organisms/Section/Contact/SectionContact2.vue";
import SectionOurTeam from "../../components/organisms/Section/SectionOurTeam.vue";
import Characteristic from "../../components/atoms/Characteristic/Characteristic.vue";
import SectionTestimonials from "../../components/organisms/Section/SectionTestimonials.vue";

export default {
  beforeCreate() {
    document.title = "Contact Us - iBid";
  },
  components: {
    LayoutDefault,
    SectionContact2,
    SectionOurTeam,
    Characteristic,
    SectionTestimonials,
  },
};
</script>
<style scoped>
.section-features {
  width: 85%;
}
.testimonial-message {
  max-width: 700px;
}
.contact-container{
  margin-bottom:80px;
  margin-top:80px;
}
:deep(.features img) {
  width: 50px !important;
  height:auto!important;
}
:deep(.features h5) {
  font-size: 30px;
}
:deep(.features p) {
  font-size: 15px !important;
  text-transform: uppercase !important;
}
.section-team {
  margin-bottom: 100px !important;
}
.about-testimonial {
  padding-left: 118px;
  padding-right: 118px;
  padding: 70px 83px 70px;
  background-color: #f9f9f9;
  width: 100%;
}

@media (max-width: 767.98px) {
    .section-features {
    width:100%;
  }
  .section-features {
   padding:0px!important;
    margin:50px 0;
  }
  .section-features{
    display:flex!important;
    justify-content: center!important;
  }

  :deep(.feature){
    display:flex;
    justify-content: unset!important;
  }
 
  .section-team {
    display: none !important;
  }
  .testimonial-message,.section-features{
    padding:0 10px!important;
  }
  :deep(.testimonial-message){
    margin:50px 0px!important;
  }
  :deep(.testimonial){
    padding:0px 10px;
  }
  .about-features {
    padding: 20px !important;
  }
  .about-team {
    display: none !important;
  }
  .about-testimonial {
    padding: 50px 15px 0 0;
  }
  .feature-list {
    display: block !important;
    flex-direction: column !important;
  }
  .section-feature {
    padding: 35px 15px 65px;
  }
  .features h5 {
    font-size: 20px;
  }
  .features {
    flex-direction: column !important;
  }
  .section-features {
    padding-top: 20px;
  }
  .contact-features{
    padding:0 10px!important;
  }
  .first-column,.second-column{
    padding:0px;
  }
}
@media (min-width: 768px) and (max-width: 1024px) {
  .about-team {
    display: none !important;
  }
  .first-column {
    padding:5px;
  }
  .second-column {
    padding:5px;
  }
  .about-testimonial {
    padding:70px 10px!important;
  }
  :deep(.feature){
    margin:0px!important;
  }


}
</style>
