import CartContent from "./CartContent.vue";
import { useStore } from "vuex";

export default {
  component: CartContent,
  title: "Components/Molecules/Cart/Content",
  parameters: {
    backgrounds: { default: "light" },
  },
};

export const Default = (args) => ({
  components: { CartContent },
  setup() {
    let $store = useStore();
    let items = $store.state.cart.items;
    //👇 The args will now be passed down to the template
    return { args, items };
  },
  template: `    
  <div class="position-relative">
  <CartContent
    style="visibility: visible;
    opacity: 1;"
    class="active mycart-content"
    :items="items"
    :subtotal="'187,124.00 US$    '"
  />
  </div>`,
});
