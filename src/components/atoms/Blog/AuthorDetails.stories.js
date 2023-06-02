import AuthorDetails from "./AuthorDetails.vue";

export default {
  component: AuthorDetails,
  title: "Components/Atoms/Blog/AuthorDetails",
  parameters: {
    backgrounds: { default: 'light' }
  }
};

export const Default = (args) => ({
  components: { AuthorDetails },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: '<AuthorDetails v-bind="args" />',
});

Default.args = {
  authorName: 'Melanie Martinez',
  category: 'Cars',
  date: '14/04/2021'
}