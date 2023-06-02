import CardCategory from "./CardCategory.vue";

export default {
  component: CardCategory,
  title: "Components/Molecules/Card/Category",
  parameters: {
    backgrounds: { default: "light" },
  },
};

export const Default = (args) => ({
  components: { CardCategory },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: '<CardCategory v-bind="args" />',
});
Default.args = {
  title: "Phones",
  productsNo: 50,
};
