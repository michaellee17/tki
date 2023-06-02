import ButtonQuickActionsPack from "./ButtonQuickActionsPack.vue";
export default {
  component: ButtonQuickActionsPack,
  title: "Components/Atoms/Button/ButtonQuickActionsPack",
};

export const Default = (args) => ({
  components: { ButtonQuickActionsPack },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: '<ButtonQuickActionsPack v-bind="args" />',
});
Default.args = {
  id: 1,
  product: {type:'auction'}
}