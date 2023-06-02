import BlogAddComment from "./BlogAddComment.vue";

export default {
  component: BlogAddComment,
  title: "Components/Molecules/Blog/AddComment",
  parameters: {
    backgrounds: { default: "light" },
  },
};

export const Default = (args) => ({
  components: { BlogAddComment },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template:
    '<BlogAddComment />',
});