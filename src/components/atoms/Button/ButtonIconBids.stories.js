import ButtonIconBids from "./ButtonIconBids.vue";

export default {
  component: ButtonIconBids,
  title: "Components/Atoms/Button/IconBids",
  parameters: {
    backgrounds: { default: "light" },
  },
};

export const Default = (args) => ({
  components: { ButtonIconBids },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: '<ButtonIconBids v-bind="args" />',
});

Default.args = {
  id: 1,
  product: {type:'auction'}
}