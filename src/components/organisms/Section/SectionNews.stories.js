import SectionNews from "./SectionNews.vue";

export default {
  component: SectionNews,
  title: "Components/Organisms/Section/News",
  parameters: {
    backgrounds: { default: "light" },
    layout: "fullscreen"
  },
};

export const Default = (args) => ({
  components: { SectionNews },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template:
    '<SectionNews v-bind="args" />',
});