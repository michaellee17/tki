import ProductVendorInfo from "./ProductVendorInfo.vue";

export default {
  component: ProductVendorInfo,
  title: "Components/Atoms/Product/VendorInfo",
  parameters: {
    backgrounds: { default: 'light' }
  }
};

export const Default = (args) => ({
  components: { ProductVendorInfo },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: '<ProductVendorInfo style="min-width:600px;" v-bind="args" />',
});

Default.args = {
  storeName: "Modeltheme",
  vendor: "modeltheme",
  address: "Somewhere in the universe",
  ratingScore: 4,
  ratingNum: 1515,
}