import SectionFeatures from "./SectionFeatures.vue";

export default {
  component: SectionFeatures,
  title: "Components/Organisms/Section/Features",
  parameters: {
    backgrounds: { default: "light" },
    layout: "fullscreen"
  },
};

export const Default = (args) => ({
  components: { SectionFeatures },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template:
    '<SectionFeatures v-bind="args" />',
});