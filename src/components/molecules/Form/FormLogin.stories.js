import FormLogin from "./FormLogin.vue";
import { useStore } from "vuex";

export default {
  component: FormLogin,
  title: "Components/Molecules/Form/Login",
  parameters: {
    backgrounds: { default: "light" },
  },
};

export const Default = (args) => ({
  components: { FormLogin },
  setup() {
    let $store = useStore();
    let items = $store.state.cart.items;
    //👇 The args will now be passed down to the template
    return { args, items };
  },
  template: `    
  <FormLogin />`,
});
