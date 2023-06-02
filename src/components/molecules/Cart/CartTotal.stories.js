import CartTotal from "./CartTotal.vue";
import { useStore } from "vuex";

export default {
  component: CartTotal,
  title: "Components/Molecules/Cart/Total",
  parameters: {
    backgrounds: { default: "light" },
  },
};

export const Default = (args) => ({
  components: { CartTotal },
  setup() {
    let $store = useStore();
    let items = $store.state.cart.items;
    //👇 The args will now be passed down to the template
    return { args, items };
  },
  template: `    
  <CartTotal style="width:700px;" />`,
});
