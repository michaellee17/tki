import ButtonFilled from "./ButtonFilled.vue";
export default {
  component: ButtonFilled,
  title: "Components/Atoms/Button/Filled",
  argTypes: {
    size: {
      options: ['big', 'normal', 'small'],
      control: { type: 'select' }
    }
  }
};

export const Filled = (args) => ({
  components: { ButtonFilled },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: '<ButtonFilled v-bind="args" />',
});
