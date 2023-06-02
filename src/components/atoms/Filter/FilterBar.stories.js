import FilterBar from "./FilterBar.vue";
import ButtonDouble from "../Button/ButtonDouble.vue"

export default {
  component: FilterBar,
  subcomponents: { ButtonDouble },
  title: "Components/Atoms/Filter/Bar",
  parameters: {
    backgrounds: { default: "light" },
  },
};

export const Default = (args) => ({
  components: { FilterBar,ButtonDouble },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template:
    '<filter-bar style="width:500px;" :itemsShowing="10" :totalResults="500" ><template v-slot:left><ButtonDouble/></template></filter-bar>',
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
