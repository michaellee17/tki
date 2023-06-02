<template>
  <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide v-for="testimonial in testimonials" :key="testimonial">
      <Testimonial v-bind="testimonial" />
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper.min.css";
import Testimonial from "../../atoms/TestimonialMessage/TestimonialMessage.vue";
import { testimonials } from "../../../data/testimonials.json";

export default {
  components: { Testimonial, Swiper, SwiperSlide },
  props: {
    swiperOptions: {
      type: Object,
    },
  },
  data() {
    return {
      testimonials,
    };
  },
};
</script>
