import ButtonOutline from "./ButtonOutline.vue";
export default {
  component: ButtonOutline,
  title: "Components/Atoms/Button/Outline",
  // parameters: {
  //   backgrounds: { default: "light" },
  // },
  argTypes: {
    size: {
      options: ["big", "normal", "small"],
      control: { type: "select" },
    },
  },
};

export const Outline = (args) => ({
  components: { ButtonOutline },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: '<ButtonOutline v-bind="args" />',
});
