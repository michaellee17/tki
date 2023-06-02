import CartItemBig from "./CartItemBig.vue";
export default {
  component: CartItemBig,
  title: "Components/Atoms/Cart/CartItemBig",
  parameters: {
    backgrounds: { default: 'light' }
  }
};

export const Default = (args) => ({
  components: { CartItemBig },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: '<CartItemBig v-bind="args" style="width:800px;" />',
});

Default.args= {
  photos:["images/products/tablet.jpg"],
  name: "Super Computer",
  vendor: "modeltheme",
  qty: 23,
  price: 499.99,
  id: 1
}