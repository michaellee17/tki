import LayoutDefault from "./LayoutDefault.vue";

export default {
  component: LayoutDefault,
  title: "Components/Organisms/LayoutDefault",
  parameters: {
    backgrounds: { default: "light" },
    layout: "fullscreen"
  },
};

export const Default = (args) => ({
  components: { LayoutDefault },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template:
    '<LayoutDefault />',
});