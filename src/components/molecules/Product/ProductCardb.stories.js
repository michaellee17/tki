import ProductCardb from "./ProductCardb.vue";

export default {
  component: ProductCardb,
  title: "Components/Molecules/Product/CardB",
  parameters: {
    backgrounds: { default: "light" },
  },
};

export const Default = (args) => ({
  components: { ProductCardb },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: `    
  <ProductCardb style="width:450px;"  v-bind="args"/>`,
});

Default.args = {
  id: 1,
  photos: [
    "/images/products/desktop.jpg",
    "/images/products/mouse.jpg",
  ],
  endDate: new Date("5/Aug/2021"),
  name: "Gaming Computer",
  currentBid: 24.99,
  type: 'auction'
};
