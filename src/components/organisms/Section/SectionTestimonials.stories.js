import SectionTestimonials from "./SectionTestimonials.vue";

export default {
  component: SectionTestimonials,
  title: "Components/Organisms/Section/Testimonials",
  parameters: {
    backgrounds: { default: "light" },
  },
};

export const Default = (args) => ({
  components: { SectionTestimonials },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template:
    '<SectionTestimonials style="width:500px;" v-bind="args" />',
});