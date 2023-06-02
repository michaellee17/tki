import Grid from "./Grid.vue";
import { products } from "../../../data/auctions.json";

export default {
  component: Grid,
  title: "Components/Molecules/Layout/Grid",
  parameters: {
    backgrounds: { default: "light" },
  },
};

export const Default = (args) => ({
  components: { Grid },
  setup() {
    //👇 The args will now be passed down to the template
    return { args, products };
  },
  template: '<Grid v-bind="args" :items="products" />',
});
Default.args = {
  placeholder: "Type here to search...",
};
