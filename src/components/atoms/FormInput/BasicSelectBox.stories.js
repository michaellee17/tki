import BasicSelectBox from "./BasicSelectBox.vue";
import {ref} from "vue"

export default {
  component: BasicSelectBox,
  title: "Components/Atoms/Form/SelectBox",
  parameters: {
    backgrounds: { default: 'light' }
  },
};

export const Default = (args) => ({
  components: { BasicSelectBox},
  setup() {
    let selectedValue = ref('')

    //👇 The args will now be passed down to the template
    return { args, selectedValue };
  },
  template: `<BasicSelectBox :options="args.sortOptions" v-model="selectedValue ?? -1"/>`,
});

Default.args = {
  sortOptions: [
    { name: "Sort by popularity", value: "popularity" },
    { name: "Sort by latest", value: "date" },
    { name: "Sort by price: low to high", value: "price" },
    { name: "Sort by price: high to low", value: "price_desc" },
    { name: "Sort by current bid: Low to high", value: "bid_asc" },
    { name: "Sort by current bid: High to low", value: "bid_desc" },
    { name: "Sort auction by ending soonest", value: "auction_end" },
    { name: "Sort auction by recently started", value: "auction_started", default: true },
  ],
};
