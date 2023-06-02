import TestimonialMessage from "./TestimonialMessage.vue";

export default {
  component: TestimonialMessage,
  title: "Components/Atoms/TestimonialMessage",
  parameters: {
    backgrounds: { default: "light" },
  },
};

export const Default = (args) => ({
  components: { TestimonialMessage },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: '<TestimonialMessage v-bind="args" />',
});

Default.args = {
  name: "Martin Culich",
  position: "Digital Marketed",
  text:
    "Yahoo Inc. is an American multinational Internet corporation headquartered in Sunnyvale, California.          It is globally known for its Web portal, search engine Yahoo Search.",
  imageSrc:
    "/images/membersteam/member-team1.jpg",
};
