import SectionContact1 from "./SectionContact1.vue";

export default {
  component: SectionContact1,
  title: "Components/Organisms/Section/Contact/Contact1",
  parameters: {
    backgrounds: { default: "light" },
    layout: "fullscreen"
  },
};

export const Default = (args) => ({
  components: { SectionContact1 },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template:
    '<SectionContact1 v-bind="args" />',
});