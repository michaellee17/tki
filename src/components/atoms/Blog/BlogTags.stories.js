import BlogTags from "./BlogTags.vue";

export default {
  component: BlogTags,
  title: "Components/Atoms/Blog/Tags",
  parameters: {
    backgrounds: { default: "light" },
  },
};

export const Default = (args) => ({
  components: { BlogTags },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: '<BlogTags :items="args.tags" />',
});

Default.args = {
  tags: [
    { id: 1, name: "Phone" },
    { id: 1, name: "Cars" },
    { id: 1, name: "Efficent" },
    { id: 1, name: "Case" },
  ],
};
