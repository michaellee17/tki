import FormRecoverPassword from "./FormRecoverPassword.vue";
import { useStore } from "vuex";

export default {
  component: FormRecoverPassword,
  title: "Components/Molecules/Form/Recover password",
  parameters: {
    backgrounds: { default: "light" },
  },
};

export const Default = (args) => ({
  components: { FormRecoverPassword },
  setup() {
    let $store = useStore();
    let items = $store.state.cart.items;
    //👇 The args will now be passed down to the template
    return { args, items };
  },
  template: `    
  <FormRecoverPassword style="width:500px;" />`,
});
