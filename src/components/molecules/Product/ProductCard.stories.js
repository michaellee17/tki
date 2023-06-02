import ProductCard from "./ProductCard.vue";

export default {
  component: ProductCard,
  title: "Components/Molecules/Product/CardA",
  parameters: {
    backgrounds: { default: "light" },
  },
};

export const Default = (args) => ({
  components: { ProductCard },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: `    
  <ProductCard style="width:250px;"  v-bind="args"/>`,
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
