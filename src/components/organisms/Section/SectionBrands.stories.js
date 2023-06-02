import SectionBrands from "./SectionBrands.vue";

export default {
  component: SectionBrands,
  title: "Components/Organisms/Section/Brands",
  parameters: {
    backgrounds: { default: "light" },
    layout: "fullscreen"
  },
};

export const Default = (args) => ({
  components: { SectionBrands },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template:
    '<SectionBrands v-bind="args" />',
});