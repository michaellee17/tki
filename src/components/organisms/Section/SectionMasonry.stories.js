import SectionMasonry from "./SectionMasonry.vue";

export default {
  component: SectionMasonry,
  title: "Components/Organisms/Section/Masonry",
  parameters: {
    backgrounds: { default: "light" },
    layout: "fullscreen"
  },
};

export const Default = (args) => ({
  components: { SectionMasonry },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template:
    '<SectionMasonry v-bind="args" />',
});