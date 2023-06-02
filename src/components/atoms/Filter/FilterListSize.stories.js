import FilterListSize from "./FilterListSize.vue";
import FilterTitle from "./FilterTitle.vue";

export default {
  component: FilterListSize,
  subcomponents: { FilterTitle },
  title: "Components/Atoms/Filter/ListSize",
  parameters: {
    backgrounds: { default: "light" },
  },
};

export const Default = (args) => ({
  components: { FilterListSize, FilterTitle },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template:
    '<FilterTitle :title="`Categories`" /> <FilterListSize class="p-0 mt-3" v-bind="args" />',
});

Default.args = {
  items: [
    { id: 1, name: "Large", count: 2 },
    { id: 1, name: "Medium", count: 42 },
    { id: 1, name: "Small", count: 22 },
  ],
};
