import SectionContact2 from "./SectionContact2.vue";

export default {
  component: SectionContact2,
  title: "Components/Organisms/Section/Contact/Contact2",
  parameters: {
    backgrounds: { default: "light" },
    layout: "fullscreen"
  },
};

export const Default = (args) => ({
  components: { SectionContact2 },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template:
    '<div class="container position-relative"><SectionContact2 v-bind="args" /></div>',
});