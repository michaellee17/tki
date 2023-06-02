import SectionBlogComments from "./SectionBlogComments.vue";

export default {
  component: SectionBlogComments,
  title: "Components/Organisms/Section/BlogComments",
  parameters: {
    backgrounds: { default: "light" },
  },
};

export const Default = (args) => ({
  components: { SectionBlogComments },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template:
    '<SectionBlogComments v-bind="args" />',
});