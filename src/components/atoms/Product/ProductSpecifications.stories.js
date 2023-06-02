import ProductSpecifications from "./ProductSpecifications.vue";

export default {
  component: ProductSpecifications,
  title: "Components/Atoms/Product/Specification Table",
  parameters: {
    backgrounds: { default: 'light' }
  }
};

export const Default = (args) => ({
  components: { ProductSpecifications },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: '<ProductSpecifications style="width:500px;" v-bind="args" />',
});

Default.args = {
  items: [
    {title: "Color", desc: "Black"},
    {title: "Condition", desc: "New"}
  ]
}