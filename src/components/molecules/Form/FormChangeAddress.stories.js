import FormChangeAddress from "./FormChangeAddress.vue";
import { useStore } from "vuex";

export default {
  component: FormChangeAddress,
  title: "Components/Molecules/Form/Change Address",
  parameters: {
    backgrounds: { default: "light" },
  },
};

export const Default = (args) => ({
  components: { FormChangeAddress },
  setup() {
    let $store = useStore();
    let items = $store.state.cart.items;
    //👇 The args will now be passed down to the template
    return { args, items };
  },
  template: `    
  <FormChangeAddress style="width:700px;" />`,
});
