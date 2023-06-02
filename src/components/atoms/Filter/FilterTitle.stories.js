import FilterTitle from "./FilterTitle.vue";
export default {
  component: FilterTitle,
  title: "Components/Atoms/Filter/Title",
  parameters: {
    backgrounds: { default: 'light' }
  }
};

export const Default = (args) => ({
  components: { FilterTitle },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: '<FilterTitle :title="`Default title`" />',
});