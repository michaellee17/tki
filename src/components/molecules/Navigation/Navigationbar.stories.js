import Navigationbar from "./Navigationbar.vue";

export default {
  component: Navigationbar,
  title: "Components/Molecules/Navigation/Navigationbar",
  parameters: {
    backgrounds: { default: "light" },
  },
};

export const Default = (args) => ({
  components: { Navigationbar },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: '<Navigationbar v-bind="args"/>',
});
