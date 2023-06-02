import ButtonDouble from "./ButtonDouble.vue";
export default {
  component: ButtonDouble,
  title: "Components/Atoms/Button/DoubleOptions",
  
};

export const DoubleOptions = (args) => ({
  components: { ButtonDouble },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: '<ButtonDouble v-bind="args" />',
});
