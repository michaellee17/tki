import ProductCardWide from "./ProductCardWide.vue";

export default {
  component: ProductCardWide,
  title: "Components/Molecules/Product/CardWide",
  parameters: {
    backgrounds: { default: "light" },
  },
};

export const Default = (args) => ({
  components: { ProductCardWide },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: `    
  <ProductCardWide style="width:60%;" class="mx-auto" v-bind="args"/>`,
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
  type: 'auction',
  description: '<p>Going forward knowledge is power or we need to button up our approach old boys club. Please use “solutionise” instead of solution ideas! 🙂 draw a line in the sand, for take five, punch the tree, and come back in here with a clear head. Out of scope data-point work flows , nor critical mass, and time to open the kimono yet move the needle. </p>'
};
