<template>
  <layout-default>
    <jumbotron
      :buttonLocation="'/contact'"
      :text="
        'Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline. Quickly maximize timely deliverables for real-time schemas. <br/><br/> Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed the start-up mentality to derive convergence.'
      "
      :title="'About us'"
    ></jumbotron>

    <div class="container about-logo-message">
      <logo-with-message
        :message="
          'Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service. Objectively innovate empowered manufactured products whereas parallel platforms.'
        "
      ></logo-with-message>
    </div>

    <div class="container about-features">
      <SectionFeatures />
    </div>

    <div class="container d-flex about-team justify-content-center">
      <SectionOurTeam />
    </div>

    <div class="fluid-container about-testimonial">
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
    </div>
  </layout-default>
</template>

<script>
import Jumbotron from "../../components/molecules/Jumbotron/JumbotronBox.vue";
import LogoWithMessage from "../../components/molecules/Jumbotron/LogoWithMessage.vue";
import SectionFeatures from "../../components/organisms/Section/SectionFeatures.vue";
import Characteristic from "../../components/atoms/Characteristic/Characteristic.vue";
import LayoutDefault from "../../components/organisms/LayoutDefault/LayoutDefault.vue";
import SectionOurTeam from "../../components/organisms/Section/SectionOurTeam.vue";
import SectionTestimonials from "../../components/organisms/Section/SectionTestimonials.vue";

export default {
  created() {
    document.title = "About us - iBid";
  },
  components: {
    LayoutDefault,
    Jumbotron,
    LogoWithMessage,
    Characteristic,
    SectionFeatures,
    SectionOurTeam,
    SectionTestimonials,
  },
};
</script>
<style scoped="scoped">
.section-features {
  width: 85%;
}
.about-features,
.about-team {
  margin-bottom: 90px;
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
    justify-content: unset !important;
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
