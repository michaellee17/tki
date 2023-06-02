import FilterListCategoryAndSubcategories from "./FilterListCategoryAndSubcategories.vue";
import FilterTitle from "./FilterTitle.vue";

export default {
  component: FilterListCategoryAndSubcategories,
  subcomponents: { FilterTitle },
  title: "Components/Atoms/Filter/ListCategoryAndSubcategories",
  parameters: {
    backgrounds: { default: "light" },
  },
};

export const Default = (args) => ({
  components: { FilterListCategoryAndSubcategories, FilterTitle },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template:
    '<FilterTitle :title="`Categories`" /> <FilterListCategoryAndSubcategories :items="args.categories" :categoryClasses="`p-0 mt-3`" />',
});

Default.args = {
  categories: [
    {
      name: "Phones",
      subcategories: [
        "Data Cables",
        "Mobile Chargers",
        "Mobile Phones",
        "Power Banks",
      ],
    },
  ],
};
