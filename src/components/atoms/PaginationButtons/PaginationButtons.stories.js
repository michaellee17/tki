import PaginationButtons from "./PaginationButtons.vue";

export default {
  component: PaginationButtons,
  title: "Components/Atoms/PaginationButtons",
  parameters: {
    backgrounds: { default: 'light' }
  }
};

export const Default = (args) => ({
  components: { PaginationButtons },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: '<PaginationButtons v-bind="args" />',
});
Default.args = {
  pageNumbers: 20
}