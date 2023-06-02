import FilterListTags from "./FilterListTags.vue";
import FilterTitle from "./FilterTitle.vue";

export default {
  component: FilterListTags,
  subcomponents: {FilterTitle},
  title: "Components/Atoms/Filter/ListTags",
  parameters: {
    backgrounds: { default: "light" },
  },
};

export const Default = (args) => ({
  components: { FilterListTags, FilterTitle },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: '<FilterTitle :title="`Categories`" /> <FilterListTags class="p-0 mt-3" v-bind="args" />',
});

Default.args = {
  items: [
    { id: 1, name: "Phone", location: "test" },
    { id: 1, name: "Cars" },
    { id: 1, name: "Efficent" },
    { id: 1, name: "Case" },
  ],
};
