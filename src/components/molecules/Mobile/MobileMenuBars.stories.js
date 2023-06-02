import MobileMenuBars from "./MobileMenuBars.vue";

export default {
  component: MobileMenuBars,
  title: "Components/Molecules/MobileOnly/MenuBars",
  parameters: {
    backgrounds: { default: "light" },
    layout: "fullscreen",
    viewport: {
      defaultViewport: 'landscape',
    },
  },
};

export const Default = (args) => ({
  components: { MobileMenuBars },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: '<MobileMenuBars v-bind="args"/>',
});
