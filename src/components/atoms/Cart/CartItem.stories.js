import CartItem from "./CartItem.vue";
export default {
  component: CartItem,
  title: "Components/Atoms/Cart/CartItem",
  parameters: {
    backgrounds: { default: 'light' }
  }
};

export const Default = (args) => ({
  components: { CartItem },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: '<CartItem v-bind="args" />',
});

Default.args= {
  photos: ["/images/products/asus-laptop.jpg",],
  name: "Super Computer",
  id: 1,
  qty: 23,
  price: 499.99,
}