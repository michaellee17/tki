<template>
  <layout-default>
    <jumbotron
      :button-location="'/'"
      :text="
        'T-KI 致力於打造最專業、最順暢的購票平台，希望帶給使用者最棒的服務體驗。不再連不上售票網站；不再為了在機器前排隊數小時，不論在學校、公司、家裡、通勤中，只要在電腦前、手機旁，連著網路，就能在開賣的第一時間，上來買票！'
      "
      :title="'關於我們'" />

    <!-- <div class="container about-logo-message">
      <logo-with-message
        :message="
          'Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service. Objectively innovate empowered manufactured products whereas parallel platforms.'
        "
      ></logo-with-message>
    </div> -->

    <div class="container about-features mb-5">
      <SectionFeatures />
    </div>

    <!-- <div class="container d-flex about-team justify-content-center">
      <SectionOurTeam />
    </div> -->

    <!-- <div class="fluid-container about-testimonial">
      <div class="container p-0">
        <div class="row d-flex justify-content-between">

          <div class="col-md-6 testimonial-message p-0 ">
            <section-testimonials
              text="Yahoo Inc. is an American multinational Internet corporation headquartered in Sunnyvale, California.
          It is globally known for its Web portal, search engine Yahoo Search."
              imageLocation="images/testimonials/member-team1.jpg"
              name="Martin Culich"
              position="Digita Marketed"
            />
          </div>

          <div class="col-md-6 contact-features">
            <div class="row section-features d-flex flex-row float-end">
              <div
                class="col-6 d-flex first-column flex-column "
              >
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
              <div
                class="col-6 d-flex second-column flex-column "
              >
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
    </div> -->
  </layout-default>
</template>

<script>
import "bootstrap/dist/js/bootstrap.bundle";
import Jumbotron from "../../components/molecules/Jumbotron/JumbotronBox.vue";
import LogoWithMessage from "../../components/molecules/Jumbotron/LogoWithMessage.vue";
import SectionFeatures from "../../components/organisms/Section/SectionFeatures.vue";
import Characteristic from "../../components/atoms/Characteristic/Characteristic.vue";
import LayoutDefault from "../../components/organisms/LayoutDefault/LayoutDefault.vue";
import SectionOurTeam from "../../components/organisms/Section/SectionOurTeam.vue";
import SectionTestimonials from "../../components/organisms/Section/SectionTestimonials.vue";

export default {
  components: {
    LayoutDefault,
    Jumbotron,
    LogoWithMessage,
    Characteristic,
    SectionFeatures,
    SectionOurTeam,
    SectionTestimonials,
  },
  created() {
    document.title = "關於我們 - T-KI";
  },
};
</script>
<style scoped="scoped">
.section-features {
  width: 85%;
}
.about-features,
.about-team {
  margin: 90px auto 0;
}
.features {
  margin-bottom: 10px;
}
.testimonial-message {
  max-width: 700px;
}
.features img {
  width: 55px !important;
  height: 60px !important;
}

.about-testimonial {
  padding: 70px 10px 70px;
  background-color: #f9f9f9;
  width: 100%;
}
:deep(.features h5) {
  font-size: 30px;
}
:deep(.features p) {
  font-size: 15px !important;
  text-transform: uppercase !important;
}
@media screen and (max-width: 768px) {
  .section-features {
    width:100%;
  }
  :deep(.features-col) .about-features {
    padding: 0 10px !important;
  }
  .about-testimonial {
    padding: 0px !important;
  }
  :deep(.feature) {
    display: flex;
    /* justify-content: unset !important; */
  }
  .testimonial-message,
  .section-features {
    padding: 0 10px !important;
  }
  :deep(.testimonial-message) {
    margin: 50px 0px !important;
  }
  :deep(.testimonial) {
    padding: 0px 10px;
  }
  .about-team {
    display: none !important;
  }
  .about-testimonial {
    padding: 50px 0;
  }
  .feature-list {
    display: block !important;
    flex-direction: column !important;
  }
  .features h5 {
    font-size: 20px;
  }
  .features {
    flex-direction: column !important;
  }
  .section-features {
    margin: 50px 0 !important;
  }
  .features-col {
    display: flex !important;
    justify-content: center !important;
  }
  .first-column,
  .second-column {
    padding: 0 !important;
    align-items: flex-start;
  }
  .feature-list {
    display: flex !important;
    justify-content: center;
  }
}
@media (min-width: 768px) and (max-width: 1024px) {
  .about-team {
    display: none !important;
  }
  .first-column {
    padding: 5px;
  }
  .second-column {
    padding: 5px;
  }
  .about-testimonial {
    padding: 70px 30px !important;
  }
  :deep(.feature) {
    margin: 0px !important;
  }
}
</style>
