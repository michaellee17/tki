import FloatingMenuMobile from "./FloatingMenuMobile.vue";

export default {
  component: FloatingMenuMobile,
  title: "Components/Molecules/MobileOnly/FloatingMenuMobile",
  parameters: {
    backgrounds: { default: "light" },
    layout: "fullscreen",
    viewport: {
      defaultViewport: 'landscape',
    },
  },
};

export const Default = (args) => ({
  components: { FloatingMenuMobile },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: '<FloatingMenuMobile v-bind="args"/>',
});
