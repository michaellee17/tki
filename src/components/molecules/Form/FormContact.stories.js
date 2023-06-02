import FormContact from "./FormContact.vue";
import { useStore } from "vuex";

export default {
  component: FormContact,
  title: "Components/Molecules/Form/Contact",
  parameters: {
    backgrounds: { default: "light" },
  },
};

export const Default = (args) => ({
  components: { FormContact },
  setup() {
    let $store = useStore();
    let items = $store.state.cart.items;
    //👇 The args will now be passed down to the template
    return { args, items };
  },
  template: `    
  <FormContact />`,
});
