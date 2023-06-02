import Cart from "./Cart.vue";

export default {
  component: Cart,
  title: "Components/Molecules/Cart/Cart",
  parameters: {
    backgrounds: { default: "light" },
  },
};

export const Default = (args) => ({
  components: { Cart },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template:
    '<Cart />',
});