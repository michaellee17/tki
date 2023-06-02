import FormRegister from "./FormRegister.vue";
import { useStore } from "vuex";

export default {
  component: FormRegister,
  title: "Components/Molecules/Form/Register",
  parameters: {
    backgrounds: { default: "light" },
  },
};

export const Default = (args) => ({
  components: { FormRegister },
  setup() {
    let $store = useStore();
    let items = $store.state.cart.items;
    //👇 The args will now be passed down to the template
    return { args, items };
  },
  template: `    
  <FormRegister style="width:600px;" />`,
});
